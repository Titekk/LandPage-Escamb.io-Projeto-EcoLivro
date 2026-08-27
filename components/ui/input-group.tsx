import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export function InputGroup({ className, children, ...props }: InputGroupProps) {
  return (
    <div
      className={cn(
        "group relative flex items-center w-full rounded-full bg-[#080A12]/90 border border-white/10 hover:border-blue-500/40 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-500/25 transition-all shadow-inner overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface InputGroupAddonProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: "inline-start" | "inline-end";
  children?: React.ReactNode;
}

export function InputGroupAddon({
  align = "inline-end",
  className,
  children,
  ...props
}: InputGroupAddonProps) {
  return (
    <div
      className={cn(
        "flex items-center px-3.5 text-xs text-slate-400 pointer-events-none select-none",
        align === "inline-start" ? "order-first pl-4 pr-1" : "order-last pr-4 pl-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface InputGroupInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const InputGroupInput = React.forwardRef<
  HTMLInputElement,
  InputGroupInputProps
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "w-full h-12 bg-transparent text-xs font-mono text-white placeholder:text-slate-500 focus:outline-none px-4 py-2 order-2",
        className
      )}
      {...props}
    />
  );
});
InputGroupInput.displayName = "InputGroupInput";
