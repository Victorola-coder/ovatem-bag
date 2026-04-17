export type ShopProduct = {
  slug: string;
  title: string;
  summary: string;
  priceLabel: string;
  highlights: string[];
  /** Filenames in `public/images/products/` */
  images: string[];
};

/** Full URL for a product image file. */
export function productImageSrc(filename: string): string {
  return `/images/products/${filename}`;
}

export const SHOP_PRODUCTS: ShopProduct[] = [
  {
    slug: "signature-handbag",
    title: "Signature handbag",
    summary: "Everyday elegance — structured silhouette, premium finishing.",
    priceLabel: "From ₦—",
    highlights: ["Hand-finished edges", "Interior pockets", "Dust bag included"],
    images: [
      "1746450523774.jpg",
      "1756920522873.jpg",
      "1767527190802.jpg",
      "1767527195135.jpg",
    ],
  },
  {
    slug: "work-tote",
    title: "Work tote",
    summary: "Room for laptop and daily essentials without losing shape.",
    priceLabel: "From ₦—",
    highlights: ["Reinforced handles", "Lightweight lining", "Neutral palette"],
    images: [
      "1767527205106.jpg",
      "1767527209782.jpg",
      "1772474334783.jpg",
      "1772606541961.jpg",
    ],
  },
  {
    slug: "event-souvenir-set",
    title: "Event souvenir set",
    summary: "Curated for weddings and birthdays — branding and packaging on request.",
    priceLabel: "Quote on request",
    highlights: ["Minimum quantities", "Custom tags", "Timeline agreed upfront"],
    images: [
      "1773041954582.jpg",
      "1773212125663.jpg",
      "1773262406114.jpg",
      "1773262498049.jpg",
    ],
  },
];

export function getProductBySlug(slug: string): ShopProduct | undefined {
  return SHOP_PRODUCTS.find((p) => p.slug === slug);
}

/** One slide in the all-products gallery (flattened from `SHOP_PRODUCTS`). */
export type GalleryItem = {
  filename: string;
  productSlug: string;
  productTitle: string;
};

/** Every product image, in order, for the `/gallery` slideshow. */
export function getGalleryItems(): GalleryItem[] {
  const items: GalleryItem[] = [];
  for (const p of SHOP_PRODUCTS) {
    for (const filename of p.images) {
      items.push({
        filename,
        productSlug: p.slug,
        productTitle: p.title,
      });
    }
  }
  return items;
}
