import Link from "next/link";
import type { ComponentProps } from "react";
import clsx from "clsx";
import { ctaButtonStyles, type CtaSize, type CtaVariant } from "./button";

export type CtaLinkProps = ComponentProps<typeof Link> & {
  variant?: CtaVariant;
  size?: CtaSize;
};

/**
 * Next.js `<Link>` styled like `<Button>` — valid HTML (no nested interactive elements).
 * Use for all in-page / internal marketing CTAs.
 */
export function CtaLink({
  href,
  variant = "primary",
  size = "default",
  className,
  children,
  ...props
}: CtaLinkProps) {
  return (
    <Link href={href} className={clsx(ctaButtonStyles(variant, size), className)} {...props}>
      {children}
    </Link>
  );
}
