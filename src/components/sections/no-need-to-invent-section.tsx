"use client"

import { CtaButton } from "@/components/cta-button"

export function NoNeedToInventSection() {
  const handleCtaClick = () => {
    const offerSection = document.getElementById("offer")
    offerSection?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    })
  }

  return (
    <section className="container mx-auto max-w-4xl px-4 text-center md:px-6">
      <h2 className="text-3xl font-extrabold tracking-tighter md:text-5xl text-primary mb-8 uppercase">
        Você não precisa inventar nada
      </h2>
      <div className="space-y-8 text-xl md:text-2xl">
        <p className="text-muted-foreground">
          O maior erro de quem começa é tentar criar algo do zero.
        </p>
        <div className="p-8 bg-primary/5 border-2 border-primary/20 rounded-2xl">
          <p className="font-bold text-foreground">
            Enquanto isso, milhares de pessoas compram Nitro, V-Bucks, Robux, contas de jogos e produtos Steam todos os dias.
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-2xl font-extrabold">Você não precisa descobrir o que vender.</p>
          <p className="text-3xl font-black text-primary">
            Você só precisa entrar onde a demanda já existe.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <CtaButton
            onClick={handleCtaClick}
            className="h-auto w-full max-w-2xl whitespace-normal p-6 text-base md:p-8 md:text-xl leading-tight"
          >
            👉 QUERO O SISTEMA + OS PRODUTOS QUE VENDEM
          </CtaButton>
        </div>
      </div>
    </section>
  )
}
