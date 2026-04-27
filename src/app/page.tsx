import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Star, CheckCircle2, Globe, GraduationCap,
  FileText, Users, BookOpen, Award, MessageCircle,
  TrendingUp, Shield, Clock, ChevronRight, Zap, Calendar
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

/* ── Latest Offers ── */
const latestOffers = [
  {
    tag: "Closing Soon",
    tagColor: "action",
    title: "Chevening Scholarships 2025–26",
    desc: "UK government scholarship for future leaders. Fully funded. Open to students from 160+ countries.",
    deadline: "Nov 5, 2025",
    flag: "🇬🇧",
    link: "/scholarships/chevening",
  },
  {
    tag: "Now Open",
    tagColor: "success",
    title: "King Abdullah Scholarship Programme",
    desc: "Saudi Arabia's flagship overseas scholarship. Full funding for Saudi nationals at UK universities.",
    deadline: "Ongoing",
    flag: "🇸🇦",
    link: "/scholarships/kasp",
  },
  {
    tag: "Now Open",
    tagColor: "success",
    title: "Kuwait Cultural Office Scholarship",
    desc: "One of the Gulf's most generous scholarships. Full tuition + £700–900/month for Kuwaiti nationals.",
    deadline: "Ongoing",
    flag: "🇰🇼",
    link: "/scholarships/kco",
  },
  {
    tag: "New Intake",
    tagColor: "indigo",
    title: "University of Manchester — Jan 2026",
    desc: "January 2026 intake now open across Business, Engineering, Computer Science, and Life Sciences.",
    deadline: "Jan 2026",
    flag: "🇬🇧",
    link: "/scholarships/manchester-jan-2026",
  },
];

/* ── Steps ── */
const steps = [
  { n: "01", Icon: MessageCircle, title: "Free Consultation",      desc: "30-min call to understand your goals, academic profile, and ideal outcomes. Zero pressure, zero cost." },
  { n: "02", Icon: GraduationCap, title: "Personalised Shortlist", desc: "We hand-pick 3–5 universities genuinely matched to your profile — not our commission rate." },
  { n: "03", Icon: FileText,      title: "Full Application",       desc: "Personal statement, documents, CAS, Student Route support, interview prep. We own every step." },
  { n: "04", Icon: Globe,         title: "Arrival & Beyond",       desc: "Accommodation, airport pickup, SIM, bank account setup. We stay with you after you land." },
];

