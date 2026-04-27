import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Study in the UK — Universities, Visas & Graduate Route",
  description: "Everything you need to know about studying in the UK: top universities, Student visa process, Graduate Route post-study work, and how EdOne gets you there.",
};

const topUnis = [
  { name: "University of Manchester", rank: "Top 30 world", city: "Manchester", known: "Business, Engineering, Sciences" },
  { name: "University of Edinburgh", rank: "Top 20 world", city: "Edinburgh", known: "Medicine, Law, Arts" },
  { name: "University of Birmingham", rank: "Top 100 world", city: "Birmingham", known: "Finance, Computer Science, MBA" },
  { name: "University of Leeds", rank: "Top 100 world", city: "Leeds", known: "Engineering, Business, Medicine" },
  { name: "Queen Mary University", rank: "Top 150 world", city: "London", known: "Law, Medicine, Sciences" },
  { name: "Coventry University", rank: "Top UK modern", city: "Coventry", known: "Business, Engineering, Art & Design" },
];

const visaSteps = [
  { n: "01", t: "Get your university offer", d: "Apply through UCAS or directly. You need an unconditional offer before you can apply for a Student visa." },
  { n: "02", t: "Receive your CAS number", d: "Your university sends a Confirmation of Acceptance for Studies (CAS). This is required for your visa application." },
  { n: "03", t: "Apply for Student visa", d: "Apply online up to 6 months before your course starts. You'll need IELTS, bank statements, and a TB test (for some countries)." },
  { n: "04", t: "Arrive and enrol", d: "Collect your BRP card within 10 days of arrival. Attend university induction and enrol on your programme." },
  { n: "05", t: "Graduate Route after study", d: "After graduating, switch to the 2-year Graduate Route (or 3 years for PhD) to work anywhere in the UK." },
];

const whyUK = [
  { icon: "🎓", title: "World-class universities", desc: "4 of the world's top 10 universities are in the UK. Over 130 universities, many with century-old reputations." },
  { icon: "⏱️", title: "Short course durations", desc: "Most UK Masters are 1 year (vs 2 years in the US/Canada), saving you time and tuition fees." },
  { icon: "🛂", title: "Graduate Route visa", desc: "Stay 2 years after graduating to work (or 3 years for PhD graduates). No job offer required." },
  { icon: "💼", title: "Global employer access", desc: "London is Europe's largest financial centre. UK degrees are recognised worldwide, especially in Commonwealth nations." },
  { icon: "🌍", title: "Cultural diversity", desc: "Over 500,000 international students in the UK. One of the most multicultural student environments in the world." },
  { icon: "💷", title: "Scholarships available", desc: "Chevening, GREAT, and hundreds of university-specific scholarships for international students every year." },
];

