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
  {
    image: PlaceHolderImages.find((p) => p.id === "testimonial-7"),
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
                          width={testimonial.image.width || 350}
                          height={testimonial.image.height || 550}
                          className="rounded-lg"
                        />
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
