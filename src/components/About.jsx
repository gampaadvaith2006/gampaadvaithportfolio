import React, { useState } from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  Terminal, 
  Compass, 
  Code, 
  BrainCircuit, 
  Layers, 
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="about" className="py-20 sm:py-28 border-t border-editorial dark:border-paper-borderDark relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-600 dark:text-blue-400 font-mono">
            01 / Background & Focus
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-ink-900 dark:text-white">
            Engineering real-world solutions through software & AI.
          </h2>
        </div>

        {/* Two-Column Grid: Photo on Left, Story on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Photo & Verified Identity */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group w-full max-w-sm">
              {/* Subtle ambient blur behind photo */}
              <div 
                className="absolute -inset-2 bg-gradient-to-r from-brand-500/20 via-amber-500/10 to-blue-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" 
                aria-hidden="true"
              />

              {/* Photo Frame Container */}
              <div className="relative bg-white dark:bg-paper-cardDark p-3 rounded-2xl border border-editorial dark:border-paper-borderDark shadow-xl overflow-hidden">
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-cream-200 dark:bg-ink-800 relative">
                  {/* Actual photo of Gampa Advaith */}
                  <img
                    src={personalInfo.photo}
                    alt="Gampa Advaith — Computer Science Student specializing in AI & ML"
                    className={`w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105 ${
                      imageLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                    onError={(e) => {
                      // Fallback placeholder if asset is moved
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80";
                    }}
                  />

                  {/* Gradient bottom overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-900/80 via-ink-900/40 to-transparent flex items-end p-4">
                    <div className="text-white">
                      <span className="block font-bold text-sm leading-tight">{personalInfo.name}</span>
                      <span className="block text-xs text-gray-200 font-mono">B.Tech CSE (AI & ML)</span>
                    </div>
                  </div>
                </div>

                {/* Status bar below photo */}
                <div className="mt-3 pt-2.5 border-t border-editorial/60 dark:border-paper-borderDark flex items-center justify-between text-xs text-ink-600 dark:text-gray-400">
                  <span className="flex items-center gap-1 font-mono text-[11px]">
                    <MapPin className="w-3.5 h-3.5 text-brand-500" />
                    {personalInfo.location}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Profile
                  </span>
                </div>
              </div>

              {/* Floating verified badge */}
              <div className="absolute -bottom-4 -right-2 bg-ink-900 dark:bg-white text-white dark:text-ink-900 px-3.5 py-1.5 rounded-full shadow-lg border border-editorial/40 dark:border-paper-borderDark text-xs font-semibold flex items-center gap-1.5 animate-pulse-subtle">
                <BrainCircuit className="w-3.5 h-3.5 text-blue-400 dark:text-blue-600" />
                <span>AI & ML Specialization</span>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Bio, Interests & Education */}
          <div className="lg:col-span-7 space-y-6">
            {/* Primary Verified Bio */}
            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-ink-900 dark:text-gray-100 font-medium leading-relaxed">
                {personalInfo.introParagraph}
              </p>

              {personalInfo.aboutExtended.map((paragraph, idx) => (
                <p key={idx} className="text-base text-ink-600 dark:text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Academic Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-paper-cardDark border border-editorial dark:border-paper-borderDark shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-brand-500/10 dark:bg-blue-500/20 text-brand-600 dark:text-blue-400 flex-shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-600 dark:text-blue-400">
                    Academic Institution
                  </span>
                  <h4 className="text-base font-bold text-ink-900 dark:text-white mt-0.5">
                    {personalInfo.college}
                  </h4>
                  <p className="text-sm text-ink-600 dark:text-gray-300 mt-0.5">
                    {personalInfo.degree}
                  </p>
                </div>
              </div>
            </div>

            {/* Core Interests Tags */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-ink-500 dark:text-gray-400 mb-3 font-mono">
                Primary Technical Interests
              </h4>
              <div className="flex flex-wrap gap-2">
                {personalInfo.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-cream-200/80 dark:bg-ink-800 text-ink-800 dark:text-gray-200 border border-editorial dark:border-paper-borderDark hover:border-brand-500/50 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
