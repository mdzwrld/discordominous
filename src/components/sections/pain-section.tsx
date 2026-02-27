export function PainSection() {
  const pains = [
    "Começar algo novo todo mês",
    "Depender de viral",
    "Ver faturamento oscilar",
    "Não ter previsibilidade",
    "Sentir que está sempre correndo atrás",
  ]
  return (
    <section className="container mx-auto max-w-4xl px-4 md:px-6">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold tracking-tighter md:text-5xl">
          O MOTIVO DE VOCÊ AINDA NÃO TER ESTABILIDADE
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          A real é que ninguém te ensina a construir um ativo de verdade. Você está jogando no terreno dos outros.
        </p>
        <div className="mt-8 space-y-4 text-lg md:text-xl">
          <p>
            Instagram muda regra. TikTok derruba alcance. O Facebook vira um Tocha Humana 🔥 que só queima teu dinheiro.
          </p>
          <p className="font-semibold text-foreground">
            Você acorda todo dia numa roleta russa, sem saber se vai vender.
          </p>
          <p className="rounded-xl border border-destructive/50 bg-destructive/10 p-4 text-2xl font-bold text-destructive-foreground">
            Isso não é negócio. Isso é vício em dopamina.
          </p>
        </div>
        <p className="mt-8 text-lg text-muted-foreground md:text-xl">
          E enquanto você vive de pico…
          <br />
          <span className="font-semibold text-foreground">
            Tem gente construindo renda previsível em ambiente fechado. Silenciosamente.
          </span>
        </p>
      </div>
      <div className="mt-16 md:mt-24 text-center">
        <h2 className="text-4xl font-extrabold tracking-tighter md:text-5xl">
          VOCÊ ESTÁ CANSADO DE:
        </h2>
        <ul className="mx-auto mt-8 inline-block max-w-md space-y-3 text-left">
          {pains.map((pain, index) => (
            <li
              key={index}
              className="rounded-lg bg-card p-4 text-xl font-semibold"
            >
              {pain}
            </li>
          ))}
        </ul>
        <p className="mt-12 text-lg text-muted-foreground md:text-xl">
          Então você não precisa de mais um “modelo”.
          <br />
          <span className="text-4xl font-extrabold text-primary">Você precisa de ESTRUTURA.</span>
        </p>
      </div>
    </section>
  )
}
