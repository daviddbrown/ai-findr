"use client";

import Script from "next/script";
import { analyticsConfig } from "@/config/analytics";
import type { ToolItem } from "@/types/tools";

interface GoogleAnalyticsProps {
  ga4MeasurementId: string;
}

export function GoogleAnalytics({ ga4MeasurementId }: GoogleAnalyticsProps) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ga4MeasurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          // Consent Mode defaults (denied until user accepts)
          gtag('consent', 'default', {
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            ad_storage: 'denied',
            analytics_storage: 'denied'
          });
          gtag('js', new Date());
          // Do not auto send page_view; we'll emit on route change
          gtag('config', '${ga4MeasurementId}', {
            send_page_view: false,
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}

// Analytics tracking functions
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

// Helpers
type GAItem = {
  item_id: string;
  item_name: string;
  item_category?: string;
  price?: number;
  quantity?: number;
  index?: number;
};

type GAParams = {
  items?: GAItem[];
  item_list_name?: string;
  affiliate_url?: string;
  page_title?: string;
  page_location?: string;
  page_path?: string;
  search_term?: string;
  results_count?: number;
  [key: string]: string | number | boolean | GAItem[] | undefined;
};

const priceToNumber = (p?: string): number | undefined => {
  if (!p) return undefined;
  const lower = p.toLowerCase();
  if (lower.includes("free")) return 0;
  const matches = [...p.matchAll(/\$(\d+(?:\.\d+)?)/g)].map((m) => parseFloat(m[1]));
  if (matches.length) return Math.min(...matches);
  return undefined;
};

const toGaItem = (
  tool: ToolItem,
  opts?: { category?: string; price?: number; index?: number }
) => {
  return {
    item_id: tool.id,
    item_name: tool.name,
    item_category: opts?.category ?? (tool.categories?.[0] || "Unknown"),
    price: opts?.price ?? priceToNumber(tool.price) ?? 0,
    quantity: 1,
    ...(typeof opts?.index === "number" ? { index: opts.index } : {}),
  };
};

export const trackEvent = (
  eventName: string,
  parameters?: GAParams
) => {
  if (typeof window !== "undefined" && window.gtag) {
    const payload = analyticsConfig.debug
      ? { ...(parameters ?? {}), debug_mode: true }
      : parameters;
    window.gtag("event", eventName, payload);
  }
};

// Grant consent after user acceptance (Consent Mode v2)
export const grantAnalyticsConsent = () => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag('consent', 'update', {
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      ad_storage: 'granted',
      analytics_storage: 'granted'
    });
  }
};

// Revoke consent (set back to denied)
export const revokeAnalyticsConsent = () => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag('consent', 'update', {
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      ad_storage: 'denied',
      analytics_storage: 'denied'
    });
  }
};

// Predefined tracking events for your AI tool site
export const analytics = {
  // Tool interactions
  toolViewed: (
    toolOrName: ToolItem | string,
    categoryOrList?: string
  ) => {
    // Supports legacy signature (name, category) and new (tool, item_list_name?)
    if (typeof toolOrName === "string") {
      // legacy fallback
      trackEvent("view_item", {
        item_name: toolOrName,
        item_category: categoryOrList as string,
      });
      return;
    }
    const tool = toolOrName as ToolItem;
    const item = toGaItem(tool);
    trackEvent("view_item", {
      items: [item],
      ...(categoryOrList ? { item_list_name: categoryOrList } : {}),
    });
  },

  affiliateClick: (
    toolOrName: ToolItem | string,
    affiliateOrCtx: string | { affiliateUrl: string; itemListName?: string; index?: number }
  ) => {
    // Supports legacy (name, affiliateUrl) and new (tool, { affiliateUrl, itemListName?, index? })
    if (typeof toolOrName === "string") {
      const toolName = toolOrName as string;
      const affiliateUrl = affiliateOrCtx as string;
      trackEvent("select_item", {
        item_name: toolName,
        affiliate_url: affiliateUrl,
      });
      return;
    }
    const tool = toolOrName as ToolItem;
    const ctx = (affiliateOrCtx as { affiliateUrl: string; itemListName?: string; index?: number });
    const item = toGaItem(tool, { index: ctx.index });
    trackEvent("select_item", {
      ...(ctx.itemListName ? { item_list_name: ctx.itemListName } : {}),
      items: [item],
      affiliate_url: ctx.affiliateUrl,
    });
  },

  // Search interactions
  searchPerformed: (query: string, resultsCount: number) => {
    // GA4 recommended: search
    trackEvent("search", {
      search_term: query,
      results_count: resultsCount,
    });
  },

  // Navigation
  categoryViewed: (categoryName: string, toolsCount: number) => {
    // GA4 recommended: view_item_list
    trackEvent("view_item_list", {
      item_list_name: categoryName,
      items_count: toolsCount,
    });
  },

  // Conversions
  emailSignup: (source: string) => {
    // GA4 recommended: sign_up
    trackEvent("sign_up", {
      method: source,
    });
  },

  // Engagement
  showMoreClicked: (category: string) => {
    // Use generic click event with context
    trackEvent("click", {
      element_id: "show_more",
      item_list_name: category,
    });
  },
};
