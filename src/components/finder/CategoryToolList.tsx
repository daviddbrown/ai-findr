"use client";

import { useState, useEffect } from "react";
import type { ToolItem } from "@/types/tools";
import { ToolList } from "./ToolList";
import { analytics } from "@/components/analytics/GoogleAnalytics";

export function CategoryToolList({ 
  items, 
  revealKey,
  categoryName 
}: { 
  items: ToolItem[]; 
  revealKey: string;
  categoryName?: string;
}) {
  const [showAll, setShowAll] = useState(false);
  
  const displayItems = showAll ? items : items.slice(0, 10);
  const hasMore = items.length > 10;
  
  // Track category view on mount
  useEffect(() => {
    if (categoryName) {
      analytics.categoryViewed(categoryName, items.length);
    }
  }, [categoryName, items.length]);
  
  const handleShowMore = () => {
    setShowAll(true);
    if (categoryName) {
      analytics.showMoreClicked(categoryName);
    }
  };
  
  return (
    <>
  <ToolList items={displayItems} revealKey={revealKey} itemListName={categoryName} />
      {hasMore && !showAll && (
        <div className="mt-6 text-center">
          <button
            onClick={handleShowMore}
            className="px-6 py-2 text-sm font-medium text-[var(--accent)] border border-[var(--accent)] rounded-lg hover:bg-[var(--accent)] hover:text-white transition-colors cursor-pointer"
          >
            Show more tools
          </button>
        </div>
      )}
    </>
  );
}
