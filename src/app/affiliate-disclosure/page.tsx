import type { Metadata } from "next";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "Disclosure about affiliate links and how they support aiFindr.",
  alternates: { canonical: "/affiliate-disclosure" },
  openGraph: {
    images: [
      { url: "/api/og?title=Affiliate%20Disclosure", width: 1200, height: 630, alt: `${site.name} Affiliate Disclosure` },
    ],
  },
  twitter: { images: [{ url: "/api/og?title=Affiliate%20Disclosure", alt: `${site.name} Affiliate Disclosure` }] },
};
import { AppContainer } from "@/components/layout/AppContainer";
import { Reveal } from "@/components/utility/Reveal";

const ACCENT = "var(--accent)";

export default function AffiliateDisclosurePage() {
  return (
    <AppContainer>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-hero-accent" />

  <section className="text-center px-6 pt-10 pb-8 sm:pt-12 sm:pb-10">
          <Reveal>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              <span style={{ color: ACCENT }}>Affiliate Disclosure</span>
            </h1>
          </Reveal>
          <Reveal delayMs={80}>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300">Last updated: August 23, 2025</p>
          </Reveal>
        </section>

        <section className="px-6 pb-20 sm:pb-24">
          <div className="max-w-3xl mx-auto">
            <Reveal delayMs={120}>
              <div className="rounded-2xl border bg-white/60 dark:bg-neutral-900/40 border-neutral-200 dark:border-neutral-800 backdrop-blur p-6 sm:p-8 shadow">
                <article className="prose prose-neutral dark:prose-invert prose-headings:scroll-mt-24 prose-h2:font-semibold prose-h3:font-semibold prose-h2:mb-6 md:prose-h2:mb-8 prose-h2:pt-4 md:prose-h2:pt-6 prose-h3:mb-4 prose-h3:pt-3 md:prose-h3:pt-4 prose-p:mt-6 md:prose-p:mt-8 prose-ul:mt-6 md:prose-ul:mt-8 prose-ol:mt-6 md:prose-ol:mt-8 prose-p:text-neutral-700 dark:prose-p:text-neutral-300 prose-li:text-neutral-700 dark:prose-li:text-neutral-300 prose-ul:my-4 prose-li:my-2 prose-strong:text-[color:var(--accent,#36BAA2)] prose-a:text-[var(--accent,#36BAA2)]">

        <h2 id="overview" className="pb-2 border-b" style={{ borderColor: "color-mix(in srgb, var(--accent), transparent 70%)", color: "var(--accent)" }}>Overview</h2>
        <p>
          This website contains affiliate links and sponsored content. We believe in transparency and want you to
          understand how we earn revenue to support this website and provide you with free, valuable content.
        </p>

        <h2 id="links" className="pb-2 border-b mt-8" style={{ borderColor: "color-mix(in srgb, var(--accent), transparent 70%)", color: "var(--accent)" }}>What Are Affiliate Links?</h2>
        <p>
          Affiliate links are special tracking URLs that allow companies to track traffic and sales generated from our
          website. When you click on an affiliate link and make a purchase, we may receive a commission from the
          merchant. This comes at no additional cost to you &mdash; you pay the same price whether you use our affiliate
          link or visit the merchant directly.
        </p>

        <h2 id="types" className="pb-2 border-b mt-8" style={{ borderColor: "color-mix(in srgb, var(--accent), transparent 70%)", color: "var(--accent)" }}>Types of Affiliate Relationships</h2>
        <h3>Standard Affiliate Programs</h3>
        <p>We participate in various affiliate programs, including but not limited to:</p>
        <ul>
          <li>Amazon Associates Program</li>
          <li>Software and SaaS affiliate programs</li>
          <li>Tool and service provider affiliate programs</li>
          <li>Course and educational content affiliate programs</li>
          <li>Technology and hardware affiliate programs</li>
        </ul>

        <h3>Partnership Arrangements</h3>
        <p>Some of our affiliate relationships may include:</p>
        <ul>
          <li><strong>Commission-based partnerships</strong>: We earn a percentage of sales</li>
          <li><strong>Fixed-fee arrangements</strong>: We receive a set amount for each conversion</li>
          <li><strong>Hybrid models</strong>: Combination of commission and fixed fees</li>
          <li><strong>Sponsored content</strong>: We may be compensated for creating content about specific products or services</li>
        </ul>

  <h2 id="use" className="pb-2 border-b mt-8" style={{ borderColor: "color-mix(in srgb, var(--accent), transparent 70%)", color: "var(--accent)" }}>How We Use Affiliate Links</h2>
        <h3>Identification of Affiliate Links</h3>
        <ul>
          <li>Affiliate links may be marked with terms like &quot;affiliate link,&quot; &quot;partner link,&quot; or similar disclosure language</li>
          <li>Some affiliate links may not be individually marked but are covered by this general disclosure</li>
          <li>Sponsored content will be clearly labeled as such</li>
        </ul>

        <h3>Product Selection and Recommendations</h3>
        <p>We only promote products and services we genuinely believe can provide value to our audience. Our recommendations are based on:</p>
        <ul>
          <li>Personal experience and testing when possible</li>
          <li>Thorough research and evaluation</li>
          <li>User reviews and feedback</li>
          <li>Industry reputation and reliability</li>
          <li>Alignment with our audience&apos;s needs and interests</li>
        </ul>

  <h2 id="editorial" className="pb-2 border-b mt-8" style={{ borderColor: "color-mix(in srgb, var(--accent), transparent 70%)", color: "var(--accent)" }}>Editorial Independence</h2>
        <h3>Our Commitment to You</h3>
        <ul>
          <li><strong>Editorial integrity</strong>: Our reviews, comparisons, and recommendations remain objective and honest</li>
          <li><strong>Unbiased opinions</strong>: Affiliate relationships do not influence our editorial opinions or content</li>
          <li><strong>Honest reviews</strong>: We provide balanced coverage, including both pros and cons of recommended products</li>
          <li><strong>Disclosure transparency</strong>: We clearly identify when content is influenced by affiliate relationships</li>
        </ul>

        <h3>Content Creation Process</h3>
        <ul>
          <li>We research and evaluate products independently</li>
          <li>Affiliate partnerships do not determine which products we review or recommend</li>
          <li>We may decline affiliate opportunities if they don&apos;t align with our values or audience needs</li>
          <li>Negative reviews of affiliate products will be published when warranted</li>
        </ul>

  <h2 id="revenue" className="pb-2 border-b mt-8" style={{ borderColor: "color-mix(in srgb, var(--accent), transparent 70%)", color: "var(--accent)" }}>Revenue and Support</h2>
        <h3>Why We Use Affiliate Marketing</h3>
        <p>Affiliate marketing allows us to:</p>
        <ul>
          <li><strong>Keep content free</strong>: Generate revenue without charging readers for access</li>
          <li><strong>Maintain independence</strong>: Avoid relying solely on advertising or subscriptions</li>
          <li><strong>Invest in quality</strong>: Allocate resources to research, testing, and content creation</li>
          <li><strong>Continuous improvement</strong>: Fund website maintenance, tools, and team compensation</li>
          <li><strong>Community building</strong>: Support ongoing engagement with our audience</li>
        </ul>

        <h3>Revenue Transparency</h3>
        <ul>
          <li>Affiliate commissions typically range from 3% to 30% of the purchase price, depending on the merchant and product category</li>
          <li>Commission rates do not influence our recommendation priorities</li>
          <li>We may earn different commission rates from different merchants for similar products</li>
        </ul>

        <h2>Your Rights and Choices</h2>
        <h3>No Obligation to Use Affiliate Links</h3>
        <ul>
          <li>You are never obligated to use our affiliate links</li>
          <li>You can always visit merchants directly by searching for them online</li>
          <li>Your purchase decisions should be based on your own research and needs</li>
          <li>We encourage you to compare prices and options from multiple sources</li>
        </ul>

        <h3>Price and Terms</h3>
        <ul>
          <li>Using our affiliate links does not change the price you pay</li>
          <li>You receive the same customer service, return policies, and terms as any other customer</li>
          <li>Any special offers or discounts available through our links will be clearly communicated</li>
        </ul>

        <h2>Legal Compliance</h2>
        <h3>FTC Compliance</h3>
        <p>
          This disclosure is made in accordance with the Federal Trade Commission&apos;s guidelines on endorsements and testimonials. We are required by law to disclose our affiliate relationships and any compensation we receive.
        </p>

        <h3>International Compliance</h3>
        <p>
          We comply with applicable disclosure requirements in all jurisdictions where our content is accessed, including but not limited to regulations in the European Union, United Kingdom, Canada, and Australia.
        </p>

        <h2>Specific Program Disclosures</h2>
        <h3>Amazon Associates</h3>
        <p>
          We are a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for us to earn fees by linking to Amazon.com and affiliated sites. Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates.
        </p>

        <h3>Software and SaaS Programs</h3>
        <p>
          We participate in affiliate programs for various software companies and Software-as-a-Service (SaaS) providers. These may include recurring commission structures for subscription-based services.
        </p>

  <h2 id="tracking" className="pb-2 border-b mt-8" style={{ borderColor: "color-mix(in srgb, var(--accent), transparent 70%)", color: "var(--accent)" }}>Tracking and Data</h2>
        <h3>How Affiliate Tracking Works</h3>
        <ul>
          <li>Affiliate links contain tracking codes that identify traffic from our website</li>
          <li>Merchants use cookies to track your activity and attribute sales to our referrals</li>
          <li>We do not have access to your personal purchase information</li>
          <li>Tracking is handled by third-party affiliate networks and individual merchants</li>
        </ul>

        <h3>Cookie Duration</h3>
        <ul>
          <li>Different affiliate programs have different cookie durations (typically 24 hours to 365 days)</li>
          <li>This means we may earn a commission if you make a purchase within the specified timeframe after clicking our link</li>
          <li>Specific cookie durations are determined by individual merchants</li>
        </ul>

  <h2 id="sponsored" className="pb-2 border-b mt-8" style={{ borderColor: "color-mix(in srgb, var(--accent), transparent 70%)", color: "var(--accent)" }}>Sponsored Content and Paid Partnerships</h2>
        <h3>Sponsored Content Policy</h3>
        <ul>
          <li>When we create sponsored content: it will be clearly labeled as &quot;Sponsored,&quot; &quot;Paid Partnership,&quot; or similar</li>
          <li>We maintain editorial control over the content</li>
          <li>All opinions expressed remain our own</li>
          <li>We only partner with brands that align with our values and audience interests</li>
        </ul>

        <h3>Types of Sponsored Content</h3>
        <ul>
          <li>Product reviews and comparisons</li>
          <li>Educational content about specific tools or services</li>
          <li>Case studies and tutorials</li>
          <li>Industry insights and analysis</li>
        </ul>

  <h2 id="updates" className="pb-2 border-b mt-8" style={{ borderColor: "color-mix(in srgb, var(--accent), transparent 70%)", color: "var(--accent)" }}>Updates and Changes</h2>
        <h3>Policy Updates</h3>
        <ul>
          <li>This disclosure may be updated periodically to reflect new affiliate relationships or changes in our practices</li>
          <li>Material changes will be reflected in the &quot;Last updated&quot; date</li>
          <li>Continued use of our website constitutes acceptance of any updates</li>
        </ul>

        <h3>New Affiliate Relationships</h3>
        <ul>
          <li>We regularly evaluate and may add new affiliate partnerships</li>
          <li>All new relationships will be governed by this disclosure</li>
          <li>We may remove or modify affiliate relationships at any time</li>
        </ul>

  <h2 id="questions" className="pb-2 border-b mt-8" style={{ borderColor: "color-mix(in srgb, var(--accent), transparent 70%)", color: "var(--accent)" }}>Contact and Questions</h2>
  <p>If you have questions about our affiliate relationships or this disclosure, you can reach us below.</p>

        <h3>What to Include in Your Message</h3>
        <p>When contacting us about affiliate disclosures, please include:</p>
        <ul>
          <li>The specific page or content you&apos;re asking about</li>
          <li>Your question or concern</li>
          <li>Any suggestions for improving our disclosure practices</li>
        </ul>

        <h3>Response Time</h3>
        <p>We typically respond to affiliate-related inquiries within 48 hours during business days.</p>

        <h2>Additional Resources</h2>
        <h3>Learn More About Affiliate Marketing</h3>
        <ul>
          <li>Federal Trade Commission (FTC) guidelines on endorsements</li>
          <li>Affiliate marketing industry best practices</li>
          <li>Consumer rights and protections</li>
        </ul>

        <h3>Our Commitment to Transparency</h3>
        <p>
          We believe that transparency builds trust. If you ever feel that our affiliate relationships are not adequately disclosed or if you have suggestions for improving our practices, please don&apos;t hesitate to reach out.
        </p>

        <p><em>Thank you for supporting our website through your purchases via affiliate links. Your support helps us continue creating valuable, free content for our community.</em></p>

        <h2 id="contact" className="pb-2 border-b mt-8" style={{ borderColor: "color-mix(in srgb, var(--accent), transparent 70%)", color: "var(--accent)" }}>Contact Information</h2>
        <div className="not-prose mt-4 rounded-2xl border p-6 text-center bg-white/5" style={{ borderColor: "color-mix(in srgb, var(--accent), transparent 70%)" }}>
          <h3 className="mt-0" style={{ color: "var(--accent)" }}>Contact Information</h3>
          <p className="m-0">If you have any questions about this Affiliate Disclosure, please contact us at:</p>
          <p className="mt-2"><strong>Email:</strong> <a href="mailto:aifindrdotio@gmail.com">aifindrdotio@gmail.com</a></p>
        </div>
                </article>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </AppContainer>
  );
}
