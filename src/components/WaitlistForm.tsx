"use client";

import { useState } from "react";

const roles = [
  "Patient / consumer",
  "Clinician",
  "Researcher",
  "Investor",
  "Partner",
  "Other",
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function WaitlistForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

  setStatus("loading");
  setMessage("");

  const payload = {
    name: String(formData.get("name") || ""),
    email: String(formData.get("email") || ""),
    role: String(formData.get("role") || ""),
    organization: String(formData.get("organization") || ""),
    reason: String(formData.get("reason") || ""),
    consent: formData.get("consent") === "on",
    marketingOptIn: formData.get("marketingOptIn") === "on",
    turnstileToken: String(formData.get("cf-turnstile-response") || ""),
  };

  try {
    const response = await fetch("/api/waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const text = await response.text();

    let result: { ok?: boolean; message?: string } = {};

    try {
      result = text ? JSON.parse(text) : {};
    } catch {
      console.error("Non-JSON API response:", text);
      throw new Error("The server returned an unexpected response.");
    }

    if (!response.ok) {
      setStatus("error");
      setMessage(result.message || "Something went wrong.");
      return;
    }

    form.reset();
    setStatus("success");
    setMessage(result.message || "You are on the waitlist.");
  } catch (error) {
    console.error("Waitlist submit error:", error);
    setStatus("error");
    setMessage("Network error. Please try again.");
  }
}

  return (
    <section
      id="waitlist"
      className="section"
      style={{
        background: "var(--color-forest)",
        backgroundImage: 'url("/assets/texture-forest.jpg")',
        backgroundSize: "cover",
        color: "var(--color-cream)",
      }}
    >
      <div className="section-inner">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            gap: 56,
            alignItems: "start",
          }}
        >
          <div>
            <div
              className="label"
              style={{ color: "rgba(247,243,238,0.6)" }}
            >
              Join waitlist
            </div>

            <h2
              className="serif"
              style={{
                fontSize: "clamp(44px, 5vw, 76px)",
                lineHeight: 0.98,
                margin: "18px 0 0",
                color: "var(--color-cream)",
                letterSpacing: "-0.015em",
              }}
            >
              Follow the future before it comes into{" "}
              <span className="emph">focus</span>.
            </h2>

            <p
              style={{
                marginTop: 24,
                color: "rgba(247,243,238,0.78)",
                fontSize: 17,
                lineHeight: 1.7,
                maxWidth: 560,
              }}
            >
              Join the Glauc waitlist for early updates, partnership
              opportunities, and future access announcements.
            </p>

            <p
              style={{
                marginTop: 18,
                color: "rgba(247,243,238,0.52)",
                fontSize: 12,
                lineHeight: 1.55,
                maxWidth: 560,
              }}
            >
              Please do not submit medical information through this form. Glauc
              will never ask for eye photos or health records through the public
              landing page.
            </p>
          </div>

          <div
            style={{
              background: "var(--color-cream)",
              color: "var(--color-ink)",
              border: "1px solid rgba(247,243,238,0.18)",
              borderRadius: 4,
              padding: 28,
              boxShadow: "0 16px 48px rgba(0,0,0,0.18)",
            }}
          >
            {status === "success" ? (
              <div style={{ padding: "24px 0" }}>
                <div className="label">Received</div>
                <h3
                  className="serif"
                  style={{
                    fontSize: 44,
                    lineHeight: 1,
                    color: "var(--color-forest)",
                    margin: "14px 0 0",
                  }}
                >
                  You’re on the list.
                </h3>
                <p
                  style={{
                    marginTop: 16,
                    color: "var(--color-slate)",
                    lineHeight: 1.65,
                  }}
                >
                  {message}
                </p>
                <button
                  className="secondary-button"
                  style={{ marginTop: 18 }}
                  onClick={() => {
                    setStatus("idle");
                    setMessage("");
                  }}
                >
                  Submit another response
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "grid",
                  gap: 16,
                }}
              >
                <div>
                  <div className="label">Waitlist form</div>
                  <h3
                    className="serif"
                    style={{
                      fontSize: 40,
                      lineHeight: 1.05,
                      margin: "10px 0 4px",
                      color: "var(--color-forest)",
                    }}
                  >
                    Stay close to Glauc.
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      color: "var(--color-stone)",
                      fontSize: 13,
                      lineHeight: 1.5,
                    }}
                  >
                    Fields marked with * are required.
                  </p>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 12,
                  }}
                >
                  <Field label="Full name *">
                    <input required name="name" placeholder="Your name" />
                  </Field>

                  <Field label="Email *">
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                    />
                  </Field>
                </div>

                <Field label="I am a... *">
                  <select required name="role" defaultValue="">
                    <option value="" disabled>
                      Select one
                    </option>
                    {roles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Organization">
                  <input
                    name="organization"
                    placeholder="Company, clinic, school, or fund"
                  />
                </Field>

                <Field label="Why are you interested?">
                  <textarea
                    name="reason"
                    rows={4}
                    placeholder="Tell us what brought you here."
                  />
                </Field>

                <label
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    fontSize: 12,
                    lineHeight: 1.5,
                    color: "var(--color-slate)",
                  }}
                >
                  <input
                    required
                    name="consent"
                    type="checkbox"
                    style={{ marginTop: 3, width: "auto" }}
                  />
                  <span>
                    I agree to be contacted by Glauc about updates,
                    partnerships, or future access. I understand this form is
                    not for medical advice.
                  </span>
                </label>

                <label
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    fontSize: 12,
                    lineHeight: 1.5,
                    color: "var(--color-stone)",
                  }}
                >
                  <input
                    name="marketingOptIn"
                    type="checkbox"
                    style={{ marginTop: 3, width: "auto" }}
                  />
                  <span>Send me occasional product and research updates.</span>
                </label>

                {status === "error" && (
                  <div
                    style={{
                      border: "1px solid #C0392B",
                      background: "#FDF0EF",
                      color: "#8B1E16",
                      borderRadius: 4,
                      padding: 12,
                      fontSize: 13,
                      lineHeight: 1.5,
                    }}
                  >
                    {message}
                  </div>
                )}
                {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && (
                  <div
                    className="cf-turnstile"
                    data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                  />
                )}
                <button
                  className="primary-button"
                  type="submit"
                  disabled={status === "loading"}
                  style={{
                    opacity: status === "loading" ? 0.72 : 1,
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                  }}
                >
                  {status === "loading" ? "Joining..." : "Join waitlist"}
                </button>

                <p
                  style={{
                    margin: 0,
                    fontSize: 11,
                    lineHeight: 1.5,
                    color: "var(--color-stone)",
                  }}
                >
                  Your submission is stored securely for Glauc follow-up. Please
                  do not include medical information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label style={{ display: "grid", gap: 7 }}>
      <span className="label" style={{ fontSize: 10 }}>
        {label}
      </span>
      {children}
    </label>
  );
}