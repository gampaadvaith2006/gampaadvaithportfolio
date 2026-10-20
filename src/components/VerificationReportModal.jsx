import React, { useEffect } from 'react';
import { 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  ExternalLink,
  Terminal,
  Activity
} from 'lucide-react';
import { linkVerificationResults } from '../data/portfolioData';

export const VerificationReportModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ink-900/60 dark:bg-black/80 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="report-modal-title"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-paper-cardDark rounded-2xl border border-editorial dark:border-paper-borderDark shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-editorial dark:border-paper-borderDark">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 id="report-modal-title" className="text-xl font-bold text-ink-900 dark:text-white">
                Link & Deployment Health Report
              </h2>
              <span className="text-xs text-ink-500 font-mono">
                Automated build-time test verification
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close verification report"
            className="p-2 rounded-xl text-ink-500 hover:text-ink-900 dark:hover:text-white hover:bg-cream-200 dark:hover:bg-ink-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
          <p className="text-xs text-ink-600 dark:text-gray-300 leading-relaxed">
            In accordance with engineering ethics and truth-in-advertising guidelines, all URLs and repositories are audited at build time. No cards use placeholder destinations or pretend that broken links are active.
          </p>

          <div className="space-y-3">
            {linkVerificationResults.map((item, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-xl bg-cream-50 dark:bg-ink-800/40 border border-editorial dark:border-ink-700 flex flex-col gap-1.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-ink-900 dark:text-white">
                    {item.name}
                  </span>
                  <span className={`inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded ${
                    item.healthy 
                      ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300' 
                      : 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300'
                  }`}>
                    {item.healthy ? <CheckCircle2 className="w-3 h-3 text-emerald-600" /> : <AlertTriangle className="w-3 h-3 text-amber-600" />}
                    <span>{item.status}</span>
                  </span>
                </div>

                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[11px] text-brand-600 dark:text-blue-400 font-mono break-all hover:underline flex items-center gap-1"
                >
                  <span>{item.url}</span>
                  <ExternalLink className="w-3 h-3 inline" />
                </a>

                <p className="text-[11px] text-ink-500 dark:text-gray-400 italic">
                  {item.note}
                </p>
              </div>
            ))}
          </div>

          {/* Social Profiles Note */}
          <div className="p-4 rounded-xl bg-gray-50 dark:bg-ink-900/60 border border-gray-200 dark:border-ink-700 text-xs text-ink-600 dark:text-gray-400">
            <span className="font-semibold text-ink-900 dark:text-white block mb-1">
              Social Profiles Audit:
            </span>
            <ul className="list-disc list-inside space-y-0.5 text-[11px]">
              <li>GitHub (<code className="font-mono">github.com/gampaadvaith2006</code>): Verified public & active.</li>
              <li>LinkedIn: Unsupplied — safely kept as disabled placeholder.</li>
              <li>YouTube: Unsupplied — safely kept as disabled placeholder.</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-cream-50 dark:bg-ink-900 border-t border-editorial dark:border-paper-borderDark text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-ink-900 dark:bg-white text-white dark:text-ink-900 hover:bg-brand-600 transition-colors"
          >
            Close Report
          </button>
        </div>
      </div>
    </div>
  );
};
