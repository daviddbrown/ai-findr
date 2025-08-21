"use client";

import { useMemo, useState } from "react";
import { tools } from "@/config/tools";
import { SearchBar } from "./SearchBar";
import { PopularChips } from "./PopularChips";
import { ToolList } from "./ToolList";
import { scoreTool } from "@/lib/search";

export function Finder() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"best" | "rating" | "easy" | "price" | "name">("best");

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
    if (!q) return [];
    const scored = tools
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

    return sorted;
  }, [query, sort]);

  return (
    <div className="w-full">
      <div className="relative rounded-3xl bg-gradient-to-b from-blue-50 to-transparent dark:from-neutral-800/40 p-6 sm:p-10">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">AI Tool Finder</h1>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            Tell us what you want to do, we&apos;ll recommend the perfect AI tool
          </p>
        </div>

        <div className="mt-6">
          <SearchBar value={query} onChange={setQuery} />
        </div>

        <div className="mt-4">
          <div className="text-center text-xs text-neutral-500 mb-3">Popular searches:</div>
          <PopularChips onPick={setQuery} limit={8} />
        </div>
      </div>

      <div className="mt-8">
        {query.trim() ? (
          filtered.length ? (
            <>
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="font-semibold">Recommended AI Tools ({filtered.length})</div>
                <div className="flex items-center gap-3 text-xs">
                  <label htmlFor="sort" className="text-neutral-500 dark:text-neutral-400">Sort by</label>
                  <select
                    id="sort"
                    value={sort}
                    onChange={(e) => setSort(e.target.value as typeof sort)}
                    className="h-8 rounded-md border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-2"
                  >
                    <option value="best">Best match</option>
                    <option value="rating">Highest rated</option>
                    <option value="easy">Easiest first</option>
                    <option value="price">Price: low to high</option>
                    <option value="name">Name A–Z</option>
                  </select>
                </div>
              </div>
              <ToolList items={filtered} />
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
