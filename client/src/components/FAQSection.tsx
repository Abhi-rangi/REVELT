/*
 * REVELT FAQ SECTION
 * Design: Warm Clinical Luxury — accordion Q&A, matches site palette
 * Placement: After Services, before Final CTA
 * Includes: "Ready to See It in Action?" CTA at bottom
 */

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs: { question: string; answer: React.ReactNode }[] = [
  {
    question: "How quickly can I get started?",
    answer: (
      <>
        Most med spas are fully set up within 7–14 days.
        <br />
        Your total time commitment is under 60 minutes.
        <br />
        We handle setup, testing, and optimization for you.
      </>
    ),
  },
  {
    question: "Do I need to change my current systems?",
    answer: (
      <>
        No.
        <br />
        Revelt works with your existing phone system, website, and booking software.
        <br />
        We integrate everything for you.
      </>
    ),
  },
  {
    question: "Is this complicated for my staff?",
    answer: (
      <>
        Not at all.
        <br />
        Your staff doesn't need to learn new software.
        <br />
        Everything runs in the background.
      </>
    ),
  },
  {
    question: "Will this replace my front desk staff?",
    answer: (
      <>
        No.
        <br />
        Revelt supports your team — it doesn't replace them.
        <br />
        We handle repetitive tasks so your staff can focus on patients.
      </>
    ),
  },
  {
    question: "What happens if someone wants to talk to a real person?",
    answer: (
      <>
        They still can.
        <br />
        Revelt routes patients to your staff whenever needed.
        <br />
        You stay in control.
      </>
    ),
  },
  {
    question: "How much does it cost?",
    answer: (
      <>
        Pricing depends on your volume and needs.
        <br />
        Most clients start around $399/month— no surprises.
      </>
    ),
  },
  {
    question: "Is there a contract?",
    answer: (
      <>
        No long-term contracts.
        <br />
        You can cancel anytime.
        <br />
        We earn your business every month.
      </>
    ),
  },
  {
    question: "How soon will I see results?",
    answer: (
      <>
        Most clients see improved response times immediately.
        <br />
        Many see more bookings within the first 30 days.
      </>
    ),
  },
  {
    question: "What if it doesn't work for my spa?",
    answer: (
      <>
        We'll adjust it.
        <br />
        Every system is customized.
        <br />
        If it's not improving your response and bookings, we fix it.
      </>
    ),
  },
  {
    question: "Is my data secure?",
    answer: (
      <>
        Yes.
        <br />
        We use secure, industry-standard systems to protect your data and communications.
      </>
    ),
  },
  {
    question: "Can this work for multiple locations?",
    answer: (
      <>
        Yes.
        <br />
        Revelt supports multi-location med spas.
        <br />
        We can manage everything from one dashboard.
      </>
    ),
  },
  {
    question: "What does onboarding look like?",
    answer: (
      <>
        <span className="font-medium">1.</span> 20-minute demo
        <br />
        <span className="font-medium">2.</span> 25-minute setup call
        <br />
        <span className="font-medium">3.</span> 15-minute go-live review
        <br />
        That's it.
      </>
    ),
  },
  {
    question: "Do I need technical skills?",
    answer: (
      <>
        No.
        <br />
        If you can use email and text, you're good.
        <br />
        We handle the rest.
      </>
    ),
  },
  {
    question: "Can I pause or cancel anytime?",
    answer: (
      <>
        Yes.
        <br />
        No lock-in.
        <br />
        No hidden fees.
        <br />
        No pressure.
      </>
    ),
  },
  {
    question: "How is Revelt different from marketing agencies?",
    answer: (
      <>
        Agencies focus on ads and traffic.
        <br />
        Revelt focuses on conversions and bookings.
        <br />
        We help you make more money from leads you already have.
      </>
    ),
  },
];

export default function FAQSection() {
  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="faq"
      className="py-20 lg:py-28"
      style={{ background: "oklch(0.99 0.005 80)" }}
    >
      <div className="container">
        <h2
          className="text-center text-xl sm:text-2xl font-semibold tracking-wide mb-2"
          style={{
            fontFamily: "var(--font-subheadline)",
            color: "var(--navy)",
            letterSpacing: "0.08em",
          }}
        >
          FREQUENTLY ASKED QUESTIONS — REVELT
        </h2>
        <div
          className="mx-auto h-0.5 w-16 mb-12"
          style={{ background: "var(--teal)" }}
        />

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-0">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-oklch(0.92 0.01 80)"
              >
                <AccordionTrigger
                  className="text-left py-5 hover:no-underline"
                  style={{
                    fontFamily: "var(--font-headline)",
                    color: "var(--navy)",
                    fontSize: "1.05rem",
                  }}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  className="text-oklch(0.45 0.02 250)"
                  style={{ fontFamily: "var(--font-body)", lineHeight: 1.7 }}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Ready to See It in Action CTA */}
          <div
            className="mt-16 text-center p-8 rounded-2xl"
            style={{
              background: "oklch(1 0 0 / 0.6)",
              border: "1px solid oklch(0.92 0.02 80)",
            }}
          >
            <h3
              className="text-xl sm:text-2xl font-bold mb-2"
              style={{ fontFamily: "var(--font-headline)", color: "var(--navy)" }}
            >
              Ready to See It in Action?
            </h3>
            <p
              className="text-oklch(0.45 0.02 250) mb-6 max-w-md mx-auto"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Book your free demo and see how Revelt works for your med spa.
            </p>
            <Button
              size="lg"
              onClick={scrollToDemo}
              className="font-semibold px-8"
              style={{
                background: "var(--gradient-blue-teal)",
                color: "var(--off-white)",
                fontFamily: "var(--font-body)",
              }}
            >
              Schedule Your Free Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
