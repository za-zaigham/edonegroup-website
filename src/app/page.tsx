import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-x py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-xs font-medium text-[var(--color-primary)]">
              UK · Australia · Canada · USA · Europe
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight">
              Your route to a world-class university — with honest counselling.
            </h1>
            <p className="mt-5 text-lg text-[var(--color-text-muted)] max-w-xl">
              EdOne Group helps international students — and UK-based students looking
              for their next step — into universities across the UK, Australia, Canada,
              USA, and Europe. Free first consultation. No pressure.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/book"
                className="inline-flex items-center px-5 py-3 rounded-[var(--radius-md)] bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary-hover)] transition"
              >
                Book a free consultation
              </Link>
              <Link
                href="/universities"
                className="inline-flex items-center px-5 py-3 rounded-[var(--radius-md)] border border-[var(--color-border-strong)] font-medium hover:bg-[var(--color-surface-muted)] transition"
              >
                Browse universities
              </Link>
            </div>
            <p className="mt-6 text-sm text-[var(--color-text-subtle)]">
              Trusted by students from 15+ countries · 50+ partner universities
            </p>
          </div>

          <div className="relative h-80 md:h-96 rounded-[var(--radius-2xl)] bg-gradient-to-br from-[var(--color-primary-soft)] via-white to-[var(--color-surface-muted)] border border-[var(--color-border)] shadow-[var(--shadow-md)] grid place-items-center">
            <div className="text-center px-6">
              <div className="text-5xl mb-3">🎓</div>
              <p className="text-sm text-[var(--color-text-muted)]">
                (Hero photography to be replaced — student on campus)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED OFFERS — UK 2nd Masters + Research/Dependants */}
      <section className="bg-[var(--color-surface-muted)] py-20">
        <div className="container-x">
          <div className="text-center mb-12">
            <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium text-[var(--color-primary)] border border-[var(--color-border)]">
              Already in the UK?
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
              Discover your next step.
            </h2>
            <p className="mt-3 text-[var(--color-text-muted)] max-w-2xl mx-auto">
              Two specialist tracks for UK-based students — designed around current visa rules.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/services/uk-2nd-masters"
              className="group rounded-[var(--radius-2xl)] bg-[var(--color-surface)] border border-[var(--color-border)] p-8 hover:border-[var(--color-primary)] transition shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]"
            >
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-xl font-semibold tracking-tight">
                Second Master&apos;s in the UK
              </h3>
              <p className="mt-2 text-[var(--color-text-muted)] text-sm">
                Keep your Graduate Route visa active, switch fields, or stack qualifications
                with a smartly-chosen 2nd MSc. We find the right fit, not the easiest one.
              </p>
              <span className="mt-5 inline-flex items-center text-sm font-medium text-[var(--color-primary)] group-hover:translate-x-0.5 transition">
                Learn more →
              </span>
            </Link>

            <Link
              href="/services/uk-research-dependants"
              className="group rounded-[var(--radius-2xl)] bg-[var(--color-surface)] border border-[var(--color-border)] p-8 hover:border-[var(--color-primary)] transition shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]"
            >
              <div className="text-3xl mb-4">👨‍👩‍👧</div>
              <h3 className="text-xl font-semibold tracking-tight">
                Research routes for families
              </h3>
              <p className="mt-2 text-[var(--color-text-muted)] text-sm">
                MRes, MPhil, and PhD options that still allow dependants under post-Jan-2024
                UK rules. Bring your spouse and children with you.
              </p>
              <span className="mt-5 inline-flex items-center text-sm font-medium text-[var(--color-primary)] group-hover:translate-x-0.5 transition">
                Learn more →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* COUNTRY SELECTOR */}
      <section className="py-20">
        <div className="container-x">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Where do you want to study?
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: "United Kingdom", flag: "🇬🇧", slug: "uk", note: "2-year Graduate Route" },
              { name: "Australia", flag: "🇦🇺", slug: "australia", note: "Up to 5-yr regional PSW" },
              { name: "Canada", flag: "🇨🇦", slug: "canada", note: "3-year PGWP" },
              { name: "United States", flag: "🇺🇸", slug: "usa", note: "STEM OPT extension" },
              { name: "Ireland", flag: "🇮🇪", slug: "ireland", note: "2-year stayback" },
            ].map((c) => (
              <Link
                key={c.slug}
                href={`/study-in/${c.slug}`}
                className="rounded-[var(--radius-xl)] bg-[var(--color-surface)] border border-[var(--color-border)] p-5 text-center hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-md)] transition"
              >
                <div className="text-3xl mb-2">{c.flag}</div>
                <div className="text-sm font-semibold">{c.name}</div>
                <div className="text-xs text-[var(--color-text-muted)] mt-1">{c.note}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[var(--color-surface-muted)] py-20">
        <div className="container-x">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">How EdOne works</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Free consultation", d: "30-minute call to understand your goals, profile, and constraints." },
              { n: "02", t: "Personalised shortlist", d: "We hand-pick 3–5 universities that match your fit, not our commission." },
              { n: "03", t: "Application + visa", d: "End-to-end support: docs, statements, interviews, CAS, visa filing." },
              { n: "04", t: "Pre-departure & arrival", d: "Accommodation, banking, SIM, airport pickup — we stay with you." },
            ].map((s) => (
              <div key={s.n} className="rounded-[var(--radius-xl)] bg-[var(--color-surface)] border border-[var(--color-border)] p-6">
                <div className="text-xs font-mono text-[var(--color-primary)] mb-2">{s.n}</div>
                <h3 className="font-semibold tracking-tight">{s.t}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-x">
          <div className="rounded-[var(--radius-2xl)] bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] p-10 md:p-14 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Talk to a counsellor today.
            </h2>
            <p className="mt-3 max-w-2xl mx-auto opacity-95">
              No cost. No pressure. We&apos;ll tell you what we&apos;d tell our siblings.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                href="/book"
                className="inline-flex items-center px-5 py-3 rounded-[var(--radius-md)] bg-white text-[var(--color-primary)] font-medium hover:bg-white/95 transition"
              >
                Book a consultation
              </Link>
              <a
                href="https://wa.me/447000000000"
                className="inline-flex items-center px-5 py-3 rounded-[var(--radius-md)] bg-white/10 border border-white/30 text-white font-medium hover:bg-white/20 transition"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
