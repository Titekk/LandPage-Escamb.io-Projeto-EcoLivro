import React from "react";

export interface SegmentedSwitchProps {
  activeMode: "items" | "services";
  onModeChange: (mode: "items" | "services") => void;
  className?: string;
}

export function SegmentedSwitch({
  activeMode,
  onModeChange,
  className = "",
}: SegmentedSwitchProps) {
  return (
    <div
      role="group"
      aria-label="Filtro de Categoria do Catálogo"
      className={`flex items-center p-1 rounded-full bg-[#0D0E15] border border-white/10 text-xs font-mono font-semibold ${className}`}
    >
      <button
        type="button"
        onClick={() => onModeChange("items")}
        aria-pressed={activeMode === "items"}
        className={`px-3.5 py-1.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400 ${
          activeMode === "items"
            ? "bg-white/10 text-white shadow-sm font-bold"
            : "text-slate-400 hover:text-white"
        }`}
      >
        ITENS
      </button>

      <button
        type="button"
        onClick={() => onModeChange("services")}
        aria-pressed={activeMode === "services"}
        className={`px-3.5 py-1.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400 ${
          activeMode === "services"
            ? "bg-white/10 text-white shadow-sm font-bold"
            : "text-slate-400 hover:text-white"
        }`}
      >
        SERVIÇOS
      </button>
    </div>
  );
}
