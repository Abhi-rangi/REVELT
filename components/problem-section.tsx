import { PhoneOff, MessageSquareOff, UserX, CalendarX } from "lucide-react"

const painPoints = [
  {
    icon: PhoneOff,
    title: "Unanswered Calls",
    desc: "Every missed call is a lost patient. Studies show 85% of callers who can't reach you will not call back.",
  },
  {
    icon: MessageSquareOff,
    title: "Ignored DMs & Inquiries",
    desc: "Potential patients message on Instagram, Facebook, and SMS — and hear nothing back for hours or days.",
  },
  {
    icon: UserX,
    title: "Overwhelmed Staff",
    desc: "Your team juggles treatments, phones, and admin simultaneously. Something always slips through the cracks.",
  },
  {
    icon: CalendarX,
    title: "No-Shows & Empty Slots",
    desc: "Without automated reminders and confirmations, no-show rates climb — costing you hundreds per week.",
  },
]

const comparisonRows = [
  { area: "Incoming Calls", without: "Missed calls, voicemails ignored", withR: "Instant AI response, booking confirmed" },
  { area: "Social DMs", without: "Hours or days without reply", withR: "Automated reply in under 30 seconds" },
  { area: "Lead Follow-Up", without: "Manual, inconsistent, forgotten", withR: "Smart automated sequences, every time" },
  { area: "Appointment Slots", without: "Empty slots from no-shows", withR: "Full calendar with confirmation reminders" },
  { area: "Staff Workload", without: "Overwhelmed, burning out", withR: "Focused on patient care, not admin" },
  { area: "Revenue", without: "Leaking from every missed opportunity", withR: "Captured, converted, and booked" },
]

export function ProblemSection() {
  return (
    <section id="results" className="py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-teal">
            The Problem
          </span>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            Your med spa is losing revenue{" "}
            <span className="text-teal">every single day</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground text-pretty">
            Overworked staff, missed calls, and slow follow-ups are silently
            draining your bookings. The patients are out there — they{"'"}re just not
            hearing back from you fast enough.
          </p>
        </div>

        {/* Pain points */}
        <div className="mt-10 sm:mt-16 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((p) => (
            <div
              key={p.title}
              className="group flex flex-row sm:flex-col items-start gap-4 sm:gap-0 rounded-xl border border-border bg-card p-4 sm:p-6 transition-colors hover:border-teal/30"
            >
              <div className="mb-0 sm:mb-4 flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-lg bg-destructive/10">
                <p.icon className="h-4 w-4 sm:h-5 sm:w-5 text-destructive" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-foreground">{p.title}</h3>
                <p className="mt-1 sm:mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Before / After — cards on mobile, table on desktop */}
        <div className="mt-14 sm:mt-20 mx-auto max-w-4xl">
          <h3 className="mb-6 sm:mb-8 text-center font-serif text-xl sm:text-2xl font-bold text-foreground">
            Before vs. After Revelt
          </h3>

          {/* Mobile: stacked cards */}
          <div className="flex flex-col gap-4 md:hidden">
            {comparisonRows.map((row) => (
              <div key={row.area} className="rounded-xl border border-border bg-card p-4">
                <h4 className="text-sm font-semibold text-foreground">{row.area}</h4>
                <div className="mt-3 flex flex-col gap-2">
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-[10px] font-bold text-destructive">
                      ✕
                    </span>
                    <p className="text-sm text-muted-foreground">{row.without}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/10 text-[10px] font-bold text-teal">
                      ✓
                    </span>
                    <p className="text-sm text-foreground">{row.withR}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: table */}
          <div className="hidden md:block overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary">
                  <th className="px-6 py-4 font-semibold text-foreground">Area</th>
                  <th className="px-6 py-4 font-semibold text-destructive">Without Revelt</th>
                  <th className="px-6 py-4 font-semibold text-teal">With Revelt</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.area}
                    className={`border-b border-border last:border-0 ${
                      i % 2 === 0 ? "bg-card" : "bg-secondary/50"
                    }`}
                  >
                    <td className="px-6 py-4 font-medium text-foreground">
                      {row.area}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{row.without}</td>
                    <td className="px-6 py-4 text-foreground">{row.withR}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
