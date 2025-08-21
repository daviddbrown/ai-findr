type Props = {
  name: string;
  size?: number; // px
};

function hashToHue(input: string): number {
  let h = 0;
  for (let i = 0; i < input.length; i++) h = (h << 5) - h + input.charCodeAt(i);
  return Math.abs(h) % 360;
}

export function Avatar({ name, size = 28 }: Props) {
  const hue = hashToHue(name);
  const bg = `hsl(${hue} 70% 40%)`;
  const w = `${size}px`;
  const initial = (name || "?").trim().charAt(0).toUpperCase();
  return (
    <div
      className="rounded-md flex items-center justify-center border border-neutral-200 dark:border-neutral-800 text-white select-none"
      style={{ width: w, height: w, backgroundColor: bg }}
      aria-hidden
    >
      <span style={{ fontSize: Math.max(10, Math.floor(size * 0.45)) }}>{initial}</span>
    </div>
  );
}
