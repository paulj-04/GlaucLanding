import Image from "next/image";

const signals = [
  {
    label: "Biological eye age",
    value: "31.2 yr",
    detail: "Estimated from guided smartphone capture",
  },
  {
    label: "Capture quality",
    value: "98%",
    detail: "Strong image signal",
  },
  {
    label: "Wellness panel",
    value: "3 areas",
    detail: "Ocular · metabolic · aging",
  },
];

export default function Hero() {
  return (
    <section className="section" 
    style={{ paddingTop: 44,
      paddingBottom: 11,
    }}>
      <div
        className="section-inner"
        style={{
          display: "grid",
          gridTemplateColumns: "0.95fr 1.05fr",
          gap: 56,
          alignItems: "center",
        }}
      >
        <div>
          <div className="label" style={{ marginBottom: 20 }}>
            Smartphone-based biological monitoring AI
          </div>

          <h1
            className="serif"
            style={{
              fontSize: "clamp(64px, 8vw, 116px)",
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
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
              marginTop: 30,
              maxWidth: 620,
              fontSize: 20,
              lineHeight: 1.65,
              color: "var(--color-slate)",
            }}
          >
            Glauc analyzes a{" "}
            <span className="under">smartphone photo</span> of the eye to
            estimate biological eye age and surface early wellness-risk signals, 
            no specialized hardware required.
          </p>

          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 36,
              flexWrap: "wrap",
            }}
          >
            <a href="#waitlist" className="primary-button">
              Join the waitlist
            </a>
            <a href="#platform" className="secondary-button">
              See how it works
            </a>
          </div>

          <p
            style={{
              marginTop: 20,
              maxWidth: 560,
              fontSize: 12,
              lineHeight: 1.55,
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
              "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.78) 100%)",
            overflow: "hidden",
          }}
        >
          <Image
            src="/assets/logo-g-sage.png"
            alt=""
            width={58}
            height={58}
            style={{ position: "absolute", top: 28, right: 28 }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 0.9fr",
              gap: 24,
              height: "100%",
              minHeight: 464,
              alignItems: "stretch",
            }}
          >
            <div
              style={{
                border: "1px solid var(--color-border)",
                borderRadius: 4,
                background: "var(--color-cream)",
                backgroundImage: 'url("/assets/texture-cream.jpg")',
                backgroundSize: "cover",
                padding: 24,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div className="label">Guided capture</div>

                <div
                  style={{
                    marginTop: 28,
                    height: 220,
                    borderRadius: 999,
                    border: "1px solid var(--color-border)",
                    background:
                      "radial-gradient(circle at center, rgba(120,157,127,0.26) 0%, rgba(120,157,127,0.12) 34%, rgba(255,255,255,0.4) 70%)",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: 120,
                      height: 120,
                      borderRadius: 999,
                      border: "12px solid rgba(26,58,42,0.18)",
                      display: "grid",
                      placeItems: "center",
                      background: "rgba(255,255,255,0.48)",
                    }}
                  >
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 999,
                        background: "var(--color-forest)",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <div
                  className="serif"
                  style={{
                    fontSize: 34,
                    lineHeight: 1.05,
                    color: "var(--color-forest)",
                  }}
                >
                  Center your eye.
                  <br />
                  Glauc reads the signal.
                </div>

                <p
                  style={{
                    margin: "12px 0 0",
                    color: "var(--color-slate)",
                    fontSize: 14,
                    lineHeight: 1.55,
                  }}
                >
                  A smartphone-first workflow designed for accessible,
                  repeatable wellness monitoring.
                </p>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gap: 12,
                alignContent: "end",
                paddingTop: 82,
              }}
            >
              <div
                style={{
                  border: "1px solid var(--color-border)",
                  background: "#fff",
                  borderRadius: 4,
                  padding: 22,
                }}
              >
                <div className="label">Estimated result</div>

                <div
                  className="serif"
                  style={{
                    fontSize: 60,
                    lineHeight: 1,
                    marginTop: 16,
                    color: "var(--color-forest)",
                  }}
                >
                  31.2
                  <span style={{ fontSize: 24, marginLeft: 6 }}>yr</span>
                </div>

                <p
                  style={{
                    margin: "12px 0 0",
                    color: "var(--color-slate)",
                    fontSize: 14,
                    lineHeight: 1.55,
                  }}
                >
                  Biological eye-age estimate generated from a guided
                  smartphone photo.
                </p>
              </div>

              {signals.slice(1).map((item) => (
                <div
                  key={item.label}
                  style={{
                    border: "1px solid var(--color-border)",
                    background: "#fff",
                    borderRadius: 4,
                    padding: 18,
                  }}
                >
                  <div className="label" style={{ fontSize: 9 }}>
                    {item.label}
                  </div>

                  <div
                    className="serif"
                    style={{
                      marginTop: 10,
                      fontSize: 34,
                      lineHeight: 1,
                      color: "var(--color-forest)",
                    }}
                  >
                    {item.value}
                  </div>

                  <p
                    style={{
                      margin: "8px 0 0",
                      color: "var(--color-stone)",
                      fontSize: 12,
                      lineHeight: 1.45,
                    }}
                  >
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}