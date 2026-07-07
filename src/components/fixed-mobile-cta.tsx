"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function FixedMobileCta() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Aparece após rolar 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleCtaClick = () => {
    const offerSection = document.getElementById("offer")
    if (offerSection) {
      offerSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t border-white/10 bg-primary p-4 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.3)] animate-in slide-in-from-bottom duration-300">
      <Button
        onClick={handleCtaClick}
        className="h-14 w-full rounded-xl bg-white text-base font-black text-primary hover:bg-white/90 active:scale-95 transition-all shadow-lg"
      >
        QUERO ACESSAR AGORA
      </Button>
    </div>
  )
}
