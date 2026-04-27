import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources — Guides, Scholarships & Country Hubs",
  description:
    "Free study-abroad guides, scholarship databases, visa overviews, and country-specific resources from EdOne Group.",
};

const SCHOLARSHIP_GUIDES = [
  {
    flag: "🇬🇧",
    title: "Chevening Scholarships 2026",
    desc: "UK Government's flagship scholarship — fully funded Master's for future leaders. Applications open Sep–Nov each year.",
    href: "/study-in/uk#scholarships",
    tag: "Fully Funded",
    tagColor: "tag-success",
  },
  {
    flag: "🇸🇦",
    title: "KASP — King Abdullah Scholarship",
    desc: "Saudi Arabia's largest government scholarship programme covering tuition, living costs, and flights to UK/global universities.",
    href: "/gulf/saudi-arabia",
    tag: "Saudi Students",
    tagColor: "tag-indigo",
  },
  {
    flag: "🇰🇼",
    title: "Kuwait Cultural Office (KCO)",
    desc: "£700–£900/month living allowance plus tuition for Kuwaiti students studying Master's in the UK.",
    href: "/gulf/kuwait",
    tag: "Kuwait Students",
    tagColor: "tag-indigo",
  },
  {
    flag: "🇦🇺",
    title: "Australia Awards Scholarships",
    desc: "Australian Government scholarships for students from developing countries to study at Australian universities.",
    href: "/study-in/australia",
    tag: "Fully Funded",
    tagColor: "tag-success",
  },
  {
    flag: "🇨🇦",
    title: "Vanier Canada Graduate Scholarships",
    desc: "C$50,000/year for 3 years for doctoral students demonstrating leadership and academic excellence.",
    href: "/study-in/canada",
    tag: "PhD",
    tagColor: "tag-cyan",
  },
  {
    flag: "🇮🇪",
    title: "Government of Ireland International Scholarships",
    desc: "Fully funded Master's programmes at Irish universities, open to students outside the EU/EEA.",
    href: "/study-in/ireland",
    tag: "Fully Funded",
    tagColor: "tag-success",
  },
];

const COUNTRY_GUIDES = [
  { flag: "🇬🇧", name: "United Kingdom", href: "/study-in/uk", desc: "Entry requirements, Student Route visa, CAS letters, tuition fees, and graduate work rights." },
  { flag: "🇦🇺", name: "Australia", href: "/study-in/australia", desc: "Temporary Graduate visa (subclass 485), tuition fees, IELTS requirements, and living costs." },
  { flag: "🇨🇦", name: "Canada", href: "/study-in/canada", desc: "Post-Graduation Work Permit (PGWP), study permit, SPP stream, and study costs." },
  { flag: "🇺🇸", name: "United States", href: "/study-in/usa", desc: "F-1 student visa, GRE/GMAT, OPT extension, and top university application timelines." },
  { flag: "🇮🇪", name: "Ireland", href: "/study-in/ireland", desc: "Third Level Graduate Scheme, EU fee benchmark eligibility, and Irish university applications." },
];

const QUICK_GUIDES = [
  {
    icon: "📋",
    title: "How to Apply to a UK University",
    desc: "Step-by-step: from shortlisting to conditional offer, CAS letter, and Student Route visa application.",
    time: "8 min read",
    href: "/study-in/uk",
  },
  {
    icon: "🎓",
    title: "UK 2nd Master's Degree Guide",
    desc: "Can you do a second Master's in the UK? Yes — and here's exactly how the visa route works.",
    time: "5 min read",
    href: "/services/uk-2nd-masters",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Bringing Family to the UK",
    desc: "Which study routes allow dependants? What are the financial requirements? All explained.",
    time: "6 min read",
    href: "/services/uk-research-dependants",
  },
  {
    icon: "📝",
    title: "Alternatives to IELTS",
    desc: "PTE Academic, Duolingo, Pearson, and university pre-sessional English — which UK universities accept them?",
    time: "4 min read",
    href: "/study-in/uk",
  },
  {
    icon: "💷",
    title: "UK Tuition Fees for International Students 2026",
    desc: "Average fees by course type, top universities, and ways to reduce costs through scholarships.",
    time: "6 min read",
    href: "/study-in/uk",
  },
  {
    icon: "🏦",
    title: "Scholarship Proof of Funds for UK Visa",
    desc: "Exactly how much money you need to show, for how long, and which bank statements are accepted.",
    time: "5 min read",
    href: "/study-in/uk",
  },
];

