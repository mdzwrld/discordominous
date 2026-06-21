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
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl font-black tracking-tighter sm:text-4xl md:text-5xl uppercase">
            RESULTADO DE QUEM APLICOU
          </h2>
          <div className="mt-4 text-sm md:text-lg text-muted-foreground">
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
            <CarouselContent className="-ml-4">
              {testimonials.map(
                (testimonial, index) =>
                  testimonial.image && (
                    <CarouselItem
                      key={index}
                      className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3"
                    >
                      <div className="h-full py-2">
                        <Card className="h-full border-primary/20 bg-card shadow-xl transition-all hover:border-primary/40">
                          <CardContent className="flex h-full flex-col p-4 md:p-6">
                            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border/50 bg-muted shadow-inner">
                              <Image
                                src={testimonial.image.imageUrl}
                                alt={testimonial.image.description}
                                data-ai-hint={testimonial.image.imageHint}
                                fill
                                className="object-cover"
                              />
                            </div>
                            {testimonial.comment && (
                              <div className="mt-4 md:mt-6 flex-1">
                                <p className="text-left text-xs md:text-base font-medium leading-relaxed text-foreground italic">
                                  {testimonial.comment}
                                </p>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  )
              )}
            </CarouselContent>
            
            <div className="mt-6 flex items-center justify-center gap-4 md:hidden">
              <span className="h-px w-8 bg-primary/30" />
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60">
                Arraste para o lado
              </p>
              <span className="h-px w-8 bg-primary/30" />
            </div>

            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
