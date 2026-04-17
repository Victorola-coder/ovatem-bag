/**
 * Ovatem brand foundations — copy, voice, and reference rules.
 * Update names, stats, and image paths as your brand grows.
 */

export const BRAND_TAGLINE = "Crafting Excellence. Every Style. Every Story.";

/** Brand voice: use for site copy, captions, and product descriptions. */
export const BRAND_VOICE = {
  summary:
    "Calm, confident, elegant, and professional — warm luxury, never loud.",
  traits: [
    "Warm and approachable, never stiff or corporate-cold",
    "Inspirational about craft and heritage; practical about care and timelines",
    "Soft luxury: refined restraint, gold and accent used sparingly as highlights",
  ],
  avoid: [
    "Overly technical jargon unless speaking to students in training context",
    "Hype, slang, or aggressive sales language",
    "Busy backgrounds or visual noise behind logo or hero imagery",
  ],
} as const;

export const BRAND_MISSION =
  "To craft premium bags and meaningful souvenirs that tell lasting stories.";

export const BRAND_VISION =
  "To become a leading African heritage-inspired bag brand recognized globally.";

/** Logo & tagline lockup — design and marketing reference. */
export const LOGO_USAGE = {
  minSizePx: 24,
  clearSpace: "Use clear space around the mark at least equal to the height of the “O” in Ovatem.",
  goldUsage:
    "Reserve gold / accent for highlights only — CTAs, fine lines, small details — not full backgrounds.",
  backgrounds:
    "Prefer deep green, soft neutrals, or subtle gradients. Avoid loud patterns, neon, or cluttered photography behind the logo.",
} as const;

export const PHOTOGRAPHY_GUIDELINES = {
  summary: "Warm luxury: natural, consistent, and craft-forward.",
  rules: [
    "Neutral or soft backgrounds; avoid visual competition with the product",
    "Soft, even lighting; show true leather texture without harsh glare",
    "Mix lifestyle shots (model carrying the bag) with close-up craftsmanship details",
    "Keep editing warm and cohesive — same tone across the site and social",
  ],
} as const;

/** SEO focus keywords — align page titles, H1s, and image alt text with these themes. */
export const SEO_KEYWORD_THEMES = [
  "Handmade bags in Nigeria",
  "Premium leather bags Oye-Ekiti",
  "Bag making training in Nigeria",
  "Souvenir branding services",
  "Custom event souvenirs Nigeria",
] as const;

/** Image alt text pattern for editors: [Product type] — [material or detail] — Ovatem. */
export const IMAGE_ALT_RULE =
  "Describe the product and key detail in plain language; include “Ovatem” where natural. Avoid empty alt on product photos.";

/** Trust & credibility — replace placeholders with real numbers and names. */
export const TRUST_STATS = [
  { label: "Bags crafted", value: "100+" },
  { label: "Students trained", value: "50+" },
  { label: "Intensive training program", value: "2-week" },
] as const;

export const FOUNDER = {
  name: "Founder, Ovatem",
  /** Portrait in `public/images/` (e.g. face.png). */
  imageSrc: "/images/face.png",
  bio: [
    "I’m the face behind Ovatem — every piece reflects a commitment to premium finishing and honest craft. When you order or train with us, you work directly with that standard.",
    "Replace this paragraph with your story: how you started, what you stand for, and why clients and students trust Ovatem.",
  ],
} as const;

export const TRAINING_PROGRAM = {
  title: "Trained by Ovatem",
  subtitle:
    "Hands-on bag-making training for people who want real skill — from fundamentals to finishing.",
  highlights: [
    "Structured curriculum with supervised practice",
    "Certificate on completion (preview available on request)",
    "Small groups so feedback stays personal",
  ],
  duration: "2-week intensive (schedule confirmed at enrollment)",
} as const;

/** Published articles live in `app/content/journal-posts.ts` (Journal routes under `/blog`). */

/** Future e-commerce — policy and UX placeholders until checkout goes live. */
export const ECOMMERCE_PREP = {
  checkoutPlan:
    "Planned: secure checkout (card / transfer), order confirmation by email, and WhatsApp support for bespoke items.",
  shippingDraft:
    "Shipping options and lead times will be confirmed at checkout. Custom and souvenir orders may follow a separate production schedule.",
  returnsDraft:
    "Returns and exchanges will be published before sales go live — custom-made items are typically final sale; defects addressed case by case.",
} as const;
