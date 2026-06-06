/*
 * REVELT SIGNUP SECTION
 * Design: Off-white / light gray background, simple email capture
 * Purpose: "Get More Bookings" CTA from hero
 */

import { submitContactForm } from "@/const";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export default function SignupSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    try {
      await submitContactForm({ type: "signup", email });
      setSubmitted(true);
      toast.success("You're on the list! We'll be in touch soon.");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="signup"
      className="py-16 border-t"
      style={{
        background: "var(--off-white)",
        borderColor: "var(--border)",
      }}
    >
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-2xl lg:text-3xl font-bold mb-4"
            style={{ fontFamily: "var(--font-subheadline)", color: "var(--navy)" }}
          >
            Start getting more bookings today
          </h2>
          <p
            className="text-base mb-8"
            style={{ color: "var(--navy-light)", fontFamily: "var(--font-body)" }}
          >
            Enter your email to get started. Our team will reach out with next steps.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@medspa.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl text-sm outline-none"
                style={{
                  background: "white",
                  border: "1.5px solid var(--border)",
                  color: "var(--navy)",
                  fontFamily: "var(--font-body)",
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--blue)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />
              <Button
                type="submit"
                disabled={loading}
                className="bg-primary text-primary-foreground hover:opacity-90 font-semibold px-6 h-12 whitespace-nowrap"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Get Started <ArrowRight size={16} className="ml-1" />
              </Button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3">
              <CheckCircle2 size={22} className="text-teal" />
              <span
                className="text-base font-semibold text-navy"
                style={{ fontFamily: "var(--font-body)" }}
              >
                You're in! We'll be in touch within 24 hours.
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
