import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export interface LiquidTypographySegment {
  text: string;
  color?: string;
}

export interface LiquidTypographyProps {
  text: string;
  segments?: LiquidTypographySegment[];
  className?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: number;
  distortionRadius?: number;
  distortionStrength?: number;
  cursorSmoothing?: number;
  elasticRecovery?: number;
  rgbSeparation?: number;
  trailStrength?: number;
  noiseAmount?: number;
  velocitySensitivity?: number;
  backgroundColor?: string;
}

type Vec2 = { x: number; y: number };
type TrailPoint = Vec2 & { life: number };

const TRAIL_COUNT = 7;

const vertexShaderSource = `
  attribute vec2 aPosition;
  varying vec2 vUv;

  void main() {
    vUv = aPosition * 0.5 + 0.5;
    gl_Position = vec4(aPosition, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision highp float;

  varying vec2 vUv;
  uniform sampler2D uTexture;
  uniform vec2 uMouse;
  uniform vec2 uPrevMouse;
  uniform vec2 uVelocity;
  uniform vec2 uResolution;
  uniform float uTime;
  uniform float uRadius;
  uniform float uStrength;
  uniform float uRgbSeparation;
  uniform float uTrailStrength;
  uniform float uNoiseAmount;
  uniform float uActivity;
  uniform vec3 uBackgroundColor;
  uniform vec3 uTrail[${TRAIL_COUNT}];

  float influence(vec2 uv, vec2 point, float radius) {
    vec2 delta = uv - point;
    delta.x *= uResolution.x / max(uResolution.y, 1.0);
    return 1.0 - smoothstep(radius * 0.12, radius, length(delta));
  }

  float softNoise(vec2 point) {
    float waveA = sin(point.y * 39.0 + uTime * 2.1);
    float waveB = sin(point.x * 27.0 - point.y * 18.0 - uTime * 1.35);
    float waveC = cos(point.x * 51.0 + point.y * 13.0 + uTime * 0.8);
    return (waveA + waveB + waveC) / 3.0;
  }

  void main() {
    float aspect = uResolution.x / max(uResolution.y, 1.0);
    float currentMask = influence(vUv, uMouse, uRadius);
    float previousMask = influence(vUv, uPrevMouse, uRadius * 0.92) * 0.62;
    float trailMask = 0.0;
    vec2 trailPull = vec2(0.0);

    for (int i = 0; i < ${TRAIL_COUNT}; i++) {
      float pointMask = influence(vUv, uTrail[i].xy, uRadius * (0.72 + uTrail[i].z * 0.28));
      float weighted = pointMask * uTrail[i].z;
      trailMask = max(trailMask, weighted);
      trailPull += (uMouse - uTrail[i].xy) * weighted;
    }

    float localMask = max(currentMask, max(previousMask, trailMask * uTrailStrength));
    localMask = localMask * localMask * (3.0 - 2.0 * localMask);

    vec2 velocity = uVelocity;
    float speed = min(length(velocity) * 8.0, 1.0);
    vec2 direction = normalize(velocity + vec2(0.00001));
    vec2 fromMouse = vUv - uMouse;
    vec2 aspectDelta = vec2(fromMouse.x * aspect, fromMouse.y);
    float radialDistance = max(length(aspectDelta), 0.0001);
    vec2 radial = vec2(aspectDelta.x / aspect, aspectDelta.y) / radialDistance;
    vec2 tangent = vec2(-radial.y / aspect, radial.x);
    float noise = softNoise(vUv * vec2(aspect, 1.0));

    float liveStrength = uStrength * uActivity;
    vec2 drag = -velocity * (0.34 + currentMask * 1.18);
    vec2 pressure = radial * (0.008 + speed * 0.022) * sin(radialDistance / max(uRadius, 0.001) * 3.14159);
    vec2 turbulence = tangent * noise * uNoiseAmount * (0.009 + speed * 0.018);
    vec2 trailDisplacement = trailPull * uTrailStrength * 0.16;
    vec2 displacement = (drag + pressure + turbulence + trailDisplacement) * localMask * liveStrength;

    vec2 displacedUv = vUv + displacement;
    float chroma = uRgbSeparation * (0.0022 + speed * 0.016) * localMask * uActivity;
    vec2 chromaDirection = direction * chroma;
    chromaDirection.x /= max(aspect, 1.0);
    vec2 edgeDirection = tangent * chroma * 0.62;

    vec4 base = texture2D(uTexture, displacedUv);
    vec4 redSample = texture2D(uTexture, displacedUv + chromaDirection + edgeDirection);
    vec4 cyanSample = texture2D(uTexture, displacedUv - chromaDirection);
    vec4 yellowSample = texture2D(uTexture, displacedUv + edgeDirection * 1.45);
    vec4 magentaSample = texture2D(uTexture, displacedUv - edgeDirection * 1.2);

    float colorEnergy = smoothstep(0.012, 0.34, speed * localMask * uActivity);
    vec3 spectral = vec3(
      redSample.a + yellowSample.a * 0.82 + magentaSample.a * 0.68,
      cyanSample.a * 0.92 + yellowSample.a * 0.72,
      cyanSample.a + magentaSample.a * 0.78
    );
    spectral = clamp(spectral, 0.0, 1.0);

    vec3 color = mix(base.rgb, spectral, colorEnergy * 0.92);
    float alpha = max(base.a, max(max(redSample.a, cyanSample.a), max(yellowSample.a, magentaSample.a)) * colorEnergy);
    vec3 composite = mix(uBackgroundColor, color, alpha);
    float cover = localMask * smoothstep(0.0, 0.16, uActivity);
    gl_FragColor = vec4(composite, cover);
  }
`;

