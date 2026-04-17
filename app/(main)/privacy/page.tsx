import type { Metadata } from "next";
import { PageContent, PageShell } from "@/app/components/global";

export const metadata: Metadata = {
  title: "Privacy Policy | Ovatem",
  description: "How Ovatem collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageShell
        eyebrow="Legal"
        title="Privacy policy"
        description="How we handle information when you browse, enquire, order, or train with Ovatem. Review with a lawyer for your jurisdiction."
      />
      <PageContent narrow className="pb-20 pt-0">
        <p className="mb-10 text-xs text-white/45">Last updated: April 2026.</p>

        <div className="space-y-10 text-[15px] leading-relaxed text-white/65">
          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white/95">Who we are</h2>
            <p>
              Ovatem (“we”, “us”) operates this website and related services for premium bags, souvenirs, and training.
              Contact details shown on the site should match how customers reach you in practice.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white/95">Information we may collect</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Name and contact information you submit through forms or WhatsApp.</li>
              <li>Order and enquiry details needed to fulfil bags, souvenirs, or training.</li>
              <li>
                Technical data such as IP address, browser type, and pages visited (via hosting or analytics when
                enabled).
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white/95">How we use information</h2>
            <p>To respond to enquiries, process orders, deliver training, improve the website, and comply with the law.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white/95">Cookies &amp; analytics</h2>
            <p>
              If you add analytics or marketing tools, describe them here and link to vendor privacy policies. Until then,
              state whether only essential cookies are used.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white/95">Retention &amp; security</h2>
            <p>
              We keep personal data only as long as needed for the purposes above. We use reasonable measures to protect
              information — no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white/95">Your rights</h2>
            <p>
              Depending on applicable law (including Nigeria’s NDPR where relevant), you may have rights to access, correct,
              delete, or object to certain processing. Add a dedicated email for privacy requests.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white/95">Changes</h2>
            <p>We may update this policy; the “Last updated” date will change when we do.</p>
          </section>
        </div>
      </PageContent>
    </>
  );
}
