export function FinalQuestionSection() {
  return (
    <section className="container mx-auto max-w-3xl px-4 text-center md:px-6">
      <div className="space-y-8 text-2xl md:text-3xl font-bold">
        <p>Você já passa horas no Discord.</p>
        <p>Você já passa horas no computador.</p>
        <p className="text-primary font-black uppercase tracking-tighter text-4xl">Você já tem a atenção. <br/> Você já tem o tempo.</p>
        
        <div className="p-8 bg-card border-l-4 border-primary rounded-r-xl shadow-lg">
          <p className="text-foreground leading-tight">
            Quanto tempo você ainda vai esperar <br/>
            para transformar isso em algo que gera retorno?
          </p>
        </div>
      </div>
    </section>
  )
}
