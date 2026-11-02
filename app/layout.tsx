import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spiritual Energy | Do You Feel There’s More?",
  description: "A new way to explore spirituality, growth and connection. Join the waitlist for early access.",
  openGraph: {
    title: "Spiritual Energy | Do You Feel There’s More?",
    description: "A space to pause, discover and connect. Join the waitlist.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
