export type SiteInfo = {
  name: string;
  description: string;
  url: string;
};

export function websiteSchema(site: SiteInfo) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    description: site.description,
    url: site.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/?q={search_term_string}`,
      query: "required name=search_term_string",
    },
  } as const;
}

export function organizationSchema(site: SiteInfo, opts?: { sameAs?: string[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    sameAs: opts?.sameAs ?? [],
  } as const;
}

export function toJsonLd(data: unknown): string {
  return JSON.stringify(data);
}
