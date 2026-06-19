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
        
        <p className="text-muted-foreground">Imagine receber uma notificação e perceber que algo que você construiu gerou resultado.</p>
        
        <div className="p-8 bg-card border border-border rounded-3xl shadow-lg">
          <p className="font-bold text-foreground">
            Imagine olhar para trás daqui a alguns meses e perceber que aquelas horas que antes eram apenas entretenimento começaram a construir algo seu.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-muted-foreground">Algo que cresce. Algo que gera resultado.</p>
          <p className="text-4xl font-black text-primary uppercase tracking-tighter">Algo que ninguém pode tirar de você.</p>
          <p className="text-2xl font-bold">É isso que muda o jogo.</p>
        </div>
      </div>
    </section>
  )
}
