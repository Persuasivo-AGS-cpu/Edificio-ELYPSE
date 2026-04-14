import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Edificio Elypse | Oficinas Privadas en San Pedro",
  description: "Espacios profesionales con dirección fiscal en una de las zonas corporativas más importantes de Monterrey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX" className={`${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
