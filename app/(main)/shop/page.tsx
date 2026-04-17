import type { Metadata } from "next";
import { ShopCatalog } from "@/app/components/shop/shop-catalog";
import { SHOP_PRODUCTS } from "@/app/lib/shop-products";

export const metadata: Metadata = {
  title: "Shop preview | Ovatem",
  description:
    "Browse Ovatem bags and souvenir concepts — pricing placeholders until checkout goes live. Handmade bags in Nigeria, premium finishing.",
};

export default function ShopPage() {
  return <ShopCatalog products={SHOP_PRODUCTS} />;
}
