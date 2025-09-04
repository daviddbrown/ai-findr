import type { PropsWithChildren } from "react";

export function AppContainer({ children }: PropsWithChildren) {
  return (
  <div className="min-h-screen flex flex-col items-center gap-10 bg-app text-neutral-900 dark:text-neutral-100 py-12 sm:py-16">
      {children}
    </div>
  );
}
