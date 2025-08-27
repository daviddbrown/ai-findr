"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import { tools } from "@/config/tools";
import { SearchBar } from "./SearchBar";
import { PopularChips } from "./PopularChips";
import { ToolList } from "./ToolList";
import { scoreTool } from "@/lib/search";
import { analytics } from "@/components/analytics/GoogleAnalytics";

type FinderProps = {
  query?: string;
  onQueryChange?: (q: string) => void;
  category?: string | null; // optional category filter
  compact?: boolean; // when true, do not render the internal hero/search area; just results
};

export function Finder({ query: controlledQuery, onQueryChange, category = null, compact = false }: FinderProps) {
  const [internalQuery, setInternalQuery] = useState("");
  const query = controlledQuery ?? internalQuery;
  const setQuery = onQueryChange ?? setInternalQuery;
  const [sort, setSort] = useState<"best" | "rating" | "easy" | "price" | "name">("best");
  const [showAllResults, setShowAllResults] = useState(false);
  const lastTrackedQueryRef = useRef<string>("");

  const scrollToResults = () => {
    const el = document.getElementById("results");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const difficultyRank = (d: string) => (d === "Easy" ? 0 : d === "Medium" ? 1 : 2);
  const priceValue = (p: string): number => {
    if (!p) return Number.POSITIVE_INFINITY;
    const lower = p.toLowerCase();
    if (lower.includes("free")) return 0;
    const matches = [...p.matchAll(/\$(\d+(?:\.\d+)?)/g)].map((m) => parseFloat(m[1]));
    if (matches.length) return Math.min(...matches);
    return Number.POSITIVE_INFINITY; // unknown/custom
  };

  const filtered = useMemo(() => {
    const q = query.trim();
    const base = category ? tools.filter((t) => (t.categories ?? []).includes(category)) : tools;

    // If no query but category present, return category list sorted by current sort
    if (!q) {
      const items = base.map((item) => ({ item, score: 0 }));
      const sortItems = () => {
        switch (sort) {
          case "rating":
            return items.sort((a, b) => b.item.rating - a.item.rating).map((s) => s.item);
          case "easy":
            return items
              .sort((a, b) => {
                const da = difficultyRank(a.item.difficulty);
                const db = difficultyRank(b.item.difficulty);
                return da - db;
              })
              .map((s) => s.item);
          case "price":
            return items
              .sort((a, b) => priceValue(a.item.price) - priceValue(b.item.price))
              .map((s) => s.item);
          case "name":
            return items
              .sort((a, b) => a.item.name.localeCompare(b.item.name, undefined, { sensitivity: "base" }))
              .map((s) => s.item);
          case "best":
          default:
            return items.sort((a, b) => b.item.rating - a.item.rating).map((s) => s.item);
        }
      };
      
      // Limit categories with many tools to top 10 for better UX
      const sorted = category ? sortItems() : [];
      const shouldLimitResults = category && sorted.length > 12;
      return shouldLimitResults ? sorted.slice(0, 10) : sorted;
    }

    const scored = base
      .map((t) => ({ item: t, score: scoreTool(t, q) }))
      .filter((s) => s.score > 0);

    const sorted = (() => {
      switch (sort) {
        case "rating":
          return scored
            .sort((a, b) =>
              b.item.rating !== a.item.rating
                ? b.item.rating - a.item.rating
                : b.score - a.score,
            )
            .map((s) => s.item);
        case "easy":
          return scored
            .sort((a, b) => {
              const da = difficultyRank(a.item.difficulty);
              const db = difficultyRank(b.item.difficulty);
              return da !== db ? da - db : b.score - a.score;
            })
            .map((s) => s.item);
        case "price":
          return scored
            .sort((a, b) => {
              const pa = priceValue(a.item.price);
              const pb = priceValue(b.item.price);
              return pa !== pb ? pa - pb : b.score - a.score;
            })
            .map((s) => s.item);
        case "name":
          return scored
            .sort((a, b) =>
              a.item.name.localeCompare(b.item.name, undefined, { sensitivity: "base" }) || b.score - a.score,
            )
            .map((s) => s.item);
        case "best":
        default:
          return scored.sort((a, b) => b.score - a.score).map((s) => s.item);
      }
    })();

    // For search results, limit to 10 unless user wants to see all
    const shouldLimitSearchResults = q.trim() && sorted.length > 10 && !showAllResults;
    return shouldLimitSearchResults ? sorted.slice(0, 10) : sorted;
  }, [query, sort, category, showAllResults]);

  // Reset showAllResults when query changes
  useEffect(() => {
    setShowAllResults(false);
  }, [query]);

  // Track search queries on submit (debounced safeguard)
  const trackSearch = (q: string) => {
    const trimmed = q.trim();
    if (!trimmed || trimmed.length < 3) return;
    if (trimmed === lastTrackedQueryRef.current) return;

    const base = category ? tools.filter((t) => (t.categories ?? []).includes(category)) : tools;
    const results = base.filter((t) => scoreTool(t, trimmed) > 0);
    analytics.searchPerformed(trimmed, results.length);
    lastTrackedQueryRef.current = trimmed;
  };

  const handleSubmit = () => {
    trackSearch(query);
    scrollToResults();
  };

  // Check if we're showing limited results for a category
  const isShowingLimitedResults = useMemo(() => {
    if (!category || query.trim()) return false;
    const allInCategory = tools.filter((t) => (t.categories ?? []).includes(category));
    return allInCategory.length > 12 && filtered.length === 10;
  }, [category, query, filtered.length]);

  // Check if there are more search results to show
  const hasMoreSearchResults = useMemo(() => {
    if (!query.trim() || showAllResults) return false;
    // Compute the full search results to see if we have more than 10
    const q = query.trim();
    const base = category ? tools.filter((t) => (t.categories ?? []).includes(category)) : tools;
    const scored = base
      .map((t) => ({ item: t, score: scoreTool(t, q) }))
      .filter((s) => s.score > 0);
    return scored.length > 10;
  }, [query, category, showAllResults]);

  return (
    <div className="w-full">
      {!compact && (
        <div className="relative rounded-3xl bg-gradient-to-b from-[color-mix(in_oklab,var(--accent)_12%,transparent)] to-transparent dark:from-neutral-800/40 p-6 sm:p-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold">AI Tool Finder</h1>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Tell us what you want to do, we&apos;ll recommend the perfect AI tool
            </p>
          </div>

          <div className="mt-6">
            <SearchBar
              value={query}
              onChange={setQuery}
              placeholder="Search AI tools, features, or use cases..."
              showButton
              onSubmit={handleSubmit}
              buttonLabel="Search"
            />
          </div>

          <div className="mt-4">
            <div className="text-center text-xs text-neutral-500 mb-3">Popular searches:</div>
            <PopularChips
              onPick={(label) => {
                setQuery(label);
                trackSearch(label);
                scrollToResults();
              }}
              limit={8}
            />
          </div>
        </div>
      )}

      <div id="results" className="mt-8">
        {query.trim() ? (
          filtered.length ? (
            <>
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="font-semibold">
                  {category ? `${category} AI Tools` : "Recommended AI Tools"} ({filtered.length})
                  {isShowingLimitedResults && (
                    <span className="ml-2 text-xs text-neutral-500 dark:text-neutral-400 font-normal">
                      • Top picks
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <label htmlFor="sort" className="text-neutral-500 dark:text-neutral-400">Sort by</label>
                  <div className="relative inline-block">
                    <select
                      id="sort"
                      value={sort}
                      onChange={(e) => setSort(e.target.value as typeof sort)}
                      className="h-8 rounded-md border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 pl-2 pr-10 appearance-none cursor-pointer"
                    >
                      <option value="best">Best match</option>
                      <option value="rating">Highest rated</option>
                      <option value="easy">Easiest first</option>
                      <option value="price">Price: low to high</option>
                      <option value="name">Name A–Z</option>
                    </select>
                    <svg
                      aria-hidden="true"
                      className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500 dark:text-neutral-400"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
              <ToolList items={filtered} revealKey={`${category ?? "all"}|${query}|${sort}`} itemListName={category ?? undefined} />
              {hasMoreSearchResults && (
                <div className="mt-6 text-center">
                  <button
                    onClick={() => setShowAllResults(true)}
                    className="px-6 py-2 text-sm font-medium text-[var(--accent)] border border-[var(--accent)] rounded-lg hover:bg-[var(--accent)] hover:text-white transition-colors cursor-pointer"
                  >
                    Show more results
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-sm text-neutral-500 dark:text-neutral-400 text-center">
              No tools found. Try a different search.
            </div>
          )
        ) : null}
      </div>
    </div>
  );
}
