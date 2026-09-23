import React from 'react';
import { Sparkles, GraduationCap, Cpu, Server, Quote, ArrowRight } from 'lucide-react';
import { ABOUT_DATA, PERSONAL_INFO } from '../data/portfolioData';

export default function About({ onNavigate }) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            About <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">Muhammad Okasha</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            {ABOUT_DATA.subtitle}
          </p>
        </div>

        {/* Split Card Structure (Directly Matching 02-about.png) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Narrative & Pillar Chips */}
          <div className="lg:col-span-7 rounded-2xl border border-white/[0.08] bg-slate-900/60 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {ABOUT_DATA.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Three Highlight Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-8 mt-8 border-t border-white/[0.06]">
              {ABOUT_DATA.highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors flex flex-col gap-1"
                >
                  <div className="text-indigo-400 mb-1">
                    {i === 0 && <GraduationCap className="w-4 h-4" />}
                    {i === 1 && <Cpu className="w-4 h-4" />}
                    {i === 2 && <Server className="w-4 h-4" />}
                  </div>
                  <span className="text-xs font-semibold text-white leading-tight">
                    {h.label}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {h.institute || h.field}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Workstation & Quote Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Visual Workstation / About Photo Container */}
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-slate-900/80 h-72 sm:h-80 group shadow-[0_15px_35px_rgba(0,0,0,0.6)]">
              {/* Outer Ambient Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-indigo-600/30 to-purple-600/30 blur-lg group-hover:opacity-100 transition-opacity -z-10" />

              <img
                src={PERSONAL_INFO.secondaryImg}
                alt="Muhammad Okasha"
                className="w-full h-full object-cover object-[center_22%] group-hover:scale-105 transition-transform duration-700 filter contrast-[1.08] brightness-95"
              />
              
              {/* Gleam sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

              {/* Ambient Bottom Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent pointer-events-none" />
              
              {/* Top Floating Badge */}
              <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full backdrop-blur-md bg-slate-950/80 border border-indigo-500/30 text-[10px] font-semibold text-indigo-300 flex items-center gap-1.5 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>On-Device Neural Inference</span>
              </div>

              {/* Bottom Metadata Bar */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                <span className="font-mono text-[11px] text-cyan-400 font-medium">~/okasha/systems</span>
                <span className="px-2.5 py-1 rounded-full bg-slate-900/90 border border-indigo-500/40 text-[10px] text-indigo-300 font-bold tracking-wide shadow-md">
                  AI Solutions Architect
                </span>
              </div>
            </div>

            {/* Dedicated Quote Card (as shown in 02-about.png) */}
            <div className="flex-1 rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-950/40 to-slate-900/80 p-6 sm:p-8 flex flex-col justify-center relative overflow-hidden">
              <Quote className="w-8 h-8 text-indigo-500/20 absolute top-4 right-4" />
              
              <blockquote className="text-lg sm:text-xl font-medium text-white italic leading-snug mb-3">
                "{ABOUT_DATA.quote}"
              </blockquote>
              
              <div className="text-xs font-semibold tracking-wider text-indigo-400 uppercase">
                — {ABOUT_DATA.quoteAuthor}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
