import Link from "next/link";
import { FAQ } from "@/components/FAQ";

/* ── Hero visual — floating student result cards ── */
const heroResults = [
  { flag: "🇬🇧", name: "Aisha R.", uni: "University of Manchester", field: "MSc Data Science" },
  { flag: "🇦🇺", name: "Omar K.", uni: "University of Melbourne", field: "MBA" },
  { flag: "🇨🇦", name: "Priya S.", uni: "University of Toronto", field: "MSc Finance" },
];

/* ── Destinations ── */
const destinations = [
  { name: "United Kingdom", flag: "🇬🇧", slug: "uk", note: "2-yr Graduate Route visa", color: "#DBEAFE" },
  { name: "Australia", flag: "🇦🇺", slug: "australia", note: "Up to 5-yr regional PSW", color: "#D1FAE5" },
  { name: "Canada", flag: "🇨🇦", slug: "canada", note: "3-yr Post-Grad Work Permit", color: "#FEF3C7" },
  { name: "United States", flag: "🇺🇸", slug: "usa", note: "STEM OPT extension", color: "#FCE7F3" },
  { name: "Ireland", flag: "🇮🇪", slug: "ireland", note: "2-yr stayback visa", color: "#E0E7FF" },
];

/* ── Testimonials ── */
const testimonials = [
  {
    name: "Fatima Al-Hassan",
    from: "🇵🇰 Pakistan",
    to: "University of Birmingham",
    course: "MSc Computer Science",
    quote:
      "EdOne found me a course that kept my Graduate Route active AND matched my career goals. I'd applied to 3 universities on my own with no luck — they got me an offer in 6 weeks.",
    initials: "FA",
    color: "#DBEAFE",
  },
  {
    name: "Kwame Asante",
    from: "🇬🇭 Ghana",
    to: "University of Leeds",
    course: "MRes Biomedical Sciences",
    quote:
      "My biggest worry was bringing my wife and daughter. EdOne knew exactly which research routes still allow dependants. They handled everything — visa, accommodation, the works.",
    initials: "KA",
    color: "#D1FAE5",
  },
  {
    name: "Mei-Ling Chen",
    from: "🇨🇳 China",
    to: "Monash University",
    course: "Master of Finance",
    quote:
      "Honest, fast, and no pressure. They told me upfront which universities were realistic for my GPA and which weren't. Got into my first choice. Couldn't recommend more.",
    initials: "MC",
    color: "#FEF3C7",
  },
];

/* ── Partner universities (text-based — replace with logos when available) ── */
const universities = [
  "University of Manchester", "University of Birmingham", "University of Leeds",
  "Monash University", "University of Toronto", "University College Dublin",
  "University of Edinburgh", "Queen Mary University", "Brunel University",
  "Coventry University",
];

