import React from 'react';
import { FileText, Download, ExternalLink, Clock, FileCheck, CheckCircle2, GraduationCap, Briefcase, Award } from 'lucide-react';
import { PERSONAL_INFO, RESUME_DATA, EXPERIENCE_DATA } from '../data/portfolioData';

export default function ResumeView() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = PERSONAL_INFO.resumePdf;
    link.download = 'Muhammad_Okasha_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewOnline = () => {
    window.open(PERSONAL_INFO.resumePdf, '_blank');
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>MY RESUME</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2">
            My <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">Resume</span>
          </h2>

          <p className="text-base text-slate-400 max-w-2xl">
            Download my latest resume to know more about my skills, experience and achievements.
          </p>

          {/* Action Buttons & Metadata (Matching 08-resume.png) */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-6">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 shadow-[0_4px_20px_rgba(99,102,241,0.4)] transition-all active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </button>

            <button
              onClick={handleViewOnline}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 bg-slate-800 hover:bg-slate-700 border border-white/10 transition-all active:scale-95"
            >
              <ExternalLink className="w-4 h-4 text-indigo-400" />
              <span>View Online</span>
            </button>
          </div>

          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-6">
            <span className="px-3 py-1 text-xs font-medium rounded-lg border border-white/5 bg-slate-900 text-slate-300 flex items-center gap-1.5">
              <FileCheck className="w-3.5 h-3.5 text-indigo-400" />
              PDF Format
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-lg border border-white/5 bg-slate-900 text-slate-300 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              Updated 2026
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-lg border border-white/5 bg-slate-900 text-slate-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              1 Page Verified
            </span>
          </div>
        </div>

        {/* In-Page Clean Resume Preview Document */}
        <div className="rounded-3xl border border-white/[0.08] bg-slate-900/80 backdrop-blur-xl p-6 sm:p-10 shadow-2xl max-w-4xl mx-auto">
          
          {/* Header in Document */}
          <div className="border-b border-white/[0.08] pb-6 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-sm font-semibold text-indigo-400">
                {PERSONAL_INFO.title}
              </p>
            </div>
            <div className="text-xs text-slate-400 text-left sm:text-right space-y-0.5">
              <p>{PERSONAL_INFO.email}</p>
              <p>{PERSONAL_INFO.location}</p>
              <p>{PERSONAL_INFO.education}</p>
            </div>
          </div>

          {/* Summary Section */}
          <div className="mb-6">
            <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-2">
              Professional Summary
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {RESUME_DATA.summary}
            </p>
          </div>

          {/* Experience Section */}
          <div className="mb-6">
            <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
              <span>Work Experience</span>
            </h4>
            <div className="space-y-4">
              {EXPERIENCE_DATA.map((exp, idx) => (
                <div key={idx} className="border-l-2 border-indigo-500/30 pl-4">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-white">
                    <span>{exp.role}</span>
                    <span className="text-[11px] font-normal text-slate-400">{exp.period}</span>
                  </div>
                  <div className="text-xs text-indigo-400 mb-1.5">{exp.organization}</div>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx}>• {b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-6">
            <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
              <span>Education</span>
            </h4>
            {RESUME_DATA.education.map((edu, idx) => (
              <div key={idx} className="border-l-2 border-indigo-500/30 pl-4">
                <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-white">
                  <span>{edu.degree}</span>
                  <span className="text-[11px] font-normal text-slate-400">{edu.duration}</span>
                </div>
                <div className="text-xs text-indigo-400 mb-1">{edu.institution}</div>
                <p className="text-xs text-slate-300">{edu.details}</p>
              </div>
            ))}
          </div>

          {/* Certifications Section */}
          <div>
            <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-indigo-400" />
              <span>Certifications & Achievements</span>
            </h4>
            <ul className="space-y-1 text-xs text-slate-300">
              {RESUME_DATA.certifications.map((c, idx) => (
                <li key={idx}>• {c}</li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
