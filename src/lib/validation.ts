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

export type WaitlistInput = z.infer<typeof waitlistSchema>;