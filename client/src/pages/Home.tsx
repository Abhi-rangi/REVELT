/*
 * REVELT HOME PAGE
 * Design: Warm Clinical Luxury — Biophilic Wellness meets High-Tech SaaS
 * Sections: Navbar → Hero → SocialProof → ProblemSolution → Stats → About → Timeline → Services → FAQ → FinalCTA → Signup → Footer
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofStrip from "@/components/SocialProofStrip";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import SignupSection from "@/components/SignupSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.99 0.005 80)" }}>
      <Navbar />
      <HeroSection />
      <SocialProofStrip />
      <ProblemSolutionSection />
      <StatsSection />
      <AboutSection />
      <TimelineSection />
      <ServicesSection />
      <FAQSection />
      <FinalCTASection />
      <SignupSection />
      <Footer />
    </div>
  );
}
