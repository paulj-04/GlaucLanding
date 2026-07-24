import { z } from "zod";

export const waitlistSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(120, "Name is too long."),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address.")
    .max(180, "Email is too long."),
  role: z
    .string()
    .trim()
    .min(1, "Role is required.")
    .max(80, "Role is too long."),
  organization: z
    .string()
    .trim()
    .max(160, "Organization is too long.")
    .optional()
    .or(z.literal("")),
  reason: z
    .string()
    .trim()
    .max(1200, "Reason is too long.")
    .optional()
    .or(z.literal("")),
  consent: z.boolean().refine((value) => value === true, {
    message: "Consent is required.",
  }),
  marketingOptIn: z.boolean().optional().default(false),
});

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(120, "Name is too long."),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address.")
    .max(180, "Email is too long."),
  company: z
    .string()
    .trim()
    .max(160, "Company is too long.")
    .optional()
    .or(z.literal("")),
  interestType: z
    .string()
    .trim()
    .min(1, "Interest type is required.")
    .max(80, "Interest type is too long."),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(2000, "Message is too long."),
  consent: z.boolean().refine((value) => value === true, {
    message: "Consent is required.",
  }),
});

export type ContactInput = z.infer<typeof contactSchema>;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

export type WaitlistInput = z.infer<typeof waitlistSchema>;