"use client";

export function SearchBar({
  value,
  onChange,
  placeholder = "I want to create images, write content, edit videos...",
}: {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-12 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-900/80 backdrop-blur px-4 outline-none ring-2 ring-transparent focus:ring-blue-300 text-sm shadow-sm"
      />
    </div>
  );
}
