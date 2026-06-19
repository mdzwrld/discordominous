"use client"

import { CtaButton } from "@/components/cta-button"

export function IncludedSection() {
  const handleCtaClick = () => {
    const offerSection = document.getElementById("offer")
    offerSection?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    })
  }

  return (
    <section className="container mx-auto max-w-4xl px-4 md:px-6">
      <div className="text-center">
        <div className="mb-12">
            <p className="text-2xl font-bold text-muted-foreground">Isso NÃO é conteúdo solto.</p>
            <p className="text-4xl font-black text-primary tracking-tight">É uma estrutura pronta pra aplicar.</p>
        </div>

        <h2 className="text-4xl font-extrabold tracking-tighter md:text-5xl">
          O QUE VOCÊ VAI TER ACESSO
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 text-center md:grid-cols-4">
          <div className="rounded-2xl border-2 border-primary/20 bg-card p-6 text-card-foreground shadow-xl transition-transform hover:scale-105">
            <p className="text-4xl font-black text-primary">59.89%</p>
            <p className="mt-2 text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Margem de lucro
            </p>
          </div>
          <div className="rounded-2xl border-2 border-primary/20 bg-card p-6 text-card-foreground shadow-xl transition-transform hover:scale-105">
            <p className="text-4xl font-black text-primary">2.10</p>
            <p className="mt-2 text-sm font-bold uppercase tracking-wider text-muted-foreground">
              ROAS médio
            </p>
          </div>
          <div className="rounded-2xl border-2 border-primary/20 bg-card p-6 text-card-foreground shadow-xl transition-transform hover:scale-105">
            <p className="text-4xl font-black text-primary">28 dias</p>
            <p className="mt-2 text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Sem prejuízo
            </p>
          </div>
          <div className="rounded-2xl border-2 border-primary/20 bg-card p-6 text-card-foreground shadow-xl transition-transform hover:scale-105">
            <p className="text-4xl font-black text-primary">Única</p>
            <p className="mt-2 text-sm font-bold uppercase tracking-wider text-muted-foreground">
              estrutura
            </p>
          </div>
        </div>

        <div className="mt-12">
          <CtaButton
            onClick={handleCtaClick}
            size="lg"
            className="w-full max-w-md h-auto p-6 text-xl font-black"
          >
            ACESSAR ESTRUTURA AGORA
          </CtaButton>
        </div>
      </div>
    </section>
  )
}
