"use client";

import { TRUST_STATS } from "@/app/content/brand";

export function StatsStrip() {
  return (
    <section
      aria-label="Ovatem impact and experience"
      className="border-y border-white/10 bg-white/[0.03]"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-3 md:py-12">
        {TRUST_STATS.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <p className="text-3xl font-semibold text-white md:text-4xl">{s.value}</p>
            <p className="mt-2 text-sm text-white/70">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
