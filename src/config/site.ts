import type { LinkItem } from "@/types/links";

export const site = {
  name: "AI Findr",
  description: "Discover insights faster with AI",
  url: "https://example.com",
};

export const headerLinks: LinkItem[] = [
  { href: "/", label: "Home" },
  { href: "https://github.com/daviddbrown/ai-findr", label: "GitHub", external: true },
];

export const footerLinks: LinkItem[] = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "mailto:hello@example.com", label: "Contact", external: true },
];
