import Link from "next/link";

export default function PrivacyPage() {
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
          Privacy policy
        </h1>

        <LegalBlock title="Overview">
          This privacy policy explains how Glauc may collect and use information
          submitted through this website. This public landing page is intended
          for waitlist, contact, partnership, and investor interest only.
        </LegalBlock>

        <LegalBlock title="Information we collect">
          We may collect your name, email address, role, organization, message,
          and consent preferences when you submit a form. Please do not submit
          medical records, eye photos, or personal health information through
          this website.
        </LegalBlock>

        <LegalBlock title="How information is used">
          Submitted information may be used to respond to inquiries, manage
          waitlist interest, share Glauc updates, review partnership requests,
          and improve website performance.
        </LegalBlock>

        <LegalBlock title="Health information">
          The landing page does not collect diagnostic data, eye images, or
          health records. Any future health-related product experience should be
          governed by separate product-specific consent, security, and privacy
          controls.
        </LegalBlock>

        <LegalBlock title="Data security">
          Glauc intends to use reasonable technical and organizational
          safeguards to protect submitted information, including secure hosting,
          server-side validation, restricted access, and protected environment
          variables.
        </LegalBlock>

        <LegalBlock title="Contact">
          For privacy questions, contact the Glauc team at hello@glauc.ai.
        </LegalBlock>

        <p
          style={{
            marginTop: 40,
            color: "var(--color-stone)",
            fontSize: 12,
            lineHeight: 1.6,
          }}
        >
          Draft policy for development use. Have legal counsel review before
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