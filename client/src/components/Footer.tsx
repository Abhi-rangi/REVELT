/*
 * REVELT FOOTER
 * Design: Dark navy footer, clean and minimal
 */

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-12 border-t"
      style={{
        background: "var(--navy)",
        borderColor: "oklch(1 0 0 / 0.08)",
      }}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <img
              src="/logo_long.jpeg"
              alt="Revelt"
              className="h-7 w-auto object-contain"
            />
          </div>

          {/* Tagline */}
          <p
            className="text-sm text-center"
            style={{ color: "oklch(0.75 0.02 250)", fontFamily: "var(--font-body)" }}
          >
            Instant replies. Smart follow-ups. More booked patients. Less stress.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs transition-colors hover:text-white"
                style={{ color: "oklch(0.70 0.02 250)", fontFamily: "var(--font-body)" }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div
          className="mt-8 pt-6 border-t text-center"
          style={{ borderColor: "oklch(1 0 0 / 0.06)" }}
        >
          <p
            className="text-xs"
            style={{ color: "oklch(0.60 0.02 250)", fontFamily: "var(--font-body)" }}
          >
            © {year} Revelt. All rights reserved. AI-powered booking automation for medical spas.
          </p>
        </div>
      </div>
    </footer>
  );
}
