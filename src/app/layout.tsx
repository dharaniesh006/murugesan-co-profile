import type { Metadata } from "next";
import { Barlow_Condensed, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.murugesanco.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Murugesan & Co. | Precision Components & Hydraulic Hose Manufacturer, Chennai",
    template: "%s | Murugesan & Co.",
  },
  description:
    "Murugesan & Co. manufactures precision-turned components for diesel engine OEMs, plus hydraulic hose assemblies, end fittings, adapters and stainless steel hoses, from Tiruvallur, Tamil Nadu, serving OEM, earth-moving, mining and industrial machinery customers since 2005.",
  keywords: [
    "precision components Tamil Nadu",
    "CNC turned components manufacturer India",
    "diesel engine components manufacturer",
    "hydraulic hose manufacturer India",
    "hydraulic hose end fittings",
    "hydraulic hose assembly Chennai",
    "stainless steel hose supplier",
    "flange fittings manufacturer",
  ],
  authors: [{ name: "Murugesan & Co." }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Murugesan & Co.",
    title: "Murugesan & Co. | Precision Components & Hydraulic Hose Manufacturer",
    description:
      "Manufacturer of precision-turned components for diesel engine OEMs, plus hydraulic hose assemblies, end fittings and adapters, Tiruvallur, Tamil Nadu.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Murugesan & Co. | Precision Components & Hydraulic Hose Manufacturer",
    description:
      "Manufacturer of precision-turned components for diesel engine OEMs, plus hydraulic hose assemblies, end fittings and adapters, since 2005.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Manufacturer",
  name: "Murugesan & Co.",
  foundingDate: "2005",
  address: {
    "@type": "PostalAddress",
    streetAddress: "S128 (Development Plot), Kakkalur Industrial Estate",
    addressLocality: "Tiruvallur",
    addressRegion: "Tamil Nadu",
    postalCode: "602003",
    addressCountry: "IN",
  },
  telephone: "+91-9382701199",
  email: "murugesangroups@hotmail.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.murugesanco.com",
  description:
    "Manufacturer, exporter and supplier of precision-turned components for diesel engine OEMs, hydraulic hoses, hydraulic hose end fittings, adapters and metal finishing services.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-brass focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
