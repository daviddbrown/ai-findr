"use client";
import { SearchBar } from "@/components/finder/SearchBar";
import { Reveal } from "@/components/utility/Reveal";
import { StatCard } from "@/components/ui/StatCard";
import { tools } from "@/config/tools";
import { scoreTool } from "@/lib/search";
import { analytics } from "@/components/analytics/GoogleAnalytics";
import type { ToolItem } from "@/types/tools";

const ACCENT = "#36BAA2"; // primary accent per request

export function Hero({
  query,
  setQuery,
}: {
  query: string;
  setQuery: (q: string) => void;
}) {
  const scrollToResults = () => {
    const el = document.getElementById("results");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const submitSearch = () => {
    const trimmed = query.trim();
    if (trimmed.length >= 3) {
      const results = (tools as ToolItem[]).filter((t) => scoreTool(t, trimmed) > 0);
      analytics.searchPerformed(trimmed, results.length);
    }
    scrollToResults();
  };

  const row1 = ["Image Generation", "Copywriting", "Code Assistant", "Chatbots", "Data Analysis"];
  const row2 = ["Video Creation", "Automation", "SEO Tools", "Influencer", "Monitoring"];

  const chipBase =
    "inline-flex items-center justify-center px-4 h-9 rounded-full shadow-sm text-sm select-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40 focus-visible:ring-offset-2 ring-offset-white dark:ring-offset-neutral-900 active:translate-y-[1px] cursor-pointer";
  const chipPassive =
    " border border-neutral-200 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/60 text-neutral-700 dark:text-neutral-200 hover:border-[color:var(--accent)]";
  const chipActive =
    " border border-[color:var(--accent)] text-[color:var(--accent)] bg-[color:var(--accent)]/10";

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_0%,_rgba(54,186,162,0.10)_0%,_rgba(54,186,162,0.04)_35%,_transparent_70%)]" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-12 sm:pt-16 pb-10 sm:pb-14 text-center">
        <Reveal>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Find the Perfect <span style={{ color: ACCENT }}>AI Tool</span>
            <br /> for Your Needs
          </h1>
        </Reveal>
        <Reveal delayMs={80}>
          <p className="mt-5 max-w-xl sm:max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 overflow-hidden max-h-[3.25em]">
            Discover, compare, and choose from hundreds of AI tools across different categories. From productivity to creativity, find the right AI solution for your workflow.
          </p>
        </Reveal>

        <Reveal delayMs={140}>
          <div className="mt-8">
            <div className="mx-auto max-w-3xl">
              <div className="relative rounded-2xl shadow-[0_6px_0_rgba(0,0,0,0.05)]">
                <SearchBar
                  value={query}
                  onChange={setQuery}
                  placeholder="Search AI tools, features, or use cases..."
                  showButton
                  onSubmit={submitSearch}
                  buttonLabel="Search"
                />
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 space-y-3">
          <Reveal delayMs={200}>
            <div className="flex flex-row flex-wrap gap-3 justify-center">
            {row1.map((label) => {
              const isActive = query.trim().toLowerCase() === label.toLowerCase();
              return (
                <button
                  key={label}
                  onClick={() => setQuery(label)}
                  aria-pressed={isActive}
                  className={chipBase + (isActive ? chipActive : chipPassive)}
                >
                  {label}
                </button>
              );
            })}
            </div>
          </Reveal>
          <Reveal delayMs={260}>
            <div className="flex flex-row flex-wrap gap-3 justify-center">
            {row2.map((label) => {
              const isActive = query.trim().toLowerCase() === label.toLowerCase();
              return (
                <button
                  key={label}
                  onClick={() => setQuery(label)}
                  aria-pressed={isActive}
                  className={chipBase + (isActive ? chipActive : chipPassive)}
                >
                  {label}
                </button>
              );
            })}
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-stretch">
          <Reveal><StatCard count={75} suffix="+" label="AI Tools" accent={ACCENT} startDelayMs={0} /></Reveal>
          <Reveal delayMs={60}><StatCard count={25} suffix="+" label="Categories" accent={ACCENT} startDelayMs={100} /></Reveal>
          <Reveal delayMs={120}><StatCard count={500} suffix="+" label="Tools Reviewed" accent={ACCENT} startDelayMs={200} /></Reveal>
          <Reveal delayMs={180}><StatCard number="Weekly" label="Updates" accent={ACCENT} /></Reveal>
        </div>
      </div>
    </section>
  );
}
