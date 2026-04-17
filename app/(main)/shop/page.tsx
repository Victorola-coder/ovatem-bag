import type { Metadata } from "next";
import { PageShell } from "@/app/components/global";
import { ShopCatalog } from "@/app/components/shop/shop-catalog";
import { SHOP_PRODUCTS } from "@/app/lib/shop-products";

export const metadata: Metadata = {
  title: "Shop | Ovatem",
  description:
    "Browse Ovatem bags and souvenir concepts — pricing on enquiry until checkout goes live. Handmade bags in Nigeria, premium finishing.",
};

export default function ShopPage() {
  return (
    <>
      <PageShell
        eyebrow="Shop"
        title="Products"
        description="Pricing shown as guides or on request. Save favourites with the heart (stored in your browser). For bespoke work, use Enquire or WhatsApp — we’ll confirm details and timelines."
      />
      <ShopCatalog products={SHOP_PRODUCTS} />
    </>
  );
}
