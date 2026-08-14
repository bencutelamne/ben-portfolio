import React from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/projectsData';
import { X, Sparkles, FileText, CheckCircle2, ArrowRight, Mail } from 'lucide-react';

interface RecruiterFastBarProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onSelectProject: (p: Project) => void;
}

export const RecruiterFastBar: React.FC<RecruiterFastBarProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onSelectProject,
}) => {
  if (!isOpen) return null;

  const topProjects = PROJECTS.slice(0, 3);

  return (
    <div
      id="recruiter-fast-track-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="w-full max-w-3xl bg-white dark:bg-[#0c0c0d] text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-800 shadow-2xl p-6 sm:p-10 space-y-8 font-sans">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-6 editorial-border-b">
          <div>
            <div className="flex items-center space-x-2 text-[11px] font-mono-custom text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>3-MINUTE EXECUTIVE SUMMARY FOR HIRING TEAMS</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white">
              Kai Vandeberg — At a Glance
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Core Strengths for Recruiters */}
        <div className="space-y-3">
          <div className="text-[11px] font-mono-custom uppercase tracking-widest text-neutral-500">
            CORE VALUE PROPOSITION:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono-custom text-[12px]">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-1.5">
              <div className="font-bold text-neutral-950 dark:text-white text-[13px]">
                01. Strategy + Aesthetics
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 text-[11px] leading-relaxed">
                UC Berkeley Strategic Marketing + Basel School typography mastery.
              </p>
            </div>

            <div className="p-4 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-1.5">
              <div className="font-bold text-neutral-950 dark:text-white text-[13px]">
                02. Cross-Medium Mastery
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 text-[11px] leading-relaxed">
                Seamless fluid execution across Brand Identity, Print, Motion 3D & Digital Product UI.
              </p>
            </div>

            <div className="p-4 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-1.5">
              <div className="font-bold text-neutral-950 dark:text-white text-[13px]">
                03. Proven Leadership
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 text-[11px] leading-relaxed">
                7+ years directing international campaigns & managing cross-functional design squads.
              </p>
            </div>
          </div>
        </div>

        {/* Top Recommended 3 Case Studies */}
        <div className="space-y-3 pt-2">
          <div className="text-[11px] font-mono-custom uppercase tracking-widest text-neutral-500">
            RECOMMENDED CASE STUDIES TO EVALUATE:
          </div>
          <div className="space-y-2 font-mono-custom text-[12px]">
            {topProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => {
                  onClose();
                  onSelectProject(proj);
                }}
                className="p-3 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-white bg-neutral-50/50 dark:bg-neutral-900/50 flex items-center justify-between cursor-pointer group transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <span className="font-bold text-neutral-400">NO. {proj.number}</span>
                  <span className="font-display font-bold text-sm text-neutral-950 dark:text-white group-hover:underline">
                    {proj.title}
                  </span>
                  <span className="text-[10px] text-neutral-500 uppercase hidden sm:inline">
                    [{proj.category}]
                  </span>
                </div>
                <span className="text-neutral-900 dark:text-white font-semibold flex items-center space-x-1">
                  <span>READ DOSSIER</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 editorial-border-t flex flex-col sm:flex-row items-center justify-between gap-3 font-mono-custom text-[12px]">
          <button
            onClick={() => {
              onClose();
              onOpenResume();
            }}
            className="w-full sm:w-auto px-5 py-3 bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-bold uppercase tracking-wider flex items-center justify-center space-x-2"
          >
            <FileText className="w-4 h-4" />
            <span>OPEN COMPLETE RESUME / CV</span>
          </button>

          <a
            href="mailto:kai.vandeberg.design@gmail.com?subject=Recruiter Inquiry for Kai Vandeberg"
            className="w-full sm:w-auto px-5 py-3 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-white text-center font-bold uppercase tracking-wider text-neutral-900 dark:text-white flex items-center justify-center space-x-2"
          >
            <Mail className="w-4 h-4" />
            <span>DIRECT EMAIL OUTREACH</span>
          </a>
        </div>

      </div>
    </div>
  );
};
