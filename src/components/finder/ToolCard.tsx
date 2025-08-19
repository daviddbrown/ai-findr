import type { ToolItem } from "@/types/tools";

export function ToolCard({ tool }: { tool: ToolItem }) {
  const { name, tagline, rating, difficulty, price, prosCons, ctaHref, ctaLabel, categories, tags } = tool;
  return (
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{name}</h3>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-amber-500">★</span>
          <span className="font-medium">{rating.toFixed(1)}</span>
          <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">{difficulty}</span>
        </div>
      </div>
      {(categories?.length || tags?.length) && (
        <div className="flex flex-wrap gap-2 text-xs">
          {(categories ?? []).map((c) => (
            <span key={c} className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              {c}
            </span>
          ))}
          {(tags ?? []).map((t) => (
            <span key={t} className="px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
              {t}
            </span>
          ))}
        </div>
      )}
      <p className="text-sm text-neutral-600 dark:text-neutral-400">{tagline}</p>
      <div className="grid grid-cols-2 gap-6 text-sm">
        <div>
          <div className="text-green-600 font-semibold mb-1">Pros:</div>
          <ul className="list-disc pl-5 space-y-1">
            {prosCons.pros.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-red-600 font-semibold mb-1">Cons:</div>
          <ul className="list-disc pl-5 space-y-1">
            {prosCons.cons.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm">
        <div className="text-neutral-600 dark:text-neutral-400">{price}</div>
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 h-10 rounded-lg bg-blue-600 text-white hover:bg-blue-500"
        >
          <span>⚡</span>
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}
