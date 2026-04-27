import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Study in the USA — Universities, F-1 Visa & OPT Guide",
  description: "Study in the USA: Ivy League and top universities, F-1 student visa, 3-year STEM OPT extension, and how EdOne gets you an offer.",
};

const topUnis = [
  { name: "MIT", rank: "#1 world", city: "Cambridge, MA", known: "Engineering, Computer Science, Sciences" },
  { name: "Stanford University", rank: "Top 5 world", city: "Stanford, CA", known: "Tech, Business, Medicine" },
  { name: "University of Michigan", rank: "Top 25 world", city: "Ann Arbor, MI", known: "Engineering, Business (Ross), Medicine" },
  { name: "New York University (NYU)", rank: "Top 40 world", city: "New York, NY", known: "Business, Law, Arts, Media" },
  { name: "University of Texas at Austin", rank: "Top 100 world", city: "Austin, TX", known: "Engineering, Business, Computer Science" },
  { name: "Arizona State University", rank: "Top US public", city: "Tempe, AZ", known: "Business, Engineering, Sustainability" },
];

const whyUSA = [
  { icon: "🏆", title: "Home to the world's best universities", desc: "8 of the world's top 10 universities are in the USA. An American degree is the most globally recognised academic credential." },
  { icon: "💻", title: "STEM OPT: 3 years post-study work", desc: "STEM graduates can extend their Optional Practical Training to 3 years — giving significant time to find sponsorship for an H-1B." },
  { icon: "🤝", title: "Unmatched industry networks", desc: "Silicon Valley, Wall Street, Hollywood, and Washington DC — campus proximity to major industry hubs creates career advantages unavailable elsewhere." },
  { icon: "🔬", title: "Research funding and labs", desc: "US universities receive more research funding than any country on earth. PhD and research students access world-leading facilities." },
  { icon: "🌎", title: "Diversity and scale", desc: "Over 1 million international students. Campuses range from intimate liberal arts colleges to flagship state universities of 50,000+ students." },
  { icon: "🎓", title: "Flexible degree structures", desc: "Many US programmes allow you to change your major, take electives across disciplines, and design a bespoke academic path." },
];

export default function StudyInUSAPage() {
  return (
    <>
      <section className="hero-gradient py-16 md:py-24 border-b border-[var(--color-border)]">
        <div className="container-x">
          <div className="max-w-3xl">
            <div className="section-pill mb-5">🇺🇸 Study Destination</div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-navy)] leading-[1.1]">Study in the United States</h1>
            <p className="mt-5 text-[1.0625rem] text-[var(--color-text-muted)] leading-relaxed max-w-2xl">
              The world&apos;s most recognised university system. From Ivy League to top state schools — EdOne helps you build the application that gets you in.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/book" className="btn btn-primary px-6 py-3.5">Book free consultation →</Link>
              <Link href="/universities" className="btn btn-secondary px-6 py-3.5">Browse universities</Link>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[{ n: "4,000+", l: "Accredited universities" }, { n: "3 years", l: "STEM OPT" }, { n: "8 of top 10", l: "World rankings" }, { n: "1M+", l: "Int'l students" }].map((s) => (
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
            <div className="section-pill mx-auto mb-4">Why the USA?</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)]">6 reasons to choose the USA</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {whyUSA.map((w) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-4">Ready to study in the USA?</h2>
          <p className="text-[var(--color-text-muted)] mb-8">Free consultation. We guide you through university selection, F-1 visa application, and OPT/STEM OPT planning.</p>
          <Link href="/book" className="btn btn-primary px-8 py-4 text-base">Book free consultation →</Link>
        </div>
      </section>
    </>
  );
}
