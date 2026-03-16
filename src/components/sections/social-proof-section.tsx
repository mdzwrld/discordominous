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
    comment:
      "“Finalmente saí do caos! O método de organização do servidor é de outro nível. Criei hierarquia, a comunidade engaja sozinha e eu tenho controle total. É surreal o poder que uma estrutura bem feita te dá.”",
  },
  {
    image: PlaceHolderImages.find((p) => p.id === "testimonial-2"),
    comment:
      "“A organização do conteúdo é o que faz a diferença. Não é só sobre deixar bonito, é sobre guiar o membro para a oferta. Foi o que virou a chave para eu criar uma receita recorrente previsível, sem depender de sorte.”",
  },
  {
    image: PlaceHolderImages.find((p) => p.id === "testimonial-3"),
    comment:
      "“O design e a organização que aprendi a montar no Discord geram uma autoridade instantânea. Os membros entram e já percebem que o ambiente é profissional. Isso facilita DEMAIS a venda da oferta interna. Impecável.”",
  },
  {
    image: PlaceHolderImages.find((p) => p.id === "testimonial-4"),
    comment:
      "“Isso aqui não é um curso, é a planta de uma máquina de dinheiro. Valeu cada centavo. Parei de depender de algoritmo e agora eu mando no meu próprio jogo. O investimento se pagou em poucos dias.”",
  },
  {
    image: PlaceHolderImages.find((p) => p.id === "testimonial-5"),
    comment:
      "“A retenção dos meus membros aumentou absurdamente. O sistema que aprendi a criar é tão fácil de navegar que as pessoas ficam ativas por muito mais tempo. Chega de comunidade fantasma!”",
  },
  {
    image: PlaceHolderImages.find((p) => p.id === "testimonial-6"),
    comment:
      "“Eu estava perdido, tentando fazer a comunidade 'viralizar'. Depois de aplicar o método, entendi que o jogo é outro. Construí meu ativo, minha estrutura fechada, e agora tenho lucro previsível. Simplesmente transformador.”",
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

        <p className="mt-4 text-center text-muted-foreground md:hidden">
          Arraste para o lado para ver mais feedback
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mt-12 w-full"
        >
          <CarouselContent>
            {testimonials.map(
              (testimonial, index) =>
                testimonial.image && (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex h-full flex-col items-center justify-start p-4">
                          <Image
                            src={testimonial.image.imageUrl}
                            alt={testimonial.image.description}
                            data-ai-hint={testimonial.image.imageHint}
                            width={400}
                            height={400}
                            className="h-auto w-full rounded-lg"
                          />
                          {testimonial.comment && (
                            <p className="mt-4 text-center text-base font-medium text-foreground">
                              {testimonial.comment}
                            </p>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                )
            )}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  )
}
