import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { SocialProof } from "@/components/social-proof"
import { ProblemSection } from "@/components/problem-section"
import { StatsSection } from "@/components/stats-section"
import { AboutSection } from "@/components/about-section"
import { HowItWorks } from "@/components/how-it-works"
import { ServicesSection } from "@/components/services-section"
import { FaqSection } from "@/components/faq-section"
import { DemoSection } from "@/components/demo-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SocialProof />
      <ProblemSection />
      <StatsSection />
      <AboutSection />
      <HowItWorks />
      <ServicesSection />
      <FaqSection />
      <DemoSection />
      <Footer />
    </main>
  )
}
