import type { Metadata } from "next";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "About aiFindr",
  description: "We research, organize, and recommend the best AI tools so you can quickly find what actually works.",
  alternates: { canonical: "/about" },
  openGraph: { images: [{ url: "/api/og?title=About", width: 1200, height: 630, alt: `${site.name} About` }] },
  twitter: { images: [{ url: "/api/og?title=About", alt: `${site.name} About` }] },
};
import { AppContainer } from "@/components/layout/AppContainer";
import { IconTarget, IconUsers, IconShieldCheck, IconRocket } from "@tabler/icons-react";
import { Reveal } from "@/components/utility/Reveal";
import Link from "next/link";
import { StatCard } from "@/components/ui/StatCard";

const ACCENT = "var(--accent)"; // align with global accent color

export default function AboutPage() {
  return (
    <AppContainer>
      <div className="relative overflow-hidden">
        {/* Hero background shimmer */}
  <div className="absolute inset-0 -z-10 bg-hero-accent" />

        <section className="text-center px-6 pt-20 pb-20 sm:pt-24 sm:pb-24">
          <Reveal>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
              Your Guide to <br className="hidden sm:block" />
              <span style={{ color: ACCENT }}>Finding AI Tools</span>
            </h1>
          </Reveal>
          <Reveal delayMs={100}>
            <p className="mt-6 max-w-2xl mx-auto text-neutral-600 dark:text-neutral-300 text-lg">
              Overwhelmed by AI tool options? We research, organize, and recommend the best tools so you can quickly find what actually works for your needs.
            </p>
          </Reveal>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Reveal><StatCard count={75} suffix="+" label="AI Tools" accent={ACCENT} startDelayMs={0} /></Reveal>
            <Reveal delayMs={60}><StatCard count={25} suffix="+" label="Categories" accent={ACCENT} startDelayMs={100} /></Reveal>
            <Reveal delayMs={120}><StatCard count={500} suffix="+" label="Tools Reviewed" accent={ACCENT} startDelayMs={200} /></Reveal>
            <Reveal delayMs={180}><StatCard number="Weekly" label="Updates" accent={ACCENT} /></Reveal>
          </div>
        </section>

        {/* Mission & Values */}
  <section className="px-6 py-20 sm:py-24">
          <div className="max-w-6xl mx-auto grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3">
            <Reveal className="text-center p-8 rounded-2xl border bg-white/60 dark:bg-neutral-900/40 border-neutral-200 dark:border-neutral-800 backdrop-blur">
              <div className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center shadow" style={{ background: ACCENT }}>
                <IconTarget size={40} color="#000" aria-hidden />
              </div>
              <h3 className="mt-5 text-xl font-bold">Our Mission</h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300">Cut through the noise of thousands of AI tools. We do the research, testing, and organizing so you can spend less time searching and more time finding solutions that actually solve your problems.</p>
            </Reveal>
            <Reveal delayMs={80} className="text-center p-8 rounded-2xl border bg-white/60 dark:bg-neutral-900/40 border-neutral-200 dark:border-neutral-800 backdrop-blur">
              <div className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center shadow" style={{ background: ACCENT }}>
                <IconUsers size={40} color="#000" aria-hidden />
              </div>
              <h3 className="mt-5 text-xl font-bold">Our Community</h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300">Busy professionals, creative freelancers, small business owners, and curious learners who need reliable recommendations. We help people discover tools they never knew existed but always needed.</p>
            </Reveal>
            <Reveal delayMs={160} className="text-center p-8 rounded-2xl border bg-white/60 dark:bg-neutral-900/40 border-neutral-200 dark:border-neutral-800 backdrop-blur">
              <div className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center shadow" style={{ background: ACCENT }}>
                <IconShieldCheck size={40} color="#000" aria-hidden />
              </div>
              <h3 className="mt-5 text-xl font-bold">Our Impact</h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300">Every recommendation helps someone <span className="font-semibold" style={{ color: ACCENT }}>skip hours of research</span> and avoid trying tools that don&#39;t fit their needs. We turn the overwhelming world of AI into clear, actionable choices.</p>
            </Reveal>
          </div>
        </section>

        {/* Story */}
  <section className="px-6 py-20 sm:py-24 border-y border-neutral-200 dark:border-neutral-800 bg-white/40 dark:bg-neutral-900/30 backdrop-blur">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <h2 className="text-3xl font-bold">Our Story</h2>
            </Reveal>
            <Reveal delayMs={60}>
              <p className="mt-5 text-neutral-700 dark:text-neutral-300 text-lg">Founded in 2025, aiFindr started with a simple idea: AI tools are incredibly powerful, but finding the right one shouldn&#39;t be so complicated.</p>
            </Reveal>
            <Reveal delayMs={120}>
              <p className="mt-4 text-neutral-700 dark:text-neutral-300 text-lg">Our team combines people who love technology with those who understand everyday challenges. Together, we test tools, read the fine print, and translate complex features into simple explanations.</p>
            </Reveal>
            <Reveal delayMs={180}>
              <p className="mt-4 text-neutral-700 dark:text-neutral-300 text-lg">We review hundreds of AI tools so you don&#39;t have to. Our goal is to help you find solutions that fit your needs and budget - whether you&#39;re running a business, working on creative projects, or just trying to make daily tasks easier.</p>
            </Reveal>
          </div>
        </section>

    {/* CTA */}
  <section className="px-6 py-16 sm:py-20 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold">Ready to Discover Your Next AI Tool?</h2>
          </Reveal>
          <Reveal delayMs={80}>
    <p className="mt-4 sm:mt-5 max-w-2xl mx-auto text-neutral-600 dark:text-neutral-300 text-lg">Join our community and start exploring the tools that will transform your workflow.</p>
          </Reveal>
          <Reveal delayMs={140}>
  <Link href="/" className="mt-6 sm:mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-base bg-[color:var(--accent,#36BAA2)] text-black shadow hover:translate-y-[-2px] active:translate-y-[0] transition-transform cursor-pointer">
        <IconRocket size={20} aria-hidden />
              Explore Tools
            </Link>
          </Reveal>
        </section>
      </div>
    </AppContainer>
  );
}
