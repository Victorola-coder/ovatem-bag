"use client";

import Link from "next/link";
import { useState } from "react";
import { clsx } from "clsx";
import { Button, Image } from "@/app/components/ui";

const NAV = [
  { label: "Collections", href: "#collections" },
  { label: "Craft", href: "#craft" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.svg"
            alt="Ovatem logo"
            width={34}
            height={34}
            className="rounded-xl bg-white/10 p-2"
          />
          <div className="leading-tight">
            <p className="text-sm font-semibold text-white">Ovatem</p>
            <p className="text-xs text-white/70">Quality Bag</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/75 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact">
            <Button size="sm" variant="primary">
              Order
            </Button>
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white md:hidden"
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>

      <div className={clsx("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="mx-auto max-w-6xl px-5 pb-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="grid gap-3">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)}>
                <Button variant="primary" className="w-full">
                  Make an Order
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

