import { Milestone, SkillCategory } from '../types';

export const ABOUT_PROFILE = {
  name: 'Triet Dang', 
  role: 'Graphic Designer & Brand Strategist',
  location: 'Minh Phung Ward, HCMC \n - Available Globally',
  status: 'Open for Select Creative Direction & Senior Design Roles (Q3/Q4 2026)',
  bioShort:
    'Graphic and motion designer focusing on the incorporation of design strategy within intentional brand solutions and editorial systems.',
  portraitPlaceholder: {
    imageUrl: '/src/asset/Avatar.png',
    alt: 'Triet Dang — Editorial Portrait Placeholder',
    caption: 'PORTRAIT / ARCHIVE NO. 0309',
    coordinates: '10.7575° N, 106.6514° E',
  },
};

export const CHAPTER_01_MARKETING_EDUCATION = {
  title: 'Marketing & Education',
  subtitle: 'The Strategic Foundation Behind Intentional Design',
  lead:
    'Design is more than aesthetics - it is about communication, strategy, and how people perceive a brand. With a background in technology and visual design, I make every design choice purposeful and valuable.',
  education: [
    {
      degree: 'University of Technology HCMC',
      school: 'HUTECH University',
      year: '2019 — 2023',
      honors: 'IT Developer',
      focus: 'Algorithms, Programming, Problem-solving, Logic, Back-end Systems.',
    },
    {
      degree: 'Arena Multimedia Academy',
      school: 'Arena Multimedia - Dien Bien Phu',
      year: '2023',
      honors: 'Multimedia Design & Visual Communication',
      focus: 'Basic Drawing, Branding Identity, Typography, Motion Graphics, UI/UX Design, Basic Film Making, 3D Modeling.',
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
    'Design is more than making things look good. It turns ideas into meaningful messages and shapes how a brand is seen and remembered. With a background in marketing and visual design, I make every choice purposeful, impactful, and valuable to the brand.',
  phases: [
    {
      id: 'p1',
      period: 'Phase 01: The Foundation',
      discipline: 'Typography, Basic Layout & Print Disciplines',
      summary:
        'I explored letterpress, photography, and basic grid systems, learning that limitations can spark creativity and even the smallest spacing change can transform a composition.',
      skills: ['Grid Systems', 'Book Architecture', 'Micro-typography', 'Materiality & Print Production'],
      highlight: 'Lead the design to create a Scooby - best Brand Identity in the Semester 1 of Arena Multimedia',
    },
    {
      id: 'p2',
      period: 'Phase 02: Dimension & Movement',
      discipline: 'UI/UX Design, Motion Graphics, Basic Filming',
      summary:
        'Combined thoughtful user experiences with dynamic motion and practical filming skills. Built intuitive interfaces, engaging visuals, and simple yet effective video content.',
      skills: ['After Effects', 'Figma', 'Adobe Dreamweaver', 'Adobe Premiere Pro'],
      highlight: 'Produced a NFT Trading Application - Stalux - best project in the Semester 2 of Arena Multimedia',
    },
    {
      id: 'p3',
      period: 'Phase 03: Interactive Systems & Creative Direction',
      discipline: 'Basic 3D & Creative Direction',
      summary:
        'Exploring basic 3D while shaping digital products and creative concepts. Combining visual direction, functional thinking, and a strong design sense to create cohesive and engaging experiences.',
      skills: ['3D Modeling', 'Blender', 'Full-stack Creative Direction', 'Interactive Prototyping'],
      highlight: 'Able to create and manage my own design assets through 3D modeling skills.',
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
        { name: 'Social Media Strategy', level: 'Advanced', highlighted: false },
        { name: 'UI / Design Systems', level: 'Expert', highlighted: true },
      ],
    },
    {
      category: 'Software & Skills',
      skills: [
        { name: 'Figma / FigJam', level: 'Expert', highlighted: true },
        { name: 'InDesign / Illustrator / Photoshop', level: 'Expert', highlighted: true },
        { name: 'After Effects / Premiere Pro', level: 'Advanced', highlighted: true },
        { name: 'Blender / Maya / 3Ds Max', level: 'Proficient', highlighted: false },
        { name: 'Basic Drawing / Leadership', level: 'Proficient', highlighted: false },
        { name: 'Scripting / Photography / Video Editing', level: 'Working Knowledge', highlighted: false },
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
