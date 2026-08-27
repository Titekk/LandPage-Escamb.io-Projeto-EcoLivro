import React from "react";
import { Button } from "@/components/ui/button";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { GeistPixelSquare, GeistPixelGrid, GeistPixelCircle, GeistPixelTriangle, GeistPixelLine } from "geist/font/pixel";

export interface ModuleCardProps {
  title: string;
  description: string;
  peerName: string;
  peerInitials: string;
  peerGrade: string;
  peerRating: string;
  location?: string;
  specsTag?: string;
  wantsInReturn: string;
  watermarkNumber?: string;
  iconSvg?: React.ReactNode;
  onProposeTrade?: () => void;
  className?: string;
}

export function ModuleCard({
  title,
  description,
  peerName,
  peerInitials,
  peerGrade,
  peerRating,
  specsTag,
  wantsInReturn,
  watermarkNumber = "01",
  iconSvg,
  onProposeTrade,
  className = "",
}: ModuleCardProps) {
  return (
    <article
      className={`minimal-dark-card module-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between group relative overflow-hidden transition-all duration-300 border border-white/[0.08] hover:border-cyan-400/50 bg-[#090A0F]/90 backdrop-blur-xl ${className}`}
    >
      {/* Ghost Watermark Number in Background (Reference Style) */}
      <div className="card-watermark absolute right-3 bottom-12 font-mono font-black text-[100px] sm:text-[120px] text-white/[0.032] select-none pointer-events-none tracking-tighter leading-none transition-colors group-hover:text-cyan-400/[0.075]">
        {watermarkNumber}
      </div>

      <div>
        {/* Top Row: Stroke Icon + Peer / Rating Badges */}
        <div className="flex items-center justify-between mb-6 relative z-10">
          <div className="card-icon-box w-12 h-12 rounded-2xl flex items-center justify-center bg-cyan-400/[0.06] border border-cyan-400/20 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.08)] group-hover:scale-110 group-hover:border-cyan-400/60 group-hover:bg-cyan-400/12 transition-all">
            {iconSvg || (
              <svg className="w-6 h-6 stroke-[1.75]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="3" width="7" height="7" rx="2" />
                <rect x="14" y="3" width="7" height="7" rx="2" />
                <rect x="14" y="14" width="7" height="7" rx="2" />
                <rect x="3" y="14" width="7" height="7" rx="2" />
              </svg>
            )}
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px]">
            <span className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300">
              {peerInitials} &bull; {peerGrade}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-semibold">
              {peerRating}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="relative z-10">
          {specsTag && (
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400/90 block mb-1 font-semibold">
              {specsTag}
            </span>
          )}
          <h3 className="card-title font-heading text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
            {title}
          </h3>
          <p className="card-desc text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 font-sans">
            {description}
          </p>
        </div>
      </div>

      <div className="pt-4 border-t border-white/5 relative z-10">
        {/* Trade Condition Bar */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] group-hover:border-cyan-400/25 transition-all font-mono text-xs mb-3.5">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 animate-pulse" />
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold flex-shrink-0">
              EM TROCA:
            </span>
            <strong className="text-slate-200 text-xs font-medium truncate group-hover:text-cyan-300 transition-colors">
              {wantsInReturn}
            </strong>
          </div>
          <span className="text-[10px] font-mono text-cyan-400/90 border border-cyan-400/30 px-1.5 py-0.5 rounded uppercase flex-shrink-0">
            1:1
          </span>
        </div>

        <div className="flex items-center justify-between gap-3">
          <Button
            type="button"
            variant="default"
            size="default"
            className="flex-grow h-10 px-4 bg-white/[0.04] hover:bg-white text-slate-300 hover:text-slate-950 border border-white/10 hover:border-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center active:scale-95"
            onClick={onProposeTrade}
          >
            PROPOR TROCA COM {peerName.split(" ")[0].toUpperCase()}
          </Button>
          <div className="card-arrow-btn w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all">
            <svg className="w-5 h-5 stroke-[2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
}
