"use client"

import { CtaButton } from "@/components/cta-button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const includedItems = [
  "Estrutura exata do servidor",
  "Organização validada",
  "Modelo de monetização recorrente",
  "Scripts internos de posicionamento",
  "Estratégia de crescimento",
  "Plano de execução direto ao ponto",
]

export function OfferSection() {
  const handleCtaClick = () => {
    // In a real application, this would redirect to a checkout page.
    alert("Redirecionando para o checkout!")
  }

  return (
    <section id="offer" className="w-full scroll-mt-20">
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        <h3 className="mb-4 text-center text-sm font-bold uppercase tracking-widest text-primary">
          ESTRATÉGIA LIMITADA
        </h3>
        <Card className="relative overflow-hidden border-2 border-primary bg-card shadow-2xl shadow-primary/20">
          <div className="absolute top-0 left-0 -z-10 h-full w-full bg-grid-primary/[0.07]"></div>

          <CardContent className="p-8 text-center md:p-12">
            <h3 className="text-3xl font-extrabold text-primary md:text-4xl">
              Acesse o Escala Sem Esforço
            </h3>

            <div className="my-8 text-left">
              <ul className="grid grid-cols-1 gap-x-8 gap-y-4 text-lg sm:grid-cols-2">
                {includedItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="my-6">
              <span className="text-7xl font-extrabold md:text-8xl">
                R$ 67,00
              </span>
            </div>
            <p className="text-lg font-semibold text-muted-foreground">
              Pagamento único ou{" "}
              <span className="text-foreground">12x de R$ 6,93</span>
            </p>

            <div className="mt-8">
              <CtaButton
                onClick={handleCtaClick}
                className="w-full max-w-lg transform p-8 text-xl"
              >
                QUERO CONSTRUIR MINHA MÁQUINA AGORA
              </CtaButton>
            </div>
            <p className="mt-6 text-muted-foreground">
              Preço ridiculamente baixo pelo nível de estrutura entregue.
              <br />
              <span className="font-semibold text-foreground">
                E não vai ficar assim para sempre.
              </span>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
