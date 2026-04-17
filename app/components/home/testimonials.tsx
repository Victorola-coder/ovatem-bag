import { Surface } from "@/app/components/ui";

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
    <section id="testimonials" className="border-b border-white/[0.06]">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="max-w-xl space-y-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/45">Reviews</p>
          <h2 className="text-3xl font-light tracking-tight text-white md:text-4xl">What people say.</h2>
          <p className="text-[15px] leading-relaxed text-white/60 md:text-base">
            Customers, hosts, and students—consistency in quality and care.
          </p>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Surface key={`${t.name}-${i}`} className="flex flex-col p-6 md:p-7">
              <p className="text-sm leading-relaxed text-white/70">“{t.quote}”</p>
              <div className="mt-8 border-t border-white/[0.06] pt-5">
                <p className="text-sm font-medium text-white/90">{t.name}</p>
                <p className="mt-0.5 text-xs text-white/45">{t.context}</p>
              </div>
            </Surface>
          ))}
        </div>
      </div>
    </section>
  );
}
