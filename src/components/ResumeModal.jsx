import React, { useEffect, useState } from 'react';
import { 
  X, 
  Download, 
  FileText, 
  CheckCircle2, 
  ExternalLink, 
  AlertCircle, 
  Sparkles,
  Printer,
  Copy,
  Check
} from 'lucide-react';
import { personalInfo, skillsData, projectsData, educationData } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const summary = `
GAMPA ADVAITH
${personalInfo.title}
Education: ${personalInfo.degree} - ${personalInfo.college}
GitHub: https://github.com/gampaadvaith2006
Email: ${personalInfo.email}

PROJECTS:
1. SureDeal (Live: https://suredeal.store) - AI-powered shopping companion for price comparison and real deal verification.
2. TruthLens AI (Live: https://ai-content-verifier-dzya.onrender.com) - AI content verification and evidence exploration platform.
3. Auto-Pilot AI Video Studio (GitHub: https://github.com/gampaadvaith2006/AUTO-PILOT-AI-VIDEO-STUDIO) - AI generative video pipeline.
4. Short Factory (In Development) - Short-form content generation engine.
    `.trim();

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ink-900/60 dark:bg-black/80 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-white dark:bg-paper-cardDark rounded-2xl border border-editorial dark:border-paper-borderDark shadow-2xl overflow-hidden flex flex-col max-h-[92vh] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-editorial dark:border-paper-borderDark">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-brand-500/10 dark:bg-blue-500/20 text-brand-600 dark:text-blue-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 id="resume-modal-title" className="text-xl font-bold text-ink-900 dark:text-white">
                Gampa Advaith — Resume & Profile Summary
              </h2>
              <span className="text-xs text-ink-500 font-mono">
                B.Tech CSE (AI & ML) · Full-Stack & Applied AI
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close resume preview"
            className="p-2 rounded-xl text-ink-500 hover:text-ink-900 dark:hover:text-white hover:bg-cream-200 dark:hover:bg-ink-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Callout for Advaith */}
        <div className="p-4 bg-cream-50 dark:bg-ink-800/60 border-b border-editorial dark:border-paper-borderDark text-xs text-ink-600 dark:text-gray-300 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-brand-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-semibold text-ink-900 dark:text-white">Developer Note: </span>
            This interactive resume compiles your verified education, projects, and skills. To swap in your official one-page PDF, place your file at <code className="bg-cream-200 dark:bg-ink-700 px-1 py-0.5 rounded font-mono text-[11px]">public/assets/Gampa_Advaith_Resume.pdf</code>.
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm">
          {/* Top Contact Bar */}
          <div className="border-b border-editorial dark:border-paper-borderDark pb-6">
            <h1 className="text-2xl font-bold text-ink-900 dark:text-white">
              {personalInfo.name}
            </h1>
            <p className="text-sm font-semibold text-brand-600 dark:text-blue-400 mt-0.5">
              {personalInfo.title}
            </p>
            <div className="flex flex-wrap gap-4 mt-3 text-xs text-ink-600 dark:text-gray-400 font-mono">
              <span>{personalInfo.location}</span>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`} className="hover:underline text-brand-600 dark:text-blue-400">
                {personalInfo.email}
              </a>
              <span>•</span>
              <a href="https://github.com/gampaadvaith2006" target="_blank" rel="noopener noreferrer" className="hover:underline text-brand-600 dark:text-blue-400">
                github.com/gampaadvaith2006
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-ink-500 dark:text-gray-400 font-mono mb-2">
              Education
            </h3>
            <div className="p-3.5 rounded-xl bg-cream-50 dark:bg-ink-800/40 border border-editorial dark:border-ink-700">
              <div className="flex justify-between items-baseline font-bold text-ink-900 dark:text-white">
                <span>{educationData[0].institution}</span>
                <span className="text-xs text-ink-500 font-mono">Undergraduate</span>
              </div>
              <p className="text-xs text-brand-600 dark:text-blue-400 font-medium mt-0.5">
                {educationData[0].degree}
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-ink-500 dark:text-gray-400 font-mono mb-2">
              Technical Proficiencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {skillsData.map((s, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-cream-50 dark:bg-ink-800/40 border border-editorial dark:border-ink-700">
                  <span className="block text-[11px] font-bold text-ink-900 dark:text-white capitalize mb-1">
                    {s.category.split(' ')[0]}
                  </span>
                  <p className="text-xs text-ink-600 dark:text-gray-300">
                    {s.skills.map(item => item.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Projects */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-ink-500 dark:text-gray-400 font-mono mb-2">
              Key Projects
            </h3>
            <div className="space-y-3">
              {projectsData.map((p) => (
                <div key={p.id} className="p-3.5 rounded-xl bg-cream-50 dark:bg-ink-800/40 border border-editorial dark:border-ink-700">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-ink-900 dark:text-white text-sm">
                      {p.name}
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cream-200 dark:bg-ink-700 text-ink-700 dark:text-gray-300">
                      {p.category}
                    </span>
                  </div>
                  <p className="text-xs text-ink-600 dark:text-gray-300 mt-1">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-2 text-[11px] text-brand-600 dark:text-blue-400 font-mono">
                    {p.liveUrl && (
                      <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                        <span>Live Demo</span> <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {p.sourceUrl && (
                      <a href={p.sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                        <span>GitHub Repo</span> <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-5 sm:p-6 bg-cream-50 dark:bg-ink-900 border-t border-editorial dark:border-paper-borderDark flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <a
              href="./assets/Gampa_Advaith_Resume.pdf"
              download="Gampa_Advaith_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-brand-600 text-white hover:bg-brand-700 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF File</span>
            </a>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-medium bg-white dark:bg-ink-800 text-ink-800 dark:text-gray-200 border border-editorial dark:border-ink-700 hover:bg-cream-200 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Resume</span>
            </button>
          </div>

          <button
            onClick={handleCopySummary}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-ink-600 dark:text-gray-300 hover:text-ink-900 dark:hover:text-white"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied ATS Text!' : 'Copy ATS Text'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
