import React, { useState } from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { X, Download, Printer, Copy, Check, ExternalLink, Mail, MapPin, Award, GraduationCap, Briefcase } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const plainText = `
${RESUME_DATA.name} — ${RESUME_DATA.title}
Email: ${RESUME_DATA.email} | Website: ${RESUME_DATA.website} | Location: ${RESUME_DATA.location}

SUMMARY:
${RESUME_DATA.summary}

EXPERIENCE:
${RESUME_DATA.experiences
  .map(
    (e) => `
• ${e.role} | ${e.company} (${e.period}) - ${e.location}
  ${e.description}
  Key Achievements:
  ${e.achievements.map((a) => `  - ${a}`).join('\n')}
`
  )
  .join('\n')}

EDUCATION:
${RESUME_DATA.education
  .map((ed) => `• ${ed.degree} — ${ed.institution} (${ed.period})\n  ${ed.details}`)
  .join('\n\n')}

AWARDS & RECOGNITION:
${RESUME_DATA.awards.map((aw) => `• ${aw.year}: ${aw.award} (${aw.category})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(plainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(RESUME_DATA, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `Kai_Vandeberg_Resume_2026.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/80 backdrop-blur-md flex justify-center p-0 sm:p-4 md:p-6 animate-in fade-in duration-200"
    >
      <div
        id="resume-modal-content"
        className="w-full max-w-4xl bg-white dark:bg-[#0c0c0d] text-neutral-900 dark:text-neutral-100 min-h-screen sm:min-h-0 sm:my-8 border border-neutral-300 dark:border-neutral-800 shadow-2xl flex flex-col"
      >
        {/* Top Action Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-[#0c0c0d]/95 backdrop-blur-sm editorial-border-b font-mono-custom text-[12px]">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-neutral-950 dark:text-white uppercase">
              CURRICULUM VITAE — 2026
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyText}
              className="flex items-center space-x-1 px-2.5 py-1.5 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-white text-[11px] uppercase transition-colors"
              title="Copy plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'COPIED!' : 'COPY TEXT'}</span>
            </button>

            <button
              onClick={handleDownloadJSON}
              className="hidden sm:flex items-center space-x-1 px-2.5 py-1.5 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-white text-[11px] uppercase transition-colors"
              title="Download structured data"
            >
              <Download className="w-3.5 h-3.5" />
              <span>EXPORT JSON</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center space-x-1 px-2.5 py-1.5 bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 text-[11px] uppercase hover:opacity-80 transition-opacity"
              title="Print document"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-950 dark:hover:border-white transition-colors ml-2"
              title="Close resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Body */}
        <div className="p-6 sm:p-10 md:p-12 space-y-10 font-sans">
          
          {/* Header Identity */}
          <div className="space-y-4 pb-8 editorial-border-b">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
                {RESUME_DATA.name}
              </h1>
              <span className="font-mono-custom text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase">
                ● STATUS: OPEN FOR SELECT ROLES
              </span>
            </div>

            <div className="font-display text-lg text-neutral-700 dark:text-neutral-300 font-semibold">
              {RESUME_DATA.title}
            </div>

            <div className="flex flex-wrap gap-4 font-mono-custom text-[12px] text-neutral-600 dark:text-neutral-400 pt-1">
              <div className="flex items-center space-x-1.5">
                <Mail className="w-3.5 h-3.5" />
                <span>{RESUME_DATA.email}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{RESUME_DATA.location}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{RESUME_DATA.website}</span>
              </div>
            </div>

            <p className="text-[14px] text-neutral-700 dark:text-neutral-300 leading-relaxed pt-2">
              {RESUME_DATA.summary}
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 font-mono-custom text-[12px] uppercase tracking-widest text-neutral-500 pb-2 editorial-border-b">
              <Briefcase className="w-4 h-4" />
              <span>PROFESSIONAL WORK EXPERIENCE</span>
            </div>

            <div className="space-y-8">
              {RESUME_DATA.experiences.map((exp, idx) => (
                <div key={idx} className="space-y-2.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 font-mono-custom text-[12px]">
                    <div className="font-bold text-neutral-950 dark:text-white text-[14px]">
                      {exp.role} <span className="font-normal text-neutral-500">— {exp.company}</span>
                    </div>
                    <div className="text-neutral-500 font-medium">
                      {exp.period} | {exp.location}
                    </div>
                  </div>

                  <p className="text-[14px] text-neutral-700 dark:text-neutral-300">
                    {exp.description}
                  </p>

                  <ul className="space-y-1 pl-4 list-disc text-[13px] text-neutral-600 dark:text-neutral-400">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6 pt-4 editorial-border-t">
            <div className="flex items-center space-x-2 font-mono-custom text-[12px] uppercase tracking-widest text-neutral-500 pb-2 editorial-border-b">
              <GraduationCap className="w-4 h-4" />
              <span>EDUCATION & SPECIALIZATION</span>
            </div>

            <div className="space-y-6">
              {RESUME_DATA.education.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 font-mono-custom text-[12px]">
                    <div className="font-bold text-neutral-950 dark:text-white text-[14px]">
                      {edu.degree}
                    </div>
                    <div className="text-neutral-500">{edu.period}</div>
                  </div>
                  <div className="text-[13px] font-semibold text-neutral-800 dark:text-neutral-200">
                    {edu.institution}
                  </div>
                  <div className="text-[13px] text-neutral-600 dark:text-neutral-400">
                    {edu.details}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="space-y-4 pt-4 editorial-border-t">
            <div className="flex items-center space-x-2 font-mono-custom text-[12px] uppercase tracking-widest text-neutral-500 pb-2 editorial-border-b">
              <Award className="w-4 h-4" />
              <span>SELECTED HONORS & AWARDS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono-custom text-[12px]">
              {RESUME_DATA.awards.map((aw, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-baseline justify-between"
                >
                  <div>
                    <span className="font-bold text-neutral-950 dark:text-white block">{aw.award}</span>
                    <span className="text-[11px] text-neutral-500">{aw.category}</span>
                  </div>
                  <span className="text-[11px] text-neutral-400 font-bold ml-2">{aw.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Proficiencies */}
          <div className="space-y-4 pt-4 editorial-border-t font-mono-custom text-[12px]">
            <div className="text-[12px] uppercase tracking-widest text-neutral-500 pb-2 editorial-border-b">
              TECHNICAL COMPETENCIES
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(RESUME_DATA.technicalProficiencies).map(([cat, skills], idx) => (
                <div key={idx} className="space-y-1">
                  <span className="font-bold text-neutral-950 dark:text-white uppercase text-[11px]">
                    {cat}:
                  </span>
                  <div className="text-neutral-600 dark:text-neutral-400 text-[12px]">
                    {skills.join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
