"use client";

import { m, LazyMotion, domAnimation } from "framer-motion";
import { Glow } from "@/app/components/global";
import { BRAND_MISSION, BRAND_VISION, BRAND_VOICE } from "@/app/content/brand";

export function MissionVision() {
  return (
    <section id="mission" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
      <LazyMotion features={domAnimation}>
        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl space-y-3"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">
            Mission &amp; vision
          </p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Built on purpose, made to last
          </h2>
          <p className="text-sm leading-relaxed text-white/75 md:text-base">
            {BRAND_VOICE.summary}
          </p>
        </m.div>
      </LazyMotion>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Glow className="rounded-[32px] border border-white/10 bg-white/5 p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary-100">
            Mission
          </p>
          <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
            {BRAND_MISSION}
          </p>
        </Glow>
        <Glow className="rounded-[32px] border border-white/10 bg-white/5 p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary-100">
            Vision
          </p>
          <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
            {BRAND_VISION}
          </p>
        </Glow>
      </div>
    </section>
  );
}
