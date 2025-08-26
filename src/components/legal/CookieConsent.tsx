"use client";
import { useEffect, useState } from "react";
import { grantAnalyticsConsent, revokeAnalyticsConsent } from "@/components/analytics/GoogleAnalytics";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [manageOpen, setManageOpen] = useState(false);

  useEffect(() => {
    try {
      const seen = localStorage.getItem("cookie-consent");
      if (!seen) setVisible(true);
    } catch {}

  const handler = () => setManageOpen(true);
  window.addEventListener("open-cookie-settings", handler as EventListener);
  return () => window.removeEventListener("open-cookie-settings", handler as EventListener);
  }, []);

  if (!visible && !manageOpen) return null;

  const Banner = (
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
              // Grant analytics consent
              try { grantAnalyticsConsent(); } catch {}
              setVisible(false);
            }}
          >
            Accept
          </button>
          <button
            className="rounded-md px-3 py-1.5 text-sm text-neutral-700 dark:text-neutral-200 underline underline-offset-4 cursor-pointer"
            onClick={() => setManageOpen(true)}
          >
            Cookie settings
          </button>
        </div>
      </div>
    </div>
  );

  const Manager = (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={() => setManageOpen(false)} />
      <div className="relative z-10 w-full max-w-md rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-xl">
        <h2 className="text-base font-semibold mb-3">Cookie settings</h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
          Choose whether we can use analytics cookies to understand site usage. You can change this anytime.
        </p>
        <div className="flex gap-2">
          <button
            className="rounded-md border border-neutral-300 dark:border-neutral-700 px-3 py-1.5 text-sm text-neutral-700 dark:text-neutral-200 bg-transparent hover:bg-neutral-100/60 dark:hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent,#36BAA2)] cursor-pointer"
            onClick={() => {
              try { localStorage.setItem("cookie-consent", "dismissed"); } catch {}
              try { revokeAnalyticsConsent(); } catch {}
              setManageOpen(false);
            }}
          >
            Disallow analytics
          </button>
          <button
            className="rounded-md bg-[var(--accent,#36BAA2)] px-3 py-1.5 text-sm text-white cursor-pointer"
            onClick={() => {
              try { localStorage.setItem("cookie-consent", "accepted"); } catch {}
              try { grantAnalyticsConsent(); } catch {}
              setManageOpen(false);
            }}
          >
            Allow analytics
          </button>
        </div>
        <button className="absolute top-2 right-3 text-neutral-500 hover:text-neutral-300 cursor-pointer" onClick={() => setManageOpen(false)} aria-label="Close">×</button>
      </div>
    </div>
  );

  return (
    <>
      {visible ? Banner : null}
      {manageOpen ? Manager : null}
    </>
  );
}
