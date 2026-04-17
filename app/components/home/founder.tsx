"use client";

import { useState } from "react";
import { UserRound } from "lucide-react";
import { Surface } from "@/app/components/ui";
import { FOUNDER } from "@/app/content/brand";

export function Founder() {
  const [imgFailed, setImgFailed] = useState(false);
  const src = FOUNDER.imageSrc;
  const showImage = !imgFailed;

  return (
    <section id="founder" className="border-b border-white/[0.06]">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="grid items-start gap-14 md:grid-cols-2 md:gap-16">
          <div className="order-2 space-y-5 md:order-1">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/45">Founder</p>
            <h2 className="text-3xl font-light tracking-tight text-white md:text-4xl">The person behind Ovatem.</h2>
            <p className="text-sm font-medium text-white/85">{FOUNDER.name}</p>
            {FOUNDER.bio.map((p, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-white/60 md:text-base">
                {p}
              </p>
            ))}
          </div>

          <Surface className="order-1 overflow-hidden md:order-2">
            <div className="relative aspect-[4/5] w-full bg-[#0a3d31]">
              {showImage ? (
                // eslint-disable-next-line @next/next/no-img-element -- graceful fallback when asset is missing
                <img
                  src={src}
                  alt="Portrait of the Ovatem founder"
                  className="h-full w-full object-cover"
                  onError={() => setImgFailed(true)}
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
                  <UserRound className="h-14 w-14 text-white/25" aria-hidden />
                  <p className="text-sm text-white/45">Add <code className="text-white/60">public/images/founder.jpg</code></p>
                </div>
              )}
            </div>
          </Surface>
        </div>
      </div>
    </section>
  );
}
