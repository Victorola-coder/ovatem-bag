"use client";

import { Glow } from "@/app/components/global";

const STEPS = [
  {
    title: "Consultation",
    description:
      "We understand your needs—style, purpose, and the story you want to tell.",
  },
  {
    title: "Design & Materials",
    description:
      "We propose the best structure, finishes, and premium details for durability.",
  },
  {
    title: "Crafting",
    description:
      "Careful construction with quality checks—so the final piece feels premium.",
  },
  {
    title: "Delivery",
    description:
      "Neat packaging, gifting-ready presentation, and a warm customer experience.",
  },
];

export function Craft() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Craftsmanship you can feel
          </h2>
          <p className="text-sm leading-relaxed text-white/75 md:text-base">
            Ovatem blends versatility, reliability, and innovation to deliver
            products that don’t just meet expectations—they exceed them.
          </p>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-white">Mission</p>
            <p className="mt-2 text-sm text-white/75">
              To craft premium bags and meaningful souvenirs that elevate every
              occasion.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          {STEPS.map((s, idx) => (
            <Glow
              key={s.title}
              className="rounded-[32px] border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-aquaHaze text-brand-eden font-semibold">
                  {idx + 1}
                </div>
                <div className="space-y-1">
                  <p className="text-base font-semibold text-white">{s.title}</p>
                  <p className="text-sm text-white/70">{s.description}</p>
                </div>
              </div>
            </Glow>
          ))}
        </div>
      </div>
    </section>
  );
}

