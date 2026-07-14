import Image from "next/image";

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(247, 243, 238, 0.86)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <nav
        style={{
          height: 72,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Image
            src="/assets/logo-g-forest.png"
            alt="Glauc"
            width={34}
            height={34}
          />
          <span
            className="serif"
            style={{ fontFamily: "Hagrid", fontSize: 28, color: "var(--color-forest)" }}
          >
            Glauc
          </span>
        </a>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            fontSize: 14,
            color: "var(--color-slate)",
          }}
        >
          <a href="#science">Science</a>
          <a href="#platform">Platform</a>
          <a href="#story">Story</a>
          <a href="#team">Team</a>
          <a href="#waitlist" className="primary-button">
            Join waitlist
          </a>
        </div>
      </nav>
    </header>
  );
}