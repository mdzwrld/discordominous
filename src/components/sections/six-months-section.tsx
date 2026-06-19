export function SixMonthsSection() {
  return (
    <section className="container mx-auto max-w-4xl px-4 text-center md:px-6 py-12">
      <h2 className="text-3xl font-extrabold tracking-tighter md:text-5xl text-primary mb-12">
        ONDE VOCÊ ESTARÁ DAQUI A 6 MESES?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-left p-8 rounded-2xl border bg-destructive/5 border-destructive/20">
          <h3 className="text-xl font-bold text-destructive">Caminho 1: O Mesmo de Sempre</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li>• Entrando em call sem propósito</li>
            <li>• Jogando para "passar tempo"</li>
            <li>• Conversando sem gerar nada</li>
            <li>• Ainda procurando "como ganhar dinheiro online"</li>
          </ul>
        </div>
        <div className="space-y-6 text-left p-8 rounded-2xl border-2 border-primary bg-primary/5 shadow-2xl shadow-primary/20">
          <h3 className="text-xl font-bold text-primary">Caminho 2: O Novo Operador</h3>
          <ul className="space-y-3 text-foreground font-medium">
            <li>• Uma estrutura sua gerando caixa</li>
            <li>• Uma comunidade fiel que você domina</li>
            <li>• Renda recorrente batendo na conta</li>
            <li>• Tempo transformado em ativo digital</li>
          </ul>
        </div>
      </div>
      <p className="mt-12 text-3xl font-black italic tracking-tighter">
        A DECISÃO É SUA.
      </p>
    </section>
  )
}
