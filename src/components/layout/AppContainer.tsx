import type { PropsWithChildren } from "react";

export function AppContainer({ children }: PropsWithChildren) {
  return (
  <div className="min-h-screen flex flex-col items-center p-8 sm:p-20 gap-10 bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
      {children}
    </div>
  );
}
