import type { Metadata } from "next";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Our commitment to your privacy and how we handle data on aiFindr.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    images: [
      { url: "/api/og?title=Privacy%20Policy", width: 1200, height: 630, alt: `${site.name} Privacy Policy` },
    ],
  },
  twitter: { images: [{ url: "/api/og?title=Privacy%20Policy", alt: `${site.name} Privacy Policy` }] },
};
import { AppContainer } from "@/components/layout/AppContainer";
import { Reveal } from "@/components/utility/Reveal";

const ACCENT = "var(--accent)";

export default function PrivacyPage() {
  return (
    <AppContainer>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-hero-accent" />

  <section className="text-center px-6 pt-10 pb-8 sm:pt-12 sm:pb-10">
          <Reveal>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              <span style={{ color: ACCENT }}>Privacy Policy</span>
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

        <h2 id="intro" className="pb-2 border-b" style={{ borderColor: "color-mix(in srgb, var(--accent), transparent 70%)", color: "var(--accent)" }}>Introduction</h2>
        <p>We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and protect your information when you visit our website.</p>

        <h2 id="collect" className="pb-2 border-b mt-8" style={{ borderColor: "color-mix(in srgb, var(--accent), transparent 70%)", color: "var(--accent)" }}>Information We Collect</h2>
        <h3>Information You Provide Directly</h3>
        <ul>
          <li>Contact information when you reach out to us via email</li>
          <li>Any content you submit through contact forms or comments (if applicable)</li>
        </ul>

        <h3>Information Collected Automatically</h3>
        <ul>
          <li><strong>Technical Data</strong>: IP address, browser type, operating system, referral URLs, pages visited, time spent on pages</li>
          <li><strong>Usage Data</strong>: How you interact with our website, which pages you visit, what links you click</li>
          <li><strong>Device Information</strong>: Device type, screen resolution, browser settings</li>
        </ul>

  <h3>Cookies and Similar Technologies</h3>
        <ul>
          <li>We may use cookies and similar tracking technologies to enhance your experience</li>
          <li>
            These may include:
            <ul>
              <li><strong>Essential cookies</strong>: Necessary for website functionality</li>
              <li><strong>Analytics cookies</strong>: Help us understand how visitors use our site</li>
              <li><strong>Preference cookies</strong>: Remember your settings and preferences</li>
            </ul>
          </li>
          <li>You can control cookie settings through your browser, though some features may not work properly if cookies are disabled</li>
        </ul>

  <h2 id="use" className="pb-2 border-b mt-8" style={{ borderColor: "color-mix(in srgb, var(--accent), transparent 70%)", color: "var(--accent)" }}>How We Use Your Information</h2>
        <ul>
          <li><strong>Website Operation</strong>: To provide, maintain, and improve our website</li>
          <li><strong>Analytics</strong>: To understand user behavior and improve user experience</li>
          <li><strong>Communication</strong>: To respond to your inquiries and provide customer support</li>
          <li><strong>Legal Compliance</strong>: To comply with applicable laws and regulations</li>
          <li><strong>Security</strong>: To protect against fraud and ensure website security</li>
        </ul>

  <h2 id="share" className="pb-2 border-b mt-8" style={{ borderColor: "color-mix(in srgb, var(--accent), transparent 70%)", color: "var(--accent)" }}>Information Sharing and Disclosure</h2>
        <h3>Third-Party Services</h3>
        <p>We may use third-party services that collect, monitor, and analyze user data:</p>
        <ul>
          <li><strong>Analytics Services</strong> (e.g., Google Analytics): To understand website usage patterns</li>
          <li><strong>Content Delivery Networks (CDNs)</strong>: To improve website performance</li>
          <li><strong>Email Services</strong>: To handle contact form submissions and communications</li>
        </ul>

        <h3>We Do Not Sell Personal Information</h3>
        <ul>
          <li>We do not sell, trade, or rent your personal information to third parties</li>
          <li>We do not share your personal information for marketing purposes without your explicit consent</li>
        </ul>

        <h3>Legal Requirements</h3>
        <p>We may disclose your information if required by law or if we believe such action is necessary to:</p>
        <ul>
          <li>Comply with legal obligations</li>
          <li>Protect and defend our rights and property</li>
          <li>Prevent or investigate possible wrongdoing</li>
          <li>Protect personal safety</li>
        </ul>

        <h2 id="retention" className="pb-2 border-b mt-8" style={{ borderColor: "color-mix(in srgb, var(--accent), transparent 70%)", color: "var(--accent)" }}>Data Retention</h2>
        <ul>
          <li>We retain personal information only as long as necessary for the purposes outlined in this policy</li>
          <li>Analytics data is typically retained for 26 months</li>
          <li>Contact information is retained until you request deletion or we determine it&apos;s no longer necessary</li>
        </ul>

        <h2 id="rights" className="pb-2 border-b mt-8" style={{ borderColor: "color-mix(in srgb, var(--accent), transparent 70%)", color: "var(--accent)" }}>Your Rights and Choices</h2>
        <p>Depending on your location, you may have the following rights:</p>
        <ul>
          <li><strong>Access</strong>: Request information about the personal data we have about you</li>
          <li><strong>Correction</strong>: Request correction of inaccurate personal data</li>
          <li><strong>Deletion</strong>: Request deletion of your personal data</li>
          <li><strong>Opt-out</strong>: Opt out of certain data collection practices</li>
          <li><strong>Portability</strong>: Request transfer of your data to another service</li>
        </ul>
        <p>To exercise these rights, contact us at <a href="mailto:aifindrdotio@gmail.com">aifindrdotio@gmail.com</a>.</p>

        <h2 className="pb-2 border-b mt-8" style={{ borderColor: "color-mix(in srgb, var(--accent), transparent 70%)", color: "var(--accent)" }}>Children&apos;s Privacy</h2>
        <p>Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe we have collected information about a child, please contact us immediately.</p>

        <h2 className="pb-2 border-b mt-8" style={{ borderColor: "color-mix(in srgb, var(--accent), transparent 70%)", color: "var(--accent)" }}>International Data Transfers</h2>
        <p>If you are accessing our website from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States where our servers are located and our central database is operated.</p>

        <h2 id="security" className="pb-2 border-b mt-8" style={{ borderColor: "color-mix(in srgb, var(--accent), transparent 70%)", color: "var(--accent)" }}>Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.</p>

        <h2 id="links" className="pb-2 border-b mt-8" style={{ borderColor: "color-mix(in srgb, var(--accent), transparent 70%)", color: "var(--accent)" }}>Third-Party Links</h2>
        <p>Our website may contain links to third-party websites. This privacy policy does not apply to those websites. We encourage you to read the privacy policies of any third-party websites you visit.</p>

  <h2 id="changes" className="pb-2 border-b mt-8" style={{ borderColor: "color-mix(in srgb, var(--accent), transparent 70%)", color: "var(--accent)" }}>Changes to This Privacy Policy</h2>
        <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the &quot;Last updated&quot; date. Changes are effective immediately upon posting.</p>


        <h2>Additional Information for California Residents</h2>
        <ul>
          <li>Right to know what personal information is collected</li>
          <li>Right to delete personal information</li>
          <li>Right to opt-out of the sale of personal information (note: we do not sell personal information)</li>
          <li>Right to non-discrimination for exercising your privacy rights</li>
        </ul>

        <h2>Additional Information for EU Residents</h2>
        <ul>
          <li>Our legal basis for processing is legitimate interest in operating our website</li>
          <li>You have the right to lodge a complaint with your local data protection authority</li>
          <li>You may withdraw consent at any time where we rely on consent for processing</li>
        </ul>

        <h2 id="contact" className="pb-2 border-b mt-8" style={{ borderColor: "color-mix(in srgb, var(--accent), transparent 70%)", color: "var(--accent)" }}>Contact Information</h2>
        <div className="not-prose mt-4 rounded-2xl border p-6 text-center bg-white/5" style={{ borderColor: "color-mix(in srgb, var(--accent), transparent 70%)" }}>
          <h3 className="mt-0" style={{ color: "var(--accent)" }}>Contact Information</h3>
          <p className="m-0">If you have any questions about this Privacy Policy, please contact us at:</p>
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
