import React from 'react';
import { Layers, ArrowRight, ShieldAlert, Shield, Radio, Users, Activity, LayoutGrid, Code2 } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';

export default function Projects({ onSelectProject, onNavigate }) {
  const iconMap = {
    ShieldAlert: ShieldAlert,
    Layers: Layers,
    Shield: Shield,
    Radio: Radio,
    Users: Users,
    Activity: Activity,
    LayoutGrid: LayoutGrid
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>MY PROJECTS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2">
              Featured <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">Projects</span>
            </h2>

            <p className="text-base text-slate-400">
              Real-world AI systems, from research to production.
            </p>
          </div>

          <a
            href="https://github.com/muhammadokashapak?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group"
          >
            <span>View All 22 Projects</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 6-Card Grid (Matching 03-projects.png) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((proj) => {
            const Icon = iconMap[proj.icon] || Code2;
            return (
              <div
                key={proj.id}
                onClick={() => onSelectProject(proj.slug)}
                className="group relative rounded-2xl border border-white/[0.08] bg-slate-900/60 hover:bg-slate-900/95 backdrop-blur-md p-6 flex flex-col justify-between transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_12px_36px_rgba(99,102,241,0.18)] cursor-pointer"
              >
                {/* Top Section */}
                <div>
                  {/* Icon & Title Row */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 text-indigo-400 group-hover:text-cyan-300 group-hover:border-indigo-400/50 transition-colors shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-indigo-400/90 font-medium line-clamp-1">
                        {proj.category}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 line-clamp-3">
                    {proj.description}
                  </p>
                </div>

                {/* Bottom Section */}
                <div>
                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-md border border-white/5 bg-white/[0.03] text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* View Project Action */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 flex items-center gap-1.5">
                      <span>View Project</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>

                    {proj.sourceCodeUrl && (
                      <span className="text-[11px] text-slate-500 hover:text-slate-300 transition-colors">
                        GitHub ↗
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
