import Image from "next/image";

export default function Hero() {
  return (
    <section className="section" style={{ paddingTop: 88 }}>
      <div
        className="section-inner"
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: 56,
          alignItems: "center",
        }}
      >
        <div>
          <div className="label" style={{ marginBottom: 20 }}>
            Harvard-validated biological monitoring AI
          </div>

          <h1
            className="serif"
            style={{
              fontSize: "clamp(64px, 8vw, 118px)",
              lineHeight: 0.92,
              letterSpacing: "-0.02em",
              margin: 0,
              maxWidth: 760,
              color: "var(--color-forest)",
            }}
          >
            Read the eye.
            <br />
            See the <span className="emph">future</span>.
          </h1>

          <p
            style={{
              marginTop: 28,
              maxWidth: 560,
              fontSize: 18,
              lineHeight: 1.65,
              color: "var(--color-slate)",
            }}
          >
            Glauc uses AI to analyze a{" "}
            <span className="under">smartphone photo</span> of the eye,
            helping estimate biological eye age and surface early wellness-risk
            signals.
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 34 }}>
            <a href="#waitlist" className="primary-button">
              Join the waitlist
            </a>
            <a href="#platform" className="secondary-button">
              See how it works
            </a>
          </div>

          <p
            style={{
              marginTop: 18,
              maxWidth: 520,
              fontSize: 12,
              lineHeight: 1.5,
              color: "var(--color-stone)",
            }}
          >
            FDA Class I General Wellness Device. Not a diagnostic tool.
            Clinical judgment required.
          </p>
        </div>

        <div
          className="card"
          style={{
            position: "relative",
            minHeight: 520,
            padding: 28,
            background:
              "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.76) 100%)",
          }}
        >
          <Image
            src="/assets/logo-g-sage.png"
            alt=""
            width={56}
            height={56}
            style={{ position: "absolute", top: 28, right: 28 }}
          />

          <div style={{ position: "absolute", left: 28, right: 28, bottom: 28 }}>
            <div className="label" style={{ marginBottom: 12 }}>
              Smartphone-based insight
            </div>

            <div
              style={{
                border: "1px solid var(--color-border)",
                background: "var(--color-cream)",
                padding: 22,
                borderRadius: 4,
              }}
            >
              <div
                className="serif"
                style={{
                  fontSize: 42,
                  lineHeight: 1,
                  color: "var(--color-forest)",
                }}
              >
                31.2<span style={{ fontSize: 20 }}> yr</span>
              </div>
              <p
                style={{
                  margin: "10px 0 0",
                  color: "var(--color-slate)",
                  lineHeight: 1.55,
                }}
              >
                Estimated biological eye age from a guided smartphone capture.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 10,
                marginTop: 10,
              }}
            >
              {["Ocular", "Metabolic", "Aging"].map((item) => (
                <div
                  key={item}
                  style={{
                    background: "#fff",
                    border: "1px solid var(--color-border)",
                    borderRadius: 4,
                    padding: 14,
                  }}
                >
                  <div className="label" style={{ fontSize: 9 }}>
                    {item}
                  </div>
                  <div style={{ marginTop: 8, color: "var(--color-sage)" }}>
                    Optimal
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}