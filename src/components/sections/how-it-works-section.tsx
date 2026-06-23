"use client"

import { Check } from "lucide-react"
import { CtaButton } from "@/components/cta-button"

const steps = [
  "Você recebe o sistema pronto da sua máquina de vendas",
  "Só adapta para o seu nicho",
  "Os membros entram e seguem um fluxo automático",
  "A venda acontece dentro da sua operação",
  "Você não depende de post nem algoritmo",
]

export function HowItWorksSection() {
  const handleCtaClick = () => {
    const offerSection = document.getElementById("offer")
    offerSection?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    })
  }

  return (
    <section className="container mx-auto max-w-3xl px-4 md:px-6">
      <div className="rounded-xl border bg-card p-8 text-card-foreground shadow-sm">
        <h2 className="text-center text-3xl font-extrabold tracking-tighter md:text-4xl">
          Como isso funciona na prática:
        </h2>
        <ul className="mt-8 space-y-4 text-lg md:text-xl">
          {steps.map((step) => (
            <li key={step} className="flex items-start gap-4">
              <Check className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
              <span>{step}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <CtaButton
            onClick={handleCtaClick}
            className="h-auto w-full whitespace-normal p-6 text-base md:p-8 md:text-xl leading-tight"
          >
            👉 QUERO O SISTEMA PRONTO PARA APLICAR
          </CtaButton>
        </div>
      </div>
    </section>
  )
}
