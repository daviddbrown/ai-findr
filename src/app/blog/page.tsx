import type { Metadata } from "next";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights and updates on AI tools and workflows.",
  alternates: { canonical: "/blog" },
  openGraph: { images: [{ url: "/api/og?title=Blog", width: 1200, height: 630, alt: `${site.name} Blog` }] },
  twitter: { images: [{ url: "/api/og?title=Blog", alt: `${site.name} Blog` }] },
};
import { AppContainer } from "@/components/layout/AppContainer";

export default function BlogIndexPage() {
  return (
    <AppContainer>
      <article className="w-full max-w-3xl prose prose-neutral dark:prose-invert prose-a:text-[var(--accent,#36BAA2)]">
        <h1>Blog</h1>
        <p>Posts are coming soon.</p>
      </article>
    </AppContainer>
  );
}
