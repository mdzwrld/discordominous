import Image from "next/image"

export function ProofSection() {
  return (
    <section className="container mx-auto max-w-5xl px-4 text-center md:px-6">
      <h2 className="my-4 text-4xl font-black tracking-tighter text-primary md:text-7xl drop-shadow-sm">
        R$ 150.221,22 em 3 meses.
      </h2>
      <div className="mt-8 space-y-2 text-lg text-muted-foreground md:text-xl">
        <p>Isso não veio de viral.</p>
        <p>Não veio de lançamento.</p>
        <p className="pt-4 font-extrabold text-foreground text-2xl">
          Veio de um sistema simples:
        </p>
        <ul className="mx-auto max-w-md list-none space-y-2 pt-4 text-center font-medium text-foreground">
          <li className="p-3 bg-muted rounded-lg">Jogadores entram no sistema</li>
          <li className="p-3 bg-muted rounded-lg">Seguem um caminho que leva naturalmente à oferta</li>
          <li className="p-3 bg-muted rounded-lg">Consomem conteúdo com intenção</li>
          <li className="p-3 bg-muted rounded-lg">E compram dentro da sua operação</li>
        </ul>
      </div>
      <div className="mt-12">
        <Image
          src="https://i.imgur.com/EmUlo3B.png"
          alt="Dashboard mostrando faturamento de R$150.221,22"
          data-ai-hint="dashboard graph"
          width={1000}
          height={333}
          className="mx-auto rounded-xl border-4 border-primary/20 shadow-2xl shadow-primary/10"
        />
      </div>
    </section>
  )
}
