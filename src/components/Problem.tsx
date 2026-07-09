export default function Problem() {
  return (
    <section className="section" id="science">
      <div className="section-inner">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1px 1fr",
            gap: 48,
            alignItems: "center",
          }}
        >
          <div>
            <div className="label">The problem</div>
            <h2
              className="serif"
              style={{
                fontSize: "clamp(44px, 5vw, 72px)",
                lineHeight: 0.98,
                letterSpacing: "-0.015em",
                margin: "18px 0 0",
                color: "var(--color-ink)",
              }}
            >
              Disease that is <span className="emph">preventable</span> is
              still caught too <span className="under">late</span>.
            </h2>
          </div>

          <div
            aria-hidden="true"
            style={{
              width: 1,
              height: 260,
              background: "var(--color-border)",
            }}
          />

          <div>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.75,
                color: "var(--color-slate)",
                margin: 0,
              }}
            >
              Many health changes begin quietly before they become obvious.
              Traditional screening can be expensive, delayed, or hard to
              access. Glauc explores the eye as a visible biological signal —
              making early wellness monitoring easier to reach from the device
              already in your hand.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 12,
                marginTop: 28,
              }}
            >
              {[
                ["01", "Accessible"],
                ["02", "Non-invasive"],
                ["03", "AI-guided"],
              ].map(([num, label]) => (
                <div
                  key={label}
                  className="card"
                  style={{
                    padding: 18,
                    background: "rgba(255,255,255,0.74)",
                  }}
                >
                  <div
                    className="serif"
                    style={{
                      fontSize: 34,
                      color: "var(--color-glauc-sage)",
                      lineHeight: 1,
                    }}
                  >
                    {num}
                  </div>
                  <div
                    style={{
                      marginTop: 10,
                      color: "var(--color-forest)",
                      fontSize: 14,
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p
          style={{
            marginTop: 36,
            maxWidth: 760,
            fontSize: 13,
            lineHeight: 1.6,
            color: "var(--color-stone)",
          }}
        >
          Glauc is designed for general wellness insight and clinical decision
          support contexts. It does not diagnose, treat, cure, or prevent
          disease.
        </p>
      </div>
    </section>
  );
}