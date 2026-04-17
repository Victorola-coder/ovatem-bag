"use client";

import { MessageCircle } from "lucide-react";

const waUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL;

export function FloatingWhatsApp() {
  const href =
    waUrl && waUrl.length > 0
      ? waUrl
      : "https://wa.me/?text=Hi%20Ovatem%20%E2%80%94%20I%E2%80%99d%20like%20to%20ask%20about%20bags%20or%20souvenirs.";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40 md:bottom-8 md:right-8"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </a>
  );
}
