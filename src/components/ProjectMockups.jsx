import React from 'react';
import { 
  TrendingDown, 
  CheckCircle2, 
  ShieldCheck, 
  Video, 
  Sparkles, 
  Layers, 
  Activity, 
  Wand2, 
  Film,
  Search,
  ExternalLink
} from 'lucide-react';
import { Github } from './Icons';

export const SureDealMockup = () => {
  return (
    <div className="w-full h-48 bg-gradient-to-br from-emerald-500/10 via-emerald-50/50 to-transparent dark:from-emerald-950/30 dark:via-gray-900/40 dark:to-transparent rounded-xl p-4 border border-emerald-200/60 dark:border-emerald-900/40 flex flex-col justify-between overflow-hidden relative group">
      {/* Subtle background glow */}
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-emerald-400/10 dark:bg-emerald-500/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
      
      {/* Top Header Mockup */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
            SD
          </div>
          <div>
            <span className="text-xs font-semibold text-ink-900 dark:text-gray-100">SureDeal Engine</span>
            <span className="block text-[10px] text-emerald-700 dark:text-emerald-400 font-mono">live-price-crawler</span>
          </div>
        </div>
        <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Real Deal Verified</span>
        </span>
      </div>

      {/* Center Simulated Price Card */}
      <div className="bg-white/90 dark:bg-ink-800/90 backdrop-blur-sm rounded-lg p-3 border border-emerald-100 dark:border-ink-700 shadow-sm z-10 transition-transform group-hover:translate-y-[-2px] duration-300">
        <div className="flex items-baseline justify-between mb-1.5">
          <div className="flex items-baseline space-x-2">
            <span className="text-lg font-bold text-ink-900 dark:text-gray-100">$89.00</span>
            <span className="text-xs text-ink-500 line-through">$149.00</span>
            <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center">
              <TrendingDown className="w-3 h-3 mr-0.5 inline" /> -40% Genuine
            </span>
          </div>
          <span className="text-[10px] text-ink-500 dark:text-ink-400">90-Day Low</span>
        </div>

        {/* Mini Sparkline Chart */}
        <div className="h-6 w-full flex items-end space-x-1 pt-1">
          {[65, 70, 68, 85, 80, 75, 90, 85, 60, 55, 45, 38].map((val, idx) => (
            <div 
              key={idx} 
              className={`flex-1 rounded-t transition-all duration-300 ${
                idx >= 10 ? 'bg-emerald-500' : 'bg-emerald-200 dark:bg-emerald-900/60'
              }`}
              style={{ height: `${val}%` }}
            />
          ))}
        </div>
      </div>

      {/* Bottom Features Strip */}
      <div className="flex items-center justify-between text-[11px] text-ink-600 dark:text-ink-400 z-10 pt-1">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          Fake-discount filter
        </span>
        <span className="font-mono text-[10px] text-ink-500">suredeal.store</span>
      </div>
    </div>
  );
};

export const TruthLensMockup = () => {
  return (
    <div className="w-full h-48 bg-gradient-to-br from-blue-500/10 via-blue-50/50 to-transparent dark:from-blue-950/30 dark:via-gray-900/40 dark:to-transparent rounded-xl p-4 border border-blue-200/60 dark:border-blue-900/40 flex flex-col justify-between overflow-hidden relative group">
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />

      {/* Top Header Mockup */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
            TL
          </div>
          <div>
            <span className="text-xs font-semibold text-ink-900 dark:text-gray-100">TruthLens AI</span>
            <span className="block text-[10px] text-blue-700 dark:text-blue-400 font-mono">evidence-evaluator</span>
          </div>
        </div>
        <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span>Active on Render</span>
        </span>
      </div>

      {/* Center Simulated Verification Card */}
      <div className="bg-white/90 dark:bg-ink-800/90 backdrop-blur-sm rounded-lg p-3 border border-blue-100 dark:border-ink-700 shadow-sm z-10 transition-transform group-hover:translate-y-[-2px] duration-300">
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-semibold text-ink-900 dark:text-gray-100">Claim Examination</span>
          </div>
          <span className="text-[10px] font-mono px-1.5 py-0.5 bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded font-semibold">
            92% Confidence
          </span>
        </div>
        <p className="text-[11px] text-ink-600 dark:text-ink-400 line-clamp-1 italic">
          "Extracting cross-referenced evidentiary citations from trusted indices..."
        </p>

        {/* Evidence Pill indicators */}
        <div className="flex items-center space-x-2 mt-2 pt-1 border-t border-gray-100 dark:border-ink-700 text-[10px]">
          <span className="text-blue-600 dark:text-blue-400 font-medium">3 Supporting Sources</span>
          <span className="text-ink-400 dark:text-ink-500">•</span>
          <span className="text-ink-500 dark:text-ink-400">0 Contradictions</span>
        </div>
      </div>

      {/* Bottom Features Strip */}
      <div className="flex items-center justify-between text-[11px] text-ink-600 dark:text-ink-400 z-10 pt-1">
        <span className="flex items-center gap-1">
          <Search className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          Semantic fact verification
        </span>
        <span className="font-mono text-[10px] text-ink-500">onrender.com</span>
      </div>
    </div>
  );
};

export const AutoPilotMockup = () => {
  return (
    <div className="w-full h-48 bg-gradient-to-br from-amber-500/10 via-amber-50/50 to-transparent dark:from-amber-950/30 dark:via-gray-900/40 dark:to-transparent rounded-xl p-4 border border-amber-200/60 dark:border-amber-900/40 flex flex-col justify-between overflow-hidden relative group">
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-amber-400/10 dark:bg-amber-500/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />

      {/* Top Header Mockup */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
            AP
          </div>
          <div>
            <span className="text-xs font-semibold text-ink-900 dark:text-gray-100">Auto-Pilot Studio</span>
            <span className="block text-[10px] text-amber-700 dark:text-amber-400 font-mono">generative-pipeline</span>
          </div>
        </div>
        <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
          <Github className="w-3 h-3" />
          <span>Code Available</span>
        </span>
      </div>

      {/* Center Simulated Studio Pipeline */}
      <div className="bg-white/90 dark:bg-ink-800/90 backdrop-blur-sm rounded-lg p-3 border border-amber-100 dark:border-ink-700 shadow-sm z-10 transition-transform group-hover:translate-y-[-2px] duration-300">
        <div className="flex items-center justify-between mb-1.5 text-xs">
          <span className="font-semibold text-ink-900 dark:text-gray-100 flex items-center gap-1">
            <Film className="w-3 h-3 text-amber-600 dark:text-amber-400" /> Multi-Track Synthesis
          </span>
          <span className="text-[10px] text-amber-600 dark:text-amber-400 font-mono">1080p · 60fps</span>
        </div>
        
        {/* Timeline Tracks Mock */}
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center space-x-1.5 text-[10px]">
            <span className="w-10 text-ink-500 font-mono text-[9px]">SCRIPT</span>
            <div className="flex-1 bg-amber-100 dark:bg-amber-900/50 h-3 rounded flex items-center px-1 text-[8px] text-amber-800 dark:text-amber-200 truncate">
              Auto-script generation
            </div>
          </div>
          <div className="flex items-center space-x-1.5 text-[10px]">
            <span className="w-10 text-ink-500 font-mono text-[9px]">AUDIO</span>
            <div className="flex-1 bg-amber-200/80 dark:bg-amber-800/50 h-3 rounded flex items-center px-1 text-[8px] text-amber-900 dark:text-amber-200 truncate">
              TTS voiceover sync
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Features Strip */}
      <div className="flex items-center justify-between text-[11px] text-ink-600 dark:text-ink-400 z-10 pt-1">
        <span className="flex items-center gap-1 text-amber-700 dark:text-amber-400 text-[10px]">
          <Activity className="w-3 h-3" />
          AWS EB asleep · Repo public
        </span>
        <span className="font-mono text-[10px] text-ink-500">GitHub Repo</span>
      </div>
    </div>
  );
};

export const ShortFactoryMockup = () => {
  return (
    <div className="w-full h-48 bg-gradient-to-br from-purple-500/10 via-purple-50/50 to-transparent dark:from-purple-950/30 dark:via-gray-900/40 dark:to-transparent rounded-xl p-4 border border-purple-200/60 dark:border-purple-900/40 flex flex-col justify-between overflow-hidden relative group">
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />

      {/* Top Header Mockup */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
            SF
          </div>
          <div>
            <span className="text-xs font-semibold text-ink-900 dark:text-gray-100">Short Factory</span>
            <span className="block text-[10px] text-purple-700 dark:text-purple-400 font-mono">short-form-engine</span>
          </div>
        </div>
        <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-purple-100 dark:bg-purple-900/60 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
          <Sparkles className="w-3 h-3" />
          <span>In Development</span>
        </span>
      </div>

      {/* Center Simulated Vertical Reels Frame */}
      <div className="bg-white/90 dark:bg-ink-800/90 backdrop-blur-sm rounded-lg p-3 border border-purple-100 dark:border-ink-700 shadow-sm z-10 transition-transform group-hover:translate-y-[-2px] duration-300">
        <div className="flex items-center justify-between mb-1 text-xs">
          <span className="font-semibold text-ink-900 dark:text-gray-100 flex items-center gap-1">
            <Layers className="w-3 h-3 text-purple-600 dark:text-purple-400" /> 9:16 Kinetic Video
          </span>
          <span className="text-[10px] text-purple-600 dark:text-purple-400 font-mono">v0.1-dev</span>
        </div>
        <div className="bg-purple-50 dark:bg-purple-950/40 rounded p-1.5 border border-purple-200/50 dark:border-purple-900/30">
          <p className="text-[10px] text-center font-semibold text-purple-900 dark:text-purple-200">
            "AI-driven caption pacing & viral cutouts"
          </p>
        </div>
      </div>

      {/* Bottom Features Strip */}
      <div className="flex items-center justify-between text-[11px] text-ink-600 dark:text-ink-400 z-10 pt-1">
        <span className="flex items-center gap-1 text-[10px] text-purple-700 dark:text-purple-400">
          <Wand2 className="w-3 h-3" />
          Architecture milestone
        </span>
        <span className="font-mono text-[10px] text-ink-500">Coming Soon</span>
      </div>
    </div>
  );
};
