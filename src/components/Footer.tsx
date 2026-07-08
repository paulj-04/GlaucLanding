export default function Footer() {
  return (
    <footer
      style={{
        padding: "40px 64px",
        borderTop: "1px solid var(--color-border)",
        color: "var(--color-stone)",
      }}
    >
      <div className="section-inner">
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} Glauc. FDA Class I General Wellness
          Device. Not a diagnostic tool. Clinical judgment required.
        </p>
      </div>
    </footer>
  );
}