/*
 * REVELT STATS SECTION
 * Design: Warm Clinical Luxury — dark slate background for contrast
 * Layout: 4-column stat grid with animated counters
 * Animation: Count-up on scroll entry
 */

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 94, suffix: "%", label: "Average Booking Rate", sub: "vs. 62% industry average" },
  { value: 30, suffix: "s", label: "Average Response Time", sub: "Across all channels" },
  { value: 60, suffix: "%", label: "Fewer No-Shows", sub: "With automated reminders" },
  { value: 1, suffix: "hr", label: "Total Setup Time", sub: "" },
];

function useCountUp(target: number, duration = 1800, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

function StatCard({ stat, index, active }: { stat: typeof stats[0]; index: number; active: boolean }) {
  const count = useCountUp(stat.value, 1600, active);

  return (
    <div
      className="text-center p-8 rounded-2xl"
      style={{
        background: "var(--navy)",
        border: "1px solid oklch(1 0 0 / 0.08)",
        opacity: active ? 1 : 0,
        transform: active ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`,
      }}
    >
      <div
        className="text-5xl lg:text-6xl font-bold mb-2 tabular-nums"
        style={{
          fontFamily: "var(--font-headline)",
          color: "var(--teal)",
        }}
      >
        {count}
        <span style={{ color: "var(--teal)" }}>{stat.suffix}</span>
      </div>
      <p
        className="text-base font-semibold mb-1"
        style={{ color: "white", fontFamily: "var(--font-body)" }}
      >
        {stat.label}
      </p>
      <p
        className="text-xs"
        style={{ color: "var(--light-gray)", fontFamily: "var(--font-body)" }}
      >
        {stat.sub}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: "var(--navy)" }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 20% 50%, oklch(0.55 0.12 195 / 0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, oklch(0.50 0.15 240 / 0.15) 0%, transparent 60%)",
        }}
      />

      <div className="container relative z-10">
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--teal)", fontFamily: "var(--font-body)" }}
          >
            Proven Results
          </span>
          <h2
            className="text-3xl lg:text-4xl font-bold"
            style={{ fontFamily: "var(--font-headline)", color: "white" }}
          >
            Numbers that speak for themselves
          </h2>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
