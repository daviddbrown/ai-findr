import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { tools } from "@/config/tools";
import { fromSlug, toSlug, getAllCategories, CATEGORY_ALIASES } from "@/lib/categories";
import { site } from "@/config/site";
import { CategoryToolList } from "@/components/finder/CategoryToolList";
import { AppContainer } from "@/components/layout/AppContainer";
import { toJsonLd } from "@/lib/seo";

const VALID = new Set(getAllCategories());

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: raw } = await params;
  const category = decodeURIComponent(raw);
  const normalized = fromSlug(category);

  if (!VALID.has(normalized)) return notFound();
  const items = tools.filter((t) => (t.categories ?? []).includes(normalized));

  return (
    <AppContainer>
      <div className="w-full space-y-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: toJsonLd({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: `What are the best ${normalized} AI tools?`,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: `We curate top ${normalized} AI tools and keep this list updated. Compare features, pricing, and ease-of-use to pick the right option for your workflow.`,
                  },
                },
                {
                  "@type": "Question",
                  name: `How do I choose a ${normalized} AI tool?`,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: `Start with your use case, then weigh ease-of-use, pricing, and integrations. Try a free plan if available and review alternatives in this category.`,
                  },
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: toJsonLd({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: site.url,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Tools",
                  item: `${site.url}/tools`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: normalized,
                  item: `${site.url}/tools/${toSlug(normalized)}`,
                },
              ],
            }),
          }}
        />
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-500">
            <Link href="/" className="hover:underline cursor-pointer">Home</Link>
            <span className="mx-1">/</span>
            <Link href="/tools" className="hover:underline cursor-pointer">Tools</Link>
            <span className="mx-1">/</span>
            <span className="text-neutral-700 dark:text-neutral-300">{normalized}</span>
          </nav>
        </div>
        <header className="text-center w-full max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl font-bold">Best {normalized} AI Tools</h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            Curated tools in the {normalized} category.
          </p>
        </header>
        {items.length ? (
          <CategoryToolList 
            items={items} 
            revealKey={`category:${normalized}`}
            categoryName={normalized}
          />
        ) : (
          <div className="text-sm text-neutral-500 text-center">No tools yet for this category.</div>
        )}
      </div>
    </AppContainer>
  );
}

export async function generateMetadata(
  { params }: { params: Promise<{ category: string }> }
): Promise<Metadata> {
  const { category } = await params;
  const name = fromSlug(decodeURIComponent(category));
  if (!VALID.has(name)) return {};
  const title = `Best ${name} AI Tools 2025`;
  const description = `Curated list of the best ${name} AI tools to help with ${name.toLowerCase()} workflows.`;
  const canonical = `/tools/${toSlug(name)}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      images: [
        { url: `/api/og?title=${encodeURIComponent(`Best ${name} AI Tools`)}`, width: 1200, height: 630, alt: `${site.name} – ${name}` },
      ],
    },
    twitter: { images: [{ url: `/api/og?title=${encodeURIComponent(`Best ${name} AI Tools`)}`, alt: `${site.name} – ${name}` }] },
  };
}

export async function generateStaticParams() {
  const canonical = Array.from(VALID).map((v) => ({ category: toSlug(v) }));
  const aliases = Object.keys(CATEGORY_ALIASES).map((slug) => ({ category: slug }));
  return [...canonical, ...aliases];
}

// Allow params outside of generateStaticParams to resolve at runtime if needed
export const dynamicParams = true;
