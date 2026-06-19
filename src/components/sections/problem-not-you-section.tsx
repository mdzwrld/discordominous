export function ProblemNotYouSection() {
  return (
    <section className="container mx-auto max-w-4xl px-4 text-center md:px-6">
      <h2 className="text-3xl font-extrabold tracking-tighter md:text-5xl text-primary mb-12">
        TALVEZ O PROBLEMA NÃO SEJA VOCÊ
      </h2>
      <div className="space-y-8 text-lg md:text-xl text-muted-foreground">
        <div className="space-y-4">
          <p>Talvez o problema não seja falta de esforço.</p>
          <p>Talvez o problema não seja falta de tempo.</p>
          <p className="font-bold text-foreground text-2xl">
            Talvez o problema seja que ninguém te mostrou como transformar atenção em dinheiro.
          </p>
        </div>
        
        <div className="bg-muted/30 p-10 rounded-2xl border border-border shadow-inner">
          <div className="space-y-4">
            <p>Você entra em call.</p>
            <p>Joga.</p>
            <p>Assiste conteúdo.</p>
            <p>Passa horas online.</p>
          </div>
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-foreground font-semibold">E no final do mês...</p>
            <p className="text-2xl md:text-3xl font-bold text-foreground mt-2">
              Nada mudou. <br/>
              Mesmo saldo. Mesma rotina. Mesmas desculpas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
