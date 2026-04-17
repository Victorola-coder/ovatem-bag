"use client";

import { useState } from "react";
import Link from "next/link";
import NextImage from "next/image";
import clsx from "clsx";
import { Heart } from "lucide-react";
import { CtaLink, Surface } from "@/app/components/ui";
import { useWishlist } from "@/app/hooks/use-wishlist";
import { productImageSrc, type ShopProduct } from "@/app/lib/shop-products";

export function ProductDetail({ product }: { product: ShopProduct }) {
  const { toggle, has } = useWishlist();
  const [activeIndex, setActiveIndex] = useState(0);
  const images = product.images;
  const mainSrc = images[activeIndex] ? productImageSrc(images[activeIndex]) : null;

  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 pt-8 md:px-10 md:pt-10 lg:px-12">
      <Link href="/shop" className="text-sm text-brand-aquaHaze hover:text-white">
        ← Back to shop
      </Link>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="space-y-4">
          <Surface className="overflow-hidden p-0">
            <div className="relative aspect-square bg-white/[0.03]">
              {mainSrc ? (
                <NextImage
                  src={mainSrc}
                  alt={`${product.title} — photo ${activeIndex + 1} — Ovatem`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center p-8 text-center text-sm text-white/45">
                  Add images to <code className="mx-1 rounded bg-white/10 px-1.5 py-0.5">public/images/products/</code>
                </div>
              )}
            </div>
          </Surface>

          {images.length > 1 ? (
            <div className="grid grid-cols-4 gap-2 sm:grid-cols-4">
              {images.map((file, i) => (
                <button
                  key={file}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={clsx(
                    "relative aspect-square overflow-hidden rounded-md border-2 transition-colors",
                    activeIndex === i ? "border-white/80" : "border-transparent opacity-80 hover:opacity-100"
                  )}
                  aria-label={`Show image ${i + 1}`}
                >
                  <NextImage
                    src={productImageSrc(file)}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-light tracking-tight text-white md:text-4xl">{product.title}</h1>
            <p className="mt-4 text-[15px] leading-relaxed text-white/65 md:text-base">{product.summary}</p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <p className="text-2xl font-light text-brand-aquaHaze">{product.priceLabel}</p>
            <button
              type="button"
              onClick={() => toggle(product.slug)}
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/[0.04] px-4 py-2 text-sm text-white/90 hover:bg-white/[0.08]"
            >
              <Heart
                className={`h-4 w-4 ${has(product.slug) ? "fill-red-400 text-red-400" : ""}`}
                aria-hidden
              />
              {has(product.slug) ? "Saved" : "Wishlist"}
            </button>
          </div>

          <Surface className="p-5 md:p-6">
            <p className="text-sm font-medium text-white/90">Details</p>
            <ul className="mt-4 space-y-2 text-sm text-white/65">
              {product.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="text-white/35">—</span>
                  {h}
                </li>
              ))}
            </ul>
          </Surface>

          <div className="flex flex-wrap items-center gap-3">
            <CtaLink href="/#contact" variant="primary">
              Request this style
            </CtaLink>
            <CtaLink href="/shop" variant="secondary">
              All products
            </CtaLink>
          </div>

          <p className="text-xs text-white/45">
            Checkout and shipping options will appear here when e-commerce is enabled.
          </p>
        </div>
      </div>
    </div>
  );
}
