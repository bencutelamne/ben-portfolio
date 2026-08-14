import { Milestone, SkillCategory } from '../types';

export const ABOUT_PROFILE = {
  name: 'Kai Vandeberg',
  role: 'Creative Director & Brand Strategist',
  location: 'San Francisco, CA / Available Globally',
  status: 'Open for Select Creative Direction & Senior Design Roles (Q3/Q4 2026)',
  bioShort:
    'Graphic and motion designer focusing on the incorporation of design strategy within intentional brand solutions and editorial systems.',
  portraitPlaceholder: {
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
    alt: 'Kai Vandeberg — Editorial Portrait Placeholder',
    caption: 'PORTRAIT SPECIMEN / ARCHIVE NO. 082',
    coordinates: '37.7749° N, 122.4194° W',
    note: 'Replaceable image placeholder. Asymmetrically cropped with spatial editorial framing.',
  },
};

export const CHAPTER_01_MARKETING_EDUCATION = {
  title: 'Marketing & Education',
  subtitle: 'The Strategic Foundation Behind Intentional Design',
  lead:
    'Design is never merely cosmetic—it is applied communication psychology and strategic positioning. My dual grounding in marketing science and visual craft ensures every typographic decision, grid structure, and brand system drives measurable cultural and business impact.',
  education: [
    {
      degree: 'B.S. in Strategic Marketing & Visual Communication',
      school: 'University of California, Berkeley',
      year: '2019 — 2023',
      honors: 'Summa Cum Laude, Dean’s Honors List',
      focus: 'Consumer Behavior, Semiotics, Brand Architecture & Quantitative Market Research.',
    },
    {
      degree: 'Post-Graduate Masterclasses in Advanced Typography & Spatial Design',
      school: 'Basel School of Design (Schule für Gestaltung Basel)',
      year: '2023',
      honors: 'Swiss Modernism & Algorithmic Layout Intensive',
      focus: 'Grid Systems, Micro-typography, Variable Type Design, and Editorial Narrative.',
    },
  ],
  marketingInsights: [
    {
      title: 'Cognitive Semiotics & Visual Retention',
      description:
        'Understanding how humans process typographic hierarchy, color contrast, and negative space enables information to be absorbed 40% faster with higher brand recall.',
    },
    {
      title: 'Audience Segmentation & Tone Calibration',
      description:
        'Translating corporate business objectives into distinct visual personas that resonate across technical founders, high-end consumers, and cultural institutions.',
    },
    {
      title: 'Measurable Brand Equity & Systems',
      description:
        'Building scalable design systems that eliminate organizational friction, ensuring cross-channel consistency across marketing, product UI, physical environments, and motion.',
    },
  ],
  milestones: [
    {
      year: '2020',
      title: 'Brand Strategy Research Fellow',
      organization: 'Center for Applied Media & Design',
      description: 'Co-authored a research paper on typographic accessibility in digital healthcare portals.',
      tags: ['Research', 'Cognitive Psychology', 'Semiotics'],
    },
    {
      year: '2022',
      title: 'Strategic Campaign Lead',
      organization: 'Vanguard Media Group',
      description: 'Formulated multi-channel brand positioning for 6 Series A technology and consumer startups.',
      tags: ['Strategy', 'Positioning', 'Go-To-Market'],
    },
  ] as Milestone[],
};

