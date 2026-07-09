import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glauc: Read the eye. See the future.",
  description:
    "Glauc is smartphone-based biological eye monitoring powered by AI, designed to estimate biological eye age and surface early wellness-risk signals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}