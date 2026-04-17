import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/app/components/shop/product-detail";
import { getProductBySlug, productImageSrc, SHOP_PRODUCTS } from "@/app/lib/shop-products";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SHOP_PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product | Ovatem" };
  const first = product.images[0];
  return {
    title: `${product.title} | Ovatem`,
    description: product.summary,
    openGraph: first
      ? {
          images: [{ url: productImageSrc(first), alt: `${product.title} — Ovatem` }],
        }
      : undefined,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
