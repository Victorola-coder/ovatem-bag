import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ovatem.ng";
  const paths = [
    "",
    "/shop",
    "/shop/signature-handbag",
    "/shop/work-tote",
    "/shop/event-souvenir-set",
    "/blog",
    "/brand",
    "/privacy",
    "/terms",
    "/returns",
    "/training-policy",
  ];
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "" ? 1 : 0.7,
  }));
}
