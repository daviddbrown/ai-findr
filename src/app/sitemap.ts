import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
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
}
