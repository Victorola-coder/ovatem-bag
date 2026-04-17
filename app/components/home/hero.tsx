"use client";

import Link from "next/link";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { Button, Image } from "@/app/components/ui";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-brand-seaNymph blur-3xl" />
        <div className="absolute top-16 -right-24 h-96 w-96 rounded-full bg-brand-aquaHaze blur-3xl" />
        <div className="absolute bottom-[-120px] left-1/3 h-96 w-96 rounded-full bg-brand-cascade blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-14 md:py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <LazyMotion features={domAnimation}>
            <m.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-6"
            >
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Ovatem Quality Bag
              </p>

              <h1 className="text-balance text-4xl font-semibold text-white md:text-5xl">
                Crafting Excellence.
                <span className="block text-white/80">Every Style. Every Story.</span>
              </h1>

              <p className="max-w-xl text-pretty text-sm leading-relaxed text-white/75 md:text-base">
                Premium, high-quality stylish bags and thoughtfully curated souvenirs
                designed to elevate every occasion—crafted with care, finished with
                intention.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="/#collections">
                  <Button variant="primary">Explore Collections</Button>
                </Link>
                <Link href="/#contact" className="inline-flex" aria-label="Contact Ovatem">
                  <Button variant="secondary">Make an Order</Button>
                </Link>
              </div>

              <div className="grid max-w-xl grid-cols-3 gap-3 pt-2 text-white/80">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-lg font-semibold text-white">Premium</p>
                  <p className="text-xs text-white/70">Finishing & details</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-lg font-semibold text-white">Custom</p>
                  <p className="text-xs text-white/70">Souvenirs & gifting</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-lg font-semibold text-white">Trusted</p>
                  <p className="text-xs text-white/70">Warm experience</p>
                </div>
              </div>
            </m.div>
          </LazyMotion>

          <LazyMotion features={domAnimation}>
            <m.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[40px] bg-white/5 blur-xl" />
              <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/logo.svg"
                      alt="Ovatem logo"
                      width={44}
                      height={44}
                      className="rounded-xl bg-white/10 p-2"
                    />
                    <div>
                      <p className="text-sm font-semibold text-white">Ovatem</p>
                      <p className="text-xs text-white/70">Quality Bag</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-brand-aquaHaze px-3 py-1 text-xs font-medium text-brand-eden">
                    Handcrafted
                  </span>
                </div>

                <div className="mt-6 grid gap-4">
                  <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-5">
                    <p className="text-xs text-white/70">Signature palette</p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="h-8 w-8 rounded-full bg-primary" />
                      <span className="h-8 w-8 rounded-full bg-brand-seaNymph" />
                      <span className="h-8 w-8 rounded-full bg-brand-aquaHaze" />
                      <span className="h-8 w-8 rounded-full bg-brand-pewter" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                      <p className="text-xs text-white/70">Custom orders</p>
                      <p className="mt-2 text-sm font-semibold text-white">
                        Made for your moments
                      </p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                      <p className="text-xs text-white/70">Souvenirs</p>
                      <p className="mt-2 text-sm font-semibold text-white">
                        Memorable gifting
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-5 py-4">
                  <p className="text-sm font-medium text-white">
                    Ready to create something special?
                  </p>
                  <Link
                    href="/#contact"
                    className="text-sm text-white/80 underline underline-offset-4 hover:text-white"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </m.div>
          </LazyMotion>
        </div>
      </div>
    </section>
  );
}

