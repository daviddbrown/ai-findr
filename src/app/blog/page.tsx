import { AppContainer } from "@/components/layout/AppContainer";

export default function BlogIndexPage() {
  return (
    <AppContainer>
      <article className="w-full max-w-3xl prose prose-neutral dark:prose-invert prose-a:text-[var(--accent,#36BAA2)]">
        <h1>Blog</h1>
        <p>Posts are coming soon.</p>
      </article>
    </AppContainer>
  );
}
