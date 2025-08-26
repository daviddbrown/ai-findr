"use client";

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

  // Resources (temporarily disabled)

  // Company links (ensure we always include About and Contact only)
  const baseCompany: LinkItem[] = [
    { href: "/about", label: "About" },
    { href: "mailto:aifindrdotio@gmail.com", label: "Contact", external: true },
  ];
  const companyMap = new Map<string, LinkItem>();
  [...baseCompany, ...links].forEach((l) => {
    if (!companyMap.has(l.href)) companyMap.set(l.href, l);
  });
  // Exclude Privacy and Terms from the Company section
  const company = Array.from(companyMap.values()).filter((l) => l.href !== "/privacy" && l.href !== "/terms");

  return (
  <footer className="border-t border-neutral-800 py-12 text-sm text-neutral-400 bg-neutral-950/90 supports-[backdrop-filter]:backdrop-blur">
  <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
  {/* Brand */}
  <div className="md:pr-8 lg:pr-12 xl:pr-16">
          <Link href="/" className="inline-flex items-center font-semibold text-xl" style={{ color: "var(--accent)" }}>
            {site.name}
          </Link>
          <p className="mt-3 max-w-xl text-neutral-400">{site.description}</p>
          {/* Social links temporarily removed */}
        </div>

        {/* Tools */}
        <div>
          <div className="font-medium text-neutral-100">Tools</div>
          <ul className="mt-3 space-y-2">
            {categories.map((c) => (
              <li key={c}>
                <Link className="hover:underline hover:underline-offset-4 cursor-pointer" href={`/tools/${toSlug(c)}`}>
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Popular */}
        <div>
          <div className="font-medium text-neutral-100">Popular</div>
          <ul className="mt-3 space-y-2">
            {popular.map((p) => (
              <li key={p}>
                <Link className="hover:underline hover:underline-offset-4 cursor-pointer" href={`/tools/${toSlug(p)}`}>
                  {p}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <div className="font-medium text-neutral-100">Company</div>
          <ul className="mt-3 space-y-2">
            {company.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noopener noreferrer" : undefined}
                  className="hover:underline hover:underline-offset-4 cursor-pointer"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
  <div className="mx-auto max-w-6xl px-6 mt-12 border-t border-neutral-800 pt-6 text-xs text-neutral-500">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>© 2025 aiFindr. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <Link href="/affiliate-disclosure" className="text-neutral-300 hover:underline underline-offset-4 cursor-pointer">Affiliate Disclosure</Link>
            <Link href="/privacy" className="text-neutral-300 hover:underline underline-offset-4 cursor-pointer">Privacy Policy</Link>
            <Link href="/terms" className="text-neutral-300 hover:underline underline-offset-4 cursor-pointer">Terms of Service</Link>
            <button
              type="button"
              className="text-neutral-300 hover:underline underline-offset-4 cursor-pointer"
              onClick={() => {
                try {
                  // Toggle the CookieConsent manager
                  const e = new CustomEvent("open-cookie-settings");
                  window.dispatchEvent(e);
                } catch {}
              }}
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
