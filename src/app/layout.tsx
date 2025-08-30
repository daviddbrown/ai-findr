import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { footerLinks, site } from "@/config/site";
import React, { Suspense } from "react";
import { websiteSchema, organizationSchema, toJsonLd } from "@/lib/seo";
import { CookieConsent } from "@/components/legal/CookieConsent";
import { ScrollTopOnMount } from "@/components/utility/ScrollTopOnMount";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { analyticsConfig } from "@/config/analytics";
import { Analytics } from "@vercel/analytics/react";
import { PageViewTracker } from "@/components/analytics/PageViewTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const bingVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: "%s | " + site.name,
  },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  verification: {
    google: googleVerification,
    other: bingVerification ? { "msvalidate.01": bingVerification } : undefined,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans text-neutral-100`}>
  {analyticsConfig.ga4MeasurementId && <GoogleAnalytics ga4MeasurementId={analyticsConfig.ga4MeasurementId} />}
  {/* Track client-side navigations */}
  <Suspense fallback={null}>
    <PageViewTracker />
  </Suspense>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(websiteSchema(site)) }} />
        {(() => {
          const sameAs = [site.social?.twitter, site.social?.linkedin].filter(Boolean) as string[];
          return (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: toJsonLd(organizationSchema(site, { sameAs })) }}
            />
          );
        })()}
        <div className="min-h-screen flex flex-col">
          <ScrollTopOnMount />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer links={footerLinks} />
        </div>
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
