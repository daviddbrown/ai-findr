# Analytics Setup Guide

This guide will help you set up comprehensive analytics tracking for your AI Tool Finder site.

## 1. Google Analytics 4 Setup

### Create GA4 Property
1. Go to [Google Analytics](https://analytics.google.com)
2. Create a new account or use existing
3. Create a new GA4 property
4. Get your Measurement ID (format: G-XXXXXXXXXX)

### Add to Environment Variables
```bash
# Add to your .env.local file
NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-28XSNEHTSW
```

### Events Being Tracked (GA4 recommended names)
- `view_item` - When a tool is viewed/selected
- `select_item` - When a CTA/affiliate is clicked
- `search` - When the user submits a search
- `view_item_list` - When a category (item list) is viewed
- `click` (with element_id=show_more) - When "Show more" is clicked
- `sign_up` - When a user subscribes to newsletter

## 2. Vercel Analytics Setup

Vercel Analytics is automatically enabled when deployed to Vercel. No additional setup required.

### Benefits
- Real-time visitor data
- Page views and unique visitors
- Referrer tracking
- No impact on performance

## 3. Setting Up Goals & Conversions

### In Google Analytics 4
1. Go to Admin → Events → Create Event
2. Create conversion events for:
   - `affiliate_click` (Primary goal)
   - `email_signup` (Secondary goal)

### Conversion Values
You can assign values to track estimated revenue:
```typescript
// Example: Track affiliate click with estimated value
analytics.affiliateClick(toolName, affiliateUrl, {
  value: 2.50, // Estimated commission value
  currency: 'USD'
});
```

## 4. Privacy & Compliance

### Cookie Consent
The site includes a cookie consent banner that:
- Respects user privacy choices
- Complies with GDPR requirements
- Only loads analytics after consent

### Data Protection
- IP addresses are anonymized
- No personally identifiable information is tracked
- Users can opt-out via cookie settings

## 5. Monitoring & Optimization

### Key Metrics to Watch
1. **Traffic Metrics**
   - Unique visitors
   - Page views
   - Session duration
   - Bounce rate

2. **Engagement Metrics**
   - Search queries performed
   - Tools viewed
   - Categories explored
   - Show more clicks

3. **Conversion Metrics**
   - Affiliate click rate
   - Email signup rate
   - Revenue per visitor

### Recommended Dashboards
Create custom dashboards in GA4 for:
- Daily overview (traffic, conversions)
- Tool performance (most clicked tools)
- Search analysis (popular queries)
- Category performance (most viewed categories)

## 6. Testing Analytics

### Development Testing
```typescript
// Test tracking in development
import { analytics } from '@/components/analytics/GoogleAnalytics';

// Test affiliate click tracking
analytics.affiliateClick('ChatGPT', 'https://example.com');

// Test search tracking
analytics.searchPerformed('image generation', 15);
```

### Production Verification
1. Deploy to production
2. Use Google Analytics Real-time view
3. Perform test actions on your site
4. Verify events appear in GA4

## 7. Common Issues & Solutions

### Analytics Not Loading
- Check environment variable is set correctly
- Ensure GA4 Measurement ID format is correct (G-XXXXXXXXXX)
- Verify site is deployed (analytics only work on HTTPS)

### Events Not Tracking
- Check browser console for errors
- Verify cookie consent is given
- Test in incognito/private browsing mode

### Conversion Tracking Issues
- Ensure conversions are marked in GA4
- Check attribution settings
- Verify event parameters are correct

## 8. Next Steps

After setting up analytics:

1. **Week 1**: Monitor for errors, verify all events
2. **Week 2**: Create custom dashboards and reports
3. **Month 1**: Analyze user behavior and optimize
4. **Ongoing**: Use data to improve tool recommendations

Remember to regularly review your analytics data to understand user behavior and optimize your site's performance!
