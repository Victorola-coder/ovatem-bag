"use client";

import { Button, CtaLink, Input, Surface } from "@/app/components/ui";
import { getWhatsAppUrl } from "@/app/constants/site";

export function Contact() {
  return (
    <section id="contact" className="border-b border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-start lg:gap-16">
          <div className="space-y-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/45">Contact</p>
            <h2 className="text-3xl font-light tracking-tight text-white md:text-4xl">Tell us what you need.</h2>
            <p className="text-[15px] leading-relaxed text-white/60 md:text-base">
              Bag type, souvenir quantity, event date, or training interest—we’ll reply with next steps.
            </p>

            <div className="grid gap-3 pt-2">
              <Surface className="p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-white/40">Newsletter</p>
                <p className="mt-2 text-sm text-white/55">Coming soon — leave your email in the form when connected.</p>
              </Surface>
              <Surface className="p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-white/40">Lead times</p>
                <p className="mt-2 text-sm text-white/55">Custom work is confirmed after consultation; timelines vary by scope.</p>
              </Surface>
            </div>
          </div>

          <Surface className="p-6 md:p-8">
            <form onSubmit={(e) => e.preventDefault()} className="grid gap-4" aria-label="Contact form">
              <div className="grid gap-4 md:grid-cols-2">
                <Input name="firstName" placeholder="First name" />
                <Input name="lastName" placeholder="Last name" />
              </div>
              <Input name="phone" placeholder="Phone / WhatsApp" />
              <Input name="subject" placeholder="Handbag, souvenirs, training…" />
              <textarea
                name="message"
                placeholder="Style, quantity, colors, deadline…"
                className="min-h-[132px] w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 text-[15px] text-white placeholder:text-white/35 focus:border-white/20 focus:outline-none"
              />

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Button variant="primary" type="submit">
                  Send message
                </Button>
                <CtaLink
                  href={getWhatsAppUrl()}
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </CtaLink>
              </div>

              <p className="text-xs text-white/40">Form is a placeholder until email/backend is connected.</p>
            </form>
          </Surface>
        </div>
      </div>
    </section>
  );
}
