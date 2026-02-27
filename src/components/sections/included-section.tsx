"use client"

import { CtaButton } from "@/components/cta-button"
import { CheckCircle2, XCircle } from "lucide-react"

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

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="text-center">
            <h3 className="text-3xl font-bold uppercase tracking-wider text-foreground">
              COM A ESTRUTURA CERTA NO DISCORD
            </h3>
            <p className="mt-4 text-xl text-muted-foreground">
              você cria renda recorrente previsível sem depender de algoritmo,
              viral ou sorte.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-xl border-2 border-destructive/20 bg-destructive/10 p-8 text-left">
              <h4 className="text-2xl font-bold text-destructive-foreground">
                O FIM DA IMPROVISAÇÃO
              </h4>
              <ul className="mt-6 space-y-4 text-lg">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <XCircle className="mt-1 h-6 w-6 flex-shrink-0 text-destructive" />
                  <span>Sem começar do zero todo mês.</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <XCircle className="mt-1 h-6 w-6 flex-shrink-0 text-destructive" />
                  <span>Sem instabilidade.</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <XCircle className="mt-1 h-6 w-6 flex-shrink-0 text-destructive" />
                  <span>Sem caos.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border-2 border-primary/20 bg-primary/10 p-8 text-left">
              <h4 className="text-2xl font-bold text-primary">
                O INÍCIO DO CONTROLE
              </h4>
              <ul className="mt-6 space-y-4 text-lg text-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                  <span>Os membros entram.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                  <span>A comunidade engaja.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                  <span>A receita se mantém.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-2xl font-bold text-foreground">
              Você sai da improvisação.
            </p>
            <p className="bg-gradient-to-r from-primary to-accent bg-clip-text text-4xl font-extrabold text-transparent">
              E assume o controle.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
