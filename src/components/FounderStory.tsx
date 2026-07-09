import Image from "next/image";

export default function FounderStory() {
  return (
    <section id="story" className="section">
      <div className="section-inner">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.95fr 1.05fr",
            gap: 56,
            alignItems: "center",
          }}
        >
          <div
            className="card"
            style={{
              padding: 12,
              background: "rgba(255,255,255,0.72)",
            }}
          >
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 4,
                minHeight: 560,
              }}
            >
              <Image
                src="/assets/family-photo.jpg"
                alt="Founder story"
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          <div>
            <div className="label">Founder story</div>

            <h2
              className="serif"
              style={{
                fontSize: "clamp(44px, 5vw, 72px)",
                lineHeight: 0.98,
                letterSpacing: "-0.015em",
                margin: "18px 0 0",
                color: "var(--color-forest)",
              }}
            >
              Built from a personal reason to make vision intelligence{" "}
              <span className="emph">accessible</span>.
            </h2>

            <div
              style={{
                marginTop: 28,
                display: "grid",
                gap: 18,
                color: "var(--color-slate)",
                fontSize: 17,
                lineHeight: 1.75,
                maxWidth: 620,
              }}
            >
              <p style={{ margin: 0 }}>
                Glauc began with a simple belief: early health insight should
                not require specialized equipment, long wait times, or a
                clinical setting every time someone wants to understand what may
                be changing in their body.
              </p>

              <p style={{ margin: 0 }}>
                The eye offers a uniquely visible window into biological
                patterns. Glauc brings that window closer — using the smartphone
                camera people already carry and AI designed to translate ocular
                signals into understandable wellness insight.
              </p>

              <p style={{ margin: 0 }}>
                The mission is not to replace doctors. It is to help people,
                clinicians, and partners recognize when a closer look may be
                worth taking.
              </p>
            </div>

            <div
              style={{
                marginTop: 34,
                paddingTop: 22,
                borderTop: "1px solid var(--color-border)",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 14,
              }}
            >
              {[
                ["Mission", "Accessible monitoring"],
                ["Method", "Smartphone-based"],
                ["Role", "Wellness support"],
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="label" style={{ fontSize: 9 }}>
                    {label}
                  </div>
                  <div
                    style={{
                      marginTop: 8,
                      color: "var(--color-forest)",
                      fontSize: 14,
                      lineHeight: 1.4,
                    }}
                  >
                    {value}
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