import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent/CookieConsent";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_URL = "https://edificio-elypse.vercel.app";
const TITLE = "Edificio Elypse | Oficinas Privadas en San Pedro";
const DESCRIPTION = "Espacios profesionales con dirección fiscal en una de las zonas corporativas más importantes de Monterrey.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: "Edificio Elypse",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Edificio Elypse",
  description: DESCRIPTION,
  url: SITE_URL,
  telephone: "+528111062487",
  priceRange: "$12,500 MXN",
  address: {
    "@type": "PostalAddress",
    streetAddress: "San Alberto Ote. 301, Residencial Santa Bárbara",
    addressLocality: "San Pedro Garza García",
    addressRegion: "Nuevo León",
    addressCountry: "MX",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX" className={`${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}