const compileShader = (gl: WebGLRenderingContext, type: number, source: string) => {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
};

const createProgram = (gl: WebGLRenderingContext) => {
  const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
  if (!vertexShader || !fragmentShader) return null;

  const program = gl.createProgram();
  if (!program) return null;
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program);
    return null;
  }
  return program;
};

const hexToRgb = (value: string) => {
  const normalized = value.replace('#', '');
  const expanded = normalized.length === 3
    ? normalized.split('').map((character) => character + character).join('')
    : normalized;
  const numeric = Number.parseInt(expanded, 16);
  if (Number.isNaN(numeric)) return [1, 1, 1] as const;
  return [
    ((numeric >> 16) & 255) / 255,
    ((numeric >> 8) & 255) / 255,
    (numeric & 255) / 255,
  ] as const;
};

export const LiquidTypography: React.FC<LiquidTypographyProps> = ({
  text,
  segments,
  className = '',
  fontFamily,
  fontSize,
  fontWeight = 800,
  distortionRadius = 150,
  distortionStrength = 1.15,
  cursorSmoothing = 0.13,
  elasticRecovery = 0.09,
  rgbSeparation = 1.25,
  trailStrength = 0.78,
  noiseAmount = 0.8,
  velocitySensitivity = 1.15,
  backgroundColor = '#ffffff',
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorDotRef = useRef<HTMLSpanElement>(null);
  const [isReady, setIsReady] = useState(false);

  const renderSegments = useMemo(
    () => (segments?.length ? segments : [{ text }]),
    [segments, text],
  );

  const drawTextTexture = useCallback((target: HTMLCanvasElement, width: number, height: number) => {
    const heading = textRef.current;
    if (!heading) return;

    const context = target.getContext('2d');
    if (!context) return;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    target.width = Math.max(1, Math.round(width * pixelRatio));
    target.height = Math.max(1, Math.round(height * pixelRatio));
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    context.clearRect(0, 0, width, height);

    const styles = window.getComputedStyle(heading);
    const resolvedSize = Number.parseFloat(styles.fontSize);
    const resolvedLineHeight = Number.parseFloat(styles.lineHeight) || resolvedSize;
    const resolvedFamily = fontFamily || styles.fontFamily;
    const resolvedWeight = fontWeight || Number.parseInt(styles.fontWeight, 10);
    context.font = `${resolvedWeight} ${resolvedSize}px ${resolvedFamily}`;
    context.textBaseline = 'top';
    (context as CanvasRenderingContext2D & { letterSpacing?: string }).letterSpacing = styles.letterSpacing;

    const tokens = renderSegments.flatMap((segment) =>
      segment.text.split(/(\s+)/).filter(Boolean).map((token) => ({
        token,
        color: segment.color || styles.color,
      })),
    );

    let x = 0;
    let y = 0;
    let pendingSpace = false;

    tokens.forEach(({ token, color }) => {
      if (/^\s+$/.test(token)) {
        pendingSpace = true;
        return;
      }

      const prefix = pendingSpace && x > 0 ? ' ' : '';
      const run = `${prefix}${token}`;
      const runWidth = context.measureText(run).width;
      if (x > 0 && x + runWidth > width + 0.5) {
        x = 0;
        y += resolvedLineHeight;
        pendingSpace = false;
      }

      const visibleRun = x === 0 ? token : run;
      context.fillStyle = color;
      context.fillText(visibleRun, x, y);
      x += context.measureText(visibleRun).width;
      pendingSpace = false;
    });
  }, [fontFamily, fontWeight, renderSegments]);

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    const heading = textRef.current;
    const cursorDot = cursorDotRef.current;
    if (!root || !canvas || !heading || !cursorDot) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const gl = canvas.getContext('webgl', {
      alpha: true,
      antialias: false,
      depth: false,
      premultipliedAlpha: false,
      powerPreference: 'high-performance',
    });
    if (!gl) return;

    const program = createProgram(gl);
    if (!program) return;
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    const positionLocation = gl.getAttribLocation(program, 'aPosition');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const texture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    const locations = {
      texture: gl.getUniformLocation(program, 'uTexture'),
      mouse: gl.getUniformLocation(program, 'uMouse'),
      prevMouse: gl.getUniformLocation(program, 'uPrevMouse'),
      velocity: gl.getUniformLocation(program, 'uVelocity'),
      resolution: gl.getUniformLocation(program, 'uResolution'),
      time: gl.getUniformLocation(program, 'uTime'),
      radius: gl.getUniformLocation(program, 'uRadius'),
      strength: gl.getUniformLocation(program, 'uStrength'),
      rgbSeparation: gl.getUniformLocation(program, 'uRgbSeparation'),
      trailStrength: gl.getUniformLocation(program, 'uTrailStrength'),
      noiseAmount: gl.getUniformLocation(program, 'uNoiseAmount'),
      activity: gl.getUniformLocation(program, 'uActivity'),
      backgroundColor: gl.getUniformLocation(program, 'uBackgroundColor'),
      trail: gl.getUniformLocation(program, 'uTrail[0]'),
    };
    gl.uniform1i(locations.texture, 0);
    gl.uniform3fv(locations.backgroundColor, hexToRgb(backgroundColor));

    const sourceCanvas = document.createElement('canvas');
    let size = { width: 1, height: 1, pixelRatio: 1 };
    let targetMouse: Vec2 = { x: 0.5, y: 0.5 };
    let smoothMouse: Vec2 = { ...targetMouse };
    let previousMouse: Vec2 = { ...targetMouse };
    let targetVelocity: Vec2 = { x: 0, y: 0 };
    let smoothVelocity: Vec2 = { x: 0, y: 0 };
    let pointerActive = false;
    let activity = 0;
    let targetActivity = 0;
    let lastPointer = { x: 0, y: 0, time: performance.now() };
    let lastTrailPosition: Vec2 = { ...targetMouse };
    let trails: TrailPoint[] = Array.from({ length: TRAIL_COUNT }, () => ({ ...targetMouse, life: 0 }));
    const trailData = new Float32Array(TRAIL_COUNT * 3);
    let frame = 0;
    let running = false;
    let destroyed = false;
    let renderFrame: FrameRequestCallback;

    const startRendering = () => {
      if (running || destroyed) return;
      running = true;
      frame = window.requestAnimationFrame(renderFrame);
    };

    const uploadTexture = () => {
      if (destroyed) return;
      const rect = root.getBoundingClientRect();
      if (rect.width < 1 || rect.height < 1) return;
      size = {
        width: rect.width,
        height: rect.height,
        pixelRatio: Math.min(window.devicePixelRatio || 1, 2),
      };
      canvas.width = Math.round(size.width * size.pixelRatio);
      canvas.height = Math.round(size.height * size.pixelRatio);
      canvas.style.width = `${size.width}px`;
      canvas.style.height = `${size.height}px`;
      gl.viewport(0, 0, canvas.width, canvas.height);
      drawTextTexture(sourceCanvas, size.width, size.height);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, sourceCanvas);
      setIsReady(true);
    };

    const addTrailPoint = (point: Vec2) => {
      const dx = (point.x - lastTrailPosition.x) * size.width;
      const dy = (point.y - lastTrailPosition.y) * size.height;
      if (Math.hypot(dx, dy) < 11) return;
      trails = [{ ...point, life: 1 }, ...trails.slice(0, TRAIL_COUNT - 1)];
      lastTrailPosition = point;
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      const now = performance.now();
      const elapsed = Math.max(now - lastPointer.time, 8);
      targetMouse = {
        x: Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width)),
        y: 1 - Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height)),
      };
      targetVelocity = {
        x: ((event.clientX - lastPointer.x) / rect.width) * (16.67 / elapsed) * velocitySensitivity,
        y: (-(event.clientY - lastPointer.y) / rect.height) * (16.67 / elapsed) * velocitySensitivity,
      };
      lastPointer = { x: event.clientX, y: event.clientY, time: now };
      pointerActive = true;
      targetActivity = Math.min(1, 0.28 + Math.hypot(targetVelocity.x, targetVelocity.y) * 5.5);
      cursorDot.style.opacity = event.pointerType === 'mouse' ? '1' : '0';
      cursorDot.style.transform = `translate3d(${event.clientX - rect.left - 3}px, ${event.clientY - rect.top - 3}px, 0)`;
      addTrailPoint(targetMouse);
      startRendering();
    };

    const handlePointerEnter = (event: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      targetMouse = {
        x: (event.clientX - rect.left) / rect.width,
        y: 1 - (event.clientY - rect.top) / rect.height,
      };
      smoothMouse = { ...targetMouse };
      previousMouse = { ...targetMouse };
      lastPointer = { x: event.clientX, y: event.clientY, time: performance.now() };
      pointerActive = true;
      targetActivity = 0.22;
      cursorDot.style.opacity = event.pointerType === 'mouse' ? '1' : '0';
      cursorDot.style.transform = `translate3d(${event.clientX - rect.left - 3}px, ${event.clientY - rect.top - 3}px, 0)`;
      startRendering();
    };

    const handlePointerLeave = () => {
      pointerActive = false;
      targetActivity = 0;
      targetVelocity = { x: 0, y: 0 };
      cursorDot.style.opacity = '0';
      startRendering();
    };

    const handleResize = () => {
      uploadTexture();
      startRendering();
    };
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(root);
    root.addEventListener('pointerenter', handlePointerEnter);
    root.addEventListener('pointermove', handlePointerMove);
    root.addEventListener('pointerleave', handlePointerLeave);

    renderFrame = (now: number) => {
      previousMouse = { ...smoothMouse };
      smoothMouse.x += (targetMouse.x - smoothMouse.x) * cursorSmoothing;
      smoothMouse.y += (targetMouse.y - smoothMouse.y) * cursorSmoothing;
      smoothVelocity.x += (targetVelocity.x - smoothVelocity.x) * 0.18;
      smoothVelocity.y += (targetVelocity.y - smoothVelocity.y) * 0.18;
      targetVelocity.x *= pointerActive ? 0.84 : 0.72;
      targetVelocity.y *= pointerActive ? 0.84 : 0.72;
      targetActivity *= pointerActive ? 0.91 : 0.72;
      activity += (targetActivity - activity) * (targetActivity > activity ? 0.19 : elasticRecovery);
      const trailDecay = pointerActive ? 0.925 : 0.86;
      trails.forEach((point, index) => {
        point.life *= trailDecay;
        trailData[index * 3] = point.x;
        trailData[index * 3 + 1] = point.y;
        trailData[index * 3 + 2] = point.life;
      });

      gl.uniform2f(locations.mouse, smoothMouse.x, smoothMouse.y);
      gl.uniform2f(locations.prevMouse, previousMouse.x, previousMouse.y);
      gl.uniform2f(locations.velocity, smoothVelocity.x, smoothVelocity.y);
      gl.uniform2f(locations.resolution, size.width, size.height);
      gl.uniform1f(locations.time, now * 0.001);
      gl.uniform1f(locations.radius, distortionRadius / Math.max(size.height, 1));
      gl.uniform1f(locations.strength, distortionStrength);
      gl.uniform1f(locations.rgbSeparation, rgbSeparation);
      gl.uniform1f(locations.trailStrength, trailStrength);
      gl.uniform1f(locations.noiseAmount, noiseAmount);
      gl.uniform1f(locations.activity, activity);
      gl.uniform3fv(locations.trail, trailData);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      const hasEnergy = activity > 0.001
        || targetActivity > 0.001
        || Math.hypot(smoothVelocity.x, smoothVelocity.y) > 0.0001
        || trails.some((point) => point.life > 0.002);
      if (hasEnergy) {
        frame = window.requestAnimationFrame(renderFrame);
      } else {
        running = false;
        frame = 0;
      }
    };

    document.fonts?.ready.then(() => {
      uploadTexture();
      startRendering();
    });
    uploadTexture();
    startRendering();

    return () => {
      destroyed = true;
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      root.removeEventListener('pointerenter', handlePointerEnter);
      root.removeEventListener('pointermove', handlePointerMove);
      root.removeEventListener('pointerleave', handlePointerLeave);
      gl.deleteTexture(texture);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
    };
  }, [backgroundColor, cursorSmoothing, distortionRadius, distortionStrength, drawTextTexture, elasticRecovery, noiseAmount, rgbSeparation, trailStrength, velocitySensitivity]);

  return (
    <div ref={rootRef} className={`liquid-typography relative isolate touch-pan-y ${isReady ? 'cursor-none' : ''} ${className}`} style={{ fontSize }}>
      <h1
        ref={textRef}
        className={className}
        style={{ fontFamily, fontSize, fontWeight }}
      >
        {renderSegments.map((segment, index) => (
          <span key={`${segment.text}-${index}`} style={{ color: segment.color }}>
            {segment.text}
          </span>
        ))}
      </h1>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full pointer-events-none transition-opacity duration-200 ${isReady ? 'opacity-100' : 'opacity-0'}`}
      />
      <span
        ref={cursorDotRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-20 h-[6px] w-[6px] rounded-full bg-white opacity-0 mix-blend-difference transition-opacity duration-150"
      />
    </div>
  );
};
