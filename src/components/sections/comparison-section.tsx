import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { XCircle, CheckCircle2, type LucideIcon } from "lucide-react"

interface ComparisonItemType {
  type: string
  icon: LucideIcon
  items: string[]
  cardClassName: string
  titleClassName: string
  iconClassName: string
  listClassName: string
}

const comparisonItems: ComparisonItemType[] = [
  {
    type: "Amador",
    icon: XCircle,
    items: [
      "Cria servidor e joga link na bio",
      "Espera as pessoas comprarem",
      "Some em 2 meses",
    ],
    cardClassName: "border-destructive/30 bg-destructive/10",
    titleClassName: "text-destructive-foreground",
    iconClassName: "text-destructive",
    listClassName: "text-muted-foreground",
  },
  {
    type: "Operador",
    icon: CheckCircle2,
    items: [
      "Constrói ambiente fechado",
      "Cria hierarquia",
      "Posiciona oferta interna",
      "Gera recorrência",
      "Escala comunidade",
    ],
    cardClassName: "border-primary/30 bg-primary/10",
    titleClassName: "text-primary-foreground",
    iconClassName: "text-primary",
    listClassName: "text-foreground",
  },
]

const ComparisonCard = ({ item }: { item: ComparisonItemType }) => (
  <Card className={`${item.cardClassName} h-full`}>
    <CardHeader>
      <CardTitle
        className={`flex items-center gap-3 text-2xl font-bold ${item.titleClassName}`}
      >
        <item.icon className={`h-8 w-8 ${item.iconClassName}`} />
        {item.type}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <ul className={`space-y-3 text-lg ${item.listClassName}`}>
        {item.items.map((text) => (
          <li key={text} className="flex items-start gap-3">
            <span>• {text}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
)

export function ComparisonSection() {
  return (
    <section className="container mx-auto max-w-5xl px-4 md:px-6">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold tracking-tighter md:text-5xl">
          A DIFERENÇA ENTRE AMADOR E OPERADOR
        </h2>
      </div>

      {/* Desktop view */}
      <div className="mt-12 hidden grid-cols-2 items-stretch gap-8 md:grid">
        {comparisonItems.map((item) => (
          <ComparisonCard key={item.type} item={item} />
        ))}
      </div>

      {/* Mobile view */}
      <div className="mt-12 md:hidden">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {comparisonItems.map((item, index) => (
              <CarouselItem key={index}>
                <div className="h-full p-1">
                  <ComparisonCard item={item} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
