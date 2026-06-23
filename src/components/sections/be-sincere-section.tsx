"use client"

import { Card, CardContent } from "@/components/ui/card"

export function BeSincereSection() {
  return (
    <section className="container mx-auto max-w-3xl px-4 text-center md:px-6">
      <h2 className="text-3xl font-extrabold tracking-tighter md:text-5xl mb-8 uppercase text-primary">
        SEJA SINCERO
      </h2>
      <Card className="border-2 border-dashed border-primary/40 bg-card/50 backdrop-blur-sm overflow-hidden shadow-2xl">
        <CardContent className="p-8 md:p-12 space-y-6 text-lg md:text-xl">
          <p className="text-foreground font-bold text-2xl">Você já tentou ganhar dinheiro online antes?</p>
          <p className="text-muted-foreground italic text-2xl">Provavelmente sim.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left py-4">
            <ul className="space-y-3 text-muted-foreground font-medium">
              <li className="flex items-center gap-2">• Assistiu vídeos</li>
              <li className="flex items-center gap-2">• Entrou em grupos</li>
              <li className="flex items-center gap-2">• Comprou cursos</li>
            </ul>
            <ul className="space-y-3 text-muted-foreground font-medium">
              <li className="flex items-center gap-2">• Salvou conteúdos</li>
              <li className="flex items-center gap-2">• Planejou começar</li>
              <li className="flex items-center gap-2">• Criou expectativas</li>
            </ul>
          </div>

          <div className="pt-8 border-t border-primary/20 space-y-4">
            <p className="text-foreground">Mas semanas depois...</p>
            <p className="text-3xl font-black text-foreground uppercase tracking-tighter">Continuava exatamente no mesmo lugar.</p>
            <p className="mt-4 text-primary font-black uppercase text-2xl">
              Porque informação nunca foi o problema. <br/>
              O problema era não ter um caminho claro.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