/* ── Services ── */
const services = [
  {
    icon: "🎓",
    title: "University Applications",
    desc: "From shortlist to offer letter — we manage every step of your application across UK, Australia, Canada, USA, and Ireland.",
    href: "/services",
  },
  {
    icon: "📋",
    title: "Visa Guidance",
    desc: "CAS to BRP. We stay current on UKVI rules so you don't have to. Student visa, dependant visa, Graduate Route — all covered.",
    href: "/services#visa",
  },
  {
    icon: "📚",
    title: "UK 2nd Master's",
    desc: "Stay on the Graduate Route, switch fields, or stack qualifications. We find the right fit — not the easiest one.",
    href: "/services/uk-2nd-masters",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Research + Dependants",
    desc: "MRes, MPhil, and PhD routes that still allow your spouse and children to join you under post-January 2024 UK rules.",
    href: "/services/uk-research-dependants",
  },
];

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden hero-gradient">
        {/* Subtle background grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, #1E40AF 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />

        <div className="container-x relative py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* LEFT — copy */}
            <div className="max-w-xl">
              <div className="section-pill mb-6">
                <span>🇬🇧</span> UK&apos;s Trusted Education Consultancy
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-[var(--color-navy)] leading-[1.1]">
                Get Into Your Dream University —{" "}
                <span className="text-[var(--color-blue)]">Without the Guesswork.</span>
              </h1>

              <p className="mt-5 text-[1.0625rem] text-[var(--color-text-muted)] leading-relaxed max-w-lg">
                We&apos;ve helped 2,000+ students from 40 countries secure offers at top universities
                in the UK, Australia, Canada, USA, and Ireland. Free consultation. No pressure.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/book" className="btn btn-primary text-base px-6 py-3.5">
                  Book a Free Consultation →
                </Link>
                <Link href="/reviews" className="btn btn-secondary text-base px-6 py-3.5">
                  See Student Results
                </Link>
              </div>

              {/* Trust stats */}
              <div className="mt-10 flex flex-wrap gap-6 pt-8 border-t border-[var(--color-border)]">
                {[
                  { n: "2,000+", l: "Students Placed" },
                  { n: "96%", l: "Offer Rate" },
                  { n: "4.9 / 5", l: "Google Rating" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-2xl font-bold text-[var(--color-navy)] tracking-tight">{s.n}</div>
                    <div className="text-xs text-[var(--color-text-subtle)] font-medium mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — floating results card */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl navy-gradient p-7 shadow-[var(--shadow-xl)]">

                {/* Rating badge */}
                <div className="flex items-center gap-2.5 bg-white/10 rounded-2xl px-4 py-2.5 w-fit mb-6">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FBBF24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-white font-semibold text-sm">4.9</span>
                  <span className="text-white/60 text-sm">· 200+ reviews</span>
                </div>

                {/* Recent results */}
                <div className="space-y-3 mb-6">
                  {heroResults.map((r) => (
                    <div key={r.name} className="bg-white rounded-2xl p-4 flex items-center gap-3">
                      <span className="text-2xl">{r.flag}</span>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-[var(--color-navy)] text-sm truncate">{r.name}</div>
                        <div className="text-xs text-[var(--color-text-muted)] truncate">{r.uni}</div>
                        <div className="text-xs text-[var(--color-text-subtle)] truncate">{r.field}</div>
                      </div>
                      <span className="flex-shrink-0 bg-[var(--color-success-soft)] text-[var(--color-success)] text-xs font-bold px-2.5 py-1 rounded-full">
                        Offer ✓
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/10 rounded-2xl p-4 text-white text-center">
                    <div className="text-2xl font-bold">2,000+</div>
                    <div className="text-xs text-white/60 mt-1">Students Placed</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4 text-white text-center">
                    <div className="text-2xl font-bold">40+</div>
                    <div className="text-xs text-white/60 mt-1">Countries Served</div>
                  </div>
                </div>
              </div>

              {/* Decorative glow */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full bg-[var(--color-blue)] opacity-10 blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-[var(--color-action)] opacity-10 blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DESTINATIONS
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="text-center mb-12">
            <div className="section-pill mx-auto mb-4">Where do you want to study?</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)]">
              Choose your destination
            </h2>
            <p className="mt-3 text-[var(--color-text-muted)] max-w-xl mx-auto">
              We have specialist knowledge in every major English-speaking study destination — with up-to-date visa guidance for each.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {destinations.map((d) => (
              <Link
                key={d.slug}
                href={`/study-in/${d.slug}`}
                className="card card-lift group p-6 text-center"
              >
                <div className="text-4xl mb-3">{d.flag}</div>
                <div className="font-semibold text-[var(--color-navy)] text-sm group-hover:text-[var(--color-blue)] transition">{d.name}</div>
                <div className="text-xs text-[var(--color-text-subtle)] mt-1.5 leading-snug">{d.note}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-[var(--color-surface-muted)]">
        <div className="container-x">
          <div className="text-center mb-14">
            <div className="section-pill mx-auto mb-4">Simple process</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)]">
              How EdOne works
            </h2>
            <p className="mt-3 text-[var(--color-text-muted)] max-w-xl mx-auto">
              From first conversation to university offer — we handle everything, you focus on your future.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connector line on desktop */}
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[var(--color-border-strong)] to-transparent" />

            {[
              { n: "01", t: "Free Consultation", d: "30-minute call to map your goals, profile, visa status, and ideal outcomes. Zero pressure.", icon: "💬" },
              { n: "02", t: "Personalised Shortlist", d: "We hand-pick 3–5 universities genuinely matched to your profile — not our commission.", icon: "🎯" },
              { n: "03", t: "Application & Visa", d: "End-to-end: personal statement, docs, CAS, visa filing, interview prep. We own every step.", icon: "📋" },
              { n: "04", t: "Arrival & Beyond", d: "Accommodation advice, airport pickup, SIM card, bank account setup. We stay with you.", icon: "🏠" },
            ].map((s, i) => (
              <div key={s.n} className="relative bg-white rounded-2xl p-6 border border-[var(--color-border)] shadow-[var(--shadow-sm)] text-center">
                <div className="w-12 h-12 rounded-2xl bg-[var(--color-blue-subtle)] flex items-center justify-center text-2xl mx-auto mb-4">
                  {s.icon}
                </div>
                <div className="text-xs font-mono font-bold text-[var(--color-blue)] mb-2 tracking-widest">{s.n}</div>
                <h3 className="font-bold text-[var(--color-navy)] mb-2">{s.t}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="text-center mb-12">
            <div className="section-pill mx-auto mb-4">Real results</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)]">
              What our students say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card p-7 flex flex-col gap-5">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[0.9375rem] text-[var(--color-text-muted)] leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Student */}
                <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-[var(--color-navy)] flex-shrink-0"
                    style={{ background: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--color-navy)] text-sm">{t.name}</div>
                    <div className="text-xs text-[var(--color-text-subtle)]">{t.from} → {t.to}</div>
                    <div className="text-xs text-[var(--color-blue)] font-medium">{t.course}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/reviews" className="btn btn-secondary px-6 py-3">
              Read all student stories →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          UNIVERSITY LOGOS
      ══════════════════════════════════════════ */}
      <section className="py-14 bg-[var(--color-surface-muted)] border-y border-[var(--color-border)]">
        <div className="container-x">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-[var(--color-text-subtle)] mb-8">
            Our students have secured offers at
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {universities.map((u) => (
              <span
                key={u}
                className="px-4 py-2 rounded-full bg-white border border-[var(--color-border)] text-sm font-medium text-[var(--color-text-muted)] shadow-[var(--shadow-xs)]"
              >
                {u}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="text-center mb-12">
            <div className="section-pill mx-auto mb-4">What we do</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)]">
              End-to-end university support
            </h2>
            <p className="mt-3 text-[var(--color-text-muted)] max-w-xl mx-auto">
              From first application to landing in your new country — we cover every step.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="card card-lift group p-7"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-[var(--color-navy)] mb-2 group-hover:text-[var(--color-blue)] transition">
                  {s.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{s.desc}</p>
                <div className="mt-5 text-sm font-semibold text-[var(--color-blue)] flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          UK SPECIALIST CARDS
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-[var(--color-surface-muted)]">
        <div className="container-x">
          <div className="text-center mb-12">
            <div className="section-pill mx-auto mb-4">Already in the UK?</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)]">
              Specialist UK routes
            </h2>
            <p className="mt-3 text-[var(--color-text-muted)] max-w-2xl mx-auto">
              Two tracks designed specifically for students already studying or living in the UK — built around current visa rules.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Link
              href="/services/uk-2nd-masters"
              className="group relative overflow-hidden rounded-3xl bg-[var(--color-navy)] text-white p-8 hover:shadow-[var(--shadow-xl)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[var(--color-blue)] opacity-20 blur-3xl -z-0" />
              <div className="relative z-10">
                <div className="text-3xl mb-5">📚</div>
                <h3 className="text-xl font-bold mb-3">Second Master&apos;s in the UK</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  Keep your Graduate Route visa active, switch fields, or stack qualifications. We find the right MSc — not the easiest one.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 group-hover:gap-3 transition-all">
                  Explore this route →
                </span>
              </div>
            </Link>

            <Link
              href="/services/uk-research-dependants"
              className="group relative overflow-hidden rounded-3xl border-2 border-[var(--color-navy)] bg-white text-[var(--color-navy)] p-8 hover:shadow-[var(--shadow-xl)] hover:bg-[var(--color-navy)] hover:text-white transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative z-10">
                <div className="text-3xl mb-5">👨‍👩‍👧</div>
                <h3 className="text-xl font-bold mb-3">Research Routes for Families</h3>
                <p className="text-[var(--color-text-muted)] group-hover:text-white/70 text-sm leading-relaxed mb-6 transition-colors">
                  MRes, MPhil, PhD options that still allow dependants under post-Jan-2024 UK rules. Bring your spouse and children.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-blue)] group-hover:text-white/90 group-hover:gap-3 transition-all">
                  Explore this route →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <div className="section-pill mx-auto mb-4">Common questions</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)]">
                Frequently asked questions
              </h2>
            </div>
            <FAQ />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-[var(--color-surface-muted)]">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl navy-gradient px-10 py-16 md:px-16 text-white text-center">
            {/* Background glow */}
            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[var(--color-blue)] opacity-20 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[var(--color-action)] opacity-15 blur-3xl" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm font-medium mb-6">
                <span>🎓</span> Free consultation — no commitment
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Ready to start your<br className="hidden md:block" /> university journey?
              </h2>
              <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
                We&apos;ll tell you exactly what&apos;s realistic for your profile — and how to get there. No cost. No pressure. Just honest advice.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/book" className="btn btn-primary text-base px-7 py-4 bg-white !text-[var(--color-navy)] hover:bg-white/95 shadow-[var(--shadow-lg)]">
                  Book a Free Consultation →
                </Link>
                <a
                  href="https://wa.me/447000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost-white text-base px-7 py-4"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.288.173-1.413-.074-.124-.272-.198-.57-.347zM12.005 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.892 6.994c-.003 5.45-4.437 9.884-9.887 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.005 0C5.495 0 .195 5.298.193 11.81c0 2.096.547 4.142 1.588 5.945L.057 24l6.412-1.681a11.875 11.875 0 0 0 5.535 1.41h.005c6.508 0 11.806-5.298 11.808-11.81 0-3.156-1.228-6.123-3.461-8.355z"/>
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
