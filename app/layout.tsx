import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roadmap to Success — For Chambers, Associations & Economic Development",
  description:
    "Roadmap to Success is the AI Sherpa Guide platform that transforms your small business members into measurably stronger, more successful companies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
