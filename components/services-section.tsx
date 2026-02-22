import { Zap, MailCheck, Calendar, BellRing, UserCheck } from "lucide-react"

const services = [
  {
    icon: Zap,
    title: "Instant Lead Response",
    desc: "AI responds to every call, text, DM, and web inquiry within seconds — 24/7. No lead goes cold.",
    stat: "< 30 sec response time",
  },
  {
    icon: MailCheck,
    title: "Automated Follow-Ups",
    desc: "Smart multi-step sequences nurture every lead until they book. Personalized messages that feel human.",
    stat: "3-5x more conversions",
  },
  {
    icon: Calendar,
    title: "Appointment Booking Automation",
    desc: "Patients self-book directly into your calendar through AI-guided conversations. No back-and-forth, no phone tag.",
    stat: "Zero scheduling friction",
  },
  {
    icon: BellRing,
    title: "No-Show Reduction",
    desc: "One-click confirmation reminders via SMS and email. Patients confirm, reschedule, or cancel — all automatically.",
    stat: "Up to 60% fewer no-shows",
  },
  {
    icon: UserCheck,
    title: "Patient Reactivation",
    desc: "Automatically re-engage dormant patients with personalized outreach.",
    stat: "Reactivate past patients",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-teal">
            Core Services
          </span>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Everything your med spa needs to{" "}
            <span className="text-teal">fill every slot</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground text-pretty">
            Revelt is a complete AI automation system — not just a chatbot.
            Every touchpoint in the patient journey is handled automatically.
          </p>
        </div>

        <div className="mt-10 sm:mt-16 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-xl border border-border bg-card p-5 sm:p-8 transition-colors hover:border-teal/30"
            >
              <div className="mb-4 sm:mb-5 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-teal/10">
                <s.icon className="h-5 w-5 sm:h-6 sm:w-6 text-teal" />
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <span className="mt-4 inline-block rounded-full bg-teal/10 px-3 py-1 text-xs font-semibold text-teal">
                {s.stat}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
