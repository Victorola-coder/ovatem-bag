import { CtaLink, Surface } from "@/app/components/ui";

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
    title: "Totes & work bags",
    description: "Roomy, structured, and built for daily movement.",
    highlights: ["Durable build", "Comfort handles", "Modern style"],
  },
  {
    title: "Souvenirs & gifting",
    description: "Thoughtful, curated souvenirs that feel personal.",
    highlights: ["Custom branding", "Event-ready", "Warm experience"],
  },
  {
    title: "Custom orders",
    description: "Bring your idea—Ovatem crafts it with intention.",
    highlights: ["Consultation", "Made-to-order", "Quality assured"],
  },
];

export function Collections() {
  return (
    <section id="collections" className="border-b border-white/[0.06]">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl space-y-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/45">Collections</p>
            <h2 className="text-3xl font-light tracking-tight text-white md:text-4xl">Made for real life.</h2>
            <p className="text-[15px] leading-relaxed text-white/60 md:text-base">
              From everyday carry to event souvenirs—each line is intentional, quiet, and finished with care.
            </p>
          </div>

          <CtaLink href="/#contact" variant="primary">
            Request a quote
          </CtaLink>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2">
          {COLLECTIONS.map((item) => (
            <Surface key={item.title} className="p-6 md:p-8">
              <h3 className="text-lg font-medium text-white/95">{item.title}</h3>
              <p className="mt-2 text-sm text-white/55">{item.description}</p>
              <ul className="mt-6 space-y-2 border-t border-white/[0.06] pt-6 text-sm text-white/65">
                {item.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="text-white/30">—</span>
                    {h}
                  </li>
                ))}
              </ul>
            </Surface>
          ))}
        </div>
      </div>
    </section>
  );
}
