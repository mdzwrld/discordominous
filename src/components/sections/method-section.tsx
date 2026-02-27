import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Pyramid, Star, Users, TrendingUp } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Pillar {
  icon: LucideIcon
  title: string
  description: string
}

const pillars: Pillar[] = [
  {
    icon: Pyramid,
    title: "Pilar 1",
    description: "Estrutura estratégica que gera autoridade",
  },
  {
    icon: Star,
    title: "Pilar 2",
    description: "Oferta interna impossível de ignorar",
  },
  {
    icon: Users,
    title: "Pilar 3",
    description: "Sistema de retenção que mantém membros ativos",
  },
  {
    icon: TrendingUp,
    title: "Pilar 4",
    description: "Crescimento previsível sem depender de algoritmo",
  },
]

export function MethodSection() {
  return (
    <section className="container mx-auto max-w-6xl px-4 md:px-6">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold tracking-tighter md:text-5xl">
          O MÉTODO
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Eu transformei o Discord em uma máquina de recorrência com 4 pilares:
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar) => (
          <Card key={pillar.title} className="text-center">
            <CardHeader>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                <pillar.icon className="h-8 w-8 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg font-bold">{pillar.description}</CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
          <p className="text-xl font-semibold">
              Não é fórmula mágica. <span className="text-primary">É engenharia de ambiente.</span>
          </p>
      </div>
    </section>
  )
}
