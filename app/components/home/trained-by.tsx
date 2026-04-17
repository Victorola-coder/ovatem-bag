"use client";

import { m, LazyMotion, domAnimation } from "framer-motion";
import Link from "next/link";
import { Award, GraduationCap, Sparkles } from "lucide-react";
import { Glow } from "@/app/components/global";
import { Button } from "@/app/components/ui";
import { TRAINING_PROGRAM } from "@/app/content/brand";

export function TrainedBy() {
  return (
    <section id="trained" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">
              {TRAINING_PROGRAM.title}
            </p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Real skills, supervised practice
            </h2>
            <p className="text-sm leading-relaxed text-white/75 md:text-base">
              {TRAINING_PROGRAM.subtitle}
            </p>
            <ul className="grid gap-3 pt-2">
              {TRAINING_PROGRAM.highlights.map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm text-white/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {line}
                </li>
              ))}
            </ul>
            <p className="text-xs text-white/55">{TRAINING_PROGRAM.duration}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="/#contact">
                <Button variant="primary">Ask about training</Button>
              </a>
              <Link href="/training-policy">
                <Button variant="secondary">Training policy</Button>
              </Link>
            </div>
          </m.div>
        </LazyMotion>

        <Glow className="rounded-[32px] border border-white/10 bg-white/5 p-6">
          <p className="text-sm font-semibold text-white">Certificate preview</p>
          <p className="mt-2 text-xs text-white/60">
            Drop your certificate design as <code className="rounded bg-white/10 px-1 py-0.5">public/images/certificate-preview.jpg</code>{" "}
            or share the final artwork — we’ll display it here.
          </p>
          <div className="mt-6 flex aspect-[3/2] items-center justify-center rounded-2xl border border-dashed border-white/20 bg-gradient-to-br from-white/10 to-transparent">
            <div className="flex flex-col items-center gap-2 text-center text-white/50">
              <GraduationCap className="h-10 w-10" aria-hidden />
              <span className="text-xs">Training certificate preview</span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
              <Sparkles className="mx-auto h-5 w-5 text-brand-aquaHaze" aria-hidden />
              <p className="mt-2 text-[10px] text-white/60">Modules</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
              <Award className="mx-auto h-5 w-5 text-brand-aquaHaze" aria-hidden />
              <p className="mt-2 text-[10px] text-white/60">Assessment</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
              <GraduationCap className="mx-auto h-5 w-5 text-brand-aquaHaze" aria-hidden />
              <p className="mt-2 text-[10px] text-white/60">Certificate</p>
            </div>
          </div>
        </Glow>
      </div>
    </section>
  );
}
