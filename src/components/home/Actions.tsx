import { ButtonLink } from "@/components/ui/ButtonLink";
import type { LinkItem } from "@/types/links";

export function Actions({ links }: { links: LinkItem[] }) {
  if (links.length === 0) return null;

  const [primary, ...rest] = links;

  return (
    <div className="flex gap-4 items-center flex-col sm:flex-row">
      <ButtonLink
        href={primary.href}
        label={primary.label}
        iconSrc={primary.iconSrc}
        iconAlt={primary.iconAlt}
        target={primary.external ? "_blank" : undefined}
        rel={primary.external ? "noopener noreferrer" : undefined}
        variant="primary"
      />
      {rest.map((link) => (
        <ButtonLink
          key={link.href}
          href={link.href}
          label={link.label}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          variant="outline"
        />
      ))}
    </div>
  );
}
