import { AppContainer } from "@/components/layout/AppContainer";

export default function AffiliateDisclosurePage() {
  return (
    <AppContainer>
      <article className="w-full max-w-3xl prose prose-neutral dark:prose-invert prose-a:text-[var(--accent,#36BAA2)]">
        <h1>Affiliate Disclosure</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          Some of the links on this site are affiliate links. This means we may earn a commission if you
          click through and make a purchase, at no additional cost to you.
        </p>
        <p>
          We only recommend tools we believe can add value. Our editorial opinions are our own and are not
          influenced by affiliate partnerships.
        </p>
        <h2>Why we use affiliate links</h2>
        <p>
          Affiliate commissions help support the time and resources required to research, test, and maintain
          the recommendations you find here. They allow us to keep the content free for readers.
        </p>
        <h2>Questions</h2>
        <p>
          If you have any questions about this disclosure, contact us at {" "}
          <a href="mailto:hello@example.com">hello@example.com</a>.
        </p>
      </article>
    </AppContainer>
  );
}
