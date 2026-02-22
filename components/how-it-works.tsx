const steps = [
  {
    day: "Day 1",
    time: "20 min",
    title: "Discovery Demo",
    desc: "A quick 20-minute call to understand your med spa's workflow, goals, and current booking process. No pressure, no obligation.",
  },
  {
    day: "Day 2",
    time: "25 min",
    title: "Custom Setup",
    desc: "We configure your AI system — trained on your services, pricing, and tone. Your brand, your voice, fully automated.",
  },
  {
    day: "Week 1",
    time: "15 min",
    title: "Go Live",
    desc: "Your AI goes live across all channels. A final 15-minute review ensures everything runs perfectly. Then watch the bookings roll in.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-border bg-card py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-teal">
            Simple Onboarding
          </span>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Up and running in{" "}
            <span className="text-teal">under 60 minutes</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground text-pretty">
            We handle all the heavy lifting. Your total time investment is less
            than one hour — spread across three simple steps.
          </p>
        </div>

        <div className="mt-10 sm:mt-16 grid gap-4 sm:gap-8 lg:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              {/* Connector line on desktop */}
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden h-px w-8 -translate-y-1/2 translate-x-full bg-border lg:block" />
              )}
              <div className="rounded-xl border border-border bg-background p-5 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-teal">
                      {step.day}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      · {step.time}
                    </span>
                  </div>
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 rounded-xl border border-teal/20 bg-teal/5 px-4 sm:px-6 py-4 text-center">
          <p className="text-sm text-foreground">
            Total client time required:{" "}
            <span className="font-bold text-teal">under 60 minutes</span> — we
            handle everything else.
          </p>
        </div>
      </div>
    </section>
  )
}
