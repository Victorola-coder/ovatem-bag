import type { Metadata } from "next";
import Link from "next/link";
import { PageContent, PageShell } from "@/app/components/global";

export const metadata: Metadata = {
  title: "Returns & Refunds | Ovatem",
  description: "Ovatem return, refund, and defect policies — draft for review.",
};

export default function ReturnsPage() {
  return (
    <>
      <PageShell
        eyebrow="Legal"
        title="Returns &amp; refunds"
        description="How we handle defects, custom work, and future ready-to-ship sales. Align with your real process, then review with counsel."
      />
      <PageContent narrow className="pb-20 pt-0">
        <p className="mb-10 text-xs text-white/45">Draft — update dates and windows when you formalise policy.</p>

        <div className="space-y-10 text-[15px] leading-relaxed text-white/65">
          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white/95">Custom &amp; made-to-order</h2>
            <p>
              Custom bags and personalised souvenirs are typically produced specifically for you. These sales are often{" "}
              <strong className="font-medium text-white/85">final</strong> once production starts, except where required by
              law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white/95">Defects &amp; quality issues</h2>
            <p>
              If an item arrives with a manufacturing defect or material fault, contact us within{" "}
              <span className="text-white/80">[X days]</span> with photos. We will offer repair, replacement, or refund as
              appropriate.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white/95">Non-custom stock (future)</h2>
            <p>
              When ready-to-ship products are sold online, define return windows, condition requirements, and who pays
              return shipping.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white/95">Training fees</h2>
            <p>
              Training deposits and cancellations should mirror your{" "}
              <Link href="/training-policy" className="text-brand-aquaHaze underline underline-offset-4 hover:text-white">
                training policy
              </Link>
              .
            </p>
          </section>
        </div>
      </PageContent>
    </>
  );
}
