import { AppContainer } from "@/components/layout/AppContainer";

export default function NewsletterPage() {
  return (
    <AppContainer>
      <article className="w-full max-w-3xl prose prose-neutral dark:prose-invert prose-a:text-[var(--accent,#36BAA2)]">
        <h1>Newsletter</h1>
        <p>Newsletter signup is coming soon.</p>
      </article>
    </AppContainer>
  );
}
