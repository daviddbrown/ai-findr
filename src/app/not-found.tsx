import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-app text-neutral-100">
      <div className="text-center max-w-xl">
        <p className="text-sm font-medium text-neutral-500">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-[var(--accent,#36BAA2)]">Page not found</h1>
        <p className="mt-3 text-neutral-400">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. Try going back home or use the search to discover AI tools.
        </p>
        <div className="mt-6 flex items-center justify-center">
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-[var(--accent,#36BAA2)] px-4 py-2 text-sm font-medium text-white hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent,#36BAA2)] cursor-pointer"
          >
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
}
