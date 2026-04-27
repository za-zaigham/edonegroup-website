import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Study in Australia — Universities, Visas & Post-Study Work",
  description: "Study in Australia: top universities, Student visa process, up to 5-year regional post-study work rights, and how EdOne gets you an offer.",
};

const topUnis = [
  { name: "University of Melbourne", rank: "Top 15 world", city: "Melbourne", known: "Business, Medicine, Law" },
  { name: "University of Sydney", rank: "Top 20 world", city: "Sydney", known: "Engineering, Arts, Sciences" },
  { name: "Monash University", rank: "Top 50 world", city: "Melbourne", known: "Finance, Engineering, Pharmacy" },
  { name: "University of Queensland", rank: "Top 50 world", city: "Brisbane", known: "Mining, Agriculture, Sciences" },
  { name: "RMIT University", rank: "Top 200 world", city: "Melbourne", known: "Design, Tech, Business" },
  { name: "Deakin University", rank: "Top 300 world", city: "Geelong/Melbourne", known: "Nursing, Business, IT" },
];

const whyAustralia = [
  { icon: "☀️", title: "World-class lifestyle", desc: "Consistently ranked one of the most liveable countries. Safe, clean, multicultural cities with year-round sunshine." },
  { icon: "🛂", title: "Up to 5-year post-study work", desc: "Regional graduates can stay up to 5 years. Metro graduates get 2–4 years depending on location and qualification level." },
  { icon: "🎓", title: "7 world top-100 universities", desc: "The 'Group of Eight' are among the most prestigious universities in the Asia-Pacific and globally recognised." },
  { icon: "💼", title: "Strong job market", desc: "Mining, tech, healthcare, and finance sectors are actively recruiting international graduates with relevant degrees." },
  { icon: "🌏", title: "Gateway to Asia-Pacific", desc: "Australia's proximity and trade ties with Asia make it ideal for careers across the region." },
  { icon: "💰", title: "Scholarships available", desc: "Australia Awards, Destination Australia, and university scholarships worth thousands per year for eligible students." },
];

export default function StudyInAustraliaPage() {
  return (
    <>
      <section className="hero-gradient py-16 md:py-24 border-b border-[var(--color-border)]">
        <div className="container-x">
          <div className="max-w-3xl">
            <div className="section-pill mb-5">🇦🇺 Study Destination</div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-navy)] leading-[1.1]">
              Study in Australia
            </h1>
            <p className="mt-5 text-[1.0625rem] text-[var(--color-text-muted)] leading-relaxed max-w-2xl">
              Home to 7 world top-100 universities and up to 5 years of post-study work rights in regional areas. A degree in Australia opens doors across the Asia-Pacific and beyond.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/book" className="btn btn-primary px-6 py-3.5">Book free consultation →</Link>
              <Link href="/universities" className="btn btn-secondary px-6 py-3.5">Browse universities</Link>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[{ n: "43+", l: "Universities" }, { n: "Up to 5yr", l: "Post-study work" }, { n: "7", l: "World top-100 unis" }, { n: "700k+", l: "Int'l students" }].map((s) => (
              <div key={s.l} className="bg-white rounded-2xl p-5 border border-[var(--color-border)] shadow-[var(--shadow-sm)] text-center">
                <div className="text-2xl font-bold text-[var(--color-navy)]">{s.n}</div>
                <div className="text-xs text-[var(--color-text-subtle)] mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="text-center mb-12">
            <div className="section-pill mx-auto mb-4">Why Australia?</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)]">6 reasons to choose Australia</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {whyAustralia.map((w) => (
              <div key={w.title} className="card card-lift p-7">
                <div className="text-3xl mb-4">{w.icon}</div>
                <h3 className="font-bold text-[var(--color-navy)] mb-2">{w.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-surface-muted)]">
        <div className="container-x">
          <div className="text-center mb-12">
            <div className="section-pill mx-auto mb-4">Top universities</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)]">Where our students go</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {topUnis.map((u) => (
              <div key={u.name} className="bg-white rounded-2xl p-6 border border-[var(--color-border)] shadow-[var(--shadow-sm)]">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-bold text-[var(--color-navy)] text-sm">{u.name}</h3>
                  <span className="flex-shrink-0 bg-[var(--color-blue-subtle)] text-[var(--color-blue)] text-xs font-semibold px-2.5 py-1 rounded-full">{u.rank}</span>
                </div>
                <div className="text-xs text-[var(--color-text-subtle)] mb-1">📍 {u.city}</div>
                <div className="text-xs text-[var(--color-text-muted)]">Known for: {u.known}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-x max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-4">Ready to study in Australia?</h2>
          <p className="text-[var(--color-text-muted)] mb-8">Free 30-minute consultation. University shortlist, Student visa, and post-study work guidance included.</p>
          <Link href="/book" className="btn btn-primary px-8 py-4 text-base">Book free consultation →</Link>
        </div>
      </section>
    </>
  );
}
