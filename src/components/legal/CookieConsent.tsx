"use client";
import { useEffect, useState } from "react";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const seen = localStorage.getItem("cookie-consent");
      if (!seen) setVisible(true);
    } catch {}
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 mx-auto max-w-4xl m-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-900/95 backdrop-blur p-4 shadow-lg">
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <p className="text-sm text-neutral-700 dark:text-neutral-300">
          We use cookies for basic functionality and to understand usage. By using this site, you agree to our
          <a href="/privacy" className="underline underline-offset-4 ml-1 cursor-pointer">Privacy Policy</a>.
        </p>
        <div className="flex gap-2">
          <button
            className="rounded-md border border-neutral-300 dark:border-neutral-700 px-3 py-1.5 text-sm text-neutral-700 dark:text-neutral-200 bg-transparent hover:bg-neutral-100/60 dark:hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent,#36BAA2)] cursor-pointer"
            onClick={() => {
              try { localStorage.setItem("cookie-consent", "dismissed"); } catch {}
              setVisible(false);
            }}
          >
            Dismiss
          </button>
          <button
            className="rounded-md bg-[var(--accent,#36BAA2)] px-3 py-1.5 text-sm text-white cursor-pointer"
            onClick={() => {
              try { localStorage.setItem("cookie-consent", "accepted"); } catch {}
              setVisible(false);
            }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
