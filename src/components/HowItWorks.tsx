const steps = [
  {
    eyebrow: "Step 01",
    title: "Capture",
    body: "A guided smartphone experience helps center the eye and capture an image suitable for analysis.",
  },
  {
    eyebrow: "Step 02",
    title: "Analyze",
    body: "Glauc AI reviews visible ocular patterns and converts them into structured biological signals.",
  },
  {
    eyebrow: "Step 03",
    title: "Understand",
    body: "The result is an estimated biological eye age and a wellness-risk panel designed to support better follow-up.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="section"
      style={{
        background: "var(--color-forest)",
        backgroundImage: 'url("/assets/texture-forest.jpg")',
        backgroundSize: "cover",
        color: "var(--color-cream)",
      }}
    >
      <div className="section-inner">
        <div className="label" style={{ color: "rgba(247,243,238,0.62)" }}>
          How it works
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.85fr 1.15fr",
            gap: 56,
            alignItems: "start",
            marginTop: 18,
          }}
        >
          <h2
            className="serif"
            style={{
              fontSize: "clamp(44px, 5vw, 76px)",
              lineHeight: 0.98,
              letterSpacing: "-0.015em",
              margin: 0,
              color: "var(--color-cream)",
            }}
          >
            From <span className="emph">smartphone</span> photo to{" "}
            <span className="under">biological insight</span>.
          </h2>

          <div style={{ display: "grid", gap: 14 }}>
            {steps.map((step) => (
              <div
                key={step.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr",
                  gap: 24,
                  padding: "24px 0",
                  borderTop: "1px solid rgba(247,243,238,0.18)",
                }}
              >
                <div
                  className="label"
                  style={{
                    color: "rgba(247,243,238,0.55)",
                    paddingTop: 4,
                  }}
                >
                  {step.eyebrow}
                </div>

                <div>
                  <h3
                    className="serif"
                    style={{
                      fontSize: 34,
                      lineHeight: 1.1,
                      margin: 0,
                      color: "var(--color-cream)",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      margin: "10px 0 0",
                      color: "rgba(247,243,238,0.78)",
                      fontSize: 15,
                      lineHeight: 1.65,
                      maxWidth: 560,
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 12,
          }}
        >
          {[
            ["Input", "Smartphone eye photo"],
            ["Model", "Ocular AI analysis"],
            ["Output", "Biological eye age"],
            ["Panel", "Wellness-risk signals"],
          ].map(([label, value]) => (
            <div
              key={label}
              style={{
                border: "1px solid rgba(247,243,238,0.18)",
                background: "rgba(247,243,238,0.06)",
                padding: 18,
                borderRadius: 4,
              }}
            >
              <div
                className="label"
                style={{
                  color: "rgba(247,243,238,0.5)",
                  fontSize: 10,
                }}
              >
                {label}
              </div>
              <div
                style={{
                  marginTop: 10,
                  color: "var(--color-cream)",
                  fontSize: 15,
                  lineHeight: 1.4,
                }}
              >
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}