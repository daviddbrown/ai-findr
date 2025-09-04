import { tools } from "@/config/tools";

// Slug aliases -> canonical category names
// Keys must be lowercase, hyphenated slugs.
export const CATEGORY_ALIASES: Record<string, string> = {
  // Fix 404s for popular synonyms
  "data-analysis": "Analytics",
  // add more aliases over time as needed
};

export function toSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export function fromSlug(slug: string): string {
  // First, normalize and resolve alias to canonical category name if present
  const key = slug
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");
  if (CATEGORY_ALIASES[key]) return CATEGORY_ALIASES[key];

  const result = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
  
  // Handle common acronyms that should be all caps
  const acronyms = ['Seo', 'Ui', 'Api', 'Ai'];
  let fixed = result;
  acronyms.forEach(acronym => {
    const regex = new RegExp(`\\b${acronym}\\b`, 'g');
    fixed = fixed.replace(regex, acronym.toUpperCase());
  });
  
  return fixed;
}

export function getAllCategories(): string[] {
  const set = new Set<string>();
  for (const t of tools) {
    for (const c of t.categories ?? []) set.add(c);
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}
