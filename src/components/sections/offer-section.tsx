import { CtaButton } from "@/components/cta-button"
import { Card, CardContent } from "@/components/ui/card"

export function OfferSection() {
  return (
    <section id="offer" className="w-full scroll-mt-20">
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        <Card className="relative overflow-hidden border-2 border-primary bg-card shadow-2xl shadow-primary/20">
          <div className="absolute top-0 left-0 -z-10 h-full w-full bg-grid-primary/[0.07]"></div>

          <CardContent className="p-8 text-center md:p-12">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary">
              OFERTA
            </h3>
            <p className="mt-4 text-lg text-muted-foreground">
              Acesso completo ao método:
            </p>
            <div className="my-6">
              <span className="text-7xl font-extrabold md:text-8xl">R$ 67,00</span>
            </div>
            <p className="text-lg font-semibold text-muted-foreground">
              Pagamento único ou{" "}
              <span className="text-foreground">12x de R$ 6,93</span>
            </p>

            <div className="mt-8">
              <CtaButton className="w-full max-w-lg transform p-8 text-xl">
                QUERO CONSTRUIR MINHA MÁQUINA AGORA
              </CtaButton>
            </div>
            <p className="mt-6 text-muted-foreground">
              Preço ridiculamente baixo pelo nível de estrutura entregue.
              <br />
              <span className="font-semibold text-foreground">
                E não vai ficar assim para sempre.
              </span>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
