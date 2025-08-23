"use client";
import { SearchBar } from "@/components/finder/SearchBar";

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

  const row1 = ["Image Generation", "Copywriting", "Code Assistant", "Chatbots", "Data Analysis"];
  const row2 = ["Video Creation", "Automation", "SEO Tools", "Influencer", "Monitoring"];

  const chipBase =
    "inline-flex items-center justify-center px-4 h-9 rounded-full shadow-sm text-sm select-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40 focus-visible:ring-offset-2 ring-offset-white dark:ring-offset-neutral-900 active:translate-y-[1px]";
  const chipPassive =
    " border border-neutral-200 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/60 text-neutral-700 dark:text-neutral-200 hover:border-[color:var(--accent)]";
  const chipActive =
    " border border-[color:var(--accent)] text-[color:var(--accent)] bg-[color:var(--accent)]/10";

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_0%,_rgba(54,186,162,0.10)_0%,_rgba(54,186,162,0.04)_35%,_transparent_70%)]" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-10 sm:pt-14 pb-8 sm:pb-12 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          Find the Perfect <span style={{ color: ACCENT }}>AI Tool</span>
          <br /> for Your Needs
        </h1>
        <p className="mt-4 max-w-xl sm:max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 overflow-hidden max-h-[3.25em]">
          Discover, compare, and choose from hundreds of AI tools across different categories. From productivity to creativity, find the right AI solution for your workflow.
        </p>

        <div className="mt-8">
          <div className="mx-auto max-w-3xl">
            <div className="relative rounded-2xl shadow-[0_6px_0_rgba(0,0,0,0.05)]">
              <SearchBar
                value={query}
                onChange={setQuery}
                placeholder="Search AI tools, features, or use cases..."
                showButton
                onSubmit={scrollToResults}
                buttonLabel="Search"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-3">
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
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
          <Stat number="75+" label="AI Tools" accent={ACCENT} />
          <Stat number="25+" label="Categories" accent={ACCENT} />
          <Stat number="500+" label="Tools Reviewed" accent={ACCENT} />
          <Stat number="Weekly" label="Updates" accent={ACCENT} />
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label, accent }: { number: string; label: string; accent: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl font-extrabold" style={{ color: accent }}>
        {number}
      </div>
      <div className="mt-1 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">{label}</div>
    </div>
  );
}
