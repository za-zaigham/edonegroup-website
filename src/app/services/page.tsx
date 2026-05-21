import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, BookOpen, Users, FileText, Award, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services — University Applications, Scholarships, Visas",
  description:
    "End-to-end support for studying abroad: university applications, scholarship search, Student Route visa (CAS → eVisa), UK 2nd Master's, and research routes with dependants.",
  alternates: { canonical: "https://edonegroup.com/services" },
};

const PILLARS = [
  {
    id: "applications",
    Icon: GraduationCap,
    title: "University Applications",
    sub: "End-to-end support",
    body:
      "We shortlist universities and courses that match your profile and goals, prepare your statement of purpose, polish your CV, and handle the application paperwork — directly with the university or via our authorised partner channels.",
    points: [
      "Profile review and university shortlist",
      "SOP, CV, and reference guidance",
      "Application submission and liaison",
      "Offer-letter negotiation and deferrals",
    ],
    cta: { href: "/apply", label: "Start your application" },
  },
  {
    id: "scholarships",
    Icon: Award,
    title: "Scholarship Search",
    sub: "Funded opportunities",
    body:
      "We help you identify and apply for scholarships you are eligible for — university-funded awards, government schemes (KASP, ADEK, QF, KCO, MoHE), and merit-based bursaries. Each shortlist is built from your academic profile, country, and target courses.",
    points: [
      "Eligibility screening against your profile",
      "Government and university scholarships",
      "Application timelines and document checklists",
      "Personal-statement support for funded routes",
    ],
    cta: { href: "/book", label: "Discuss scholarships" },
  },
  {
    id: "visa",
    Icon: FileText,
    title: "Student Route Visa Support",
    sub: "CAS to eVisa",
    body:
      "Once you have a CAS from your university, we guide you through the UK Student Route visa application: financial evidence, ATAS where applicable, TB test scheduling, biometric appointment, and the UKVI online account where your eVisa lives (BRPs have been retired).",
    points: [
      "CAS verification and pre-flight checks",
      "Financial maintenance evidence",
      "TB test and biometric booking",
      "UKVI online account setup and eVisa walkthrough",
    ],
    cta: { href: "/book", label: "Get visa help" },
  },
  {
    id: "uk-2nd-masters",
    Icon: BookOpen,
    title: "UK 2nd Master's",
    sub: "Graduate Route eligibility",
    body:
      "Already hold a UK Master's? We help you secure a second postgraduate course while preserving Graduate Route eligibility. Specialist advice on course choice, transition timing, and visa continuity.",
    points: [
      "Graduate Route eligibility review",
      "Course shortlist tailored to your career goal",
      "Visa-transition planning",
    ],
    cta: { href: "/services/uk-2nd-masters", label: "Learn more" },
  },
  {
    id: "research-dependants",
    Icon: Users,
    title: "Research Routes + Dependants",
    sub: "Bring your family",
    body:
      "Research-track postgraduate courses (MRes, MPhil, PhD) typically permit eligible dependants. We help you select research-eligible programmes and prepare the dependant visa applications alongside yours.",
    points: [
      "Research-route shortlist",
      "Funded PhD and MRes opportunities",
      "Dependant visa documentation",
    ],
    cta: { href: "/services/uk-research-dependants", label: "Learn more" },
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      {/* Hero */}
      <section className="relative overflow-hidden section-dark py-20 md:py-24">
        <div className="dot-grid-dark" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #4F46E5 0%, #06B6D4 50%, transparent 70%)" }} />
        <div className="container-x relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
            style={{ background: "rgba(79,70,229,0.15)", color: "#A5B4FC" }}>
            What we do
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Services</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Five end-to-end services covering everything from your first university shortlist to the day you land in the UK.
            Work with us directly, or through our authorised partner channels.
          </p>
        </div>
      </section>

      {/* Anchor jump bar */}
      <section className="sticky top-[68px] z-30 bg-white/95 backdrop-blur-md border-b border-[var(--color-border)]">
        <div className="container-x py-3">
          <nav className="flex flex-wrap gap-2 items-center text-xs font-semibold">
            <span className="text-[var(--color-text-subtle)] uppercase tracking-wider mr-1">Jump to:</span>
            {PILLARS.map((p) => (
              <a key={p.id} href={`#${p.id}`}
                className="px-3 py-1.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-blue)] hover:text-[var(--color-blue)] transition-colors">
                {p.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Pillars */}
      <section className="container-x py-16 max-w-5xl mx-auto space-y-16">
        {PILLARS.map(({ id, Icon, title, sub, body, points, cta }) => (
          <article key={id} id={id} className="scroll-mt-[140px] grid md:grid-cols-[auto,1fr] gap-6 md:gap-10 items-start">
            <div className="md:sticky md:top-32">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: "rgba(79,70,229,0.1)", color: "#4F46E5" }}>
                <Icon size={28} />
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-blue)] mb-1">{sub}</div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-3">{title}</h2>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-5">{body}</p>
              <ul className="space-y-2 mb-6">
                {points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-[var(--color-text)]">
                    <CheckCircle2 size={18} className="shrink-0 mt-0.5" style={{ color: "#4F46E5" }} />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <Link href={cta.href}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm border-2 transition-all duration-200 hover:bg-[var(--color-blue)] hover:text-white"
                style={{ borderColor: "#4F46E5", color: "#4F46E5" }}>
                {cta.label} <ArrowRight size={14} />
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* CTA strip */}
      <section className="container-x pb-20">
        <div className="max-w-4xl mx-auto rounded-3xl p-10 md:p-12 text-center text-white"
          style={{ background: "linear-gradient(135deg, #09090B 0%, #18181B 60%, #4F46E5 130%)" }}>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Not sure which service you need?</h2>
          <p className="text-white/70 mb-6 max-w-xl mx-auto">
            Book a free 30-minute consultation. We&apos;ll review your profile and recommend the right route.
          </p>
          <Link href="/book"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all duration-200"
            style={{ background: "white", color: "#09090B" }}>
            Book Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
