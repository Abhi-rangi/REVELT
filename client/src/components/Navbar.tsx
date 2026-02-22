/*
 * REVELT NAVBAR
 * Design: Transparent on scroll, off-white on scroll-down
 * Font: Inter (body), Manrope (logo)
 * Behavior: Sticky, blurs background on scroll
 */

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Order matches page flow: Results → How It Works → About → Services */
  const navLinks = [
    { label: "Results", href: "#results" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo — scroll to top on home without reload or hash */}
          <a
            href="/"
            className="flex items-center gap-2.5 group"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                window.history.replaceState(null, "", "/");
              }
            }}
          >
            <img
              src="/logo_long.jpeg"
              alt="Revelt"
              className="h-8 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-teal"
                style={{ color: "var(--navy)", fontFamily: "var(--font-body)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#demo"
              className="text-sm font-semibold transition-colors hover:text-teal"
              style={{ color: "var(--navy)", fontFamily: "var(--font-body)" }}
            >
              Book a Demo
            </a>
            <Button
              className="bg-primary text-primary-foreground hover:opacity-90 shadow-sm pulse-cta font-semibold px-5"
              style={{ fontFamily: "var(--font-body)" }}
              asChild
            >
              <a href="#signup">Get More Bookings</a>
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-light-gray transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-border px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium py-2 border-b border-border hover:text-teal transition-colors text-navy"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <a
              href="#demo"
              onClick={() => setMobileOpen(false)}
              className="text-center text-sm font-semibold py-2.5 rounded-lg border-2 border-blue text-blue hover:bg-light-gray transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Book a Demo
            </a>
            <a
              href="#signup"
              onClick={() => setMobileOpen(false)}
              className="text-center text-sm font-semibold py-2.5 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Get More Bookings
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
