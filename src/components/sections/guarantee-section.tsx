import { ShieldCheck } from "lucide-react"

export function GuaranteeSection() {
  return (
    <section className="container mx-auto max-w-3xl px-4 md:px-6">
      <div className="flex flex-col items-center gap-6 rounded-xl border border-dashed border-border p-8 text-center md:flex-row md:text-left">
        <div className="flex-shrink-0">
          <ShieldCheck className="h-20 w-20 text-primary md:h-24 md:w-24" />
        </div>
        <div>
          <h3 className="text-3xl font-bold">GARANTIA</h3>
          <p className="mt-2 text-lg text-muted-foreground">
            7 dias para testar. Se não fizer sentido, você sai. Simples.
          </p>
        </div>
      </div>
    </section>
  )
}
