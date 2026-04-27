import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research Routes + Dependants — MRes, MPhil, PhD in the UK",
  description: "Since January 2024, only Research-level programmes allow dependants in the UK. EdOne specialises in MRes, MPhil and PhD pathways that let you bring your spouse and children.",
};

const researchRoutes = [
  {
    title: "MRes — Master of Research",
    duration: "1 year",
    dependants: "✅ Allowed",
    desc: "A research-focused postgraduate degree. Heavy on independent research, dissertation, and lab/field work. Ideal if you want PhD-level research skills without committing to 3–4 years.",
    tag: "Most popular",
  },
  {
    title: "MPhil — Master of Philosophy",
    duration: "1–2 years",
    dependants: "✅ Allowed",
    desc: "A standalone research degree, or used as a stepping stone to a PhD. Smaller cohort, intensive supervision, deeper specialisation than an MRes.",
    tag: "",
  },
  {
    title: "PhD — Doctor of Philosophy",
    duration: "3–4 years",
    dependants: "✅ Allowed",
    desc: "The highest academic qualification. Full independent research, publishable thesis, viva examination. Funding (scholarships, stipends) is available for competitive applicants.",
    tag: "Best for families — longest stay",
  },
];

const januaryRuleExplained = [
  {
    icon: "❌",
    label: "Taught Masters (MSc, MA, MBA)",
    detail: "Dependants NOT allowed since Jan 2024 (unless you were already enrolled before the rule change)",
  },
  {
    icon: "✅",
    label: "Research degrees (MRes, MPhil, PhD)",
    detail: "Dependants STILL allowed — spouse and children under 18 can join you",
  },
];

const faqs = [
  {
    q: "Can my wife/husband work if they come on a dependant visa?",
    a: "Yes — dependants on a Student Dependant visa have full work rights in the UK. They can take any job, full-time or part-time, without restriction.",
  },
  {
    q: "Can my children go to school?",
    a: "Yes — children on a dependant visa are entitled to free state school education in the UK, exactly like domestic pupils.",
  },
  {
    q: "Is funding available for research degrees?",
    a: "Yes. UKRI scholarships, university bursaries, and department-funded studentships can cover fees and provide a living stipend. We help you identify and apply for funding that matches your profile.",
  },
  {
    q: "I don't have a research background — can I still do an MRes?",
    a: "Often yes. Many MRes programmes accept applicants from a strong taught Masters background. Some require a proposal; others are project-based with supervisors already attached. We assess your eligibility honestly.",
  },
];

export default function ResearchDependantsPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-24 border-b border-[var(--color-border)]">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-pill mb-5">👨‍👩‍👧 UK Families</div>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-navy)] leading-[1.1]">
                Study in the UK and bring your family with you.
              </h1>
              <p className="mt-5 text-[1.0625rem] text-[var(--color-text-muted)] leading-relaxed">
                Since January 2024, only Research-level programmes (MRes, MPhil, PhD) allow dependants. We specialise in finding the right research route that fits your academic profile — and keeps your family together.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/book" className="btn btn-primary px-6 py-3.5">
                  Book free consultation →
                </Link>
                <Link href="#routes" className="btn btn-secondary px-6 py-3.5">
                  See eligible routes
                </Link>
              </div>
            </div>

            {/* Rule change box */}
            <div className="rounded-3xl border-2 border-[var(--color-action)] bg-[var(--color-action-soft)] p-8">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">⚠️</span>
                <h3 className="font-bold text-[var(--color-navy)] text-lg">The January 2024 Rule Change</h3>
              </div>
              <div className="space-y-4">
                {januaryRuleExplained.map((r) => (
                  <div key={r.label} className="flex gap-3 bg-white rounded-2xl p-4">
                    <span className="text-xl flex-shrink-0">{r.icon}</span>
                    <div>
                      <div className="font-semibold text-[var(--color-navy)] text-sm">{r.label}</div>
                      <div className="text-xs text-[var(--color-text-muted)] mt-1 leading-relaxed">{r.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-[var(--color-text-muted)] leading-relaxed">
                Source: UKVI guidance updated January 2024. Rules subject to change — we always verify current status before advising.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligible routes */}
      <section id="routes" className="py-20 bg-white">
        <div className="container-x">
          <div className="text-center mb-12">
            <div className="section-pill mx-auto mb-4">Eligible routes</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)]">
              Research degrees that allow dependants
            </h2>
            <p className="mt-3 text-[var(--color-text-muted)] max-w-xl mx-auto">
              All three routes below allow your spouse and children to join you in the UK.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {researchRoutes.map((r) => (
              <div key={r.title} className="card card-lift p-7 relative">
                {r.tag && (
                  <span className="absolute top-4 right-4 bg-[var(--color-success-soft)] text-[var(--color-success)] text-xs font-bold px-3 py-1 rounded-full">
                    {r.tag}
                  </span>
                )}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">{r.dependants}</span>
                  <span className="text-xs font-semibold text-[var(--color-success)] bg-[var(--color-success-soft)] px-2 py-0.5 rounded-full">Dependants allowed</span>
                </div>
                <h3 className="font-bold text-[var(--color-navy)] text-lg mb-1">{r.title}</h3>
                <div className="text-xs font-semibold text-[var(--color-blue)] mb-3">Duration: {r.duration}</div>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What your family gets */}
      <section className="py-20 bg-[var(--color-surface-muted)]">
        <div className="container-x">
          <div className="text-center mb-12">
            <div className="section-pill mx-auto mb-4">For your family</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)]">
              What your family gets in the UK
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {[
              { icon: "💼", title: "Full work rights", desc: "Your spouse can work any job, any hours, without needing a separate work visa." },
              { icon: "🏫", title: "Free schooling", desc: "Your children are entitled to free state school education — no fees, same as UK pupils." },
              { icon: "🏥", title: "NHS access", desc: "Your family pays the Immigration Health Surcharge (IHS) upfront, then has full NHS access for the visa duration." },
              { icon: "🛂", title: "Stays as long as you", desc: "Dependant visas match your student visa duration — they don't need separate extensions." },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 text-center border border-[var(--color-border)] shadow-[var(--shadow-sm)]">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-[var(--color-navy)] text-sm mb-2">{f.title}</h3>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[var(--color-navy)]">Common questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="card p-6">
                  <h3 className="font-bold text-[var(--color-navy)] mb-2 text-sm">{f.q}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--color-surface-muted)]">
        <div className="container-x">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-4">
              Keep your family together — and advance your career.
            </h2>
            <p className="text-[var(--color-text-muted)] mb-8">
              Book a free consultation. We&apos;ll assess your academic background, recommend the right research route, and handle the entire application and visa process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book" className="btn btn-primary px-8 py-4 text-base">
                Book free consultation →
              </Link>
              <Link href="/services/uk-2nd-masters" className="btn btn-secondary px-8 py-4 text-base">
                Explore 2nd Master&apos;s →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
