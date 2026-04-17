"use client";

import { Glow } from "@/app/components/global";
import { Button, Input } from "@/app/components/ui";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Let’s create something memorable
          </h2>
          <p className="text-sm leading-relaxed text-white/75 md:text-base">
            Share what you need—bag type, quantity (if souvenirs), and your ideal
            deadline. We’ll respond with options and pricing.
          </p>

          <div className="grid gap-3">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">Newsletter (coming soon)</p>
              <p className="mt-2 text-sm text-white/75">
                Leave your email in the form when we wire it — drops on new collections, classes, and souvenir slots.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">Delivery</p>
              <p className="mt-2 text-sm text-white/75">
                Timelines depend on complexity and volume—custom orders are
                confirmed after consultation.
              </p>
            </div>
          </div>
        </div>

        <Glow className="rounded-[36px] border border-white/10 bg-white/5 p-6">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid gap-4"
            aria-label="Contact form"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <Input name="firstName" placeholder="First name" />
              <Input name="lastName" placeholder="Last name" />
            </div>
            <Input name="phone" placeholder="Phone / WhatsApp number" />
            <Input
              name="subject"
              placeholder="What do you need? (e.g. Handbag, wedding souvenirs, training)"
            />
            <textarea
              name="message"
              placeholder="Tell us your preferred style, quantity, colors, and timeline..."
              className="w-full min-h-[140px] rounded-[24px] p-4 bg-background-soft text-brand-eden placeholder:text-brand-viridianGreen font-aloe text-[16px] resize-none focus:outline-none focus:ring-0"
            />

            <div className="flex flex-wrap gap-3 pt-1">
              <Button variant="primary" type="submit">
                Send request
              </Button>
              <a href="#" className="inline-flex">
                <Button variant="secondary" type="button">
                  WhatsApp
                </Button>
              </a>
            </div>

            <p className="text-xs text-white/60">
              This form is a UI stub for now. We’ll wire it to email/WhatsApp when
              you provide the preferred contact route.
            </p>
          </form>
        </Glow>
      </div>
    </section>
  );
}

