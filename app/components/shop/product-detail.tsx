"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { CtaLink, Surface } from "@/app/components/ui";
import { useWishlist } from "@/app/hooks/use-wishlist";
import type { ShopProduct } from "@/app/lib/shop-products";

export function ProductDetail({ product }: { product: ShopProduct }) {
  const { toggle, has } = useWishlist();

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
      <Link href="/shop" className="text-sm text-white/70 hover:text-white">
        ← Back to shop preview
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <Surface className="overflow-hidden p-0">
          <div className="relative aspect-square bg-white/[0.03]">
            <div className="absolute inset-0 flex items-center justify-center p-8 text-center text-sm text-white/45">
              Product gallery placeholder — add images to{" "}
              <code className="mx-1 rounded bg-white/10 px-1.5 py-0.5">public/images/products/{product.slug}</code>
            </div>
          </div>
        </Surface>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-semibold text-white md:text-4xl">{product.title}</h1>
            <p className="mt-3 text-sm leading-relaxed text-white/75 md:text-base">{product.summary}</p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <p className="text-2xl font-semibold text-brand-aquaHaze">{product.priceLabel}</p>
            <button
              type="button"
              onClick={() => toggle(product.slug)}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
            >
              <Heart
                className={`h-4 w-4 ${has(product.slug) ? "fill-red-400 text-red-400" : ""}`}
                aria-hidden
              />
              {has(product.slug) ? "Saved to wishlist" : "Add to wishlist"}
            </button>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm font-semibold text-white">Details</p>
            <ul className="mt-3 grid gap-2 text-sm text-white/75">
              {product.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="text-primary-100">•</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <CtaLink href="/#contact" variant="primary">
              Request this style
            </CtaLink>
            <CtaLink href="/shop" variant="secondary">
              Browse more
            </CtaLink>
          </div>

          <p className="text-xs text-white/55">
            Secure checkout, shipping selection, and order confirmation will appear here when e-commerce is enabled.
          </p>
        </div>
      </div>
    </div>
  );
}
