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

        <p className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground">
          Sem enrolação. Sem teoria desnecessária.
        </p>

        <div className="mx-auto mt-12 max-w-2xl space-y-6 text-lg md:text-xl">
          <h3 className="text-2xl font-bold uppercase tracking-wider text-foreground">
            COM A ESTRUTURA CERTA NO DISCORD
          </h3>
          <p className="text-muted-foreground">
            você cria renda recorrente previsível sem depender de algoritmo,
            viral ou sorte.
          </p>
          <div className="space-y-2 font-semibold text-foreground">
            <p>Os membros entram.</p>
            <p>A comunidade engaja.</p>
            <p>A receita se mantém.</p>
          </div>
          <div className="space-y-2 text-muted-foreground">
            <p>Sem começar do zero todo mês.</p>
            <p>Sem instabilidade.</p>
            <p>Sem caos.</p>
          </div>
          <p className="text-xl font-bold text-foreground">
            Você sai da improvisação.
          </p>
          <p className="text-2xl font-extrabold text-primary">
            E assume o controle.
          </p>
        </div>
      </div>
    </section>
  )
}
