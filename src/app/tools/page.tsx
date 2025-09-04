import type { Metadata } from "next";
import Link from "next/link";
import { AppContainer } from "@/components/layout/AppContainer";
import { site } from "@/config/site";
import { tools } from "@/config/tools";
import { getAllCategories, toSlug } from "@/lib/categories";
import { Reveal } from "@/components/utility/Reveal";
import { toJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "AI Tool Categories",
  description: "Browse all AI tool categories on " + site.name + ".",
  alternates: { canonical: "/tools" },
};

export default function ToolsIndexPage() {
  const counts = new Map<string, number>();
  for (const t of tools) {
    for (const c of t.categories ?? []) counts.set(c, (counts.get(c) ?? 0) + 1);
  }
  const categories = getAllCategories();
  const sortedByCount = [...categories].sort((a, b) => (counts.get(b) ?? 0) - (counts.get(a) ?? 0));
  const topForSchema = sortedByCount.slice(0, 10);
  const trending = sortedByCount.slice(0, 5);

  return (
    <AppContainer>
      <div className="relative overflow-hidden">
        {/* Subtle hero accent similar to About */}
        <div className="absolute inset-0 -z-10 bg-hero-accent" />

        {/* Hero */}
        <section className="text-center px-6 pt-16 pb-14 sm:pt-20 sm:pb-16">
          <Reveal>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
              Explore <span style={{ color: "var(--accent)" }}>AI Tool</span> Categories
            </h1>
          </Reveal>
          <Reveal delayMs={80}>
            <p className="mt-5 max-w-2xl mx-auto text-neutral-600 dark:text-neutral-300 text-lg">
              Browse every category we cover—from writing and images to automation and coding. Each category page curates the top tools, highlights pros and cons, and helps you quickly compare options without the noise.
            </p>
          </Reveal>
        </section>

  {/* Breadcrumb removed per request */}

    {/* Trending row (single line, 5 items) */}
        <section className="px-6 mt-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">Trending</h2>
      <ul className="mt-3 flex flex-nowrap gap-3">
              {trending.map((c) => (
        <li key={c} className="shrink-0">
                  <Link
                    href={`/tools/${toSlug(c)}`}
                    className="block rounded-2xl border bg-white/60 dark:bg-neutral-900/40 border-neutral-200 dark:border-neutral-800 backdrop-blur px-4 py-3 hover:bg-white/80 dark:hover:bg-neutral-900/60 transition-colors cursor-pointer min-w-[180px]"
                  >
                    <div className="font-medium text-neutral-900 dark:text-neutral-100 truncate">{c}</div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400">{counts.get(c) ?? 0} tools</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* All categories A–Z */}
        <section id="all" className="px-6 mt-10 mb-14">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">All categories</h2>
            <ul className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 text-sm">
              {categories.map((c) => (
                <li key={c}>
                  <Link
                    href={`/tools/${toSlug(c)}`}
                    className="flex items-center justify-between rounded-md px-3 py-2 border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/30 backdrop-blur hover:bg-white/80 dark:hover:bg-neutral-900/60 transition-colors cursor-pointer"
                  >
                    <span className="truncate">{c}</span>
                    <span className="ml-3 text-xs text-neutral-500 dark:text-neutral-400">{counts.get(c) ?? 0}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ItemList JSON-LD for top categories */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: toJsonLd({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: topForSchema.map((name, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name,
                url: `${site.url}/tools/${toSlug(name)}`,
              })),
            }),
          }}
        />
      </div>
    </AppContainer>
  );
}
