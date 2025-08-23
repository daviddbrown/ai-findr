import { AppContainer } from "@/components/layout/AppContainer";

export default function AboutPage() {
  return (
    <AppContainer>
      <article className="w-full max-w-3xl prose prose-neutral dark:prose-invert prose-a:text-[var(--accent,#36BAA2)]">
        <h1>About</h1>
        <p>We help you find the right AI tools for your workflow. More details coming soon.</p>
      </article>
    </AppContainer>
  );
}
