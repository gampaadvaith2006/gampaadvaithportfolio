import React, { useEffect, useState } from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  Copy, 
  Check, 
  Layers, 
  Sparkles,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { Github } from './Icons';

export const ProjectModal = ({ project, onClose }) => {
  const [copied, setCopied] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Lock background scroll when open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!project) return null;

  const handleCopyLink = () => {
    const urlToCopy = project.liveUrl || project.sourceUrl || window.location.href;
    navigator.clipboard.writeText(urlToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ink-900/60 dark:bg-black/80 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-paper-cardDark rounded-2xl border border-editorial dark:border-paper-borderDark shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-editorial/70 dark:border-paper-borderDark">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold tracking-wider uppercase text-brand-600 dark:text-blue-400">
                {project.category}
              </span>
              <span className="text-gray-300 dark:text-gray-700">•</span>
              <span className="text-xs text-ink-500 font-mono">ID: {project.id}</span>
            </div>
            <h2 id="project-modal-title" className="text-2xl font-bold text-ink-900 dark:text-white">
              {project.name}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project details"
            className="p-2 rounded-xl text-ink-500 hover:text-ink-900 dark:hover:text-white hover:bg-cream-200 dark:hover:bg-ink-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* Status Banner */}
          <div className="p-4 rounded-xl border transition-colors bg-cream-50 dark:bg-ink-800/60 border-editorial dark:border-ink-700">
            <div className="flex items-start gap-3">
              {project.status === 'live' && (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
              )}
              {project.status === 'demo-unavailable' && (
                <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
              )}
              {project.status === 'in-development' && (
                <Clock className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
              )}
              <div>
                <h4 className="text-sm font-semibold text-ink-900 dark:text-white">
                  Verification Status: {project.statusLabel}
                </h4>
                <p className="text-xs text-ink-600 dark:text-gray-300 mt-0.5 leading-relaxed">
                  {project.statusNote}
                </p>
              </div>
            </div>
          </div>

          {/* Deep Overview */}
          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-ink-500 dark:text-gray-400 mb-2">
              Project Overview
            </h4>
            <p className="text-sm text-ink-700 dark:text-gray-200 leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Architecture Highlights */}
          {project.highlights && (
            <div>
              <h4 className="text-xs font-bold tracking-wider uppercase text-ink-500 dark:text-gray-400 mb-2.5">
                Key Highlights & Capabilities
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-ink-700 dark:text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Tag Group */}
          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-ink-500 dark:text-gray-400 mb-2.5">
              Technologies & Architecture
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium bg-cream-200 dark:bg-ink-800 text-ink-800 dark:text-gray-200 border border-editorial dark:border-ink-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with Direct Actions */}
        <div className="p-5 sm:p-6 bg-cream-50 dark:bg-ink-900 border-t border-editorial/70 dark:border-paper-borderDark flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {project.liveUrl && project.status === 'live' ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-brand-600 hover:bg-brand-700 text-white shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <span>Launch Live Application</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : project.liveUrl && project.status === 'demo-unavailable' ? (
              <div className="flex items-center gap-2 text-xs text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-3 py-1.5 rounded-lg border border-amber-200 dark:border-amber-800">
                <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Hosting container inactive — repository below is active</span>
              </div>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-ink-500 bg-cream-200 dark:bg-ink-800">
                <Clock className="w-3.5 h-3.5" />
                <span>Live Demo Coming Soon</span>
              </span>
            )}

            {project.sourceUrl ? (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-ink-900 dark:bg-white text-white dark:text-ink-900 hover:bg-ink-800 dark:hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View Source Code</span>
              </a>
            ) : (
              <span className="text-xs text-ink-500 dark:text-ink-400 italic px-2">
                Repository link not available
              </span>
            )}
          </div>

          <button
            onClick={handleCopyLink}
            aria-label="Copy project URL or reference"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-ink-600 dark:text-gray-300 hover:text-ink-900 dark:hover:text-white bg-white dark:bg-ink-800 border border-editorial dark:border-ink-700 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied!' : 'Copy Link'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
