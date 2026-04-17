import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Ovatem",
  description: "Terms governing use of the Ovatem website and services.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 md:py-16">
      <h1 className="text-3xl font-semibold text-white">Terms &amp; Conditions</h1>
      <p className="mt-4 text-xs text-white/55">
        Last updated: April 2026. Template only — obtain legal review before relying on these terms.
      </p>

      <div className="mt-10 space-y-6 text-sm leading-relaxed text-white/75">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Agreement</h2>
          <p>
            By using this website or placing orders with Ovatem, you agree to these terms and to any additional terms
            provided at the time of purchase or training enrollment.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Products &amp; services</h2>
          <p>
            Descriptions, images, and prices are provided in good faith. Custom and handmade items may vary slightly.
            Bespoke timelines are confirmed after consultation.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Orders &amp; payment</h2>
          <p>
            Orders are accepted subject to availability and confirmation. Specify your accepted payment methods (transfer,
            card, cash) and when payment is due — especially for deposits on custom work.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Intellectual property</h2>
          <p>
            Site content, branding, and product designs belong to Ovatem or its licensors. Do not copy or misuse
            materials without permission.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Limitation of liability</h2>
          <p>
            To the extent permitted by law, Ovatem is not liable for indirect or consequential losses. Cap liability as
            appropriate after legal advice.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Governing law</h2>
          <p>State the jurisdiction whose laws apply and where disputes will be resolved.</p>
        </section>
      </div>
    </div>
  );
}
