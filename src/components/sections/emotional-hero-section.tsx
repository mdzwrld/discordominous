"use client"

import { CtaButton } from "@/components/cta-button"

export function EmotionalHeroSection() {
  const handleCtaClick = () => {
    const offerSection = document.getElementById("offer")
    offerSection?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    })
  }

  return (
    <section id="emotional-intro" className="container mx-auto max-w-3xl px-4 text-center md:px-6 scroll-mt-20">
      <div className="space-y-6 text-xl md:text-2xl font-medium leading-relaxed">
        <p>Você passa horas no Discord todos os dias.</p>
        <div className="flex flex-col gap-2 italic text-muted-foreground">
          <p>Conversa.</p>
          <p>Joga.</p>
          <p>Assiste call.</p>
          <p>Entra em servidores.</p>
        </div>
        <p className="font-bold text-2xl md:text-3xl text-foreground mt-8">
          Mas no final do mês... Seu saldo continua igual.
        </p>
        <p className="text-muted-foreground mt-8">
          Enquanto isso, outras pessoas estão usando exatamente o mesmo Discord para gerar renda todos os dias.
        </p>
        <div className="flex flex-col gap-8">
          <p className="text-2xl md:text-4xl font-extrabold tracking-tight mt-12">
            A diferença não é sorte. <br/>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              A diferença é um sistema.
            </span>
          </p>
          
          <div className="flex justify-center">
            <CtaButton
              onClick={handleCtaClick}
              className="h-auto w-full max-w-2xl whitespace-normal p-6 text-base md:p-8 md:text-xl leading-tight"
            >
              👉 QUERO O SISTEMA + OS PRODUTOS QUE VENDEM
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  )
}
