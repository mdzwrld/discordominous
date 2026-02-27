"use client"

import { useState, useEffect } from "react"
import { CtaButton } from "@/components/cta-button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    // Set initial state
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleCtaClick = () => {
    const offerSection = document.getElementById("offer")
    offerSection?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    })
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "border-b border-border/50 bg-background/80 backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <a href="#" className="text-xl font-extrabold text-foreground transition-colors hover:text-primary">
          DISCORD DOMINUS
        </a>
        <CtaButton
          onClick={handleCtaClick}
          className="hidden md:flex"
          size="sm"
        >
          ACESSAR O MÉTODO
        </CtaButton>
        <CtaButton
            onClick={handleCtaClick}
            className="md:hidden"
            size="sm"
        >
            ACESSAR
        </CtaButton>
      </div>
    </header>
  )
}
