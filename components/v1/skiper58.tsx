"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface TextRollProps extends React.HTMLAttributes<HTMLDivElement> {
  children: string;
  className?: string;
  center?: boolean;
  duration?: number;
  stagger?: number;
}

export const TextRoll: React.FC<TextRollProps> = ({
  children,
  className,
  center = false,
  duration = 0.35,
  stagger = 0.02,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const letters = Array.from(children);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative overflow-hidden inline-flex cursor-pointer select-none leading-[0.9] py-1",
        center && "justify-center text-center",
        className
      )}
      {...props}
    >
      <div className="relative inline-flex flex-wrap overflow-hidden">
        {letters.map((char, index) => (
          <span key={index} className="relative inline-block overflow-hidden">
            {/* Top Text Layer (Rolls Up) */}
            <motion.span
              animate={{ y: isHovered ? "-100%" : "0%" }}
              transition={{
                duration,
                ease: [0.25, 1, 0.5, 1],
                delay: index * stagger,
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>

            {/* Bottom Text Layer (Rolls Up into view) */}
            <motion.span
              aria-hidden="true"
              initial={{ y: "100%" }}
              animate={{ y: isHovered ? "0%" : "100%" }}
              transition={{
                duration,
                ease: [0.25, 1, 0.5, 1],
                delay: index * stagger,
              }}
              className="absolute left-0 top-0 inline-block text-cyan-400"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export interface Skiper58Props {
  items?: { label: string; href: string }[];
  className?: string;
}

export const Skiper58: React.FC<Skiper58Props> = ({
  items = [
    { label: "HOME", href: "#" },
    { label: "PILARES", href: "#pilares" },
    { label: "CATALOGO", href: "#catalogo" },
    { label: "COMO FUNCIONA", href: "#como-funciona" },
    { label: "PARIDADE", href: "#matriz-paridade" },
    { label: "MANIFESTO", href: "#manifesto" },
    { label: "ENTRAR", href: "#cadastro" },
  ],
  className,
}) => {
  return (
    <nav className={cn("flex flex-col items-start gap-1 sm:gap-2", className)}>
      {items.map((item, index) => (
        <a key={index} href={item.href} className="group block focus:outline-none font-mono">
          <TextRoll className="font-mono text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white group-hover:text-cyan-400 transition-colors">
            {item.label}
          </TextRoll>
        </a>
      ))}
    </nav>
  );
};
