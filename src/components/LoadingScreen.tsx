import React, { useEffect, useMemo, useRef, useState } from 'react';
import loadingLogoSrc from '../asset/Loadingscreen.png';

interface LoadingScreenProps {
  onFinished: () => void;
}

type Particle = {
  color: string;
  delay: number;
  drift: number;
  flicker: number;
  startX: number;
  startY: number;
  targetX: number;
  targetY: number;
};

const LOGO_SRC = loadingLogoSrc;
const DURATION_MS = 4600;
const REDUCED_MOTION_DURATION_MS = 850;

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const easeOutCubic = (value: number) => 1 - Math.pow(1 - clamp(value), 3);
const easeInCubic = (value: number) => Math.pow(clamp(value), 3);
const easeInQuart = (value: number) => Math.pow(clamp(value), 4);

const interpolateKeyframes = (progress: number, values: number[]) => {
  const position = clamp(progress) * (values.length - 1);
  const index = Math.min(Math.floor(position), values.length - 2);
  const localProgress = position - index;
  return values[index] + (values[index + 1] - values[index]) * easeOutCubic(localProgress);
};

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinished }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const logoStageRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const finishedRef = useRef(false);
  const [phase, setPhase] = useState(0);

  const prefersReducedMotion = useMemo(
    () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false,
    [],
  );

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    const image = new Image();
    image.src = LOGO_SRC;
    imageRef.current = image;

    const buildParticles = () => {
      const sampleCanvas = document.createElement('canvas');
      const sampleContext = sampleCanvas.getContext('2d', { willReadFrequently: true });
      if (!sampleContext) return;

      const sampleWidth = 210;
      const sampleHeight = Math.round((image.naturalHeight / image.naturalWidth) * sampleWidth);
      sampleCanvas.width = sampleWidth;
      sampleCanvas.height = sampleHeight;
      sampleContext.drawImage(image, 0, 0, sampleWidth, sampleHeight);

      const data = sampleContext.getImageData(0, 0, sampleWidth, sampleHeight).data;
      const particles: Particle[] = [];
      const stride = 5;

      for (let y = 0; y < sampleHeight; y += stride) {
        for (let x = 0; x < sampleWidth; x += stride) {
          const index = (y * sampleWidth + x) * 4;
          const alpha = data[index + 3];
          if (alpha < 70) continue;

          const red = data[index];
          const green = data[index + 1];
          const blue = data[index + 2];
          const saturation = Math.max(red, green, blue) - Math.min(red, green, blue);
          const luminance = (red + green + blue) / 3;

          if (luminance > 248 && saturation < 10) continue;

          const normalizedX = x / sampleWidth - 0.5;
          const normalizedY = y / sampleHeight - 0.5;
          const angle = Math.atan2(normalizedY, normalizedX) + (Math.random() - 0.5) * 1.2;
          const distance = 0.06 + Math.random() * 0.42;

          particles.push({
            color: `rgba(${red}, ${green}, ${blue},`,
            delay: Math.random() * 0.34,
            drift: Math.random() * 2 - 1,
            flicker: 0.52 + Math.random() * 0.48,
            startX: normalizedX + Math.cos(angle) * distance + (Math.random() - 0.5) * 0.16,
            startY: normalizedY + Math.sin(angle) * distance + (Math.random() - 0.5) * 0.16,
            targetX: normalizedX,
            targetY: normalizedY,
          });
        }
      }

      particlesRef.current = particles;
    };

    if (image.complete) {
      buildParticles();
    } else {
      image.addEventListener('load', buildParticles, { once: true });
    }

    return () => {
      image.removeEventListener('load', buildParticles);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * pixelRatio);
      canvas.height = Math.round(window.innerHeight * pixelRatio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const finish = () => {
      if (finishedRef.current) return;
      finishedRef.current = true;
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      onFinished();
    };

    const drawParticles = (progress: number, elapsed: number) => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const reconstruction = clamp((progress - 0.27) / 0.42);
      if (reconstruction <= 0) return;

      const logoWidth = logoStageRef.current?.offsetWidth ?? Math.min(window.innerWidth * 0.42, 450);
      const logoHeight = logoStageRef.current?.offsetHeight ?? logoWidth * (1048 / 911);
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const grain = Math.max(1.15, Math.min(2.4, logoWidth / 230));
      const analogWobble = Math.sin(elapsed * 0.018) * 1.2;

      context.globalCompositeOperation = 'source-over';
      particlesRef.current.forEach((particle, index) => {
        const localProgress = easeOutCubic((reconstruction - particle.delay) / 0.72);
        if (localProgress <= 0) return;

        const unsolved = 1 - localProgress;
        const staticNoise = Math.sin(elapsed * 0.025 + index * 12.9898) * particle.flicker;
        const orbit = Math.sin(elapsed * 0.009 + index) * particle.drift * unsolved * 10;
        const x = centerX + (particle.startX + (particle.targetX - particle.startX) * localProgress) * logoWidth + orbit;
        const y = centerY + (particle.startY + (particle.targetY - particle.startY) * localProgress) * logoHeight + staticNoise * 2 + analogWobble;
        const alpha = clamp(0.16 + localProgress * 0.92 + Math.sin(elapsed * 0.04 + index) * 0.1);

        context.fillStyle = `${particle.color} ${alpha})`;
        context.beginPath();
        context.arc(x, y, grain * (0.75 + unsolved * 0.8), 0, Math.PI * 2);
        context.fill();
      });
    };

    const duration = prefersReducedMotion ? REDUCED_MOTION_DURATION_MS : DURATION_MS;
    let startTime: number | null = null;

    const tick = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = clamp(elapsed / duration);

      setPhase(progress);
      drawParticles(progress, elapsed);

      if (progress >= 1) {
        finish();
        return;
      }

      frameRef.current = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener('resize', resize);
    frameRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', resize);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [onFinished, prefersReducedMotion]);

  const blackAndWhiteReveal = clamp((phase - 0.025) / 0.035);
  const approach = clamp((phase - 0.025) / 0.075);
  const approachScale = 0.38 + approach * 0.62;
  const colorReveal = easeOutCubic((phase - 0.47) / 0.25);
  const blackLayerFade = 1 - easeOutCubic((phase - 0.54) / 0.18);
  const particleFade = 1 - easeOutCubic((phase - 0.69) / 0.09);
  const shakeProgress = clamp((phase - 0.8) / 0.075);
  const isShaking = phase >= 0.8 && phase < 0.875;
  const zoom = easeInQuart((phase - 0.9) / 0.1);
  const overlayOpacity = prefersReducedMotion
    ? 1 - easeOutCubic((phase - 0.55) / 0.45)
    : 1 - easeInCubic((phase - 0.965) / 0.035);
  const shakeX = isShaking ? interpolateKeyframes(shakeProgress, [0, -8, 7, -5, 3, 0]) : 0;
  const shakeY = isShaking ? interpolateKeyframes(shakeProgress, [0, 1, -1, 1, 0, 0]) : 0;
  const shakeRotation = isShaking ? interpolateKeyframes(shakeProgress, [0, -1.1, 0.9, -0.6, 0.3, 0]) : 0;
  const logoScale = (prefersReducedMotion ? 1 : approachScale) + zoom * 9.5;

  return (
    <div
      className="loading-screen"
      aria-hidden="true"
      style={{
        opacity: overlayOpacity,
        backgroundColor: `rgba(0, 0, 0, ${prefersReducedMotion ? overlayOpacity : 1 - easeInCubic((phase - 0.925) / 0.075) * 0.96})`,
      }}
    >
      <div
        ref={logoStageRef}
        className="loading-screen__logo-stage"
        style={{
          opacity: prefersReducedMotion ? 1 : blackAndWhiteReveal,
          transform: `translate3d(${shakeX}px, ${shakeY}px, 0) rotate(${shakeRotation}deg) scale(${logoScale})`,
        }}
      >
        <img
          className="loading-screen__logo loading-screen__logo--mono"
          src={LOGO_SRC}
          alt=""
          draggable={false}
          style={{
            opacity: prefersReducedMotion ? 0 : blackLayerFade,
          }}
        />
        <img
          className="loading-screen__logo loading-screen__logo--color"
          src={LOGO_SRC}
          alt=""
          draggable={false}
          style={{
            opacity: prefersReducedMotion ? 1 : colorReveal,
            filter: `saturate(${0.75 + colorReveal * 0.55}) contrast(${1.08 + colorReveal * 0.08})`,
          }}
        />
      </div>
      <canvas
        ref={canvasRef}
        className="loading-screen__particles"
        style={{
          opacity: prefersReducedMotion ? 0 : particleFade,
          transform: `scale(${prefersReducedMotion ? 1 : approachScale})`,
        }}
      />
    </div>
  );
};
