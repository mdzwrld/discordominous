import { ShieldCheck } from "lucide-react"

export function GuaranteeSection() {
  return (
    <section className="container mx-auto max-w-3xl px-4 md:px-6">
      <div className="flex flex-col items-center gap-8 rounded-xl border-2 border-primary/30 bg-primary/10 p-8 text-center md:flex-row md:p-12 md:text-left">
        <div className="flex-shrink-0">
          <ShieldCheck className="h-24 w-24 text-primary md:h-28 md:w-28" />
        </div>
        <div>
          <h3 className="text-3xl font-bold text-primary">
            GARANTIA BLINDADA DE 7 DIAS
          </h3>
          <p className="mt-4 text-xl text-foreground">
            Acesse toda a estrutura. Se em até 7 dias você não estiver
            convencido de que este é o caminho mais rápido para criar sua renda
            recorrente no Discord, devolvemos 100% do seu investimento. Sem
            perguntas, sem burocracia. O risco é todo meu.
          </p>
        </div>
      </div>
    </section>
  )
}
