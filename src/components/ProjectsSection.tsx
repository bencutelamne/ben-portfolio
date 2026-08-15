import React, { useState } from 'react';
import { Project, ProjectSlide } from '../types';
import { PROJECTS } from '../data/projectsData';
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  ListFilter,
  LayoutGrid,
  AlignLeft,
  ExternalLink,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'editorial' | 'index' | 'grid'>('editorial');
  
  // Track current slide index for each project independently
  const [projectSlideIndexes, setProjectSlideIndexes] = useState<{ [projectId: string]: number }>({
    'dept-of-design': 0,
    'festival-of-arts': 0,
    'monograph-press': 0,
    'kroma-digital-identity': 0,
    'nordic-cinema-identity': 0,
    'atelier-sylvan-fragrance': 0,
  });

  const categories = [
    'All',
    'Spatial & Exhibition',
    'Branding',
    'Editorial',
    'Digital & UI',
    'Motion & 3D',
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory;
  });

  const handleNextSlide = (projectId: string, totalSlides: number) => {
    setProjectSlideIndexes((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalSlides,
    }));
  };

  const handlePrevSlide = (projectId: string, totalSlides: number) => {
    setProjectSlideIndexes((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalSlides) % totalSlides,
    }));
  };

  return (
    <section id="projects" className="w-full relative pt-10 sm:pt-12 md:pt-14 pb-12 sm:pb-16 md:pb-20 editorial-border-t">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 sm:pb-8 md:pb-10 editorial-border-b">
          <div>
            <div className="text-[12px] font-mono-custom uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-2">
              SECTION 02 — CURATED ARCHIVE
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Selected Projects
            </h2>
          </div>

          {/* View mode toggle */}
          <div className="flex items-center space-x-2 font-mono-custom text-[11px] uppercase tracking-wider">
            <span className="text-neutral-400 mr-2 hidden sm:inline">VIEW MODE:</span>
            <button
              onClick={() => setViewMode('editorial')}
              className={`p-2 sm:px-3 sm:py-1.5 flex items-center space-x-1.5 transition-all ${
                viewMode === 'editorial'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-semibold'
                  : 'border border-neutral-300 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
              title="Editorial spread view"
            >
              <AlignLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">EDITORIAL SPREAD</span>
            </button>
            <button
              onClick={() => setViewMode('index')}
              className={`p-2 sm:px-3 sm:py-1.5 flex items-center space-x-1.5 transition-all ${
                viewMode === 'index'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-semibold'
                  : 'border border-neutral-300 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
              title="Recruiter index table"
            >
              <ListFilter className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">INDEX TABLE</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 sm:px-3 sm:py-1.5 flex items-center space-x-1.5 transition-all ${
                viewMode === 'grid'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-semibold'
                  : 'border border-neutral-300 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
              title="Visual grid"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">VISUAL MATRIX</span>
            </button>
          </div>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap items-center gap-2 py-4 sm:py-5 editorial-border-b font-mono-custom text-[11px] uppercase tracking-wider">
          <span className="text-neutral-400 mr-2">DISCIPLINE:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 border transition-colors ${
                selectedCategory === cat
                  ? 'border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-black font-semibold'
                  : 'border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:border-neutral-400 dark:hover:border-neutral-600'
              }`}
            >
              {cat} {cat === 'All' ? `(${PROJECTS.length})` : ''}
            </button>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* VIEW MODE: EDITORIAL SPREAD (Main Visual Showcase with Controlled Variation) */}
        {/* ========================================================================= */}
        {viewMode === 'editorial' && (
          <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
            {filteredProjects.map((project) => {
              const currentSlideIndex = projectSlideIndexes[project.id] || 0;
              const currentSlide = project.slides[currentSlideIndex] || project.slides[0];
              const totalSlides = project.slides.length;
              const formattedSlideNumber = String(currentSlideIndex + 1).padStart(2, '0');
              const formattedTotalSlides = String(totalSlides).padStart(2, '0');

              return (
                <article
                  key={project.id}
                  id={`project-${project.id}`}
                  className="pt-10 sm:pt-12 md:pt-14 pb-12 sm:pb-16 md:pb-20 group transition-colors"
                >
                  {/* Project Top Editorial Masthead Bar: Year | Title | Discipline */}
                  <div className="grid grid-cols-12 gap-4 pb-6 sm:pb-8 font-mono-custom text-[13px] sm:text-[14px]">
                    {/* Left: Year */}
                    <div className="col-span-3 sm:col-span-2 text-neutral-500 dark:text-neutral-400 font-medium">
                      {project.year}
                    </div>

                    {/* Middle: Project Title */}
                    <div className="col-span-9 sm:col-span-6 md:col-span-7 font-display text-base sm:text-xl md:text-2xl font-bold text-neutral-950 dark:text-white flex items-center space-x-3">
                      <span>{project.title}</span>
                      <span className="text-[11px] font-mono-custom px-2 py-0.5 border border-neutral-300 dark:border-neutral-700 text-neutral-500 font-normal">
                        No. {project.number}
                      </span>
                    </div>

                    {/* Right: Discipline & Client */}
                    <div className="hidden sm:block sm:col-span-4 md:col-span-3 text-right text-neutral-600 dark:text-neutral-400 text-[12px] uppercase tracking-wider">
                      <span>{project.category}</span>
                    </div>
                  </div>

                  {/* Dynamic Layout Variants */}
                  {project.layoutVariant === 'duo-poster' ? (
                    /* ------------------------------------------------------------- */
                    /* DUO POSTER SPREAD (Black Stage Canvas Layout like Reference)   */
                    /* ------------------------------------------------------------- */
                    <div className="space-y-6">
                      <div className="p-4 sm:p-8 md:p-12 bg-neutral-950 text-white border border-neutral-800">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                          {/* Poster Left */}
                          <div className="relative aspect-[3/4] bg-neutral-900 overflow-hidden border border-neutral-800">
                            <img
                              src={currentSlide.url}
                              alt={`${project.title} - Visual 01`}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-500"
                            />
                          </div>

                          {/* Poster Right */}
                          <div className="relative aspect-[3/4] bg-neutral-900 overflow-hidden border border-neutral-800">
                            <img
                              src={currentSlide.secondaryUrl || currentSlide.url}
                              alt={`${project.title} - Visual 02`}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Controls Bar beneath the stage */}
                      <div className="grid grid-cols-12 gap-4 items-center font-mono-custom text-[12px] pt-2">
                        <div className="col-span-3 sm:col-span-2 flex items-center space-x-3">
                          <button
                            onClick={() => handlePrevSlide(project.id, totalSlides)}
                            className="p-2 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-950 dark:hover:border-white transition-colors"
                            aria-label="Previous slide"
                          >
                            <ArrowLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleNextSlide(project.id, totalSlides)}
                            className="p-2 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-950 dark:hover:border-white transition-colors"
                            aria-label="Next slide"
                          >
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="col-span-6 sm:col-span-7 text-neutral-600 dark:text-neutral-400 truncate">
                          <span className="font-semibold text-neutral-900 dark:text-white uppercase mr-2">
                            {currentSlide.tag || 'SPECIMEN'}:
                          </span>
                          <span>{currentSlide.caption}</span>
                        </div>

                        <div className="col-span-3 sm:col-span-3 text-right font-bold text-neutral-900 dark:text-white">
                          {formattedSlideNumber} / {formattedTotalSlides}
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* ------------------------------------------------------------- */
                    /* HORIZONTAL SPLIT & ASYMMETRIC TRIAD SPREAD                   */
                    /* ------------------------------------------------------------- */
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                      {/* Visual Viewer Frame (8 Cols) */}
                      <div className="lg:col-span-8 space-y-4">
                        <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800">
                          <img
                            src={currentSlide.url}
                            alt={currentSlide.caption}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                          />

                          {/* Quick Expand Button */}
                          <button
                            onClick={() => onSelectProject(project)}
                            className="absolute top-4 right-4 p-2 bg-neutral-950/80 hover:bg-neutral-950 text-white backdrop-blur-sm transition-all"
                            title="Open Full Case Study"
                          >
                            <Maximize2 className="w-4 h-4" />
                          </button>

                          {/* Category Tag pill */}
                          <div className="absolute top-4 left-4 px-2.5 py-1 bg-neutral-950/80 text-white backdrop-blur-sm font-mono-custom text-[10px] uppercase tracking-wider">
                            {currentSlide.tag || project.category}
                          </div>
                        </div>

                        {/* Interactive Slide Controls Bar */}
                        <div className="flex items-center justify-between font-mono-custom text-[12px] pt-1">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handlePrevSlide(project.id, totalSlides)}
                              className="p-1.5 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-950 dark:hover:border-white transition-colors"
                              aria-label="Previous slide"
                            >
                              <ArrowLeft className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleNextSlide(project.id, totalSlides)}
                              className="p-1.5 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-950 dark:hover:border-white transition-colors"
                              aria-label="Next slide"
                            >
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-neutral-500 dark:text-neutral-400 pl-2">
                              {currentSlide.caption}
                            </span>
                          </div>

                          <div className="font-bold text-neutral-900 dark:text-white shrink-0">
                            {formattedSlideNumber} / {formattedTotalSlides}
                          </div>
                        </div>
                      </div>

                      {/* Right Editorial Narrative Column (4 Cols) */}
                      <div className="lg:col-span-4 flex flex-col justify-between space-y-6 pt-2">
                        <div className="space-y-4">
                          <div className="text-[11px] font-mono-custom uppercase tracking-widest text-neutral-500">
                            PROJECT SYNOPSIS
                          </div>
                          <p className="text-[15px] text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                            {project.shortDescription}
                          </p>

                          <div className="pt-4 editorial-border-t space-y-3 font-mono-custom text-[12px]">
                            <div>
                              <span className="text-neutral-400 uppercase tracking-wider block text-[10px]">
                                MY ROLE
                              </span>
                              <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                                {project.role}
                              </span>
                            </div>

                            <div>
                              <span className="text-neutral-400 uppercase tracking-wider block text-[10px]">
                                CLIENT / CONTEXT
                              </span>
                              <span className="text-neutral-800 dark:text-neutral-200">
                                {project.client}
                              </span>
                            </div>

                            <div>
                              <span className="text-neutral-400 uppercase tracking-wider block text-[10px] mb-1">
                                DELIVERABLES & DISCIPLINE
                              </span>
                              <div className="flex flex-wrap gap-1.5">
                                {project.responsibilities.map((resp, rIdx) => (
                                  <span
                                    key={rIdx}
                                    className="px-2 py-0.5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-[11px] text-neutral-700 dark:text-neutral-300"
                                  >
                                    {resp}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Read Case Study Button */}
                        <div className="pt-4">
                          <button
                            onClick={() => onSelectProject(project)}
                            className="w-full group flex items-center justify-between px-4 py-3 bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-mono-custom text-[12px] font-semibold tracking-wider uppercase transition-all duration-200 hover:bg-neutral-800 dark:hover:bg-neutral-100"
                          >
                            <span>READ FULL CASE STUDY</span>
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Supporting Narrative / Footnote credits */}
                  {project.credits && (
                    <div className="mt-6 pt-4 text-[11px] font-mono-custom text-neutral-500 dark:text-neutral-400 flex items-center justify-between">
                      <span>CREDITS: {project.credits}</span>
                      <button
                        onClick={() => onSelectProject(project)}
                        className="text-neutral-800 dark:text-neutral-200 hover:underline uppercase tracking-wider"
                      >
                        [ VIEW ARCHIVE DOSSIER → ]
                      </button>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW MODE: INDEX TABLE (For Fast Recruiter Scanning)                      */}
        {/* ========================================================================= */}
        {viewMode === 'index' && (
          <div className="pt-6 sm:pt-8 pb-4">
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono-custom text-[12px] sm:text-[13px] border-collapse">
                <thead>
                  <tr className="editorial-border-b text-neutral-400 text-[11px] uppercase tracking-widest pb-3">
                    <th className="py-3 px-2 font-normal">NO.</th>
                    <th className="py-3 px-2 font-normal">YEAR</th>
                    <th className="py-3 px-4 font-normal">PROJECT TITLE</th>
                    <th className="py-3 px-4 font-normal">DISCIPLINE</th>
                    <th className="py-3 px-4 font-normal">CLIENT</th>
                    <th className="py-3 px-4 font-normal">ROLE</th>
                    <th className="py-3 px-2 text-right font-normal">ACTION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                  {filteredProjects.map((p) => (
                    <tr
                      key={p.id}
                      onClick={() => onSelectProject(p)}
                      className="hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer transition-colors group"
                    >
                      <td className="py-4 px-2 font-bold text-neutral-400">{p.number}</td>
                      <td className="py-4 px-2 text-neutral-600 dark:text-neutral-400">{p.year}</td>
                      <td className="py-4 px-4 font-display font-bold text-base text-neutral-950 dark:text-white group-hover:underline">
                        {p.title}
                      </td>
                      <td className="py-4 px-4 text-neutral-700 dark:text-neutral-300">
                        <span className="px-2 py-0.5 bg-neutral-200 dark:bg-neutral-800 text-[11px]">
                          {p.category}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-neutral-600 dark:text-neutral-400">{p.client}</td>
                      <td className="py-4 px-4 text-neutral-800 dark:text-neutral-200">{p.role}</td>
                      <td className="py-4 px-2 text-right">
                        <span className="inline-flex items-center space-x-1 text-neutral-900 dark:text-white font-bold group-hover:translate-x-0.5 transition-transform">
                          <span>OPEN</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW MODE: VISUAL MATRIX GRID                                             */}
        {/* ========================================================================= */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 sm:pt-10 pb-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer space-y-3 bg-neutral-100 dark:bg-neutral-900 p-4 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-white transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                  <img
                    src={project.slides[0].url}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/80 text-white font-mono-custom text-[10px] uppercase">
                    {project.year} — {project.category}
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-mono-custom text-neutral-500">
                    <span>NO. {project.number}</span>
                    <span>{project.client}</span>
                  </div>
                  <h4 className="font-display text-lg font-bold text-neutral-950 dark:text-white group-hover:underline">
                    {project.title}
                  </h4>
                  <p className="text-[13px] text-neutral-600 dark:text-neutral-400 line-clamp-2">
                    {project.shortDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
