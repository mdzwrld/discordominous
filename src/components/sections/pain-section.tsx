export function PainSection() {
  return (
    <section className="container mx-auto max-w-4xl px-4 md:px-6">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold tracking-tighter md:text-5xl">
          O MOTIVO DE VOCÊ AINDA NÃO TER ESTABILIDADE
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Você está jogando no terreno dos outros.
        </p>
        <div className="mt-8 space-y-4 text-lg md:text-xl">
          <p>
            Instagram muda regra. TikTok derruba alcance. Facebook encarece
            tráfego.
          </p>
          <p className="font-semibold text-foreground">
            Você acorda sem saber se vai vender.
          </p>
          <p className="rounded-xl border border-destructive/50 bg-destructive/10 p-4 text-2xl font-bold text-destructive-foreground">
            Isso não é negócio. Isso é vício em dopamina.
          </p>
        </div>
        <p className="mt-8 text-lg text-muted-foreground md:text-xl">
          E enquanto você vive de pico…
          <br />
          <span className="font-semibold text-foreground">
            Tem gente construindo renda previsível em ambiente fechado.
            Silenciosamente.
          </span>
        </p>
      </div>
    </section>
  )
}
