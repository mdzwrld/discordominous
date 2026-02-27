export function PainsListSection() {
  const pains = [
    "Começar algo novo todo mês",
    "Depender de viral",
    "Ver faturamento oscilar",
    "Não ter previsibilidade",
    "Sentir que está sempre correndo atrás",
  ]

  return (
    <section className="container mx-auto max-w-4xl px-4 text-center md:px-6">
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
    </section>
  )
}
