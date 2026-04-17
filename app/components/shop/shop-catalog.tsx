"use client";

import NextImage from "next/image";
import { Heart } from "lucide-react";
import { CtaLink, Surface } from "@/app/components/ui";
import { useWishlist } from "@/app/hooks/use-wishlist";
import { productImageSrc, type ShopProduct } from "@/app/lib/shop-products";

export function ShopCatalog({ products }: { products: ShopProduct[] }) {
  const { toggle, has } = useWishlist();

  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-12">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => {
          const cover = p.images[0];
          return (
            <Surface key={p.slug} className="flex flex-col overflow-hidden p-0">
              <div className="relative aspect-[4/3] bg-white/[0.03]">
                {cover ? (
                  <NextImage
                    src={productImageSrc(cover)}
                    alt={`${p.title} — Ovatem`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-xs text-white/45">
                    Add photos in{" "}
                    <code className="mx-1 rounded bg-white/10 px-1 py-0.5 text-white/70">public/images/products/</code>
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => toggle(p.slug)}
                  className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-background/90 text-white backdrop-blur transition-colors hover:bg-white/10"
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
                    <h2 className="text-lg font-medium text-white/95">{p.title}</h2>
                    <p className="mt-1 text-sm text-white/55">{p.summary}</p>
                  </div>
                  <p className="shrink-0 text-sm font-medium text-brand-aquaHaze">{p.priceLabel}</p>
                </div>
                <ul className="mt-4 grid gap-2 text-sm text-white/65">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="text-white/30">—</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <CtaLink href={`/shop/${p.slug}`} variant="primary" size="sm">
                    View details
                  </CtaLink>
                  <CtaLink href="/#contact" variant="secondary" size="sm">
                    Enquire
                  </CtaLink>
                </div>
              </div>
            </Surface>
          );
        })}
      </div>

      <Surface className="mt-12 p-6 md:p-8">
        <p className="text-sm font-medium text-white/90">Checkout (coming)</p>
        <p className="mt-2 text-sm leading-relaxed text-white/60">
          Secure payments, shipping options, and order confirmation will connect here when you enable online sales.
          Until then, enquiries go through WhatsApp and the contact form.
        </p>
      </Surface>
    </div>
  );
}
