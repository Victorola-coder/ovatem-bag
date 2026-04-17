import Link from "next/link";
import { Button, Image } from "@/app/components/ui";

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

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/#collections">
                <Button variant="primary">View collections</Button>
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/[0.04]"
                aria-label="Contact Ovatem"
              >
                Enquire
              </Link>
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
            <div className="overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.02]">
              <div className="aspect-[4/5] w-full bg-[#0a3d31]">
                <div className="flex h-full flex-col justify-between p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/images/logo.svg"
                        alt="Ovatem logo"
                        width={40}
                        height={40}
                        className="rounded-md opacity-95"
                      />
                      <div className="leading-tight">
                        <p className="text-xs font-medium uppercase tracking-wider text-white/80">Ovatem</p>
                        <p className="text-[11px] text-white/45">Est. Nigeria</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">Lookbook</p>
                    <p className="mt-3 text-sm leading-relaxed text-white/55">
                      Place your hero product shot here — soft light, neutral backdrop, one strong focal bag.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-[11px] text-white/35">
              Replace this block with photography when ready.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
