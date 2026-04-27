import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How EdOne Group uses cookies and similar tracking technologies.",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <section className="section-dark py-16">
        <div className="container-x max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-white/40 mb-4">
            <a href="/legal" className="hover:text-white/70 transition">Legal</a>
            <span>/</span>
            <span className="text-white/60">Cookie Policy</span>
          </div>
          <h1 className="text-4xl font-extrabold text-white">Cookie Policy</h1>
          <p className="text-white/50 mt-3 text-sm">Last updated: 27 April 2026</p>
        </div>
      </section>

      <section className="container-x max-w-3xl py-12">
        <div className="space-y-8 text-[var(--color-text)]">
          <div>
            <h2 className="text-xl font-bold mb-3">What Are Cookies?</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Cookies are small text files placed on your device when you visit a website. They allow the site to
              remember your preferences and understand how you interact with it.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[var(--color-border)]">
                    <th className="text-left py-2 pr-4 font-semibold text-[var(--color-text)]">Category</th>
                    <th className="text-left py-2 pr-4 font-semibold text-[var(--color-text)]">Purpose</th>
                    <th className="text-left py-2 font-semibold text-[var(--color-text)]">Consent needed?</th>
                  </tr>
                </thead>
                <tbody className="text-[var(--color-muted)]">
                  {[
                    ["Essential", "Session management, security, form submission", "No"],
                    ["Analytics", "Google Analytics 4 — anonymous page-view data", "Yes"],
                    ["Performance", "Plausible Analytics — cookieless, privacy-first", "No"],
                    ["Preferences", "Language, theme, and UI preferences", "No"],
                  ].map(([cat, purpose, consent]) => (
                    <tr key={cat} className="border-b border-[var(--color-border)]">
                      <td className="py-3 pr-4 font-medium text-[var(--color-text)]">{cat}</td>
                      <td className="py-3 pr-4">{purpose}</td>
                      <td className="py-3">
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                          consent === "Yes"
                            ? "bg-amber-500/20 text-amber-400"
                            : "bg-green-500/20 text-green-400"
                        }`}>
                          {consent}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">Managing Cookies</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              You can control cookies through your browser settings. Most browsers allow you to refuse cookies,
              delete existing cookies, or be notified when a cookie is set. Disabling essential cookies may affect
              site functionality. For more information, visit{" "}
              <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer"
                className="text-[var(--color-blue)] hover:underline">
                allaboutcookies.org
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">Third-Party Services</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              We use Google Analytics 4 (operated by Google LLC) for aggregate usage analytics. Google may set
              their own cookies — see Google&apos;s{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"
                className="text-[var(--color-blue)] hover:underline">
                Privacy Policy
              </a>{" "}
              for details. We have enabled IP anonymisation on all GA4 data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">Updates to This Policy</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              We may update this Cookie Policy as our services evolve. Please check this page periodically for
              any changes. Questions? Email{" "}
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
