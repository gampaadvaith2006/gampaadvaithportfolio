import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  Layers, 
  ShieldCheck,
  Search
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

export const Projects = ({ onSelectProject, onOpenVerificationReport }) => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'live') return project.status === 'live';
    if (filter === 'repo') return !!project.sourceUrl;
    if (filter === 'dev') return project.status === 'in-development';
    return true;
  });

  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-editorial dark:border-paper-borderDark relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-600 dark:text-blue-400 font-mono">
              03 / Featured Work
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-ink-900 dark:text-white">
              Real projects, verified architectures.
            </h2>
            <p className="mt-3 text-sm text-ink-600 dark:text-gray-300 leading-relaxed">
              Every card reflects verified deployment health, genuine repository availability, and honest development status.
            </p>
          </div>

          {/* Verification Report Trigger Pill */}
          <button
            onClick={onOpenVerificationReport}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 transition-colors self-start md:self-auto shadow-2xs"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>View Link Verification Report</span>
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {[
            { id: 'all', label: 'All Projects', count: projectsData.length },
            { id: 'live', label: 'Live Demos', count: projectsData.filter(p => p.status === 'live').length },
            { id: 'repo', label: 'Source Code Public', count: projectsData.filter(p => p.sourceUrl).length },
            { id: 'dev', label: 'In Development', count: projectsData.filter(p => p.status === 'in-development').length }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filter === item.id
                  ? 'bg-ink-900 dark:bg-white text-white dark:text-ink-900 shadow-sm font-semibold'
                  : 'bg-white dark:bg-paper-cardDark text-ink-600 dark:text-gray-300 hover:bg-cream-200 dark:hover:bg-ink-800 border border-editorial dark:border-paper-borderDark'
              }`}
            >
              <span>{item.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                filter === item.id 
                  ? 'bg-white/20 text-white dark:bg-ink-900/20 dark:text-ink-900' 
                  : 'bg-cream-200 dark:bg-ink-800 text-ink-500'
              }`}>
                {item.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid: 2 columns on desktop for editorial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>

        {/* Informative Footer Note */}
        <div className="mt-12 p-4 rounded-xl bg-cream-50 dark:bg-ink-900/50 border border-editorial dark:border-paper-borderDark flex flex-col sm:flex-row sm:items-center justify-between text-xs text-ink-500 gap-3">
          <p>
            * Project URLs and repository states are verified at build-time. No guessed links or fabricated metrics are presented.
          </p>
          <button
            onClick={onOpenVerificationReport}
            className="text-brand-600 dark:text-blue-400 font-medium hover:underline self-start sm:self-auto"
          >
            Read URL test logs →
          </button>
        </div>
      </div>
    </section>
  );
};
