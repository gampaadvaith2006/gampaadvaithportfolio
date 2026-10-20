import React from 'react';
import { ArrowUp, Sparkles, ShieldCheck } from 'lucide-react';
import { Github } from './Icons';
import { personalInfo, socialLinks } from '../data/portfolioData';

export const Footer = ({ onOpenVerificationReport }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-cream-200/50 dark:bg-paper-dark border-t border-editorial dark:border-paper-borderDark py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-editorial dark:border-paper-borderDark">
          {/* Brand & Tagline */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-ink-900 dark:bg-white text-white dark:text-ink-900 flex items-center justify-center font-bold text-xs">
                GA
              </div>
              <span className="font-bold text-lg text-ink-900 dark:text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-ink-600 dark:text-gray-400 max-w-sm leading-relaxed">
              {personalInfo.heroHeadline} Computer Science student specializing in AI & ML at {personalInfo.college}.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-ink-600 dark:text-gray-300">
            <a href="#home" className="hover:text-brand-600 dark:hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-brand-600 dark:hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-brand-600 dark:hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-brand-600 dark:hover:text-blue-400 transition-colors">Projects</a>
            <a href="#education" className="hover:text-brand-600 dark:hover:text-blue-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-brand-600 dark:hover:text-blue-400 transition-colors">Contact</a>
          </div>

          {/* Social & Top Scroll */}
          <div className="flex items-center gap-3">
            <a
              href={socialLinks.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-2.5 rounded-xl bg-white dark:bg-ink-800 text-ink-800 dark:text-gray-200 border border-editorial dark:border-ink-700 hover:text-brand-600 dark:hover:text-blue-400 transition-colors shadow-2xs"
            >
              <Github className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2.5 rounded-xl bg-white dark:bg-ink-800 text-ink-800 dark:text-gray-200 border border-editorial dark:border-ink-700 hover:text-brand-600 dark:hover:text-blue-400 transition-colors shadow-2xs group"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Integrity Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-ink-500 dark:text-gray-500 gap-4">
          <p>
            © {currentYear} {personalInfo.name}. All verified content and project configurations maintained honestly.
          </p>

          <button
            onClick={onOpenVerificationReport}
            className="inline-flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-400 hover:underline font-mono"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Deployment & Link Verification Log</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
