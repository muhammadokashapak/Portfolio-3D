import React, { useState, useRef } from 'react';
import { ArrowRight, FileText, Code2, Zap, Box, Cloud, MapPin, Globe, GraduationCap, Sparkles, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero({ onNavigate, onReplayIntro }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -(y * 12), y: x * 12 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const statIcons = {
    Code2: Code2,
    Zap: Zap,
    Box: Box,
    Cloud: Cloud
  };

  return (
    <section className="relative pt-8 pb-16 overflow-hidden">
      
      {/* Background Radial Glow Effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Main Hero Container */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Bio Left & Photo Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Text & CTAs) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Row: Availability Status Badge + Replay Intro Trigger */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                <span>{PERSONAL_INFO.roleBadge}</span>
              </div>

              {onReplayIntro && (
                <button
                  onClick={onReplayIntro}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/30 bg-slate-900/80 hover:bg-indigo-950/60 text-indigo-300 hover:text-white text-xs font-medium transition-all shadow-sm cursor-pointer"
                  title="Watch the full-screen multi-language welcome intro"
                >
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  <span>Replay Welcome Intro 👋</span>
                </button>
              )}
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-3">
              Hi, I'm <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_2px_14px_rgba(99,102,241,0.35)]">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-lg sm:text-xl font-semibold text-slate-300 tracking-normal mb-5 flex items-center gap-2">
              <span>AI Solutions Architect</span>
              <span className="text-indigo-400">•</span>
              <span>Full-Stack Systems Specialist</span>
            </h2>

            {/* Concise Architecture Description */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mb-8">
              {PERSONAL_INFO.tagline}
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={() => onNavigate('projects')}
                className="group flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 shadow-[0_4px_20px_rgba(99,102,241,0.4)] hover:shadow-[0_6px_25px_rgba(99,102,241,0.6)] transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('resume')}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-white/10 hover:border-white/20 transition-all duration-200 active:scale-95 shadow-sm cursor-pointer"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>Download Resume</span>
              </button>
            </div>

          </div>

          {/* Right Column: Supercharged Executive Portrait Centerpiece with 3D Tilt & Telemetry */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: tilt.x === 0 && tilt.y === 0 ? 'transform 0.5s ease-out' : 'transform 0.1s ease-out'
              }}
              className="relative w-72 sm:w-80 md:w-88 group"
            >
              
              {/* Layer 1: Animated Rotating Conical Neon Aura Halo */}
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 opacity-60 blur-xl group-hover:opacity-90 transition-opacity duration-500 -z-10 animate-hero-float" />
              
              {/* Layer 2: Main Image Card Container */}
              <div className="relative rounded-[26px] overflow-hidden border border-white/20 bg-slate-900/95 shadow-[0_25px_60px_rgba(0,0,0,0.9)] aspect-[4/5]">
                
                {/* Main Hero Photograph */}
                <img
                  src={PERSONAL_INFO.profileImg}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-[center_20%] filter contrast-[1.06] brightness-95 group-hover:scale-[1.03] transition-transform duration-700"
                />
                
                {/* Periodic Light Gleam Sweep Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                
                {/* Ambient Radial Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Floating Telemetry Badge: Top-Left (Sub-50ms RAG) */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl backdrop-blur-md bg-slate-950/80 border border-emerald-500/30 flex items-center gap-2 shadow-lg animate-hero-float">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                  <span className="text-[11px] font-semibold text-emerald-300">Live • &lt;50ms RAG</span>
                </div>

                {/* Floating Telemetry Badge: Top-Right (AI Architect) */}
                <div className="absolute top-4 right-4 p-2 rounded-xl backdrop-blur-md bg-slate-950/80 border border-indigo-500/30 text-cyan-300 shadow-lg">
                  <Cpu className="w-4 h-4 animate-spin-slow" />
                </div>

                {/* Embedded Bottom Tech Credential Card */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl backdrop-blur-md bg-slate-950/85 border border-white/15 flex items-center justify-between shadow-2xl">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white tracking-wide">Muhammad Okasha</span>
                    <span className="text-[11px] text-indigo-400 font-medium">UET Peshawar Alumni</span>
                  </div>
                  <span className="px-2.5 py-1 text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span>Systems Eng.</span>
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* 4-Card Stats Row (Directly Below Hero as in 01-home.png) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16">
          {PERSONAL_INFO.stats.map((stat) => {
            const Icon = statIcons[stat.icon] || Zap;
            return (
              <div
                key={stat.id}
                className="relative group p-6 rounded-2xl border border-white/[0.08] bg-slate-900/60 hover:bg-slate-900/90 backdrop-blur-md transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_10px_30px_rgba(99,102,241,0.15)] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/40 group-hover:bg-cyan-400 transition-colors" />
                </div>

                <div>
                  <div className="text-3xl font-extrabold tracking-tight text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-slate-200 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-400">
                    {stat.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Metadata Pill Strip (Location, Remote, Education) */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 mt-8 pt-6 border-t border-white/[0.06] text-xs font-medium text-slate-400">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/5 bg-white/[0.02]">
            <MapPin className="w-3.5 h-3.5 text-rose-400" />
            <span>{PERSONAL_INFO.location}</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/5 bg-white/[0.02]">
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span>{PERSONAL_INFO.remoteStatus}</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/5 bg-white/[0.02]">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
            <span>{PERSONAL_INFO.education}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
