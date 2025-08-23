"use client";

import { useState } from "react";
import { Hero } from "@/components/hero/Hero";
import { Finder } from "@/components/finder/Finder";

export function HomeClient() {
  const [query, setQuery] = useState("");
  return (
    <>
      <Hero query={query} setQuery={setQuery} />
      <div className="w-full max-w-4xl mx-auto">
        <Finder query={query} onQueryChange={setQuery} compact />
      </div>
    </>
  );
}
