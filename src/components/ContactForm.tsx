"use client";

import { useState } from "react";

const interestTypes = [
  "Partnership",
  "Clinical inquiry",
  "Investor inquiry",
  "Research",
  "Press",
  "General",
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
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
      company: String(formData.get("company") || ""),
      interestType: String(formData.get("interestType") || ""),
      message: String(formData.get("message") || ""),
      consent: formData.get("consent") === "on",
      turnstileToken: String(formData.get("cf-turnstile-response") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
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
        console.error("Non-JSON contact API response:", text);
        throw new Error("The server returned an unexpected response.");
      }

      if (!response.ok) {
        setStatus("error");
        setMessage(result.message || "Something went wrong.");
        return;
      }

      form.reset();
      setStatus("success");
      setMessage(result.message || "Message received.");
    } catch (error) {
      console.error("Contact submit error:", error);
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <div
          className="card"
          style={{
            padding: 40,
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            gap: 44,
            alignItems: "start",
            background: "rgba(255,255,255,0.78)",
          }}
        >
          <div>
            <div className="label">Contact</div>
            <h2
              className="serif"
              style={{
                fontSize: "clamp(40px, 5vw, 64px)",
                lineHeight: 0.98,
                margin: "16px 0 0",
                color: "var(--color-forest)",
              }}
            >
              Start a conversation with Glauc.
            </h2>
            <p
              style={{
                marginTop: 20,
                color: "var(--color-slate)",
                fontSize: 16,
                lineHeight: 1.7,
              }}
            >
              For partnerships, clinical conversations, investor inquiries, or
              research collaboration, send a short note to the Glauc team.
            </p>
            <p
              style={{
                marginTop: 16,
                color: "var(--color-stone)",
                fontSize: 12,
                lineHeight: 1.55,
              }}
            >
              Please do not include medical records, eye photos, symptoms, or
              personal health information.
            </p>
          </div>

          {status === "success" ? (
            <div>
              <div className="label">Received</div>
              <h3
                className="serif"
                style={{
                  fontSize: 42,
                  color: "var(--color-forest)",
                  margin: "12px 0 0",
                  lineHeight: 1,
                }}
              >
                Message received.
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
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "grid", gap: 14 }}>
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

              <Field label="Company">
                <input name="company" placeholder="Company or organization" />
              </Field>

              <Field label="Interest type *">
                <select required name="interestType" defaultValue="">
                  <option value="" disabled>
                    Select one
                  </option>
                  {interestTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Message *">
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Tell us how you would like to connect."
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
                  I agree to be contacted by Glauc. I understand this form is
                  not for medical advice.
                </span>
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
                {status === "loading" ? "Sending..." : "Send message"}
              </button>
            </form>
          )}
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