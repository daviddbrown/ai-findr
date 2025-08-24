import type { Metadata } from "next";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Resources",
  description: "Guides, reviews, and resources to help you evaluate AI tools.",
  alternates: { canonical: "/resources" },
  openGraph: { images: [{ url: "/api/og?title=Resources", width: 1200, height: 630, alt: `${site.name} Resources` }] },
  twitter: { images: [{ url: "/api/og?title=Resources", alt: `${site.name} Resources` }] },
};
import { AppContainer } from "@/components/layout/AppContainer";

export default function ResourcesPage() {
  return (
    <AppContainer>
      <article className="w-full max-w-3xl prose prose-neutral dark:prose-invert prose-a:text-[var(--accent,#36BAA2)]">
        <h1>Resources</h1>
        <p>Curated guides and reviews are coming soon.</p>
      </article>
    </AppContainer>
  );
}
