
"use client"

import { CtaButton } from "@/components/cta-button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Lock, X, Zap } from "lucide-react"

const forYou = [
  "Quer criar renda recorrente sem depender de algoritmo",
  "Quer parar de recomeçar do zero todo mês",
  "Quer construir um ativo digital próprio",
]

const notForYou = [
  "Quer dinheiro rápido sem nenhum esforço",
  "Não quer estruturar o próprio sistema",
  "Prefere continuar dependendo de sorte",
]

export function WarningSection() {
  const handleCtaClick = () => {
    window.location.href = "https://pay.cakto.com.br/f8qx3v6_935738"
  }

  return (
    <section className="container mx-auto max-w-3xl px-4 md:px-6">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 scale-90 md:scale-100 transition-transform origin-center">
        <Card className="border-primary/50 bg-primary/10">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-primary">
              ISSO É PRA VOCÊ SE:
            </h3>
            <ul className="mt-4 space-y-2 text-lg text-foreground">
              {forYou.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-destructive/50 bg-destructive/10">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-destructive-foreground">
              ISSO NÃO É PRA VOCÊ SE:
            </h3>
            <ul className="mt-4 space-y-2 text-lg text-muted-foreground">
              {notForYou.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <X className="mt-1 h-5 w-5 flex-shrink-0 text-destructive" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <p className="text-2xl font-bold">Ou você controla o seu ecossistema</p>
        <p className="mt-2 text-2xl font-bold">
          Ou continua refém do algoritmo.
        </p>

        <div className="mt-8">
          <CtaButton
            onClick={handleCtaClick}
            className="w-full max-w-lg transform p-8 text-base"
          >
            👉 CRIAR MINHA RENDA RECORRENTE AGORA
          </CtaButton>
        </div>
        <div className="mt-6 space-y-2 text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            <Zap className="h-4 w-4 text-primary" />
            Acesso imediato após a confirmação do pagamento
          </p>
          <p className="flex items-center justify-center gap-2">
            <Lock className="h-4 w-4 text-primary" />
            7 dias de garantia incondicional ou seu dinheiro de volta
          </p>
        </div>
      </div>
    </section>
  )
}
