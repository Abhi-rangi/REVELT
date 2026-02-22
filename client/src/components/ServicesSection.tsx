/*
 * REVELT SERVICES SECTION
 * Design: Warm Clinical Luxury — frosted glass cards on warm white background
 * Layout: 3-column grid (2 on tablet, 1 on mobile)
 * Animation: Fan-in from center on scroll entry
 */

import { useEffect, useRef, useState } from "react";
import { Zap, RefreshCw, CalendarCheck, BellRing, UserCheck } from "lucide-react";

const services = [
  {
    icon: <Zap size={28} />,
    title: "Instant Lead Response",
    desc: "AI responds to every call, text, DM, and web inquiry within seconds — 24 hours a day, 7 days a week. No lead goes cold.",
    highlight: "< 30 sec response time",
    color: "var(--blue)",
    lightColor: "var(--light-gray)",
  },
  {
    icon: <RefreshCw size={28} />,
    title: "Automated Follow-Ups",
    desc: "Smart multi-step sequences nurture every lead until they book. Personalized messages that feel human, sent at the perfect time.",
    highlight: "3–5x more conversions",
    color: "var(--teal)",
    lightColor: "var(--light-gray)",
  },
  {
    icon: <CalendarCheck size={28} />,
    title: "Appointment Booking Automation",
    desc: "Patients self-book directly into your calendar through AI-guided conversations. No back-and-forth, no phone tag.",
    highlight: "Zero scheduling friction",
    color: "var(--teal)",
    lightColor: "var(--off-white)",
  },
  {
    icon: <BellRing size={28} />,
    title: "No-Show Reduction",
    desc: "One-click confirmation reminders sent via SMS and email. Patients confirm, reschedule, or cancel — all automatically.",
    highlight: "Up to 60% fewer no-shows",
    color: "var(--teal)",
    lightColor: "var(--light-gray)",
  },
  {
    icon: <UserCheck size={28} />,
    title: "Patient Reactivation",
    desc: "Automatically re-engage dormant patients with personalized outreach. Bring back lapsed clients without lifting a finger.",
    highlight: "Reactivate past patients",
    color: "var(--blue)",
    lightColor: "var(--light-gray)",
  },
];

function useInView(threshold = 0.1) {
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

export default function ServicesSection() {
  const { ref, inView } = useInView(0.05);

  return (
    <section
      id="services"
      className="py-20 lg:py-28"
      style={{ background: "var(--off-white)" }}
    >
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--teal)", fontFamily: "var(--font-body)" }}
          >
            Core Services
          </span>
          <h2
            className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-5"
            style={{ fontFamily: "var(--font-headline)", color: "var(--navy)" }}
          >
            Everything your med spa needs to{" "}
            <span className="italic" style={{ color: "var(--teal)" }}>
              fill every slot
            </span>
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--navy-light)", fontFamily: "var(--font-body)" }}
          >
            Revelt is a complete AI automation system — not just a chatbot. Every touchpoint in the patient journey is handled automatically.
          </p>
        </div>

        {/* Services grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const isLast = i === services.length - 1;
            // 5 items in 3-col grid: last item should be centered
            const lastItemClass = isLast && services.length % 3 === 2
              ? "sm:col-span-2 lg:col-span-1 lg:col-start-2"
              : "";

            return (
              <div
                key={service.title}
                className={`group relative p-7 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${lastItemClass}`}
                style={{
                  background: "white",
                  borderColor: "var(--border)",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0) scale(1)" : "translateY(20px) scale(0.97)",
                  transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{
                    background: service.lightColor,
                    color: service.color,
                  }}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-headline)", color: "var(--navy)" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}
                >
                  {service.desc}
                </p>

                {/* Highlight badge */}
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{
                    background: service.lightColor,
                    color: service.color,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: service.color }} />
                  {service.highlight}
                </div>

                {/* Hover border accent */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ border: `2px solid ${service.lightColor}` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
