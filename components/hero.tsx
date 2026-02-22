import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bot, CalendarCheck, PhoneOff, BellOff } from "lucide-react"

const benefits = [
  { icon: Bot, text: "Instant responses — 24/7" },
  { icon: CalendarCheck, text: "Automated appointment booking" },
  { icon: PhoneOff, text: "Zero missed calls or DMs" },
  { icon: BellOff, text: "Dramatically fewer no-shows" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-primary/5 blur-3xl sm:h-[600px] sm:w-[800px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            variant="outline"
            className="mb-4 sm:mb-6 border-teal/30 bg-teal/10 text-teal px-3 py-1 sm:px-4 sm:py-1.5 text-xs font-medium"
          >
            AI-Powered Med Spa Automation
          </Badge>

          <h1 className="text-balance font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            AI-powered systems that{" "}
            <span className="text-teal">capture, convert,</span> and book
            more patients automatically.
          </h1>

          <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-pretty text-base sm:text-lg leading-relaxed text-muted-foreground">
            Ensure your med spa never misses another opportunity. Revelt handles
            every inquiry, follow-up, and booking — so your team can focus on
            delivering exceptional care.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            {/* <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-teal text-background hover:opacity-90 border-0" asChild>
              <a href="#signup">Get More Bookings</a>
            </Button> */}
            <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
              <a href="#demo">Book a Demo</a>
            </Button>
          </div>

          <p className="mt-4 sm:mt-5 text-xs text-muted-foreground">
            No credit card required · Setup in under 60 minutes · Cancel anytime
          </p>
        </div>

        {/* Benefits grid */}
        <div className="mx-auto mt-10 sm:mt-16 grid max-w-3xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.text}
              className="flex flex-col items-center gap-2 sm:gap-3 rounded-xl border border-border bg-card p-3 sm:p-5 text-center"
            >
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-teal/10">
                <b.icon className="h-4 w-4 sm:h-5 sm:w-5 text-teal" />
              </div>
              <span className="text-[11px] sm:text-xs font-medium leading-snug text-foreground">
                {b.text}
              </span>
            </div>
          ))}
        </div>

        {/* Floating stat cards */}
        <div className="mx-auto mt-8 sm:mt-10 flex max-w-md flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3 rounded-full border border-teal/20 bg-card px-4 py-2 sm:px-5 sm:py-2.5">
            <span className="text-xs sm:text-sm font-semibold text-teal">This Week</span>
            <span className="text-xs sm:text-sm font-bold text-foreground">+23 Bookings</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 rounded-full border border-teal/20 bg-card px-4 py-2 sm:px-5 sm:py-2.5">
            <span className="text-xs sm:text-sm font-semibold text-teal">Response Time</span>
            <span className="text-xs sm:text-sm font-bold text-foreground">{"< 30 seconds"}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
