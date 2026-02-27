import { Navbar } from "@/components/layout/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { PainSection } from "@/components/sections/pain-section"
import { TruthSection } from "@/components/sections/truth-section"
import { ComparisonSection } from "@/components/sections/comparison-section"
import { ProofSection } from "@/components/sections/proof-section"
import { MethodSection } from "@/components/sections/method-section"
import { IncludedSection } from "@/components/sections/included-section"
import { AiToolSection } from "@/components/sections/ai-tool-section"
import { WarningSection } from "@/components/sections/warning-section"
import { OfferSection } from "@/components/sections/offer-section"
import { GuaranteeSection } from "@/components/sections/guarantee-section"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <HeroSection />

      <Tabs defaultValue="problema" className="w-full py-16 md:py-24">
        <TabsList className="grid w-full grid-cols-2 container mx-auto h-auto max-w-5xl md:grid-cols-5">
          <TabsTrigger value="problema" className="text-xs md:text-sm">O Problema</TabsTrigger>
          <TabsTrigger value="solucao" className="text-xs md:text-sm">A Solução</TabsTrigger>
          <TabsTrigger value="metodo" className="text-xs md:text-sm">O Método</TabsTrigger>
          <TabsTrigger value="ferramenta" className="text-xs md:text-sm">Sua Estratégia</TabsTrigger>
          <TabsTrigger value="oferta" id="offer" className="text-xs md:text-sm">Sua Vaga</TabsTrigger>
        </TabsList>
        
        <div className="mt-8 md:mt-12">
            <TabsContent value="problema">
                <PainSection />
            </TabsContent>
            <TabsContent value="solucao">
                <div className="flex w-full flex-col items-center space-y-16 md:space-y-24">
                    <TruthSection />
                    <ComparisonSection />
                    <ProofSection />
                </div>
            </TabsContent>
            <TabsContent value="metodo">
                <div className="flex w-full flex-col items-center space-y-16 md:space-y-24">
                    <MethodSection />
                    <IncludedSection />
                </div>
            </TabsContent>
            <TabsContent value="ferramenta">
                 <AiToolSection />
            </TabsContent>
            <TabsContent value="oferta">
                <div className="flex w-full flex-col items-center space-y-16 md:space-y-24">
                    <OfferSection />
                    <WarningSection />
                    <GuaranteeSection />
                </div>
            </TabsContent>
        </div>
      </Tabs>
      
      <footer className="container mx-auto py-16 text-center text-muted-foreground">
        <p>
          Quem depende de algoritmo pede permissão.
        </p>
        <p className="font-bold text-foreground">
          Quem constrói comunidade manda no próprio jogo.
        </p>
      </footer>
    </main>
  )
}
