import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ResumeView from './components/ResumeView';
import ProjectDetailView from './components/ProjectDetailView';
import NotFoundView from './components/NotFoundView';
import WelcomeIntro from './components/WelcomeIntro';

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [activeView, setActiveView] = useState('home');
  const [selectedProjectSlug, setSelectedProjectSlug] = useState('xortlogix-rag');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  // Handle Theme Persistence
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // URL Hash Sync for Deep Linking
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (!hash || hash === 'home') {
        setActiveView('home');
      } else if (hash.startsWith('project/')) {
        const slug = hash.replace('project/', '');
        setSelectedProjectSlug(slug);
        setActiveView('project-detail');
      } else if (['about', 'projects', 'experience', 'skills', 'contact', 'resume'].includes(hash)) {
        setActiveView(hash);
      } else if (hash === 'xortlogix-rag' || hash === 'aura' || hash === 'prism') {
        setSelectedProjectSlug(hash);
        setActiveView('project-detail');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (viewId) => {
    setActiveView(viewId);
    window.location.hash = viewId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (slug) => {
    setSelectedProjectSlug(slug);
    setActiveView('project-detail');
    window.location.hash = `project/${slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#070B13] text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>

      {/* Full-Screen Welcome Intro Screen: Shows ONLY the multi-language greeting, nothing in background */}
      {showWelcome && (
        <WelcomeIntro onComplete={() => setShowWelcome(false)} />
      )}
      
      {/* Universal Top Navbar */}
      <Navbar
        activeView={activeView}
        onNavigate={navigateTo}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content View Switcher */}
      <main className="flex-1 w-full pt-20">
        {activeView === 'home' && (
          <div className="space-y-4">
            <Hero onNavigate={navigateTo} onReplayIntro={() => setShowWelcome(true)} />
            <div id="about">
              <About onNavigate={navigateTo} />
            </div>
            <div id="projects">
              <Projects onSelectProject={handleSelectProject} onNavigate={navigateTo} />
            </div>
            <div id="experience">
              <Experience />
            </div>
            <div id="skills">
              <Skills />
            </div>
            <div id="contact">
              <Contact />
            </div>
          </div>
        )}

        {activeView === 'about' && (
          <div className="animate-fadeIn">
            <About onNavigate={navigateTo} />
          </div>
        )}

        {activeView === 'projects' && (
          <div className="animate-fadeIn">
            <Projects onSelectProject={handleSelectProject} onNavigate={navigateTo} />
          </div>
        )}

        {activeView === 'experience' && (
          <div className="animate-fadeIn">
            <Experience />
          </div>
        )}

        {activeView === 'skills' && (
          <div className="animate-fadeIn">
            <Skills />
          </div>
        )}

        {activeView === 'resume' && (
          <div className="animate-fadeIn">
            <ResumeView />
          </div>
        )}

        {activeView === 'contact' && (
          <div className="animate-fadeIn">
            <Contact />
          </div>
        )}

        {activeView === 'project-detail' && (
          <div className="animate-fadeIn">
            <ProjectDetailView
              projectSlug={selectedProjectSlug}
              onBack={() => navigateTo('projects')}
            />
          </div>
        )}

        {activeView === '404' && (
          <NotFoundView onNavigate={navigateTo} />
        )}
      </main>

      {/* Universal Footer */}
      <Footer onNavigate={navigateTo} />

    </div>
  );
}
