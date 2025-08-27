import type { ToolItem } from "@/types/tools";
import { ToolCard } from "./ToolCard";
import { Reveal } from "@/components/utility/Reveal";

export function ToolList({ items, revealKey, staggerMs = 40, itemListName }: { items: ToolItem[]; revealKey?: string; staggerMs?: number; itemListName?: string }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        {items.map((t, i) => (
          <Reveal key={`${revealKey ?? "list"}-${t.id}-${i}`} delayMs={i * staggerMs} distanceClass="translate-y-8">
            <ToolCard tool={t} listIndex={i} itemListName={itemListName} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
