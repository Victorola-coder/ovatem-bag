"use client";

import { useState } from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { UserRound } from "lucide-react";
import { Glow } from "@/app/components/global";
import { FOUNDER } from "@/app/content/brand";

export function Founder() {
  const [imgFailed, setImgFailed] = useState(false);
  const src = FOUNDER.imageSrc;
  const showImage = !imgFailed;

  return (
    <section id="founder" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="order-2 space-y-4 md:order-1"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">
              Face of the brand
            </p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Meet the maker
            </h2>
            <p className="text-sm font-medium text-white/90">{FOUNDER.name}</p>
            {FOUNDER.bio.map((p, i) => (
              <p key={i} className="text-sm leading-relaxed text-white/75 md:text-base">
                {p}
              </p>
            ))}
          </m.div>
        </LazyMotion>

        <Glow className="order-1 overflow-hidden rounded-[36px] border border-white/10 md:order-2">
          <div className="relative aspect-[4/5] w-full bg-gradient-to-br from-white/10 to-transparent">
            {showImage ? (
              // eslint-disable-next-line @next/next/no-img-element -- graceful fallback when asset is missing
              <img
                src={src!}
                alt="Portrait of the Ovatem founder"
                className="h-full w-full object-cover"
                onError={() => setImgFailed(true)}
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
                <UserRound className="h-16 w-16 text-white/40" aria-hidden />
                <div className="space-y-2">
                  <p className="text-sm font-medium text-white">Your portrait goes here</p>
                  <p className="text-xs text-white/60">
                    Add <code className="rounded bg-white/10 px-1.5 py-0.5 text-white/80">public/images/founder.jpg</code>{" "}
                    — we’ll show it automatically.
                  </p>
                </div>
              </div>
            )}
          </div>
        </Glow>
      </div>
    </section>
  );
}
