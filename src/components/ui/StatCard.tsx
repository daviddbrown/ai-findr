"use client";
import { useEffect, useRef, useState } from "react";

function CountUpNumber({ end, suffix = "", duration = 1200, startDelayMs = 0, className }: { end: number; suffix?: string; duration?: number; startDelayMs?: number; className?: string }) {
  const [val, setVal] = useState(0);
  const rafRef = useRef<number | null>(null);
  const toRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVal(end);
      return;
    }
    const kickoff = () => {
      let start: number | null = null;
      const step = (ts: number) => {
        if (start === null) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        setVal(Math.floor(progress * end));
        if (progress < 1) rafRef.current = requestAnimationFrame(step);
      };
      rafRef.current = requestAnimationFrame(step);
    };
    if (startDelayMs > 0) {
      toRef.current = setTimeout(kickoff, startDelayMs);
    } else {
      kickoff();
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (toRef.current) clearTimeout(toRef.current);
    };
  }, [end, duration, startDelayMs]);

  return <span className={className}>{val.toLocaleString()}{suffix}</span>;
}

export function StatCard({ count, suffix = "", number, label, accent = "#36BAA2", startDelayMs = 0 }: { count?: number; suffix?: string; number?: string; label: string; accent?: string; startDelayMs?: number }) {
  return (
    <div className="text-center border rounded-2xl px-5 py-6 bg-white/70 dark:bg-neutral-900/50 border-neutral-200 dark:border-neutral-800 backdrop-blur">
      <div className="text-3xl sm:text-4xl font-extrabold" style={{ color: accent }}>
        {typeof count === "number" ? <CountUpNumber end={count} suffix={suffix} startDelayMs={startDelayMs} /> : number}
      </div>
      <div className="mt-1 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">{label}</div>
    </div>
  );
}

export default StatCard;
