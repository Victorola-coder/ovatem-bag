/** Public WhatsApp — single source of truth for the site */
export const WHATSAPP_E164 = "2349021480063" as const;

export const WHATSAPP_DISPLAY = "+234 902 148 0063" as const;

const DEFAULT_PREFILL = "Hi Ovatem — I'd like to ask about bags or souvenirs.";

/**
 * `NEXT_PUBLIC_WHATSAPP_URL` can override the full link (e.g. pre-filled campaign URL).
 * Otherwise builds `https://wa.me/234…?text=…`
 */
export function getWhatsAppUrl(prefill: string = DEFAULT_PREFILL): string {
  const env = process.env.NEXT_PUBLIC_WHATSAPP_URL;
  if (env && /^https?:\/\//i.test(env.trim())) {
    return env.trim();
  }
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(prefill)}`;
}
