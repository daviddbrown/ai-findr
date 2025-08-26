"use client";

import Script from "next/script";

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

export const trackEvent = (
  eventName: string,
  parameters?: Record<string, string | number | boolean>
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, parameters);
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

// Predefined tracking events for your AI tool site
export const analytics = {
  // Tool interactions
  toolViewed: (toolName: string, category: string) => {
    // GA4 recommended: view_item
    // Note: Ecommerce reports prefer an `items` array; sending minimal shape here
    trackEvent("view_item", {
      item_name: toolName,
      item_category: category,
      // items: [{ item_name: toolName, item_category: category }]
    });
  },

  affiliateClick: (toolName: string, affiliateUrl: string) => {
    // GA4 recommended closest: select_item (user selects an item from a list or detail)
    trackEvent("select_item", {
      item_name: toolName,
      affiliate_url: affiliateUrl,
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
