import type { Metadata } from "next";
import { site } from "@/config/site";
import fs from "node:fs";
import path from "node:path";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights and updates on AI tools and workflows.",
  alternates: { canonical: "/blog" },
  openGraph: { images: [{ url: "/api/og?title=Blog", width: 1200, height: 630, alt: `${site.name} Blog` }] },
  twitter: { images: [{ url: "/api/og?title=Blog", alt: `${site.name} Blog` }] },
};
import { AppContainer } from "@/components/layout/AppContainer";

export default function BlogIndexPage() {
  const blogDir = path.join(process.cwd(), "src", "app", "blog");
  let slugs: string[] = [];
  try {
    const items = fs.readdirSync(blogDir, { withFileTypes: true });
    slugs = items
      .filter((d) => d.isDirectory())
      .filter((d) => fs.existsSync(path.join(blogDir, d.name, "page.tsx")))
      .map((d) => d.name)
      .sort();
  } catch {}

  const toTitle = (s: string) =>
    s
      .split("-")
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join(" ");

  return (
    <AppContainer>
      <article className="w-full max-w-3xl prose prose-neutral dark:prose-invert prose-a:text-[var(--accent,#36BAA2)]">
        <h1>Blog</h1>
        {slugs.length ? (
          <>
            <p>Latest posts:</p>
            <ul>
              {slugs.map((slug) => (
                <li key={slug}>
                  <a href={`/blog/${slug}`}>{toTitle(slug)}</a>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p>Posts are coming soon.</p>
        )}
      </article>
    </AppContainer>
  );
}
