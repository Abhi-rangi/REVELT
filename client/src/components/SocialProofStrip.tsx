/*
 * REVELT SOCIAL PROOF STRIP
 * Single-line trust bar; benefit details live in Hero and Services.
 */

export default function SocialProofStrip() {
  return (
    <section
      className="py-6 border-y"
      style={{
        background: "var(--off-white)",
        borderColor: "var(--border)",
      }}
    >
      <div className="container">
        <p
          className="text-center text-sm font-semibold uppercase tracking-widest"
          style={{
            color: "var(--teal)",
            fontFamily: "var(--font-body)",
          }}
        >
          Used by med spas to increase bookings and reduce no-shows
        </p>
      </div>
    </section>
  );
}
