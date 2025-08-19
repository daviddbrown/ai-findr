import type { ToolItem } from "@/types/tools";

const normalize = (s: string) => s.normalize("NFKC").toLowerCase();

const tokenize = (s: string) =>
  normalize(s)
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

// Classic Levenshtein distance
function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  const m = a.length,
    n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;
  const dp = new Array(n + 1).fill(0);
  for (let j = 0; j <= n; j++) dp[j] = j;
  for (let i = 1; i <= m; i++) {
    let prev = i - 1;
    dp[0] = i;
    for (let j = 1; j <= n; j++) {
      const tmp = dp[j];
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[j] = Math.min(dp[j] + 1, dp[j - 1] + 1, prev + cost);
      prev = tmp;
    }
  }
  return dp[n];
}

function fuzzyMatch(token: string, word: string): boolean {
  if (!token || !word) return false;
  if (word.includes(token)) return true; // substring
  const dist = levenshtein(token, word);
  const len = Math.max(token.length, word.length);
  // Allow small typos relative to length
  if (len <= 3) return dist === 0; // too short: exact only
  if (len <= 5) return dist <= 1;
  if (len <= 8) return dist <= 2;
  return dist <= 3;
}

function fieldScore(text: string | string[], queryTokens: string[], weight: number): number {
  if (weight <= 0) return 0;
  const chunks = Array.isArray(text) ? text : [text];
  let score = 0;
  for (const chunk of chunks) {
    const norm = normalize(chunk);
    // exact includes for the whole query tokens joined
    for (const qt of queryTokens) {
      if (!qt) continue;
      if (norm.includes(qt)) score += weight; // exact/substring match per token
      else {
        // token-level fuzzy: compare against words of the field
        const words = tokenize(norm);
        if (words.some((w) => fuzzyMatch(qt, w))) score += weight * 0.6;
      }
    }
  }
  return score;
}

export function scoreTool(tool: ToolItem, query: string): number {
  const q = normalize(query).trim();
  if (!q) return 0;
  const tokens = tokenize(q);
  if (tokens.length === 0) return 0;

  let score = 0;
  // Weights: name > tagline/categories > keywords/tags > pros/cons
  score += fieldScore(tool.name, tokens, 5);
  score += fieldScore(tool.tagline, tokens, 3);
  score += fieldScore(tool.categories ?? [], tokens, 3);
  score += fieldScore(tool.keywords ?? [], tokens, 2);
  score += fieldScore(tool.tags ?? [], tokens, 2);
  score += fieldScore(tool.prosCons.pros, tokens, 1);
  score += fieldScore(tool.prosCons.cons, tokens, 0.5);

  // Bonus for full-string include across a combined haystack
  const hay = normalize([
    tool.name,
    tool.tagline,
    (tool.keywords ?? []).join(" "),
    (tool.categories ?? []).join(" "),
    (tool.tags ?? []).join(" "),
    tool.prosCons.pros.join(" "),
    tool.prosCons.cons.join(" "),
  ].join(" "));
  if (hay.includes(q)) score += 4;

  return score;
}
