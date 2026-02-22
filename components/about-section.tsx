import { Check, X, Shield } from "lucide-react";

const goodFit = [
  "Want more booked appointments",
  "Care about client experience",
  "Value your time",
  "Want predictable growth",
];

const notFit = [
  "Are comfortable missing inquiries",
  "Prefer manual follow-up",
  "Don't want to improve systems",
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-teal">
            About REVELT
          </span>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Helping Businesses Build Businesses That Keep Working
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground text-pretty">
            Running a business is demanding — clients, staff, marketing,
            scheduling, follow-ups — all while trying to grow.
          </p>
        </div>

        {/* Key stats about the problem */}
        <div className="mt-10 sm:mt-14 grid gap-4 sm:gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Businesses that respond within{" "}
              <span className="font-semibold text-foreground">5 minutes</span>{" "}
              are up to{" "}
              <span className="font-semibold text-teal">20x more likely</span>{" "}
              to convert a lead.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Most service businesses{" "}
              <span className="font-semibold text-foreground">
                lose revenue
              </span>{" "}
              simply because they don{"'"}t respond fast enough.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Small business owners regularly work{" "}
              <span className="font-semibold text-teal">50+ hours</span> per
              week.
            </p>
          </div>
        </div>

        <p className="mt-8 text-center text-base font-medium text-foreground">
          The problem isn{"'"}t effort. It{"'"}s capacity.{" "}
          <span className="text-teal">REVELT was built to solve that.</span>
        </p>

        {/* Mission + Founder */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-8">
            <h3 className="font-serif text-xl font-bold text-foreground">
              Our Mission
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We help business owners build businesses that keep working — even
              when they can{"'"}t. Growth shouldn{"'"}t require longer hours or
              chasing leads; it should come from reliable systems that work in
              the background.
            </p>
          </div>

          <div className="rounded-xl border border-teal/20 bg-card p-8">
            <h3 className="font-serif text-xl font-bold text-foreground">
              A Message From the Founder
            </h3>
            <p className="mt-4 text-sm italic leading-relaxed text-muted-foreground">
              {'"'}REVELT was built during one of the busiest seasons of my life
              — raising kids, building product, no pause button. Messages get
              missed; follow-ups get delayed. Not because you don{"'"}t care —
              because you{"'"}re doing too much. I built REVELT so your business
              keeps working for you, not the other way around.{'"'}
            </p>
            <p className="mt-4 text-sm font-semibold text-foreground">
              — Krista Regan, Founder
            </p>
          </div>
        </div>

        {/* Revenue calculation */}
        <div className="mt-12 sm:mt-16 mx-auto max-w-xl rounded-xl border border-teal/20 bg-teal/5 p-6 sm:p-8 text-center">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground">
            What One More Booking Per Day Could Mean
          </h3>
          <p className="mt-3 sm:mt-4 text-sm text-muted-foreground">
            1 extra booking per day x $250 average treatment
          </p>
          <div className="mt-4 flex items-center justify-center gap-6">
            <div>
              <span className="text-xl sm:text-2xl font-bold text-teal">
                $7,500
              </span>
              <span className="block text-xs text-muted-foreground">
                per month
              </span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold text-teal">
                $90,000
              </span>
              <span className="block text-xs text-muted-foreground">
                per year
              </span>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            REVELT helps you capture opportunities that are already coming in —
            but slipping through the cracks.
          </p>
        </div>

        {/* Is REVELT Right For You */}
        <div className="mt-12 sm:mt-16 grid gap-4 sm:gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-teal/20 bg-card p-6 sm:p-8">
            <h3 className="flex items-center gap-2 font-serif text-lg font-bold text-foreground">
              <Check className="h-5 w-5 text-teal" />
              REVELT Is a Good Fit If You:
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {goodFit.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <Check className="h-4 w-4 shrink-0 text-teal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <h3 className="flex items-center gap-2 font-serif text-lg font-bold text-foreground">
              <X className="h-5 w-5 text-muted-foreground" />
              REVELT May Not Be Right If You:
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {notFit.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <X className="h-4 w-4 shrink-0 text-muted-foreground" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          We believe in honest partnerships.
        </p>

        {/* Control callout */}
        <div className="mt-8 sm:mt-10 mx-auto flex max-w-xl items-start sm:items-center gap-4 rounded-xl border border-border bg-card p-4 sm:p-6">
          <Shield className="h-8 w-8 shrink-0 text-teal" />
          <div>
            <h4 className="text-sm font-semibold text-foreground">
              You{"'"}re Always In Control
            </h4>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              You approve messages, control your schedule, and can pause
              anytime. No surprises. No lock-in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
