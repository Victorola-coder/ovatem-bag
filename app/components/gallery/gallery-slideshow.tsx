"use client";

import { useCallback, useEffect, useState } from "react";
import NextImage from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CtaLink } from "@/app/components/ui";
import { productImageSrc, type GalleryItem } from "@/app/lib/shop-products";

type Props = {
  items: GalleryItem[];
};

export function GallerySlideshow({ items }: Props) {
  const len = items.length;
  const [index, setIndex] = useState(0);

  const go = useCallback(
    (delta: number) => {
      if (len === 0) return;
      setIndex((i) => (i + delta + len) % len);
    },
    [len]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  if (len === 0) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-16 text-center text-sm text-white/50 md:px-10 lg:px-12">
        Add images under <code className="text-white/70">public/images/products/</code> and list them on each product in{" "}
        <code className="text-white/70">app/lib/shop-products.ts</code>.
      </div>
    );
  }

  const current = items[index];

  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-12">
      <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02]">
        <div className="relative aspect-[4/3] w-full md:aspect-[16/10] lg:aspect-[2/1]">
          <NextImage
            key={current.filename}
            src={productImageSrc(current.filename)}
            alt={`${current.productTitle} — Ovatem lookbook ${index + 1} of ${len}`}
            fill
            className="object-contain"
            sizes="(max-width: 1280px) 100vw, 1200px"
            priority={index === 0}
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent pt-24 pb-6 md:pt-32">
            <div className="pointer-events-auto mx-auto max-w-2xl px-4 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">{current.productTitle}</p>
              <p className="mt-1 text-sm text-white/80">
                {index + 1} / {len}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-background/70 text-white backdrop-blur transition-colors hover:bg-background/90 md:left-5"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-background/70 text-white backdrop-blur transition-colors hover:bg-background/90 md:right-5"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
        {items.map((item, i) => (
          <button
            key={`${item.filename}-${i}`}
            type="button"
            onClick={() => setIndex(i)}
            className={`relative h-14 w-14 overflow-hidden rounded-md border-2 transition-colors sm:h-16 sm:w-16 ${
              i === index ? "border-white/80" : "border-transparent opacity-60 hover:opacity-100"
            }`}
            aria-label={`Go to image ${i + 1}`}
            aria-current={i === index}
          >
            <NextImage
              src={productImageSrc(item.filename)}
              alt=""
              fill
              className="object-cover"
              sizes="64px"
            />
          </button>
        ))}
      </div>

      <p className="mt-4 text-center text-xs text-white/40">Use arrow keys ← → to move between photos.</p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <CtaLink href={`/shop/${current.productSlug}`} variant="primary">
          View {current.productTitle}
        </CtaLink>
        <CtaLink href="/shop" variant="secondary">
          All products
        </CtaLink>
        <Link href="/#contact" className="text-sm text-brand-aquaHaze hover:text-white">
          Enquire
        </Link>
      </div>
    </div>
  );
}
