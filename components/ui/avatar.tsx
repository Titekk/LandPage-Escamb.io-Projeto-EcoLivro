"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode
}

export function Avatar({ className, children, ...props }: AvatarProps) {
  return (
    <span
      className={cn(
        "relative flex size-9 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/5",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export interface AvatarImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {}

export function AvatarImage({ className, alt, ...props }: AvatarImageProps) {
  return (
    <img
      className={cn("aspect-square size-full object-cover", className)}
      alt={alt}
      loading="lazy"
      {...props}
    />
  )
}

export interface AvatarFallbackProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode
}

export function AvatarFallback({
  className,
  children,
  ...props
}: AvatarFallbackProps) {
  return (
    <span
      className={cn(
        "flex size-full items-center justify-center rounded-full bg-blue-500/10 font-mono text-xs font-bold text-blue-400 select-none",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
