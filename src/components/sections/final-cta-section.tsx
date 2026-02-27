"use client"

import { CtaButton } from "@/components/cta-button"

export function FinalCtaSection() {
  const handleCtaClick = () => {
    document.getElementById("offer")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    })
  }

  return (
    <section className="container mx-auto max-w-4xl px-4 md:px-6">
      <div className="rounded-xl bg-card p-8 text-center md:p-12">
        <h2 className="text-3xl font-extrabold tracking-tighter md:text-5xl">
          DECISÃO
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Ou você continua tentando viralizar…
          <br />
          Ou constrói algo que <span className="text-primary">ninguém pode tirar de você.</span>
        </p>
        <div className="mt-8">
          <CtaButton
            onClick={handleCtaClick}
            className="w-full max-w-md transform p-8 text-xl"
          >
            QUERO CONSTRUIR MINHA MÁQUINA NO DISCORD AGORA
          </CtaButton>
        </div>
      </div>
    </section>
  )
}
