import type { Metadata } from "next";
import { PageContent, PageShell } from "@/app/components/global";

export const metadata: Metadata = {
  title: "Training Policy | Ovatem",
  description: "Enrollment, attendance, fees, and certification for Ovatem bag-making training.",
};

export default function TrainingPolicyPage() {
  return (
    <>
      <PageShell
        eyebrow="Legal"
        title="Training policy"
        description="Enrollment, fees, attendance, and certification for Ovatem bag-making programmes. Customise for each intake."
      />
      <PageContent narrow className="pb-20 pt-0">
        <p className="mb-10 text-xs text-white/45">Draft — add cohort dates, fees, and cancellation tables.</p>

        <div className="space-y-10 text-[15px] leading-relaxed text-white/65">
          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white/95">Programme</h2>
            <p>
              Ovatem offers hands-on bag-making training (e.g. a two-week intensive). Curriculum, hours, and class size
              are confirmed per intake.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white/95">Enrollment</h2>
            <p>
              A completed application and payment (or deposit) may be required to reserve a seat. List prerequisites and
              any age requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white/95">Fees &amp; refunds</h2>
            <p>
              State total fees, what is included (materials, certificate), refund rules for cancellations by the student or
              by Ovatem, and transfer options to a future cohort.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white/95">Attendance &amp; conduct</h2>
            <p>
              Participants are expected to attend sessions, follow safety instructions, and respect staff and other
              students. List grounds for removal if needed.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-white/95">Certification</h2>
            <p>
              Certificates are issued when completion criteria are met (attendance, assessments, and practical standards).
              Clarify whether certification implies any formal accreditation beyond Ovatem.
            </p>
          </section>
        </div>
      </PageContent>
    </>
  );
}
