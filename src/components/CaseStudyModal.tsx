import React, { useEffect, useRef } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/projectsData';
import { X, ArrowRight, ArrowLeft, Award, CheckCircle2, Share2, CornerRightDown } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectProject,
}) => {
  const modalContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];

  const handleProjectChange = (nextProject: Project) => {
    modalContainerRef.current?.scrollTo({ top: 0, behavior: 'auto' });
    onSelectProject(nextProject);
  };

  return (
    <div
      id="case-study-modal-container"
      ref={modalContainerRef}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/70 backdrop-blur-md p-0 sm:p-4 md:p-6"
    >
      <div
        id="case-study-modal-card"
        className="w-full max-w-5xl mx-auto min-h-[100dvh] sm:min-h-[calc(100dvh-2rem)] md:min-h-[calc(100dvh-3rem)] bg-white/95 dark:bg-[#0c0c0d]/85 text-neutral-900 dark:text-neutral-100 border border-white/80 dark:border-white/15 backdrop-blur-2xl shadow-2xl flex flex-col"
      >
        {/* Modal Sticky Navigation Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/90 dark:bg-[#0c0c0d]/75 backdrop-blur-xl editorial-border-b font-mono-custom text-[12px]">
          <div className="flex items-center space-x-3">
            <span className="font-bold text-neutral-950 dark:text-white">
              PROJECT DOSSIER {project.number}
            </span>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-500 uppercase tracking-wider">{project.category}</span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => handleProjectChange(prevProject)}
              className="p-1.5 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-950 dark:hover:border-white transition-colors"
              title="Previous project"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleProjectChange(nextProject)}
              className="p-1.5 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-950 dark:hover:border-white transition-colors"
              title="Next project"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:opacity-80 transition-opacity ml-2"
              title="Close dossier"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Case Study Content Body */}
        <div className="p-6 sm:p-10 md:p-14 space-y-12">
          
          {/* Header Spread */}
          <div className="space-y-6 pb-10 editorial-border-b">
            <div className="flex items-center space-x-2 font-mono-custom text-[11px] uppercase tracking-widest text-neutral-400">
              <span>{project.year} ARCHIVE</span>
              <span>—</span>
              <span>CLIENT: {project.client}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-950 dark:text-white">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 font-medium leading-relaxed max-w-3xl">
              {project.caseStudy.summary}
            </p>

            {/* Awards Pill if present */}
            {project.caseStudy.awards && project.caseStudy.awards.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {project.caseStudy.awards.map((award, aIdx) => (
                  <span
                    key={aIdx}
                    className="inline-flex items-center space-x-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 font-mono-custom text-[11px] uppercase tracking-wider"
                  >
                    <Award className="w-3.5 h-3.5" />
                    <span>{award}</span>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Metadata Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 font-mono-custom text-[12px]">
            <div>
              <span className="text-neutral-400 block uppercase text-[10px]">ROLE</span>
              <span className="font-semibold text-neutral-950 dark:text-white">{project.role}</span>
            </div>
            <div>
              <span className="text-neutral-400 block uppercase text-[10px]">TIMELINE</span>
              <span className="font-semibold text-neutral-950 dark:text-white">{project.year}</span>
            </div>
            <div>
              <span className="text-neutral-400 block uppercase text-[10px]">CATEGORY</span>
              <span className="font-semibold text-neutral-950 dark:text-white">{project.category}</span>
            </div>
            <div>
              <span className="text-neutral-400 block uppercase text-[10px]">CORE TOOLS</span>
              <span className="font-semibold text-neutral-950 dark:text-white truncate block">
                {project.tools.slice(0, 3).join(', ')}
              </span>
            </div>
          </div>

          {/* Hero Visual Showcase */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] bg-neutral-900 overflow-hidden border border-neutral-300 dark:border-neutral-800">
              <img
                src={project.slides[0].url}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between font-mono-custom text-[11px] text-neutral-500">
              <span>PRIMARY EXHIBIT 01</span>
              <span>{project.slides[0].caption}</span>
            </div>
          </div>

          {/* Challenge & Context Asymmetric Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-6 editorial-border-t editorial-border-b">
            <div className="space-y-4">
              <div className="text-[11px] font-mono-custom uppercase tracking-widest text-neutral-400">
                01 — THE STRATEGIC CHALLENGE
              </div>
              <h3 className="font-display text-2xl font-bold text-neutral-950 dark:text-white">
                The Problem Space
              </h3>
              <p className="text-[15px] text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {project.caseStudy.challenge}
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-[11px] font-mono-custom uppercase tracking-widest text-neutral-400">
                02 — CONTEXT & SCALE
              </div>
              <h3 className="font-display text-2xl font-bold text-neutral-950 dark:text-white">
                Ecosystem Dynamics
              </h3>
              <p className="text-[15px] text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {project.caseStudy.context}
              </p>
            </div>
          </div>

          {/* My Contribution & Creative Approach */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-[11px] font-mono-custom uppercase tracking-widest text-neutral-400">
                03 — MY DIRECT CONTRIBUTION
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white">
                Execution & Leadership
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.caseStudy.contribution.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-start space-x-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-[14px] text-neutral-700 dark:text-neutral-300 leading-normal">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 sm:p-8 bg-neutral-900 text-white dark:bg-neutral-900 dark:text-white border border-neutral-800 space-y-3">
              <div className="text-[11px] font-mono-custom uppercase tracking-widest text-neutral-400">
                04 — CREATIVE & TYPOGRAPHIC APPROACH
              </div>
              <p className="font-display text-lg sm:text-xl leading-relaxed">
                {project.caseStudy.creativeApproach}
              </p>
            </div>
          </div>

          {/* Supporting Visuals Gallery */}
          {project.slides.length > 1 && (
            <div className="space-y-6 pt-6 editorial-border-t">
              <div className="text-[11px] font-mono-custom uppercase tracking-widest text-neutral-400">
                05 — VISUAL SPECIMEN & GALLERY
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.slides.slice(1).map((slide) => (
                  <div key={slide.id} className="space-y-2">
                    <div className="relative aspect-[4/3] bg-neutral-900 overflow-hidden border border-neutral-300 dark:border-neutral-800">
                      <img
                        src={slide.url}
                        alt={slide.caption}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="font-mono-custom text-[11px] text-neutral-500">
                      <span className="font-bold text-neutral-800 dark:text-neutral-200 uppercase mr-1">
                        {slide.tag}:
                      </span>
                      {slide.caption}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Process Timeline */}
          <div className="space-y-6 pt-6 editorial-border-t">
            <div className="text-[11px] font-mono-custom uppercase tracking-widest text-neutral-400">
              06 — METHODOLOGY & PROCESS
            </div>
            <div className="space-y-4">
              {project.caseStudy.process.map((step, sIdx) => (
                <div
                  key={sIdx}
                  className="p-5 border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 space-y-1"
                >
                  <h4 className="font-display font-bold text-base text-neutral-950 dark:text-white">
                    {step.phase}
                  </h4>
                  <p className="text-[14px] text-neutral-600 dark:text-neutral-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Metrics / Impact */}
          {project.caseStudy.metrics && project.caseStudy.metrics.length > 0 && (
            <div className="pt-6 editorial-border-t space-y-4">
              <div className="text-[11px] font-mono-custom uppercase tracking-widest text-neutral-400">
                07 — MEASURABLE IMPACT
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.caseStudy.metrics.map((m, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
                  >
                    <div className="text-3xl font-display font-bold text-neutral-950 dark:text-white">
                      {m.value}
                    </div>
                    <div className="text-[11px] font-mono-custom uppercase text-neutral-500 mt-1">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reflection */}
          <div className="pt-6 editorial-border-t space-y-3">
            <div className="text-[11px] font-mono-custom uppercase tracking-widest text-neutral-400">
              08 — RETROSPECTIVE
            </div>
            <p className="font-serif-custom italic text-xl sm:text-2xl text-neutral-800 dark:text-neutral-200 leading-relaxed">
              “{project.caseStudy.reflection}”
            </p>
          </div>

          {/* Next Project Footer Bar */}
          <div className="pt-10 editorial-border-t flex flex-col sm:flex-row items-center justify-between gap-6">
            <button
              onClick={() => handleProjectChange(nextProject)}
              className="group flex items-center space-x-3 text-left"
            >
              <div className="w-10 h-10 border border-neutral-300 dark:border-neutral-700 flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                <ArrowRight className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono-custom text-neutral-400 uppercase">
                  NEXT PROJECT NO. {nextProject.number}
                </div>
                <div className="font-display font-bold text-lg text-neutral-950 dark:text-white group-hover:underline">
                  {nextProject.title}
                </div>
              </div>
            </button>

            <button
              onClick={onClose}
              className="px-6 py-3 border border-neutral-900 dark:border-white font-mono-custom text-[12px] font-bold uppercase tracking-wider hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            >
              BACK TO PORTFOLIO
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
