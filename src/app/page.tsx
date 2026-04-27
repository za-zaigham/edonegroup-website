import Link from "next/link";
import {
  ArrowRight, Star, CheckCircle2, Globe, GraduationCap,
  FileText, Users, BookOpen, Award, MessageCircle,
  TrendingUp, Shield, Clock, ChevronRight
} from "lucide-react";
import { FAQ } from "@/components/FAQ";
import { ScrollReveal } from "@/components/ScrollReveal";

/* ── Destinations ── */
const destinations = [
  { name: "United Kingdom", flag: "🇬🇧", slug: "uk", note: "2-yr Graduate Route", highlight: true },
  { name: "Australia",       flag: "🇦🇺", slug: "australia", note: "Up to 5-yr PSW" },
  { name: "Canada",          flag: "🇨🇦", slug: "canada",    note: "3-yr PGWP" },
  { name: "United States",   flag: "🇺🇸", slug: "usa",       note: "STEM OPT" },
  { name: "Ireland",         flag: "🇮🇪", slug: "ireland",   note: "2-yr stayback" },
];

/* ── Gulf destinations ── */
const gulfDestinations = [
  { name: "Saudi Students", flag: "🇸🇦", href: "/gulf/saudi-arabia", note: "KASP & Aramco scholarships", ar: "للطلاب السعوديين" },
  { name: "UAE Students",    flag: "🇦🇪", href: "/gulf/uae",          note: "Ministry & ADEK scholarships", ar: "للطلاب الإماراتيين" },
  { name: "Qatari Students", flag: "🇶🇦", href: "/gulf/qatar",        note: "QF & MOHESR scholarships", ar: "للطلاب القطريين" },
  { name: "Kuwaiti Students",flag: "🇰🇼", href: "/gulf/kuwait",       note: "KCO full scholarship", ar: "للطلاب الكويتيين" },
  { name: "Omani Students",  flag: "🇴🇲", href: "/gulf/oman",         note: "MoHE & PDO scholarships", ar: "للطلاب العُمانيين" },
];

/* ── Marquee universities ── */
const universities = [
  "University of Manchester", "University of Birmingham", "University of Leeds",
  "Monash University", "University of Toronto", "University College Dublin",
  "University of Edinburgh", "Queen Mary University", "Brunel University",
  "Coventry University", "RMIT University", "McGill University",
  "York University", "University of Sheffield", "Deakin University",
];

/* ── Steps ── */
const steps = [
  { n: "01", Icon: MessageCircle, title: "Free Consultation",     desc: "30-min call to understand your goals, academic profile, and ideal outcomes. Zero pressure, zero cost." },
  { n: "02", Icon: GraduationCap, title: "Personalised Shortlist",desc: "We hand-pick 3–5 universities genuinely matched to your profile — not our commission rate." },
  { n: "03", Icon: FileText,      title: "Full Application",      desc: "Personal statement, documents, CAS, Student Route support, interview prep. We own every step." },
  { n: "04", Icon: Globe,         title: "Arrival & Beyond",      desc: "Accommodation, airport pickup, SIM, bank account setup. We stay with you after you land." },
];

/* ── Testimonials ── */
const testimonials = [
  {
    name: "Fatima Al-Hassan", from: "Pakistan", to: "University of Birmingham",
    course: "MSc Computer Science", initials: "FA", color: "#DBEAFE",
    quote: "EdOne found me a course that kept my Graduate Route active AND matched my career goals. I'd applied to 3 universities on my own with no luck — they got me an offer in 6 weeks.",
  },
  {
    name: "Kwame Asante", from: "Ghana", to: "University of Leeds",
    course: "MRes Biomedical Sciences", initials: "KA", color: "#D1FAE5",
    quote: "My biggest worry was bringing my wife and daughter. EdOne knew exactly which research routes still allow dependants. They handled everything — accommodation, the works.",
  },
  {
    name: "Mei-Ling Chen", from: "China", to: "Monash University",
    course: "Master of Finance", initials: "MC", color: "#FEF3C7",
    quote: "Honest, fast, and no pressure. They told me upfront which universities were realistic for my GPA and which weren't. Got into my first choice. Couldn't recommend more.",
  },
];

