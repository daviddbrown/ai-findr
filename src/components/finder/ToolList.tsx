import type { ToolItem } from "@/types/tools";
import { ToolCard } from "./ToolCard";

export function ToolList({ items }: { items: ToolItem[] }) {
  return (
    <div className="flex flex-col gap-4">
  <div className="flex flex-col gap-4">
        {items.map((t) => (
          <ToolCard key={t.id} tool={t} />
        ))}
      </div>
    </div>
  );
}
