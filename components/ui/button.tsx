import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-xs font-mono font-bold uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#000000] disabled:pointer-events-none disabled:opacity-50 active:scale-95 cursor-pointer [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Void Midnight & Modules Variants
        "primary-pill":
          "bg-white text-slate-950 hover:bg-slate-100 shadow-lg shadow-white/5 rounded-full hover:scale-[1.02]",
        "glass-pill":
          "bg-[#0D0E15] hover:bg-[#151722] text-slate-300 hover:text-white border border-white/10 hover:border-white/20 shadow-sm rounded-full",
        "subtle-pill":
          "bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10 hover:border-white/20 shadow-sm rounded-full",
        blue:
          "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 rounded-full hover:scale-[1.02]",
        
        // Standard Shadcn/UI Variants
        default:
          "bg-white text-slate-950 hover:bg-slate-200 rounded-md shadow",
        destructive:
          "bg-red-500/15 text-red-400 hover:bg-red-500/25 border border-red-500/30 rounded-md",
        outline:
          "border border-white/10 bg-transparent hover:bg-white/5 text-slate-200 hover:text-white rounded-md",
        secondary:
          "bg-[#0D0E15] text-slate-300 hover:bg-[#13141F] hover:text-white border border-white/10 rounded-md",
        ghost:
          "hover:bg-white/5 text-slate-400 hover:text-white rounded-md",
        link:
          "text-blue-400 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 rounded-full px-3.5 text-[11px]",
        md: "h-12 rounded-full px-7 text-xs sm:text-sm",
        lg: "h-14 rounded-full px-8 text-sm",
        icon: "h-9 w-9 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary-pill",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
