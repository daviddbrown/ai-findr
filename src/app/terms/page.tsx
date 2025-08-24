import type { Metadata } from "next";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The rules for using aiFindr and important legal terms.",
  alternates: { canonical: "/terms" },
  openGraph: {
    images: [
      { url: "/api/og?title=Terms%20of%20Service", width: 1200, height: 630, alt: `${site.name} Terms of Service` },
    ],
  },
  twitter: { images: [{ url: "/api/og?title=Terms%20of%20Service", alt: `${site.name} Terms of Service` }] },
};
import { AppContainer } from "@/components/layout/AppContainer";
import { Reveal } from "@/components/utility/Reveal";

const ACCENT = "var(--accent)";

export default function TermsPage() {
  return (
    <AppContainer>
      <div className="relative overflow-hidden">
        {/* Background shimmer to match About */}
        <div className="absolute inset-0 -z-10 bg-hero-accent" />

        {/* Header */}
  <section className="text-center px-6 pt-10 pb-8 sm:pt-12 sm:pb-10">
          <Reveal>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              <span style={{ color: ACCENT }}>Terms of Service</span>
            </h1>
          </Reveal>
          <Reveal delayMs={80}>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300">Last updated: August 23, 2025</p>
          </Reveal>
        </section>

        {/* Content */}
        <section className="px-6 pb-20 sm:pb-24">
          <div className="max-w-3xl mx-auto">
            <Reveal delayMs={120}>
              <div className="rounded-2xl border bg-white/60 dark:bg-neutral-900/40 border-neutral-200 dark:border-neutral-800 backdrop-blur p-6 sm:p-8 shadow">
                <article className="prose prose-neutral dark:prose-invert prose-headings:scroll-mt-24 prose-h2:font-semibold prose-h3:font-semibold prose-h2:mb-6 md:prose-h2:mb-8 prose-h2:pt-4 md:prose-h2:pt-6 prose-h3:mb-4 prose-h3:pt-3 md:prose-h3:pt-4 prose-p:mt-6 md:prose-p:mt-8 prose-ul:mt-6 md:prose-ul:mt-8 prose-ol:mt-6 md:prose-ol:mt-8 prose-p:text-neutral-700 dark:prose-p:text-neutral-300 prose-li:text-neutral-700 dark:prose-li:text-neutral-300 prose-ul:my-4 prose-li:my-2 prose-strong:text-[color:var(--accent,#36BAA2)] prose-a:text-[var(--accent,#36BAA2)]">

        <h2 id="agreement" className="pb-2 border-b" style={{ borderColor: "color-mix(in srgb, var(--accent), transparent 70%)", color: "var(--accent)" }}>Agreement to Terms</h2>
        <p>
          By accessing and using this website, you accept and agree to be bound by the terms and provision of this
          agreement. If you do not agree to abide by the above, please do not use this service.
        </p>

        <h2 id="use" className="pb-2 border-b mt-8" style={{ borderColor: "color-mix(in srgb, var(--accent), transparent 70%)", color: "var(--accent)" }}>Use of the Website</h2>
        <h3>Permitted Use</h3>
        <ul>
          <li>You may browse, search, and use our website for personal, non-commercial purposes</li>
          <li>You may share links to our content on social media and other platforms</li>
          <li>You agree to use the website in compliance with all applicable local, state, national, and international laws and regulations</li>
        </ul>

        <h3>Prohibited Use</h3>
        <div className="not-prose my-4 rounded-md border-l-4 p-4 bg-white/5" style={{ borderColor: "var(--accent)" }}>
          <p className="m-0 font-semibold" style={{ color: "var(--accent)" }}>You may not:</p>
          <ul className="mt-3 list-disc pl-5">
            <li>Use the website for any unlawful purpose or to solicit others to perform such acts</li>
            <li>Violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
            <li>Infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
            <li>Harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
            <li>Submit false or misleading information</li>
            <li>Upload viruses or any other type of malicious code</li>
            <li>Spam, phish, pharm, pretext, spider, crawl, or scrape</li>
            <li>Use the website for any obscene or immoral purpose</li>
            <li>Interfere with or circumvent the security features of the website</li>
          </ul>
        </div>

        <h2 id="content" className="pb-2 border-b mt-8" style={{ borderColor: "color-mix(in srgb, var(--accent), transparent 70%)", color: "var(--accent)" }}>Content and Intellectual Property</h2>
        <h3>Our Content</h3>
        <ul>
          <li>All content on this website, including but not limited to text, graphics, logos, images, and software, is our property or the property of our content suppliers and is protected by copyright and intellectual property laws</li>
          <li>You may not reproduce, distribute, display, sell, lease, transmit, create derivative works from, translate, modify, reverse-engineer, disassemble, decompile or otherwise exploit this website or any portion of it</li>
        </ul>

        <h3>User-Generated Content</h3>
        <ul>
          <li>If you submit content to our website (comments, reviews, etc.), you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, adapt, publish, translate, distribute, and display such content</li>
          <li>You represent that you own or have the necessary rights to any content you submit</li>
        </ul>

  <h2 id="affiliate" className="pb-2 border-b mt-8" style={{ borderColor: "color-mix(in srgb, var(--accent), transparent 70%)", color: "var(--accent)" }}>Affiliate Links and Monetization</h2>
        <h3>Affiliate Relationships</h3>
        <ul>
          <li>Some outbound links on this website are affiliate links</li>
          <li>We may earn a commission if you make a purchase through these links at no additional cost to you</li>
          <li>Affiliate relationships do not influence our reviews, recommendations, or editorial content</li>
          <li>We only recommend products and services we believe provide value to our users</li>
        </ul>

        <h3>Advertising</h3>
        <ul>
          <li>We may display advertisements and sponsored content</li>
          <li>Advertisements are clearly labeled as such</li>
          <li>We are not responsible for the content of advertisements or the practices of advertisers</li>
        </ul>

        <h2 id="liability" className="pb-2 border-b mt-8" style={{ borderColor: "color-mix(in srgb, var(--accent), transparent 70%)", color: "var(--accent)" }}>Disclaimers and Limitation of Liability</h2>
        <div className="not-prose my-4 rounded-md border-l-4 p-4 bg-white/5" style={{ borderColor: "var(--accent)" }}>
          <h3 className="mt-0" style={{ color: "var(--accent)" }}>Content Accuracy</h3>
          <ul className="mt-2 list-disc pl-5">
            <li>Information on this website is provided on an &quot;as is&quot; basis</li>
            <li>While we strive for accuracy, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website</li>
            <li>Any reliance you place on such information is strictly at your own risk</li>
          </ul>
        </div>

        <h3>External Links</h3>
        <ul>
          <li>Our website may contain links to external websites that are not provided or maintained by us</li>
          <li>We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites</li>
          <li>We are not responsible for the content of external websites</li>
        </ul>

        <h3>Limitation of Liability</h3>
        <ul>
          <li>In no event shall we, our affiliates, agents, directors, employees, suppliers, or licensors be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses</li>
          <li>Our liability shall not exceed the amount you paid us, if any, for accessing this website</li>
        </ul>

        <div className="h-px my-10" style={{ background: "linear-gradient(90deg, transparent, color-mix(in srgb, var(--accent) 50%, transparent), transparent)" }} />

        <h2 id="privacy" className="pb-2 border-b mt-8" style={{ borderColor: "color-mix(in srgb, var(--accent), transparent 70%)", color: "var(--accent)" }}>Privacy</h2>
        <p>
          Your privacy is important to us. Please review our <a href="/privacy">Privacy Policy</a>, which also governs your use of the website, to understand our practices.
        </p>

        <h2 id="modifications" className="pb-2 border-b mt-8" style={{ borderColor: "color-mix(in srgb, var(--accent), transparent 70%)", color: "var(--accent)" }}>Modifications</h2>
        <p>
          We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the website following the posting of changes constitutes your acceptance of such changes.
        </p>

        <h2 id="termination" className="pb-2 border-b mt-8" style={{ borderColor: "color-mix(in srgb, var(--accent), transparent 70%)", color: "var(--accent)" }}>Termination</h2>
        <p>
          We may terminate or suspend access to our website immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
        </p>

        <h2 id="governing-law" className="pb-2 border-b mt-8" style={{ borderColor: "color-mix(in srgb, var(--accent), transparent 70%)", color: "var(--accent)" }}>Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of your jurisdiction, without regard to its conflict of law provisions. Any disputes will be resolved in the courts of your jurisdiction.
        </p>

        <h2 id="contact" className="pb-2 border-b mt-8" style={{ borderColor: "color-mix(in srgb, var(--accent), transparent 70%)", color: "var(--accent)" }}>Contact Information</h2>
        <div className="not-prose mt-4 rounded-2xl border p-6 text-center bg-white/5" style={{ borderColor: "color-mix(in srgb, var(--accent), transparent 70%)" }}>
          <h3 className="mt-0" style={{ color: "var(--accent)" }}>Contact Information</h3>
          <p className="m-0">If you have any questions about these Terms of Service, please contact us at:</p>
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
