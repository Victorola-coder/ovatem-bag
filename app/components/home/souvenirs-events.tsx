import Link from "next/link";
import { Gift, Heart, PartyPopper } from "lucide-react";
import { Button, Surface } from "@/app/components/ui";

const EVENTS = [
  {
    title: "Weddings",
    description: "Coordinated favors and keepsakes—names, dates, and packaging aligned to your day.",
    icon: Heart,
  },
  {
    title: "Birthdays & milestones",
    description: "Small batches that match your theme without feeling generic.",
    icon: PartyPopper,
  },
  {
    title: "Corporate & branded gifts",
    description: "Logo-ready pieces for teams, launches, and client appreciation.",
    icon: Gift,
  },
];

export function SouvenirsEvents() {
  return (
    <section id="souvenirs" className="border-b border-white/[0.06]">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="max-w-xl space-y-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/45">Event souvenirs</p>
          <h2 className="text-3xl font-light tracking-tight text-white md:text-4xl">Orders for celebrations.</h2>
          <p className="text-[15px] leading-relaxed text-white/60 md:text-base">
            Share your date, quantity, and direction—we’ll propose options and timelines before production.
          </p>
        </div>

        <div className="mt-14 grid gap-3 md:grid-cols-3">
          {EVENTS.map((item) => (
            <Surface key={item.title} className="flex flex-col p-6 md:p-7">
              <item.icon className="h-5 w-5 text-white/35" strokeWidth={1.25} aria-hidden />
              <h3 className="mt-5 text-base font-medium text-white/95">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">{item.description}</p>
              <div className="mt-8 aspect-[4/3] rounded-md border border-dashed border-white/[0.12] bg-white/[0.02]">
                <div className="flex h-full items-center justify-center p-4 text-center text-[11px] text-white/35">
                  Photo placeholder
                </div>
              </div>
            </Surface>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <a href="/#contact">
            <Button variant="primary">Request a quote</Button>
          </a>
          <Link href="/shop">
            <Button variant="secondary">Shop preview</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
