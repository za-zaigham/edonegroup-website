import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "King Abdullah Scholarship Programme (KASP) — UK Guide",
  description:
    "Complete guide to the King Abdullah Scholarship Programme for Saudi nationals. What's covered, eligibility, UK university selection, and how EdOne Group supports KASP scholars.",
};

const COVERED = [
  "Full tuition fees at approved universities",
  "Monthly living allowance",
  "Return flights to the UK",
  "Annual book allowance",
  "Health insurance coverage",
  "Family allowance (in some cases)",
];

const UK_UNIS = [
  "University of Manchester", "University of Edinburgh", "King's College London",
  "University of Birmingham", "University of Leeds", "Queen Mary University",
  "Coventry University", "University of East London", "Northumbria University",
];

export default function KASPPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <section className="relative overflow-hidden section-dark py-20">
        <div className="dot-grid-dark" />
        <div className="container-x relative z-10 max-w-4xl">
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-5">
            <Link href="/scholarships" className="hover:text-white/70 transition">Scholarships</Link>
            <span>/</span>
            <span className="text-white/60">KASP</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🇸🇦</span>
            <span className="text-xs font-bold text-white px-3 py-1.5 rounded-full bg-emerald-600">Open — Apply Now</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
            King Abdullah Scholarship Programme
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Saudi Arabia&apos;s flagship overseas scholarship — full funding for Saudi nationals to study Master&apos;s and PhD at leading UK and global universities.
          </p>
        </div>
      </section>

      <section className="container-x max-w-4xl py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">About KASP</h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                The King Abdullah Scholarship Programme is one of the world&apos;s largest government-funded scholarship initiatives. Administered by the Saudi Ministry of Education, it funds Saudi nationals to study at internationally ranked universities in the UK, USA, Australia, Canada, and Europe.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">What&apos;s Covered</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {COVERED.map((item) => (
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
                  "Saudi national with valid Saudi passport",
                  "Strong undergraduate academic record",
                  "Accepted at an approved overseas university",
                  "Must study a programme approved by the Ministry",
                  "English language requirements vary by university",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-[var(--color-blue)] mt-0.5 shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">EdOne Partner Universities in the UK</h2>
              <div className="flex flex-wrap gap-2">
                {UK_UNIS.map((u) => (
                  <span key={u} className="px-3 py-1.5 text-sm rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)]">
                    {u}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl border border-indigo-400/20"
              style={{ background: "rgba(79,70,229,0.05)" }}>
              <h3 className="font-semibold text-[var(--color-text)] mb-2">الدعم المتاح بالعربية</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                يقدم فريق EdOne Group دعماً كاملاً للطلاب السعوديين باللغة العربية — من اختيار الجامعة إلى استكمال الأوراق المطلوبة للمنحة.
              </p>
              <Link href="/gulf/saudi-arabia"
                className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-[var(--color-blue)] hover:underline">
                صفحة الطلاب السعوديين →
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="sticky top-24 space-y-4">
              <div className="p-6 rounded-2xl border border-emerald-400/30"
                style={{ background: "rgba(16,185,129,0.06)" }}>
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Application Status</p>
                <p className="text-xl font-extrabold text-[var(--color-text)]">Open</p>
                <p className="text-xs text-[var(--color-muted)] mt-1">Rolling — apply early for Sept 2026</p>
              </div>

              <div className="p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
                <h3 className="font-bold text-[var(--color-text)] mb-3">Apply via EdOne</h3>
                <p className="text-xs text-[var(--color-muted)] mb-5 leading-relaxed">
                  We handle university selection, application documents, and liaise with the Saudi Cultural Bureau on your behalf.
                </p>
                <Link href="/apply"
                  className="block w-full py-3 text-center rounded-xl font-bold text-white text-sm"
                  style={{ background: "linear-gradient(135deg, #4F46E5, #06B6D4)" }}>
                  Start Application →
                </Link>
              </div>
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