/* ── Services ── */
const services = [
  { Icon: GraduationCap, title: "University Applications",    desc: "From shortlist to offer letter — end-to-end across UK, Australia, Canada, USA, and Ireland.",              href: "/services",                      color: "blue"    },
  { Icon: FileText,      title: "Student Route Support",      desc: "CAS to eVisa. Current on all UKVI rules. Student visa, dependant routes, Graduate Route — all covered.",   href: "/services#visa",                 color: "navy"    },
  { Icon: BookOpen,      title: "UK 2nd Master's",            desc: "Stay on the Graduate Route, switch fields, or stack qualifications. We find the right fit.",               href: "/services/uk-2nd-masters",        color: "action"  },
  { Icon: Users,         title: "Research + Dependants",      desc: "MRes, MPhil, PhD routes that let your spouse and children join you under post-2024 UK rules.",            href: "/services/uk-research-dependants", color: "success" },
];

const serviceColors: Record<string, string> = {
  blue:    "bg-[var(--color-blue-subtle)] text-[var(--color-blue)]",
  navy:    "bg-[var(--color-navy)] text-white",
  action:  "bg-[var(--color-action-soft)] text-[var(--color-action)]",
  success: "bg-[var(--color-success-soft)] text-[var(--color-success)]",
};

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO — futuristic aurora
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden hero-aurora">
        {/* Animated dot grid */}
        <div className="absolute inset-0 dot-grid opacity-[0.6]" aria-hidden="true" />

        {/* Animated blobs */}
        <div className="absolute top-[-6rem] left-[-4rem] w-[36rem] h-[36rem] rounded-full blob"
          style={{ background: "radial-gradient(circle, rgba(3,105,161,0.1) 0%, transparent 70%)" }}
          aria-hidden="true" />
        <div className="absolute bottom-[-4rem] right-[-4rem] w-[28rem] h-[28rem] rounded-full blob-delay"
          style={{ background: "radial-gradient(circle, rgba(229,41,42,0.07) 0%, transparent 70%)" }}
          aria-hidden="true" />

        <div className="container-x relative pt-16 pb-20 md:pt-24 md:pb-32">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">

            {/* LEFT */}
            <div className="max-w-2xl">
              <div className="section-pill mb-6 w-fit reveal visible">
                <Shield size={13} />
                UK-Based Education Consultancy
              </div>

              <h1 className="text-[2.75rem] md:text-[3.5rem] lg:text-[3.85rem] font-extrabold text-[var(--color-navy)] leading-[1.07] tracking-tight">
                Get Into Your<br />Dream University —{" "}
                <span className="gradient-text">Without the Guesswork.</span>
              </h1>

              <p className="mt-5 text-lg text-[var(--color-text-muted)] leading-relaxed max-w-lg font-normal" style={{ fontFamily: "var(--font-inter)" }}>
                Honest, specialist guidance for students from <strong className="text-[var(--color-navy)] font-semibold">40+ countries</strong> — UK, Australia, Canada, USA, Ireland, and dedicated support for Gulf students in Arabic.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/book" className="btn btn-primary btn-pulse gap-2">
                  Book Free Consultation
                  <ArrowRight size={17} />
                </Link>
                <Link href="/reviews" className="btn btn-secondary gap-2">
                  See Student Results
                  <ChevronRight size={16} />
                </Link>
              </div>

              {/* Trust bar */}
              <div className="mt-10 pt-8 border-t border-[var(--color-border)] grid grid-cols-3 gap-4">
                {[
                  { n: "40+",  l: "Countries served"  },
                  { n: "96%",  l: "Offer rate"         },
                  { n: "4.9★", l: "Google rating"      },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="stat-number">{s.n}</div>
                    <div className="text-xs text-[var(--color-text-subtle)] font-medium mt-1" style={{ fontFamily: "var(--font-inter)" }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — floating results card */}
            <div className="relative hidden lg:block float" aria-hidden="true">
              <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full opacity-[0.08] blur-3xl"
                style={{ background: "var(--color-blue)" }} />
              <div className="absolute -bottom-8 -left-8 w-44 h-44 rounded-full opacity-[0.06] blur-2xl"
                style={{ background: "var(--color-action)" }} />

              <div className="relative rounded-3xl navy-gradient p-7 shadow-[var(--shadow-xl)]"
                style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 32px 64px rgba(15,23,42,0.35)" }}>
                {/* Rating */}
                <div className="flex items-center gap-2.5 bg-white/10 rounded-2xl px-4 py-2.5 w-fit mb-6 backdrop-blur-sm">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} fill="#FBBF24" stroke="none" />
                    ))}
                  </div>
                  <span className="text-white font-semibold text-sm">4.9 / 5</span>
                  <span className="text-white/50 text-xs">· 200+ reviews</span>
                </div>

                {/* Recent results */}
                <div className="space-y-2.5 mb-6">
                  {[
                    { flag: "🇵🇰", name: "Aisha R.", uni: "Univ. of Manchester", course: "MSc Data Science" },
                    { flag: "🇬🇭", name: "Kwame A.", uni: "Univ. of Leeds",       course: "MRes Biomedical Sci." },
                    { flag: "🇸🇦", name: "Faisal A.", uni: "Univ. of Edinburgh",  course: "MSc Finance" },
                  ].map((r) => (
                    <div key={r.name} className="bg-white rounded-2xl p-3.5 flex items-center gap-3 shadow-sm">
                      <span className="text-2xl leading-none flex-shrink-0">{r.flag}</span>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-[var(--color-navy)] text-sm truncate">{r.name}</div>
                        <div className="text-xs text-[var(--color-text-muted)] truncate">{r.uni}</div>
                        <div className="text-xs text-[var(--color-text-subtle)] truncate">{r.course}</div>
                      </div>
                      <div className="flex items-center gap-1 bg-[var(--color-success-soft)] text-[var(--color-success)] text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0">
                        <CheckCircle2 size={11} />
                        Offer
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/10 rounded-2xl p-4 text-white text-center backdrop-blur-sm">
                    <div className="text-2xl font-extrabold tracking-tight">40+</div>
                    <div className="text-xs text-white/60 mt-1">Countries</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4 text-white text-center backdrop-blur-sm">
                    <div className="text-2xl font-extrabold tracking-tight">96%</div>
                    <div className="text-xs text-white/60 mt-1">Offer Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          UNIVERSITY MARQUEE
      ══════════════════════════════════════════ */}
      <section className="py-10 bg-white border-y border-[var(--color-border)] overflow-hidden">
        <div className="container-x mb-5">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text-subtle)]">
            Our students have secured offers at
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="marquee-track">
            {[...universities, ...universities].map((u, i) => (
              <div key={i} className="flex items-center gap-8 px-5">
                <span className="whitespace-nowrap text-sm font-semibold text-[var(--color-navy-muted)] opacity-60 hover:opacity-100 transition-opacity cursor-default">{u}</span>
                <span className="w-1 h-1 rounded-full bg-[var(--color-border-strong)] flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DESTINATIONS
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-[var(--color-surface-muted)]">
        <div className="container-x">
          <ScrollReveal className="text-center mb-12">
            <div className="section-pill mx-auto mb-4 w-fit">
              <Globe size={13} />
              Choose your destination
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-navy)]">
              Where do you want to study?
            </h2>
            <p className="mt-3 text-[var(--color-text-muted)] max-w-lg mx-auto" style={{ fontFamily: "var(--font-inter)" }}>
              Specialist guidance across every major English-speaking study destination — with up-to-date Student Route information for each.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {destinations.map((d, i) => (
              <ScrollReveal key={d.slug} delay={i * 80}>
                <Link href={`/study-in/${d.slug}`}
                  className={`card card-glow p-6 text-center group block h-full ${d.highlight ? "border-[var(--color-blue-soft)] bg-[var(--color-blue-subtle)]" : ""}`}
                >
                  <div className="text-4xl mb-3 leading-none">{d.flag}</div>
                  <div className="font-semibold text-[var(--color-navy)] text-sm group-hover:text-[var(--color-blue)] transition-colors">{d.name}</div>
                  <div className="text-xs text-[var(--color-text-subtle)] mt-1.5 leading-snug">{d.note}</div>
                  {d.highlight && (
                    <div className="mt-2.5 inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-blue)]">
                      <TrendingUp size={11} /> Most popular
                    </div>
                  )}
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          GULF STUDENTS — Arabic-language pages
      ══════════════════════════════════════════ */}
      <section className="py-20 section-dark-futuristic">
        <div className="container-x relative z-10">
          <ScrollReveal className="text-center mb-12">
            <div className="section-pill mb-4 w-fit mx-auto"
              style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}>
              🌙 Gulf Students · طلاب الخليج
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
              Studying in the UK from the Gulf?
            </h2>
            <p className="text-white/60 max-w-xl mx-auto text-base" style={{ fontFamily: "var(--font-inter)" }}>
              Dedicated bilingual pages — English & Arabic — with local government scholarships, university guides, IELTS requirements, and tuition fees for every Gulf country.
            </p>
            <p className="mt-2 text-white/40 text-sm" style={{ fontFamily: "'Noto Kufi Arabic', system-ui, sans-serif", direction: "rtl" }}>
              صفحات مخصصة بالعربية لكل دولة خليجية — منح، جامعات، رسوم، ومتطلبات IELTS
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {gulfDestinations.map((g, i) => (
              <ScrollReveal key={g.href} delay={i * 80}>
                <Link href={g.href}
                  className="gulf-card group block rounded-2xl p-5 text-center h-full transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="text-4xl mb-3 leading-none">{g.flag}</div>
                  <div className="font-semibold text-white text-sm mb-1 group-hover:text-[var(--color-blue-soft)] transition-colors">{g.name}</div>
                  <div className="text-xs text-white/40 mb-2 leading-snug">{g.note}</div>
                  <div className="text-xs text-white/30 leading-snug" style={{ fontFamily: "'Noto Kufi Arabic', system-ui, sans-serif", direction: "rtl" }}>{g.ar}</div>
                  <div className="mt-3 text-xs font-semibold text-white/50 group-hover:text-white/80 transition-colors">
                    EN · عربي →
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <ScrollReveal className="text-center mb-14">
            <div className="section-pill mx-auto mb-4 w-fit">
              <CheckCircle2 size={13} />
              Simple process
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-navy)]">How EdOne works</h2>
            <p className="mt-3 text-[var(--color-text-muted)] max-w-lg mx-auto" style={{ fontFamily: "var(--font-inter)" }}>
              From first conversation to offer letter — we handle everything so you can focus on your future.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-[2.75rem] left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] h-px bg-gradient-to-r from-[var(--color-border)] via-[var(--color-border-strong)] to-[var(--color-border)]" aria-hidden="true" />
            {steps.map(({ n, Icon, title, desc }, i) => (
              <ScrollReveal key={n} delay={i * 100} direction="scale">
                <div className="relative text-center group">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-navy)] flex items-center justify-center mx-auto mb-5 shadow-[var(--shadow-md)] group-hover:bg-[var(--color-blue)] group-hover:shadow-[0_8px_24px_rgba(3,105,161,0.4)] transition-all duration-300">
                    <Icon size={24} className="text-white" />
                  </div>
                  <div className="text-[0.7rem] font-bold text-[var(--color-action)] tracking-[0.15em] font-mono mb-2">{n}</div>
                  <h3 className="font-bold text-[var(--color-navy)] mb-2 text-[0.9375rem]">{title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-[var(--color-surface-muted)]">
        <div className="container-x">
          <ScrollReveal className="text-center mb-12">
            <div className="section-pill mx-auto mb-4 w-fit">
              <Star size={13} fill="currentColor" />
              Real results
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-navy)]">What our students say</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 120}>
                <div className="card card-glow p-7 flex flex-col gap-5 h-full">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => <Star key={j} size={15} fill="#FBBF24" stroke="none" />)}
                  </div>
                  <svg width="28" height="20" viewBox="0 0 28 20" fill="none" aria-hidden="true" className="-mb-2">
                    <path d="M0 20V12.5C0 5.596 4.167 1.25 12.5 0l1.5 2.5C9.833 3.333 7.5 6.167 7.5 10H12.5V20H0ZM15.5 20V12.5C15.5 5.596 19.667 1.25 28 0l1.5 2.5C25.333 3.333 23 6.167 23 10H28V20H15.5Z" fill="#E2E8F0"/>
                  </svg>
                  <p className="text-[0.9375rem] text-[var(--color-text-muted)] leading-relaxed flex-1" style={{ fontFamily: "var(--font-inter)" }}>
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-[var(--color-navy)] flex-shrink-0"
                      style={{ background: t.color }}>
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--color-navy)] text-sm">{t.name}</div>
                      <div className="text-xs text-[var(--color-text-subtle)]">From {t.from} → {t.to}</div>
                      <div className="text-xs text-[var(--color-blue)] font-medium mt-0.5">{t.course}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/reviews" className="btn btn-secondary gap-2 px-6 py-3">
              Read all student stories
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <ScrollReveal className="text-center mb-12">
            <div className="section-pill mx-auto mb-4 w-fit">
              <Award size={13} />
              What we do
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-navy)]">End-to-end university support</h2>
            <p className="mt-3 text-[var(--color-text-muted)] max-w-lg mx-auto" style={{ fontFamily: "var(--font-inter)" }}>
              From first application to landing in your new country — every step covered.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ Icon, title, desc, href, color }, i) => (
              <ScrollReveal key={title} delay={i * 80} direction="scale">
                <Link href={href} className="card card-glow group p-7 flex flex-col h-full">
                  <div className={`icon-wrap w-12 h-12 mb-5 ${serviceColors[color]}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="font-bold text-[var(--color-navy)] mb-2 text-[0.9375rem] group-hover:text-[var(--color-blue)] transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed flex-1" style={{ fontFamily: "var(--font-inter)" }}>
                    {desc}
                  </p>
                  <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-[var(--color-blue)] group-hover:gap-2.5 transition-all">
                    Learn more <ArrowRight size={15} />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          UK SPECIALIST CARDS
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-[var(--color-surface-muted)]">
        <div className="container-x">
          <ScrollReveal className="text-center mb-12">
            <div className="section-pill mx-auto mb-4 w-fit">
              <Shield size={13} />
              Already in the UK?
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-navy)]">Specialist UK routes</h2>
            <p className="mt-3 text-[var(--color-text-muted)] max-w-xl mx-auto" style={{ fontFamily: "var(--font-inter)" }}>
              Two tracks built specifically around current UK rules — for students already here.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <ScrollReveal direction="left">
              <Link href="/services/uk-2nd-masters"
                className="group relative overflow-hidden rounded-3xl bg-[var(--color-navy)] text-white p-8 hover:shadow-[var(--shadow-xl)] transition-all duration-300 hover:-translate-y-2 block h-full">
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[var(--color-blue)] opacity-10 blur-3xl" aria-hidden="true" />
                <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-[var(--color-action)] opacity-10 blur-2xl" aria-hidden="true" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
                    <BookOpen size={22} className="text-white" />
                  </div>
                  <div className="text-xs font-bold tracking-[0.1em] text-white/50 mb-2 uppercase">Specialist Service</div>
                  <h3 className="text-xl font-bold mb-3">Second Master&apos;s in the UK</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6" style={{ fontFamily: "var(--font-inter)" }}>
                    Stay on the Graduate Route, switch fields, or stack qualifications. We find the right MSc — not the easiest one.
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-white/90 group-hover:gap-3 transition-all">
                    Explore this route <ArrowRight size={15} />
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <Link href="/services/uk-research-dependants"
                className="group relative overflow-hidden rounded-3xl border-2 border-[var(--color-navy)] bg-white p-8 hover:bg-[var(--color-navy)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-xl)] block h-full">
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-navy)] group-hover:bg-white/10 flex items-center justify-center mb-5 transition-colors duration-300">
                    <Users size={22} className="text-white" />
                  </div>
                  <div className="text-xs font-bold tracking-[0.1em] text-[var(--color-text-subtle)] group-hover:text-white/50 mb-2 uppercase transition-colors duration-300">Specialist Service</div>
                  <h3 className="text-xl font-bold mb-3 text-[var(--color-navy)] group-hover:text-white transition-colors duration-300">Research Routes for Families</h3>
                  <p className="text-[var(--color-text-muted)] group-hover:text-white/70 text-sm leading-relaxed mb-6 transition-colors duration-300" style={{ fontFamily: "var(--font-inter)" }}>
                    MRes, MPhil, PhD options that still allow your spouse and children to join you under post-Jan-2024 UK rules.
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-blue)] group-hover:text-white/90 group-hover:gap-3 transition-all duration-300">
                    Explore this route <ArrowRight size={15} />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY EDONE
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="section-pill mb-5 w-fit">
                <Shield size={13} />
                Why EdOne?
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-navy)] mb-5">
                We work for you.<br />Not the universities.
              </h2>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-8" style={{ fontFamily: "var(--font-inter)" }}>
                Most consultancies earn commission from the universities they recommend. We don&apos;t. Our fee is transparent, disclosed upfront, and paid by you — which means our shortlist is genuinely built around your goals.
              </p>
              <div className="space-y-4">
                {[
                  { Icon: CheckCircle2, text: "No hidden university commissions — ever" },
                  { Icon: Clock,        text: "Average response time: under 2 hours" },
                  { Icon: TrendingUp,   text: "96% offer rate across all destinations" },
                  { Icon: Globe,        text: "Specialists in 5 countries, not generalists" },
                  { Icon: Shield,       text: "Transparent fee structure — agreed upfront" },
                ].map(({ Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-sm text-[var(--color-text-muted)]" style={{ fontFamily: "var(--font-inter)" }}>
                    <CheckCircle2 size={18} className="text-[var(--color-success)] flex-shrink-0" />
                    {text}
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/about" className="btn btn-secondary gap-2">
                  About EdOne
                  <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "96%",  l: "Offer rate",          Icon: TrendingUp },
                { n: "40+",  l: "Countries served",    Icon: Globe      },
                { n: "50+",  l: "Partner universities", Icon: Award      },
                { n: "5",    l: "Study destinations",   Icon: GraduationCap },
              ].map(({ n, l, Icon }, i) => (
                <ScrollReveal key={l} delay={i * 100} direction="scale">
                  <div className="card card-glow p-7 text-center">
                    <div className="w-11 h-11 rounded-2xl bg-[var(--color-blue-subtle)] flex items-center justify-center mx-auto mb-4">
                      <Icon size={20} className="text-[var(--color-blue)]" />
                    </div>
                    <div className="text-3xl font-extrabold text-[var(--color-navy)] tracking-tight">{n}</div>
                    <div className="text-sm text-[var(--color-text-muted)] mt-1" style={{ fontFamily: "var(--font-inter)" }}>{l}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-[var(--color-surface-muted)]">
        <div className="container-x">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal className="text-center mb-12">
              <div className="section-pill mx-auto mb-4 w-fit">Common questions</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-navy)]">
                Frequently asked questions
              </h2>
            </ScrollReveal>
            <FAQ />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <ScrollReveal direction="scale">
            <div className="relative overflow-hidden rounded-3xl section-dark-futuristic px-10 py-16 md:px-16 text-white text-center">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm font-medium mb-6 backdrop-blur-sm">
                  <GraduationCap size={16} />
                  Free consultation · No commitment
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
                  Ready to start your<br className="hidden md:block" /> university journey?
                </h2>
                <p className="text-white/60 text-lg max-w-xl mx-auto mb-8" style={{ fontFamily: "var(--font-inter)" }}>
                  We&apos;ll tell you exactly what&apos;s realistic for your profile — and how to get there. No cost. No pressure. Just honest advice.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/book" className="btn btn-primary gap-2 text-base px-7 py-4 !bg-white !text-[var(--color-navy)] !border-white hover:!bg-white/95 !shadow-[var(--shadow-lg)]">
                    Book Free Consultation
                    <ArrowRight size={18} />
                  </Link>
                  <a href="https://wa.me/447000000000" target="_blank" rel="noopener noreferrer"
                    className="btn btn-ghost-white gap-2 text-base px-7 py-4">
                    <MessageCircle size={18} />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
