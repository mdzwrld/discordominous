import Image from "next/image"

export function ProofSection() {
  return (
    <section className="container mx-auto max-w-5xl px-4 text-center md:px-6">
      <h2 className="my-4 text-4xl font-extrabold tracking-tighter text-primary md:text-6xl">
        R$ 150.221,22 em 3 meses.
      </h2>
      <div className="mt-8 space-y-2 text-lg text-muted-foreground md:text-xl">
        <p>Isso não veio de viral.</p>
        <p>Não veio de lançamento.</p>
        <p className="pt-4 font-semibold text-foreground">
          Veio de um sistema simples:
        </p>
        <ul className="mx-auto max-w-md list-none space-y-1 pt-2 text-center">
          <li>Pessoas entram no ambiente</li>
          <li>São guiadas por uma estrutura</li>
          <li>Consomem conteúdo com intenção</li>
          <li>E compram dentro do próprio Discord</li>
        </ul>
      </div>
      <div className="mt-8">
        <Image
          src="https://i.imgur.com/EmUlo3B.png"
          alt="Dashboard mostrando faturamento de R$150.221,22"
          data-ai-hint="dashboard graph"
          width={1000}
          height={333}
          className="mx-auto rounded-xl border-2 border-border shadow-2xl"
        />
      </div>
    </section>
  )
}
