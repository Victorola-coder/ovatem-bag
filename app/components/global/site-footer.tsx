"use client";

import Link from "next/link";
import { Image } from "@/app/components/ui";
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from "@/app/constants/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/images/logo.jpg"
                alt="Ovatem logo"
                width={36}
                height={36}
                className="rounded-md object-contain opacity-95"
              />
              <div className="leading-tight">
                <p className="text-[13px] font-medium text-white/95">Ovatem</p>
                <p className="text-[11px] text-white/45">Quality Bag</p>
              </div>
            </Link>
            <p className="max-w-xs text-[13px] leading-relaxed text-white/50">
              Crafting Excellence. Every Style. Every Story.
            </p>
          </div>

          <div className="grid gap-2 text-[13px] text-white/50">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">Explore</p>
            <Link className="hover:text-white/80" href="/#collections">
              Collections
            </Link>
            <Link className="hover:text-white/80" href="/#souvenirs">
              Event souvenirs
            </Link>
            <Link className="hover:text-white/80" href="/shop">
              Shop preview
            </Link>
            <Link className="hover:text-white/80" href="/blog">
              Journal
            </Link>
            <Link className="hover:text-white/80" href="/brand">
              Brand reference
            </Link>
            <Link className="hover:text-white/80" href="/#contact">
              Contact
            </Link>
          </div>

          <div className="grid gap-2 text-[13px] text-white/50">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">Legal</p>
            <Link className="hover:text-white/80" href="/privacy">
              Privacy
            </Link>
            <Link className="hover:text-white/80" href="/terms">
              Terms
            </Link>
            <Link className="hover:text-white/80" href="/returns">
              Returns &amp; refunds
            </Link>
            <Link className="hover:text-white/80" href="/training-policy">
              Training policy
            </Link>
          </div>

          <div className="text-[13px] text-white/50">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">Contact</p>
            <p className="mt-3">
              WhatsApp:{" "}
              <Link
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/65 hover:text-white/90"
              >
                {WHATSAPP_DISPLAY}
              </Link>
            </p>
            <p className="mt-1">Email: (add email)</p>
            <p className="mt-1">Nigeria</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/[0.06] pt-8 text-[11px] text-white/35 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Ovatem. All rights reserved.</p>
          <p>
            Built by{" "}
            <Link
              href="https://victorola.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/55 hover:text-white/80"
            >
              VickyJay
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
