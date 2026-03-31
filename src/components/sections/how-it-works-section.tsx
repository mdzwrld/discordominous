import { Check } from "lucide-react"

const steps = [
  "Você recebe a estrutura pronta do servidor",
  "Só adapta para o seu nicho",
  "Os membros entram e seguem um fluxo automático",
  "A venda acontece dentro do ambiente",
  "Você não depende de post nem algoritmo",
]

export function HowItWorksSection() {
  return (
    <section className="container mx-auto max-w-3xl px-4 md:px-6">
      <div className="rounded-xl border bg-card p-8 text-card-foreground shadow-sm">
        <h2 className="text-center text-3xl font-extrabold tracking-tighter md:text-4xl">
          Como isso funciona na prática:
        </h2>
        <ul className="mt-8 space-y-4 text-lg md:text-xl">
          {steps.map((step) => (
            <li key={step} className="flex items-start gap-4">
              <Check className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
