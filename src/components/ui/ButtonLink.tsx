import Image from "next/image";
import Link from "next/link";
import type { ComponentProps } from "react";

export type ButtonLinkProps = {
  href: string;
  label: string;
  iconSrc?: string;
  iconAlt?: string;
  variant?: "primary" | "outline";
} & Omit<ComponentProps<typeof Link>, "href">;

const base =
  "rounded-full border border-solid transition-colors flex items-center justify-center font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5";

const variants: Record<string, string> = {
  primary:
    "border-transparent bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 gap-2 hover:bg-neutral-800 dark:hover:bg-neutral-200",
  outline:
    "border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:border-transparent",
};

export function ButtonLink({
  href,
  label,
  iconSrc,
  iconAlt,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]}`} {...props}>
      {iconSrc ? (
        <Image className="dark:invert" src={iconSrc} alt={iconAlt ?? ""} width={20} height={20} />
      ) : null}
      {label}
    </Link>
  );
}
