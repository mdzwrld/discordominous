import { HeroSection } from "@/components/sections/hero-section"
import { EmotionalHeroSection } from "@/components/sections/emotional-hero-section"
import { ProblemNotYouSection } from "@/components/sections/problem-not-you-section"
import { BeSincereSection } from "@/components/sections/be-sincere-section"
import { EvolutionSection } from "@/components/sections/evolution-section"
import { DreamSection } from "@/components/sections/dream-section"
import { ComparisonSection } from "@/components/sections/comparison-section"
import { ProofSection } from "@/components/sections/proof-section"
import { TruthNoOneTellsSection } from "@/components/sections/truth-no-one-tells-section"
import { MethodSection } from "@/components/sections/method-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { NoNeedToInventSection } from "@/components/sections/no-need-to-invent-section"
import { FornecedoresSection } from "@/components/sections/fornecedores-section"
import { IncludedSection } from "@/components/sections/included-section"
import { OneYearSection } from "@/components/sections/one-year-section"
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
      
      <div className="flex w-full flex-col items-center space-y-32 py-16 md:space-y-48 md:py-24">
        <FadeIn>
          <EmotionalHeroSection />
        </FadeIn>

        <FadeIn>
          <ProblemNotYouSection />
        </FadeIn>

        <FadeIn>
          <BeSincereSection />
        </FadeIn>

        <FadeIn>
          <EvolutionSection />
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
          <DreamSection />
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
          <OneYearSection />
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
        <p>Pare de ser um espectador do próprio tempo.</p>
        <p className="font-bold text-foreground">
          Assuma o controle da sua máquina e mude o jogo.
        </p>
      </footer>
    </main>
  )
}
