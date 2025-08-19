import Link from "next/link";
import type { LinkItem } from "@/types/links";

export function Footer({ links = [] as LinkItem[] }) {
  if (!links.length) return null;
  return (
  <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm text-neutral-600 dark:text-neutral-400">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          className="hover:underline hover:underline-offset-4"
        >
          {link.label}
        </Link>
      ))}
    </footer>
  );
}
