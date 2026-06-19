export function OneYearSection() {
  return (
    <section className="container mx-auto max-w-4xl px-4 text-center md:px-6 py-12">
      <h2 className="text-3xl font-extrabold tracking-tighter md:text-5xl text-primary mb-12">
        DAQUI A UM ANO
      </h2>
      <div className="space-y-8 text-xl md:text-2xl leading-relaxed">
        <div className="opacity-80">
          <p>Você vai continuar jogando.</p>
          <p>Vai continuar entrando em call.</p>
          <p>Vai continuar passando horas online.</p>
        </div>
        
        <p className="font-bold text-foreground italic">Isso não vai mudar.</p>
        
        <div className="p-10 rounded-2xl border-4 border-primary bg-primary/5 shadow-2xl">
          <p className="text-2xl md:text-3xl font-black text-foreground">
            A única coisa que pode mudar... é se essas horas vão continuar sendo apenas entretenimento.
          </p>
          <p className="mt-4 text-primary text-3xl font-black uppercase">
            Ou se finalmente vão começar a construir a sua própria operação.
          </p>
        </div>
      </div>
      <p className="mt-12 text-3xl font-black italic tracking-tighter uppercase">
        A DECISÃO É SUA.
      </p>
    </section>
  )
}
