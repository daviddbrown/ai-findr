#!/usr/bin/env node
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { resolve, dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const toolsPath = resolve(__dirname, "../src/config/tools.ts");

if (!existsSync(toolsPath)) {
  console.error("tools.ts not found");
  process.exit(1);
}

const src = readFileSync(toolsPath, "utf8");
const catSet = new Set();
const re = /categories:\s*\[([^\]]*)\]/g;
let m;
while ((m = re.exec(src))) {
  const inner = m[1];
  inner.split(",").forEach((x) => {
    const t = x.replace(/[\n\r]/g, " ").replace(/['"`]/g, "").trim();
    if (!t) return;
    // Drop trailing comments if any
    const clean = t.split("//")[0].trim();
    if (clean) catSet.add(clean);
  });
}
const arr = [...catSet].sort((a,b)=>a.localeCompare(b));
console.log(`[ai-findr] Unique categories: ${arr.length}`);
console.log(arr.join(", "));
