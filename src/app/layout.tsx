import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { footerLinks, site } from "@/config/site";
import React from "react";
import { websiteSchema, toJsonLd } from "@/lib/seo";
import { CookieConsent } from "@/components/legal/CookieConsent";
import { ScrollTopOnMount } from "@/components/utility/ScrollTopOnMount";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.name,
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}>
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(websiteSchema(site)) }} />
        <div className="min-h-screen flex flex-col">
          <ScrollTopOnMount />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer links={footerLinks} />
        </div>
  <CookieConsent />
      </body>
    </html>
  );
}
