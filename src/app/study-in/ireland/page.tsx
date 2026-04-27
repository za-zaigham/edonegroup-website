import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Study in Ireland — Universities, Visas & 2-Year Stayback",
  description: "Study in Ireland: top universities, 2-year Third Level Graduate Programme stayback, EU access, and how EdOne gets you an offer.",
};

const topUnis = [
  { name: "University College Dublin", rank: "Top 200 world", city: "Dublin", known: "Business, Engineering, Medicine" },
  { name: "Trinity College Dublin", rank: "Top 100 world", city: "Dublin", known: "Law, Arts, Computer Science" },
  { name: "University College Cork", rank: "Top 300 world", city: "Cork", known: "Pharmacy, Sciences, Business" },
  { name: "National University of Ireland Galway", rank: "Top 300 world", city: "Galway", known: "Engineering, Medicine, Arts" },
  { name: "Dublin City University", rank: "Top 500 world", city: "Dublin", known: "Business, Communications, STEM" },
  { name: "Technological University Dublin", rank: "Top Irish modern", city: "Dublin", known: "Engineering, Hospitality, Design" },
];

const whyIreland = [
  { icon: "🛂", title: "2-year graduate stayback", desc: "The Third Level Graduate Programme gives non-EEA graduates 2 years to find work in Ireland after completing their degree." },
  { icon: "🇪🇺", title: "EU/EEA job market access", desc: "Working in Ireland gives exposure to the EU single market. Many multinationals use their Irish office as the European HQ." },
  { icon: "🏢", title: "Tech hub of Europe", desc: "Google, Meta, Apple, and Microsoft all have their European headquarters in Dublin. Exceptional opportunities for tech graduates." },
  { icon: "🌧️", title: "English-speaking EU member", desc: "The only native English-speaking country in the EU — a huge advantage for career mobility across Europe after graduation." },
  { icon: "🎓", title: "Quality education system", desc: "Irish universities consistently rank in world top-300 and are known for strong industry links, especially in pharma and tech." },
  { icon: "💰", title: "Scholarships available", desc: "Government of Ireland International Education Scholarships and university bursaries available for high-achieving international students." },
];

export default function StudyInIrelandPage() {
  return (
    <>
      <section className="hero-gradient py-16 md:py-24 border-b border-[var(--color-border)]">
        <div className="container-x">
          <div className="max-w-3xl">
            <div className="section-pill mb-5">🇮🇪 Study Destination</div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-navy)] leading-[1.1]">Study in Ireland</h1>
            <p className="mt-5 text-[1.0625rem] text-[var(--color-text-muted)] leading-relaxed max-w-2xl">
              The only English-speaking EU member state, home to Europe&apos;s biggest tech companies, and with a 2-year post-study work option. Ireland is a smart, underrated destination.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/book" className="btn btn-primary px-6 py-3.5">Book free consultation →</Link>
              <Link href="/universities" className="btn btn-secondary px-6 py-3.5">Browse universities</Link>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[{ n: "34+", l: "Universities & IoTs" }, { n: "2 years", l: "Graduate stayback" }, { n: "EU access", l: "Job market" }, { n: "32k+", l: "Int'l students" }].map((s) => (
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
            <div className="section-pill mx-auto mb-4">Why Ireland?</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)]">6 reasons to choose Ireland</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {whyIreland.map((w) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-4">Ready to study in Ireland?</h2>
          <p className="text-[var(--color-text-muted)] mb-8">Free consultation. We handle university applications, Irish Student visa, and post-graduation stayback strategy.</p>
          <Link href="/book" className="btn btn-primary px-8 py-4 text-base">Book free consultation →</Link>
        </div>
      </section>
    </>
  );
}
