export function FinalQuestionSection() {
  return (
    <section className="container mx-auto max-w-3xl px-4 text-center md:px-6">
      <div className="space-y-8 text-2xl md:text-3xl font-bold">
        <p>Você já passa horas no Discord.</p>
        <p className="text-muted-foreground">A pergunta não é se você tem tempo.</p>
        <div className="p-8 bg-card border-l-4 border-primary rounded-r-xl shadow-lg">
          <p className="text-foreground leading-tight">
            Quanto tempo você ainda vai gastar <br/>
            sem transformar isso em algo que gera retorno?
          </p>
        </div>
      </div>
    </section>
  )
}
