import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "University of Manchester — January 2026 Intake",
  description:
    "January 2026 intake now open at the University of Manchester. Apply through EdOne Group for Business, Engineering, Computer Science, and Life Sciences programmes.",
};

const SUBJECTS = [
  { faculty: "Alliance Manchester Business School", courses: ["MBA", "MSc Finance", "MSc Marketing", "MSc Management"] },
  { faculty: "School of Engineering", courses: ["MSc Advanced Engineering", "MSc Data Engineering", "MSc Electrical Power Systems"] },
  { faculty: "School of Computer Science", courses: ["MSc Advanced Computer Science", "MSc Data Science", "MSc AI"] },
  { faculty: "Faculty of Biology, Medicine & Health", courses: ["MSc Biomedical Sciences", "MSc Public Health", "MSc Healthcare Management"] },
];

const FACTS = [
  { label: "Global ranking", value: "Top 30 worldwide (QS 2025)" },
  { label: "Tuition (international)", value: "£22,000–35,000/year" },
  { label: "Intake", value: "January 2026" },
  { label: "English requirement", value: "IELTS 6.5 (6.0 in each band)" },
  { label: "Application deadline", value: "December 2025" },
  { label: "Graduate Route", value: "2 years post-study work" },
];

export default function ManchesterJan2026Page() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <section className="relative overflow-hidden section-dark py-20">
        <div className="dot-grid-dark" />
        <div className="container-x relative z-10 max-w-4xl">
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-5">
            <Link href="/scholarships" className="hover:text-white/70 transition">Opportunities</Link>
            <span>/</span>
            <span className="text-white/60">Manchester Jan 2026</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🇬🇧</span>
            <span className="text-xs font-bold text-white px-3 py-1.5 rounded-full bg-indigo-600">New Intake — January 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
            University of Manchester<br />January 2026 Intake
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            One of the UK&apos;s top-10 universities — now accepting January 2026 applications across Business, Engineering, Computer Science, and Life Sciences.
          </p>
        </div>
      </section>

      <section className="container-x max-w-4xl py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Why Manchester?</h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                The University of Manchester is consistently ranked among the world&apos;s top 30 universities. It has produced 25 Nobel Prize winners, has the largest campus in the UK, and sits in Manchester — one of the UK&apos;s most vibrant student cities with a significantly lower cost of living than London.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Available Programmes (Jan 2026)</h2>
              <div className="space-y-5">
                {SUBJECTS.map((s) => (
                  <div key={s.faculty}>
                    <h3 className="font-semibold text-[var(--color-text)] text-sm mb-2">{s.faculty}</h3>
                    <div className="flex flex-wrap gap-2">
                      {s.courses.map((c) => (
                        <span key={c} className="px-3 py-1.5 text-sm rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)]">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[var(--color-muted)] mt-4">* Course availability subject to confirmation. Contact EdOne for a complete list.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Key Facts</h2>
              <div className="space-y-0">
                {FACTS.map((f) => (
                  <div key={f.label} className="flex justify-between gap-4 py-3 border-b border-[var(--color-border)] text-sm">
                    <span className="text-[var(--color-muted)]">{f.label}</span>
                    <span className="font-semibold text-[var(--color-text)] text-right">{f.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-text)] mb-3">Graduate Route — 2-Year Stay</h2>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                After completing your degree at Manchester, you&apos;ll be eligible for the UK Graduate Route — an open work visa allowing you to stay and work in the UK for 2 years (3 years for PhD graduates) without needing employer sponsorship.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="sticky top-24 space-y-4">
              <div className="p-6 rounded-2xl border border-indigo-400/30"
                style={{ background: "rgba(79,70,229,0.06)" }}>
                <p className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">Intake</p>
                <p className="text-2xl font-extrabold text-[var(--color-text)]">January 2026</p>
                <p className="text-xs text-[var(--color-muted)] mt-1">Applications close December 2025</p>
              </div>

              <div className="p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
                <h3 className="font-bold text-[var(--color-text)] mb-3">Apply via EdOne</h3>
                <p className="text-xs text-[var(--color-muted)] mb-5 leading-relaxed">
                  EdOne supports applications to the University of Manchester — we guide you through the process and help identify scholarship options that suit your profile.
                </p>
                <Link href="/apply"
                  className="block w-full py-3 text-center rounded-xl font-bold text-white text-sm"
                  style={{ background: "linear-gradient(135deg, #4F46E5, #06B6D4)" }}>
                  Apply Now — It&apos;s Free →
                </Link>
                <Link href="/book"
                  className="block w-full mt-2 py-3 text-center rounded-xl font-semibold text-[var(--color-text)] text-sm border border-[var(--color-border)] hover:border-indigo-400/40 transition-all">
                  Book Free Consultation
                </Link>
              </div>

              <Link href="/universities" className="flex items-center gap-2 text-xs text-[var(--color-blue)] hover:underline">
                View all partner universities →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container-x max-w-4xl pb-12">
        <Link href="/scholarships" className="text-sm text-[var(--color-muted)] hover:text-[var(--color-blue)] transition-colors">
          ← All opportunities
        </Link>
      </div>
    </div>
  );
}
