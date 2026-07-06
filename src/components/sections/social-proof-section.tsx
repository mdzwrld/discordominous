
"use client"

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
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
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl uppercase leading-tight">
            RESULTADO DE QUEM APLICOU
          </h2>
        </div>

        <div className="relative mx-auto max-w-5xl px-4 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map(
                (testimonial, index) =>
                  testimonial.image && (
                    <CarouselItem
                      key={index}
                      className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                    >
                      <div className="relative flex h-full items-center justify-center py-4">
                        <div className="relative w-full overflow-hidden rounded-2xl shadow-xl transition-all hover:scale-[1.02]">
                          <Image
                            src={testimonial.image.imageUrl}
                            alt={testimonial.image.description}
                            data-ai-hint={testimonial.image.imageHint}
                            width={600}
                            height={1200}
                            className="h-auto w-full object-contain"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            priority={index < 3}
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  )
              )}
            </CarouselContent>
            
            <div className="mt-8 flex items-center justify-center gap-4 md:hidden">
              <span className="h-px w-8 bg-primary/30" />
              <p className="text-xs font-black uppercase tracking-[0.2em] text-primary/60">
                Arraste para ver mais
              </p>
              <span className="h-px w-8 bg-primary/30" />
            </div>

            <CarouselPrevious className="hidden md:flex -left-12 bg-background/80 backdrop-blur-md" />
            <CarouselNext className="hidden md:flex -right-12 bg-background/80 backdrop-blur-md" />
          </Carousel>

          <div className="mt-16 flex justify-center">
            <CtaButton
              onClick={handleCtaClick}
              className="h-auto w-full max-w-2xl whitespace-normal p-6 text-base md:p-8 md:text-xl leading-tight"
            >
              👉 QUERO TER ESSES RESULTADOS COM MINHA OPERAÇÃO
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  )
}
