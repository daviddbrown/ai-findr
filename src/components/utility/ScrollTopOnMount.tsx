"use client";
import { useEffect } from "react";

export function ScrollTopOnMount() {
  useEffect(() => {
    try {
      if (typeof window !== "undefined" && !window.location.hash) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    } catch {}
  // run only once on mount
  }, []);
  return null;
}
