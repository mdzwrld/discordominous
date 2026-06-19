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
    <section className="w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tighter md:text-5xl">
            RESULTADO DE QUEM APLICOU
          </h2>
          <div className="mt-4 text-center text-lg text-muted-foreground">
            <p>Resultados variam de acordo com execução.</p>
            <p>
              Mas todos seguem o mesmo princípio:{" "}
              <span className="font-semibold text-foreground">
                sistema &gt; improviso.
              </span>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center md:hidden">
          <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            <span>←</span> Arraste para o lado para ver mais <span>→</span>
          </p>
        </div>

        <div className="relative mt-8 px-4 md:px-0">
          <Carousel
            opts={{
              align: "start",
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
                      className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3"
                    >
                      <div className="h-full p-1">
                        <Card className="h-full border-primary/10 bg-card/50 backdrop-blur-sm">
                          <CardContent className="flex h-full flex-col items-center justify-start p-6">
                            <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                              <Image
                                src={testimonial.image.imageUrl}
                                alt={testimonial.image.description}
                                data-ai-hint={testimonial.image.imageHint}
                                fill
                                className="object-cover"
                              />
                            </div>
                            {testimonial.comment && (
                              <p className="mt-6 text-center text-base font-medium leading-relaxed text-foreground">
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
      </div>
    </section>
  )
}
