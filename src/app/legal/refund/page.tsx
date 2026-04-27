import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "EdOne Group's refund and cancellation policy for education consultancy services.",
};

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <section className="section-dark py-16">
        <div className="container-x max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-white/40 mb-4">
            <a href="/legal" className="hover:text-white/70 transition">Legal</a>
            <span>/</span>
            <span className="text-white/60">Refund Policy</span>
          </div>
          <h1 className="text-4xl font-extrabold text-white">Refund Policy</h1>
          <p className="text-white/50 mt-3 text-sm">Last updated: 27 April 2026</p>
        </div>
      </section>

      <section className="container-x max-w-3xl py-12">
        <div className="space-y-8 text-[var(--color-text)]">
          <div>
            <h2 className="text-xl font-bold mb-3">Free Consultation</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Initial consultations with EdOne Group are entirely free of charge. No payment is taken and no
              refund is required for consultations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">Paid Service Agreements</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Where a student and EdOne Group have entered into a signed service agreement with an associated fee,
              the following terms apply:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-[var(--color-muted)]">
              <li>Cancellation within 14 days of signing, before any work has commenced: <strong className="text-[var(--color-text)]">full refund</strong>.</li>
              <li>Cancellation after work has commenced (e.g. application drafted, documents reviewed): a partial refund reflecting hours worked will be offered at our discretion.</li>
              <li>Where a university offer is received and the student chooses not to proceed: the service fee is non-refundable unless otherwise stated in the agreement.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">Commission-Based Services</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              For services where EdOne Group earns a commission directly from the university upon enrolment,
              no fee is charged to the student. These services have no refund implications for students.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">How to Request a Refund</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              To request a refund, email{" "}
              <a href="mailto:hello@edonegroup.com" className="text-[var(--color-blue)] hover:underline">
                hello@edonegroup.com
              </a>{" "}
              with your name, the service purchased, and the reason for your request. We will respond within 5
              business days and process any agreed refund within 14 days.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">Consumer Rights</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Nothing in this policy affects your statutory rights under the Consumer Rights Act 2015 or
              Consumer Contracts Regulations 2013.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
