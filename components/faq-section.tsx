"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    q: "How quickly can I get started?",
    a: "Most med spas are fully set up within 7-14 days. Your total time commitment is under 60 minutes. We handle setup, testing, and optimization.",
  },
  {
    q: "Do I need to change my current systems?",
    a: "No. Revelt works with your existing phone system, website, and booking software. We integrate everything for you.",
  },
  {
    q: "Is this complicated for my staff?",
    a: "Not at all. Your staff doesn't need to learn new software. Everything runs in the background.",
  },
  {
    q: "Will this replace my front desk staff?",
    a: "No. Revelt supports your team — it doesn't replace them. We handle repetitive tasks so your staff can focus on patients.",
  },
  {
    q: "What happens if someone wants to talk to a real person?",
    a: "They still can. Revelt routes patients to your staff whenever needed. You stay in control.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing depends on your volume and needs. Most clients start around $399/month — no surprises.",
  },
  {
    q: "Is there a contract?",
    a: "No long-term contracts. You can cancel anytime. We earn your business every month.",
  },
  {
    q: "How soon will I see results?",
    a: "Most clients see improved response times immediately. Many see more bookings within the first 30 days.",
  },
  {
    q: "What if it doesn't work for my spa?",
    a: "We'll adjust it. Every system is customized. If it's not improving your response and bookings, we fix it.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. We use secure, industry-standard systems to protect your data and communications.",
  },
  {
    q: "Can this work for multiple locations?",
    a: "Yes. Revelt supports multi-location med spas. We can manage everything from one dashboard.",
  },
  {
    q: "What does onboarding look like?",
    a: "1) 20-minute demo · 2) 25-minute setup call · 3) 15-minute go-live review. That's it.",
  },
  {
    q: "Do I need technical skills?",
    a: "No. If you can use email and text, you're good. We handle the rest.",
  },
  {
    q: "Can I pause or cancel anytime?",
    a: "Yes. No lock-in. No hidden fees. No pressure.",
  },
  {
    q: "How is Revelt different from marketing agencies?",
    a: "Agencies focus on ads and traffic. Revelt focuses on conversions and bookings. We help you make more money from leads you already have.",
  },
]

export function FaqSection() {
  return (
    <section className="border-y border-border bg-card py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-teal">
            FAQ
          </span>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-sm font-medium text-foreground">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 sm:mt-14 rounded-xl border border-teal/20 bg-teal/5 p-6 sm:p-8 text-center">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground">
            Ready to See It in Action?
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Book your free demo and see how Revelt works for your med spa.
          </p>
          <Button className="mt-5" size="lg" asChild>
            <a href="#demo">Schedule Your Free Demo</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
