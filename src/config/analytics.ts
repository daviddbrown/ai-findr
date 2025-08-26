// Analytics configuration
export const analyticsConfig = {
  // Google Analytics 4 Measurement ID
  // Replace with your actual GA4 measurement ID (starts with G-)
  ga4MeasurementId: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || "",
  
  // Vercel Analytics (automatically enabled if deployed on Vercel)
  vercelAnalytics: true,
  
  // Debug mode for development
  debug: process.env.NODE_ENV === "development",
  
  // Privacy settings
  anonymizeIp: true,
  cookieConsent: true,
};

// Environment variables you need to add to your .env.local:
/*
NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
*/
