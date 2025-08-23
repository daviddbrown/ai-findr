import { AppContainer } from "@/components/layout/AppContainer";

export default function PrivacyPage() {
  return (
    <AppContainer>
      <article className="w-full max-w-3xl prose prose-neutral dark:prose-invert prose-a:text-[var(--accent,#36BAA2)]">
        <h1>Privacy Policy</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          We respect your privacy. We collect minimal data necessary to operate this website and improve your
          experience. This may include anonymized analytics and basic technical logs.
        </p>
        <h2>Analytics</h2>
        <p>
          We may use privacy-friendly analytics to understand aggregate usage. No personally identifiable
          information is sold or shared.
        </p>
        <h2>Contact</h2>
        <p>
          If you have questions about this policy, contact us at <a href="mailto:aifindrdotio@gmail.com">aifindrdotio@gmail.com</a>.
        </p>
      </article>
    </AppContainer>
  );
}
