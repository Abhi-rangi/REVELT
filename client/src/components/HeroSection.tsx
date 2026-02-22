/*
 * REVELT HERO SECTION
 * Design: Asymmetric split — left-heavy headline, right floating dashboard mockup
 * Background: Animated gradient mesh — off-white, light gray, blue-teal tint
 * Typography: Manrope (headline), DM Sans (subheadline), Inter (body)
 * Animation: Fade-up entrance, gentle float on mockup image
 */

import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Calendar } from "lucide-react";

const benefits = [
  "Instant AI responses — 24/7",
  "Automated appointment booking",
  "Zero missed calls or DMs",
  "Dramatically fewer no-shows",
];

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16 lg:pt-20"
      style={{
        background: "linear-gradient(135deg, var(--off-white) 0%, var(--light-gray) 40%, oklch(0.96 0.02 220) 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, oklch(0.92 0.04 195 / 0.4) 0%, transparent 70%)",
          transform: "translate(30%, -20%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, oklch(0.90 0.05 240 / 0.25) 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center py-12 lg:py-24">
          {/* Left: Content */}
          <div className="flex flex-col gap-5 lg:gap-7 max-w-xl">
            {/* Badge */}
            <div className="animate-fade-up">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase"
                style={{
                  background: "var(--light-gray)",
                  color: "var(--navy)",
                  fontFamily: "var(--font-body)",
                  border: "1px solid var(--blue)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                AI-Powered Med Spa Automation
              </span>
            </div>

            {/* Headline */}
            <div className="animate-fade-up-delay-1">
              <h1
                className="text-3xl sm:text-4xl lg:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.15] tracking-tight"
                style={{
                  fontFamily: "var(--font-headline)",
                  color: "var(--navy)",
                }}
              >
                <span
                  className="font-extrabold tracking-tight"
                  style={{ color: "var(--teal)", letterSpacing: "0.02em" }}
                  aria-label="A I"
                >
                  AI
                </span>
                -powered systems that{" "}
                <span
                  className="italic"
                  style={{ color: "var(--teal)" }}
                >
                  capture, convert,
                </span>{" "}
                and book more patients automatically.
              </h1>
            </div>

            {/* Sub-headline */}
            <div className="animate-fade-up-delay-2">
              <p
                className="text-base sm:text-lg lg:text-xl leading-relaxed"
                style={{
                  color: "var(--navy-light)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Ensure your med spa never misses another opportunity. Revelt handles every inquiry, follow-up, and booking — so your team can focus on delivering exceptional care.
              </p>
            </div>

            {/* Benefits list */}
            <div className="animate-fade-up-delay-3 flex flex-col gap-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2
                    size={18}
                    className="shrink-0"
                    style={{ color: "var(--teal)" }}
                  />
                  <span
                    className="text-xs sm:text-sm font-medium"
                    style={{
                      color: "var(--navy)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="animate-fade-up-delay-4 flex flex-col sm:flex-row gap-2.5 pt-1">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:opacity-90 shadow-md pulse-cta font-semibold text-sm sm:text-base px-5 sm:px-7 h-11 sm:h-12"
                style={{ fontFamily: "var(--font-body)" }}
                asChild
              >
                <a href="#signup" className="flex items-center gap-2">
                  Get More Bookings
                  <ArrowRight size={14} className="hidden sm:inline" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 font-semibold text-sm sm:text-base px-5 sm:px-7 h-11 sm:h-12 bg-white/80 hover:bg-white border-blue text-navy"
                style={{ fontFamily: "var(--font-body)" }}
                asChild
              >
                <a href="#demo" className="flex items-center gap-2">
                  <Calendar size={14} className="hidden sm:inline" />
                  Book a Demo
                </a>
              </Button>
            </div>

            {/* Social proof micro-text */}
            <p
              className="text-xs animate-fade-up-delay-4 text-muted-foreground"
              style={{ fontFamily: "var(--font-body)" }}
            >
              No credit card required &nbsp;·&nbsp; Setup in under 60 minutes &nbsp;·&nbsp; Cancel anytime
            </p>
          </div>

          {/* Right: Dashboard mockup */}
          <div className="relative flex justify-center lg:justify-end animate-fade-up-delay-2 mt-6 lg:mt-0">
            {/* Floating card */}
            <div className="relative w-full max-w-[560px]">
              {/* Glow behind mockup */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "radial-gradient(ellipse at center, oklch(0.88 0.05 210 / 0.5) 0%, transparent 70%)",
                  transform: "scale(1.1) translateY(5%)",
                  filter: "blur(24px)",
                }}
              />

              {/* Dashboard mockup */}
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  boxShadow: "0 32px 64px rgba(0,0,0,0.12), 0 8px 24px rgba(14,165,233,0.15)",
                  animation: "float 6s ease-in-out infinite",
                }}
              >
                <img
                  src="/dashboard.png"
                  alt="Revelt AI booking dashboard — appointment calendar and AI chat assistant"
                  className="w-full h-auto"
                />
              </div>

              {/* Floating stat badge — top left */}
              <div
                className="absolute top-2 left-2 sm:top-4 sm:-left-4 glass-card rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 shadow-lg"
                style={{ animation: "float 6s ease-in-out 1s infinite" }}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-6 sm:w-8 h-6 sm:h-8 rounded-lg flex items-center justify-center shrink-0 bg-light-gray"
                  >
                    <span className="text-sm sm:text-base">📅</span>
                  </div>
                  <div>
                    <p
                      className="text-xs font-medium text-muted-foreground"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      This Week
                    </p>
                    <p
                      className="text-xs sm:text-sm font-bold text-navy"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      +23 Bookings
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating stat badge — bottom right */}
              <div
                className="absolute bottom-2 right-2 sm:bottom-4 sm:-right-4 glass-card rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 shadow-lg"
                style={{ animation: "float 6s ease-in-out 2s infinite" }}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-6 sm:w-8 h-6 sm:h-8 rounded-lg flex items-center justify-center shrink-0 bg-light-gray"
                  >
                    <span className="text-sm sm:text-base">🤖</span>
                  </div>
                  <div>
                    <p
                      className="text-xs font-medium text-muted-foreground"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Response Time
                    </p>
                    <p
                      className="text-xs sm:text-sm font-bold text-teal"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      &lt; 30 seconds
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 wave-divider">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 lg:h-20"
          style={{ fill: "var(--off-white)" }}
        >
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}
