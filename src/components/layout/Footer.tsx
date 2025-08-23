import Link from "next/link";
import { site } from "@/config/site";
import type { LinkItem } from "@/types/links";
import React from "react";

function toSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export function Footer({ links = [] as LinkItem[] }) {
  // Tools (actual supported categories)
  const categories = ["Writing", "Images", "Video", "Coding", "SEO", "Automation"];

  // Popular (additional high-intent categories)
  const popular = [
    "Chatbots",
    "Data Analysis",
    "Design Tools",
    "Productivity",
    "Marketing",
    "Research",
  ];

  // Resources (route-safe: send to /resources for now)
  const resources = [
    { label: "AI Tool Reviews", href: "/resources" },
    { label: "Buying Guides", href: "/resources" },
    { label: "How-to Guides", href: "/resources" },
    { label: "Submit a Tool", href: "/submit" },
    { label: "Blog", href: "/blog" },
    { label: "Newsletter", href: "/newsletter" },
  ];

  // Company links (ensure we always include About, Contact, Privacy, Terms)
  const baseCompany: LinkItem[] = [
    { href: "/about", label: "About" },
    { href: "mailto:aifindrdotio@gmail.com", label: "Contact", external: true },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ];
  const companyMap = new Map<string, LinkItem>();
  [...baseCompany, ...links].forEach((l) => {
    if (!companyMap.has(l.href)) companyMap.set(l.href, l);
  });
  const company = Array.from(companyMap.values());

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-12 text-sm text-neutral-700 dark:text-neutral-400 bg-white/90 dark:bg-neutral-900/90 supports-[backdrop-filter]:backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {/* Brand */}
        <div>
          <Link href="/" className="inline-flex items-center font-semibold text-xl" style={{ color: "var(--accent)" }}>
            {site.name}
          </Link>
          <p className="mt-3 max-w-xs text-neutral-600 dark:text-neutral-400">{site.description}</p>
          <div className="mt-4 flex items-center gap-3">
            <Link
              href={site.social?.twitter || "#"}
              aria-label="Twitter"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-800 text-white hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500"
            >
              {/* Twitter/X icon */}
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2H21L13.51 10.56 22 22h-6.563l-5.09-6.62L4.5 22H2l8.003-9.12L2 2h6.682l4.61 6.09L18.244 2Zm-1.152 18h1.809L7.01 4h-1.86l11.942 16Z"/>
              </svg>
            </Link>
            <Link
              href={site.social?.linkedin || "#"}
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-800 text-white hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500"
            >
              {/* LinkedIn icon */}
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.9-2.2 3.9-2.2 4.2 0 5 2.8 5 6.5V24h-4v-7.3c0-1.7 0-3.9-2.4-3.9s-2.7 1.9-2.7 3.8V24h-4V8z"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Tools */}
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

        {/* Popular */}
        <div className="hidden lg:block">
          <div className="font-medium text-neutral-800 dark:text-neutral-100">Popular</div>
          <ul className="mt-3 space-y-2">
            {popular.map((p) => (
              <li key={p}>
                <Link className="hover:underline hover:underline-offset-4" href={`/tools/${toSlug(p)}`}>
                  {p}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources (without the Stay Updated block) */}
        <div className="hidden md:block">
          <div className="font-medium text-neutral-800 dark:text-neutral-100">Resources</div>
          <ul className="mt-3 space-y-2">
            {resources.map((r) => (
              <li key={r.label}>
                <Link className="hover:underline hover:underline-offset-4" href={r.href}>
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
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
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-6xl px-6 mt-12 border-t border-neutral-200 dark:border-neutral-800 pt-6 text-xs text-neutral-500">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>© 2025 aiFindr. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <Link href="/affiliate-disclosure" className="hover:underline underline-offset-4">Affiliate Disclosure</Link>
            <Link href="/privacy" className="hover:underline underline-offset-4">Privacy Policy</Link>
            <Link href="/terms" className="hover:underline underline-offset-4">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
