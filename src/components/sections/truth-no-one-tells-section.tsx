"use client"

import { CtaButton } from "@/components/cta-button"

export function TruthNoOneTellsSection() {
  const handleCtaClick = () => {
    const offerSection = document.getElementById("offer")
    offerSection?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    })
  }

  return (
    <section className="container mx-auto max-w-4xl px-4 text-center md:px-6">
      <h2 className="text-3xl font-extrabold tracking-tighter md:text-5xl text-primary mb-12 uppercase">
        A verdade que ninguém fala.
      </h2>
      <div className="space-y-6 text-xl md:text-2xl">
        <div className="space-y-2 opacity-70">
          <p>A maioria nunca vai virar streamer.</p>
          <p>A maioria nunca vai viver de campeonato.</p>
          <p>A maioria nunca vai viralizar.</p>
        </div>
        
        <p className="font-bold text-2xl md:text-3xl text-foreground mt-12">
          Mas isso não significa que você não pode ganhar dinheiro com games.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="p-8 rounded-xl border bg-card/50 shadow-sm transition-all hover:border-primary/40">
            <p className="text-muted-foreground mb-2">O dinheiro não está apenas em jogar.</p>
            <p className="font-bold text-primary text-2xl">Está em criar valor.</p>
          </div>
          <div className="p-8 rounded-xl border bg-card/50 shadow-sm transition-all hover:border-primary/40">
            <p className="text-muted-foreground mb-2">O dinheiro não está no algoritmo.</p>
            <p className="font-bold text-primary text-2xl">Está em construir algo que as pessoas querem.</p>
          </div>
        </div>

        <div className="mt-12 p-10 bg-primary/10 rounded-3xl border-2 border-primary/20">
          <p className="text-3xl md:text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent uppercase tracking-tighter">
            O dinheiro está em ter um sistema que continua funcionando mesmo quando você não está online.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <CtaButton
            onClick={handleCtaClick}
            className="h-auto w-full max-w-2xl whitespace-normal p-6 text-base md:p-8 md:text-xl leading-tight"
          >
            👉 QUERO TER ESSE SISTEMA TRABALHANDO PARA MIM
          </CtaButton>
        </div>
      </div>
    </section>
  )
}
