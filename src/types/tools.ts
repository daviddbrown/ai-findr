export type ToolProsCons = {
  pros: string[];
  cons: string[];
};

export type ToolItem = {
  id: string;
  name: string;
  tagline: string;
  rating: number; // 0..5
  difficulty: "Easy" | "Medium" | "Hard";
  price: string; // e.g. "$ Free + $20/month"
  prosCons: ToolProsCons;
  ctaLabel: string; // e.g. "Try ChatGPT"
  ctaHref: string;
  keywords?: string[]; // searchable intents, tags, and use-cases
  categories?: string[]; // high-level facets, e.g., "Images", "Video", "Writing"
  tags?: string[]; // optional additional tags separate from keywords
  logo?: string; // optional path under /public/images, e.g., "/images/chatgpt.svg"
};
