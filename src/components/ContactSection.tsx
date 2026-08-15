import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, FileText, Send, Sparkles, MapPin } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [inquiryType, setInquiryType] = useState<string>('Full-time Creative Direction');
  const [customMsg, setCustomMsg] = useState('');
  const [sentStatus, setSentStatus] = useState(false);

  const emailAddress = 'kai.vandeberg.design@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${emailAddress}?subject=Inquiry: ${encodeURIComponent(
      inquiryType
    )}&body=${encodeURIComponent(customMsg || 'Hi Kai, I would love to connect regarding an opportunity...')}`;
    window.location.href = mailtoUrl;
    setSentStatus(true);
    setTimeout(() => setSentStatus(false), 3000);
  };

  const socialLinks = [
    { label: 'LINKEDIN', href: RESUME_DATA.linkedin },
    { label: 'BEHANCE', href: RESUME_DATA.behance },
    { label: 'READ.CV', href: RESUME_DATA.readcv },
    { label: 'GITHUB', href: RESUME_DATA.github },
    { label: 'INSTAGRAM', href: 'https://instagram.com/kaivandeberg' },
  ];

  return (
    <section id="contact" className="w-full relative pt-10 sm:pt-12 md:pt-14 pb-12 sm:pb-16 md:pb-20 editorial-border-t">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Section Header */}
        <div className="pb-6 sm:pb-8 md:pb-10 editorial-border-b">
          <div className="text-[12px] font-mono-custom uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-2">
            SECTION 03 — INQUIRIES & COLLABORATIONS
          </div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[0.95]">
            Let’s build something deliberate.
          </h2>
        </div>

        {/* 2-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-8 sm:pt-10 md:pt-12 pb-10 sm:pb-12 md:pb-16 editorial-border-b">
          
          {/* Left Column (7 Cols): Direct Contact Actions & Big Copy Target */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-xl">
                Always interested in hearing about leadership roles, full-scale brand identity commissions, editorial monographs, and experimental motion projects.
              </p>

              <div className="flex items-center space-x-2 text-[12px] font-mono-custom text-neutral-500">
                <MapPin className="w-3.5 h-3.5" />
                <span>SAN FRANCISCO, CA / AVAILABLE GLOBALLY</span>
              </div>
            </div>

            {/* Big One-Click Email Copy Banner */}
            <div className="space-y-3">
              <div className="text-[11px] font-mono-custom uppercase tracking-widest text-neutral-400">
                DIRECT ELECTRONIC MAIL:
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={`mailto:${emailAddress}`}
                  className="px-5 py-4 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 font-mono-custom text-base sm:text-lg font-bold text-neutral-950 dark:text-white hover:border-neutral-950 dark:hover:border-white transition-colors truncate flex-1"
                >
                  {emailAddress}
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="px-5 py-4 bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-mono-custom text-[12px] font-bold tracking-wider uppercase flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedEmail ? 'COPIED!' : 'COPY EMAIL'}</span>
                </button>
              </div>
            </div>

            {/* Social & Professional Links Index */}
            <div className="space-y-4 pt-6 editorial-border-t">
              <div className="text-[11px] font-mono-custom uppercase tracking-widest text-neutral-400">
                EXTERNAL CHANNELS & PROFILES:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono-custom text-[12px]">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-white transition-colors flex items-center justify-between text-neutral-800 dark:text-neutral-200 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ))}

                <button
                  onClick={onOpenResume}
                  className="p-3 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-950 dark:hover:border-white transition-colors flex items-center justify-between text-neutral-950 dark:text-white font-bold group text-left"
                >
                  <span>RESUME / CV</span>
                  <FileText className="w-3.5 h-3.5 text-neutral-500 group-hover:text-neutral-950 dark:group-hover:text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column (5 Cols): Project Inquiry Brief Builder */}
          <div className="lg:col-span-5 p-6 sm:p-8 bg-neutral-100/70 dark:bg-neutral-900/70 border border-neutral-300 dark:border-neutral-800 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[11px] font-mono-custom uppercase tracking-widest text-neutral-500">
                <span>WORK INQUIRY / BRIEF COMPOSER</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              </div>

              <h3 className="font-display text-xl font-bold text-neutral-950 dark:text-white">
                Initiate a Conversation
              </h3>

              <form onSubmit={handleSendInquiry} className="space-y-4 font-mono-custom text-[12px]">
                <div>
                  <label className="block text-neutral-500 text-[10px] uppercase tracking-wider mb-1.5">
                    Select Opportunity Nature:
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full p-2.5 bg-white dark:bg-[#0c0c0d] border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-950 dark:focus:border-white text-xs"
                  >
                    <option value="Full-time Creative Direction Role">Full-time Creative Direction / Lead Role</option>
                    <option value="Senior Brand & Visual Systems Position">Senior Brand Systems Position</option>
                    <option value="Independent Studio Commission">Independent Studio Commission</option>
                    <option value="Exhibition / Editorial Collaboration">Exhibition / Editorial Collaboration</option>
                    <option value="Advisory / Workshop / Speaking">Advisory / Workshop / Speaking</option>
                  </select>
                </div>

                <div>
                  <label className="block text-neutral-500 text-[10px] uppercase tracking-wider mb-1.5">
                    Brief Note or Scope Overview:
                  </label>
                  <textarea
                    rows={4}
                    value={customMsg}
                    onChange={(e) => setCustomMsg(e.target.value)}
                    placeholder="Describe timeline, scope, or company background..."
                    className="w-full p-2.5 bg-white dark:bg-[#0c0c0d] border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-950 dark:focus:border-white text-xs placeholder:text-neutral-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-bold uppercase tracking-wider text-[11px] hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{sentStatus ? 'OPENING EMAIL CLIENT...' : 'SEND INQUIRY VIA EMAIL'}</span>
                </button>
              </form>
            </div>

            <div className="text-[10px] font-mono-custom text-neutral-400 pt-2">
              ESTIMATED RESPONSE TIME: WITHIN 24 HOURS
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
