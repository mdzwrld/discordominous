export function DreamSection() {
  return (
    <section className="container mx-auto max-w-4xl px-4 text-center md:px-6">
      <h2 className="text-3xl font-extrabold tracking-tighter md:text-5xl text-primary mb-12 uppercase">
        E se dessa vez fosse diferente?
      </h2>
      <div className="space-y-12 text-xl md:text-3xl font-medium leading-tight">
        <div className="p-8 bg-primary/5 rounded-3xl border border-primary/20 shadow-2xl">
          <p className="text-foreground">Imagine abrir o Discord amanhã e encontrar uma venda.</p>
        </div>
        
        <p className="text-muted-foreground">Imagine ver dinheiro entrando por algo que você construiu.</p>
        
        <p className="font-bold text-foreground">
          Imagine olhar para trás daqui a um ano e perceber que aquelas horas que você passava online finalmente começaram a gerar resultado.
        </p>
      </div>
    </section>
  )
}
