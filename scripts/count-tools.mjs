#!/usr/bin/env node
/**
 * Tiny build-time helper to count ToolItem entries.
 * Reads src/config/tools.ts and counts occurrences of lines like: id: "..."
 */
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { resolve, dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const toolsPath = resolve(__dirname, "../src/config/tools.ts");

function countTools(file) {
  const src = readFileSync(file, "utf8");
  const regex = /^\s*id:\s*['"][^'"\n]+['"]/gm;
  const matches = src.match(regex) || [];
  const idRegex = /^\s*id:\s*['"]([^'"\n]+)['"]/;
  const ids = new Set();
  for (const m of matches) {
    const mm = m.match(idRegex);
    if (mm && mm[1]) ids.add(mm[1]);
  }
  return { total: matches.length, unique: ids.size };
}

function countCategories(file) {
  const src = readFileSync(file, "utf8");
  const catSet = new Set();
  const re = /categories:\s*\[([^\]]*)\]/g;
  let m;
  while ((m = re.exec(src))) {
    const inner = m[1];
    inner.split(",").forEach((x) => {
      const t = x.replace(/[\n\r]/g, " ").replace(/['"`]/g, "").trim();
      if (!t) return;
      const clean = t.split("//")[0].trim();
      if (clean) catSet.add(clean);
    });
  }
  return { unique: catSet.size };
}

try {
  if (!existsSync(toolsPath)) {
    console.warn(`[ai-findr] tools file not found at ${toolsPath}`);
    process.exit(0);
  }
  const { total, unique } = countTools(toolsPath);
  const same = total === unique;
  const msg = same
    ? `[ai-findr] Tools catalog: ${unique} tools`
    : `[ai-findr] Tools catalog: ${unique} unique tools (${total} entries found)`;
  console.log(`\x1b[36m${msg}\x1b[0m`);
  const { unique: cats } = countCategories(toolsPath);
  console.log(`\x1b[36m[ai-findr] Categories: ${cats}\x1b[0m`);
  if (!same) {
    console.warn("\x1b[33m[ai-findr] Warning: duplicate id entries detected.\x1b[0m");
  }
} catch (e) {
  console.error("[ai-findr] Failed to count tools:", e.message);
  process.exit(0);
}
