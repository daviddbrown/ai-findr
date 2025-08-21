import Link from "next/link";
import { site, headerLinks } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 bg-white/80 dark:bg-neutral-900/80 border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-2 font-semibold">
          <span className="inline-block h-6 w-6 rounded bg-blue-600" aria-hidden />
          <span>{site.name}</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-300">
          {headerLinks.map((l) => (
            <Link
              key={l.href + l.label}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              className="hover:text-neutral-900 dark:hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
