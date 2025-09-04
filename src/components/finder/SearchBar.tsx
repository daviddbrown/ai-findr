"use client";

export function SearchBar({
  value,
  onChange,
  placeholder = "I want to create images, write content, edit videos...",
  showButton,
  onSubmit,
  buttonLabel = "Search",
}: {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  showButton?: boolean;
  onSubmit?: () => void;
  buttonLabel?: string;
}) {
  return (
  <div className="w-full max-w-2xl mx-auto relative">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        onKeyDown={(e) => {
          if (e.key === "Enter" && onSubmit) onSubmit();
        }}
        className={
      "w-full h-12 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-900/80 backdrop-blur outline-none ring-2 ring-transparent focus:ring-[color:var(--accent)] text-sm shadow-[0_1px_0_rgba(0,0,0,0.04)] px-4 " +
          (showButton ? "pr-28" : "")
        }
      />
      {showButton ? (
        <button
          type="button"
          onClick={onSubmit}
      className="absolute right-1 top-1 h-10 px-4 rounded-lg text-white font-medium cursor-pointer shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
          style={{ backgroundColor: "var(--accent)" }}
        >
          {buttonLabel}
        </button>
      ) : null}
    </div>
  );
}
