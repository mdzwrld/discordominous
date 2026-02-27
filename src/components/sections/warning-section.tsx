"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TriangleAlert, Zap, Lock } from "lucide-react"
import { CtaButton } from "@/components/cta-button"

const notFor = [
  "Quem quer dinheiro rápido sem construir nada",
  "Quem desiste na primeira dificuldade",
  "Quem prefere reclamar do algoritmo",
]

export function WarningSection() {
  const handleCtaClick = () => {
    const offerSection = document.getElementById("offer")
    offerSection?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    })
  }

  return (
    <section className="container mx-auto max-w-3xl px-4 md:px-6">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold tracking-tighter md:text-5xl">
          <TriangleAlert className="mr-3 inline-block h-10 w-10 text-destructive" />
          ALERTA
        </h2>
      </div>

      <Card className="mt-8 border-destructive/50 bg-destructive/10">
        <CardContent className="p-8">
          <h3 className="text-xl font-bold text-destructive-foreground">Isso NÃO é para:</h3>
          <ul className="mt-4 space-y-2 text-lg text-muted-foreground">
            {notFor.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      
      <div className="mt-8 text-center">
        <p className="text-lg text-muted-foreground md:text-xl">
          Isso é para quem quer <span className="font-bold text-primary">construir um ativo.</span>
        </p>
        <p className="mt-6 text-2xl font-bold">SE VOCÊ ENTENDEU O JOGO</p>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl">
          Você já percebeu que:
          <br />
          Audiência aberta = <span className="text-destructive-foreground">instabilidade</span>
          <br />
          Comunidade fechada = <span className="text-primary">controle</span>
        </p>
        <p className="mt-4 text-xl font-bold">
            E controle = <span className="text-primary">lucro previsível.</span>
        </p>
      </div>

      <div className="mt-12 text-center">
        <p className="mb-6 text-lg font-semibold text-foreground md:text-xl">
          👉 CLICA NO BOTÃO AQUI EMBAIXO E GARANTE SEU ACESSO ANTES QUE O PREÇO MUDE.
        </p>
        <CtaButton
          onClick={handleCtaClick}
          className="w-full max-w-lg transform p-8 text-xl"
        >
          QUERO CONSTRUIR MINHA MÁQUINA NO DISCORD AGORA
        </CtaButton>
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
