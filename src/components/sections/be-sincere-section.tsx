import { Card, CardContent } from "@/components/ui/card"

export function BeSincereSection() {
  return (
    <section className="container mx-auto max-w-3xl px-4 text-center md:px-6">
      <h2 className="text-3xl font-extrabold tracking-tighter md:text-5xl mb-8">
        SEJA SINCERO
      </h2>
      <Card className="border-2 border-dashed border-primary/40 bg-card/50 backdrop-blur-sm">
        <CardContent className="p-8 md:p-12 space-y-6 text-lg md:text-xl">
          <p className="text-foreground font-medium">Você já tentou ganhar dinheiro online antes?</p>
          <p className="text-muted-foreground italic">Provavelmente sim.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <ul className="space-y-2 text-muted-foreground">
              <li>• Assistiu vídeos</li>
              <li>• Entrou em grupos</li>
              <li>• Comprou cursos</li>
            </ul>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Salvou conteúdos</li>
              <li>• Planejou começar</li>
              <li>• Criou expectativas</li>
            </ul>
          </div>

          <div className="pt-8 border-t border-primary/20">
            <p className="text-foreground">Mas semanas depois... <br/> 
            <span className="text-2xl font-bold">Continuava exatamente no mesmo lugar.</span></p>
            <p className="mt-4 text-primary font-bold">
              Porque informação nunca foi o problema. <br/>
              O problema era não ter um caminho claro.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
