import { AppContainer } from "@/components/layout/AppContainer";

export default function TermsPage() {
  return (
    <AppContainer>
      <article className="w-full max-w-3xl prose prose-neutral dark:prose-invert prose-a:text-[var(--accent,#36BAA2)]">
        <h1>Terms of Service</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2>Use of Site</h2>
        <p>
          By accessing this site, you agree to use it in compliance with applicable laws. Content is provided
          &quot;as is&quot; without warranties of any kind.
        </p>
        <h2>Affiliate Links</h2>
        <p>
          Some outbound links are affiliate links. We may earn a commission if you make a purchase. This does not
          affect our reviews or comparisons.
        </p>
        <h2>Limitation of Liability</h2>
        <p>
          We are not liable for any damages arising from the use of this site or third‑party tools listed here.
        </p>
        <p>
          For questions, contact <a href="mailto:aifindrdotio@gmail.com">aifindrdotio@gmail.com</a>.
        </p>
      </article>
    </AppContainer>
  );
}
