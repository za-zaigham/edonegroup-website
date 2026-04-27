import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Second Master's in the UK — Stay on the Graduate Route",
  description: "Already in the UK on a Graduate Route visa? Enrol in a second Master's degree to extend your stay, switch fields, or stack qualifications. EdOne finds the right MSc for your profile.",
};

const benefits = [
  { icon: "🛂", title: "Keep your Graduate Route visa active", desc: "Enrolling in a new degree resets your visa clock, giving you 2 more years post-graduation on the Graduate Route." },
  { icon: "🔄", title: "Switch fields without losing your status", desc: "Done with your first MSc but want to pivot careers? A well-chosen second Master's lets you change direction and stay legally." },
  { icon: "📈", title: "Stack qualifications for stronger job prospects", desc: "Dual Master's holders are rare and highly valued. The right combination of subjects opens doors to specialist roles." },
  { icon: "💷", title: "No tuition increase for most universities", desc: "Home/EU fee rates no longer apply, but many UK universities offer competitive fees for international students on their second degree." },
];

const whyEdOne = [
  { n: "01", t: "We assess your current visa status", d: "We check your current visa expiry, Graduate Route eligibility, and any restrictions before recommending anything." },
  { n: "02", t: "We build a personalised shortlist", d: "3–5 universities where your first degree, GPA, and career goals genuinely fit — not the ones with the highest commission." },
  { n: "03", t: "We handle the full application", d: "Personal statement, references, IELTS if needed, CAS, and Student visa application. You focus on the interview." },
  { n: "04", t: "We stay with you after the offer", d: "Accommodation, pre-arrival checklist, bank account setup, and National Insurance registration once you arrive." },
];

const popularCombos = [
  { first: "BSc Computer Science", second: "MSc Data Science / AI", unis: "Manchester, Birmingham, Leeds" },
  { first: "MSc Finance", second: "MSc FinTech / Investment Banking", unis: "Cass, Queen Mary, Brunel" },
  { first: "MBA", second: "MSc Project Management", unis: "Coventry, Northumbria, Portsmouth" },
  { first: "MSc Marketing", second: "MSc Digital Marketing", unis: "Leeds Beckett, De Montfort, UWE" },
  { first: "BEng Engineering", second: "MSc Construction Management", unis: "Birmingham City, Salford, Greenwich" },
];

export default function UK2ndMastersPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-24 border-b border-[var(--color-border)]">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-pill mb-5">🇬🇧 Already in the UK?</div>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-navy)] leading-[1.1]">
                Second Master&apos;s in the UK — Stay, Pivot, Progress.
              </h1>
              <p className="mt-5 text-[1.0625rem] text-[var(--color-text-muted)] leading-relaxed">
                If you&apos;re on a Graduate Route visa and want to stay in the UK longer, a second Master&apos;s is one of the smartest moves available. We find the right course for your goals — not the easiest one.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/book" className="btn btn-primary px-6 py-3.5">
                  Book free consultation →
                </Link>
                <Link href="#how-it-works" className="btn btn-secondary px-6 py-3.5">
                  How it works
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-5 pt-6 border-t border-[var(--color-border)]">
                {["Graduate Route specialist", "96% offer rate", "Free consultation"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)]">
                    <span className="text-[var(--color-success)]">✓</span> {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Info card */}
            <div className="rounded-3xl bg-[var(--color-navy)] text-white p-8 shadow-[var(--shadow-xl)]">
              <h3 className="font-bold text-lg mb-5">Who is this for?</h3>
              <ul className="space-y-4">
                {[
                  "You&apos;re in the UK on a Graduate Route visa (2-year post-study work)",
                  "Your visa is expiring and you want more time in the UK",
                  "You want to change career direction without leaving the country",
                  "You have a Masters but want a second specialisation",
                  "You&apos;re looking for ARUL or research-level funding pathways",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-[var(--color-action)] flex items-center justify-center text-white flex-shrink-0 text-xs font-bold">{i + 1}</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs text-white/50 leading-relaxed">
                  Note: UKVI rules change frequently. We always verify your eligibility before recommending any course. Last updated: April 2026.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="text-center mb-12">
            <div className="section-pill mx-auto mb-4">Why a 2nd Master&apos;s?</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)]">The strategic case</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="card p-7 flex gap-4">
                <div className="text-3xl flex-shrink-0">{b.icon}</div>
                <div>
                  <h3 className="font-bold text-[var(--color-navy)] mb-1.5">{b.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular combinations */}
      <section className="py-20 bg-[var(--color-surface-muted)]">
        <div className="container-x">
          <div className="text-center mb-12">
            <div className="section-pill mx-auto mb-4">Course ideas</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)]">Popular 2nd Master&apos;s combinations</h2>
            <p className="mt-3 text-[var(--color-text-muted)] max-w-xl mx-auto">
              These pairings consistently produce strong job outcomes and university acceptance rates.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden shadow-[var(--shadow-sm)]">
              <thead>
                <tr className="bg-[var(--color-navy)] text-white text-sm">
                  <th className="text-left px-6 py-4 font-semibold">Your 1st degree</th>
                  <th className="text-left px-6 py-4 font-semibold">Ideal 2nd Master&apos;s</th>
                  <th className="text-left px-6 py-4 font-semibold">Example universities</th>
                </tr>
              </thead>
              <tbody>
                {popularCombos.map((c, i) => (
                  <tr key={i} className={`border-t border-[var(--color-border)] text-sm ${i % 2 === 0 ? "bg-white" : "bg-[var(--color-surface-muted)]"}`}>
                    <td className="px-6 py-4 text-[var(--color-navy)] font-medium">{c.first}</td>
                    <td className="px-6 py-4 text-[var(--color-blue)] font-semibold">{c.second}</td>
                    <td className="px-6 py-4 text-[var(--color-text-muted)]">{c.unis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-center text-[var(--color-text-subtle)]">
            Don&apos;t see your field? <Link href="/book" className="text-[var(--color-blue)] underline">Book a consultation</Link> — we&apos;ll build a bespoke shortlist for your profile.
          </p>
        </div>
      </section>

      {/* How EdOne helps */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container-x">
          <div className="text-center mb-12">
            <div className="section-pill mx-auto mb-4">Our process</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)]">How EdOne helps you</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {whyEdOne.map((s) => (
              <div key={s.n} className="card p-6 text-center">
                <div className="text-xs font-mono font-bold text-[var(--color-blue)] mb-3 tracking-widest">{s.n}</div>
                <h3 className="font-bold text-[var(--color-navy)] mb-2 text-sm">{s.t}</h3>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--color-surface-muted)]">
        <div className="container-x">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-4">
              Ready to find your second Master&apos;s?
            </h2>
            <p className="text-[var(--color-text-muted)] mb-8">
              Book a free 30-minute call. We&apos;ll assess your visa status, review your academic background, and give you a shortlist of courses that genuinely fit.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book" className="btn btn-primary px-8 py-4 text-base">
                Book free consultation →
              </Link>
              <Link href="/services/uk-research-dependants" className="btn btn-secondary px-8 py-4 text-base">
                Need to bring family? →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
