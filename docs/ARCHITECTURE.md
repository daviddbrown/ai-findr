# AI Findr – Architecture and Technical Guide

This document explains how the project is organized, how the major pieces fit together, and how to extend it safely. It assumes basic familiarity with TypeScript and React, and will call out the Next.js specifics when relevant.

## Overview

- Framework: Next.js 15 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS v4 (utility-first; no custom CSS)
- Runtime: React Server Components by default; Client Components for interactivity
- Build: Turbopack in dev; Next.js build for production

The app renders a single-page "AI Tool Finder" experience at `/`, with a client-side search that filters and ranks a curated list of AI tools.

## Repository layout

- `src/app/`
  - `layout.tsx`: Global HTML shell and fonts for the App Router.
  - `page.tsx`: Home route (`/`). Renders the Finder UI inside the layout.
  - `globals.css`: Imports Tailwind v4 (`@import "tailwindcss";`).
- `src/components/`
  - `layout/` – Layout primitives used across pages
    - `AppContainer.tsx`: Page shell (padding, max width, background).
    - `Footer.tsx`: Minimal footer (not strictly required by Finder).
  - `finder/` – Feature components for the Finder page
    - `Finder.tsx` (client): State + composition of the search experience.
    - `SearchBar.tsx` (client): Controlled input for search query.
    - `PopularChips.tsx` (client): Renders top-N “popular” query chips.
    - `ToolList.tsx`: Lists `ToolCard` with a count.
    - `ToolCard.tsx`: Displays a single tool (name, tagline, rating, pros/cons, price, CTA). Also shows categories and tags.
  - `ui/`
    - `ButtonLink.tsx`: Simple link styled as a button.
  - `home/` – Earlier starter components retained for reference (not used on `/`).
- `src/config/`
  - `tools.ts`: The curated dataset of AI tools (name, tagline, pros/cons, price, keywords, categories, tags, CTA).
  - `keywords.ts`: Centralized list of popular/long‑tail query terms used by `PopularChips`.
- `src/types/`
  - `tools.ts`: Type definitions for tool data.
  - `links.ts`: Type used by legacy starter links.
- `src/lib/`
  - `search.ts`: Fuzzy, weighted search scoring function for ranking results.

Public assets live in `public/`. Project config files (`package.json`, `next.config.ts`, `tsconfig.json`, etc.) are at the repo root.

## App Router flow

- Next.js App Router uses a file‑system based routing.
- `src/app/layout.tsx` provides the HTML `<html>`/`<body>` wrapper for all routes. Fonts are loaded via `next/font`.
- `src/app/page.tsx` exports the default React component for `/`. It composes layout and Finder UI.
- By default, components in `app/` are Server Components. Interactive pieces include a `'use client'` pragma at the top of the file.

## The Finder feature

The Finder feature is the heart of the app. It’s composed of:

- `Finder.tsx` (client):
  - Holds `query` state with `useState`.
  - Computes filtered, ranked tools via `useMemo` and `scoreTool` from `src/lib/search.ts`.
  - Hides results until the user types (empty query → no cards).
  - Renders header title, subtitle, `SearchBar`, and `PopularChips`.
  - When `query` is non-empty, renders `ToolList` with matching tools (sorted by score).

- `SearchBar.tsx` (client):
  - Controlled input: `value` and `onChange(string)`.
  - Uses Tailwind classes for styling and focus rings.

- `PopularChips.tsx` (client):
  - Imports `popularKeywords` from `src/config/keywords.ts`.
  - Shows only the top N (default 8, clamped to 5–8) chips.
  - Clicking a chip sets the query input to that term.

- `ToolList.tsx` and `ToolCard.tsx`:
  - `ToolList` shows a results header (count) and maps tools to `ToolCard`.
  - `ToolCard` renders:
    - Title, rating, difficulty badge, tagline
    - Pros and cons columns
    - Price and a CTA button (external link)
    - Category and tag badges (if provided)

## Data model

`src/types/tools.ts` defines the shape of each tool:

- `id: string` – unique key
- `name: string`
- `tagline: string`
- `rating: number` – 0..5
- `difficulty: "Easy" | "Medium" | "Hard"`
- `price: string`
- `prosCons: { pros: string[]; cons: string[] }`
- `ctaLabel: string`, `ctaHref: string` – call‑to‑action copy and URL
- `keywords?: string[]` – search intents and synonyms (used heavily by search)
- `categories?: string[]` – high‑level facets (e.g., Images, Video, Writing)
- `tags?: string[]` – secondary descriptors (e.g., Open source, API, Templates)

`src/config/tools.ts` provides the actual dataset (20+ entries). To add a tool, append a new object that matches `ToolItem` and it will appear in results when the query matches.

## Search and ranking

The search logic lives in `src/lib/search.ts` and does:

1. Normalize text (case‑insensitive, basic punctuation stripping, Unicode‑safe with NFKC).
2. Tokenize the query into words.
3. Score each tool across several fields with weights:
   - name: 5
   - tagline: 3
   - categories: 3
   - keywords: 2
   - tags: 2
   - pros: 1
   - cons: 0.5
   - plus a small bonus if the full normalized query is a substring of the combined fields.
4. Fuzzy match per token using Levenshtein distance to tolerate small typos.
5. Sort tools by descending score.

This keeps responsive client‑side filtering without extra dependencies.

### Why keywords matter

The `keywords` array on each tool (and the central `popularKeywords`) drive discoverability. Chips pull from `popularKeywords`. Matching covers name, tagline, pros/cons, categories, tags, and keywords, but keywords often provide the best recall for user phrasing.

## Styling

- Tailwind v4 via `@import "tailwindcss";` in `globals.css`.
- No custom CSS; all styling is done with utility classes in JSX.
- Light/dark color tokens use Tailwind neutral/blue/green ranges.

## Client vs Server Components

- Files with `'use client'` at the top run on the client and can use React hooks/state.
- Other components are Server Components by default.
- Finder, SearchBar, PopularChips are client components due to interactivity.

## Extending the app

- Add a tool: edit `src/config/tools.ts` and append a new `ToolItem`.
- Improve search: tweak weights in `src/lib/search.ts`, or add fields (e.g., `features: string[]`) and include them in `scoreTool`.
- Add facets/filters: introduce a controlled set of categories/tags and UI controls to filter before scoring, or post‑filter scored results by selected facets.
- Persist query in URL: sync `query` state with `?q=` via `useSearchParams` and `useRouter` from `next/navigation`.
- Server data: if you decide to fetch data from an API, convert `tools.ts` to a data‑fetching function in a Server Component, or add a route handler under `src/app/api/*`.

## Common tasks

- Run dev server:
  - `pnpm dev` (Next may auto‑choose a free port if 3000 is busy; you can pass `-p 3000`).
- Build:
  - `pnpm build`
- Lint:
  - `pnpm lint` (if configured)

## Troubleshooting

- Dev server picked a different port: another app is using 3000. Stop it or run `pnpm dev -p 3000`.
- “useState can only be used in Client Components”: ensure the file starts with `'use client'`.
- No results for a chip: make sure the dataset includes matching keywords for that term (we added background removal tools and keywords to cover that case).

## What to read next

- Next.js App Router: routing, layouts, and Server/Client Components.
- Tailwind CSS utilities and dark mode.
- Basic search techniques (tokenization, normalization, fuzzy edit distance) used here.

If you want, we can add diagrams (component tree/data flow) or inline code comments where you need more detail.
