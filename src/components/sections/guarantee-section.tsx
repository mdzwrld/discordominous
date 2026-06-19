import { ShieldCheck } from "lucide-react"

export function GuaranteeSection() {
  return (
    <section className="container mx-auto max-w-3xl px-4 md:px-6">
      <div className="flex flex-col items-center gap-8 rounded-2xl border-4 border-primary bg-primary/5 p-8 text-center md:flex-row md:p-12 md:text-left shadow-2xl shadow-primary/20">
        <div className="flex-shrink-0">
          <ShieldCheck className="h-28 w-28 text-primary md:h-32 md:w-32" />
        </div>
        <div>
          <h3 className="text-3xl font-black text-primary tracking-tight">
            GARANTIA BLINDADA DE 7 DIAS
          </h3>
          <p className="mt-4 text-xl text-foreground font-medium leading-relaxed">
            Acesse toda a estrutura. Se em até 7 dias você não estiver
            convencido de que este é o caminho mais rápido para criar sua renda
            recorrente no Discord, devolvemos 100% do seu investimento. <br/><br/>
            <span className="font-black italic">Sem perguntas, sem burocracia. O risco é todo meu.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
