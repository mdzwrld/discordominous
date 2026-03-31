export function TruthSection() {
  return (
    <section id="truth-section" className="container mx-auto max-w-4xl scroll-mt-20 px-4 md:px-6">
      <div className="text-center">
        <p className="mx-auto mt-6 max-w-2xl text-2xl font-bold md:text-3xl">
          O dinheiro não está na audiência aberta que você não controla.
          <br />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Está no ambiente que você domina.
          </span>
        </p>
        <div className="mt-8 space-y-4 text-lg md:text-xl">
          <p className="text-muted-foreground">
            Quem controla o ambiente, controla a atenção.
            <br />
            <span className="font-semibold text-foreground">
              Quem controla a atenção, controla o dinheiro.
            </span>
          </p>
          <p className="text-muted-foreground">
            Discord é só a ferramenta.{" "}
            <span className="font-semibold text-foreground">
              O que gera dinheiro é a estrutura.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
