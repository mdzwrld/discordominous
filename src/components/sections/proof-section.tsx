import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function ProofSection() {
  const proofImage = PlaceHolderImages.find(p => p.id === "revenue-screenshot")

  return (
    <section className="container mx-auto max-w-5xl px-4 text-center md:px-6">
      <p className="text-lg text-muted-foreground md:text-xl">
        Foi assim que fiz:
      </p>
      <h2 className="my-4 text-4xl font-extrabold tracking-tighter text-primary md:text-6xl">
        R$ 150.221,22 em 4 meses.
      </h2>
      <p className="text-lg text-muted-foreground md:text-xl">
        Sem hype. Sem lançamento. Sem depender de tráfego caro.
      </p>
      <div className="mt-8">
        {proofImage && (
          <Image
            src={proofImage.imageUrl}
            alt={proofImage.description}
            data-ai-hint={proofImage.imageHint}
            width={1200}
            height={675}
            className="mx-auto rounded-xl border-2 border-border shadow-2xl"
          />
        )}
        <p className="mt-4 text-sm text-muted-foreground">
          (Prova visual sempre quebra objeção emocional)
        </p>
      </div>
    </section>
  )
}
