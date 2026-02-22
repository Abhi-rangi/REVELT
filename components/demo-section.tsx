"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const demoPoints = [
  "No pressure, no obligation — ever",
  "See exactly how Revelt works for your spa",
  "Learn your potential revenue recovery",
]

export function DemoSection() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    spaName: "",
    name: "",
    email: "",
    phone: "",
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="demo" className="py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left side */}
          <div>
            <Badge
              variant="outline"
              className="mb-4 sm:mb-6 border-teal/30 bg-teal/10 text-teal px-3 py-1 sm:px-4 sm:py-1.5 text-xs font-medium"
            >
              Limited monthly onboarding spots available
            </Badge>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
              Ready to book more patients in{" "}
              <span className="text-teal">14 days or less?</span>
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground text-pretty">
              Schedule your free demo today. In 20 minutes, you{"'"}ll see exactly
              how Revelt can transform your booking process — with zero
              obligation to move forward.
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {demoPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 text-sm text-foreground"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10">
                    <Check className="h-3.5 w-3.5 text-teal" />
                  </div>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right side – form */}
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-8 lg:p-10">
            {!submitted ? (
              <>
                <h3 className="font-serif text-xl font-bold text-foreground">
                  Schedule Your Free Demo
                </h3>
                <form
                  onSubmit={handleSubmit}
                  className="mt-6 flex flex-col gap-5"
                >
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="spaName" className="text-sm text-muted-foreground">
                      Med Spa Name
                    </Label>
                    <Input
                      id="spaName"
                      value={formData.spaName}
                      onChange={(e) =>
                        setFormData({ ...formData, spaName: e.target.value })
                      }
                      placeholder="Your med spa name"
                      className="bg-background"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name" className="text-sm text-muted-foreground">
                      Your Name *
                    </Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Jane Smith"
                      className="bg-background"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email" className="text-sm text-muted-foreground">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="jane@medspas.com"
                      className="bg-background"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="phone" className="text-sm text-muted-foreground">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="(555) 123-4567"
                      className="bg-background"
                    />
                  </div>
                  <Button type="submit" size="lg" className="mt-2 w-full bg-gradient-to-r from-primary to-teal text-background hover:opacity-90 border-0">
                    Schedule Your Free Demo
                  </Button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center py-8 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal/10">
                  <Check className="h-7 w-7 text-teal" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold text-foreground">
                  You{"'"}re on the list!
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Thank you, {formData.name || "there"}. We{"'"}ll reach out within
                  24 hours to schedule your free demo. Check your inbox
                  {formData.email && (
                    <>
                      {" "}
                      at{" "}
                      <span className="font-medium text-foreground">
                        {formData.email}
                      </span>
                    </>
                  )}
                  .
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
