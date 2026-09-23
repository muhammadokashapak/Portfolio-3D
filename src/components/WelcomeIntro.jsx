import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const GREETINGS = [
  { text: "Hello", lang: "English" },
  { text: "Assalam-o-Alaikum", lang: "Urdu" },
  { text: "Bonjour", lang: "French" },
  { text: "Konnichiwa", lang: "Japanese" },
  { text: "Hola", lang: "Spanish" },
  { text: "Marhaban", lang: "Arabic" },
  { text: "Namaste", lang: "Hindi" },
  { text: "Ciao", lang: "Italian" },
  { text: "Guten Tag", lang: "German" },
  { text: "Ni Hao", lang: "Mandarin" }
];

export default function WelcomeIntro({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVanishing, setIsVanishing] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Smooth fade-out vanish right before switching
      setIsVanishing(true);
      setTimeout(() => {
        setCurrentIndex((prev) => {
          if (prev + 1 >= GREETINGS.length) {
            // Once all greetings cycle, trigger smooth curtain lift
            clearInterval(interval);
            handleClose();
            return prev;
          }
          return prev + 1;
        });
        setIsVanishing(false);
      }, 200); // 200ms vanishing exit
    }, 1100); // ~1 second per greeting

    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 700); // Wait for the smooth curtain lift animation
  };

  const current = GREETINGS[currentIndex];

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070B13] select-none transition-all duration-700 ease-in-out ${
        isExiting ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      }`}
      style={{
        boxShadow: isExiting ? '0 50px 100px rgba(0,0,0,0.9)' : 'none'
      }}
    >
      {/* Deep Space Ambient Core Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/20 rounded-full blur-[160px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Centered Focus (Screen par sirf yeh show hoga, aur kuch bhi nahi) */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
        
        {/* Subtle Top Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-slate-900/60 backdrop-blur-xl text-indigo-300 text-xs font-semibold uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(99,102,241,0.25)]">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
          <span>Muhammad Okasha Portfolio</span>
        </div>

        {/* MASSIVE PURE TYPOGRAPHY GREETING */}
        <div className="h-32 sm:h-44 lg:h-52 flex items-center justify-center">
          <div
            key={currentIndex}
            className={`transition-all duration-200 transform ${
              isVanishing
                ? 'opacity-0 scale-90 blur-md -translate-y-4'
                : 'opacity-100 scale-100 blur-0 translate-y-0'
            }`}
          >
            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tight bg-gradient-to-r from-cyan-300 via-white to-purple-400 bg-clip-text text-transparent drop-shadow-[0_8px_45px_rgba(99,102,241,0.7)] px-4">
              {current.text}!
            </h1>
          </div>
        </div>

        {/* Ultra-Delicate, High-Fashion Language Subtitle (Pyara & Clean) */}
        <div className="flex items-center justify-center gap-3 mt-4">
          <span className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-indigo-500/50" />
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.35em] text-indigo-300/80 font-medium flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            {current.lang}
          </span>
          <span className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-indigo-500/50" />
        </div>

      </div>

      {/* Skip / Enter Portfolio Button */}
      <button
        onClick={handleClose}
        className="absolute bottom-10 px-5 py-2.5 rounded-full text-xs font-semibold text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-indigo-500/40 transition-all flex items-center gap-2 cursor-pointer shadow-lg active:scale-95"
      >
        <span>Enter Portfolio</span>
        <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
      </button>

    </div>
  );
}