const GULF_RESOURCES = [
  { flag: "🇸🇦", name: "Saudi Arabia", href: "/gulf/saudi-arabia" },
  { flag: "🇦🇪", name: "UAE", href: "/gulf/uae" },
  { flag: "🇶🇦", name: "Qatar", href: "/gulf/qatar" },
  { flag: "🇰🇼", name: "Kuwait", href: "/gulf/kuwait" },
  { flag: "🇴🇲", name: "Oman", href: "/gulf/oman" },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      {/* Hero */}
      <section className="relative overflow-hidden section-dark py-20 md:py-24">
        <div className="dot-grid-dark" />
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #4F46E5 0%, transparent 70%)" }} />
        <div className="container-x relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Resources</h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Free guides, scholarship databases, and country hubs to help you plan your international education.
          </p>
        </div>
      </section>

      {/* Quick guides */}
      <section className="container-x py-16">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-2">Quick Guides</h2>
        <p className="text-[var(--color-muted)] text-sm mb-8">Essential reading before you apply.</p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {QUICK_GUIDES.map((g) => (
            <Link key={g.title} href={g.href}
              className="group block p-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-indigo-400/40 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
              <div className="text-2xl mb-3">{g.icon}</div>
              <h3 className="font-semibold text-[var(--color-text)] text-sm mb-2 group-hover:text-[var(--color-blue)] transition-colors">
                {g.title}
              </h3>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed mb-3">{g.desc}</p>
              <span className="text-xs text-[var(--color-muted)]">📖 {g.time}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Scholarships */}
      <section className="bg-[var(--color-surface-muted)] py-16">
        <div className="container-x">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-2">Scholarship Opportunities</h2>
          <p className="text-[var(--color-muted)] text-sm mb-8">Government and institutional scholarships available to international students.</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SCHOLARSHIP_GUIDES.map((s) => (
              <Link key={s.title} href={s.href}
                className="group block p-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-indigo-400/40 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="text-2xl">{s.flag}</span>
                  <span className={`tag ${s.tagColor}`}>{s.tag}</span>
                </div>
                <h3 className="font-semibold text-[var(--color-text)] text-sm mb-2 group-hover:text-[var(--color-blue)] transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs text-[var(--color-muted)] leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Country guides */}
      <section className="container-x py-16">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-2">Country Guides</h2>
        <p className="text-[var(--color-muted)] text-sm mb-8">In-depth overviews for each study destination.</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COUNTRY_GUIDES.map((c) => (
            <Link key={c.name} href={c.href}
              className="group flex gap-4 p-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-indigo-400/40 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
              <span className="text-2xl shrink-0">{c.flag}</span>
              <div>
                <h3 className="font-semibold text-[var(--color-text)] text-sm mb-1 group-hover:text-[var(--color-blue)] transition-colors">
                  Study in {c.name}
                </h3>
                <p className="text-xs text-[var(--color-muted)] leading-relaxed">{c.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Gulf resources */}
      <section className="bg-[var(--color-surface-muted)] py-16">
        <div className="container-x">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-2">
            Gulf Students <span className="text-[var(--color-muted)] font-normal text-lg">/ طلاب الخليج</span>
          </h2>
          <p className="text-[var(--color-muted)] text-sm mb-8">
            Bilingual guides (Arabic + English) for students from the Gulf region — including local government scholarships and UK university options.
          </p>
          <div className="flex flex-wrap gap-3">
            {GULF_RESOURCES.map((g) => (
              <Link key={g.name} href={g.href}
                className="flex items-center gap-2 px-5 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-indigo-400/40 hover:shadow-sm transition-all text-sm font-medium text-[var(--color-text)]">
                <span>{g.flag}</span>
                {g.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-16 text-center">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-3">Need personalised guidance?</h2>
        <p className="text-[var(--color-muted)] text-sm mb-6 max-w-md mx-auto">
          These guides give the overview — but every student&apos;s situation is unique. Book a free session and get advice tailored to your profile.
        </p>
        <Link href="/book"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white"
          style={{ background: "linear-gradient(135deg, #4F46E5, #06B6D4)", boxShadow: "0 0 24px rgba(79,70,229,0.35)" }}>
          Book Free Consultation →
        </Link>
      </section>
    </div>
  );
}
