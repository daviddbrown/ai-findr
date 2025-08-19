"use client";

import { useMemo, useState } from "react";
import { tools } from "@/config/tools";
import { SearchBar } from "./SearchBar";
import { PopularChips } from "./PopularChips";
import { ToolList } from "./ToolList";
import { scoreTool } from "@/lib/search";

export function Finder() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim();
    if (!q) return [];
    const scored = tools
      .map((t) => ({ item: t, score: scoreTool(t, q) }))
      .filter((s) => s.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((s) => s.item);
    return scored;
  }, [query]);

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
            <ToolList items={filtered} />
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
