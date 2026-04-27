import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Study in Canada — Universities, PGWP & Visa Guide",
  description: "Study in Canada: top universities, 3-year Post-Graduate Work Permit, pathway to permanent residency, and how EdOne gets you an offer.",
};

const topUnis = [
  { name: "University of Toronto", rank: "Top 25 world", city: "Toronto, ON", known: "Business, Engineering, Medicine" },
  { name: "University of British Columbia", rank: "Top 40 world", city: "Vancouver, BC", known: "Forestry, Sciences, Arts" },
  { name: "McGill University", rank: "Top 50 world", city: "Montreal, QC", known: "Medicine, Law, Music" },
  { name: "University of Waterloo", rank: "Top 150 world", city: "Waterloo, ON", known: "Computer Science, Engineering, Co-op" },
  { name: "York University", rank: "Top 500 world", city: "Toronto, ON", known: "Business, Law, Arts" },
  { name: "Ryerson University (TMU)", rank: "Top Canadian", city: "Toronto, ON", known: "Business, Engineering, Media" },
];

const whyCanada = [
  { icon: "🛂", title: "3-year work permit (PGWP)", desc: "Graduates from eligible programmes get a Post-Graduate Work Permit for up to 3 years — work anywhere in Canada." },
  { icon: "🏠", title: "Pathway to permanent residency", desc: "Express Entry and Provincial Nominee Programs actively reward Canadian study and work experience for PR applications." },
  { icon: "🎓", title: "3 world top-50 universities", desc: "U of T, UBC, and McGill rank among the world's best. Degrees are globally recognised, especially in the US." },
  { icon: "🤝", title: "Bilingual advantage", desc: "French-English bilingualism opens doors across the world. Quebec offers unique immigration pathways for French speakers." },
  { icon: "🌨️", title: "Safe, welcoming country", desc: "Canada consistently ranks as one of the safest, most welcoming countries for international students and immigrants." },
  { icon: "💰", title: "Lower fees than the US", desc: "Top-tier education at significantly lower tuition than comparable US universities — and living costs outside Toronto/Vancouver are very affordable." },
];

export default function StudyInCanadaPage() {
  return (
    <>
      <section className="hero-gradient py-16 md:py-24 border-b border-[var(--color-border)]">
        <div className="container-x">
          <div className="max-w-3xl">
            <div className="section-pill mb-5">🇨🇦 Study Destination</div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-navy)] leading-[1.1]">Study in Canada</h1>
            <p className="mt-5 text-[1.0625rem] text-[var(--color-text-muted)] leading-relaxed max-w-2xl">
              A 3-year work permit after graduation, a clear PR pathway, and world-class universities — Canada is one of the most strategically valuable study destinations for international students.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/book" className="btn btn-primary px-6 py-3.5">Book free consultation →</Link>
              <Link href="/universities" className="btn btn-secondary px-6 py-3.5">Browse universities</Link>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[{ n: "96+", l: "Universities" }, { n: "3 years", l: "Post-grad work permit" }, { n: "Top 3", l: "World top-50 unis" }, { n: "800k+", l: "Int'l students" }].map((s) => (
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
            <div className="section-pill mx-auto mb-4">Why Canada?</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)]">6 reasons to choose Canada</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {whyCanada.map((w) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-4">Ready to study in Canada?</h2>
          <p className="text-[var(--color-text-muted)] mb-8">Free consultation. We handle your university application, Student visa (study permit), and PGWP strategy end-to-end.</p>
          <Link href="/book" className="btn btn-primary px-8 py-4 text-base">Book free consultation →</Link>
        </div>
      </section>
    </>
  );
}
