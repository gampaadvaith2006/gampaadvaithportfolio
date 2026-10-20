import React from 'react';
import { 
  ExternalLink, 
  Info, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { Github } from './Icons';
import { 
  SureDealMockup, 
  TruthLensMockup, 
  AutoPilotMockup, 
  ShortFactoryMockup 
} from './ProjectMockups';

export const ProjectCard = ({ project, onSelectProject }) => {
  const renderMockup = () => {
    switch (project.id) {
      case 'botcorp':
        return <div className="rounded-xl bg-slate-950 p-6 text-white overflow-hidden relative min-h-48"><div className="text-xs uppercase tracking-widest text-purple-300">BotCorp · Local AI operations</div><div className="mt-5 text-3xl font-bold">12 teams. 384 roles.</div><div className="mt-4 flex gap-2 text-2xl" aria-hidden="true">🧠 💻 📣 🛡️</div><p className="mt-4 text-sm text-slate-300">Propose → Debate → Review</p></div>;
      case 'suredeal':
        return <SureDealMockup />;
      case 'truthlens-ai':
        return <TruthLensMockup />;
      case 'auto-pilot-ai-video-studio':
        return <AutoPilotMockup />;
      case 'short-factory':
        return <ShortFactoryMockup />;
      default:
        return null;
    }
  };

  const renderStatusBadge = () => {
    if (project.status === 'live') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{project.statusLabel || 'Live Demo'}</span>
        </span>
      );
    }
    if (project.status === 'demo-unavailable') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
          <span>Demo Unavailable</span>
        </span>
      );
    }
    if (project.status === 'in-development') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border border-purple-200/80 dark:border-purple-800">
          <Clock className="w-3.5 h-3.5 text-purple-500" />
          <span>In Development</span>
        </span>
      );
    }
    return null;
  };

  return (
    <div
      tabIndex={0}
      role="button"
      onClick={() => onSelectProject(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelectProject(project);
        }
      }}
      className="group relative bg-white dark:bg-paper-cardDark rounded-2xl border border-editorial dark:border-paper-borderDark p-5 card-hover-glow cursor-pointer flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:focus:ring-offset-paper-dark transition-all duration-300"
      aria-label={`View details for ${project.name}`}
    >
      <div>
        {/* Mockup Preview */}
        <div className="mb-4">
          {renderMockup()}
        </div>

        {/* Category & Status Row */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <span className="text-xs font-semibold tracking-wider uppercase text-brand-600 dark:text-blue-400">
            {project.category}
          </span>
          {renderStatusBadge()}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-ink-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-blue-400 transition-colors flex items-center justify-between">
          <span>{project.name}</span>
          <ArrowUpRight className="w-4 h-4 text-ink-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </h3>

        {/* Short Description */}
        <p className="mt-2 text-sm text-ink-600 dark:text-gray-300 leading-relaxed">
          {project.description}
        </p>

        {/* Technology Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-cream-100 dark:bg-ink-800 text-ink-700 dark:text-gray-300 border border-editorial/60 dark:border-ink-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons Row */}
      <div 
        className="mt-6 pt-4 border-t border-editorial/60 dark:border-paper-borderDark flex flex-wrap items-center justify-between gap-2"
        onClick={(e) => e.stopPropagation()} /* Prevent card click when clicking action bar */
      >
        <div className="flex items-center gap-2">
          {/* Live Project Button (Only when verified live) */}
          {project.liveUrl && project.status === 'live' ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live website for ${project.name} in a new tab`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-ink-900 dark:bg-white text-white dark:text-ink-900 hover:bg-brand-600 dark:hover:bg-blue-500 dark:hover:text-white transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <span>View Live</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : project.liveUrl && project.status === 'demo-unavailable' ? (
            <button
              type="button"
              onClick={() => onSelectProject(project)}
              aria-label={`Demo unavailable for ${project.name}, view status note`}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 hover:bg-amber-100 transition-colors"
            >
              <AlertTriangle className="w-3 h-3" />
              <span>Demo Asleep</span>
            </button>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-ink-400 dark:text-ink-500 bg-gray-100/60 dark:bg-ink-800/40 cursor-not-allowed">
              <Clock className="w-3 h-3" />
              <span>Coming Soon</span>
            </span>
          )}

          {/* Source Code Button (Only when confirmed repository is available) */}
          {project.sourceUrl ? (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open GitHub repository for ${project.name} in a new tab`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-cream-200 dark:bg-ink-700 text-ink-800 dark:text-gray-100 hover:bg-cream-300 dark:hover:bg-ink-600 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source</span>
            </a>
          ) : (
            <span 
              className="text-[11px] text-ink-400 dark:text-ink-500 italic px-1 cursor-default"
              title="Source code not provided"
            >
              Source private
            </span>
          )}
        </div>

        {/* View Details Button */}
        <button
          type="button"
          onClick={() => onSelectProject(project)}
          aria-label={`Open detailed overview of ${project.name}`}
          className="inline-flex items-center gap-1 text-xs font-medium text-brand-600 dark:text-blue-400 hover:text-brand-700 dark:hover:text-blue-300 hover:underline p-1 focus:outline-none focus:ring-2 focus:ring-brand-500 rounded"
        >
          <Info className="w-3.5 h-3.5" />
          <span>Details</span>
        </button>
      </div>
    </div>
  );
};
