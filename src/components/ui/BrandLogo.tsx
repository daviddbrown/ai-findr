import { Avatar } from "@/components/ui/Avatar";
import { siOpenai, siGooglegemini, siAnthropic, siPerplexity, siNotion, siGithub, siCanva } from "simple-icons";

type Props = {
  name: string;
  size?: number; // px
  // Optional explicit slug to fetch from simple-icons
  slug?: string;
  // If a direct logo URL is provided, we just render the img
  src?: string;
};

// Map common tool ids/names to simple-icons slugs
const SLUGS: Record<string, string> = {
  chatgpt: "openai",
  "google gemini": "googlegemini",
  gemini: "googlegemini",
  claude: "anthropic",
  perplexity: "perplexityai",
  notion: "notion",
  "github copilot": "github",
  canva: "canva",
  "canva magic studio": "canva",
  "dall·e": "openai",
};

type SimpleIcon = {
  title: string;
  slug: string;
  hex: string;
  path: string;
  // viewBox exists at runtime though not typed in package types
  viewBox?: string;
};

const ICONS: Record<string, SimpleIcon> = {
  openai: siOpenai,
  googlegemini: siGooglegemini,
  anthropic: siAnthropic,
  perplexityai: siPerplexity,
  notion: siNotion,
  github: siGithub,
  canva: siCanva,
};

function getIcon(slug?: string, name?: string): SimpleIcon | undefined {
  const key = slug || (name ? SLUGS[name.toLowerCase()] : undefined);
  if (!key) return undefined;
  return ICONS[key];
}

export function BrandLogo({ name, size = 28, slug, src }: Props) {
  const icon = getIcon(slug, name);
  if (!icon) {
    if (src) {
      return (
        <div
          className="h-7 w-7 rounded-md bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 overflow-hidden flex items-center justify-center"
          aria-hidden
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="" className="h-full w-full object-contain" />
        </div>
      );
    }
    return <Avatar name={name} size={size} />;
  }

  const viewBox = icon.viewBox || "0 0 24 24";
  const path = icon.path;
  const hex = icon.hex ? `#${icon.hex}` : "currentColor";
  const px = `${size}px`;

  return (
    <div className="rounded-md bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center" style={{ width: px, height: px }} aria-hidden>
      <svg width={Math.floor(size * 0.78)} height={Math.floor(size * 0.78)} viewBox={viewBox} role="img" aria-hidden>
        <path d={path} fill={hex} />
      </svg>
    </div>
  );
}
