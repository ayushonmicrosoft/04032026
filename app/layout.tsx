import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site/Header";
import { SiteFooter } from "@/components/site/Footer";
import { CookieConsentBar } from "@/components/site/CookieConsentBar";
import dynamic from "next/dynamic";
import QueryProvider from "@/app/providers/QueryProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const AdvancedBot = dynamic(() =>
  import("@/components/bot/AdvancedBot").then((m) => ({
    default: m.AdvancedBot,
  })), { ssr: false });
const AIAdvisor = dynamic(() =>
  import("@/components/ai/Advisor").then((m) => ({
    default: m.AIAdvisor,
  })), { ssr: false });

const FALLBACK_SITE_URL = "https://ourwebsitecopy2026-02-21.vercel.app";
const RAW_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "");
const SITE_URL = (RAW_SITE_URL || FALLBACK_SITE_URL).replace(/\/+$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "One and Only Furniture | Premium Office Solutions - Gurugram, Haryana",
    template: "%s | One and Only Furniture",
  },
  description:
    "One and Only Furniture - premium ergonomic office furniture in Gurugram, Haryana, India. Workstations, seating, storage, tables and soft seating.",
  keywords: [
    "office furniture Gurugram",
    "premium office furniture Haryana",
    "ergonomic chairs India",
    "modular workstations Gurugram",
    "office furniture Haryana",
    "One and Only Furniture",
    "oando furniture",
    "office chairs Gurugram",
    "meeting tables Haryana",
    "storage solutions India",
  ],
  authors: [{ name: "One and Only Furniture", url: SITE_URL }],
  creator: "One and Only Furniture",
  publisher: "One and Only Furniture",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "One and Only Furniture",
    title: "One and Only Furniture | Premium Office Solutions",
    description:
      "Premium ergonomic office furniture in Gurugram, Haryana. Workstations, seating, storage and more.",
    images: [
      {
        url: "/images/products/imported/fluid/image-1.webp",
        width: 1200,
        height: 630,
        alt: "One and Only Furniture - Premium Office Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "One and Only Furniture | Premium Office Solutions",
    description:
      "Premium ergonomic office furniture in Gurugram, Haryana. Workstations, seating, storage and more.",
    images: ["/images/products/imported/fluid/image-1.webp"],
  },
};

const LOCAL_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  name: "One and Only Furniture",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Premium ergonomic office furniture in Gurugram, Haryana, India. Authorized dealer for leading office furniture brands.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Khasra No. 129, Village, Kherki Daula, Sector 84",
    addressLocality: "Gurugram",
    postalCode: "122004",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 28.4312, longitude: 76.9854 },
  telephone: "+91-124-403-1666",
  openingHours: "Mo-Sa 09:00-18:00",
  priceRange: "INR",
  areaServed: ["Haryana", "Delhi NCR", "Uttar Pradesh", "India"],
  sameAs: [
    SITE_URL,
    "https://www.facebook.com/oandofurniture",
    "https://www.youtube.com/channel/UCehXuPNAXkyfODPCwyAU1gQ",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD),
          }}
        />
      </head>
      <body className="antialiased bg-white selection:bg-primary selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-9999 focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Skip to main content
        </a>
        <QueryProvider>
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
          <CookieConsentBar />
          <AdvancedBot />
          <AIAdvisor />
          <Analytics />
          <SpeedInsights />
        </QueryProvider>
      </body>
    </html>
  );
}
