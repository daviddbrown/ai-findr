import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <p className="text-sm font-medium text-neutral-500">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">Page not found</h1>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400">
          Sorry, we couldn’t find the page you’re looking for. Try going back home or use the search to
          discover AI tools.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-[var(--accent,#36BAA2)] px-4 py-2 text-sm font-medium text-white hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent,#36BAA2)]"
          >
            Go home
          </Link>
          <Link
            href="/#search"
            className="inline-flex items-center rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
          >
            Search tools
          </Link>
        </div>
      </div>
    </main>
  );
}