export const CHAPTER_02_DESIGN_JOURNEY = {
  title: 'My Design Journey',
  subtitle: 'From Static Ink to Dynamic Kinetic Systems',
  lead:
    'My creative path has been a relentless expansion of visual vocabulary. Beginning with tactile printmaking and Swiss grid systems, I progressively mastered kinetic motion, interactive web software, 3D spatial environments, and creative art direction.',
  phases: [
    {
      id: 'p1',
      period: 'Phase 01: The Foundation',
      discipline: 'Typography, Editorial & Print Disciplines',
      summary:
        'Immersed in letterpress, darkroom photography, and classical Swiss grid layouts. Learned that constraint breeds invention and that 1 millimeter of whitespace can transform an entire composition.',
      skills: ['Grid Systems', 'Book Architecture', 'Micro-typography', 'Materiality & Print Production'],
      highlight: 'Designed 14 limited-edition artist monographs and won regional typography awards.',
    },
    {
      id: 'p2',
      period: 'Phase 02: Dimension & Movement',
      discipline: 'Motion Graphics, 3D & Spatial Identity',
      summary:
        'Brought static typography into time-based dimensions. Mastered kinetic typography, procedural audio-reactive visuals, and environmental exhibition wayfinding.',
      skills: ['After Effects', 'Cinema 4D', 'TouchDesigner', 'Spatial Wayfinding', 'Brand Motion Systems'],
      highlight: 'Directed motion sequences projected on 40-meter public LED screens across Europe and the US.',
    },
    {
      id: 'p3',
      period: 'Phase 03: Interactive Systems & Creative Direction',
      discipline: 'Digital Product Design, Creative Direction & Art Direction',
      summary:
        'Directing multidisciplinary teams across brand, digital product, and spatial installations. Bridging the gap between engineering rigor and avant-garde aesthetic craft.',
      skills: ['Design Tokens', 'Figma Systems', 'Full-stack Creative Direction', 'Interactive Prototyping'],
      highlight: 'Led end-to-end design for venture-backed platforms with over 2M active users.',
    },
  ],
  skillMatrix: [
    {
      category: 'Core Disciplines',
      skills: [
        { name: 'Creative Direction', level: 'Expert', highlighted: true },
        { name: 'Brand Systems & Strategy', level: 'Expert', highlighted: true },
        { name: 'Editorial & Book Design', level: 'Expert', highlighted: true },
        { name: 'Motion Graphics & 3D', level: 'Advanced', highlighted: true },
        { name: 'Spatial & Exhibition Identity', level: 'Advanced', highlighted: false },
        { name: 'UI / Design Systems', level: 'Expert', highlighted: true },
      ],
    },
    {
      category: 'Software & Toolchain',
      skills: [
        { name: 'Figma / FigJam', level: 'Expert', highlighted: true },
        { name: 'InDesign / Illustrator / Photoshop', level: 'Expert', highlighted: true },
        { name: 'After Effects / Premiere Pro', level: 'Advanced', highlighted: true },
        { name: 'Cinema 4D / Redshift / Blender', level: 'Proficient', highlighted: false },
        { name: 'TouchDesigner / Processing', level: 'Proficient', highlighted: false },
        { name: 'HTML5 / CSS3 / React / Tailwind', level: 'Working Knowledge', highlighted: false },
      ],
    },
  ] as SkillCategory[],
};

export const CHAPTER_03_THE_FUTURE = {
  title: 'The Future & Vision',
  subtitle: 'Expanding the Boundaries of Cultural & Digital Experiences',
  lead:
    'The future of design belongs to those who harmonize deep humanistic craft with emergent computational tools. I am seeking forward-thinking teams, studios, and organizations where ambition, aesthetic conviction, and genuine user impact intersect.',
  aspirations: [
    {
      number: '01',
      title: 'Generative Design & Dynamic Systems',
      description:
        'Pioneering brand identities that are not static logos, but living algorithms that adapt continuously to real-time contexts, data streams, and physical environments.',
    },
    {
      number: '02',
      title: 'Hybrid Spatial & Digital Architecture',
      description:
        'Dissolving the boundaries between physical exhibition halls and interactive digital canvases to forge memorable, sensory-rich human encounters.',
    },
    {
      number: '03',
      title: 'Leadership & Creative Stewardship',
      description:
        'Mentoring junior creatives, fostering psychologically safe yet radically ambitious studio cultures, and proving that uncompromising visual craft produces superior business results.',
    },
  ],
  idealTeams: [
    'Visionary Creative & Design Studios (Pentagram, Base, DIA, Bureau Borsche model)',
    'High-Craft Tech Innovators (Spatial Computing, AI tooling with impeccable taste, Creative Platforms)',
    'Cultural Institutions, Architecture Foundations & Independent Publishers',
  ],
  quote:
    '“We do not design to decorate reality; we design to give structural clarity, emotional resonance, and enduring dignity to human communication.”',
};
