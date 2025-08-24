import { NextRequest } from "next/server";

export const runtime = "edge";

function svg(title: string) {
  const safe = title.slice(0, 80);
  return `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#111827"/>
        <stop offset="100%" stop-color="#0B1220"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#g)"/>
    <rect x="60" y="60" width="1080" height="510" rx="24" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />
    <text x="120" y="230" fill="#A7F3D0" font-family="Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif" font-size="46" font-weight="700">aiFindr</text>
    <text x="120" y="310" fill="#FFFFFF" font-family="Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif" font-size="64" font-weight="800">${safe}</text>
    <text x="120" y="380" fill="#D1D5DB" font-family="Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif" font-size="28" font-weight="500">Discover, compare, and choose AI tools</text>
  </svg>`;
}

export function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Best AI Tools";
  return new Response(svg(title), {
    headers: {
      "content-type": "image/svg+xml; charset=utf-8",
      "cache-control": "public, max-age=31536000, immutable",
    },
  });
}
