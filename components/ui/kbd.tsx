import * as React from "react";
import { cn } from "@/lib/utils";

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export function Kbd({ className, children, ...props }: KbdProps) {
  return (
    <kbd
      className={cn(
        "inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-md font-mono text-[10px] font-semibold text-slate-400 bg-white/[0.06] border border-white/10 shadow-sm transition-all select-none group-focus-within:border-blue-400/50 group-focus-within:text-blue-300 group-focus-within:bg-blue-500/10",
        className
      )}
      {...props}
    >
      {children}
    </kbd>
  );
}
