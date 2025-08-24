import type { Metadata } from "next";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Newsletter",
  description: "Subscribe to get new AI tool discoveries and insights.",
  alternates: { canonical: "/newsletter" },
  openGraph: { images: [{ url: "/api/og?title=Newsletter", width: 1200, height: 630, alt: `${site.name} Newsletter` }] },
  twitter: { images: [{ url: "/api/og?title=Newsletter", alt: `${site.name} Newsletter` }] },
};
import { AppContainer } from "@/components/layout/AppContainer";

export default function NewsletterPage() {
  return (
    <AppContainer>
      <article className="w-full max-w-3xl prose prose-neutral dark:prose-invert prose-a:text-[var(--accent,#36BAA2)]">
        <h1>Newsletter</h1>
        <p>Newsletter signup is coming soon.</p>
      </article>
    </AppContainer>
  );
}
