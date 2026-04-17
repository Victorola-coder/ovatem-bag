import { Surface } from "@/app/components/ui";

const STEPS = [
  {
    title: "Consultation",
    description:
      "We understand your needs—style, purpose, and the story you want to tell.",
  },
  {
    title: "Design & materials",
    description:
      "Structure, finishes, and details chosen for durability and feel.",
  },
  {
    title: "Crafting",
    description:
      "Careful construction with checks along the way—so the piece feels premium.",
  },
  {
    title: "Delivery",
    description:
      "Neat presentation and clear communication through handover.",
  },
];

export function Craft() {
  return (
    <section id="craft" className="border-b border-white/[0.06]">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="grid gap-16 md:grid-cols-2 md:items-start">
          <div className="space-y-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/45">Process</p>
            <h2 className="text-3xl font-light tracking-tight text-white md:text-4xl">Craft you can trust.</h2>
            <p className="text-[15px] leading-relaxed text-white/60 md:text-base">
              We combine versatility and care so the final piece doesn’t just meet expectations—it holds up over time.
            </p>

            <Surface className="mt-8 p-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">In one line</p>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Premium bags and meaningful souvenirs that elevate every occasion.
              </p>
            </Surface>
          </div>

          <ol className="space-y-3">
            {STEPS.map((s, idx) => (
              <li key={s.title}>
                <Surface className="p-5 md:p-6">
                  <div className="flex gap-5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/[0.1] text-xs font-medium text-white/80">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-medium text-white/95">{s.title}</p>
                      <p className="mt-1 text-sm text-white/55">{s.description}</p>
                    </div>
                  </div>
                </Surface>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
