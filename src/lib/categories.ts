import { tools } from "@/config/tools";

export function toSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export function fromSlug(slug: string): string {
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
