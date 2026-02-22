/*
 * REVELT PROBLEM/SOLUTION SECTION
 * Design: Warm Clinical Luxury — two-column pain points + "The Revelt Fix"
 * Includes: Before vs After comparison table with sequential reveal animation
 * Background: Warm white with subtle grain
 */

import { useEffect, useRef, useState } from "react";
import { XCircle, CheckCircle2, AlertTriangle, TrendingDown, PhoneMissed, MessageSquareOff } from "lucide-react";

const painPoints = [
  {
    icon: <PhoneMissed size={22} />,
    title: "Unanswered Calls",
    desc: "Every missed call is a lost patient. Studies show 85% of callers who can't reach you will not call back.",
  },
  {
    icon: <MessageSquareOff size={22} />,
    title: "Ignored DMs & Inquiries",
    desc: "Potential patients message on Instagram, Facebook, and SMS — and hear nothing back for hours or days.",
  },
  {
    icon: <TrendingDown size={22} />,
    title: "Overwhelmed Staff",
    desc: "Your team juggles treatments, phones, and admin simultaneously. Something always slips through the cracks.",
  },
  {
    icon: <AlertTriangle size={22} />,
    title: "No-Shows & Empty Slots",
    desc: "Without automated reminders and confirmations, no-show rates climb — costing you hundreds per week.",
  },
];

const comparisonRows = [
  {
    category: "Incoming Calls",
    before: "Missed calls, voicemails ignored",
    after: "Instant AI response, booking confirmed",
  },
  {
    category: "Social DMs",
    before: "Hours or days without reply",
    after: "Automated reply in under 30 seconds",
  },
  {
    category: "Lead Follow-Up",
    before: "Manual, inconsistent, forgotten",
    after: "Smart automated sequences, every time",
  },
  {
    category: "Appointment Slots",
    before: "Empty slots from no-shows",
    after: "Full calendar with confirmation reminders",
  },
  {
    category: "Staff Workload",
    before: "Overwhelmed, burning out",
    after: "Focused on patient care, not admin",
  },
  {
    category: "Revenue",
    before: "Leaking from every missed opportunity",
    after: "Captured, converted, and booked",
  },
];

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function ProblemSolutionSection() {
  const { ref: tableRef, inView: tableInView } = useInView(0.1);
  const { ref: painRef, inView: painInView } = useInView(0.1);

  return (
    <section id="results" className="py-16 lg:py-24" style={{ background: "var(--off-white)" }}>
      <div className="container">
        <header className="max-w-2xl mb-12 lg:mb-14">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--teal)", fontFamily: "var(--font-body)" }}
          >
            The Problem
          </span>
          <h2
            className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4"
            style={{ fontFamily: "var(--font-headline)", color: "var(--navy)" }}
          >
            Your med spa is losing revenue{" "}
            <span className="italic" style={{ color: "var(--teal)" }}>
              every single day
            </span>
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--navy-light)", fontFamily: "var(--font-body)" }}
          >
            Overworked staff, missed calls, and slow follow-ups are silently draining your bookings. The patients are out there — they're just not hearing back from you fast enough.
          </p>
        </header>

        <div
          ref={painRef}
          className="grid sm:grid-cols-2 gap-4 sm:gap-5 max-w-4xl mb-14 lg:mb-16"
        >
          {painPoints.map((point, i) => (
            <div
              key={point.title}
              className="p-5 rounded-2xl border transition-all duration-300 hover:shadow-md"
              style={{
                background: "white",
                borderColor: "var(--border)",
                opacity: painInView ? 1 : 0,
                transform: painInView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                style={{ background: "oklch(0.97 0.015 27)", color: "oklch(0.55 0.18 27)" }}
              >
                {point.icon}
              </div>
              <h3
                className="font-bold text-sm mb-1.5"
                style={{ color: "var(--navy)", fontFamily: "var(--font-body)" }}
              >
                {point.title}
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}
              >
                {point.desc}
              </p>
            </div>
          ))}
        </div>

        <div ref={tableRef}>
          <header className="text-center mb-8">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--teal)", fontFamily: "var(--font-body)" }}
            >
              Before vs. After Revelt
            </span>
            <h2
              className="text-2xl lg:text-3xl font-bold"
              style={{ fontFamily: "var(--font-headline)", color: "var(--navy)" }}
            >
              See the difference clearly
            </h2>
          </header>

          <div className="overflow-hidden rounded-2xl border shadow-sm" style={{ borderColor: "var(--border)" }}>
            <div className="grid grid-cols-3 text-sm font-bold">
              <div
                className="px-5 py-4 border-r"
                style={{
                  background: "var(--light-gray)",
                  borderColor: "var(--border)",
                  color: "var(--navy-light)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Area
              </div>
              <div
                className="px-5 py-4 border-r flex items-center gap-2"
                style={{
                  background: "oklch(0.97 0.015 27)",
                  borderColor: "var(--border)",
                  color: "oklch(0.45 0.18 27)",
                  fontFamily: "var(--font-body)",
                }}
              >
                <XCircle size={15} />
                Without Revelt
              </div>
              <div
                className="px-5 py-4 flex items-center gap-2"
                style={{
                  background: "var(--light-gray)",
                  color: "var(--teal)",
                  fontFamily: "var(--font-body)",
                }}
              >
                <CheckCircle2 size={15} />
                With Revelt
              </div>
            </div>

            {/* Table rows */}
            {comparisonRows.map((row, i) => (
              <div
                key={row.category}
                className="grid grid-cols-3 border-t text-sm"
                style={{
                  borderColor: "var(--border)",
                  opacity: tableInView ? 1 : 0,
                  transform: tableInView ? "translateX(0)" : "translateX(-20px)",
                  transition: `opacity 0.4s ease ${i * 0.08}s, transform 0.4s ease ${i * 0.08}s`,
                }}
              >
                <div
                  className="px-5 py-4 border-r font-semibold"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--navy)",
                    background: i % 2 === 0 ? "white" : "var(--off-white)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {row.category}
                </div>
                <div
                  className="px-5 py-4 border-r"
                  style={{
                    borderColor: "var(--border)",
                    color: "oklch(0.50 0.10 27)",
                    background: i % 2 === 0 ? "oklch(0.995 0.005 27)" : "oklch(0.99 0.003 27)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {row.before}
                </div>
                <div
                  className="px-5 py-4"
                  style={{
                    color: "oklch(0.38 0.08 145)",
                    background: i % 2 === 0 ? "oklch(0.97 0.015 145)" : "oklch(0.96 0.012 145)",
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                  }}
                >
                  {row.after}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
