import React from 'react';
import { Cpu, Code2, Clock, Boxes, Quote } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

export default function Skills() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL SKILLS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2">
            Skills & <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">Technologies</span>
          </h2>

          <p className="text-base text-slate-400">
            Tools and technologies I work with to build scalable, intelligent and high-performance systems.
          </p>
        </div>

        {/* 2-Column Main Layout (Matching 05-skills.png) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Categorized Technology Badges */}
          <div className="lg:col-span-8 space-y-6">
            {SKILLS_DATA.categories.map((cat, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/[0.08] bg-slate-900/60 backdrop-blur-md p-5 sm:p-6"
              >
                <h3 className="text-sm font-semibold text-indigo-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  {cat.name}
                </h3>

                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3.5 py-1.5 text-xs font-medium rounded-xl border border-white/10 bg-slate-800/80 hover:bg-slate-700 hover:border-indigo-500/50 text-slate-200 transition-all duration-200 shadow-sm cursor-default flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Mastery Stats & Quote Card (Directly Matching 05-skills.png) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Stats Card Container */}
            <div className="rounded-2xl border border-white/[0.08] bg-slate-900/70 backdrop-blur-md p-6 sm:p-8 space-y-6">
              
              <div className="p-3.5 rounded-2xl bg-indigo-600/15 border border-indigo-500/30 text-indigo-400 inline-block mb-2">
                <Code2 className="w-6 h-6" />
              </div>

              {/* Stat 1 */}
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1">
                  10+
                </div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Technologies Mastered
                </div>
              </div>

              <div className="border-t border-white/[0.06]" />

              {/* Stat 2 */}
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1">
                  5+
                </div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Years of Experience
                </div>
              </div>

              <div className="border-t border-white/[0.06]" />

              {/* Stat 3 */}
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1">
                  20+
                </div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Real-World Projects
                </div>
              </div>

            </div>

            {/* Quote Card */}
            <div className="rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-950/40 to-slate-900/80 p-6 sm:p-8 relative overflow-hidden">
              <Quote className="w-6 h-6 text-indigo-500/20 absolute top-4 right-4" />
              <p className="text-sm sm:text-base font-medium text-slate-200 italic leading-relaxed mb-3">
                "{SKILLS_DATA.quote}"
              </p>
              <div className="text-xs font-semibold text-indigo-400 tracking-wider">
                — {SKILLS_DATA.quoteAuthor}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
