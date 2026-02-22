/*
 * REVELT ABOUT SECTION
 * Mission, founder story, fit, and control — demo CTA lives in Final CTA section.
 */

import { BarChart3, CheckCircle2, XCircle } from "lucide-react";

const divider = (
  <div className="flex justify-center my-10 lg:my-12">
    <div
      className="w-16 h-px"
      style={{ background: "var(--teal)", opacity: 0.4 }}
      aria-hidden
    />
  </div>
);

export default function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24" style={{ background: "var(--off-white)" }}>
      <div className="container max-w-3xl">
        <span
          className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: "var(--teal)", fontFamily: "var(--font-body)" }}
        >
          About Revelt
        </span>
        <h2
          className="text-3xl lg:text-4xl font-bold leading-tight mb-6"
          style={{ fontFamily: "var(--font-headline)", color: "var(--navy)" }}
        >
          Helping Med Spas Build Businesses That Keep Working
        </h2>
        <p
          className="text-lg leading-relaxed mb-6"
          style={{ color: "var(--navy-light)", fontFamily: "var(--font-body)" }}
        >
          Running a med spa is demanding — patients, staff, marketing, scheduling, follow-ups — all while trying to grow.
        </p>
        <p className="text-base font-semibold mb-6" style={{ color: "var(--navy)", fontFamily: "var(--font-body)" }}>
          And yet:
        </p>

        <ul className="space-y-4 mb-10">
          {[
            "Businesses that respond within 5 minutes are up to 20x more likely to convert a lead.",
            "Most service businesses lose revenue simply because they don't respond fast enough.",
            "Small business owners regularly work 50+ hours per week.",
          ].map((text, i) => (
            <li key={i} className="flex gap-3 items-start">
              <BarChart3 size={20} className="shrink-0 mt-0.5" style={{ color: "var(--teal)" }} />
              <span style={{ color: "var(--navy-light)", fontFamily: "var(--font-body)" }}>{text}</span>
            </li>
          ))}
        </ul>

        <p className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-headline)", color: "var(--navy)" }}>
          The problem isn't effort. It's capacity.
        </p>
        <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--navy-light)", fontFamily: "var(--font-body)" }}>
          Revelt was built to solve that.
        </p>

        {divider}

        <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-headline)", color: "var(--navy)" }}>
          Our Mission
        </h3>
        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--navy-light)", fontFamily: "var(--font-body)" }}>
          We help med spa owners build businesses that keep working — even when they can't. Growth shouldn't require longer hours or chasing leads; it should come from reliable systems that work in the background.
        </p>

        {divider}

        <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-headline)", color: "var(--navy)" }}>
          A Message From the Founder
        </h3>
        <div
          className="rounded-2xl p-6 lg:p-8 mb-4"
          style={{ background: "var(--light-gray)", border: "1px solid oklch(0 0 0 / 0.06)" }}
        >
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--navy-light)", fontFamily: "var(--font-body)" }}>
            Revelt was built during one of the busiest seasons of my life — raising kids, building product, no pause button. Messages get missed; follow-ups get delayed. Not because you don't care — because you're doing too much. I built Revelt so your business keeps working for you, not the other way around.
          </p>
          <p className="text-sm mt-6 font-semibold" style={{ color: "var(--teal)", fontFamily: "var(--font-body)" }}>
            — Krista Regan, Founder
          </p>
        </div>

        {divider}

        <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-headline)", color: "var(--navy)" }}>
          What One More Booking Per Day Could Mean
        </h3>
        <div
          className="rounded-2xl p-6 mb-4 text-center"
          style={{ background: "var(--navy)", border: "1px solid oklch(1 0 0 / 0.08)" }}
        >
          <p className="text-lg font-semibold mb-2" style={{ color: "white", fontFamily: "var(--font-body)" }}>
            1 extra booking per day × $250 average treatment
          </p>
          <p className="text-2xl font-bold mb-1" style={{ fontFamily: "var(--font-headline)", color: "var(--teal)" }}>
            = $7,500 per month
          </p>
          <p className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-headline)", color: "var(--teal)" }}>
            = $90,000 per year
          </p>
        </div>
        <p className="text-lg leading-relaxed" style={{ color: "var(--navy-light)", fontFamily: "var(--font-body)" }}>
          Revelt helps you capture opportunities that are already coming in — but slipping through the cracks.
        </p>

        {divider}

        <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-headline)", color: "var(--navy)" }}>
          Is Revelt Right For You?
        </h3>
        <p className="text-lg font-semibold mb-3" style={{ color: "var(--navy)", fontFamily: "var(--font-body)" }}>
          Revelt Is a Good Fit If You:
        </p>
        <ul className="space-y-2 mb-6">
          {["Want more booked appointments", "Care about patient experience", "Value your time", "Want predictable growth"].map((text, i) => (
            <li key={i} className="flex gap-3 items-center">
              <CheckCircle2 size={20} className="shrink-0" style={{ color: "var(--teal)" }} />
              <span style={{ color: "var(--navy-light)", fontFamily: "var(--font-body)" }}>{text}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg font-semibold mb-3" style={{ color: "var(--navy)", fontFamily: "var(--font-body)" }}>
          Revelt May Not Be Right If You:
        </p>
        <ul className="space-y-2 mb-4">
          {["Are comfortable missing inquiries", "Prefer manual follow-up", "Don't want to improve systems"].map((text, i) => (
            <li key={i} className="flex gap-3 items-center">
              <XCircle size={20} className="shrink-0" style={{ color: "var(--navy-light)" }} />
              <span style={{ color: "var(--navy-light)", fontFamily: "var(--font-body)" }}>{text}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg leading-relaxed" style={{ color: "var(--navy-light)", fontFamily: "var(--font-body)" }}>
          We believe in honest partnerships.
        </p>

        {divider}

        <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-headline)", color: "var(--navy)" }}>
          You're Always In Control
        </h3>
        <p className="text-lg leading-relaxed" style={{ color: "var(--navy-light)", fontFamily: "var(--font-body)" }}>
          You approve messages, control your schedule, and can pause anytime. No surprises. No lock-in.
        </p>
      </div>
    </section>
  );
}
