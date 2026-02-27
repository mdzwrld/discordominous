"use client"

import { CtaButton } from "@/components/cta-button"
import Image from "next/image"

export function HeroSection() {
  const handleCtaClick = () => {
    const offerTab = document.getElementById("offer")
    offerTab?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    })
    offerTab?.click()
  }

  return (
    <section className="relative w-full overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
      <div className="absolute top-0 left-0 -z-10 h-full w-full bg-grid-white/[0.05]"></div>
      <div className="absolute inset-0 -z-20 bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      
      <div className="container mx-auto max-w-5xl px-4 text-center md:px-6">
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Como eu fiz <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">R$ 150.221,22 em 4 meses</span> usando APENAS O DISCORD.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
          Sem aparecer. Sem depender de algoritmo. Sem implorar por engajamento.
        </p>

        <div className="mt-10">
            <Image
                src="https://i.imgur.com/EmUlo3B.png"
                alt="Interface do Discord mostrando mensagens e interações de usuários"
                width={1000}
                height={333}
                className="mx-auto rounded-lg border border-border/20 shadow-xl"
                data-ai-hint="discord interface"
            />
        </div>

        <div className="mt-10">
          <CtaButton
            onClick={handleCtaClick}
            className="w-full max-w-md p-8 text-xl"
          >
            QUERO CONSTRUIR MINHA MÁQUINA
          </CtaButton>
        </div>
        <p className="mt-8 text-lg text-muted-foreground">
          Enquanto a maioria tenta viralizar… <br />
          <span className="font-semibold text-foreground">Eu construí uma máquina privada de dinheiro. E é exatamente isso que ninguém quer que você entenda.</span>
        </p>
      </div>
    </section>
  )
}
