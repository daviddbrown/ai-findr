import type { LinkItem } from "@/types/links";

export const site = {
  name: "aiFindr",
  description: "Discover, compare, and choose the right AI tools for your workflow.",
  url: "https://www.aifindr.io",
  social: {
  // TODO: set your real profiles to strengthen Organization schema signals
  twitter: "", // e.g. https://twitter.com/aifindr
  linkedin: "", // e.g. https://www.linkedin.com/company/aifindr
  },
};

export const headerLinks: LinkItem[] = [
  { href: "/", label: "Home" },
  { href: "https://github.com/daviddbrown/ai-findr", label: "GitHub", external: true },
];

export const footerLinks: LinkItem[] = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "mailto:aifindrdotio@gmail.com", label: "Contact", external: true },
];
