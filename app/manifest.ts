import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ovatem Quality Bag",
    short_name: "Ovatem",
    description:
      "Crafting Excellence. Every Style. Every Story. Premium bags and curated souvenirs.",
    start_url: "/",
    display: "standalone",
    background_color: "#eff6f5",
    theme_color: "#0c4c3c",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
