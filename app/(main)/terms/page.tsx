import type { Metadata } from "next";
import { PageContent, PageShell } from "@/app/components/global";

export const metadata: Metadata = {
  title: "Terms & Conditions | Ovatem",
  description: "Terms governing use of the Ovatem website and services.",
};

export default function TermsPage() {
  return (
    <>
      <PageShell
        eyebrow="Legal"
        title="Terms &amp; conditions"
        description="Rules for using this site and buying from or training with Ovatem. Template only — have a lawyer review before relying on it."
      />
      <PageContent narrow className="pb-20 pt-0">
        <p className="mb-10 text-xs text-white/45">Last updated: April 2026.</p>

        <div className="space-y-10 text-[15px] leading-relaxed text-white/65">
          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white/95">Agreement</h2>
            <p>
              By using this website or placing orders with Ovatem, you agree to these terms and to any additional terms
              provided at the time of purchase or training enrollment.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white/95">Products &amp; services</h2>
            <p>
              Descriptions, images, and prices are provided in good faith. Custom and handmade items may vary slightly.
              Bespoke timelines are confirmed after consultation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white/95">Orders &amp; payment</h2>
            <p>
              Orders are accepted subject to availability and confirmation. State your accepted payment methods (transfer,
              card, cash) and when payment is due — especially for deposits on custom work.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white/95">Intellectual property</h2>
            <p>
              Site content, branding, and product designs belong to Ovatem or its licensors. Do not copy or misuse
              materials without permission.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white/95">Limitation of liability</h2>
            <p>
              To the extent permitted by law, Ovatem is not liable for indirect or consequential losses. Cap liability as
              appropriate after legal advice.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white/95">Governing law</h2>
            <p>State the jurisdiction whose laws apply and where disputes will be resolved.</p>
          </section>
        </div>
      </PageContent>
    </>
  );
}
