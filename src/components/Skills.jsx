import React, { useState } from 'react';
import { 
  Code2, 
  Cpu, 
  Wrench, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Terminal,
  Workflow
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const filteredCategories = activeCategory === 'All' 
    ? skillsData 
    : skillsData.filter((s) => s.category === activeCategory);

  const getCategoryIcon = (category) => {
    if (category.toLowerCase().includes('programming')) return <Code2 className="w-5 h-5 text-brand-600 dark:text-blue-400" />;
    if (category.toLowerCase().includes('ai')) return <Cpu className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
    return <Wrench className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
  };

  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-editorial dark:border-paper-borderDark relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-600 dark:text-blue-400 font-mono">
              02 / Technical Capabilities
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-ink-900 dark:text-white">
              Tools, languages & engineering competencies.
            </h2>
            <p className="mt-3 text-sm text-ink-600 dark:text-gray-300">
              Honest, project-tested skills across full-stack development, intelligent systems, and automation.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-cream-200/60 dark:bg-ink-900 rounded-xl border border-editorial dark:border-paper-borderDark self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-white dark:bg-ink-800 text-ink-900 dark:text-white shadow-sm font-semibold'
                    : 'text-ink-600 dark:text-gray-400 hover:text-ink-900 dark:hover:text-white'
                }`}
              >
                {cat === 'All' ? 'All Skills' : cat.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Categories and Skill Cards */}
        <div className="space-y-12">
          {filteredCategories.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-4">
              {/* Category Sub-header */}
              <div className="flex items-center space-x-3 pb-2 border-b border-editorial/60 dark:border-paper-borderDark">
                <div className="p-2 rounded-lg bg-white dark:bg-paper-cardDark border border-editorial dark:border-paper-borderDark shadow-2xs">
                  {getCategoryIcon(group.category)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-ink-900 dark:text-white capitalize">
                    {group.category}
                  </h3>
                  <p className="text-xs text-ink-500 dark:text-gray-400">
                    {group.description}
                  </p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="p-4 rounded-xl bg-white dark:bg-paper-cardDark border border-editorial dark:border-paper-borderDark card-hover-glow transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-bold text-ink-900 dark:text-white">
                          {skill.name}
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cream-100 dark:bg-ink-800 text-ink-600 dark:text-gray-300 border border-editorial/50 dark:border-ink-700">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-ink-600 dark:text-gray-400 leading-relaxed">
                        {skill.highlight}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-editorial/40 dark:border-paper-borderDark flex items-center justify-between text-[11px] text-ink-500 font-mono">
                      <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-[10px]">
                        <CheckCircle2 className="w-3 h-3" /> Confirmed
                      </span>
                      <span className="text-[10px]">Project-tested</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
