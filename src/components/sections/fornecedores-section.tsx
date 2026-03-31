"use client"

import { CtaButton } from "@/components/cta-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CheckCircle2,
  DollarSign,
  Gamepad2,
  Server,
  ShoppingCart,
  Tv,
} from "lucide-react"

const products = [
  {
    name: "Discord Nitro, impulsos e contas premium",
    icon: Server,
  },
  {
    name: "Produtos Steam (keys e contas com alta procura)",
    icon: Gamepad2,
  },
  { name: "Streaming e assinaturas compartilhadas", icon: Tv },
  { name: "V-Bucks, Robux e Valorant Points", icon: DollarSign },
  {
    name: "Contas de jogos (Fortnite, Roblox, Clash Royale)",
    icon: ShoppingCart,
  },
]

export function FornecedoresSection() {
  const handleCtaClick = () => {
    const offerSection = document.getElementById("offer")
    offerSection?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    })
  }

  return (
    <section className="container mx-auto max-w-4xl px-4 md:px-6">
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tighter md:text-5xl">
            O que você vai vender (sem precisar inventar nada)
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Você não precisa criar produto.
            <br />
            <span className="font-semibold text-foreground">
              Você vai usar o que já vende todos os dias.
            </span>
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-lg">
            Dentro da estrutura, você terá acesso a{" "}
            <span className="font-bold text-primary">
              fornecedores já testados
            </span>{" "}
            com produtos que têm{" "}
            <span className="font-bold text-primary">alta demanda</span> na GGMAX e
            na internet.
          </p>
          <p className="mt-2 text-xl font-bold">
            Ou seja: você não precisa descobrir o que vender.
            <br />
            Você entra direto no que já funciona.
          </p>
        </div>

        <Card className="border-border bg-card shadow-sm">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold md:text-3xl">
              Produtos com venda ativa todos os dias
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 gap-4 text-left text-lg md:grid-cols-2">
              {products.map(product => (
                <li key={product.name} className="flex items-center gap-3">
                  <product.icon className="h-6 w-6 flex-shrink-0 text-primary" />
                  <span>{product.name}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-center text-lg font-semibold">
              <p>👉 Esses produtos já são comprados todos os dias</p>
              <p>👉 Você só precisa estruturar o ambiente certo</p>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 gap-8">
          <div className="rounded-xl border bg-card p-8 text-card-foreground shadow-sm">
            <h3 className="text-center text-2xl font-bold">
              Você não está começando do zero
            </h3>
            <p className="mt-4 text-center text-lg text-muted-foreground">
              Esses produtos já estão entre os{" "}
              <span className="font-semibold text-foreground">
                mais vendidos
              </span>{" "}
              da GGMAX.
            </p>
            <p className="mt-2 text-center text-lg text-muted-foreground">
              Isso significa:
            </p>
            <ul className="mx-auto mt-2 max-w-md space-y-1 text-center text-lg md:text-left">
              <li className="flex items-center justify-center gap-2 md:justify-start">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Existe demanda real
              </li>
              <li className="flex items-center justify-center gap-2 md:justify-start">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Pessoas já compram diariamente
              </li>
              <li className="flex items-center justify-center gap-2 md:justify-start">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Você não precisa validar nada
              </li>
            </ul>
            <p className="mt-4 text-center text-lg font-semibold">
              👉 Você só entra com a estrutura e captura essa demanda
            </p>
          </div>
          <div className="rounded-xl border bg-card p-8 text-card-foreground shadow-sm">
            <h3 className="text-center text-2xl font-bold">
              Como isso se conecta com o método
            </h3>
            <div className="mt-4 space-y-2 text-center text-lg font-semibold">
              <p>Você monta a estrutura →</p>
              <p>Usa fornecedores já validados →</p>
              <p>Atrai membros →</p>
              <p>E vende dentro da própria comunidade</p>
            </div>
            <p className="mt-4 text-center text-lg text-muted-foreground">
              Sem depender de post.
              <br />
              Sem depender de algoritmo.
            </p>
          </div>
        </div>

        <div className="rounded-xl border-2 border-primary/30 bg-primary/10 p-8 text-center">
          <h3 className="text-2xl font-bold text-primary">
            “Mas eu não sei o que vender…”
          </h3>
          <p className="mt-4 text-xl text-foreground">
            Esse é exatamente o ponto.{" "}
            <span className="font-bold">Você não precisa saber.</span>
            <br />
            Você vai trabalhar com produtos que já movimentam dinheiro todos os
            dias.
          </p>
          <p className="mt-4 text-xl font-bold">
            A maioria tenta criar algo do zero e trava.
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Aqui, você entra direto no que já vende.
            </span>
          </p>
        </div>

        <div className="text-center">
          <CtaButton
            onClick={handleCtaClick}
            className="w-full max-w-2xl p-8 text-xl"
          >
            👉 QUERO A ESTRUTURA + OS PRODUTOS QUE VENDEM
          </CtaButton>
        </div>
      </div>
    </section>
  )
}
