import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Scholarships for International Students 2025–26",
  description:
    "Fully funded and partial scholarships for international students — Chevening, KASP, KCO, Commonwealth, and more. Apply through EdOne Group.",
};

const scholarships = [
  {
    slug: "chevening",
    flag: "🇬🇧",
    title: "Chevening Scholarships",
    subtitle: "UK Government — Fully Funded",
    tag: "Closing Soon",
    tagColor: "bg-red-500",
    deadline: "5 November 2025",
    funding: "Full tuition + living allowance + flights",
    eligibility: "Open to students from 160+ countries",
    desc: "The UK Government's flagship international scholarship — for future leaders with strong academic records and leadership potential.",
  },
  {
    slug: "kasp",
    flag: "🇸🇦",
    title: "King Abdullah Scholarship Programme",
    subtitle: "Saudi Arabian Government — Fully Funded",
    tag: "Open",
    tagColor: "bg-emerald-600",
    deadline: "Ongoing — apply early",
    funding: "Full tuition + living allowance + return flights",
    eligibility: "Saudi nationals only",
    desc: "Saudi Arabia's flagship overseas scholarship covering top UK, US, Australian, and Canadian universities.",
  },
  {
    slug: "kco",
    flag: "🇰🇼",
    title: "Kuwait Cultural Office Scholarship",
    subtitle: "Kuwait Government — Fully Funded",
    tag: "Open",
    tagColor: "bg-emerald-600",
    deadline: "Ongoing — rolling applications",
    funding: "Full tuition + £700–900/month living allowance",
    eligibility: "Kuwaiti nationals (Master's & PhD)",
    desc: "One of the Gulf's most generous scholarship programmes, covering full tuition and a generous living stipend for Kuwaiti students in the UK.",
  },
  {
    slug: "manchester-jan-2026",
    flag: "🇬🇧",
    title: "University of Manchester — January 2026 Intake",
    subtitle: "Direct Admission — EdOne Partner",
    tag: "New Intake",
    tagColor: "bg-indigo-600",
    deadline: "Applications close December 2025",
    funding: "International tuition from £22,000/year",
    eligibility: "All international students with 2:2+ degree",
    desc: "January 2026 intake now open across Business, Engineering, Computer Science, and Life Sciences at one of the UK's top-10 universities.",
  },
];

export default function ScholarshipsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <section className="relative overflow-hidden section-dark py-20 md:py-24">
        <div className="dot-grid-dark" />
        <div className="absolute top-0 right-1/3 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #4F46E5 0%, transparent 70%)" }} />
        <div className="container-x relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Scholarship Opportunities</h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Current fully-funded and partial scholarships — updated by our advisors. Apply through EdOne for guided support.
          </p>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {scholarships.map((s) => (
            <Link key={s.slug} href={`/scholarships/${s.slug}`}
              className="group block p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-indigo-400/40 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{s.flag}</span>
                  <span className={`text-xs font-bold text-white px-2.5 py-1 rounded-full ${s.tagColor}`}>
                    {s.tag}
                  </span>
                </div>
                <span className="text-xs text-[var(--color-muted)]">Deadline: {s.deadline}</span>
              </div>
              <h2 className="font-bold text-[var(--color-text)] text-lg mb-1 group-hover:text-[var(--color-blue)] transition-colors">
                {s.title}
              </h2>
              <p className="text-sm text-[var(--color-muted)] mb-3">{s.subtitle}</p>
              <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">{s.desc}</p>
              <div className="flex flex-wrap gap-3 text-xs text-[var(--color-muted)]">
                <span>💰 {s.funding}</span>
                <span>✅ {s.eligibility}</span>
              </div>
              <div className="mt-4 text-sm font-semibold text-[var(--color-blue)] group-hover:underline">
                View full details →
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-[var(--color-muted)] mb-6">Not sure which scholarship you qualify for?</p>
          <Link href="/apply"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white"
            style={{ background: "linear-gradient(135deg, #4F46E5, #06B6D4)", boxShadow: "0 0 24px rgba(79,70,229,0.35)" }}>
            Apply Free — We&apos;ll match you →
          </Link>
        </div>
      </section>
    </div>
  );
}
