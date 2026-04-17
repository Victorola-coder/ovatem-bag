import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Ovatem",
  description: "How Ovatem collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 md:py-16">
      <h1 className="text-3xl font-semibold text-white">Privacy Policy</h1>
      <p className="mt-4 text-xs text-white/55">
        Last updated: April 2026. This is a starter template — have it reviewed by a qualified lawyer for your
        jurisdiction and business model.
      </p>

      <div className="mt-10 space-y-6 text-sm leading-relaxed text-white/75">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Who we are</h2>
          <p>
            Ovatem (“we”, “us”) operates this website and related services for premium bags, souvenirs, and training.
            Contact details you publish on the site (e.g. WhatsApp, email) should match how customers reach you.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Information we may collect</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Name and contact information you submit through forms or WhatsApp.</li>
            <li>Order and enquiry details needed to fulfil bags, souvenirs, or training.</li>
            <li>Technical data such as IP address, browser type, and pages visited (via hosting or analytics when enabled).</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">How we use information</h2>
          <p>To respond to enquiries, process orders, deliver training, improve the website, and comply with the law.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Cookies &amp; analytics</h2>
          <p>
            If you add analytics or marketing tools, describe them here and link to vendor privacy policies. Until then,
            state whether only essential cookies are used.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Retention &amp; security</h2>
          <p>
            We keep personal data only as long as needed for the purposes above. We use reasonable measures to protect
            information — no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Your rights</h2>
          <p>
            Depending on applicable law (including Nigeria’s NDPR where relevant), you may have rights to access, correct,
            delete, or object to certain processing. Provide a contact email for privacy requests.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Changes</h2>
          <p>We may update this policy; the “Last updated” date will change when we do.</p>
        </section>
      </div>
    </div>
  );
}
