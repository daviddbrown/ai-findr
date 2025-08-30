import type { Metadata } from "next";
import { AppContainer } from "@/components/layout/AppContainer";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Best AI Tools for Product Images (2025)",
  description: "A practical guide to AI tools for creating and improving ecommerce product images.",
  alternates: { canonical: "/blog/best-ai-tools-for-product-images" },
  openGraph: { images: [{ url: "/api/og?title=Best%20AI%20Tools%20for%20Product%20Images", width: 1200, height: 630, alt: `${site.name} Blog` }] },
  twitter: { images: [{ url: "/api/og?title=Best%20AI%20Tools%20for%20Product%20Images", alt: `${site.name} Blog` }] },
};

export default function PostPage() {
  const title = "Best AI Tools for Product Images (2025)";
  const description = "A practical guide to AI tools for creating and improving ecommerce product images.";
  const datePublished = new Date().toISOString();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    author: [{ "@type": "Person", name: "aiFindr" }],
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}/blog/best-ai-tools-for-product-images` },
  } as const;

  return (
    <AppContainer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="w-full max-w-3xl prose prose-neutral dark:prose-invert prose-a:text-[var(--accent,#36BAA2)]">
        <h1>{title}</h1>
        <p className="lead">{description}</p>
        <h2>What to look for</h2>
        <ul>
          <li>Background removal and replacement</li>
          <li>Batch processing and presets</li>
          <li>Quality (edges, shadows, texture)</li>
          <li>Integrations and pricing</li>
        </ul>
        <h2>Top picks</h2>
        <ol>
          <li>Photoroom – quick backgrounds, ecommerce presets</li>
          <li>Remove.bg – fast and simple background removal</li>
          <li>Clipdrop – versatile editing and upscaling</li>
        </ol>
        <p>See our Images and SEO categories for more options.</p>
      </article>
    </AppContainer>
  );
}
