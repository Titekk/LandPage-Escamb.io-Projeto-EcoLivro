"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type CharacterProps = {
  char: string;
  index: number;
  centerIndex: number;
  scrollYProgress: MotionValue<number>;
  className?: string;
};

export const CharacterV1 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
  className,
}: CharacterProps) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 50, 0]
  );
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 50, 0]
  );

  return (
    <motion.span
      className={cn("inline-block text-cyan-400 font-bold", isSpace && "w-4", className)}
      style={{
        x,
        rotateX,
      }}
    >
      {char}
    </motion.span>
  );
};

export const CharacterV2 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
  className,
}: CharacterProps) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 50, 0]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);

  const y = useTransform(
    scrollYProgress,
    [0, 0.5],
    [Math.abs(distanceFromCenter) * 50, 0]
  );

  return (
    <motion.img
      src={char}
      alt="icon"
      className={cn("inline-block", isSpace && "w-4", className)}
      style={{
        x,
        scale,
        y,
        transformOrigin: "center",
      }}
    />
  );
};

export const CharacterV3 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
  className,
}: CharacterProps) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 90, 0]
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 50, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.5],
    [-Math.abs(distanceFromCenter) * 20, 0]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);

  return (
    <motion.img
      src={char}
      alt="icon"
      className={cn("inline-block", isSpace && "w-4", className)}
      style={{
        x,
        rotate,
        y,
        scale,
        transformOrigin: "center",
      }}
    />
  );
};

export interface Skiper31Props {
  text?: string;
  items?: string[];
  className?: string;
}

export const Bracket = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 27 78"
      className={cn("h-10 w-auto", className)}
    >
      <path
        fill="currentColor"
        d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
      ></path>
    </svg>
  );
};

export const Skiper31: React.FC<Skiper31Props> = ({
  text = "ESCAMBIO PLATAFORMA",
  items = [
    "/icons/book.png",
    "/icons/laptop.png",
    "/icons/code.png",
    "/icons/design.png",
    "/icons/tutor.png",
  ],
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const targetRef2 = useRef<HTMLDivElement | null>(null);
  const targetRef3 = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: targetRef2,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: targetRef3,
    offset: ["start end", "end start"],
  });

  const characters = text.split("");
  const centerIndex = Math.floor(characters.length / 2);
  const iconCenterIndex = Math.floor(items.length / 2);

  return (
    <div className={cn("w-full bg-[#030407] text-white", className)}>
      <div
        ref={targetRef}
        className="relative box-border flex min-h-[120vh] items-center justify-center gap-[2vw] overflow-hidden p-[2vw]"
      >
        <div
          className="w-full max-w-5xl text-center text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-white"
          style={{
            perspective: "800px",
          }}
        >
          {characters.map((char, index) => (
            <CharacterV1
              key={index}
              char={char}
              index={index}
              centerIndex={centerIndex}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>

      <div
        ref={targetRef2}
        className="relative box-border flex min-h-[120vh] flex-col items-center justify-center gap-[2vw] overflow-hidden p-[2vw]"
      >
        <p className="flex items-center justify-center gap-3 text-xl sm:text-2xl font-medium tracking-tight text-cyan-300">
          <Bracket className="h-10 text-cyan-400" />
          <span>Troque materiais e conhecimentos sem dinheiro real</span>
          <Bracket className="h-10 scale-x-[-1] text-cyan-400" />
        </p>
        <div className="w-full max-w-4xl flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
          {items.map((char, index) => (
            <CharacterV2
              key={index}
              char={char}
              index={index}
              centerIndex={iconCenterIndex}
              scrollYProgress={scrollYProgress2}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/[0.05] border border-white/10 p-3 shadow-lg"
            />
          ))}
        </div>
      </div>

      <div
        ref={targetRef3}
        className="relative box-border flex min-h-[120vh] flex-col items-center justify-center gap-[2vw] overflow-hidden p-[2vw]"
      >
        <p className="flex items-center justify-center gap-3 text-xl sm:text-2xl font-medium tracking-tight text-slate-200">
          <Bracket className="h-10 text-cyan-400" />
          <span>Economia circular e colaboração na comunidade</span>
          <Bracket className="h-10 scale-x-[-1] text-cyan-400" />
        </p>
        <div
          className="w-full max-w-4xl flex items-center justify-center gap-4 sm:gap-6 flex-wrap"
          style={{
            perspective: "800px",
          }}
        >
          {items.map((char, index) => (
            <CharacterV3
              key={index}
              char={char}
              index={index}
              centerIndex={iconCenterIndex}
              scrollYProgress={scrollYProgress3}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/[0.05] border border-white/10 p-3 shadow-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skiper31;
