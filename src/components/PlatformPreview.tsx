const riskCards = [
  {
    label: "Biological eye age",
    value: "31.2 yr",
    detail: "4.8 years younger than chronological age",
    tone: "Optimal",
  },
  {
    label: "Ocular wellness",
    value: "92%",
    detail: "Signal quality strong across capture points",
    tone: "Optimal",
  },
  {
    label: "Systemic risk signal",
    value: "Moderate",
    detail: "Recommended for follow-up review",
    tone: "Review",
  },
];

const dashboardRows = [
  ["Total scans", "2,418", "+18%"],
  ["Avg. bio age", "32.6 yr", "−3.2 yr"],
  ["Flagged results", "75", "Review"],
];

export default function PlatformPreview() {
  return (
    <section id="platform" className="section">
      <div className="section-inner">
        <div className="label">Platform</div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.85fr 1.15fr",
            gap: 56,
            alignItems: "start",
            marginTop: 18,
          }}
        >
          <div>
            <h2
              className="serif"
              style={{
                fontSize: "clamp(44px, 5vw, 72px)",
                lineHeight: 0.98,
                margin: 0,
                color: "var(--color-forest)",
                letterSpacing: "-0.015em",
              }}
            >
              One photo.
              <br />
              Two connected <span className="emph">experiences</span>.
            </h2>

            <p
              style={{
                marginTop: 24,
                color: "var(--color-slate)",
                fontSize: 17,
                lineHeight: 1.7,
                maxWidth: 520,
              }}
            >
              Glauc is designed around a simple capture experience for people
              and a structured review surface for clinicians, employers, and
              partners.
            </p>

            <div
              style={{
                marginTop: 28,
                display: "grid",
                gap: 12,
              }}
            >
              {[
                "Guided smartphone capture",
                "Biological eye-age estimate",
                "Wellness-risk panel",
                "Clinical dashboard preview",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    color: "var(--color-forest)",
                    fontSize: 15,
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 999,
                      background: "var(--color-glauc-sage)",
                      display: "inline-block",
                    }}
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "0.82fr 1.18fr",
              gap: 18,
              alignItems: "end",
            }}
          >
            {/* Mobile app preview */}
            <div
              className="card"
              style={{
                padding: 16,
                minHeight: 560,
                borderRadius: 28,
                background: "var(--color-forest)",
                backgroundImage: 'url("/assets/texture-forest.jpg")',
                backgroundSize: "cover",
                color: "var(--color-cream)",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(247,243,238,0.16)",
                  borderRadius: 22,
                  minHeight: 528,
                  padding: 20,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 34,
                  }}
                >
                  <div className="label" style={{ color: "rgba(247,243,238,0.55)" }}>
                    Your scan
                  </div>
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 999,
                      background: "rgba(247,243,238,0.14)",
                    }}
                  />
                </div>

                <div
                  style={{
                    width: 180,
                    height: 180,
                    borderRadius: 999,
                    border: "12px solid rgba(120,157,127,0.35)",
                    outline: "1px solid rgba(247,243,238,0.18)",
                    margin: "0 auto",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <div
                      className="serif"
                      style={{
                        fontSize: 46,
                        lineHeight: 1,
                        color: "var(--color-cream)",
                      }}
                    >
                      31.2
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: "rgba(247,243,238,0.65)",
                      }}
                    >
                      biological eye age
                    </div>
                  </div>
                </div>

                <div style={{ display: "grid", gap: 10, marginTop: 36 }}>
                  {riskCards.map((card) => (
                    <div
                      key={card.label}
                      style={{
                        background: "rgba(247,243,238,0.08)",
                        border: "1px solid rgba(247,243,238,0.14)",
                        borderRadius: 18,
                        padding: 16,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          gap: 12,
                          alignItems: "baseline",
                        }}
                      >
                        <div
                          className="label"
                          style={{
                            color: "rgba(247,243,238,0.5)",
                            fontSize: 9,
                          }}
                        >
                          {card.label}
                        </div>
                        <div
                          style={{
                            fontSize: 11,
                            color: "var(--color-mist)",
                          }}
                        >
                          {card.tone}
                        </div>
                      </div>
                      <div
                        className="serif"
                        style={{
                          fontSize: 28,
                          marginTop: 8,
                          color: "var(--color-cream)",
                        }}
                      >
                        {card.value}
                      </div>
                      <div
                        style={{
                          fontSize: 12,
                          lineHeight: 1.45,
                          color: "rgba(247,243,238,0.68)",
                        }}
                      >
                        {card.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Dashboard preview */}
            <div
              className="card"
              style={{
                padding: 22,
                minHeight: 420,
                background: "rgba(255,255,255,0.82)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                  gap: 16,
                  marginBottom: 20,
                }}
              >
                <div>
                  <div className="label">Clinical overview</div>
                  <h3
                    className="serif"
                    style={{
                      margin: "8px 0 0",
                      fontSize: 32,
                      color: "var(--color-forest)",
                    }}
                  >
                    Cohort monitoring
                  </h3>
                </div>
                <div
                  style={{
                    border: "1px solid var(--color-border)",
                    borderRadius: 999,
                    padding: "7px 10px",
                    fontSize: 11,
                    color: "var(--color-sage)",
                    background: "var(--color-mist)",
                  }}
                >
                  Live preview
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 10,
                }}
              >
                {dashboardRows.map(([label, value, delta]) => (
                  <div
                    key={label}
                    style={{
                      border: "1px solid var(--color-border)",
                      borderRadius: 4,
                      padding: 14,
                      background: "#fff",
                    }}
                  >
                    <div className="label" style={{ fontSize: 9 }}>
                      {label}
                    </div>
                    <div
                      className="serif"
                      style={{
                        fontSize: 30,
                        marginTop: 10,
                        color: "var(--color-forest)",
                      }}
                    >
                      {value}
                    </div>
                    <div
                      style={{
                        marginTop: 8,
                        fontSize: 12,
                        color: "var(--color-glauc-sage)",
                      }}
                    >
                      {delta}
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: 18,
                  border: "1px solid var(--color-border)",
                  borderRadius: 4,
                  background: "#fff",
                  overflow: "hidden",
                }}
              >
                {[
                  ["Patient", "Bio age", "Signal", "Status"],
                  ["S. Ramakrishnan", "31.2", "Ocular", "Optimal"],
                  ["M. Liu", "49.4", "Aging", "Optimal"],
                  ["D. Okafor", "44.6", "Systemic", "Review"],
                  ["P. Mehta", "51.8", "Metabolic", "Review"],
                ].map((row, idx) => (
                  <div
                    key={row.join("-")}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1.2fr 0.7fr 0.8fr 0.7fr",
                      gap: 12,
                      padding: "12px 14px",
                      borderTop:
                        idx === 0 ? "none" : "1px solid var(--color-border)",
                      fontSize: idx === 0 ? 11 : 12,
                      color:
                        idx === 0
                          ? "var(--color-stone)"
                          : "var(--color-slate)",
                      textTransform: idx === 0 ? "uppercase" : "none",
                      letterSpacing: idx === 0 ? "0.06em" : 0,
                    }}
                  >
                    {row.map((cell) => (
                      <div key={cell}>{cell}</div>
                    ))}
                  </div>
                ))}
              </div>

              <p
                style={{
                  margin: "16px 0 0",
                  fontSize: 12,
                  lineHeight: 1.55,
                  color: "var(--color-stone)",
                }}
              >
                Dashboard shown for product visualization. Results are intended
                to support — not replace — professional judgment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}