"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { Glow } from "@/app/components/global";
import { Button } from "@/app/components/ui";
import { useWishlist } from "@/app/hooks/use-wishlist";
import type { ShopProduct } from "@/app/lib/shop-products";

export function ShopCatalog({ products }: { products: ShopProduct[] }) {
  const { toggle, has } = useWishlist();

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
      <div className="max-w-2xl space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">Shop preview</p>
        <h1 className="text-3xl font-semibold text-white md:text-4xl">Products &amp; placeholders</h1>
        <p className="text-sm leading-relaxed text-white/75 md:text-base">
          Pricing is shown as placeholders until e-commerce checkout is connected. Use the heart to try the wishlist
          concept — it saves locally in your browser.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <Glow
            key={p.slug}
            className="group flex flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/5"
          >
            <div className="relative aspect-[4/3] bg-gradient-to-br from-white/15 to-transparent">
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-xs text-white/45">
                Add product photo —{" "}
                <code className="mx-1 rounded bg-white/10 px-1 py-0.5 text-white/70">{p.slug}</code>
              </div>
              <button
                type="button"
                onClick={() => toggle(p.slug)}
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-background/80 text-white backdrop-blur transition-colors hover:bg-white/10"
                aria-label={has(p.slug) ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart
                  className={`h-5 w-5 ${has(p.slug) ? "fill-red-400 text-red-400" : "text-white/90"}`}
                  aria-hidden
                />
              </button>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold text-white">{p.title}</h2>
                  <p className="mt-1 text-sm text-white/65">{p.summary}</p>
                </div>
                <p className="shrink-0 text-sm font-medium text-brand-aquaHaze">{p.priceLabel}</p>
              </div>
              <ul className="mt-4 grid gap-2 text-sm text-white/75">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={`/shop/${p.slug}`}>
                  <Button variant="primary" size="sm">
                    View details
                  </Button>
                </Link>
                <Link href="/#contact">
                  <Button variant="secondary" size="sm">
                    Enquire
                  </Button>
                </Link>
              </div>
            </div>
          </Glow>
        ))}
      </div>

      <div className="mt-12 rounded-[28px] border border-dashed border-white/20 bg-white/[0.03] p-6 text-sm text-white/70">
        <p className="font-medium text-white">Future checkout</p>
        <p className="mt-2 leading-relaxed">
          Secure payments, shipping options, and order emails will plug in here when you enable online sales. Until then,
          enquiries route through WhatsApp and the contact form.
        </p>
      </div>
    </div>
  );
}
