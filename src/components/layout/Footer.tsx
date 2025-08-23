import Link from "next/link";
import { site } from "@/config/site";
import type { LinkItem } from "@/types/links";
import React from "react";

function toSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export function Footer({ links = [] as LinkItem[] }) {
  // Only list categories we actually support in the category route
  const categories = [
    "Writing",
    "Images",
    "Video",
    "Coding",
    "SEO",
    "Automation",
  ];

  // Build Company links and de-dupe any duplicates by href
  const companyMap = new Map<string, LinkItem>();
  [{ href: "mailto:hello@example.com", label: "Contact", external: true }, ...links].forEach((l) => {
    if (!companyMap.has(l.href)) companyMap.set(l.href, l);
  });
  const company = Array.from(companyMap.values());

  // no-op

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-12 text-sm text-neutral-700 dark:text-neutral-400 bg-white/90 dark:bg-neutral-900/90 supports-[backdrop-filter]:backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <Link href="/" className="inline-flex items-center font-semibold text-xl" style={{ color: "var(--accent)" }}>
            {site.name}
          </Link>
          <p className="mt-3 max-w-xs text-neutral-600 dark:text-neutral-400">
            {site.description}
          </p>
        </div>

        <div className="hidden md:block">
          <div className="font-medium text-neutral-800 dark:text-neutral-100">Tools</div>
          <ul className="mt-3 space-y-2">
            {categories.map((c) => (
              <li key={c}>
                <Link className="hover:underline hover:underline-offset-4" href={`/tools/${toSlug(c)}`}>
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-medium text-neutral-800 dark:text-neutral-100">Company</div>
          <ul className="mt-3 space-y-2">
            {company.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noopener noreferrer" : undefined}
                  className="hover:underline hover:underline-offset-4"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

  {null}
      </div>

      <div className="mx-auto max-w-6xl px-6 mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-neutral-500">
        <div className="md:col-start-2">
          © 2025 aiFindr. All rights reserved. |
          {" "}
          <Link href="/affiliate-disclosure" className="underline underline-offset-4 hover:no-underline">Affiliate Disclosure</Link>
        </div>
      </div>
    </footer>
  );
}
