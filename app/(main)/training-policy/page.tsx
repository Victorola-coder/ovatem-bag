import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training Policy | Ovatem",
  description: "Enrollment, attendance, fees, and certification for Ovatem bag-making training.",
};

export default function TrainingPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 md:py-16">
      <h1 className="text-3xl font-semibold text-white">Training policy</h1>
      <p className="mt-4 text-xs text-white/55">
        Draft — set real dates, fees, and rules for your cohorts, then seek legal review if needed.
      </p>

      <div className="mt-10 space-y-6 text-sm leading-relaxed text-white/75">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Programme</h2>
          <p>
            Ovatem offers hands-on bag-making training (e.g. a two-week intensive). Curriculum, hours, and class size
            are confirmed per intake.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Enrollment</h2>
          <p>
            A completed application and payment (or deposit) may be required to reserve a seat. Specify your
            prerequisites and age requirements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Fees &amp; refunds</h2>
          <p>
            State total fees, what is included (materials, certificate), refund rules for cancellations by the student or
            by Ovatem, and transfer options to a future cohort.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Attendance &amp; conduct</h2>
          <p>
            Participants are expected to attend sessions, follow safety instructions, and respect staff and other
            students. Grounds for removal should be listed.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Certification</h2>
          <p>
            Certificates are issued when completion criteria are met (attendance, assessments, and practical standards).
            Describe whether certification implies any formal accreditation.
          </p>
        </section>
      </div>
    </div>
  );
}
