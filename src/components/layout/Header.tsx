"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
  <header className="sticky top-0 z-20 bg-neutral-950/90 supports-[backdrop-filter]:backdrop-blur border-b border-neutral-800">
  <div className="w-full pl-6 sm:pl-10 md:pl-14 pr-6 sm:pr-10 md:pr-14 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center font-semibold text-xl sm:text-2xl"
          style={{ color: "var(--accent)" }}
        >
          aiFindr
        </Link>
        <nav aria-label="Primary" className="hidden sm:block">
          <ul className="flex items-center gap-6 text-[15px] md:text-base">
            <li>
              <Link href="/tools" className="text-neutral-300 hover:text-white hover:underline underline-offset-4 cursor-pointer">Tools</Link>
            </li>
            <li>
              <Link href="/about" className="text-neutral-300 hover:text-white hover:underline underline-offset-4 cursor-pointer">About</Link>
            </li>
          </ul>
        </nav>
        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="sm:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 cursor-pointer"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            {open ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="sm:hidden">
          <div
            className="fixed inset-0 z-20 bg-black/40"
            onClick={close}
            aria-hidden
          />
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            className="fixed top-14 right-4 left-4 z-30 rounded-2xl border border-neutral-800 bg-neutral-950/95 supports-[backdrop-filter]:backdrop-blur p-4 shadow-xl"
          >
            <ul className="flex flex-col divide-y divide-neutral-900 text-base">
              <li>
                <Link
                  href="/tools"
                  onClick={close}
                  className="block py-3 text-neutral-100 hover:underline underline-offset-4 cursor-pointer"
                >
                  Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={close}
                  className="block py-3 text-neutral-100 hover:underline underline-offset-4 cursor-pointer"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
