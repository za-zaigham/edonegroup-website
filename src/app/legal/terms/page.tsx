import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "EdOne Group's terms and conditions for using our education consultancy services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <section className="section-dark py-16">
        <div className="container-x max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-white/40 mb-4">
            <a href="/legal" className="hover:text-white/70 transition">Legal</a>
            <span>/</span>
            <span className="text-white/60">Terms of Service</span>
          </div>
          <h1 className="text-4xl font-extrabold text-white">Terms of Service</h1>
          <p className="text-white/50 mt-3 text-sm">Last updated: 27 April 2026</p>
        </div>
      </section>

      <section className="container-x max-w-3xl py-12">
        <div className="space-y-8 text-[var(--color-text)]">
          <div>
            <h2 className="text-xl font-bold mb-3">1. About These Terms</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              These Terms of Service govern your use of the EdOne Group website (edonegroup.com) and our education
              consultancy services. By using our site or services you agree to these terms. EdOne Group Ltd is a
              company registered in England and Wales.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">2. Our Services</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              EdOne Group provides education consultancy services including university application guidance, offer
              negotiation, document review, and general admissions advice. We are a consultancy and are not
              authorised to give legal advice on UK or international immigration law. All visa-related information
              is educational only; for definitive immigration advice you should consult a qualified solicitor or
              OISC-registered adviser.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">3. No Guarantee of Admission</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              University admission decisions are made solely by the institutions concerned. EdOne Group cannot
              guarantee that any application will result in an offer of admission. Our quoted offer success rates
              reflect historical results and are not a guarantee of future outcomes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">4. Fees and Payment</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Our initial consultation is free of charge. Service fees (where applicable) will be clearly
              communicated before any agreement is entered into. Details of any commission arrangements with
              universities will be disclosed to you on request. You are never charged by EdOne Group unless
              you have signed a separate service agreement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">5. Your Responsibilities</h2>
            <ul className="list-disc pl-5 space-y-2 text-[var(--color-muted)]">
              <li>Provide accurate and complete information at all times.</li>
              <li>Inform us promptly of any changes to your circumstances relevant to your application.</li>
              <li>Not submit fabricated documents or misrepresent your qualifications.</li>
              <li>Comply with all university and visa application requirements.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">6. Intellectual Property</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              All content on this website including text, graphics, logos, and guides is owned by EdOne Group Ltd
              or licensed to us. You may not reproduce, distribute, or commercially exploit any content without
              our prior written consent.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">7. Limitation of Liability</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              To the maximum extent permitted by law, EdOne Group shall not be liable for any indirect, incidental,
              or consequential loss arising from your use of our services or website. Our total liability for any
              claim shall not exceed the fees (if any) paid by you to EdOne Group in the 12 months preceding the claim.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">8. Governing Law</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              These terms are governed by the laws of England and Wales. Any disputes shall be subject to the
              exclusive jurisdiction of the courts of England and Wales.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">9. Changes to These Terms</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              We may update these terms from time to time. Material changes will be communicated via the website.
              Continued use of our services after changes constitutes acceptance of the revised terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">10. Contact</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Questions about these terms? Email{" "}
              <a href="mailto:hello@edonegroup.com" className="text-[var(--color-blue)] hover:underline">
                hello@edonegroup.com
              </a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
