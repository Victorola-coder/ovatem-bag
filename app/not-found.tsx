import Link from "next/link";
import { CtaLink } from "@/app/components/ui";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-background px-6 py-20 text-center">
      <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/40">Error 404</p>
      <h1 className="mt-4 text-3xl font-light tracking-tight text-white md:text-4xl">Page not found</h1>
      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/55">
        That URL doesn&apos;t exist or was moved. Head back home or open the shop.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <CtaLink href="/" variant="primary">
          Back to home
        </CtaLink>
        <CtaLink href="/shop" variant="secondary">
          Shop
        </CtaLink>
      </div>
      <p className="mt-10 text-xs text-white/35">
        Need something bespoke?{" "}
        <Link href="/#contact" className="text-brand-aquaHaze hover:text-white">
          Contact
        </Link>
      </p>
    </div>
  );
}
