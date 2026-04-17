import type { Metadata } from "next";
import { PageContent, PageShell } from "@/app/components/global";
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
    "Ovatem brand voice, logo usage, photography, SEO keywords, and e-commerce preparation — reference for consistent marketing.",
};

export default function BrandReferencePage() {
  return (
    <>
      <PageShell
        eyebrow="Brand foundations"
        title="Reference for copy &amp; design"
        description="Use this page to keep the site, social captions, and product descriptions aligned. Update app/content/brand.ts as the brand evolves."
      />

      <PageContent narrow className="pb-20 pt-0">
        <section className="space-y-4 border-b border-white/[0.06] pb-12">
          <h2 className="text-lg font-medium text-white/95">Tagline lockup</h2>
          <p className="text-sm text-white/70">
            Primary line: <em className="text-white/90 not-italic">{BRAND_TAGLINE}</em>
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-white/65">
            <li>Minimum logo size: {LOGO_USAGE.minSizePx}px on the short edge for digital use.</li>
            <li>{LOGO_USAGE.clearSpace}</li>
            <li>{LOGO_USAGE.goldUsage}</li>
            <li>{LOGO_USAGE.backgrounds}</li>
          </ul>
        </section>

        <section className="space-y-4 border-b border-white/[0.06] py-12">
          <h2 className="text-lg font-medium text-white/95">Voice &amp; tone</h2>
          <p className="text-sm text-white/70">{BRAND_VOICE.summary}</p>
          <p className="text-sm font-medium text-white/80">Lean into</p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-white/65">
            {BRAND_VOICE.traits.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <p className="text-sm font-medium text-white/80">Avoid</p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-white/65">
            {BRAND_VOICE.avoid.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-4 border-b border-white/[0.06] py-12">
          <h2 className="text-lg font-medium text-white/95">Photography</h2>
          <p className="text-sm text-white/70">{PHOTOGRAPHY_GUIDELINES.summary}</p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-white/65">
            {PHOTOGRAPHY_GUIDELINES.rules.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-4 border-b border-white/[0.06] py-12">
          <h2 className="text-lg font-medium text-white/95">SEO keyword themes</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-white/65">
            {SEO_KEYWORD_THEMES.map((k) => (
              <li key={k}>{k}</li>
            ))}
          </ul>
          <p className="text-sm text-white/60">
            <span className="font-medium text-white/80">Image alt rule:</span> {IMAGE_ALT_RULE}
          </p>
        </section>

        <section className="space-y-4 pt-12">
          <h2 className="text-lg font-medium text-white/95">Future e-commerce</h2>
          <p className="text-sm text-white/65">{ECOMMERCE_PREP.checkoutPlan}</p>
          <p className="text-sm text-white/65">{ECOMMERCE_PREP.shippingDraft}</p>
          <p className="text-sm text-white/65">{ECOMMERCE_PREP.returnsDraft}</p>
        </section>
      </PageContent>
    </>
  );
}
