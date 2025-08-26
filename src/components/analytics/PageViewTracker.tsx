"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { analyticsConfig } from "@/config/analytics";

export function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const pagePath = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");

    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    if (typeof window !== "undefined" && typeof w.gtag === "function") {
      w.gtag("event", "page_view", {
        page_title: document.title,
        page_location: url,
        page_path: pagePath,
      });
      if (analyticsConfig.debug) {
        console.debug("[analytics] page_view", { page_title: document.title, page_location: url, page_path: pagePath });
      }
    }
  }, [pathname, searchParams]);

  return null;
}
