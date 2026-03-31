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
        <div className="mb-8">
            <p className="text-xl font-bold">Isso NÃO é conteúdo solto.</p>
            <p className="text-2xl font-extrabold text-primary">É uma estrutura pronta pra aplicar.</p>
        </div>

        <h2 className="text-4xl font-extrabold tracking-tighter md:text-5xl">
          O QUE VOCÊ VAI TER ACESSO
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 text-center md:grid-cols-4">
          <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
            <p className="text-4xl font-extrabold text-primary">59.89%</p>
            <p className="mt-1 text-sm font-semibold text-muted-foreground">
              Margem de lucro
            </p>
          </div>
          <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
            <p className="text-4xl font-extrabold text-primary">2.10</p>
            <p className="mt-1 text-sm font-semibold text-muted-foreground">
              ROAS médio
            </p>
          </div>
          <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
            <p className="text-4xl font-extrabold text-primary">28 dias</p>
            <p className="mt-1 text-sm font-semibold text-muted-foreground">
              Sem prejuízo
            </p>
          </div>
          <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
            <p className="text-4xl font-extrabold text-primary">Única</p>
            <p className="mt-1 text-sm font-semibold text-muted-foreground">
              estrutura
            </p>
          </div>
        </div>

        <div className="mt-8">
          <CtaButton
            onClick={handleCtaClick}
            size="lg"
            className="w-full max-w-md text-lg"
          >
            ACESSAR ESTRUTURA AGORA
          </CtaButton>
        </div>
      </div>
    </section>
  )
}
