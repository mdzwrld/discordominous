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

const testimonials = [
  {
    image: PlaceHolderImages.find((p) => p.id === "testimonial-1"),
    text: "Mudei do IG pro Discord e a previsibilidade é outra. Faturamento estabilizou.",
  },
  {
    image: PlaceHolderImages.find((p) => p.id === "testimonial-2"),
    text: "A estrutura dos canais fez toda a diferença. O engajamento aumentou e as vendas vieram.",
  },
  {
    image: PlaceHolderImages.find((p) => p.id === "testimonial-3"),
    text: "Finalmente saí da roleta russa do tráfego pago. Ter meu próprio ambiente não tem preço.",
  },
  {
    image: PlaceHolderImages.find((p) => p.id === "testimonial-4"),
    text: "O método é simples e direto. Em 3 semanas já tinha recuperado o investimento.",
  },
  {
    image: PlaceHolderImages.find((p) => p.id === "testimonial-5"),
    text: "Discord parecia complexo, mas com o passo a passo ficou fácil. Melhor decisão que tomei.",
  },
  {
    image: PlaceHolderImages.find((p) => p.id === "testimonial-6"),
    text: "Recorrência. Essa é a palavra. O jogo mudou completamente pra mim.",
  },
  {
    image: PlaceHolderImages.find((p) => p.id === "testimonial-7"),
    text: "Ter o controle da minha base de clientes é libertador. Chega de depender de algoritmo.",
  },
]

export function SocialProofSection() {
  return (
    <section className="w-full">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tighter md:text-5xl">
            RESULTADO DE QUEM APLICOU
          </h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mt-12 w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              testimonial.image && (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-4">
                        <Image
                          src={testimonial.image.imageUrl}
                          alt={testimonial.image.description}
                          data-ai-hint={testimonial.image.imageHint}
                          width={350}
                          height={550}
                          className="rounded-lg object-cover"
                        />
                        <p className="mt-4 text-center text-lg italic text-foreground">
                          "{testimonial.text}"
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              )
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  )
}
