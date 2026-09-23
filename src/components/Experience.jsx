import React, { useState } from 'react';
import { Briefcase, Calendar, Building, CheckCircle2, GraduationCap, Brain, Terminal } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export default function Experience() {
  const [viewMode, setViewMode] = useState('timeline'); // 'timeline' or 'cards'

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with View Toggle (Matching 04-experience.png) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold mb-4">
              <Briefcase className="w-3.5 h-3.5" />
              <span>WORK EXPERIENCE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2">
              Professional <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">Experience & Training</span>
            </h2>

            <p className="text-base text-slate-400">
              Building real-world solutions, leading teams and creating impactful systems.
            </p>
          </div>

          {/* Timeline / Cards Toggle Button */}
          <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-white/10 self-start sm:self-auto">
            <button
              onClick={() => setViewMode('timeline')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                viewMode === 'timeline'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Timeline
            </button>
            <button
              onClick={() => setViewMode('cards')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                viewMode === 'cards'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Cards
            </button>
          </div>
        </div>

        {/* Timeline View (Directly Matching 04-experience.png) */}
        {viewMode === 'timeline' ? (
          <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-500/30 space-y-8 sm:space-y-10 my-4 ml-2 sm:ml-4">
            {EXPERIENCE_DATA.map((exp, index) => (
              <div key={index} className="relative group">
                
                {/* Milestone Node on the Timeline Line */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-400 group-hover:bg-indigo-500 group-hover:scale-125 transition-all shadow-[0_0_10px_rgba(99,102,241,0.5)]" />

                {/* Experience Card */}
                <div className="rounded-2xl border border-white/[0.08] bg-slate-900/60 hover:bg-slate-900/90 backdrop-blur-md p-6 sm:p-8 transition-all duration-300 hover:border-indigo-500/30 hover:shadow-[0_10px_30px_rgba(99,102,241,0.1)]">
                  
                  {/* Card Header: Role & Period */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                        {index === 0 && <Briefcase className="w-5 h-5" />}
                        {index === 1 && <Brain className="w-5 h-5" />}
                        {index === 2 && <GraduationCap className="w-5 h-5" />}
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-xs sm:text-sm text-indigo-400 font-medium">
                          {exp.organization}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-center">
                      <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-slate-800 border border-white/10 text-slate-300 flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 text-indigo-400" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Responsibilities & Achievements */}
                  <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-300">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>

                </div>

              </div>
            ))}
          </div>
        ) : (
          /* Cards Grid Alternative View */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EXPERIENCE_DATA.map((exp, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/[0.08] bg-slate-900/60 p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-semibold text-indigo-400 block mb-1">
                    {exp.period}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-1">{exp.role}</h3>
                  <p className="text-xs text-slate-400 mb-4">{exp.organization}</p>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
