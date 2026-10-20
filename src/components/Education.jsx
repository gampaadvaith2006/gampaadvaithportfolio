import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  BookOpen, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education = () => {
  return (
    <section id="education" className="py-20 sm:py-28 border-t border-editorial dark:border-paper-borderDark relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-600 dark:text-blue-400 font-mono">
            04 / Academic Foundation
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-ink-900 dark:text-white">
            Formal engineering education & specialization.
          </h2>
          <p className="mt-3 text-sm text-ink-600 dark:text-gray-300">
            Foundational computer science principles paired with specialized artificial intelligence & machine learning coursework.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-brand-500/30 dark:border-blue-500/30 space-y-8">
          {educationData.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Marker Node */}
              <div className="absolute -left-[33px] sm:-left-[41px] top-1 w-6 h-6 rounded-full bg-white dark:bg-paper-cardDark border-2 border-brand-500 dark:border-blue-400 flex items-center justify-center shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand-500 dark:bg-blue-400" />
              </div>

              {/* Card Container */}
              <div className="bg-white dark:bg-paper-cardDark rounded-2xl border border-editorial dark:border-paper-borderDark p-6 sm:p-8 shadow-sm card-hover-glow transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-700 dark:bg-blue-950/60 dark:text-blue-300 border border-brand-200 dark:border-blue-800 mb-2.5">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>{item.period} · {item.status}</span>
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-ink-900 dark:text-white">
                      {item.degree}
                    </h3>
                    <p className="text-base font-semibold text-brand-600 dark:text-blue-400 mt-1">
                      {item.institution}
                    </p>
                  </div>

                  {/* Editable Placeholder Note */}
                  <div className="sm:text-right">
                    <span className="text-xs text-ink-500 font-mono block">
                      Academic Results
                    </span>
                    <span className="text-xs text-ink-600 dark:text-gray-400 bg-cream-100 dark:bg-ink-800 px-2 py-1 rounded-md border border-editorial dark:border-ink-700 inline-block mt-1">
                      Details available upon request
                    </span>
                  </div>
                </div>

                <p className="text-sm text-ink-600 dark:text-gray-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Coursework & Focus Areas */}
                <div className="pt-4 border-t border-editorial/60 dark:border-paper-borderDark">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-ink-500 dark:text-gray-400 font-mono mb-3">
                    Curriculum & Focus Areas
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-ink-700 dark:text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
