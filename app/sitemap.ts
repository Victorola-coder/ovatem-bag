import type { MetadataRoute } from "next";
import { JOURNAL_POSTS } from "@/app/content/journal-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ovatem.ng";

  const staticPaths = [
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

  const blogPaths = JOURNAL_POSTS.map((p) => `/blog/${p.slug}`);

  const all = [...staticPaths, ...blogPaths];

  return all.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "" ? 1 : path.startsWith("/blog/") ? 0.65 : 0.7,
  }));
}
