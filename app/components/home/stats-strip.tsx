import { TRUST_STATS } from "@/app/content/brand";

export function StatsStrip() {
  return (
    <section aria-label="Ovatem impact and experience" className="border-b border-black/[0.06] bg-[#eff6f5]">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-14 md:grid-cols-3 md:gap-10 md:py-16">
        {TRUST_STATS.map((s) => (
          <div key={s.label}>
            <p className="text-3xl font-light tabular-nums tracking-tight text-[#0c4c3c] md:text-4xl">{s.value}</p>
            <p className="mt-2 text-sm text-[#0c4c3c]/60">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
