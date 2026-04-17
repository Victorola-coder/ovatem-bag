export type ShopProduct = {
  slug: string;
  title: string;
  summary: string;
  priceLabel: string;
  highlights: string[];
};

export const SHOP_PRODUCTS: ShopProduct[] = [
  {
    slug: "signature-handbag",
    title: "Signature handbag",
    summary: "Everyday elegance — structured silhouette, premium finishing.",
    priceLabel: "From ₦—",
    highlights: ["Hand-finished edges", "Interior pockets", "Dust bag included"],
  },
  {
    slug: "work-tote",
    title: "Work tote",
    summary: "Room for laptop and daily essentials without losing shape.",
    priceLabel: "From ₦—",
    highlights: ["Reinforced handles", "Lightweight lining", "Neutral palette"],
  },
  {
    slug: "event-souvenir-set",
    title: "Event souvenir set",
    summary: "Curated for weddings and birthdays — branding and packaging on request.",
    priceLabel: "Quote on request",
    highlights: ["Minimum quantities", "Custom tags", "Timeline agreed upfront"],
  },
];

export function getProductBySlug(slug: string): ShopProduct | undefined {
  return SHOP_PRODUCTS.find((p) => p.slug === slug);
}
