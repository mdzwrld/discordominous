import { Navbar } from "@/components/layout/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { TruthSection } from "@/components/sections/truth-section"
import { ComparisonSection } from "@/components/sections/comparison-section"
import { ProofSection } from "@/components/sections/proof-section"
import { MethodSection } from "@/components/sections/method-section"
import { IncludedSection } from "@/components/sections/included-section"
import { WarningSection } from "@/components/sections/warning-section"
import { OfferSection } from "@/components/sections/offer-section"
import { GuaranteeSection } from "@/components/sections/guarantee-section"
import { SocialProofSection } from "@/components/sections/social-proof-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <HeroSection />

      <div className="flex w-full flex-col items-center space-y-16 py-16 md:space-y-24 md:py-24">
        <TruthSection />
        <ComparisonSection />
        <ProofSection />
        <MethodSection />
        <SocialProofSection />
        <IncludedSection />
        <OfferSection />
        <WarningSection />
        <GuaranteeSection />
      </div>

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
