import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "56px 64px",
        borderTop: "1px solid var(--color-border)",
        background: "rgba(255,255,255,0.38)",
      }}
    >
      <div className="section-inner">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr 0.8fr",
            gap: 40,
            alignItems: "start",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Image
                src="/assets/logo-g-forest.png"
                alt="Glauc"
                width={34}
                height={34}
              />
              <span
                className="serif"
                style={{ fontSize: 28, color: "var(--color-forest)" }}
              >
                Glauc
              </span>
            </div>

            <p
              style={{
                marginTop: 18,
                maxWidth: 460,
                color: "var(--color-slate)",
                lineHeight: 1.65,
              }}
            >
              Smartphone-based biological eye monitoring designed to make early
              wellness insight more accessible.
            </p>

            <p
              style={{
                marginTop: 18,
                maxWidth: 620,
                color: "var(--color-stone)",
                fontSize: 12,
                lineHeight: 1.55,
              }}
            >
              FDA Class I General Wellness Device. Not a diagnostic tool.
              Clinical judgment required. Glauc results are intended to support
              — not replace — professional medical advice.
            </p>
          </div>

          <div>
            <div className="label">Explore</div>
            <div
              style={{
                display: "grid",
                gap: 10,
                marginTop: 16,
                color: "var(--color-slate)",
                fontSize: 14,
              }}
            >
              <a href="#science">Science</a>
              <a href="#platform">Platform</a>
              <a href="#story">Story</a>
              <a href="#team">Team</a>
              <a href="#waitlist">Join waitlist</a>
            </div>
          </div>

          <div>
            <div className="label">Legal</div>
            <div
              style={{
                display: "grid",
                gap: 10,
                marginTop: 16,
                color: "var(--color-slate)",
                fontSize: 14,
              }}
            >
              <a href="/privacy">Privacy policy</a>
              <a href="/terms">Terms of use</a>
              <a href="mailto:hello@glauc.ai">Contact</a>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 42,
            paddingTop: 18,
            borderTop: "1px solid var(--color-border)",
            display: "flex",
            justifyContent: "space-between",
            gap: 20,
            flexWrap: "wrap",
            color: "var(--color-stone)",
            fontSize: 12,
          }}
        >
          <span>© {new Date().getFullYear()} Glauc. All rights reserved.</span>
          <span>Read the eye. See the future.</span>
        </div>
      </div>
    </footer>
  );
}