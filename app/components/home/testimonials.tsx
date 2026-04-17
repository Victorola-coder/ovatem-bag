"use client";

import { Glow } from "@/app/components/global";

type Testimonial = {
  quote: string;
  name: string;
  context: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The finishing was premium and the bag felt even better in person. Clean, classy, and worth it.",
    name: "Customer",
    context: "Handbag order",
  },
  {
    quote:
      "Our event souvenirs were neat, thoughtful, and delivered on time. The presentation was top-tier.",
    name: "Client",
    context: "Wedding souvenirs",
  },
  {
    quote:
      "Great communication, excellent quality, and the final piece matched exactly what I imagined.",
    name: "Customer",
    context: "Custom order",
  },
  {
    quote:
      "I finally understood cutting and assembly the way it should be done — patient teaching and honest feedback.",
    name: "Student",
    context: "Bag-making training",
  },
  {
    quote:
      "Birthday favors for my guests looked expensive but were planned within my budget. Everyone asked where they were from.",
    name: "Client",
    context: "Birthday event souvenirs",
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Reviews &amp; stories
        </h2>
        <p className="max-w-2xl text-sm text-white/75 md:text-base">
          Customers, event clients, and students — consistency in quality, teaching, and the way people feel when they
          unbox or graduate.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <Glow
            key={t.quote}
            className="rounded-[32px] border border-white/10 bg-white/5 p-6"
          >
            <p className="text-sm leading-relaxed text-white/80">“{t.quote}”</p>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-white/70">{t.context}</p>
              </div>
              <span className="h-9 w-9 rounded-2xl bg-primary/20" />
            </div>
          </Glow>
        ))}
      </div>
    </section>
  );
}

