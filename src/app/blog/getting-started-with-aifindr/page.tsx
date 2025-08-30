import type { Metadata } from "next";
import Link from "next/link";
import { AppContainer } from "@/components/layout/AppContainer";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Getting Started with aiFindr",
  description: "How to find the right AI tools by category, search, and editor’s picks.",
  alternates: { canonical: "/blog/getting-started-with-aifindr" },
  openGraph: { images: [{ url: "/api/og?title=Getting%20Started%20with%20aiFindr", width: 1200, height: 630, alt: `${site.name} Blog` }] },
  twitter: { images: [{ url: "/api/og?title=Getting%20Started%20with%20aiFindr", alt: `${site.name} Blog` }] },
};

export default function PostPage() {
  const title = "Getting Started with aiFindr";
  const description = "How to find the right AI tools by category, search, and editor’s picks.";
  const datePublished = new Date().toISOString();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    author: [{ "@type": "Person", name: "aiFindr" }],
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}/blog/getting-started-with-aifindr` },
  } as const;

  return (
    <AppContainer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="w-full max-w-3xl prose prose-neutral dark:prose-invert prose-a:text-[var(--accent,#36BAA2)]">
        <h1>{title}</h1>
        <p className="lead">{description}</p>
        <h2>Browse by Category</h2>
        <p>Jump into a category to see top tools curated for that workflow.</p>
        <ul>
          <li><Link href="/tools/writing">Writing</Link></li>
          <li><Link href="/tools/images">Images</Link></li>
          <li><Link href="/tools/video">Video</Link></li>
          <li><Link href="/tools/coding">Coding</Link></li>
          <li><Link href="/tools/seo">SEO</Link></li>
          <li><Link href="/tools/automation">Automation</Link></li>
        </ul>
        <h2>Search by Need</h2>
        <p>Use the search bar on the homepage and try a phrase like “product photo background” or “podcast transcription”.</p>
        <h2>Pick a Tool</h2>
        <p>Open a tool, compare features and pricing, and try it using the CTA link. We’re adding reviews and guides regularly.</p>
        <p>Want a quick win? Read <Link href="/blog/best-ai-tools-for-product-images">Best AI Tools for Product Images (2025)</Link>.</p>
      </article>
    </AppContainer>
  );
}