/* ── Testimonials ── */
const testimonials = [
  {
    name: "Fatima Al-Hassan", from: "Pakistan", to: "University of Birmingham",
    course: "MSc Computer Science", initials: "FA", color: "#EEF2FF",
    quote: "EdOne found me a course that kept my Graduate Route active AND matched my career goals. I'd applied to 3 universities on my own with no luck — they got me an offer in 6 weeks.",
  },
  {
    name: "Kwame Asante", from: "Ghana", to: "University of Leeds",
    course: "MRes Biomedical Sciences", initials: "KA", color: "#ECFDF5",
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
  { Icon: GraduationCap, title: "University Applications",    desc: "From shortlist to offer letter — end-to-end across UK, Australia, Canada, USA, and Ireland.",              href: "/services",                       color: "blue"    },
  { Icon: FileText,      title: "Student Route Support",      desc: "CAS to eVisa. Current on all UKVI rules. Student visa, dependant routes, Graduate Route — all covered.",   href: "/services#visa",                  color: "navy"    },
  { Icon: BookOpen,      title: "UK 2nd Master's",            desc: "Stay on the Graduate Route, switch fields, or stack qualifications. We find the right fit.",               href: "/services/uk-2nd-masters",         color: "action"  },
  { Icon: Users,         title: "Research + Dependants",      desc: "MRes, MPhil, PhD routes that let your spouse and children join you under post-2024 UK rules.",            href: "/services/uk-research-dependants", color: "success" },
];

const serviceColors: Record<string, string> = {
  blue:    "bg-[var(--color-blue-subtle)] text-[var(--color-blue)]",
  navy:    "bg-[var(--color-navy)] text-white",
  action:  "bg-[var(--color-action-soft)] text-[var(--color-action)]",
  success: "bg-[var(--color-success-soft)] text-[var(--color-success)]",
};

const offerBorderColors: Record<string, string> = {
  action:  "border-l-[var(--color-action)]",
  success: "border-l-[var(--color-success)]",
  indigo:  "border-l-[var(--color-blue)]",
};

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO — dark cinematic, full-bleed image
      ══════════════════════════════════════════ */}
      {/* bg-[#05080F] = guaranteed dark even before Unsplash image loads */}
      <section className="relative overflow-hidden min-h-[92vh] flex items-center bg-[#05080F]">
        {/* Background image + overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=1920&q=80"
            alt="UK University campus"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(5,8,15,0.96) 0%, rgba(5,8,15,0.88) 40%, rgba(5,8,15,0.55) 70%, rgba(5,8,15,0.25) 100%)",
            }}
          />
        </div>

        {/* Dot grid overlay */}
        <div className="absolute inset-0 dot-grid-dark opacity-40" aria-hidden="true" />

        {/* Animated indigo blob */}
        <div
          className="absolute top-[-6rem] left-[-4rem] w-[36rem] h-[36rem] rounded-full blob pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(79,70,229,0.12) 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="container-x relative z-10 pt-16 pb-20 md:pt-24 md:pb-32 w-full">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-center">

            {/* LEFT */}
            <div className="max-w-2xl">
              <div className="section-pill mb-6 w-fit" style={{ background: "rgba(79,70,229,0.2)", color: "#C7D2FE", borderColor: "rgba(79,70,229,0.4)" }}>
                <Shield size={13} />
                UK-Based Education Consultancy
              </div>

              <h1 className="text-[2.75rem] md:text-[3.5rem] lg:text-[3.85rem] font-extrabold text-white leading-[1.07] tracking-tight">
                Get Into Your<br />Dream University
                <br />
                <span className="text-gradient">Without the Guesswork.</span>
              </h1>

              <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-lg font-normal">
                Honest, specialist guidance for students from{" "}
                <strong className="text-white font-semibold">40+ countries</strong> — UK, Australia, Canada, USA, Ireland, and dedicated support for Gulf students in Arabic.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/book" className="btn btn-primary btn-pulse gap-2">
                  Book Free Consultation
                  <ArrowRight size={17} />
                </Link>
                <Link href="/reviews" className="btn btn-ghost-white gap-2">
                  See Student Results
                  <ChevronRight size={16} />
                </Link>
              </div>

              {/* Trust bar */}
              <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-6 md:gap-10">
                {[
                  { n: "40+",  l: "Countries served" },
                  { n: "96%",  l: "Offer rate"        },
                  { n: "4.9★", l: "Google rating"     },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-2xl font-extrabold text-white tracking-tight">{s.n}</div>
                    <div className="text-xs text-white/50 font-medium mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — floating glass results card */}
            <div className="relative hidden lg:block float" aria-hidden="true">
              <div
                className="relative rounded-3xl p-7 glass-dark"
                style={{ boxShadow: "0 0 0 1px rgba(79,70,229,0.25), 0 32px 64px rgba(5,8,15,0.6), 0 0 80px rgba(79,70,229,0.1)" }}
              >
                {/* Rating */}
                <div className="flex items-center gap-2.5 bg-white/10 rounded-2xl px-4 py-2.5 w-fit mb-6">
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
                    { flag: "🇵🇰", name: "Aisha R.",  uni: "Univ. of Manchester", course: "MSc Data Science"     },
                    { flag: "🇬🇭", name: "Kwame A.", uni: "Univ. of Leeds",       course: "MRes Biomedical Sci." },
                    { flag: "🇸🇦", name: "Faisal A.", uni: "Univ. of Edinburgh",  course: "MSc Finance"          },
                  ].map((r) => (
                    <div key={r.name} className="bg-white/10 rounded-2xl p-3.5 flex items-center gap-3 border border-white/8">
                      <span className="text-2xl leading-none flex-shrink-0">{r.flag}</span>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-white text-sm truncate">{r.name}</div>
                        <div className="text-xs text-white/60 truncate">{r.uni}</div>
                        <div className="text-xs text-white/40 truncate">{r.course}</div>
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
                  <div className="bg-[rgba(79,70,229,0.15)] border border-[rgba(79,70,229,0.25)] rounded-2xl p-4 text-white text-center">
                    <div className="text-2xl font-extrabold tracking-tight">40+</div>
                    <div className="text-xs text-white/60 mt-1">Countries</div>
                  </div>
                  <div className="bg-[rgba(6,182,212,0.12)] border border-[rgba(6,182,212,0.2)] rounded-2xl p-4 text-white text-center">
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
                <span className="whitespace-nowrap text-sm font-semibold text-[var(--color-navy-muted)] opacity-50 hover:opacity-100 transition-opacity cursor-default">
                  {u}
                </span>
                <span className="w-1 h-1 rounded-full bg-[var(--color-border-strong)] flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DESTINATIONS — bento-style dark grid
      ══════════════════════════════════════════ */}
      <section className="py-20 section-dark-futuristic">
        <div className="container-x relative z-10">
          <ScrollReveal className="text-center mb-12">
            <div className="section-pill mx-auto mb-4 w-fit" style={{ background: "rgba(79,70,229,0.2)", color: "#C7D2FE", borderColor: "rgba(79,70,229,0.35)" }}>
              <Globe size={13} />
              Choose your destination
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Where do you want to study?
            </h2>
            <p className="mt-3 text-white/60 max-w-lg mx-auto">
              Specialist guidance across every major English-speaking study destination — with up-to-date visa information for each.
            </p>
          </ScrollReveal>

          {/* Bento grid — UK featured large */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

            {/* UK — featured card with background image */}
            <ScrollReveal className="md:col-span-2 lg:col-span-2">
              <Link href="/study-in/uk" className="group relative overflow-hidden rounded-3xl min-h-[280px] flex items-end block">
                <Image
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80"
                  alt="London"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                <div className="relative z-10 p-5 sm:p-7 w-full">
                  <div className="flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <div className="text-4xl mb-2 leading-none">🇬🇧</div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-1">United Kingdom</h3>
                      <p className="text-white/70 text-sm">2-year Graduate Route · 150+ universities</p>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-indigo-600 text-white">
                        Most Popular
                      </span>
                      <div className="flex items-center gap-1.5 text-white/80 text-sm font-semibold group-hover:gap-2.5 transition-all">
                        Explore <ArrowRight size={15} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            {/* Other destinations — smaller cards */}
            {destinations.slice(1).map((d, i) => (
              <ScrollReveal key={d.slug} delay={i * 80}>
                <Link
                  href={`/study-in/${d.slug}`}
                  className="gulf-card group block rounded-2xl p-6 text-center h-full transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="text-4xl mb-3 leading-none">{d.flag}</div>
                  <div className="font-semibold text-white text-sm group-hover:text-[var(--color-blue-soft)] transition-colors">{d.name}</div>
                  <div className="text-xs text-white/40 mt-1.5 leading-snug">{d.note}</div>
                  <div className="mt-4 text-xs font-semibold text-white/40 group-hover:text-white/70 transition-colors flex items-center justify-center gap-1">
                    Learn more <ChevronRight size={12} />
                  </div>
                </Link>
              </ScrollReveal>
            ))}

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          LATEST SCHOLARSHIP OPPORTUNITIES
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-[var(--color-surface-muted)]">
        <div className="container-x">
          <ScrollReveal className="text-center mb-12">
            <div className="section-pill mx-auto mb-4 w-fit">
              <Zap size={13} />
              Scholarships &amp; Intakes
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-navy)]">
              Latest Scholarship Opportunities
            </h2>
            <p className="mt-3 text-[var(--color-text-muted)] max-w-lg mx-auto">
              Current openings, deadlines, and fully-funded programmes — updated in real time by our advisors.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-5">
            {latestOffers.map((offer, i) => (
              <ScrollReveal key={offer.title} delay={i * 90}>
                <div className={`card card-glow p-6 flex flex-col gap-4 h-full border-l-4 ${offerBorderColors[offer.tagColor]}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl leading-none flex-shrink-0">{offer.flag}</span>
                      <span className={`tag tag-${offer.tagColor} text-xs`}>{offer.tag}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-subtle)] bg-[var(--color-surface-muted)] px-2.5 py-1 rounded-full flex-shrink-0">
                      <Calendar size={11} />
                      {offer.deadline}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--color-navy)] text-[0.9375rem] mb-2 leading-snug">{offer.title}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{offer.desc}</p>
                  </div>
                  <div className="mt-auto">
                    <Link
                      href={offer.link}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-blue)] hover:gap-2.5 transition-all"
                    >
                      Learn more <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          GULF STUDENTS — dark futuristic
      ══════════════════════════════════════════ */}
      <section className="py-20 section-dark-futuristic">
        <div className="container-x relative z-10">
          <ScrollReveal className="text-center mb-12">
            <div className="section-pill mb-4 w-fit mx-auto" style={{ background: "rgba(255,255,255,0.08)", color: "#fff", border: "1px solid rgba(255,255,255,0.15)" }}>
              🌙 Gulf Students · طلاب الخليج
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
              Studying in the UK from the Gulf?
            </h2>
            <p className="text-white/60 max-w-xl mx-auto text-base">
              Dedicated bilingual pages — English &amp; Arabic — with local government scholarships, university guides, IELTS requirements, and tuition fees for every Gulf country.
            </p>
            <p className="mt-2 text-white/35 text-sm" style={{ fontFamily: "'Noto Kufi Arabic', system-ui, sans-serif", direction: "rtl" }}>
              صفحات مخصصة بالعربية لكل دولة خليجية — منح، جامعات، رسوم، ومتطلبات IELTS
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {gulfDestinations.map((g, i) => (
              <ScrollReveal key={g.href} delay={i * 80}>
                <Link
                  href={g.href}
                  className="gulf-card group block rounded-2xl p-5 text-center h-full transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="text-4xl mb-3 leading-none">{g.flag}</div>
                  <div className="font-semibold text-white text-sm mb-1 group-hover:text-[var(--color-blue-soft)] transition-colors">{g.name}</div>
                  <div className="text-xs text-white/40 mb-2 leading-snug">{g.note}</div>
                  <div className="text-xs text-white/25 leading-snug" style={{ fontFamily: "'Noto Kufi Arabic', system-ui, sans-serif", direction: "rtl" }}>{g.ar}</div>
                  <div className="mt-3 text-xs font-semibold text-white/40 group-hover:text-white/70 transition-colors">
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
            <p className="mt-3 text-[var(--color-text-muted)] max-w-lg mx-auto">
              From first conversation to offer letter — we handle everything so you can focus on your future.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-6 relative">
            <div
              className="hidden md:block absolute top-[2.75rem] left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] h-px"
              style={{ background: "linear-gradient(90deg, var(--color-border), var(--color-blue-soft), var(--color-border))" }}
              aria-hidden="true"
            />
            {steps.map(({ n, Icon, title, desc }, i) => (
              <ScrollReveal key={n} delay={i * 100} direction="scale">
                <div className="relative text-center group">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-[var(--shadow-md)] transition-all duration-300"
                    style={{ background: "var(--color-navy)", boxShadow: "var(--shadow-md)" }}
                  >
                    <Icon size={24} className="text-white" />
                  </div>
                  <div className="text-[0.7rem] font-bold text-[var(--color-action)] tracking-[0.15em] font-mono mb-2">{n}</div>
                  <h3 className="font-bold text-[var(--color-navy)] mb-2 text-[0.9375rem]">{title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{desc}</p>
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
                <div className="card card-glow p-7 flex flex-col gap-5 h-full" style={{ borderTop: "3px solid var(--color-blue)" }}>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => <Star key={j} size={15} fill="#FBBF24" stroke="none" />)}
                  </div>
                  <svg width="28" height="20" viewBox="0 0 28 20" fill="none" aria-hidden="true" className="-mb-2">
                    <path d="M0 20V12.5C0 5.596 4.167 1.25 12.5 0l1.5 2.5C9.833 3.333 7.5 6.167 7.5 10H12.5V20H0ZM15.5 20V12.5C15.5 5.596 19.667 1.25 28 0l1.5 2.5C25.333 3.333 23 6.167 23 10H28V20H15.5Z" fill="var(--color-blue-soft)" />
                  </svg>
                  <p className="text-[0.9375rem] text-[var(--color-text-muted)] leading-relaxed flex-1">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-[var(--color-navy)] flex-shrink-0"
                      style={{ background: t.color }}
                    >
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
            <p className="mt-3 text-[var(--color-text-muted)] max-w-lg mx-auto">
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
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed flex-1">
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
          UK SPECIALIST ROUTES
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-[var(--color-surface-muted)]">
        <div className="container-x">
          <ScrollReveal className="text-center mb-12">
            <div className="section-pill mx-auto mb-4 w-fit">
              <Shield size={13} />
              Already in the UK?
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-navy)]">Specialist UK routes</h2>
            <p className="mt-3 text-[var(--color-text-muted)] max-w-xl mx-auto">
              Two tracks built specifically around current UK rules — for students already here.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <ScrollReveal direction="left">
              <Link
                href="/services/uk-2nd-masters"
                className="group relative overflow-hidden rounded-3xl text-white p-8 hover:shadow-[var(--shadow-xl)] transition-all duration-300 hover:-translate-y-2 block h-full section-dark-futuristic"
              >
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10 blur-3xl" style={{ background: "var(--color-blue)" }} aria-hidden="true" />
                <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-10 blur-2xl" style={{ background: "var(--color-action)" }} aria-hidden="true" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
                    <BookOpen size={22} className="text-white" />
                  </div>
                  <div className="text-xs font-bold tracking-[0.1em] text-white/40 mb-2 uppercase">Specialist Service</div>
                  <h3 className="text-xl font-bold mb-3">Second Master&apos;s in the UK</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    Stay on the Graduate Route, switch fields, or stack qualifications. We find the right MSc — not the easiest one.
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-white/80 group-hover:gap-3 transition-all">
                    Explore this route <ArrowRight size={15} />
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <Link
                href="/services/uk-research-dependants"
                className="group relative overflow-hidden rounded-3xl border-2 border-[var(--color-navy)] bg-white p-8 hover:bg-[var(--color-navy)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-xl)] block h-full"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-navy)] group-hover:bg-white/10 flex items-center justify-center mb-5 transition-colors duration-300">
                    <Users size={22} className="text-white" />
                  </div>
                  <div className="text-xs font-bold tracking-[0.1em] text-[var(--color-text-subtle)] group-hover:text-white/40 mb-2 uppercase transition-colors duration-300">Specialist Service</div>
                  <h3 className="text-xl font-bold mb-3 text-[var(--color-navy)] group-hover:text-white transition-colors duration-300">Research Routes for Families</h3>
                  <p className="text-[var(--color-text-muted)] group-hover:text-white/70 text-sm leading-relaxed mb-6 transition-colors duration-300">
                    MRes, MPhil, PhD options that still allow your spouse and children to join you under post-Jan-2024 UK rules.
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-blue)] group-hover:text-white/80 group-hover:gap-3 transition-all duration-300">
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
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
                Most consultancies earn commission from the universities they recommend. We don&apos;t. Our fee is transparent, disclosed upfront, and paid by you — which means our shortlist is genuinely built around your goals.
              </p>
              <div className="space-y-4">
                {[
                  { text: "No hidden university commissions — ever" },
                  { text: "Average response time: under 2 hours" },
                  { text: "96% offer rate across all destinations" },
                  { text: "Specialists in 5 countries, not generalists" },
                  { text: "Transparent fee structure — agreed upfront" },
                ].map(({ text }) => (
                  <div key={text} className="flex items-center gap-3 text-sm text-[var(--color-text-muted)]">
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
                { n: "96%",  l: "Offer rate",           Icon: TrendingUp   },
                { n: "40+",  l: "Countries served",     Icon: Globe        },
                { n: "50+",  l: "Universities worldwide", Icon: Award        },
                { n: "5",    l: "Study destinations",   Icon: GraduationCap },
              ].map(({ n, l, Icon }, i) => (
                <ScrollReveal key={l} delay={i * 100} direction="scale">
                  <div className="card card-glow p-7 text-center">
                    <div className="w-11 h-11 rounded-2xl bg-[var(--color-blue-subtle)] flex items-center justify-center mx-auto mb-4">
                      <Icon size={20} className="text-[var(--color-blue)]" />
                    </div>
                    <div className="text-3xl font-extrabold text-[var(--color-navy)] tracking-tight">{n}</div>
                    <div className="text-sm text-[var(--color-text-muted)] mt-1">{l}</div>
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
          FINAL CTA — dark cinematic with image
      ══════════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden bg-[#05080F]">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80"
            alt="Students at university campus"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(5,8,15,0.95) 0%, rgba(12,17,32,0.92) 50%, rgba(5,8,15,0.90) 100%)" }} />
        </div>

        {/* Glow blobs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, rgba(79,70,229,0.15) 0%, transparent 70%)" }} aria-hidden="true" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, rgba(6,182,212,0.10) 0%, transparent 70%)" }} aria-hidden="true" />

        <div className="container-x relative z-10">
          <ScrollReveal direction="scale">
            <div className="text-white text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-2 text-sm font-medium mb-6 backdrop-blur-sm">
                <GraduationCap size={16} />
                Free consultation · No commitment
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
                Ready to start your
                <br className="hidden md:block" />
                <span className="text-gradient"> university journey?</span>
              </h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
                We&apos;ll tell you exactly what&apos;s realistic for your profile — and how to get there. No cost. No pressure. Just honest advice.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/book"
                  className="btn btn-primary gap-2 text-base px-7 py-4"
                  style={{ background: "#fff", color: "var(--color-navy)", borderColor: "#fff", boxShadow: "var(--shadow-lg)" }}
                >
                  Book Free Consultation
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="https://wa.me/447000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost-white gap-2 text-base px-7 py-4"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
