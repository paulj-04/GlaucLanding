import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const notifyEmail = process.env.GLAUC_NOTIFY_EMAIL;
const fromEmail = process.env.GLAUC_FROM_EMAIL || "Glauc <onboarding@resend.dev>";

export const emailEnabled = Boolean(resendApiKey && notifyEmail);

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function sendWaitlistNotification(input: {
  name: string;
  email: string;
  role: string;
  organization?: string | null;
  reason?: string | null;
  marketingOptIn?: boolean;
}) {
  if (!emailEnabled || !resend || !notifyEmail) return;

  await resend.emails.send({
    from: fromEmail,
    to: notifyEmail,
    subject: `New Glauc waitlist signup: ${input.name}`,
    text: `
New Glauc waitlist signup

Name: ${input.name}
Email: ${input.email}
Role: ${input.role}
Organization: ${input.organization || "N/A"}
Marketing opt-in: ${input.marketingOptIn ? "Yes" : "No"}

Reason:
${input.reason || "N/A"}
`.trim(),
  });
}

export async function sendContactNotification(input: {
  name: string;
  email: string;
  company?: string | null;
  interestType: string;
  message: string;
}) {
  if (!emailEnabled || !resend || !notifyEmail) return;

  await resend.emails.send({
    from: fromEmail,
    to: notifyEmail,
    subject: `New Glauc contact message: ${input.interestType}`,
    text: `
New Glauc contact message

Name: ${input.name}
Email: ${input.email}
Company: ${input.company || "N/A"}
Interest type: ${input.interestType}

Message:
${input.message}
`.trim(),
  });
}