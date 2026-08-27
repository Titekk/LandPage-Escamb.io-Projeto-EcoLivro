"use client";

import React, { useEffect, useRef } from "react";
import anime from "animejs";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Kbd } from "@/components/ui/kbd";

export interface ParticleSearchProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
  className?: string;
}

export function ParticleSearch({
  placeholder = "Buscar por livro, teclado, monitoria de React…",
  onSearch,
  className = "",
}: ParticleSearchProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);

  // Global '/' hotkey listener to focus search input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "/" &&
        document.activeElement !== inputRef.current &&
        !["INPUT", "TEXTAREA"].includes((document.activeElement as HTMLElement)?.tagName)
      ) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleMouseEnter = () => {
    if (containerRef.current) {
      anime({
        targets: containerRef.current,
        scale: [1, 1.015],
        duration: 250,
        easing: "easeOutQuad",
      });
    }
    if (iconRef.current) {
      anime({
        targets: iconRef.current,
        rotate: [0, -12, 12, 0],
        duration: 400,
        easing: "easeInOutSine",
      });
    }
  };

  const handleMouseLeave = () => {
    if (containerRef.current) {
      anime({
        targets: containerRef.current,
        scale: 1,
        duration: 300,
        easing: "easeOutQuad",
      });
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    onSearch?.(val);

    // Typing particle ripple animation
    if (iconRef.current) {
      anime({
        targets: iconRef.current,
        scale: [1, 1.25, 1],
        color: ["#94A3B8", "#3B82F6", "#94A3B8"],
        duration: 220,
        easing: "easeOutQuad",
      });
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`max-w-lg mx-auto w-full ${className}`}
    >
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <svg
            ref={iconRef}
            className="w-4 h-4 text-slate-500 transition-colors group-focus-within:text-blue-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </InputGroupAddon>

        <InputGroupInput
          ref={inputRef}
          aria-label="Buscar módulos no catálogo"
          placeholder={placeholder}
          type="search"
          onChange={handleInput}
        />

        <InputGroupAddon align="inline-end">
          <Kbd>/</Kbd>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

export default ParticleSearch;
