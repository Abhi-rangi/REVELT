/*
 * REVELT TIMELINE SECTION — "The 60-Minute Setup"
 * Design: REVELT — horizontal 3-step timeline on blue-teal gradient background
 * Layout: Horizontal connector line with step cards below
 * Animation: Sequential reveal on scroll entry
 */

import { useEffect, useRef, useState } from "react";
import { Video, Settings2, Rocket } from "lucide-react";

const steps = [
  {
    day: "Day 1",
    time: "20 min",
    title: "Discovery Demo",
    desc: "A quick 20-minute call to understand your med spa's workflow, goals, and current booking process. No pressure, no obligation.",
    icon: <Video size={24} />,
    color: "var(--blue)",
    lightColor: "var(--light-gray)",
  },
  {
    day: "Day 2",
    time: "25 min",
    title: "Custom Setup",
    desc: "We configure your AI system — trained on your services, pricing, and tone. Your brand, your voice, fully automated.",
    icon: <Settings2 size={24} />,
    color: "var(--teal)",
    lightColor: "var(--light-gray)",
  },
  {
    day: "Week 1",
    time: "15 min",
    title: "Go Live",
    desc: "Your AI goes live across all channels. A final 15-minute review ensures everything runs perfectly. Then watch the bookings roll in.",
    icon: <Rocket size={24} />,
    color: "var(--teal)",
    lightColor: "var(--off-white)",
  },
];

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function TimelineSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: "var(--off-white)" }}
    >
      {/* Decorative background elements */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, oklch(0.90 0.04 210 / 0.5) 0%, transparent 70%)",
          transform: "translate(40%, -40%)",
        }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--teal)", fontFamily: "var(--font-body)" }}
          >
            SIMPLE ONBOARDING
          </span>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-3 lg:mb-5"
            style={{ fontFamily: "var(--font-headline)", color: "var(--navy)" }}
          >
            Up and running in{" "}
            <span className="italic" style={{ color: "var(--teal)" }}>
              under 60 minutes
            </span>{" "}
          </h2>
          <p
            className="text-sm sm:text-base lg:text-lg leading-relaxed"
            style={{ color: "var(--navy-light)", fontFamily: "var(--font-body)" }}
          >
            We handle all the heavy lifting. Your total time investment is less than one hour — spread across three simple steps.
          </p>
        </div>

        {/* Timeline — extra left padding on mobile so circle + badge aren’t clipped */}
        <div ref={ref} className="relative pl-14 lg:pl-0">
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-6 relative z-10">
            {steps.map((step, i) => (
            <div
              key={step.title}
              className="flex flex-col lg:items-start text-left pl-8 lg:pl-0 lg:text-left relative"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${i * 0.15}s, transform 0.5s ease ${i * 0.15}s`,
              }}
            >
              {/* Step circle */}
              <div className="absolute -left-8 lg:relative lg:mb-6 lg:flex lg:flex-col lg:items-center">
                {/* Day badge — above the circle */}
                <div
                  className="mb-1.5 lg:mb-2 px-2 lg:px-2.5 py-0.5 lg:py-1 rounded-full text-xs font-bold shadow-sm"
                  style={{
                    background: step.color,
                    color: "white",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {step.day}
                </div>
                <div
                  className="w-20 h-20 lg:w-[104px] lg:h-[104px] rounded-full flex flex-col items-center justify-center shadow-lg shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${step.lightColor}, white)`,
                    border: `2px solid ${step.color}`,
                  }}
                >
                  <div style={{ color: step.color, fontSize: "18px" }}>{step.icon}</div>
                  <span
                    className="text-xs font-bold mt-0.5 lg:mt-1"
                    style={{ color: step.color, fontFamily: "var(--font-body)" }}
                  >
                    {step.time}
                  </span>
                </div>
              </div>

              {/* Card */}
              <div
                className="w-full p-4 lg:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                style={{
                  background: "white",
                  border: `1px solid ${step.lightColor}`,
                }}
              >
                <h3
                  className="text-base lg:text-xl font-bold mb-1.5 lg:mb-2"
                  style={{ fontFamily: "var(--font-headline)", color: "var(--navy)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-xs lg:text-sm leading-relaxed"
                  style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
            ))}
          </div>
        </div>

        {/* Total time callout */}
        <div className="mt-10 lg:mt-12 text-center">
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-sm"
            style={{
              background: "white",
              border: "1px solid var(--border)",
            }}
          >
            <span className="text-xl sm:text-2xl">⏱️</span>
            <span
              className="text-xs sm:text-sm font-semibold text-center"
              style={{ color: "var(--navy)", fontFamily: "var(--font-body)" }}
            >
              Total client time required:{" "}
              <strong style={{ color: "var(--teal)" }}>under 60 minutes</strong>
              {" "}— we handle everything else.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
