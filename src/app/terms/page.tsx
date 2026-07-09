import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="section">
      <div className="section-inner" style={{ maxWidth: 860 }}>
        <Link
          href="/"
          style={{
            color: "var(--color-forest)",
            fontSize: 14,
            textDecoration: "underline",
          }}
        >
          ← Back to home
        </Link>

        <div className="label" style={{ marginTop: 48 }}>
          Legal
        </div>

        <h1
          className="serif"
          style={{
            fontSize: "clamp(48px, 7vw, 88px)",
            lineHeight: 0.95,
            color: "var(--color-forest)",
            margin: "18px 0 28px",
          }}
        >
          Terms of use
        </h1>

        <LegalBlock title="Use of this website">
          This website is provided for informational, waitlist, partnership, and
          investor-interest purposes. By using this site, you agree not to misuse
          the forms, submit harmful content, or attempt unauthorized access.
        </LegalBlock>

        <LegalBlock title="No medical advice">
          Content on this website is not medical advice and should not be used
          to diagnose, treat, cure, or prevent disease. Always consult a
          qualified healthcare professional for medical concerns.
        </LegalBlock>

        <LegalBlock title="General wellness positioning">
          Glauc is described as a general wellness technology concept and is not
          presented here as a diagnostic medical device. Product claims,
          regulatory status, and clinical language should be reviewed before
          public release.
        </LegalBlock>

        <LegalBlock title="Form submissions">
          You agree not to submit medical records, eye photos, or sensitive
          health information through public website forms. Any information you do
          submit should be accurate and authorized by you.
        </LegalBlock>

        <LegalBlock title="Intellectual property">
          The Glauc name, brand assets, page design, copy, and related materials
          are owned by or licensed to Glauc unless otherwise stated.
        </LegalBlock>

        <LegalBlock title="Contact">
          For questions about these terms, contact hello@glauc.ai.
        </LegalBlock>

        <p
          style={{
            marginTop: 40,
            color: "var(--color-stone)",
            fontSize: 12,
            lineHeight: 1.6,
          }}
        >
          Draft terms for development use. Have legal counsel review before
          public launch.
        </p>
      </div>
    </main>
  );
}

function LegalBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginTop: 28 }}>
      <h2
        className="serif"
        style={{
          fontSize: 32,
          color: "var(--color-ink)",
          margin: 0,
        }}
      >
        {title}
      </h2>
      <p
        style={{
          marginTop: 10,
          color: "var(--color-slate)",
          lineHeight: 1.75,
          fontSize: 15,
        }}
      >
        {children}
      </p>
    </section>
  );
}