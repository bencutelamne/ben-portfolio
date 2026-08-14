import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [sfTime, setSfTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Los_Angeles',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setSfTime(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-white dark:bg-[#0c0c0d] editorial-border-t py-12 md:py-16 text-[12px] font-mono-custom text-neutral-500 dark:text-neutral-400">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* 4-column colophon footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 editorial-border-b">
          
          {/* Column 1: Identity & Copyright */}
          <div className="lg:col-span-4 space-y-2">
            <div className="font-bold text-neutral-900 dark:text-white uppercase tracking-tight">
              KAI VANDEBERG © 2026
            </div>
            <p className="text-[11px] text-neutral-500 leading-relaxed max-w-sm">
              All visual artifacts, monographs, generative scripts, and typographic specimens are protected by intellectual copyright.
            </p>
          </div>

          {/* Column 2: Colophon & Typefaces */}
          <div className="lg:col-span-3 space-y-2">
            <div className="text-[11px] uppercase tracking-widest text-neutral-400">
              COLOPHON / TYPE
            </div>
            <div className="text-[11px] text-neutral-600 dark:text-neutral-400 space-y-1">
              <div>Display: Syne & Plus Jakarta Sans</div>
              <div>Body: Plus Jakarta Sans</div>
              <div>Monospace: JetBrains Mono</div>
              <div>Editorial Serif: Instrument Serif</div>
            </div>
          </div>

          {/* Column 3: Live Studio Local Time */}
          <div className="lg:col-span-3 space-y-2">
            <div className="text-[11px] uppercase tracking-widest text-neutral-400">
              STUDIO TIME / LOC
            </div>
            <div className="text-[11px] text-neutral-800 dark:text-neutral-200">
              <div className="font-bold text-neutral-950 dark:text-white font-mono-custom">
                {sfTime || 'PACIFIC STANDARD TIME'}
              </div>
              <div className="text-neutral-500">SAN FRANCISCO, CA (PST / UTC-8)</div>
            </div>
          </div>

          {/* Column 4: Back to Top */}
          <div className="lg:col-span-2 flex flex-col justify-between items-start lg:items-end">
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 px-3 py-2 border border-neutral-300 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-white text-neutral-900 dark:text-white transition-colors"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom micro-bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest text-neutral-400">
          <div>ART-DIRECTED EDITORIAL ARCHIVE SYSTEM</div>
          <div>DESIGNED WITH INTENTION & TYPOGRAPHIC DISCIPLINE</div>
        </div>

      </div>
    </footer>
  );
};
