import React from 'react';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFoundView({ onNavigate }) {
  return (
    <section className="py-28 md:py-36 text-center animate-fadeIn">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="inline-flex p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-6">
          <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: '8s' }} />
        </div>

        <h1 className="text-6xl sm:text-8xl font-extrabold tracking-tight text-white mb-4">
          404
        </h1>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-200 mb-3">
          Page Not Found
        </h2>

        <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto mb-8 leading-relaxed">
          The requested coordinate or project view does not exist or has been relocated in the architecture tree.
        </p>

        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-[0_4px_20px_rgba(99,102,241,0.4)] transition-all active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

      </div>
    </section>
  );
}
