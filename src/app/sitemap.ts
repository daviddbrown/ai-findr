import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { getAllCategories, toSlug } from "@/lib/categories";
import fs from "node:fs";
import path from "node:path";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${site.url}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${site.url}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${site.url}/affiliate-disclosure`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  { url: `${site.url}/about`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
  { url: `${site.url}/resources`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
  { url: `${site.url}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.2 },
  { url: `${site.url}/newsletter`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.2 },
  { url: `${site.url}/submit`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.2 },
  ];

  const categories = getAllCategories();
  const categoryEntries: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${site.url}/tools/${toSlug(c)}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  // Discover blog posts automatically by scanning the blog directory
  const blogDir = path.join(process.cwd(), "src", "app", "blog");
  const blogEntries: MetadataRoute.Sitemap = [];
  try {
    const items = fs.readdirSync(blogDir, { withFileTypes: true });
    for (const entry of items) {
      if (entry.isDirectory()) {
        const pagePath = path.join(blogDir, entry.name, "page.tsx");
        if (fs.existsSync(pagePath)) {
          blogEntries.push({
            url: `${site.url}/blog/${entry.name}`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.3,
          });
        }
      }
    }
  } catch {
    // Fallback: include known post(s)
    blogEntries.push({
      url: `${site.url}/blog/best-ai-tools-for-product-images`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    });
  }

  return [...staticEntries, ...categoryEntries, ...blogEntries];
}
