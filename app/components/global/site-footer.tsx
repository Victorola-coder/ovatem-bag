"use client";

import Link from "next/link";
import { Image } from "@/app/components/ui";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
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
            <p className="text-sm text-white/70">
              Crafting Excellence. Every Style. Every Story.
            </p>
          </div>

          <div className="grid gap-2 text-sm text-white/70">
            <p className="text-sm font-semibold text-white">Explore</p>
            <Link className="hover:text-white" href="/#collections">
              Collections
            </Link>
            <Link className="hover:text-white" href="/#souvenirs">
              Event souvenirs
            </Link>
            <Link className="hover:text-white" href="/shop">
              Shop preview
            </Link>
            <Link className="hover:text-white" href="/blog">
              Journal
            </Link>
            <Link className="hover:text-white" href="/brand">
              Brand reference
            </Link>
            <Link className="hover:text-white" href="/#contact">
              Contact
            </Link>
          </div>

          <div className="grid gap-2 text-sm text-white/70">
            <p className="text-sm font-semibold text-white">Legal</p>
            <Link className="hover:text-white" href="/privacy">
              Privacy
            </Link>
            <Link className="hover:text-white" href="/terms">
              Terms
            </Link>
            <Link className="hover:text-white" href="/returns">
              Returns &amp; refunds
            </Link>
            <Link className="hover:text-white" href="/training-policy">
              Training policy
            </Link>
          </div>

          <div className="grid gap-2 text-sm text-white/70">
            <p className="text-sm font-semibold text-white">Contact</p>
            <p>WhatsApp: (add number)</p>
            <p>Email: (add email)</p>
            <p>Location: Nigeria</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Ovatem. All rights reserved.</p>
          <p className="flex flex-wrap items-center gap-1">
            Built by{" "}
            <a
              href="https://victorola.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              VickyJay
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

