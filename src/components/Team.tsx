const founders = [
  {
    name: "Sarvesh Ramakrishnan",
    role: "Founder & CEO",
    detail:
      "Leading Glauc’s mission to make biological eye intelligence more accessible through smartphone-based AI.",
  },
  {
    name: "Aaryan Thavaran",
    role: "Co-founder & COO",
    detail:
      "Supporting product, operations, and go-to-market execution across Glauc’s early platform strategy.",
  },
];

const advisors = [
  {
    name: "Mohammad Eslami, PhD",
    role: "Scientific advisor",
  },
  {
    name: "Michael J. Morley, MD",
    role: "Clinical advisor",
  },
  {
    name: "Chris Wright, PhD",
    role: "Research advisor",
  },
];

export default function Team() {
  return (
    <section id="team" className="section">
      <div className="section-inner">
        <div className="label">Team</div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            gap: 56,
            marginTop: 18,
            alignItems: "start",
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
              Scientific depth.
              <br />
              Human <span className="emph">urgency</span>.
            </h2>

            <p
              style={{
                marginTop: 24,
                color: "var(--color-slate)",
                fontSize: 17,
                lineHeight: 1.7,
                maxWidth: 560,
              }}
            >
              Glauc is shaped by a founding team and advisory network across
              AI, medicine, research, and product execution.
            </p>
          </div>

          <div style={{ display: "grid", gap: 18 }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 14,
              }}
            >
              {founders.map((person) => (
                <article
                  key={person.name}
                  className="card"
                  style={{
                    padding: 24,
                    minHeight: 240,
                    background: "rgba(255,255,255,0.76)",
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 999,
                      background: "var(--color-forest)",
                      color: "var(--color-cream)",
                      display: "grid",
                      placeItems: "center",
                      fontFamily: "var(--font-serif)",
                      fontSize: 24,
                      marginBottom: 22,
                    }}
                  >
                    {person.name
                      .split(" ")
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join("")}
                  </div>

                  <h3
                    className="serif"
                    style={{
                      fontSize: 30,
                      lineHeight: 1.08,
                      margin: 0,
                      color: "var(--color-forest)",
                    }}
                  >
                    {person.name}
                  </h3>

                  <div
                    className="label"
                    style={{
                      marginTop: 10,
                      color: "var(--color-glauc-sage)",
                    }}
                  >
                    {person.role}
                  </div>

                  <p
                    style={{
                      margin: "18px 0 0",
                      color: "var(--color-slate)",
                      fontSize: 14,
                      lineHeight: 1.6,
                    }}
                  >
                    {person.detail}
                  </p>
                </article>
              ))}
            </div>

            <div
              className="card"
              style={{
                padding: 24,
                background: "var(--color-forest)",
                backgroundImage: 'url("/assets/texture-forest.jpg")',
                backgroundSize: "cover",
                color: "var(--color-cream)",
              }}
            >
              <div
                className="label"
                style={{ color: "rgba(247,243,238,0.58)" }}
              >
                Advisors
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 12,
                  marginTop: 18,
                }}
              >
                {advisors.map((advisor) => (
                  <div
                    key={advisor.name}
                    style={{
                      border: "1px solid rgba(247,243,238,0.16)",
                      background: "rgba(247,243,238,0.06)",
                      padding: 18,
                      borderRadius: 4,
                    }}
                  >
                    <h4
                      className="serif"
                      style={{
                        margin: 0,
                        color: "var(--color-cream)",
                        fontSize: 24,
                        lineHeight: 1.12,
                      }}
                    >
                      {advisor.name}
                    </h4>
                    <p
                      style={{
                        margin: "10px 0 0",
                        color: "rgba(247,243,238,0.68)",
                        fontSize: 13,
                        lineHeight: 1.5,
                      }}
                    >
                      {advisor.role}
                    </p>
                  </div>
                ))}
              </div>

              <p
                style={{
                  margin: "18px 0 0",
                  color: "rgba(247,243,238,0.62)",
                  fontSize: 12,
                  lineHeight: 1.55,
                }}
              >
                Advisor names and affiliations should be reviewed before public
                launch to ensure correct titles, permissions, and attribution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}