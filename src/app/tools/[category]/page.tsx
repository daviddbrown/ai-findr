import { notFound } from "next/navigation";
import { tools } from "@/config/tools";
import { ToolList } from "@/components/finder/ToolList";
import { AppContainer } from "@/components/layout/AppContainer";

const VALID = new Set([
  "Research",
  "Transcription",
  "Automation",
  "Images",
  "Video",
  "Writing",
  "Coding",
  "Docs",
  "Presentations",
  "Audio",
  "Chat",
]);

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: raw } = await params;
  const category = decodeURIComponent(raw);
  const normalized = category
    .replace(/-/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());

  if (!VALID.has(normalized)) return notFound();
  const items = tools.filter((t) => (t.categories ?? []).includes(normalized));

  return (
    <AppContainer>
      <div className="space-y-6">
        <header className="text-center">
          <h1 className="text-3xl font-bold">Best {normalized} AI Tools</h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            Curated tools in the {normalized} category.
          </p>
        </header>
        {items.length ? (
          <ToolList items={items} />
        ) : (
          <div className="text-sm text-neutral-500 text-center">No tools yet for this category.</div>
        )}
      </div>
    </AppContainer>
  );
}
