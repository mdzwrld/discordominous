import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Mescla os parâmetros da URL atual com uma URL de destino.
 */
export function appendCurrentParams(url: string): string {
  if (typeof window === "undefined") return url
  const search = window.location.search
  if (!search) return url

  try {
    const urlObj = new URL(url)
    const currentParams = new URLSearchParams(search)
    
    currentParams.forEach((value, key) => {
      urlObj.searchParams.set(key, value)
    })

    return urlObj.toString()
  } catch (e) {
    // Caso a URL base seja relativa ou inválida, faz o append simples
    const separator = url.includes('?') ? '&' : '?'
    const cleanSearch = search.startsWith('?') ? search.substring(1) : search
    return `${url}${separator}${cleanSearch}`
  }
}
