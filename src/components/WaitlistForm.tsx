export default function WaitlistForm() {
  return (
    <section id="waitlist" className="section">
      <div className="section-inner">
        <div className="card" style={{ padding: 40 }}>
          <div className="label">Join waitlist</div>
          <h2 className="serif" style={{ fontSize: 48, marginTop: 12 }}>
            Be among the first to follow Glauc.
          </h2>
          <p style={{ color: "var(--color-slate)", maxWidth: 560 }}>
            Leave your details and the Glauc team can follow up when early
            access, partnerships, or investor updates become available.
          </p>
        </div>
      </div>
    </section>
  );
}