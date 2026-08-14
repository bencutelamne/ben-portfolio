import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroIntro } from './components/HeroIntro';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ResumeModal } from './components/ResumeModal';
import { RecruiterFastBar } from './components/RecruiterFastBar';
import { Footer } from './components/Footer';
import { Project } from './types';
import { FileText, Sparkles } from 'lucide-react';

export default function App() {
  // Theme state
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('folio-theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Modal states
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isRecruiterTourOpen, setIsRecruiterTourOpen] = useState(false);

  // Active section tracking
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('folio-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('folio-theme', 'light');
    }
  }, [darkMode]);

  // Scroll spy for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero-spread', 'about', 'projects', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId === 'hero-spread' ? 'about' : sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExploreProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbf9] text-[#111111] dark:bg-[#0c0c0d] dark:text-[#f3f3f3] transition-colors duration-300 selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-black">
      
      {/* Navigation Masthead */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenRecruiterTour={() => setIsRecruiterTourOpen(true)}
      />

      {/* Main Editorial Canvas Content */}
      <main className="flex-1 w-full">
        {/* Editorial Opening Hero Spread */}
        <HeroIntro
          onOpenResume={() => setIsResumeOpen(true)}
          onExploreProjects={handleExploreProjects}
        />

        {/* Section 01: About & 3-Chapter Narrative */}
        <AboutSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* Section 02: Selected Projects Curated Archive */}
        <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />

        {/* Section 03: Contact & Collaboration */}
        <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Colophon & Footer */}
      <Footer />

      {/* Floating Recruiter Fast-Action Bar (Bottom-Right) */}
      <aside
        aria-label="Recruiter Quick Actions"
        className="fixed bottom-5 right-5 z-30 flex items-center space-x-2 font-mono-custom text-[11px] print:hidden"
      >
        <button
          onClick={() => setIsRecruiterTourOpen(true)}
          className="flex items-center space-x-1.5 px-3.5 py-2.5 bg-[#fcfbf9] dark:bg-[#0c0c0d] border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-white text-neutral-900 dark:text-white shadow-lg backdrop-blur-sm transition-all hover:scale-105"
          title="Recruiter Fast-Track"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span className="font-semibold uppercase tracking-wider hidden sm:inline">RECRUITER FAST-TRACK</span>
          <span className="sm:hidden font-semibold">SUMMARY</span>
        </button>

        <button
          onClick={() => setIsResumeOpen(true)}
          className="flex items-center space-x-1.5 px-3.5 py-2.5 bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-bold uppercase tracking-wider shadow-lg transition-all hover:scale-105"
          title="Open CV / Resume"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>CV / RESUME</span>
        </button>
      </aside>

      {/* Full Case Study Modal Reader */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
      />

      {/* Interactive Resume / CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Recruiter Fast-Track Overview Modal */}
      <RecruiterFastBar
        isOpen={isRecruiterTourOpen}
        onClose={() => setIsRecruiterTourOpen(false)}
        onOpenResume={() => {
          setIsRecruiterTourOpen(false);
          setIsResumeOpen(true);
        }}
        onSelectProject={(p) => {
          setIsRecruiterTourOpen(false);
          setSelectedProject(p);
        }}
      />

    </div>
  );
}