export default function StudyInUKPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-24 border-b border-[var(--color-border)]">
        <div className="container-x">
          <div className="max-w-3xl">
            <div className="section-pill mb-5">🇬🇧 Study Destination</div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-navy)] leading-[1.1]">
              Study in the United Kingdom
            </h1>
            <p className="mt-5 text-[1.0625rem] text-[var(--color-text-muted)] leading-relaxed max-w-2xl">
              Home to 4 of the world&apos;s top 10 universities, a 2-year Graduate Route visa, and some of the most internationally respected degrees on earth. EdOne gets you in.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/book" className="btn btn-primary px-6 py-3.5">
                Book free consultation →
              </Link>
              <Link href="/universities" className="btn btn-secondary px-6 py-3.5">
                Browse UK universities
              </Link>
            </div>
          </div>

          {/* Quick stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { n: "130+", l: "Universities" },
              { n: "1 year", l: "Most Masters degrees" },
              { n: "2 years", l: "Graduate Route visa" },
              { n: "500k+", l: "International students" },
            ].map((s) => (
              <div key={s.l} className="bg-white rounded-2xl p-5 border border-[var(--color-border)] shadow-[var(--shadow-sm)] text-center">
                <div className="text-2xl font-bold text-[var(--color-navy)]">{s.n}</div>
                <div className="text-xs text-[var(--color-text-subtle)] mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why UK */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="text-center mb-12">
            <div className="section-pill mx-auto mb-4">Why the UK?</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)]">
              6 reasons students choose the UK
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {whyUK.map((w) => (
              <div key={w.title} className="card card-lift p-7">
                <div className="text-3xl mb-4">{w.icon}</div>
                <h3 className="font-bold text-[var(--color-navy)] mb-2">{w.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top universities */}
      <section className="py-20 bg-[var(--color-surface-muted)]">
        <div className="container-x">
          <div className="text-center mb-12">
            <div className="section-pill mx-auto mb-4">Where our students go</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)]">
              Top UK universities we work with
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {topUnis.map((u) => (
              <div key={u.name} className="bg-white rounded-2xl p-6 border border-[var(--color-border)] shadow-[var(--shadow-sm)]">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-bold text-[var(--color-navy)] text-sm">{u.name}</h3>
                  <span className="flex-shrink-0 bg-[var(--color-blue-subtle)] text-[var(--color-blue)] text-xs font-semibold px-2.5 py-1 rounded-full">
                    {u.rank}
                  </span>
                </div>
                <div className="text-xs text-[var(--color-text-subtle)] mb-1">📍 {u.city}</div>
                <div className="text-xs text-[var(--color-text-muted)]">Known for: {u.known}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-[var(--color-text-muted)]">
            We work with 50+ UK universities.{" "}
            <Link href="/universities" className="text-[var(--color-blue)] font-semibold hover:underline">
              Browse the full list →
            </Link>
          </p>
        </div>
      </section>

      {/* Visa process */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="text-center mb-12">
            <div className="section-pill mx-auto mb-4">Visa process</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)]">
              UK Student visa — step by step
            </h2>
            <p className="mt-3 text-[var(--color-text-muted)] max-w-xl mx-auto">
              We handle every step of this process for you. But here&apos;s how it works end-to-end.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {visaSteps.map((s) => (
              <div key={s.n} className="flex gap-5 items-start card p-6">
                <div className="w-10 h-10 rounded-2xl bg-[var(--color-navy)] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {s.n}
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-navy)] mb-1">{s.t}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Already in UK callout */}
      <section className="py-16 bg-[var(--color-blue-subtle)] border-y border-[var(--color-blue-soft)]">
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link href="/services/uk-2nd-masters" className="group card card-lift p-7">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="font-bold text-[var(--color-navy)] text-lg mb-2 group-hover:text-[var(--color-blue)] transition">
                Already in the UK? Do a 2nd Master&apos;s
              </h3>
              <p className="text-sm text-[var(--color-text-muted)]">Keep your Graduate Route active, switch fields, and extend your stay.</p>
              <div className="mt-4 text-sm font-semibold text-[var(--color-blue)]">Learn more →</div>
            </Link>
            <Link href="/services/uk-research-dependants" className="group card card-lift p-7">
              <div className="text-3xl mb-4">👨‍👩‍👧</div>
              <h3 className="font-bold text-[var(--color-navy)] text-lg mb-2 group-hover:text-[var(--color-blue)] transition">
                Want to bring your family?
              </h3>
              <p className="text-sm text-[var(--color-text-muted)]">Only Research routes (MRes/MPhil/PhD) allow dependants since Jan 2024.</p>
              <div className="mt-4 text-sm font-semibold text-[var(--color-blue)]">Learn more →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-4">
              Ready to study in the UK?
            </h2>
            <p className="text-[var(--color-text-muted)] mb-8">
              Free 30-minute consultation. We&apos;ll match you with the right university, handle your application, and support your visa end-to-end.
            </p>
            <Link href="/book" className="btn btn-primary px-8 py-4 text-base">
              Book free consultation →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
