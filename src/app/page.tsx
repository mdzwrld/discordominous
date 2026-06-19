import { HeroSection } from "@/components/sections/hero-section"
import { EmotionalHeroSection } from "@/components/sections/emotional-hero-section"
import { TruthSection } from "@/components/sections/truth-section"
import { StuckSection } from "@/components/sections/stuck-section"
import { ComparisonSection } from "@/components/sections/comparison-section"
import { ProofSection } from "@/components/sections/proof-section"
import { TruthNoOneTellsSection } from "@/components/sections/truth-no-one-tells-section"
import { MethodSection } from "@/components/sections/method-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { NoNeedToInventSection } from "@/components/sections/no-need-to-invent-section"
import { FornecedoresSection } from "@/components/sections/fornecedores-section"
import { IncludedSection } from "@/components/sections/included-section"
import { SixMonthsSection } from "@/components/sections/six-months-section"
import { OfferSection } from "@/components/sections/offer-section"
import { WarningSection } from "@/components/sections/warning-section"
import { FinalQuestionSection } from "@/components/sections/final-question-section"
import { GuaranteeSection } from "@/components/sections/guarantee-section"
import { SocialProofSection } from "@/components/sections/social-proof-section"
import { FadeIn } from "@/components/fade-in"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background text-foreground">
      <HeroSection />
      
      <div className="flex w-full flex-col items-center space-y-24 py-16 md:space-y-32 md:py-24">
        <FadeIn>
          <EmotionalHeroSection />
        </FadeIn>

        <FadeIn>
          <TruthSection />
        </FadeIn>

        <FadeIn>
          <StuckSection />
        </FadeIn>

        <FadeIn>
          <ComparisonSection />
        </FadeIn>

        <FadeIn>
          <ProofSection />
        </FadeIn>

        <FadeIn>
          <TruthNoOneTellsSection />
        </FadeIn>

        <FadeIn>
          <MethodSection />
        </FadeIn>

        <FadeIn>
          <HowItWorksSection />
        </FadeIn>

        <FadeIn>
          <NoNeedToInventSection />
        </FadeIn>

        <FadeIn>
          <FornecedoresSection />
        </FadeIn>

        <FadeIn>
          <SocialProofSection />
        </FadeIn>

        <FadeIn>
          <IncludedSection />
        </FadeIn>

        <FadeIn>
          <SixMonthsSection />
        </FadeIn>

        <FadeIn>
          <OfferSection />
        </FadeIn>

        <FadeIn>
          <WarningSection />
        </FadeIn>

        <FadeIn>
          <FinalQuestionSection />
        </FadeIn>

        <FadeIn>
          <GuaranteeSection />
        </FadeIn>
      </div>

      <footer className="container mx-auto py-16 text-center text-muted-foreground">
        <p>Quem depende de algoritmo pede permissão.</p>
        <p className="font-bold text-foreground">
          Quem constrói comunidade manda no próprio jogo.
        </p>
      </footer>
    </main>
  )
}
