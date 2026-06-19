import { ArrowDown } from "lucide-react"

const levels = [
  {
    level: 1,
    title: "Iniciante",
    description: "Passar horas jogando apenas por lazer.",
    status: "Passivo"
  },
  {
    level: 2,
    title: "Consciente",
    description: "Entender como o dinheiro circula no mercado digital.",
    status: "Observador"
  },
  {
    level: 3,
    title: "Operador",
    description: "Criar sua primeira fonte de renda usando ferramentas que você já usa.",
    status: "Ativo"
  },
  {
    level: 4,
    title: "Estrategista",
    description: "Construir sua própria máquina de vendas dentro do Discord.",
    status: "Dono do Jogo"
  },
  {
    level: 5,
    title: "Dominus",
    description: "Criar renda recorrente previsível e escalar sua operação.",
    status: "Mestre da Máquina"
  }
]

export function EvolutionSection() {
  return (
    <section className="container mx-auto max-w-4xl px-4 md:px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black tracking-tighter md:text-5xl text-primary">
          SUA EVOLUÇÃO
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">De um simples jogador para o dono do próprio ecossistema.</p>
      </div>

      <div className="space-y-8">
        {levels.map((lvl, index) => (
          <div key={lvl.level} className="flex flex-col items-center">
            <div className="w-full flex items-center gap-6 p-6 rounded-2xl border-2 border-primary/10 bg-card shadow-lg transition-all hover:border-primary/40 hover:scale-[1.02]">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-primary text-2xl font-black text-primary-foreground shadow-xl shadow-primary/20">
                Nível {lvl.level}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-xl font-bold text-foreground uppercase tracking-tight">{lvl.title}</h3>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary/70">{lvl.status}</span>
                </div>
                <p className="text-muted-foreground leading-tight">{lvl.description}</p>
              </div>
            </div>
            {index < levels.length - 1 && (
              <ArrowDown className="mt-8 h-8 w-8 text-primary/30 animate-pulse" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
