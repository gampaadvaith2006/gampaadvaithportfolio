import React from 'react';
import { 
  ArrowDown, 
  FileText, 
  Sparkles, 
  Cpu, 
  Code2, 
  Bot, 
  Workflow, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { Github } from './Icons';
import { personalInfo, socialLinks } from '../data/portfolioData';

export const Hero = ({ onOpenResume }) => {
  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden paper-texture"
    >
      {/* Decorative ambient gradient glows */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-brand-500/10 via-amber-500/5 to-purple-500/10 dark:from-brand-500/15 dark:via-blue-600/10 dark:to-transparent rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-2xl pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/90 dark:bg-ink-800/90 border border-editorial dark:border-paper-borderDark shadow-sm mb-6 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-ink-700 dark:text-gray-200">
            {personalInfo.availabilityStatus}
          </span>
        </div>

        {/* Name and Subtitle Badge */}
        <div className="animate-fade-in [animation-delay:100ms]">
          <h2 className="text-sm sm:text-base font-semibold tracking-widest uppercase text-brand-600 dark:text-blue-400 font-mono mb-3">
            {personalInfo.name}
          </h2>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-ink-900 dark:text-white max-w-4xl mx-auto leading-[1.1] animate-fade-in [animation-delay:200ms]">
          Building useful products with{' '}
          <span className="underline decoration-brand-500/40 underline-offset-8 text-transparent bg-clip-text bg-gradient-to-r from-ink-900 via-brand-600 to-ink-900 dark:from-white dark:via-blue-400 dark:to-white">
            code and AI.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="mt-6 text-lg sm:text-xl text-ink-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in [animation-delay:300ms]">
          {personalInfo.heroSubheadline}
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 animate-fade-in [animation-delay:400ms]">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-ink-900 dark:bg-white text-white dark:text-ink-900 hover:bg-brand-600 dark:hover:bg-blue-500 dark:hover:text-white shadow-md hover:shadow-lg transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            <span>View My Projects</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white dark:bg-ink-800 text-ink-900 dark:text-white border border-editorial dark:border-paper-borderDark hover:bg-cream-200 dark:hover:bg-ink-700 shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            <FileText className="w-4 h-4 text-brand-600 dark:text-blue-400" />
            <span>Download Resume</span>
          </button>

          <a
            href={socialLinks.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-cream-200/70 dark:bg-ink-800/60 text-ink-800 dark:text-gray-200 hover:bg-cream-300 dark:hover:bg-ink-700 transition-colors border border-editorial/70 dark:border-paper-borderDark focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5 text-ink-400" />
          </a>
        </div>

        {/* Interactive Floating Technical Elements (Tasteful, responsive) */}
        <div className="mt-14 pt-8 border-t border-editorial/60 dark:border-paper-borderDark flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs animate-fade-in [animation-delay:500ms]">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/60 dark:bg-ink-800/50 border border-editorial/70 dark:border-paper-borderDark text-ink-700 dark:text-gray-300 shadow-2xs hover:scale-105 transition-transform">
            <Cpu className="w-3.5 h-3.5 text-brand-600 dark:text-blue-400" />
            <span>Artificial Intelligence & ML</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/60 dark:bg-ink-800/50 border border-editorial/70 dark:border-paper-borderDark text-ink-700 dark:text-gray-300 shadow-2xs hover:scale-105 transition-transform">
            <Code2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Full-Stack Web Dev</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/60 dark:bg-ink-800/50 border border-editorial/70 dark:border-paper-borderDark text-ink-700 dark:text-gray-300 shadow-2xs hover:scale-105 transition-transform">
            <Bot className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>OpenRouter & AI APIs</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/60 dark:bg-ink-800/50 border border-editorial/70 dark:border-paper-borderDark text-ink-700 dark:text-gray-300 shadow-2xs hover:scale-105 transition-transform">
            <Workflow className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>UiPath & Automation</span>
          </div>
        </div>
      </div>
    </section>
  );
};
