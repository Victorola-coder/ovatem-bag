import NextImage from "next/image";
import { CtaLink, Image } from "@/app/components/ui";

const PILLARS = [
  { label: "Premium finishing", detail: "Materials & construction" },
  { label: "Custom & souvenirs", detail: "Events & gifting" },
  { label: "Training", detail: "Hands-on skill" },
];

export function Hero() {
  return (
    <section className="border-b border-white/[0.06]">
      <div className="mx-auto max-w-5xl px-6 pb-20 pt-16 md:pb-28 md:pt-20">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/50">
              Ovatem · Quality bags & souvenirs
            </p>
            <h1 className="mt-6 text-balance font-light text-[2.5rem] leading-[1.08] tracking-tight text-white md:text-6xl md:leading-[1.05]">
              Crafted with calm confidence.
            </h1>
            <p className="mt-8 max-w-md text-pretty text-[15px] leading-relaxed text-white/65 md:text-base">
              Premium bags and event souvenirs for people who notice the details—made in Nigeria with a warm, precise
              touch.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <CtaLink href="/#collections" variant="primary">
                View collections
              </CtaLink>
              <CtaLink href="/#contact" variant="secondary" aria-label="Contact Ovatem">
                Enquire
              </CtaLink>
            </div>

            <dl className="mt-16 grid gap-6 border-t border-white/[0.06] pt-10 sm:grid-cols-3">
              {PILLARS.map((item) => (
                <div key={item.label}>
                  <dt className="text-[13px] font-medium text-white/90">{item.label}</dt>
                  <dd className="mt-1 text-xs text-white/45">{item.detail}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-lg border border-white/[0.08] bg-[#0a3d31]">
              <div className="relative aspect-[4/5] w-full">
                <NextImage
                  src="/images/face.png"
                  alt="Ovatem — founder and craft"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 420px"
                  priority
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c4c3c]/90 via-[#0c4c3c]/20 to-transparent"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <Image
                      src="/images/logo.jpg"
                      alt="Ovatem logo"
                      width={40}
                      height={40}
                      className="rounded-md object-contain opacity-95"
                    />
                    <div className="leading-tight">
                      <p className="text-xs font-medium uppercase tracking-wider text-white/90">Ovatem</p>
                      <p className="text-[11px] text-white/55">Est. Nigeria</p>
                    </div>
                  </div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">Lookbook</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    Handmade quality, personal service — bags and souvenirs for life&apos;s occasions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
