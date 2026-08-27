import React from "react";
import { Button } from "@/components/ui/button";
import { SegmentedSwitch } from "@/components/ui/segmented-switch";

export interface NavbarProps {
  activeMode: "items" | "services";
  onModeChange: (mode: "items" | "services") => void;
  onOpenTradeModal?: () => void;
}

export function Navbar({
  activeMode,
  onModeChange,
  onOpenTradeModal,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-2xl bg-[#000000]/85 border-b border-white/[0.07] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: 4-Diamond Cluster Logo + Segmented Switch */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a href="#" className="flex items-center gap-3 group" aria-label="Escamb.io - Página Inicial">
            <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all shadow-sm">
              <svg className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15 6L12 10L9 6L12 2Z"/>
                <path d="M22 12L18 15L14 12L18 9L22 12Z"/>
                <path d="M12 22L9 18L12 14L15 18L12 22Z"/>
                <path d="M2 12L6 9L10 12L6 15L2 12Z"/>
              </svg>
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-white hidden sm:inline-block">
              escamb<span className="text-blue-400">.io</span>
            </span>
          </a>

          <SegmentedSwitch activeMode={activeMode} onModeChange={onModeChange} />
        </div>

        {/* Right: Monospace Navigation Links + Pill CTA */}
        <div className="flex items-center gap-4 sm:gap-7">
          <nav className="hidden md:flex items-center gap-6 text-xs font-mono tracking-wider text-slate-400 uppercase">
            <a href="#como-funciona" className="hover:text-white transition-colors">COMO FUNCIONA</a>
            <a href="#catalogo" className="hover:text-white transition-colors">EXPLORAR</a>
            <a href="#sobre" className="hover:text-white transition-colors">SOBRE</a>
            <a href="#cadastro" className="hover:text-white transition-colors">ENTRAR</a>
          </nav>

          <Button variant="subtle-pill" size="sm" onClick={onOpenTradeModal}>
            TROCAR • 0 R$
          </Button>
        </div>

      </div>
    </header>
  );
}
