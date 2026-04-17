"use client";

import Link from "next/link";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { Gift, Heart, PartyPopper } from "lucide-react";
import { Glow } from "@/app/components/global";
import { Button } from "@/app/components/ui";

const EVENTS = [
  {
    title: "Weddings",
    description: "Coordinated favors and keepsakes guests remember — names, dates, and packaging tailored to your day.",
    icon: Heart,
  },
  {
    title: "Birthdays & milestones",
    description: "Thoughtful bags and small batches that match your theme without feeling generic.",
    icon: PartyPopper,
  },
  {
    title: "Corporate & branded gifts",
    description: "Logo-ready pieces and consistent quality for teams, launches, and client appreciation.",
    icon: Gift,
  },
];

export function SouvenirsEvents() {
  return (
    <section id="souvenirs" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
      <LazyMotion features={domAnimation}>
        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl space-y-3"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">
            Souvenirs for events
          </p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Order souvenirs that feel personal
          </h2>
          <p className="text-sm leading-relaxed text-white/75 md:text-base">
            Weddings, birthdays, and celebrations — share your date, quantity, and style direction. We’ll propose options,
            show sample layouts, and align on production time.
          </p>
        </m.div>
      </LazyMotion>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {EVENTS.map((item) => (
          <Glow
            key={item.title}
            className="flex flex-col rounded-[28px] border border-white/10 bg-white/5 p-6"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <item.icon className="h-6 w-6 text-brand-aquaHaze" aria-hidden />
            </div>
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">{item.description}</p>
            <div className="mt-6 aspect-[4/3] w-full rounded-2xl border border-dashed border-white/20 bg-white/[0.04]">
              <div className="flex h-full items-center justify-center p-4 text-center text-xs text-white/50">
                Add event souvenir photos to <span className="mx-1 font-mono text-white/70">public/images/</span>
              </div>
            </div>
          </Glow>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <a href="/#contact">
          <Button variant="primary">Request a souvenir quote</Button>
        </a>
        <Link href="/shop">
          <Button variant="secondary">Preview product layout</Button>
        </Link>
      </div>
    </section>
  );
}
