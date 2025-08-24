import Link from "next/link";

export function Header() {
  return (
  <header className="sticky top-0 z-20 bg-neutral-950/90 supports-[backdrop-filter]:backdrop-blur border-b border-neutral-800">
      <div className="w-full pl-6 sm:pl-10 md:pl-14 pr-4 sm:pr-6 h-14 flex items-center justify-start">
        <Link
          href="/"
          className="inline-flex items-center font-semibold text-xl sm:text-2xl"
          style={{ color: "var(--accent)" }}
        >
          aiFindr
        </Link>
      </div>
    </header>
  );
}
