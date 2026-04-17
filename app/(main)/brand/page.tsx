import type { Metadata } from "next";
import {
  BRAND_TAGLINE,
  BRAND_VOICE,
  ECOMMERCE_PREP,
  IMAGE_ALT_RULE,
  LOGO_USAGE,
  PHOTOGRAPHY_GUIDELINES,
  SEO_KEYWORD_THEMES,
} from "@/app/content/brand";

export const metadata: Metadata = {
  title: "Brand & SEO reference | Ovatem",
  description:
    "Ovatem brand voice, logo usage, photography, SEO keywords, and e-commerce preparation — internal reference for consistent marketing.",
};

export default function BrandReferencePage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 md:py-16">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">Brand foundations</p>
      <h1 className="mt-2 text-3xl font-semibold text-white md:text-4xl">Reference for copy &amp; design</h1>
      <p className="mt-4 text-sm leading-relaxed text-white/75">
        Use this page to keep the site, social captions, and product descriptions aligned. Update{" "}
        <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-white/90">app/content/brand.ts</code> as the
        brand evolves.
      </p>

      <section className="mt-12 space-y-4">
        <h2 className="text-xl font-semibold text-white">Tagline lockup</h2>
        <p className="text-sm text-white/80">
          Primary line: <em className="text-white">{BRAND_TAGLINE}</em>
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-white/75">
          <li>Minimum logo size: {LOGO_USAGE.minSizePx}px on the short edge for digital use.</li>
          <li>{LOGO_USAGE.clearSpace}</li>
          <li>{LOGO_USAGE.goldUsage}</li>
          <li>{LOGO_USAGE.backgrounds}</li>
        </ul>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="text-xl font-semibold text-white">Voice &amp; tone</h2>
        <p className="text-sm text-white/80">{BRAND_VOICE.summary}</p>
        <p className="text-sm font-medium text-white/90">Lean into</p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-white/75">
          {BRAND_VOICE.traits.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <p className="text-sm font-medium text-white/90">Avoid</p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-white/75">
          {BRAND_VOICE.avoid.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="text-xl font-semibold text-white">Photography</h2>
        <p className="text-sm text-white/80">{PHOTOGRAPHY_GUIDELINES.summary}</p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-white/75">
          {PHOTOGRAPHY_GUIDELINES.rules.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="text-xl font-semibold text-white">SEO keyword themes</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-white/75">
          {SEO_KEYWORD_THEMES.map((k) => (
            <li key={k}>{k}</li>
          ))}
        </ul>
        <p className="text-sm text-white/70">
          <span className="font-medium text-white/85">Image alt rule:</span> {IMAGE_ALT_RULE}
        </p>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="text-xl font-semibold text-white">Future e-commerce</h2>
        <p className="text-sm text-white/75">{ECOMMERCE_PREP.checkoutPlan}</p>
        <p className="text-sm text-white/75">{ECOMMERCE_PREP.shippingDraft}</p>
        <p className="text-sm text-white/75">{ECOMMERCE_PREP.returnsDraft}</p>
      </section>
    </div>
  );
}
