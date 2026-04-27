import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kuwait Cultural Office (KCO) Scholarship — UK Guide",
  description:
    "Full guide to the Kuwait Cultural Office scholarship for Kuwaiti students studying in the UK. Living allowance, tuition, eligibility, and how to apply through EdOne Group.",
};

export default function KCOPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <section className="relative overflow-hidden section-dark py-20">
        <div className="dot-grid-dark" />
        <div className="container-x relative z-10 max-w-4xl">
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-5">
            <Link href="/scholarships" className="hover:text-white/70 transition">Scholarships</Link>
            <span>/</span>
            <span className="text-white/60">KCO</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🇰🇼</span>
            <span className="text-xs font-bold text-white px-3 py-1.5 rounded-full bg-emerald-600">Open — Rolling Applications</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">Kuwait Cultural Office Scholarship</h1>
          <p className="text-white/60 text-lg max-w-2xl">
            One of the Gulf&apos;s most generous scholarships — full tuition plus £700–900/month living allowance for Kuwaiti nationals studying Master&apos;s or PhD in the UK.
          </p>
        </div>
      </section>

      <section className="container-x max-w-4xl py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">About the KCO Scholarship</h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                The Kuwait Cultural Office in London administers scholarships for Kuwaiti nationals studying at approved UK universities. The scholarship is known for its generous living allowance, which is among the highest of any Gulf government scholarship — making it possible for students and their families to live comfortably in the UK during their studies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">What&apos;s Covered</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Full tuition fees at approved UK universities",
                  "Living allowance: £700–900/month",
                  "Return flights Kuwait ↔ UK per year",
                  "Dependant allowance (spouse and children)",
                  "Book and equipment allowance",
                  "Medical insurance",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 p-3 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]">
                    <span className="text-emerald-500 mt-0.5 shrink-0">✓</span>
                    <span className="text-sm text-[var(--color-text)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Eligibility</h2>
              <ul className="space-y-2 text-sm text-[var(--color-muted)]">
                {[
                  "Kuwaiti national with valid Kuwaiti passport",
                  "Undergraduate degree with good academic standing",
                  "Applying for Master's or PhD programmes",
                  "Must select from KCO-approved UK universities",
                  "English language: IELTS 6.0+ or equivalent",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-[var(--color-blue)] mt-0.5 shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-text)] mb-3">Can I Bring My Family?</h2>
              <div className="p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
                <p className="text-sm text-[var(--color-text)] leading-relaxed">
                  Yes — the KCO scholarship includes a dependant allowance for eligible spouses and children. EdOne specialises in finding UK university routes that also allow dependants under UK Student Route visa rules. Combining a research-track programme with the KCO scholarship is one of the most family-friendly combinations available.
                </p>
                <Link href="/services/uk-research-dependants"
                  className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-[var(--color-blue)] hover:underline">
                  Research + Dependants guide →
                </Link>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-indigo-400/20"
              style={{ background: "rgba(79,70,229,0.05)" }}>
              <h3 className="font-semibold text-[var(--color-text)] mb-2">دعم للطلاب الكويتيين</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                يقدم فريق EdOne خدمات متكاملة للطلاب الكويتيين — اختيار الجامعة المناسبة وفق متطلبات منحة المكتب الثقافي، وإعداد طلب القبول، والدعم الكامل حتى الوصول للمملكة المتحدة.
              </p>
              <Link href="/gulf/kuwait"
                className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-[var(--color-blue)] hover:underline">
                صفحة الطلاب الكويتيين →
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="sticky top-24 space-y-4">
              <div className="p-6 rounded-2xl border border-emerald-400/30"
                style={{ background: "rgba(16,185,129,0.06)" }}>
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Living Allowance</p>
                <p className="text-2xl font-extrabold text-[var(--color-text)]">£700–900/mo</p>
                <p className="text-xs text-[var(--color-muted)] mt-1">Plus full tuition + flights</p>
              </div>

              <div className="p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
                <h3 className="font-bold text-[var(--color-text)] mb-3">Apply via EdOne</h3>
                <p className="text-xs text-[var(--color-muted)] mb-5 leading-relaxed">
                  We identify KCO-approved universities that match your profile and guide you through the full application process.
                </p>
                <Link href="/apply"
                  className="block w-full py-3 text-center rounded-xl font-bold text-white text-sm"
                  style={{ background: "linear-gradient(135deg, #4F46E5, #06B6D4)" }}>
                  Start Application →
                </Link>
              </div>

              <a href="https://www.kuwaitcultural.org.uk" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[var(--color-blue)] hover:underline">
                Official KCO website →
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container-x max-w-4xl pb-12">
        <Link href="/scholarships" className="text-sm text-[var(--color-muted)] hover:text-[var(--color-blue)] transition-colors">
          ← All scholarships
        </Link>
      </div>
    </div>
  );
}
