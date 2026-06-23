import { HeroSection } from "@/components/sections/hero-section"
import { EmotionalHeroSection } from "@/components/sections/emotional-hero-section"
import { QuestionSection } from "@/components/sections/question-section"
import { WhileReadingSection } from "@/components/sections/while-reading-section"
import { DreamSection } from "@/components/sections/dream-section"
import { ProofSection } from "@/components/sections/proof-section"
import { TruthNoOneTellsSection } from "@/components/sections/truth-no-one-tells-section"
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
    <main className="flex min-h-screen flex-col items-center bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      
      <div className="flex w-full flex-col items-center space-y-24 py-16 md:space-y-48 md:py-24">
        <FadeIn>
          <EmotionalHeroSection />
        </FadeIn>

        <FadeIn>
          <QuestionSection />
        </FadeIn>

        <FadeIn>
          <WhileReadingSection />
        </FadeIn>

        <FadeIn>
          <DreamSection />
        </FadeIn>

        <FadeIn>
          <ProofSection />
        </FadeIn>

        <FadeIn>
          <SocialProofSection />
        </FadeIn>

        <FadeIn>
          <TruthNoOneTellsSection />
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
          <FinalQuestionSection />
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
          <GuaranteeSection />
        </FadeIn>
      </div>

      <footer className="container mx-auto px-4 py-16 text-center text-muted-foreground">
        <p>Pare de ser um espectador do próprio tempo.</p>
        <p className="font-bold text-foreground">
          Assuma o controle da sua máquina e mude o jogo.
        </p>
      </footer>
    </main>
  )
}
