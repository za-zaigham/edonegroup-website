import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How EdOne Group collects, uses, and protects your personal data.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <section className="section-dark py-16">
        <div className="container-x max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-white/40 mb-4">
            <a href="/legal" className="hover:text-white/70 transition">Legal</a>
            <span>/</span>
            <span className="text-white/60">Privacy Policy</span>
          </div>
          <h1 className="text-4xl font-extrabold text-white">Privacy Policy</h1>
          <p className="text-white/50 mt-3 text-sm">Last updated: 27 April 2026</p>
        </div>
      </section>

      <section className="container-x max-w-3xl py-12 prose prose-slate max-w-none">
        <div className="space-y-8 text-[var(--color-text)]">
          <div>
            <h2 className="text-xl font-bold mb-3">1. Who We Are</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              EdOne Group Ltd (&ldquo;EdOne&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a UK-registered education
              consultancy that helps students secure university admissions. Our registered address is in the United Kingdom.
              We are committed to protecting your privacy in accordance with the UK General Data Protection Regulation
              (UK GDPR) and the Data Protection Act 2018.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">2. Information We Collect</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-3">When you use our services, we may collect:</p>
            <ul className="list-disc pl-5 space-y-2 text-[var(--color-muted)]">
              <li><strong className="text-[var(--color-text)]">Identity data:</strong> name, nationality, date of birth.</li>
              <li><strong className="text-[var(--color-text)]">Contact data:</strong> email address, phone number, WhatsApp number.</li>
              <li><strong className="text-[var(--color-text)]">Academic data:</strong> qualifications, grades, study intentions.</li>
              <li><strong className="text-[var(--color-text)]">Financial data:</strong> tuition budget (no payment card data is ever stored by us).</li>
              <li><strong className="text-[var(--color-text)]">Usage data:</strong> pages visited, device type, approximate location (via analytics).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2 text-[var(--color-muted)]">
              <li>To provide personalised university admissions guidance.</li>
              <li>To match you with suitable universities and scholarship opportunities.</li>
              <li>To contact you with updates relevant to your application.</li>
              <li>To improve our website and services.</li>
              <li>To comply with our legal obligations.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">4. Lawful Basis for Processing</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              We process your data under the following lawful bases: <em>contract performance</em> (to provide the services
              you requested), <em>legitimate interests</em> (to improve our services and prevent fraud), and where required,
              <em> explicit consent</em> (for marketing communications).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">5. Data Sharing</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              We share your data only with: university admissions departments you have asked us to apply to;
              trusted technology providers (Notion, Vercel, Google Analytics) under appropriate data processing
              agreements; and where required by law. We never sell your personal data to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">6. Data Retention</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              We retain your personal data for as long as necessary to provide our services, typically up to 3 years
              after your last interaction. Enquiries that do not convert to applications are deleted after 12 months.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">7. Your Rights</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-3">Under UK GDPR you have the right to:</p>
            <ul className="list-disc pl-5 space-y-1 text-[var(--color-muted)]">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request erasure (&ldquo;right to be forgotten&rdquo;).</li>
              <li>Object to processing based on legitimate interests.</li>
              <li>Data portability — receive your data in a machine-readable format.</li>
              <li>Withdraw consent at any time (where consent is the lawful basis).</li>
            </ul>
            <p className="text-[var(--color-muted)] mt-3 leading-relaxed">
              To exercise any right, email us at{" "}
              <a href="mailto:hello@edonegroup.com" className="text-[var(--color-blue)] hover:underline">
                hello@edonegroup.com
              </a>. We will respond within 30 days.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">8. Cookies</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              We use essential cookies to operate the site and, with your consent, analytics cookies to understand how
              visitors use our pages. See our{" "}
              <a href="/legal/cookies" className="text-[var(--color-blue)] hover:underline">Cookie Policy</a> for full details.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">9. Security</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              We use industry-standard security measures including TLS encryption, access controls, and regular security
              reviews. Our website is hosted on Vercel&apos;s edge network with automatic HTTPS.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">10. Contact & Complaints</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              For privacy queries: <a href="mailto:hello@edonegroup.com" className="text-[var(--color-blue)] hover:underline">hello@edonegroup.com</a>.
              You also have the right to complain to the{" "}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[var(--color-blue)] hover:underline">
                Information Commissioner&apos;s Office (ICO)
              </a>{" "}
              if you believe we have not handled your data lawfully.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
