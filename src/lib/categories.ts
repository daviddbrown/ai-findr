import { tools } from "@/config/tools";

export function toSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export function fromSlug(slug: string): string {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

export function getAllCategories(): string[] {
  const set = new Set<string>();
  for (const t of tools) {
    for (const c of t.categories ?? []) set.add(c);
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}
