import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, FileText, Sparkles } from 'lucide-react';
import headerLogoSrc from '../asset/Loadingscreen.png';

interface HeaderProps {
  activeSection: string;
  onOpenResume: () => void;
  onOpenRecruiterTour?: () => void;
}

const HEADER_LOGO_SRC = headerLogoSrc;

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onOpenResume,
  onOpenRecruiterTour,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '01 ABOUT', href: '#about', id: 'about' },
    { label: '02 PROJECTS', href: '#projects', id: 'projects' },
    { label: '03 CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      id="editorial-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#0c0c0d]/95 backdrop-blur-md editorial-border-b'
          : 'bg-white dark:bg-[#0c0c0d] editorial-border-b'
      }`}
    >
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20 text-[13px] tracking-tight">
          {/* Brand Monogram & Name */}
          <div className="flex items-center space-x-6 sm:space-x-8">
            <a
              href="#"
              className="group flex items-center space-x-2.5 font-mono-custom tracking-tighter text-sm md:text-base font-semibold focus:outline-none"
              title="Return to top"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 overflow-hidden rounded-sm bg-black transition-opacity duration-200 group-hover:opacity-85">
                <img
                  src={HEADER_LOGO_SRC}
                  alt=""
                  className="h-full w-full object-contain"
                  draggable={false}
                />
              </span>
              <span className="font-display font-bold tracking-tight uppercase text-neutral-900 dark:text-neutral-50 text-[13px] md:text-[14px]">
                ANTIBEN
              </span>
            </a>

            <div className="hidden lg:flex items-center space-x-2 text-[11px] font-mono-custom text-neutral-500 dark:text-neutral-400">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#f78500] animate-pulse"></span>
              <span className="uppercase tracking-wider">AVAILABLE FOR SELECTED COMMISSIONS</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 font-mono-custom text-[12px] tracking-wider uppercase">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`relative py-1 transition-colors duration-150 ${
                    isActive
                      ? 'text-neutral-900 dark:text-white font-semibold'
                      : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'
                  }`}
                >
                  <span className="flex items-center space-x-1">
                    {isActive && <span className="text-[10px] text-neutral-900 dark:text-white">▪</span>}
                    <span>{item.label}</span>
                  </span>
                </a>
              );
            })}

            {/* Resume Button */}
            <button
              id="header-resume-btn"
              onClick={onOpenResume}
              className="flex items-center space-x-1.5 px-3 py-1.5 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-200 text-neutral-800 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white transition-all text-[11px] font-mono-custom tracking-wider rounded-none"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CV / RÉSUME</span>
            </button>

          </nav>

          {/* Mobile Menu Controls */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation drawer"
              className="p-2 border border-neutral-900 dark:border-neutral-100 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden w-full bg-white dark:bg-[#0c0c0d] editorial-border-b px-6 py-6 space-y-5 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="space-y-3 font-mono-custom text-sm">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 border-b border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col space-y-3 font-mono-custom text-xs">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center space-x-2 py-2.5 border border-neutral-900 dark:border-neutral-100 font-semibold"
            >
              <FileText className="w-4 h-4" />
              <span>VIEW FULL CV / RÉSUME</span>
            </button>

            <div className="pt-2 flex items-center justify-between text-[11px] text-neutral-500 dark:text-neutral-400">
              <span>LOCATION: SF & REMOTE</span>
              <span className="text-[#f78500] font-medium">AVAILABLE FOR HIRE</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
