"use client"

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { CtaButton } from "@/components/cta-button"

const testimonials = [
  {
    image: PlaceHolderImages.find((p) => p.id === "testimonial-1"),
  },
  {
    image: PlaceHolderImages.find((p) => p.id === "testimonial-2"),
  },
  {
    image: PlaceHolderImages.find((p) => p.id === "testimonial-3"),
  },
  {
    image: PlaceHolderImages.find((p) => p.id === "testimonial-4"),
  },
  {
    image: PlaceHolderImages.find((p) => p.id === "testimonial-5"),
  },
  {
    image: PlaceHolderImages.find((p) => p.id === "testimonial-6"),
  },
]

export function SocialProofSection() {
  const handleCtaClick = () => {
    const offerSection = document.getElementById("offer")
    offerSection?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    })
  }

  return (
    <section className="w-full overflow-hidden py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl font-black tracking-tight sm:text-4xl md:text-5xl uppercase leading-tight">
            RESULTADO DE QUEM APLICOU
          </h2>
          <div className="mt-4 text-xs md:text-lg text-muted-foreground max-w-2xl mx-auto space-y-1">
            <p>Resultados variam de acordo com execução.</p>
            <p>
              Mas todos seguem o mesmo princípio:{" "}
              <span className="font-semibold text-foreground">
                sistema &gt; improviso.
              </span>
            </p>
          </div>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map(
                (testimonial, index) =>
                  testimonial.image && (
                    <CarouselItem
                      key={index}
                      className="pl-2 md:pl-4 basis-[90%] sm:basis-1/2 lg:basis-1/3"
                    >
                      <div className="h-full py-2">
                        <Card className="h-full border-primary/20 bg-card/50 backdrop-blur-sm shadow-xl transition-all hover:border-primary/40 flex flex-col overflow-hidden">
                          <CardContent className="flex h-full flex-col p-4 md:p-6">
                            <div className="relative h-48 sm:h-64 w-full overflow-hidden rounded-lg border border-border/50 bg-muted/30 shadow-inner">
                              <Image
                                src={testimonial.image.imageUrl}
                                alt={testimonial.image.description}
                                data-ai-hint={testimonial.image.imageHint}
                                fill
                                className="object-contain p-2"
                                sizes="(max-width: 768px) 90vw, 30vw"
                              />
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  )
              )}
            </CarouselContent>
            
            <div className="mt-6 flex items-center justify-center gap-4 md:hidden">
              <span className="h-px w-6 bg-primary/30" />
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60">
                Arraste para ver mais
              </p>
              <span className="h-px w-6 bg-primary/30" />
            </div>

            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6">
          <p className="text-xl font-bold text-primary italic text-center">
            "Não seja apenas mais um espectador no Discord. Seja o dono da sua própria operação."
          </p>
          <CtaButton
            onClick={handleCtaClick}
            className="h-auto w-full max-w-2xl whitespace-normal p-6 text-base md:p-8 md:text-xl leading-tight"
          >
            👉 QUERO MONTAR MINHA MÁQUINA DE VENDAS
          </CtaButton>
        </div>
      </div>
    </section>
  )
}
