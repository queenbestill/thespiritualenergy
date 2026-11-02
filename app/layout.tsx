import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Spiritual Energy | ¿Sientes que hay algo más?",
  description: "Una nueva forma de explorar lo que significa vivir, conectar y crecer.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
