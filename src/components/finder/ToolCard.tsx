import type { ToolItem } from "@/types/tools";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { analytics } from "@/components/analytics/GoogleAnalytics";

export function ToolCard({ tool, listIndex, itemListName }: { tool: ToolItem; listIndex?: number; itemListName?: string }) {
  const { name, tagline, rating, difficulty, price, prosCons, ctaHref, ctaLabel, categories, tags, logo } = tool;
  
  const handleAffiliateClick = () => {
  // Track the affiliate click (GA4 ecommerce-style)
  analytics.affiliateClick(tool, { affiliateUrl: ctaHref, itemListName, index: listIndex });
    
    // Track tool view (if not already tracked)
    const primaryCategory = categories?.[0] || "Unknown";
  analytics.toolViewed(tool, itemListName ?? primaryCategory);
  };
  
  return (
  <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 min-w-0">
          <BrandLogo name={name} size={28} src={logo} />
          <h3 className="font-semibold truncate">{name}</h3>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-amber-500">★</span>
          <span className="font-medium">{rating.toFixed(1)}</span>
          <span
            className="px-2 py-0.5 rounded-full border"
            style={{
              borderColor: "var(--accent)",
              color: "var(--accent)",
              backgroundColor: "color-mix(in oklab, var(--accent) 12%, transparent)",
            }}
          >
            {difficulty}
          </span>
        </div>
      </div>
      {(categories?.length || tags?.length) && (
        <div className="flex flex-wrap gap-2 text-xs">
          {((categories ?? []).map((c) => (
            <span
              key={c}
              className="px-2 py-0.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-300"
            >
              {c}
            </span>
          )))}
          {((tags ?? []).map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-300"
            >
              {t}
            </span>
          )))}
        </div>
      )}
      <p className="text-sm text-neutral-700 dark:text-neutral-300">{tagline}</p>
      <div className="grid grid-cols-2 gap-6 text-sm">
        <div>
          <div className="font-semibold mb-1" style={{ color: "var(--accent)" }}>Pros:</div>
          <ul className="list-disc pl-5 space-y-1 text-neutral-800 dark:text-neutral-200">
            {prosCons.pros.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-red-600 font-semibold mb-1">Cons:</div>
          <ul className="list-disc pl-5 space-y-1 text-neutral-800 dark:text-neutral-200">
            {prosCons.cons.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm">
        <div className="text-neutral-800 dark:text-neutral-300">{price}</div>
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleAffiliateClick}
          className="inline-flex items-center gap-2 px-4 h-10 rounded-lg btn-accent text-white hover:translate-y-[-1px] transition-transform cursor-pointer"
        >
          {ctaLabel}
          <span aria-hidden>↗</span>
        </a>
      </div>
    </div>
  );
}
