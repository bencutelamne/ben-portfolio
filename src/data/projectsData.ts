import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'dept-of-design',
    number: '01',
    title: 'Department of Design Annual Exhibition',
    year: '2025',
    category: 'Spatial & Exhibition',
    client: 'Institute of Contemporary Arts & Design',
    shortDescription:
      'A comprehensive spatial identity and environmental signage system for an annual showcase of 120+ graduating designers across graphic, architectural, and digital disciplines.',
    role: 'Lead Spatial & Visual Designer',
    responsibilities: [
      'Visual Identity System',
      'Environmental Signage & Wayfinding',
      'Exhibition Catalog & Editorial Collateral',
      'Interactive Pavilion Terminal UI',
    ],
    tools: ['Figma', 'Cinema 4D', 'InDesign', 'Glyphs', 'Processing'],
    credits: 'Curated with Prof. Marcus Thorne; Photography by Studio Lumens.',
    layoutVariant: 'horizontal-split',
    slides: [
      {
        id: 's1',
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop',
        caption: 'Exhibition Hallway Installation & Main LED Archway',
        tag: 'Installation',
        aspectRatio: 'wide',
      },
      {
        id: 's2',
        url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1600&auto=format&fit=crop',
        caption: 'Exhibition Monograph & Foil-Stamped Program Guide',
        tag: 'Editorial Print',
        aspectRatio: 'wide',
      },
      {
        id: 's3',
        url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1600&auto=format&fit=crop',
        caption: 'Modular Wayfinding Pillars with Laser-Etched Acrylic Panels',
        tag: 'Wayfinding',
        aspectRatio: 'wide',
      },
      {
        id: 's4',
        url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop',
        caption: 'Touchscreen Catalog Explorer for Visitor Interactions',
        tag: 'Digital UI',
        aspectRatio: 'wide',
      },
    ],
    caseStudy: {
      summary:
        'A unified identity unifying 3 distinct faculties (Graphic, Architecture, Motion) into a cohesive physical and digital exhibition narrative.',
      challenge:
        'The primary challenge was designing an identity flexible enough to represent three fundamentally different design disciplines without allowing any single discipline to overpower the collective institutional identity. Furthermore, the physical exhibition spanned 4,000 m² of brutalist concrete interior requiring high-contrast, low-waste wayfinding.',
      context:
        'Commissioned by the Dean of Arts, the annual showcase draws over 14,000 industry visitors, design directors, and prospective students over a 7-day run.',
      contribution: [
        'Conceived the modular geometric emblem system that changes density based on disciplinary depth.',
        'Engineered reusable hanging banner matrices using recycled aluminum frames and raw Tyvek fabric.',
        'Designed a 320-page bilingual offset-printed catalog featuring bespoke tabular typography.',
        'Created motion graphics stings for 16 digital kiosks throughout the atrium.',
      ],
      creativeApproach:
        'We developed an algorithmic typographic grid system derived from the architectural floorplan of the gallery building. Every disciplinary symbol is mathematically constructed from the intersection of these axes.',
      process: [
        {
          phase: '01. Architectural Audit & Stakeholder Interviews',
          description: 'Mapped traffic bottlenecks across 3 floors and established color-coding systems for spatial navigation.',
        },
        {
          phase: '02. Modular Emblem System Formulation',
          description: 'Tested 40+ typographic iterations to balance utilitarian readability with avant-garde editorial presence.',
        },
        {
          phase: '03. Physical Prototyping & Print Tests',
          description: 'Conducted 1:1 scale test installations in the raw gallery space under varying daylight conditions.',
        },
        {
          phase: '04. Digital Catalog & Opening Night Deployment',
          description: 'Launched interactive web index alongside printed collateral and responsive signage.',
        },
      ],
      metrics: [
        { label: 'Attendance', value: '+34% YoY' },
        { label: 'Catalog Circulation', value: '3,200 Copies' },
        { label: 'Wayfinding Usability Rating', value: '98% Positive' },
      ],
      reflection:
        'Treating physical space and typographic ink as interconnected dimensions yielded our strongest spatial system to date. The modular structural units were preserved by the department for future recurring exhibitions.',
      client: 'Institute of Contemporary Arts',
      awards: ['Tokyo TDC Annual Selection 2025', 'Graphis Gold Award — Environmental Graphics'],
    },
  },
  {
    id: 'festival-of-arts',
    number: '02',
    title: 'Festival of the Arts: Polyphonic Vision',
    year: '2024',
    category: 'Branding',
    client: 'Northern Pacific Cultural Foundation',
    shortDescription:
      'An expansive identity campaign, generative poster series, and motion design ecosystem celebrating experimental sound, performance art, and visual research.',
    role: 'Art Director & Identity Designer',
    responsibilities: [
      'Visual Identity System',
      'Generative Poster Suite (12 Variations)',
      'Motion Billboard Animations',
      'Campaign Art Direction',
    ],
    tools: ['TouchDesigner', 'After Effects', 'Illustrator', 'Variable Fonts'],
    credits: 'Sound design collaborator: Rafael Vance; 3D sculpture by Studio Morph.',
    layoutVariant: 'duo-poster',
    slides: [
      {
        id: 's1',
        url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
        secondaryUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop',
        caption: 'Generative Head Sculpture Poster 01 (Left) & Typographic Score Specimen 02 (Right)',
        tag: 'Posters / Specimen',
        aspectRatio: 'duo',
      },
      {
        id: 's2',
        url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop',
        secondaryUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
        caption: 'Silkscreen Metallic Foil Edition (Left) & Motion Billboard Crop (Right)',
        tag: 'Campaign Visuals',
        aspectRatio: 'duo',
      },
      {
        id: 's3',
        url: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1600&auto=format&fit=crop',
        caption: 'Full-Bleed Stage Backdrop Projections during Live Performance',
        tag: 'Stage Visuals',
        aspectRatio: 'wide',
      },
    ],
    caseStudy: {
      summary:
        'Translating complex sonic frequencies and choral performances into kinetic typography and sculpted 3D optical forms.',
      challenge:
        'The festival required an identity that felt unpredictable and living, reflecting musical improvisation without sacrificing legible festival dates, artist listings, and sponsor hierarchies.',
      context:
        'A 5-day multi-venue festival across historic concert halls, urban plazas, and digital livestreams featuring 80+ international avant-garde performers.',
      contribution: [
        'Built a custom TouchDesigner generative pipeline that warped typographic stems according to live audio inputs.',
        'Authored a bespoke variable display font with custom optical stretch axes.',
        'Directed the campaign photography and tactile screenprinted merchandise line.',
      ],
      creativeApproach:
        'We treated typography as physical acoustic resonance. By manipulating letterform anatomy through simulated sound vibrations, the graphics felt organically alive yet strictly anchored by Swiss modernist typographic discipline.',
      process: [
        {
          phase: '01. Acoustic Frequency Mapping',
          description: 'Recorded master festival audio tracks to extract MIDI and amplitude curves.',
        },
        {
          phase: '02. Generative Poster Engine Creation',
          description: 'Programmed automated layout iterations outputting vector SVGs for print and MP4s for digital DOOH screens.',
        },
        {
          phase: '03. Print Production on Heavyweight Munken Pure',
          description: 'Special dual-pass spot-black and silver metallic silkscreening.',
        },
      ],
      metrics: [
        { label: 'Digital Impressions', value: '2.4M+' },
        { label: 'Festival Sold Out', value: '48 Hours Prior' },
        { label: 'Merchandise Sold', value: '100% Stock' },
      ],
      reflection:
        'Harmonizing cutting-edge algorithmic audio distortion with razor-sharp editorial typesetting created a timeless yet undeniably modern visual landmark for the city.',
      client: 'Northern Pacific Cultural Foundation',
      awards: ['Type Directors Club Certificate of Typographic Excellence', 'European Design Awards Silver'],
    },
  },
  {
    id: 'monograph-press',
    number: '03',
    title: 'Archive of Modern Form: Monograph Series',
    year: '2024',
    category: 'Editorial',
    client: 'Verlag für Moderne Baukunst',
    shortDescription:
      'A 3-volume clothbound editorial publication exploring 20th-century brutalist architecture, structural engineering diagrams, and typographic manifesto writings.',
    role: 'Book Designer & Typographer',
    responsibilities: [
      'Book Layout & Grid Architecture (640 Pages)',
      'Custom Type Specimen & Typesetting',
      'Paper Selection & Foil Production Supervision',
      'Art Direction for Archival Photography',
    ],
    tools: ['InDesign', 'Glyphs', 'Photoshop', 'RoboFont'],
    credits: 'Essays by Elena Rostova & Dr. Jonathan Klein; Printed by Steidl Partner Press.',
    layoutVariant: 'asymmetric-triad',
    slides: [
      {
        id: 's1',
        url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1600&auto=format&fit=crop',
        caption: 'Volume 1 Open Spread: Asymmetric Structural Grid & Asymmetrical Margins',
        tag: 'Editorial Spread',
        aspectRatio: 'wide',
      },
      {
        id: 's2',
        url: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1600&auto=format&fit=crop',
        caption: 'Slipcase Construction with Blind Emboss on Raw Dutch Linen',
        tag: 'Packaging & Binding',
        aspectRatio: 'wide',
      },
      {
        id: 's3',
        url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1600&auto=format&fit=crop',
        caption: 'Index Matrix & Cross-Referenced Architectural Elevation Charts',
        tag: 'Information Density',
        aspectRatio: 'wide',
      },
    ],
    caseStudy: {
      summary:
        'A rigorous typographic and material exploration into post-war concrete architecture, balancing heavy visual weight with micro-typographic precision.',
      challenge:
        'Handling over 900 historical photographs spanning uneven resolutions, accompanying multilingual essays in German and English, and dense architectural floorplans without visually overwhelming the reader.',
      context:
        'Commissioned by a Zurich-based architectural publisher for international distribution in museum bookstores, academic libraries, and private collections.',
      contribution: [
        'Developed an asymmetrical 10-column layout system with dedicated footnote gutters.',
        'Selected and balanced four distinct paper stocks to delineate chapter transitions through tactile touch.',
        'Collaborated directly with master lithographers in Leipzig to calibrate duotone black ink densities.',
      ],
      creativeApproach:
        'The layout grid mirrors the modular concrete formwork joints of Le Corbusier and Kenzo Tange. Text columns feel carved rather than merely placed.',
      process: [
        {
          phase: '01. Archival Scanning & Duotone Calibration',
          description: 'Restored 1960s medium-format negative scans for deep tonal range.',
        },
        {
          phase: '02. Macro & Micro Typographic Rhythm',
          description: 'Engineered typographic hierarchy using 9pt body copy paired with bold 72pt architectural numbers.',
        },
        {
          phase: '03. On-Press Quality Inspection',
          description: 'Supervised press runs over 4 days to ensure zero ink ghosting across dense double-page spreads.',
        },
      ],
      metrics: [
        { label: 'First Edition Print', value: '4,000 Copies' },
        { label: 'Sold Out', value: 'In 6 Months' },
        { label: 'Museum Acquisitions', value: '24 Institutions' },
      ],
      reflection:
        'Tactile print design remains the purest test of typographic discipline. The deliberate pacing of the spreads creates an almost architectural progression through space.',
      client: 'Verlag für Moderne Baukunst (Zurich)',
      awards: ['Best Book Design from all over the World — Bronze Medal', 'Swiss Design Awards Finalist'],
    },
  },
  {
    id: 'kroma-digital-identity',
    number: '04',
    title: 'Kroma: Spatial Computing System & Brand Strategy',
    year: '2024',
    category: 'Digital & UI',
    client: 'Kroma Labs (Silicon Valley & Berlin)',
    shortDescription:
      'Brand architecture, design language, design tokens, and digital operating environment for an enterprise spatial intelligence and multi-modal canvas platform.',
    role: 'Principal Brand & Digital Experience Designer',
    responsibilities: [
      'Brand Identity & Design System',
      'Spatial UI Interface Paradigms',
      'Design Token Architecture',
      'Marketing Website & Interactive 3D Demos',
    ],
    tools: ['Figma', 'Three.js', 'React', 'Tailwind', 'Blender', 'TypeScript'],
    credits: 'Frontend Engineering by Kroma Core Team; Motion Direction by Studio Kai.',
    layoutVariant: 'horizontal-split',
    slides: [
      {
        id: 's1',
        url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop',
        caption: 'Interactive Design System Guidelines & Dynamic Chroma Gradients',
        tag: 'Design System',
        aspectRatio: 'wide',
      },
      {
        id: 's2',
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
        caption: 'Desktop Workstation Canvas & Real-Time Analytical Inspector Panel',
        tag: 'Product Interface',
        aspectRatio: 'wide',
      },
      {
        id: 's3',
        url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop',
        caption: 'Dark Mode High-Contrast Monospace Variable Font Specimen',
        tag: 'Digital Typography',
        aspectRatio: 'wide',
      },
    ],
    caseStudy: {
      summary:
        'Building a design system that scales from high-density code and data visualization to spatial canvas manipulation with zero cognitive friction.',
      challenge:
        'Bridging the gap between deeply technical engineering tools and high-craft aesthetic design software, ensuring that high data density feels calm, structured, and instantly comprehensible.',
      context:
        'Kroma raised a $18M Series A to build next-generation spatial computing interfaces for teams designing complex physical machinery.',
      contribution: [
        'Architected over 180+ tokenized UI components with pixel-precise focus and hover feedback states.',
        'Defined the signature typography hierarchy pairing monospace data tables with high-character geometric headings.',
        'Designed interactive web onboarding journeys that increased trial-to-paid conversions.',
      ],
      creativeApproach:
        'We eliminated all decorative UI chrome in favor of high-contrast micro-borders (1px), subtle tonal shifts, and strict mathematical baseline alignment.',
      process: [
        {
          phase: '01. Workstation Usability & Workflow Mapping',
          description: 'Shadowed 20 hardware engineers to uncover pain points in multi-monitor spatial workflow.',
        },
        {
          phase: '02. Token-Driven Design Architecture',
          description: 'Established strict semantic tokens for colors, elevation, border-radii, and typography in Figma and Code.',
        },
        {
          phase: '03. Interactive Web & Product Rollout',
          description: 'Built interactive live components showcasing spatial tools before signup.',
        },
      ],
      metrics: [
        { label: 'Weekly Active Users', value: '+180%' },
        { label: 'Onboarding Time', value: '-42% Reduction' },
        { label: 'Design System Adoption', value: '100% Cross-Org' },
      ],
      reflection:
        'When interfaces embrace typographic clarity and restrained color logic, complex software becomes an extension of the user\'s cognitive flow.',
      client: 'Kroma Labs Inc.',
      awards: ['Awwwards Site of the Month', 'FWA of the Day'],
    },
  },
  {
    id: 'nordic-cinema-identity',
    number: '05',
    title: 'Nordic Cinémathèque Film Series',
    year: '2023',
    category: 'Motion & 3D',
    client: 'Scandinavian Film Archive (Stockholm)',
    shortDescription:
      'Cinema festival trailer, title sequences, typographic motion stings, and promotional billboards for a retrospective on 1960s avant-garde Nordic cinema.',
    role: 'Motion Designer & Creative Director',
    responsibilities: [
      'Trailer Title Sequencing & Motion Language',
      'Analog 16mm Film Grain Integration',
      'Modular Cinema Poster System',
      'Outdoor Digital Screen Takeovers',
    ],
    tools: ['After Effects', 'Premiere Pro', 'Cinema 4D', 'Analog Telecine Scans'],
    credits: 'Soundtrack composed by Astrid Lindholm; Archival curating by Stig Bergman.',
    layoutVariant: 'horizontal-split',
    slides: [
      {
        id: 's1',
        url: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600&auto=format&fit=crop',
        caption: 'Opening Title Sequence Typography & Frame Rate Transitions',
        tag: 'Motion Typography',
        aspectRatio: 'wide',
      },
      {
        id: 's2',
        url: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1600&auto=format&fit=crop',
        caption: '16mm Optical Print Soundwaves & Dynamic Subtitles Specimen',
        tag: 'Screen Specimen',
        aspectRatio: 'wide',
      },
      {
        id: 's3',
        url: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1600&auto=format&fit=crop',
        caption: 'Urban Screen Takeover at Stockholm Central Station',
        tag: 'Public Space',
        aspectRatio: 'wide',
      },
    ],
    caseStudy: {
      summary:
        'A kinetic study in shadow, harsh Scandinavian light, and austere minimalist typography celebrating the golden era of Nordic arthouse film.',
      challenge:
        'Honoring classic celluloid cinema while engaging a younger demographic through rapid, punchy social teasers and large-scale public motion billboards.',
      context:
        'An annual 3-week winter festival screening restored 4K master prints across 6 cinema houses.',
      contribution: [
        'Directed 4 promotional teaser trailers broadcast across national TV and digital platforms.',
        'Crafted a typography motion system inspired by traditional optical film shutters and flicker rates.',
        'Created a tactile physical program printed on newsprint with silver metallic ink highlights.',
      ],
      creativeApproach:
        'We sampled authentic 16mm telecine film grain and shutter light leaks, synchronizing typographic cuts to subtle percussive string dissonance.',
      process: [
        {
          phase: '01. Archival Film Analysis',
          description: 'Deconstructed 30 master films for recurring visual motifs, high-contrast chiaroscuro, and framing rhythms.',
        },
        {
          phase: '02. Typography & Kinetic Choreography',
          description: 'Animated bespoke Grotesk letterforms with precise snap-easing and micro-flicker frames.',
        },
        {
          phase: '03. Master 4K Delivery for DCI Cinema Projection',
          description: 'Color-graded and mastered multichannel audio for theatrical presentation.',
        },
      ],
      metrics: [
        { label: 'Theater Occupancy', value: '94% Average' },
        { label: 'Trailer Views', value: '850K+ Organic' },
        { label: 'Press Features', value: 'Cahiers du Cinéma, Sight & Sound' },
      ],
      reflection:
        'When motion design respects the pacing of cinema history rather than mimicking superficial internet trends, the emotional resonance is profound.',
      client: 'Scandinavian Film Archive',
      awards: ['Kinsale Sharks Gold — Motion Graphics', 'Nordic Design Awards Winner'],
    },
  },
  {
    id: 'atelier-sylvan-fragrance',
    number: '06',
    title: 'Atelier Sylvan: Botanical Fragrance Identity',
    year: '2023',
    category: 'Branding',
    client: 'Atelier Sylvan (Paris & Kyoto)',
    shortDescription:
      'Packaging architecture, botanical specimen catalog, tactile glass bottle etching, and brand story for an artisanal botanical fragrance house.',
    role: 'Lead Brand & Packaging Designer',
    responsibilities: [
      'Complete Brand Identity & Monogram',
      'Sustainable Packaging Architecture',
      'Glass Etching & Label Typographic System',
      'Art Direction for Still Life Photography',
    ],
    tools: ['Illustrator', 'Photoshop', '3D Packaging Renderers', 'Custom Calligraphy'],
    credits: 'Master Perfumer: Hiroshi Natsume; Photography by Claire Delacroix.',
    layoutVariant: 'asymmetric-triad',
    slides: [
      {
        id: 's1',
        url: 'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?q=80&w=1600&auto=format&fit=crop',
        caption: 'Flacon Silhouette with Micro-Etched Botanical Coordinates',
        tag: 'Packaging Design',
        aspectRatio: 'wide',
      },
      {
        id: 's2',
        url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop',
        caption: 'Embossed Washi Paper Box & Japanese Ribbon Bind',
        tag: 'Unboxing Experience',
        aspectRatio: 'wide',
      },
      {
        id: 's3',
        url: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1600&auto=format&fit=crop',
        caption: 'Botanical Ingredient Specimen Cards & Olfactory Notes Guide',
        tag: 'Editorial Print',
        aspectRatio: 'wide',
      },
    ],
    caseStudy: {
      summary:
        'A poetic synthesis of Japanese wabi-sabi philosophy and classic French haute-parfumerie typographic rigor.',
      challenge:
        'Formulating an unboxing experience that feels ultra-luxurious while being 100% plastic-free, recyclable, and crafted using vegetable-based inks.',
      context:
        'A niche fragrance atelier launching a permanent collection of 6 scents distilled from rare wild forest botanicals.',
      contribution: [
        'Developed custom flacon proportions in collaboration with master glassblowers in Normandy.',
        'Typeset bilingual French/Japanese descriptions utilizing an understated serif and hairline rule grid.',
        'Art-directed still-life photography featuring raw cedarwood, volcanic moss, and dew-drenched botanicals.',
      ],
      creativeApproach:
        'We treated the packaging as an anthropological artifact. Each bottle is numbered with the specific harvest season and geographical coordinates of its botanical essence.',
      process: [
        {
          phase: '01. Material & Sustainability Audit',
          description: 'Sourced biodegradable unbleached washi papers from Kyoto prefectural mills.',
        },
        {
          phase: '02. Typographic Refinement & Glass Prototyping',
          description: 'Tested laser-etched lettering depths for tactile legibility.',
        },
        {
          phase: '03. Global Retail Launch in Paris & Tokyo',
          description: 'Designed in-store visual merchandising displays and press discovery kits.',
        },
      ],
      metrics: [
        { label: 'Initial Batch', value: 'Sold Out in 14 Days' },
        { label: 'Packaging Sustainability Score', value: '100% Recyclable' },
        { label: 'Stockist Expansion', value: 'Le Bon Marché, Dover Street Market' },
      ],
      reflection:
        'True luxury lies in restraint. By stripping away extraneous gold foils and plastic coatings, the organic authenticity of the materials became the luxury itself.',
      client: 'Atelier Sylvan Parfums',
      awards: ['Pentawards Gold — Luxury Fragrance', 'D&AD Wooden Pencil — Packaging Design'],
    },
  },
];
