"use client"

import React, { ReactNode, useEffect, useState } from "react"
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompleteStatus,
} from "@/components/reui/autocomplete"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export interface Developer {
  id: string
  name: string
  role: string
  location: string
  skills: string[]
  experience: number
  rating: number
  avatar: string
}

export function Pattern() {
  const [searchValue, setSearchValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [searchResults, setSearchResults] = useState<Developer[]>([])
  const [error, setError] = useState<string | null>(null)

  const contains = (item: string, query: string) =>
    item.toLowerCase().includes(query.toLowerCase())

  useEffect(() => {
    if (!searchValue) {
      setSearchResults([])
      setIsLoading(false)
      return undefined
    }

    setIsLoading(true)
    setError(null)

    let ignore = false

    async function fetchDevelopers() {
      try {
        const results = await searchDevelopers(searchValue, contains)
        if (!ignore) {
          setSearchResults(results)
        }
      } catch {
        if (!ignore) {
          setError("Falha ao buscar membros. Tente novamente.")
          setSearchResults([])
        }
      } finally {
        if (!ignore) {
          setIsLoading(false)
        }
      }
    }

    const timeoutId = setTimeout(fetchDevelopers, 300)

    return () => {
      clearTimeout(timeoutId)
      ignore = true
    }
  }, [searchValue])

  let status: ReactNode = ""

  if (isLoading) {
    status = (
      <div className="flex items-center gap-2 text-blue-400">
        <span className="w-3.5 h-3.5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
        Buscando estudantes e itens...
      </div>
    )
  } else if (error) {
    status = error
  } else if (searchResults.length === 0 && searchValue) {
    status = `Nenhum resultado para "${searchValue}"`
  } else if (searchResults.length > 0) {
    status = `${searchResults.length} participante${searchResults.length === 1 ? "" : "s"} encontrado${searchResults.length === 1 ? "" : "s"}`
  } else if (!searchValue) {
    status = "Comece a digitar para buscar na comunidade..."
  }

  const shouldRenderPopup = searchValue !== ""

  return (
    <div className="w-full max-w-lg mx-auto">
      <Autocomplete
        items={searchResults}
        value={searchValue}
        onValueChange={setSearchValue}
        itemToStringValue={(item: unknown) => (item as Developer).name}
        filter={null}
      >
        <AutocompleteInput
          placeholder="Ex: Lucas Mendes, React, ThinkPad, Cálculo..."
          showTrigger
          showClear
        />
        {shouldRenderPopup && (
          <AutocompleteContent>
            <AutocompleteStatus>{status}</AutocompleteStatus>
            <AutocompleteList>
              {(developer: Developer) => (
                <AutocompleteItem
                  key={developer.id}
                  value={developer}
                  className="rounded-xl"
                >
                  <div className="flex items-center gap-3 truncate">
                    <Avatar className="size-9">
                      <AvatarImage
                        src={developer.avatar}
                        alt={developer.name}
                      />
                      <AvatarFallback>
                        {developer.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <div className="truncate font-medium text-white">
                        {developer.name}
                      </div>
                      <div className="text-slate-400 truncate text-[11px]">
                        {developer.role} • {developer.location}
                      </div>
                    </div>
                  </div>
                </AutocompleteItem>
              )}
            </AutocompleteList>
          </AutocompleteContent>
        )}
      </Autocomplete>
    </div>
  )
}

async function searchDevelopers(
  query: string,
  filter: (item: string, query: string) => boolean
): Promise<Developer[]> {
  await new Promise((resolve) => {
    setTimeout(resolve, Math.random() * 300 + 100)
  })

  return topDevelopers.filter(
    (developer) =>
      filter(developer.name, query) ||
      filter(developer.role, query) ||
      filter(developer.location, query) ||
      developer.skills.some((skill) => filter(skill, query))
  )
}

const topDevelopers: Developer[] = [
  {
    id: "1",
    name: "Lucas Mendes",
    role: "ThinkPad X280 Core i5 • 3º Ano",
    location: "Bloco B • Armário 42",
    skills: ["ThinkPad", "Notebook", "Linux", "SSD", "8GB"],
    experience: 3,
    rating: 4.9,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
  },
  {
    id: "2",
    name: "Beatriz Costa",
    role: "Trilogia Clean Code & Algoritmos",
    location: "Biblioteca Central",
    skills: ["Livros", "Clean Code", "Tanenbaum", "Algoritmos"],
    experience: 2,
    rating: 5.0,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80",
  },
  {
    id: "3",
    name: "Guilherme Rocha",
    role: "Teclado Mecânico Akko 3068B",
    location: "Lab de Robótica",
    skills: ["Teclado", "Akko", "RGB", "Jelly Pink", "Periféricos"],
    experience: 3,
    rating: 4.8,
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&auto=format&fit=crop&q=80",
  },
  {
    id: "4",
    name: "Rafael Oliveira",
    role: "Mentoria React & Front-end Moderno",
    location: "Lab 03 / Discord",
    skills: ["React", "JavaScript", "Tailwind CSS", "Vercel", "Mentoria"],
    experience: 4,
    rating: 5.0,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
  },
  {
    id: "5",
    name: "Camila Nogueira",
    role: "UI/UX Design System no Figma",
    location: "Envio .FIG Online",
    skills: ["Figma", "UI/UX", "Design System", "Mobile", "TCC"],
    experience: 3,
    rating: 4.9,
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=120&auto=format&fit=crop&q=80",
  },
  {
    id: "6",
    name: "Matheus Lima",
    role: "Calculadora Científica Casio FX-991LAX",
    location: "Cantina • Bloco A",
    skills: ["Calculadora", "Casio", "Cálculo", "Engenharia", "Solar"],
    experience: 2,
    rating: 4.8,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
  },
]
