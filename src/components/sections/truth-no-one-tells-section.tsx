export function TruthNoOneTellsSection() {
  return (
    <section className="container mx-auto max-w-4xl px-4 text-center md:px-6">
      <h2 className="text-3xl font-extrabold tracking-tighter md:text-5xl text-primary mb-12 uppercase">
        A VERDADE QUE NINGUÉM FALA
      </h2>
      <div className="space-y-6 text-xl md:text-2xl">
        <div className="space-y-2 opacity-70">
          <p>A maioria nunca vai virar streamer famoso.</p>
          <p>A maioria nunca vai virar pro player.</p>
          <p>A maioria nunca vai viver de campeonato.</p>
        </div>
        <p className="font-bold text-2xl md:text-3xl text-foreground mt-12">
          Mas isso não significa que não dá para ganhar dinheiro com games.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="p-6 rounded-xl border bg-card/50">
            <p className="text-muted-foreground">O dinheiro não está em ser famoso.</p>
            <p className="font-bold text-primary text-2xl">Está em controlar a atenção.</p>
          </div>
          <div className="p-6 rounded-xl border bg-card/50">
            <p className="text-muted-foreground">O dinheiro não está no algoritmo.</p>
            <p className="font-bold text-primary text-2xl">Está em construir sua própria base.</p>
          </div>
        </div>
        <p className="text-3xl md:text-4xl font-extrabold mt-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          O dinheiro está em ter um sistema que vende todos os dias.
        </p>
      </div>
    </section>
  )
}
