/*
 * REVELT FINAL CTA SECTION
 * Design: REVELT — blue-teal gradient background, scarcity messaging
 * Layout: Two-column — left headline/benefits, right form card
 * Includes: "No pressure/No obligation" and "Limited monthly onboarding spots"
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const demoPoints = [
  "No pressure, no obligation — ever",
  "See exactly how Revelt works for your spa",
  // "Get a custom automation plan in 20 minutes",
  "Learn your potential revenue recovery",
];

export default function FinalCTASection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", spa: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error("Please fill in your name and email.");
      return;
    }
    setSubmitted(true);
    toast.success("Demo request received! We'll be in touch within 24 hours.");
  };

  return (
    <section
      id="demo"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        background: "var(--gradient-blue-teal)",
      }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, oklch(0.55 0.12 195 / 0.3) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Headline + benefits */}
          <div className="text-white">
            {/* Scarcity badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{ background: "oklch(1 0 0 / 0.12)", border: "1px solid oklch(1 0 0 / 0.2)" }}
            >
              <Clock size={14} className="text-teal" />
              <span
                className="text-xs font-semibold"
                style={{ color: "var(--off-white)", fontFamily: "var(--font-body)" }}
              >
                Limited monthly onboarding spots available
              </span>
            </div>

            <h2
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Ready to book more patients in{" "}
              <span
                className="italic"
                style={{ color: "var(--off-white)" }}
              >
                14 days or less?
              </span>
            </h2>

            <p
              className="text-sm sm:text-base lg:text-lg leading-relaxed mb-8"
              style={{
                color: "var(--off-white)",
                fontFamily: "var(--font-body)",
              }}
            >
              Schedule your free demo today. In 20 minutes, you'll see exactly how Revelt can transform your booking process — with zero obligation to move forward.
            </p>

            <div className="flex flex-col gap-3 mb-10">
              {demoPoints.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle2
                    size={18}
                    style={{ color: "var(--off-white)", flexShrink: 0 }}
                  />
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--off-white)", fontFamily: "var(--font-body)" }}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form card */}
          <div>
            <div
              className="p-8 lg:p-10 rounded-3xl shadow-2xl"
              style={{
                background: "white",
                boxShadow: "0 32px 64px rgba(0,0,0,0.2), 0 8px 24px rgba(0,0,0,0.1)",
              }}
            >
              {!submitted ? (
                <>
                  <div className="mb-7">
                    <h3
                      className="text-2xl font-bold mb-2"
                      style={{ fontFamily: "var(--font-headline)", color: "var(--navy)" }}
                    >
                      Schedule Your Free Demo
                    </h3>
                    {/* <p
                      className="text-sm"
                      style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}
                    >
                      Takes 2 minutes to request. We'll confirm within 24 hours.
                    </p> */}
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                        style={{ color: "var(--navy-light)", fontFamily: "var(--font-body)" }}
                      >
                        Med Spa Name
                      </label>
                      <input
                        type="text"
                        placeholder="Luxe Med Spa & Wellness"
                        value={formData.spa}
                        onChange={(e) => setFormData({ ...formData, spa: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                        style={{
                          background: "var(--off-white)",
                          border: "1.5px solid var(--border)",
                          color: "var(--navy)",
                          fontFamily: "var(--font-body)",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--blue)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                        style={{ color: "var(--navy-light)", fontFamily: "var(--font-body)" }}
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Dr. Sarah Johnson"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                        style={{
                          background: "var(--off-white)",
                          border: "1.5px solid var(--border)",
                          color: "var(--navy)",
                          fontFamily: "var(--font-body)",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--blue)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                      />
                    </div>

                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                        style={{ color: "var(--navy-light)", fontFamily: "var(--font-body)" }}
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="sarah@luxemedspa.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                        style={{
                          background: "var(--off-white)",
                          border: "1.5px solid var(--border)",
                          color: "var(--navy)",
                          fontFamily: "var(--font-body)",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--blue)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                      />
                    </div>

                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                        style={{ color: "var(--navy-light)", fontFamily: "var(--font-body)" }}
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                        style={{
                          background: "var(--off-white)",
                          border: "1.5px solid var(--border)",
                          color: "var(--navy)",
                          fontFamily: "var(--font-body)",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--blue)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                      />
                    </div>

                    

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-13 text-base font-bold mt-2 bg-primary text-primary-foreground hover:opacity-90 shadow-lg pulse-cta"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      <span className="flex items-center gap-2">
                        Schedule Your Free Demo
                        <ArrowRight size={18} />
                      </span>
                    </Button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: "var(--light-gray)" }}
                  >
                    <CheckCircle2 size={32} className="text-teal" />
                  </div>
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{ fontFamily: "var(--font-headline)", color: "var(--navy)" }}
                  >
                    You're on the list!
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--navy-light)", fontFamily: "var(--font-body)" }}
                  >
                    Thank you, {formData.name}. We'll reach out within 24 hours to schedule your free demo. Check your inbox at{" "}
                    <strong>{formData.email}</strong>.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
