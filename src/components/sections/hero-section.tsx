"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, CheckCircle2 } from "lucide-react"

const bullets = [
  "Mesmo começando com poucos membros",
  "Sem precisar postar todos os dias",
  "Sem depender de tráfego pago",
]

export function HeroSection() {
  const handleScrollDown = () => {
    const nextSection = document.getElementById("emotional-intro")
    nextSection?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <section className="relative w-full overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
      <div className="absolute top-0 left-0 -z-10 h-full w-full bg-grid-white/[0.05]"></div>
      <div className="absolute inset-0 -z-20 bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="container mx-auto max-w-5xl px-4 text-center md:px-6">
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Como eu gerei <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">R$150.221,22 em 3 meses</span> usando apenas o Discord
        </h1>
        
        <div className="mt-8 space-y-4">
          <p className="mx-auto max-w-3xl text-xl font-medium text-foreground md:text-2xl">
            Sem aparecer. Sem depender de algoritmo. Sem precisar viralizar.
          </p>
          <div className="mx-auto max-w-2xl border-y border-primary/20 py-4">
            <p className="text-lg italic text-muted-foreground">
              Enquanto milhões de jogadores usam o Discord apenas para conversar... <br/>
              <span className="font-bold text-foreground">Alguns estão usando para construir uma renda recorrente.</span>
            </p>
          </div>
          <p className="text-lg font-semibold text-primary">
            Você já passa horas online. A pergunta é: Por que essas horas ainda não estão trabalhando para você?
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-4 text-left text-lg text-muted-foreground sm:max-w-none sm:grid-cols-3">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-center justify-center gap-2 sm:justify-start">
              <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleScrollDown}
          className="animate-bounce"
        >
          <ChevronDown className="h-8 w-8" />
        </Button>
      </div>
    </section>
  )
}
