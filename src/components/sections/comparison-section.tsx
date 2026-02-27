import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { XCircle, CheckCircle2 } from "lucide-react"

export function ComparisonSection() {
  return (
    <section className="container mx-auto max-w-5xl px-4 md:px-6">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold tracking-tighter md:text-5xl">
          A DIFERENÇA ENTRE AMADOR E OPERADOR
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card className="border-destructive/30 bg-destructive/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl font-bold text-destructive-foreground">
              <XCircle className="h-8 w-8 text-destructive" />
              Amador
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li className="flex items-start gap-3">
                <span>• Cria servidor e joga link na bio</span>
              </li>
              <li className="flex items-start gap-3">
                <span>• Espera as pessoas comprarem</span>
              </li>
              <li className="flex items-start gap-3">
                <span>• Some em 2 meses</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="border-primary/30 bg-primary/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl font-bold text-primary-foreground">
              <CheckCircle2 className="h-8 w-8 text-primary" />
              Operador
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-lg text-foreground">
              <li className="flex items-start gap-3">
                <span>• Constrói ambiente fechado</span>
              </li>
              <li className="flex items-start gap-3">
                <span>• Cria hierarquia</span>
              </li>
              <li className="flex items-start gap-3">
                <span>• Posiciona oferta interna</span>
              </li>
              <li className="flex items-start gap-3">
                <span>• Gera recorrência</span>
              </li>
               <li className="flex items-start gap-3">
                <span>• Escala comunidade</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
