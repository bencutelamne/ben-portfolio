export interface ProjectSlide {
  id: string;
  url: string;
  caption: string;
  aspectRatio?: 'wide' | 'portrait' | 'square' | 'duo';
  secondaryUrl?: string; // For duo poster layouts
  secondaryCaption?: string;
  tag?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectCaseStudy {
  summary: string;
  challenge: string;
  context: string;
  contribution: string[];
  creativeApproach: string;
  process: {
    phase: string;
    description: string;
  }[];
  metrics?: ProjectMetric[];
  reflection: string;
  client?: string;
  awards?: string[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  year: string;
  category: 'Branding' | 'Editorial' | 'Motion & 3D' | 'Spatial & Exhibition' | 'Digital & UI';
  client: string;
  shortDescription: string;
  role: string;
  responsibilities: string[];
  tools: string[];
  credits?: string;
  layoutVariant: 'horizontal-split' | 'duo-poster' | 'asymmetric-triad' | 'full-visual-interruption';
  slides: ProjectSlide[];
  caseStudy: ProjectCaseStudy;
}

export interface Milestone {
  year: string;
  title: string;
  organization: string;
  description: string;
  tags: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: string; highlighted?: boolean }[];
}

export interface ResumeExperience {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface ResumeEducation {
  period: string;
  degree: string;
  institution: string;
  details: string;
}
