import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Globe, FileText, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar({ activeView, onNavigate, theme, onToggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-2xl border-b transition-colors duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
      style={{
        backgroundColor: theme === 'dark' ? 'rgba(7, 11, 19, 0.88)' : 'rgba(255, 255, 255, 0.92)',
        borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'
      }}>
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-1 text-2xl font-bold tracking-tight text-white hover:opacity-90 transition-opacity focus:outline-none"
        >
          <span className="text-white font-extrabold tracking-tight">Okasha</span>
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 inline-block ml-0.5 animate-pulse" />
        </button>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeView === link.id || (link.id === 'projects' && (activeView === 'project-detail' || activeView === 'xortlogix-rag' || activeView === 'aura' || activeView === 'prism'));
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg group ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2.5px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-full shadow-[0_0_12px_rgba(99,102,241,0.9)]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Tools (Language, Theme, Resume Button) */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-full border border-white/10 bg-white/[0.04] text-slate-300 hover:text-white hover:border-white/20 transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-indigo-400" />
              <span>EN</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-28 rounded-xl bg-slate-900 border border-white/10 shadow-2xl py-1 z-50">
                <button
                  onClick={() => setLangOpen(false)}
                  className="w-full text-left px-3 py-1.5 text-xs text-white bg-indigo-600/20 font-semibold"
                >
                  English (EN)
                </button>
                <button
                  onClick={() => setLangOpen(false)}
                  className="w-full text-left px-3 py-1.5 text-xs text-slate-400 hover:text-white hover:bg-white/[0.05]"
                >
                  Urdu (UR)
                </button>
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-full border border-white/10 bg-white/[0.04] text-slate-300 hover:text-white hover:border-white/20 transition-colors"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-400" />
            )}
          </button>

          {/* Resume Primary Button */}
          <button
            onClick={() => handleNavClick('resume')}
            className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full shadow-lg transition-all duration-300 active:scale-95 ${
              activeView === 'resume'
                ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white ring-2 ring-indigo-400/50 shadow-[0_0_20px_rgba(99,102,241,0.5)]'
                : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 text-white shadow-[0_4px_16px_rgba(99,102,241,0.35)] hover:shadow-[0_6px_22px_rgba(99,102,241,0.5)]'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => handleNavClick('resume')}
            className="px-3 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
          >
            Resume
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors"
            aria-label="Open Mobile Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="md:hidden border-b border-white/10 bg-slate-950/95 backdrop-blur-2xl px-6 py-5 flex flex-col gap-2 animate-fadeIn">
          {navLinks.map((link) => {
            const isActive = activeView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-indigo-600/20 text-white border border-indigo-500/30'
                    : 'text-slate-300 hover:bg-white/[0.05] hover:text-white'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-slate-400">Appearance</span>
            <button
              onClick={onToggleTheme}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg border border-white/10 bg-white/[0.04] text-slate-200"
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-indigo-400" />}
              <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
