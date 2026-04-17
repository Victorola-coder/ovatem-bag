"use client";

import { Glow } from "@/app/components/global";
import { Button } from "@/app/components/ui";

type CollectionCard = {
  title: string;
  description: string;
  highlights: string[];
};

const COLLECTIONS: CollectionCard[] = [
  {
    title: "Handbags",
    description: "Elegant everyday pieces—made to elevate your look.",
    highlights: ["Premium finishing", "Clean silhouettes", "Gift-ready"],
  },
  {
    title: "Totes & Work Bags",
    description: "Roomy, structured, and built for daily movement.",
    highlights: ["Durable build", "Comfort handles", "Modern style"],
  },
  {
    title: "Souvenirs & Gifting",
    description: "Thoughtful, curated souvenirs that feel personal.",
    highlights: ["Custom branding", "Event-ready", "Warm experience"],
  },
  {
    title: "Custom Orders",
    description: "Bring your idea—Ovatem crafts it with intention.",
    highlights: ["Consultation", "Made-to-order", "Quality assured"],
  },
];

export function Collections() {
  return (
    <section id="collections" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Collections built for real life
          </h2>
          <p className="text-sm leading-relaxed text-white/75 md:text-base">
            From premium everyday bags to curated souvenirs—each piece is designed
            to feel intentional, polished, and memorable.
          </p>
        </div>

        <a href="/#contact">
          <Button variant="default">Request a Quote</Button>
        </a>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {COLLECTIONS.map((item) => (
          <Glow
            key={item.title}
            className="rounded-[32px] border border-white/10 bg-white/5 p-6 hover:bg-white/7"
          >
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-white/70">{item.description}</p>
            </div>

            <ul className="mt-5 grid gap-2 text-sm text-white/80">
              {item.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {h}
                </li>
              ))}
            </ul>
          </Glow>
        ))}
      </div>
    </section>
  );
}

