export function WhileReadingSection() {
  return (
    <section className="container mx-auto max-w-4xl px-4 text-center md:px-6">
      <h2 className="text-3xl font-extrabold tracking-tighter md:text-5xl mb-12">
        Enquanto você está lendo isso...
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        <div className="space-y-4 p-8 bg-primary/5 rounded-2xl border border-primary/20">
          <p className="text-xl font-bold">Tem alguém da sua idade agora:</p>
          <ul className="space-y-3 text-lg font-medium text-foreground">
            <li>• Vendendo Nitro</li>
            <li>• Vendendo V-Bucks</li>
            <li>• Vendendo Robux</li>
            <li>• Vendendo contas de jogos</li>
            <li>• Vendendo produtos digitais</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center space-y-6 text-lg md:text-xl leading-snug">
          <p>Tudo usando ferramentas que você já usa todos os dias.</p>
          <div className="space-y-2">
            <p className="font-bold text-primary">A diferença?</p>
            <p>Ele decidiu começar antes.</p>
          </div>
          <div className="text-muted-foreground space-y-1">
            <p>Ele não é mais inteligente.</p>
            <p>Não tem mais tempo.</p>
            <p>Não nasceu com vantagem.</p>
          </div>
          <p className="text-2xl font-black text-foreground uppercase tracking-tighter">Ele apenas começou.</p>
        </div>
      </div>
    </section>
  )
}
