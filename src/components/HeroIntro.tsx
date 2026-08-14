import React from 'react';
import { ArrowDownRight, ArrowRight, CornerDownRight } from 'lucide-react';

interface HeroIntroProps {
  onOpenResume: () => void;
  onExploreProjects: () => void;
}

export const HeroIntro: React.FC<HeroIntroProps> = ({ onOpenResume, onExploreProjects }) => {
  return (
    <section id="hero-spread" className="w-full relative overflow-hidden pt-8 sm:pt-14 md:pt-20 pb-12 md:pb-20">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Top Metadata Strip / Chapter Indexing */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono-custom text-neutral-500 dark:text-neutral-400 tracking-wider pb-6 md:pb-10 editorial-border-b uppercase">
          <div className="flex items-center space-x-3">
            <span className="text-neutral-900 dark:text-white font-semibold">FOLIO ARCHIVE</span>
            <span>/</span>
            <span>VOL. IV — ED. 2026</span>
          </div>
          <div className="hidden sm:flex items-center space-x-6">
            <span>INDEX: 01 ABOUT — 02 PROJECTS — 03 CONTACT</span>
          </div>
          <div className="flex items-center space-x-3">
            <span>LOC: 37.7749° N, 122.4194° W</span>
            <span className="hidden md:inline text-neutral-300 dark:text-neutral-700">|</span>
            <span className="hidden md:inline">SAN FRANCISCO</span>
          </div>
        </div>

        {/* Primary Editorial Headline Spread */}
        <div className="py-10 sm:py-16 md:py-24">
          <h1 className="font-display text-[2.75rem] sm:text-[3.8rem] md:text-[5.2rem] lg:text-[6.3rem] xl:text-[7.2rem] font-extrabold tracking-[-0.04em] leading-[0.92] text-neutral-950 dark:text-white max-w-[1400px]">
            Graphic and motion designer focusing on the incorporation of design strategy within intentional brand solutions.
          </h1>
        </div>

        {/* Editorial Sub-grid Spread: 4-column asymmetric balance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pt-8 sm:pt-12 editorial-border-t">
          
          {/* Column 1: Studio / Identity */}
          <div className="lg:col-span-3 space-y-3 font-mono-custom">
            <div className="text-[11px] uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              [ 01 — IDENTITY ]
            </div>
            <div className="text-[14px] font-bold text-neutral-900 dark:text-neutral-100 uppercase tracking-tight">
              Kai Vandeberg ©
            </div>
            <p className="text-[13px] text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xs">
              Independent creative direction, high-density editorial systems & spatial experiences for forward-looking brands.
            </p>
          </div>

          {/* Column 2: Selected Works Index */}
          <div className="lg:col-span-3 space-y-3 font-mono-custom">
            <div className="text-[11px] uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              [ 02 — ARCHIVE ]
            </div>
            <div className="text-[14px] font-bold text-neutral-900 dark:text-neutral-100 uppercase tracking-tight">
              Selected Works Index
            </div>
            <div className="text-[13px] text-neutral-600 dark:text-neutral-400">
              <p className="font-semibold text-neutral-900 dark:text-neutral-200">2022 — 2026</p>
              <p className="mt-1 text-[12px] leading-normal text-neutral-500 dark:text-neutral-400">
                Brand Systems, Spatial Identity, Typography Monographs & Motion Direction.
              </p>
            </div>
          </div>

          {/* Column 3: Philosophy / Creative Focus */}
          <div className="lg:col-span-3 space-y-3 font-mono-custom">
            <div className="text-[11px] uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              [ 03 — DISCIPLINE ]
            </div>
            <div className="text-[14px] font-bold text-neutral-900 dark:text-neutral-100 uppercase tracking-tight">
              Ideas / In Motion
            </div>
            <p className="text-[13px] text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Bridging strategic marketing intelligence with uncompromising aesthetic craft.
            </p>
          </div>

          {/* Column 4: Quick Action for Recruiters & Clients */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-4 font-mono-custom">
            <div className="space-y-1.5">
              <div className="text-[11px] uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                [ 04 — DIRECT JUMP ]
              </div>
              <div className="text-[12px] font-medium text-emerald-600 dark:text-emerald-400 flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-ping"></span>
                <span>OPEN FOR HIRES / COMMISSIONS</span>
              </div>
            </div>

            <div className="flex flex-col space-y-2 pt-2">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  onExploreProjects();
                }}
                className="group flex items-center justify-between px-3.5 py-2.5 bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 text-[12px] font-semibold tracking-wider uppercase transition-all duration-200 hover:bg-neutral-800 dark:hover:bg-neutral-200"
              >
                <span>EXPLORE PROJECTS (06)</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="group flex items-center justify-between px-3.5 py-2.5 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-200 text-neutral-800 dark:text-neutral-200 text-[12px] tracking-wider uppercase transition-colors"
              >
                <span>RECRUITER RESUME / CV</span>
                <ArrowDownRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
