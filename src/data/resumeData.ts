import { ResumeExperience, ResumeEducation } from '../types';

export const RESUME_DATA = {
  name: 'Kai Vandeberg',
  title: 'Creative Director & Lead Brand / Editorial Designer',
  email: 'kai.vandeberg.design@gmail.com',
  website: 'https://vandeberg.design',
  location: 'San Francisco, CA (Open to Worldwide Relocation & Remote)',
  linkedin: 'https://linkedin.com/in/kaivandeberg',
  behance: 'https://behance.net/kaivandeberg',
  readcv: 'https://read.cv/kaivandeberg',
  github: 'https://github.com/kaivandeberg',
  summary:
    'Award-winning multidisciplinary designer and creative director with 7+ years of experience bridging brand strategy, high-density editorial systems, motion design, and digital product architecture. Proven track record directing global campaigns for cultural institutions and venture-backed innovators.',

  experiences: [
    {
      period: '2023 — Present',
      role: 'Principal Brand & Creative Director',
      company: 'Studio Vandeberg / Independent Practice',
      location: 'San Francisco & Worldwide',
      description:
        'Directing brand identity, editorial design, spatial exhibitions, and motion systems for international cultural institutions, design foundations, and high-growth technology leaders.',
      achievements: [
        'Directed brand relaunch and environmental exhibition identity for 14,000-visitor annual design showcase.',
        'Architected comprehensive design systems and token libraries for Series A/B spatial computing platforms.',
        'Received 4 international design awards including Tokyo TDC Selection and Pentawards Gold.',
      ],
    },
    {
      period: '2021 — 2023',
      role: 'Senior Brand & Visual Systems Designer',
      company: 'Atelier Modernist / Design Consultancy',
      location: 'San Francisco, CA',
      description:
        'Led visual systems and digital experience design for enterprise technology, luxury fragrance, and editorial publishing clients.',
      achievements: [
        'Managed cross-functional design teams of 6 designers, 3D animators, and copywriters across 12 simultaneous client deliveries.',
        'Standardized agency design token pipelines between Figma and React development teams.',
        'Authored and published 3 hardcover monographs with international museum bookstore distribution.',
      ],
    },
    {
      period: '2019 — 2021',
      role: 'Visual Communication & Motion Designer',
      company: 'Vanguard Media Group',
      location: 'Berkeley & San Francisco, CA',
      description:
        'Conceived and animated kinetic typography, advertising campaigns, and interactive web experiences.',
      achievements: [
        'Created 20+ viral motion sequences generating over 4.5M combined digital impressions.',
        'Established modular brand guidelines adopted across 8 regional creative hubs.',
      ],
    },
  ] as ResumeExperience[],

  education: [
    {
      period: '2019 — 2023',
      degree: 'B.S. in Strategic Marketing & Visual Communication',
      institution: 'University of California, Berkeley',
      details: 'Summa Cum Laude, GPA 3.94 / 4.0. Emphasis in Semiotics and Applied Cognitive Psychology.',
    },
    {
      period: '2023',
      degree: 'Post-Graduate Masterclass in Swiss Typography & Editorial Systems',
      institution: 'Schule für Gestaltung Basel (Basel School of Design, Switzerland)',
      details: 'Intensive research into algorithmic grid architectures, micro-typography, and bookbinding.',
    },
  ] as ResumeEducation[],

  awards: [
    { year: '2025', award: 'Tokyo TDC Annual Selection', category: 'Environmental Spatial Identity' },
    { year: '2024', award: 'Type Directors Club (TDC) Certificate of Typographic Excellence', category: 'Poster & Type Design' },
    { year: '2024', award: 'Pentawards Gold Award', category: 'Sustainable Luxury Packaging' },
    { year: '2024', award: 'Best Book Design From All Over the World Bronze', category: 'Editorial Monograph' },
    { year: '2023', award: 'Awwwards Site of the Month & Developer Award', category: 'Digital Interactive Experience' },
  ],

  exhibitionsAndPress: [
    'Speaker: "The Algorithmic Grid" — International Typography Conference, Zurich (2025)',
    'Featured in: Eye Magazine #104, It\'s Nice That, Brand New (UnderConsideration), Slanted Magazine',
    'Permanent Collection: Zurich Museum of Design (Museum für Gestaltung Zürich)',
  ],

  technicalProficiencies: {
    'Design & Vector': ['Figma (Variables & Token Systems)', 'Adobe Illustrator', 'Adobe InDesign', 'Glyphs / RoboFont'],
    'Motion & 3D': ['Adobe After Effects', 'Cinema 4D (Redshift / Octane)', 'TouchDesigner', 'Blender', 'Premiere Pro'],
    'Strategy & Research': ['Brand Architecture', 'Semiotic Audits', 'Information Architecture', 'User Journey Mapping'],
    'Development & Code': ['HTML5 / CSS3 / Modern Tailwind', 'React & TypeScript', 'Three.js / WebGL basics', 'Git & CI/CD'],
  },
};
