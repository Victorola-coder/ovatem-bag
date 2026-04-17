import { Surface } from "@/app/components/ui";
import { BRAND_MISSION, BRAND_VISION, BRAND_VOICE } from "@/app/content/brand";

export function MissionVision() {
  return (
    <section id="mission" className="border-b border-white/[0.06]">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="max-w-xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/45">Mission &amp; vision</p>
          <h2 className="mt-5 text-3xl font-light tracking-tight text-white md:text-4xl">Clarity in every stitch.</h2>
          <p className="mt-6 text-[15px] leading-relaxed text-white/60 md:text-base">{BRAND_VOICE.summary}</p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <Surface className="p-8 md:p-10">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">Mission</p>
            <p className="mt-4 text-lg font-light leading-relaxed text-white/95 md:text-xl">{BRAND_MISSION}</p>
          </Surface>
          <Surface className="p-8 md:p-10">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">Vision</p>
            <p className="mt-4 text-lg font-light leading-relaxed text-white/95 md:text-xl">{BRAND_VISION}</p>
          </Surface>
        </div>
      </div>
    </section>
  );
}
