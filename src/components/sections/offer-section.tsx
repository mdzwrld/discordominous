
"use client"

import { CtaButton } from "@/components/cta-button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { appendCurrentParams } from "@/lib/utils"

const includedItems = [
  "Sistema exato da máquina de vendas",
  "Organização validada para conversão",
  "Modelo de monetização recorrente",
  "Scripts internos de posicionamento",
  "Estratégia de crescimento acelerado",
  "Plano de execução direto ao ponto",
]

export function OfferSection() {
  const handleCtaClick = () => {
    const checkoutUrl = "https://compraonlineseguura.com/c/b0ae0417fa"
    window.location.href = appendCurrentParams(checkoutUrl)
  }

  return (
    <section id="offer" className="w-full scroll-mt-20 px-4 md:px-0">
      <div className="container mx-auto max-w-3xl">
        <h3 className="mb-4 text-center text-sm font-bold uppercase tracking-widest text-primary">
          OPERAÇÃO LIMITADA
        </h3>
        <Card className="relative overflow-hidden border-2 border-primary bg-card shadow-2xl shadow-primary/20 scale-90 md:scale-100 transition-transform duration-300">
          <div className="absolute top-0 left-0 -z-10 h-full w-full bg-grid-primary/[0.07]"></div>

          <CardContent className="p-6 text-center md:p-12">
            <h3 className="text-2xl font-extrabold text-primary sm:text-3xl md:text-4xl">
              Acesse o Escala Sem Esforço
            </h3>

            <div className="my-8">
              <ul className="grid grid-cols-1 gap-x-8 gap-y-3 text-left text-base sm:grid-cols-2 md:text-lg">
                {includedItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 space-y-6">
                <div className="flex flex-col items-center justify-center gap-3 text-base font-bold text-primary md:text-lg">
                  <div className="flex items-center gap-3 text-center">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    <span>+ FORNECEDORES VALIDADOS</span>
                  </div>
                  <div className="flex items-center gap-3 text-center">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    <span>+ COMO VENDER NA GGMAX</span>
                  </div>
                </div>

                <div className="rounded-2xl bg-accent/5 border-2 border-dashed border-accent/30 p-4 md:p-6 space-y-4">
                  <div className="flex items-center justify-center gap-2 text-accent">
                    <span className="text-xl">🔥</span>
                    <p className="text-sm font-black uppercase tracking-widest">Bônus de Ação Rápida</p>
                    <span className="text-xl">🔥</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-base md:text-xl font-black uppercase tracking-tighter text-foreground">
                      COMO FAZER AS PRIMEIRAS VENDAS EM 7 DIAS
                    </p>
                    <p className="text-base md:text-xl font-black uppercase tracking-tighter text-foreground">
                      COMO ESCALAR COM META ADS
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-6 text-center text-sm text-muted-foreground md:text-base">
                <p>Isso não é caro porque depende de execução.</p>
                <p>Eu preferi deixar acessível para quem realmente vai aplicar</p>
                <p>— e não só consumir mais um conteúdo.</p>
            </div>

            <div className="my-6">
              <span className="text-5xl font-extrabold sm:text-6xl md:text-8xl">
                R$ 27,90
              </span>
            </div>
            <p className="text-lg font-semibold text-muted-foreground">
              Pagamento único ou{" "}
              <span className="text-foreground">12x de R$ 2,89</span>
            </p>

            <div className="mt-8">
              <CtaButton
                onClick={handleCtaClick}
                className="w-full max-w-lg transform p-6 text-base md:p-8"
              >
                CRIAR MINHA RENDA RECORRENTE AGORA
              </CtaButton>
            </div>
            <p className="mt-6 text-sm text-muted-foreground md:text-base">
              Preço ridiculamente baixo pelo nível de sistema entregue.
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
