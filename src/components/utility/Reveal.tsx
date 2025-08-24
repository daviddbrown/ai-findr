"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  /** Tailwind translate-y-* class to use while hidden */
  distanceClass?: string;
};

export function Reveal({ children, className, delayMs = 0, distanceClass = "translate-y-3" }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setTimeout(() => setVisible(true), delayMs);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delayMs]);

  return (
    <div
      ref={ref}
      className={
        (className ?? "") +
  " transition-all duration-400 ease-out will-change-transform will-change-opacity " +
  (visible ? " opacity-100 translate-y-0" : ` opacity-0 ${distanceClass}`)
      }
    >
      {children}
    </div>
  );
}
