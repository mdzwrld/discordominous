export function QuestionSection() {
  return (
    <section className="container mx-auto max-w-3xl px-4 text-center md:px-6">
      <h2 className="text-2xl font-bold md:text-3xl text-primary mb-8 uppercase tracking-tighter">
        Existe uma pergunta que quase ninguém gosta de responder.
      </h2>
      <div className="space-y-6 text-xl md:text-2xl font-medium leading-relaxed">
        <p>Se você somar todas as horas que passou no Discord nos últimos 12 meses...</p>
        <div className="p-8 bg-card border-2 border-primary/20 rounded-2xl shadow-xl">
          <p className="text-foreground font-black text-3xl md:text-4xl mb-4">O que você construiu?</p>
          <div className="space-y-2 text-muted-foreground text-lg">
            <p>Não o que assistiu.</p>
            <p>Não o que consumiu.</p>
            <p>Não o que salvou para ver depois.</p>
          </div>
        </div>
        <p className="mt-8">
          Porque o tempo está passando de qualquer forma.
        </p>
        <p className="text-primary font-bold">
          A diferença é que algumas pessoas estão usando esse tempo para criar algo próprio.
        </p>
        <p className="italic text-muted-foreground">Enquanto outras continuam apenas consumindo.</p>
      </div>
    </section>
  )
}
