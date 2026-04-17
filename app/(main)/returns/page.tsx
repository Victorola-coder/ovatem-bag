import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Returns & Refunds | Ovatem",
  description: "Ovatem return, refund, and defect policies — draft for review.",
};

export default function ReturnsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 md:py-16">
      <h1 className="text-3xl font-semibold text-white">Returns &amp; refunds</h1>
      <p className="mt-4 text-xs text-white/55">
        Draft policy — align with how you actually fulfil orders and train students, then have it reviewed legally.
      </p>

      <div className="mt-10 space-y-6 text-sm leading-relaxed text-white/75">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Custom &amp; made-to-order</h2>
          <p>
            Custom bags and personalised souvenirs are typically produced specifically for you. These sales are often{" "}
            <strong className="text-white/90">final</strong> once production starts, except where required by law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Defects &amp; quality issues</h2>
          <p>
            If an item arrives with a manufacturing defect or material fault, contact us within{" "}
            <span className="text-white/90">[X days]</span> with photos. We will offer repair, replacement, or refund as
            appropriate.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Non-custom stock (future)</h2>
          <p>
            When ready-to-ship products are sold online, define return windows, condition requirements, and who pays
            return shipping.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Training fees</h2>
          <p>
            Training deposits and cancellations should mirror your training policy — see{" "}
            <Link href="/training-policy" className="text-white underline underline-offset-4 hover:text-white/90">
              Training policy
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
