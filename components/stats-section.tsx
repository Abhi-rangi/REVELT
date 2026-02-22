const stats = [
  { value: "94%", label: "Average Booking Rate", sub: "vs. 62% industry average" },
  { value: "30s", label: "Average Response Time", sub: "across all channels" },
  { value: "60%", label: "Fewer No-Shows", sub: "with automated reminders" },
  { value: "1 hr", label: "Total Setup Time", sub: "start to finish" },
]

export function StatsSection() {
  return (
    <section className="bg-navy py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-teal">
            Proven Results
          </span>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-bold tracking-tight text-background md:text-4xl text-balance">
            Numbers that speak for themselves
          </h2>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center rounded-xl border border-navy-light bg-navy-light/50 p-4 sm:p-8 text-center"
            >
              <span className="font-serif text-3xl sm:text-5xl font-bold text-teal">
                {s.value}
              </span>
              <span className="mt-2 sm:mt-3 text-xs sm:text-sm font-semibold text-background">
                {s.label}
              </span>
              <span className="mt-1 text-[11px] sm:text-xs text-background/60">{s.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
