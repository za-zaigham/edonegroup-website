import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About EdOne Group — Honest Education Consultancy",
  description: "EdOne Group is a UK-based education consultancy founded to give international students the same honest advice we'd give our own families. Meet our team and mission.",
};

const values = [
  { icon: "🤝", title: "Honest above everything", desc: "We tell you what we'd tell our siblings. If a university isn't right for your profile, we won't apply there — regardless of commission." },
  { icon: "🎯", title: "Outcome-focused", desc: "We measure success by one thing: students in the right university for their goals, not the easiest application to submit." },
  { icon: "📚", title: "Expertise-first", desc: "Our counsellors specialise in specific destinations and qualification levels. You don't get a generalist — you get a specialist." },
  { icon: "🌍", title: "Culturally aware", desc: "We work with students from 40+ countries and understand the financial, family, and cultural pressures around studying abroad." },
];

const stats = [
  { n: "96%",  l: "Offer rate"           },
  { n: "40+",  l: "Countries served"     },
  { n: "50+",  l: "Universities worldwide" },
  { n: "5",    l: "Study destinations"   },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-24 border-b border-[var(--color-border)]">
        <div className="container-x">
          <div className="max-w-3xl">
            <div className="section-pill mb-5">About us</div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-navy)] leading-[1.1]">
              We give students the advice we&apos;d give our own families.
            </h1>
            <p className="mt-5 text-[1.0625rem] text-[var(--color-text-muted)] leading-relaxed max-w-2xl">
              EdOne Group was founded after seeing too many students pay for consultancy services that prioritised commission over outcomes. We built the company we wished existed — one where honest advice is the only product.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-white border-b border-[var(--color-border)]">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-4xl font-bold text-[var(--color-navy)] tracking-tight">{s.n}</div>
                <div className="text-sm text-[var(--color-text-muted)] mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-[var(--color-surface-muted)]">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-pill mb-5">Our mission</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-5">
                Remove the guesswork from going to university abroad.
              </h2>
              <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
                <p>
                  Choosing a university in another country is one of the biggest decisions a person will make. The stakes are enormous — financially, professionally, and personally. Yet most students navigate this process with incomplete information, unreliable advice, or consultancies that are quietly paid by the universities they recommend.
                </p>
                <p>
                  EdOne Group exists to change that. We work for students, not universities. Our business model is transparent: we charge a service fee, disclosed upfront, and we earn nothing from the universities we recommend. That means our shortlist is genuinely built around your profile, goals, and constraints.
                </p>
                <p>
                  We specialise in the UK, Australia, Canada, USA, and Ireland — destinations we know deeply, including the visa rules, university entry requirements, scholarship landscape, and job market outcomes that follow graduation.
                </p>
              </div>
            </div>
            <div className="rounded-3xl navy-gradient p-10 text-white">
              <h3 className="text-xl font-bold mb-6">What we&apos;re not</h3>
              <ul className="space-y-4">
                {[
                  "We're not paid by universities to recommend them",
                  "We don't apply to universities where your profile won't be competitive",
                  "We don't disappear after you get an offer — visa, accommodation, arrival support all included",
                  "We don't use pressure tactics or artificial urgency",
                  "We don't give the same generic advice to every student",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                    <span className="text-[var(--color-action)] mt-0.5 flex-shrink-0 font-bold">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="text-center mb-12">
            <div className="section-pill mx-auto mb-4">How we work</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)]">Our values</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {values.map((v) => (
              <div key={v.title} className="card p-7 flex gap-4">
                <div className="text-3xl flex-shrink-0">{v.icon}</div>
                <div>
                  <h3 className="font-bold text-[var(--color-navy)] mb-2">{v.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialist services callout */}
      <section className="py-16 bg-[var(--color-surface-muted)] border-y border-[var(--color-border)]">
        <div className="container-x text-center">
          <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-3">Already in the UK?</h2>
          <p className="text-[var(--color-text-muted)] max-w-xl mx-auto mb-6">
            We have two specialist tracks for students already studying or living in the UK.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services/uk-2nd-masters" className="btn btn-secondary px-6 py-3">UK 2nd Master&apos;s →</Link>
            <Link href="/services/uk-research-dependants" className="btn btn-secondary px-6 py-3">Research + Dependants →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-x max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-4">Ready to work with us?</h2>
          <p className="text-[var(--color-text-muted)] mb-8">Book a free 30-minute consultation. We&apos;ll tell you exactly what&apos;s realistic for your profile — no cost, no pressure.</p>
          <Link href="/book" className="btn btn-primary px-8 py-4 text-base">Book free consultation →</Link>
        </div>
      </section>
    </>
  );
}
