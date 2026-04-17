import type { Metadata } from "next";
import { PageShell } from "@/app/components/global";
import { GallerySlideshow } from "@/app/components/gallery/gallery-slideshow";
import { getGalleryItems } from "@/app/lib/shop-products";

export const metadata: Metadata = {
  title: "Gallery | Ovatem",
  description:
    "Browse Ovatem bags and products — full-screen lookbook slideshow. Handmade bags in Nigeria, premium finishing.",
};

export default function GalleryPage() {
  const items = getGalleryItems();

  return (
    <>
      <PageShell
        eyebrow="Lookbook"
        title="Gallery"
        description="Every photo from our shop catalogue in one place. Click thumbnails or use the arrows — keyboard ← → works too."
      />
      <GallerySlideshow items={items} />
    </>
  );
}
