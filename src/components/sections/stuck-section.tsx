export function StuckSection() {
  return (
    <section className="container mx-auto max-w-4xl px-4 text-center md:px-6">
      <h2 className="text-3xl font-extrabold tracking-tighter md:text-5xl text-primary mb-12">
        TALVEZ VOCÊ ESTEJA PRESO AQUI
      </h2>
      <div className="space-y-8 text-lg md:text-xl text-muted-foreground">
        <div className="space-y-4">
          <p>Sua mãe fala para você arrumar um emprego.</p>
          <p>Seus amigos dizem que ganhar dinheiro com games não existe.</p>
        </div>
        <div className="space-y-4">
          <p>Você já tentou várias formas de ganhar dinheiro online.</p>
          <p className="italic">Assistiu vídeos. Entrou em comunidades. Comprou cursos.</p>
          <p className="font-bold text-foreground text-2xl">Mas continua começando do zero.</p>
        </div>
        <div className="bg-muted/30 p-8 rounded-2xl border border-border">
          <p className="text-foreground font-semibold">E o pior:</p>
          <p className="text-2xl md:text-3xl font-bold text-foreground mt-4">
            Você passa horas por dia no computador. <br/>
            Mas esse tempo não gera nenhum retorno.
          </p>
        </div>
        <p className="text-primary font-bold animate-pulse text-2xl mt-12">
          Se isso te descreve... Continue lendo.
        </p>
      </div>
    </section>
  )
}
