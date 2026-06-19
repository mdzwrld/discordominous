import { Card } from "@/components/ui/card"

const pillars = [
  {
    number: 1,
    title: "Entrada Estratégica",
    description: "O membro entra e já entende o fluxo (sem confusão)",
  },
  {
    number: 2,
    title: "Caminho de Consumo",
    description: "Cada canal tem função clara no seu sistema (não é bagunça)",
  },
  {
    number: 3,
    title: "Posicionamento da Oferta",
    description: "A oferta aparece no momento certo, de forma natural",
  },
  {
    number: 4,
    title: "Retenção e Recorrência",
    description: "Sua base continua ativa e gerando renda constante",
  },
]

export function MethodSection() {
  return (
    <section className="container mx-auto max-w-4xl px-4 md:px-6">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold tracking-tighter md:text-5xl">
          O SISTEMA
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">Uma máquina de vendas que trabalha com a atenção que você já tem.</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {pillars.map((pillar) => (
          <Card key={pillar.number} className="flex items-center gap-6 p-6 border-primary/20">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
              {pillar.number}
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">{pillar.title}</h3>
              <p className="mt-1 text-lg text-muted-foreground">{pillar.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
