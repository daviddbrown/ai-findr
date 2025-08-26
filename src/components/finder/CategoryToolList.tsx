"use client";

import { useState } from "react";
import type { ToolItem } from "@/types/tools";
import { ToolList } from "./ToolList";

export function CategoryToolList({ 
  items, 
  revealKey 
}: { 
  items: ToolItem[]; 
  revealKey: string; 
}) {
  const [showAll, setShowAll] = useState(false);
  
  const displayItems = showAll ? items : items.slice(0, 10);
  const hasMore = items.length > 10;
  
  return (
    <>
      <ToolList items={displayItems} revealKey={revealKey} />
      {hasMore && !showAll && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2 text-sm font-medium text-[var(--accent)] border border-[var(--accent)] rounded-lg hover:bg-[var(--accent)] hover:text-white transition-colors cursor-pointer"
          >
            Show more tools
          </button>
        </div>
      )}
    </>
  );
}
