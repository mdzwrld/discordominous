import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const testimonials = [
  {
    name: "João Silva",
    handle: "@joaosilva",
    avatarUrl: "https://i.imgur.com/8p8YQBq.png",
    text: "O método é direto ao ponto. Consegui estruturar minha comunidade e tive meus primeiros 100 membros pagos em 15 dias. Surreal.",
  },
  {
    name: "Maria Oliveira",
    handle: "@mariaoliveira",
    avatarUrl: "https://i.imgur.com/C32s4A0.png",
    text: "Eu estava perdida, dependendo do alcance do Instagram. O Discord Dominus me deu o controle que eu precisava. Renda previsível, finalmente!",
  },
  {
    name: "Carlos Souza",
    handle: "@carlossouza",
    avatarUrl: "https://i.imgur.com/P2b23K0.png",
    text: "Pensava que Discord era só para gamers. Quebrei a cara. A estrutura que aprendi aqui vale ouro. Recomendo pra qualquer criador de conteúdo.",
  },
]

export function SocialProofSection() {
  return (
    <section className="container mx-auto max-w-6xl px-4 md:px-6">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold tracking-tighter md:text-5xl">
          RESULTADO DE QUEM APLICOU
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="flex flex-col bg-card/50">
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar>
                <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} data-ai-hint="avatar person" />
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg font-bold">{testimonial.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{testimonial.handle}</p>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="italic text-foreground">"{testimonial.text}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
