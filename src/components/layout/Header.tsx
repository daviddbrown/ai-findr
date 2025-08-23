import Link from "next/link";
import { site, headerLinks } from "../../config/site";
import type { LinkItem } from "../../types/links";

export function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/90 dark:bg-neutral-900/90 supports-[backdrop-filter]:backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
          <span className="inline-grid place-items-center h-7 w-7 rounded-md border border-neutral-200 dark:border-neutral-800">
            <span className="h-3 w-3 rounded-full bg-blue-600" aria-hidden />
          </span>
          <span>{site.name}</span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2 text-sm">
          {headerLinks.map((l: LinkItem) => (
            <Link
              key={l.href + l.label}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              className="px-2 py-1 rounded-md text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100/80 dark:hover:bg-neutral-800/60"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
