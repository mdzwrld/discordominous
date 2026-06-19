export function FinalQuestionSection() {
  return (
    <section className="container mx-auto max-w-3xl px-4 text-center md:px-6">
      <div className="space-y-8 text-2xl md:text-3xl font-bold">
        <div className="p-10 bg-card border-4 border-primary rounded-2xl shadow-2xl">
          <p className="text-foreground leading-tight mb-6">Você já tem o tempo.</p>
          <p className="text-foreground leading-tight mb-6">Você já tem o Discord.</p>
          <p className="text-foreground leading-tight mb-6">Você já tem acesso aos jogadores.</p>
          <p className="text-primary font-black uppercase tracking-tighter text-5xl">O QUE FALTA É UM SISTEMA.</p>
        </div>
        
        <div className="mt-12 space-y-4">
          <p className="text-foreground leading-tight">
            Quanto tempo você ainda vai esperar <br/>
            para transformar isso em algo que gera retorno?
          </p>
        </div>
      </div>
    </section>
  )
}
