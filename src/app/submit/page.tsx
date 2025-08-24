import type { Metadata } from "next";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Submit a Tool",
  description: "Submit your AI tool to be considered for inclusion on aiFindr.",
  alternates: { canonical: "/submit" },
  openGraph: { images: [{ url: "/api/og?title=Submit%20a%20Tool", width: 1200, height: 630, alt: `${site.name} Submit a Tool` }] },
  twitter: { images: [{ url: "/api/og?title=Submit%20a%20Tool", alt: `${site.name} Submit a Tool` }] },
};
import { AppContainer } from "@/components/layout/AppContainer";

export default function SubmitToolPage() {
  return (
    <AppContainer>
      <article className="w-full max-w-3xl prose prose-neutral dark:prose-invert prose-a:text-[var(--accent,#36BAA2)]">
        <h1>Submit a Tool</h1>
  <p>Tool submission coming soon. For now, email us at <a href="mailto:aifindrdotio@gmail.com">aifindrdotio@gmail.com</a>.</p>
      </article>
    </AppContainer>
  );
}
