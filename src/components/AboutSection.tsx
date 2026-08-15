import React, { useState } from 'react';
import {
  ABOUT_PROFILE,
  CHAPTER_01_MARKETING_EDUCATION,
  CHAPTER_02_DESIGN_JOURNEY,
  CHAPTER_03_THE_FUTURE,
} from '../data/aboutData';
import { ArrowRight, BookOpen, Compass, Sparkles, Award, GraduationCap, CheckCircle2, ChevronRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'ch1' | 'ch2' | 'ch3'>('all');
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const chapterButtonClass = (tab: typeof activeTab) =>
    `px-3 py-1.5 whitespace-nowrap transition-all ${
      activeTab === tab
        ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-semibold'
        : 'border border-neutral-300 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
    }`;

  return (
    <section id="about" className="w-full relative pt-3 sm:pt-4 md:pt-5 pb-12 sm:pb-16 md:pb-20 editorial-border-t">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Section Masthead Header */}
        <div className="pb-6 sm:pb-8 md:pb-10 editorial-border-b">
          <div className="flex items-center justify-between gap-4 mb-2">
            <div className="shrink-0 text-[12px] font-mono-custom uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              SECTION 01 — ARCHIVE NARRATIVE
            </div>
            <div className="min-w-0 flex flex-nowrap items-center justify-end gap-2 overflow-x-auto font-mono-custom text-[11px] uppercase tracking-wider">
              <span className="text-neutral-400 mr-1 whitespace-nowrap">VIEW CHAPTERS:</span>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('all');
                  requestAnimationFrame(() => scrollToSection('chapter-01'));
                }}
                className={chapterButtonClass('all')}
              >
                FULL NARRATIVE
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('ch1');
                  requestAnimationFrame(() => scrollToSection('chapter-01'));
                }}
                className={chapterButtonClass('ch1')}
              >
                01 MARKETING & EDU
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('ch2');
                  requestAnimationFrame(() => scrollToSection('chapter-02'));
                }}
                className={chapterButtonClass('ch2')}
              >
                02 DESIGN JOURNEY
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('ch3');
                  requestAnimationFrame(() => scrollToSection('chapter-03'));
                }}
                className={chapterButtonClass('ch3')}
              >
                03 THE FUTURE
              </button>
            </div>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-950 dark:text-white">
            <span className="block">About &</span>
            <span className="block">Trajectory</span>
          </h2>
        </div>

        {/* Lead Narrative & Editorial Portrait Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 pt-8 sm:pt-10 md:pt-12 pb-10 sm:pb-12 md:pb-16 editorial-border-b">
          
          {/* Left Column: Core Positioning Statement */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-2.5 py-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 font-mono-custom text-[11px] tracking-wider uppercase text-neutral-700 dark:text-neutral-300">
                <span>GRAPHIC DESIGNER</span>
                <span>/</span>
                <span>CREATIVE DIRECTOR</span>
              </div>

              <p className="font-display text-2xl sm:text-3xl md:text-4xl text-neutral-900 dark:text-neutral-100 leading-[1.25] font-semibold tracking-tight">
                “Good design is not just about how something looks, but how clearly an idea takes shape and stays memorable.”
              </p>

              <div className="prose dark:prose-invert max-w-2xl text-[15px] sm:text-[16px] text-neutral-700 dark:text-neutral-300 leading-relaxed space-y-4">
                <p>
                  I work across brand strategy, editorial design, motion, and digital experiences. With a background in marketing and Swiss typography, I focus on creating design systems that feel clear, thoughtful, and easy to understand.
                </p>
                <p>
                  Across every project, my approach stays consistent: <strong className="font-semibold text-neutral-950 dark:text-white">strong typography, intentional spacing, and a distinct visual personality.</strong>
                </p>
              </div>
            </div>

            {/* Quick Metrics / Recruiter snapshot */}
            <div className="grid grid-cols-3 gap-4 pt-6 editorial-border-t font-mono-custom">
              <div>
                <div className="text-3xl sm:text-4xl font-bold font-display text-neutral-950 dark:text-white">2+</div>
                <div className="text-[11px] text-neutral-500 uppercase tracking-wider mt-0.5">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold font-display text-neutral-950 dark:text-white">10+</div>
                <div className="text-[11px] text-neutral-500 uppercase tracking-wider mt-0.5">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold font-display text-neutral-950 dark:text-white">20+</div>
                <div className="text-[11px] text-neutral-500 uppercase tracking-wider mt-0.5">Clients Served</div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Portrait Placeholder */}
          <div className="lg:col-span-5 relative flex flex-col justify-center">
            <div className="relative group p-3 sm:p-4 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800">
              
              {/* Top metadata strip on portrait */}
              <div className="flex items-center justify-between text-[10px] font-mono-custom text-neutral-500 dark:text-neutral-400 uppercase tracking-widest pb-3">
                <span>{ABOUT_PROFILE.portraitPlaceholder.caption}</span>
                <span>{ABOUT_PROFILE.portraitPlaceholder.coordinates}</span>
              </div>

              {/* The Art-Directed Portrait Image Frame */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700">
                <img
                  src={ABOUT_PROFILE.portraitPlaceholder.imageUrl}
                  alt={ABOUT_PROFILE.portraitPlaceholder.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter grayscale contrast-110 group-hover:scale-105 group-hover:filter-none transition-all duration-700"
                />

                {/* Offset Graphic Annotation Box */}
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-neutral-950/90 backdrop-blur-sm text-white font-mono-custom text-[11px] border border-neutral-700/80">
                  <div className="flex items-center justify-between font-bold tracking-tight uppercase">
                    <span>{ABOUT_PROFILE.name}</span>
                    <span className="text-emerald-400">● LIVE</span>
                  </div>
                  <div className="text-[10px] text-neutral-300 mt-1 uppercase whitespace-pre-line">
                    {ABOUT_PROFILE.role} — {ABOUT_PROFILE.location}
                  </div>
                </div>
              </div>

              {/* Bottom annotation text */}
              <div className="pt-3 flex items-center justify-between text-[10px] font-mono-custom text-neutral-500 dark:text-neutral-400">
                <span>FORMAT: 35MM MONOCHROME</span>
                <span>STUDIO ARCHIVE 2024</span>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* CHAPTER 01 — MARKETING & EDUCATION */}
        {/* ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'ch1') && (
          <div id="chapter-01" className="pt-10 sm:pt-12 md:pt-14 pb-12 sm:pb-16 md:pb-20 editorial-border-b">
            {/* Chapter Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline mb-8 sm:mb-10 md:mb-12">
              <div className="lg:col-span-2">
                <span className="font-mono-custom text-4xl sm:text-5xl font-bold tracking-tighter text-neutral-400 dark:text-neutral-600">
                  01 /
                </span>
              </div>
              <div className="lg:col-span-6">
                <div className="text-[11px] font-mono-custom uppercase tracking-widest text-neutral-500 mb-1">
                  CHAPTER 01 — THE COGNITIVE FOUNDATION
                </div>
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-950 dark:text-white">
                  {CHAPTER_01_MARKETING_EDUCATION.title}
                </h3>
              </div>
              <div className="lg:col-span-4 font-mono-custom text-[13px] text-neutral-600 dark:text-neutral-400">
                <p>{CHAPTER_01_MARKETING_EDUCATION.subtitle}</p>
              </div>
            </div>

            {/* Chapter Lead */}
            <div className="max-w-4xl text-lg sm:text-xl text-neutral-800 dark:text-neutral-200 font-medium leading-relaxed mb-10 sm:mb-12">
              <p>{CHAPTER_01_MARKETING_EDUCATION.lead}</p>
            </div>

            {/* Editorial Columns: Education + Marketing Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
              
              {/* Left Column (5 cols): Academic Pedigree */}
              <div className="lg:col-span-5 space-y-8">
                <div className="text-[12px] font-mono-custom uppercase tracking-widest text-neutral-500 pb-2 editorial-border-b flex items-center justify-between">
                  <span>ACADEMIC BACKGROUND</span>
                  <GraduationCap className="w-4 h-4" />
                </div>

                <div className="space-y-8">
                  {CHAPTER_01_MARKETING_EDUCATION.education.map((edu, idx) => (
                    <div key={idx} className="space-y-2 group">
                      <div className="flex items-center justify-between text-[11px] font-mono-custom text-neutral-500">
                        <span className="font-semibold text-neutral-900 dark:text-neutral-200">{edu.school}</span>
                        <span>{edu.year}</span>
                      </div>
                      <h4 className="font-display text-lg font-bold text-neutral-950 dark:text-white">
                        {edu.degree}
                      </h4>
                      <div className="text-[12px] font-mono-custom text-emerald-700 dark:text-emerald-400 font-medium">
                        {edu.honors}
                      </div>
                      <p className="text-[14px] text-neutral-600 dark:text-neutral-400 leading-normal">
                        {edu.focus}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column (7 cols): Strategic Marketing Insights */}
              <div className="lg:col-span-7 space-y-8">
                <div className="text-[12px] font-mono-custom uppercase tracking-widest text-neutral-500 pb-2 editorial-border-b flex items-center justify-between">
                  <span>STRATEGIC THINKING PILLARS</span>
                  <BookOpen className="w-4 h-4" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
                  {CHAPTER_01_MARKETING_EDUCATION.marketingInsights.map((insight, idx) => (
                    <div
                      key={idx}
                      className="p-5 bg-neutral-100/70 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 relative"
                    >
                      <div className="text-[11px] font-mono-custom text-neutral-400 mb-1">
                        PILLAR 0{idx + 1}
                      </div>
                      <h5 className="font-display text-base font-bold text-neutral-950 dark:text-white mb-2">
                        {insight.title}
                      </h5>
                      <p className="text-[14px] text-neutral-600 dark:text-neutral-300 leading-relaxed">
                        {insight.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* CHAPTER 02 — MY DESIGN JOURNEY */}
        {/* ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'ch2') && (
          <div id="chapter-02" className="pt-10 sm:pt-12 md:pt-14 pb-12 sm:pb-16 md:pb-20 editorial-border-b">
            {/* Chapter Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline mb-8 sm:mb-10 md:mb-12">
              <div className="lg:col-span-2">
                <span className="font-mono-custom text-4xl sm:text-5xl font-bold tracking-tighter text-neutral-400 dark:text-neutral-600">
                  02 /
                </span>
              </div>
              <div className="lg:col-span-6">
                <div className="text-[11px] font-mono-custom uppercase tracking-widest text-neutral-500 mb-1">
                  CHAPTER 02 — PROGRESSION & EVOLUTION
                </div>
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-950 dark:text-white">
                  {CHAPTER_02_DESIGN_JOURNEY.title}
                </h3>
              </div>
              <div className="lg:col-span-4 font-mono-custom text-[13px] text-neutral-600 dark:text-neutral-400">
                <p>{CHAPTER_02_DESIGN_JOURNEY.subtitle}</p>
              </div>
            </div>

            {/* Chapter Lead */}
            <div className="max-w-4xl text-lg sm:text-xl text-neutral-800 dark:text-neutral-200 font-medium leading-relaxed mb-10 sm:mb-12">
              <p>{CHAPTER_02_DESIGN_JOURNEY.lead}</p>
            </div>

            {/* Interactive Journey Phases Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 sm:mb-14">
              {/* Phase Selector tabs on the left */}
              <div className="lg:col-span-4 flex flex-col space-y-2">
                {CHAPTER_02_DESIGN_JOURNEY.phases.map((phase, idx) => (
                  <button
                    key={phase.id}
                    onClick={() => setActivePhaseIndex(idx)}
                    className={`text-left p-4 border transition-all ${
                      activePhaseIndex === idx
                        ? 'border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-black'
                        : 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700 bg-transparent text-neutral-700 dark:text-neutral-300'
                    }`}
                  >
                    <div className="text-[10px] font-mono-custom uppercase tracking-widest opacity-80 mb-1">
                      {phase.period}
                    </div>
                    <div className="font-display font-bold text-sm sm:text-base leading-snug">
                      {phase.discipline}
                    </div>
                  </button>
                ))}
              </div>

              {/* Active Phase Deep Dive Detail */}
              <div className="lg:col-span-8 p-6 sm:p-8 bg-neutral-100/80 dark:bg-neutral-900/80 border border-neutral-300 dark:border-neutral-800 flex flex-col justify-between space-y-6">
                <div>
                  <div className="text-[11px] font-mono-custom uppercase tracking-widest text-neutral-500 mb-2">
                    {CHAPTER_02_DESIGN_JOURNEY.phases[activePhaseIndex].period} — DISCIPLINARY FOCUS
                  </div>
                  <h4 className="font-display text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white mb-4">
                    {CHAPTER_02_DESIGN_JOURNEY.phases[activePhaseIndex].discipline}
                  </h4>
                  <p className="text-[15px] sm:text-[16px] text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
                    {CHAPTER_02_DESIGN_JOURNEY.phases[activePhaseIndex].summary}
                  </p>

                  <div className="space-y-3">
                    <div className="text-[11px] font-mono-custom uppercase tracking-widest text-neutral-500">
                      MASTERED COMPETENCIES & TECHNIQUES:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {CHAPTER_02_DESIGN_JOURNEY.phases[activePhaseIndex].skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1 bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-mono-custom text-[12px] border border-neutral-300 dark:border-neutral-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 editorial-border-t flex items-center space-x-2 text-[12px] font-mono-custom text-emerald-700 dark:text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>KEY MILESTONE: {CHAPTER_02_DESIGN_JOURNEY.phases[activePhaseIndex].highlight}</span>
                </div>
              </div>
            </div>

            {/* Competency & Software Skills Matrix */}
            <div className="pt-8">
              <div className="text-[12px] font-mono-custom uppercase tracking-widest text-neutral-500 mb-6 editorial-border-b pb-2">
                CURATED DISCIPLINARY MATRIX & TOOLCHAIN
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {CHAPTER_02_DESIGN_JOURNEY.skillMatrix.map((group, gIdx) => (
                  <div key={gIdx} className="space-y-4">
                    <h5 className="font-display text-lg font-bold text-neutral-900 dark:text-neutral-100">
                      {group.category}
                    </h5>
                    <div className="space-y-2 font-mono-custom text-[13px]">
                      {group.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center justify-between py-2 px-3 border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50"
                        >
                          <span className={skill.highlighted ? 'font-semibold text-neutral-950 dark:text-white' : 'text-neutral-600 dark:text-neutral-400'}>
                            {skill.name}
                          </span>
                          <span className="text-[11px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                            [{skill.level}]
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* CHAPTER 03 — THE FUTURE */}
        {/* ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'ch3') && (
          <div id="chapter-03" className="pt-10 sm:pt-12 md:pt-14 pb-0">
            {/* Chapter Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline mb-8 sm:mb-10 md:mb-12">
              <div className="lg:col-span-2">
                <span className="font-mono-custom text-4xl sm:text-5xl font-bold tracking-tighter text-neutral-400 dark:text-neutral-600">
                  03 /
                </span>
              </div>
              <div className="lg:col-span-6">
                <div className="text-[11px] font-mono-custom uppercase tracking-widest text-neutral-500 mb-1">
                  CHAPTER 03 — TRAJECTORY & NEXT HORIZONS
                </div>
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-950 dark:text-white">
                  {CHAPTER_03_THE_FUTURE.title}
                </h3>
              </div>
              <div className="lg:col-span-4 font-mono-custom text-[13px] text-neutral-600 dark:text-neutral-400">
                <p>{CHAPTER_03_THE_FUTURE.subtitle}</p>
              </div>
            </div>

            {/* Chapter Lead */}
            <div className="max-w-4xl text-lg sm:text-xl text-neutral-800 dark:text-neutral-200 font-medium leading-relaxed mb-10 sm:mb-12">
              <p>{CHAPTER_03_THE_FUTURE.lead}</p>
            </div>

            {/* 3 Asymmetric Future Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 sm:mb-14">
              {CHAPTER_03_THE_FUTURE.aspirations.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 bg-neutral-100/60 dark:bg-neutral-900/60 border border-neutral-300 dark:border-neutral-800 flex flex-col justify-between space-y-6"
                >
                  <div>
                    <span className="font-mono-custom text-2xl font-bold text-neutral-400 dark:text-neutral-500">
                      {item.number}
                    </span>
                    <h4 className="font-display text-xl font-bold text-neutral-950 dark:text-white mt-4 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[14px] text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-[10px] font-mono-custom uppercase tracking-widest text-neutral-400">
                    FOCUS: 2026 — 2030 RESEARCH
                  </div>
                </div>
              ))}
            </div>

            {/* Target Teams & Recruiter Callout */}
            <div className="p-8 sm:p-12 bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-950 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl">
                <div className="text-[11px] font-mono-custom uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
                  CULTURE & TEAM FIT
                </div>
                <h4 className="font-display text-2xl sm:text-3xl font-bold">
                  Looking to collaborate with visionary teams who value relentless visual craft.
                </h4>
                <div className="space-y-1 text-[13px] font-mono-custom text-neutral-300 dark:text-neutral-700">
                  {CHAPTER_03_THE_FUTURE.idealTeams.map((team, tIdx) => (
                    <div key={tIdx} className="flex items-center space-x-2">
                      <span className="text-emerald-400 dark:text-emerald-600">→</span>
                      <span>{team}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenResume}
                  className="px-6 py-3 bg-white text-neutral-950 dark:bg-neutral-950 dark:text-white font-mono-custom text-[12px] font-bold tracking-wider uppercase hover:opacity-90 transition-opacity"
                >
                  VIEW FULL CV
                </button>
                <a
                  href="#contact"
                  className="px-6 py-3 border border-neutral-700 dark:border-neutral-300 text-white dark:text-neutral-950 font-mono-custom text-[12px] tracking-wider uppercase hover:bg-white/10 dark:hover:bg-black/10 transition-colors flex items-center justify-center space-x-1.5"
                >
                  <span>GET IN TOUCH</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
