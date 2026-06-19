export function OneYearSection() {
  return (
    <section className="container mx-auto max-w-4xl px-4 text-center md:px-6 py-12">
      <h2 className="text-3xl font-extrabold tracking-tighter md:text-5xl text-primary mb-12">
        DAQUI A 12 MESES.
      </h2>
      <div className="space-y-8 text-xl md:text-2xl leading-relaxed">
        <div className="opacity-80">
          <p>Você terá jogado centenas de partidas.</p>
          <p>Entrado em centenas de calls.</p>
          <p>Passado milhares de horas online.</p>
        </div>
        
        <p className="font-bold text-foreground italic">Isso vai acontecer de qualquer forma.</p>
        
        <div className="p-10 rounded-2xl border-4 border-primary bg-primary/5 shadow-2xl">
          <p className="text-2xl md:text-3xl font-black text-foreground">
            A única pergunta é: O que vai sobrar disso?
          </p>
          <p className="mt-4 text-primary text-3xl font-black uppercase">
            A diferença é se você vai usar esse tempo para construir algo seu... <br/>
            ou continuar apenas consumindo.
          </p>
        </div>
      </div>
      <p className="mt-12 text-3xl font-black italic tracking-tighter uppercase">
        A DECISÃO É SUA.
      </p>
    </section>
  )
}
