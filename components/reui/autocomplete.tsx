"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface AutocompleteContextType<T = unknown> {
  value: string
  onValueChange: (val: string) => void
  items: T[]
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const AutocompleteContext = React.createContext<AutocompleteContextType | null>(null)

export interface AutocompleteProps<T = unknown> {
  value: string
  onValueChange: (value: string) => void
  items: T[]
  itemToStringValue?: (item: unknown) => string
  filter?: ((item: unknown, query: string) => boolean) | null
  children: React.ReactNode
  className?: string
}

export function Autocomplete<T = unknown>({
  value,
  onValueChange,
  items,
  children,
  className = "",
}: AutocompleteProps<T>) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <AutocompleteContext.Provider
      value={{
        value,
        onValueChange,
        items,
        isOpen,
        setIsOpen,
      }}
    >
      <div className={cn("relative w-full", className)}>
        {children}
      </div>
    </AutocompleteContext.Provider>
  )
}

export interface AutocompleteInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  showTrigger?: boolean
  showClear?: boolean
}

export const AutocompleteInput = React.forwardRef<
  HTMLInputElement,
  AutocompleteInputProps
>(({ className, showTrigger, showClear, placeholder, ...props }, ref) => {
  const ctx = React.useContext(AutocompleteContext)
  if (!ctx) throw new Error("AutocompleteInput must be used within Autocomplete")

  return (
    <div className="relative flex items-center w-full rounded-full bg-[#080A12]/95 border border-white/10 hover:border-blue-500/50 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-500/25 transition-all shadow-inner overflow-hidden">
      <input
        ref={ref}
        type="search"
        value={ctx.value}
        onChange={(e) => ctx.onValueChange(e.target.value)}
        onFocus={() => ctx.setIsOpen(true)}
        placeholder={placeholder}
        className={cn(
          "w-full h-12 bg-transparent text-xs font-mono text-white placeholder:text-slate-500 focus:outline-none pl-5 pr-10 py-2",
          className
        )}
        {...props}
      />
      {showClear && ctx.value && (
        <button
          type="button"
          onClick={() => ctx.onValueChange("")}
          className="absolute right-4 text-slate-400 hover:text-white text-xs"
        >
          ✕
        </button>
      )}
    </div>
  )
})
AutocompleteInput.displayName = "AutocompleteInput"

export interface AutocompleteContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function AutocompleteContent({
  className,
  children,
  ...props
}: AutocompleteContentProps) {
  return (
    <div
      className={cn(
        "absolute top-full left-0 right-0 mt-2 z-50 rounded-2xl bg-[#090A12]/95 backdrop-blur-2xl border border-white/10 shadow-2xl p-2 max-h-80 overflow-y-auto font-mono text-xs animate-in fade-in-0 zoom-in-95",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export interface AutocompleteStatusProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function AutocompleteStatus({
  className,
  children,
  ...props
}: AutocompleteStatusProps) {
  return (
    <div
      className={cn(
        "px-3 py-2 text-[11px] text-slate-400 border-b border-white/5 font-mono",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export interface AutocompleteListProps<T = unknown> {
  children: (item: T) => React.ReactNode
  className?: string
}

export function AutocompleteList<T = unknown>({
  children,
  className = "",
}: AutocompleteListProps<T>) {
  const ctx = React.useContext(AutocompleteContext)
  if (!ctx) throw new Error("AutocompleteList must be used within Autocomplete")

  return (
    <div className={cn("space-y-1 pt-1", className)}>
      {ctx.items.map((item, idx) => (
        <React.Fragment key={idx}>{children(item as T)}</React.Fragment>
      ))}
    </div>
  )
}

export interface AutocompleteItemProps<T = unknown>
  extends React.HTMLAttributes<HTMLDivElement> {
  value: T
  children?: React.ReactNode
}

export function AutocompleteItem<T = unknown>({
  className,
  value,
  children,
  ...props
}: AutocompleteItemProps<T>) {
  const ctx = React.useContext(AutocompleteContext)

  return (
    <div
      onClick={() => {
        if (typeof value === "string") {
          ctx?.onValueChange(value)
        } else if (value && typeof value === "object" && "name" in value) {
          ctx?.onValueChange((value as { name: string }).name)
        }
        ctx?.setIsOpen(false)
      }}
      className={cn(
        "p-2.5 rounded-xl hover:bg-white/10 cursor-pointer transition-colors text-white text-xs",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
