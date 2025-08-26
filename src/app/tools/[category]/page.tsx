import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { tools } from "@/config/tools";
import { fromSlug, toSlug, getAllCategories } from "@/lib/categories";
import { site } from "@/config/site";
import { CategoryToolList } from "@/components/finder/CategoryToolList";
import { AppContainer } from "@/components/layout/AppContainer";

const VALID = new Set(getAllCategories());

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: raw } = await params;
  const category = decodeURIComponent(raw);
  const normalized = fromSlug(category);

  if (!VALID.has(normalized)) return notFound();
  const items = tools.filter((t) => (t.categories ?? []).includes(normalized));

  return (
    <AppContainer>
      <div className="space-y-6">
        <nav aria-label="Breadcrumb" className="text-sm text-neutral-500">
          <Link href="/" className="hover:underline cursor-pointer">Home</Link>
          <span className="mx-1">/</span>
          <Link href="/" className="hover:underline cursor-pointer">Tools</Link>
          <span className="mx-1">/</span>
          <span className="text-neutral-700 dark:text-neutral-300">{normalized}</span>
        </nav>
        <header className="text-center">
          <h1 className="text-3xl font-bold">Best {normalized} AI Tools</h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            Curated tools in the {normalized} category.
          </p>
        </header>
        {items.length ? (
          <CategoryToolList items={items} revealKey={`category:${normalized}`} />
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
  return Array.from(VALID).map((v) => ({ category: toSlug(v) }));
}
