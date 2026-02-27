import Image from "next/image"

export function ProofSection() {
  return (
    <section className="container mx-auto max-w-5xl px-4 text-center md:px-6">
      <p className="text-lg text-muted-foreground md:text-xl">
        Foi assim que fiz:
      </p>
      <h2 className="my-4 text-4xl font-extrabold tracking-tighter text-primary md:text-6xl">
        R$ 150.221,22 em 3 meses.
      </h2>
      <p className="text-lg text-muted-foreground md:text-xl">
        Sem hype. Sem lançamento. Sem depender de tráfego caro.
      </p>
      <div className="mt-8">
        <Image
            src="https://i.imgur.com/EmUlo3B.png"
            alt="Interface do Discord mostrando mensagens e interações de usuários"
            data-ai-hint="discord interface"
            width={1000}
            height={333}
            className="mx-auto rounded-xl border-2 border-border shadow-2xl"
        />
      </div>
    </section>
  )
}
