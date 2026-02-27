import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const includedItems = [
  "Estrutura exata do servidor",
  "Organização validada",
  "Modelo de monetização recorrente",
  "Scripts internos de posicionamento",
  "Estratégia de crescimento",
  "Plano de execução direto ao ponto",
]

export function IncludedSection() {
  return (
    <section className="container mx-auto max-w-4xl px-4 md:px-6">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold tracking-tighter md:text-5xl">
          O QUE VOCÊ VAI TER ACESSO
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Sem enrolação. Sem teoria desnecessária.
        </p>
      </div>

      <Card className="mt-12 bg-card/50">
        <CardContent className="p-8">
          <ul className="grid grid-cols-1 gap-x-8 gap-y-4 text-lg md:grid-cols-2">
            {includedItems.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}
