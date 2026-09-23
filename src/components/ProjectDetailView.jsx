import React from 'react';
import { ArrowLeft, ExternalLink, CheckCircle2, ShieldAlert, Layers, Shield, Radio, Users, Activity, Clock, Target, Cpu, CheckSquare, FileText, Search, Wrench, ShieldCheck, FolderGit2, LayoutGrid, Globe, Key, Zap } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function ProjectDetailView({ projectSlug, onBack }) {
  const project = PROJECTS_DATA.find((p) => p.slug === projectSlug || (p.aliases && p.aliases.includes(projectSlug))) || PROJECTS_DATA[0];

  const iconMap = {
    ShieldAlert: ShieldAlert,
    Layers: Layers,
    Shield: Shield,
    Radio: Radio,
    Users: Users,
    Activity: Activity,
    LayoutGrid: LayoutGrid,
    Search: Search,
    Wrench: Wrench,
    ShieldCheck: ShieldCheck,
    Cpu: Cpu,
    CheckSquare: CheckSquare,
    FileText: FileText,
    Target: Target,
    Clock: Clock,
    FolderGit2: FolderGit2,
    Globe: Globe,
    Key: Key,
    Zap: Zap,
    CheckCircle: CheckCircle2
  };

  const MainIcon = iconMap[project.icon] || Layers;

  return (
    <section className="py-12 md:py-20 animate-fadeIn">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button (Matching 06-aura-detail.png) */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-white/10 bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold mb-8 transition-colors shadow-sm cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </button>

        {/* Project Hero Header */}
        <div className="rounded-3xl border border-white/[0.08] bg-slate-900/70 backdrop-blur-xl p-6 sm:p-10 mb-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            <div className="flex items-start sm:items-center gap-4 sm:gap-6">
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-indigo-600/30 to-purple-600/30 border border-indigo-500/40 text-indigo-400 shadow-[0_0_30px_rgba(99,102,241,0.25)] shrink-0">
                <MainIcon className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-300" />
              </div>

              <div>
                {project.badge && (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 uppercase mb-2 inline-block">
                    {project.badge}
                  </span>
                )}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-1">
                  {project.title}
                </h1>
                <p className="text-sm sm:text-base text-indigo-400 font-semibold">
                  {project.category}
                </p>
              </div>
            </div>

            {/* Top Action CTAs */}
            <div className="flex items-center gap-3">
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 shadow-[0_4px_20px_rgba(99,102,241,0.35)] transition-all"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.sourceCodeUrl && (
                <a
                  href={project.sourceCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-white/10 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
              )}
            </div>

          </div>

          {/* Overview Paragraph */}
          <div className="mt-8 pt-8 border-t border-white/[0.08]">
            <h3 className="text-xs font-bold text-indigo-300 uppercase tracking-widest mb-3">
              Overview
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Tech Stack Chips */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-medium mr-2">Stack:</span>
            {project.technologies.map((t, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-semibold rounded-lg bg-indigo-950/60 border border-indigo-500/30 text-indigo-200"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Repo & Local Workspace Alignment Tag */}
          {project.githubRepo && (
            <div className="mt-4 pt-4 border-t border-white/[0.05] flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-medium text-slate-400">GitHub Repo:</span>
              <span className="px-2.5 py-0.5 text-xs font-mono rounded-md bg-white/[0.04] border border-white/10 text-cyan-300">
                {project.githubRepo}
              </span>
              {project.localFolder && (
                <>
                  <span className="text-slate-600 hidden sm:inline">•</span>
                  <span className="text-[11px] font-medium text-slate-400">Project Directory:</span>
                  <span className="px-2.5 py-0.5 text-xs font-mono rounded-md bg-white/[0.04] border border-white/10 text-slate-300">
                    {project.localFolder}
                  </span>
                </>
              )}
            </div>
          )}
        </div>

        {/* Workflow / Architecture Pipeline (if defined) */}
        {project.workflow && (
          <div className="rounded-3xl border border-white/[0.08] bg-slate-900/50 backdrop-blur-md p-6 sm:p-8 mb-10">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Autonomous Execution Workflow</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {project.workflow.map((wf, wIdx) => (
                <div
                  key={wIdx}
                  className="p-3.5 rounded-xl border border-white/5 bg-slate-950/60 text-center flex flex-col justify-between"
                >
                  <span className="w-5 h-5 rounded-full bg-indigo-600/30 text-indigo-300 text-[10px] font-bold mx-auto mb-2 flex items-center justify-center border border-indigo-500/40">
                    {wf.step}
                  </span>
                  <div className="text-xs font-bold text-white mb-0.5 leading-snug">
                    {wf.title}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {wf.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Feature Cards Grid (Matching 06-aura-detail.png) */}
        {project.features && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {project.features.map((feat, fIdx) => {
              const FeatIcon = iconMap[feat.icon] || CheckCircle2;
              return (
                <div
                  key={fIdx}
                  className="rounded-2xl border border-white/[0.08] bg-slate-900/60 p-6 flex flex-col justify-between"
                >
                  <div className="mb-4">
                    <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 inline-block mb-3">
                      <FeatIcon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-1">
                      {feat.title}
                    </h4>
                    <p className="text-xs text-indigo-400 font-medium mb-3">
                      {feat.subtitle}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Key Metrics Strip (as in 06-aura-detail.png / 00-alternate-reference-sheet.png) */}
        {project.metrics && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {project.metrics.map((met, mIdx) => {
              const MetricIcon = iconMap[met.icon] || Activity;
              return (
                <div
                  key={mIdx}
                  className="p-5 rounded-2xl border border-white/[0.08] bg-slate-900/60 hover:bg-slate-900/90 hover:border-indigo-500/30 transition-all flex items-center gap-4"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                    <MetricIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-extrabold text-white">
                      {met.value}
                    </div>
                    <div className="text-xs text-slate-400 font-medium">
                      {met.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
