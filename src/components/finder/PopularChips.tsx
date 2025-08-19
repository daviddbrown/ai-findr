"use client";
import { popularKeywords } from "@/config/keywords";

export function PopularChips({
  onPick,
  limit = 8,
}: {
  onPick: (value: string) => void;
  limit?: number; // show only the top N chips
}) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {popularKeywords.slice(0, Math.max(5, Math.min(limit, 8))).map((c) => (
        <button
          key={c}
          onClick={() => onPick(c)}
          className="px-3 py-1 rounded-full bg-white/70 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-800 text-xs hover:bg-blue-50 dark:hover:bg-neutral-800"
        >
          {c}
        </button>
      ))}
    </div>
  );
}
