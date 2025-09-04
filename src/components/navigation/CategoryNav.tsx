import Link from "next/link";
import { getAllCategories, toSlug } from "@/lib/categories";

export function CategoryNav() {
  return (
    <section id="categories" className="w-full max-w-6xl mx-auto px-6">
      <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">Browse tools</h2>
      <ul className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 text-sm">
  {getAllCategories().map((c) => (
          <li key={c}>
            <Link href={`/tools/${toSlug(c)}`} className="block rounded-md px-3 py-2 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 cursor-pointer">
              {c}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
