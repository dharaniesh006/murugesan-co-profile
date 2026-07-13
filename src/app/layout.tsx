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
    default: "Murugesan & Co. | Hydraulic Hose & Fitting Manufacturer, Chennai",
    template: "%s | Murugesan & Co.",
  },
  description:
    "Murugesan & Co. manufactures hydraulic hose assemblies, end fittings, adapters, stainless steel hoses and precision components from Tiruvallur, Tamil Nadu, serving earth-moving, mining and industrial machinery OEMs since 2005.",
  keywords: [
    "hydraulic hose manufacturer India",
    "hydraulic hose end fittings",
    "hydraulic hose assembly Chennai",
    "stainless steel hose supplier",
    "flange fittings manufacturer",
    "precision components Tamil Nadu",
  ],
  authors: [{ name: "Murugesan & Co." }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Murugesan & Co.",
    title: "Murugesan & Co. | Hydraulic Hose & Fitting Manufacturer",
    description:
      "Manufacturer of hydraulic hose assemblies, end fittings, adapters and precision components, Tiruvallur, Tamil Nadu.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Murugesan & Co. | Hydraulic Hose & Fitting Manufacturer",
    description:
      "Manufacturer of hydraulic hose assemblies, end fittings, adapters and precision components since 2005.",
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
    "Manufacturer, exporter and supplier of hydraulic hoses, hydraulic hose end fittings, adapters, precision components and metal finishing services.",
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
