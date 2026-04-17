"use client";

import Link from "next/link";
import { useState } from "react";
import { clsx } from "clsx";
import { CtaLink, Image } from "@/app/components/ui";

const NAV = [
  { label: "Mission", href: "/#mission" },
  { label: "Souvenirs", href: "/#souvenirs" },
  { label: "Collections", href: "/#collections" },
  { label: "Training", href: "/#trained" },
  { label: "Reviews", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.jpg"
            alt="Ovatem logo"
            width={36}
            height={36}
            className="rounded-md object-contain opacity-95"
          />
          <div className="leading-tight">
            <p className="text-[13px] font-medium tracking-wide text-white/95">Ovatem</p>
            <p className="text-[11px] text-white/45">Quality Bag</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] text-white/55 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/shop" className="text-[13px] text-white/55 transition-colors hover:text-white">
            Shop
          </Link>
          <Link href="/blog" className="text-[13px] text-white/55 transition-colors hover:text-white">
            Journal
          </Link>
          <CtaLink href="/#contact" size="sm" variant="primary">
            Order
          </CtaLink>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-white/[0.08] px-3 py-2 text-[13px] text-white/80 md:hidden"
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>

      <div className={clsx("md:hidden", isOpen ? "block border-t border-white/[0.06]" : "hidden")}>
        <div className="mx-auto max-w-5xl px-6 pb-4">
          <div className="grid gap-1 pt-2">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-2 py-2.5 text-[14px] text-white/75 hover:bg-white/[0.04]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/shop"
              onClick={() => setIsOpen(false)}
              className="rounded-md px-2 py-2.5 text-[14px] text-white/75 hover:bg-white/[0.04]"
            >
              Shop
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className="rounded-md px-2 py-2.5 text-[14px] text-white/75 hover:bg-white/[0.04]"
            >
              Journal
            </Link>
              <CtaLink
                href="/#contact"
                variant="primary"
                className="mt-2 w-full justify-center"
                onClick={() => setIsOpen(false)}
              >
                Make an order
              </CtaLink>
          </div>
        </div>
      </div>
    </header>
  );
}
