import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chevening Scholarships 2025–26 — How to Apply",
  description:
    "Complete guide to Chevening Scholarships — the UK Government's flagship award for future leaders. Eligibility, deadlines, what's covered, and how EdOne can help.",
};

const COVERED = [
  "Full university tuition fees",
  "Monthly living allowance (approx. £1,200–1,400/month)",
  "Return economy flights to the UK",
  "UK student visa application fee",
  "Pre-departure allowance",
  "Arrival allowance",
];

const ELIGIBILITY = [
  "Citizen of a Chevening-eligible country (160+ countries)",
  "Minimum 2:1 undergraduate degree (or equivalent)",
  "At least 2 years of work experience",
  "Strong leadership potential and ambition",
  "Not a UK or dual UK citizen",
  "Meet English language requirements (IELTS 6.5+ or equivalent)",
];

const TIMELINE = [
  { month: "August", event: "Applications open" },
  { month: "November 5", event: "Application deadline — 12:00 noon GMT" },
  { month: "Jan–Feb", event: "Short-listing by British Embassies" },
  { month: "Feb–March", event: "Interviews with British Embassy" },
  { month: "April", event: "Results announced" },
  { month: "September", event: "Scholarship begins at UK university" },
];

export default function CheveningPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <section className="relative overflow-hidden section-dark py-20">
        <div className="dot-grid-dark" />
        <div className="container-x relative z-10 max-w-4xl">
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-5">
            <Link href="/scholarships" className="hover:text-white/70 transition">Scholarships</Link>
            <span>/</span>
            <span className="text-white/60">Chevening</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🇬🇧</span>
            <span className="text-xs font-bold text-white px-3 py-1.5 rounded-full bg-red-500 animate-pulse">
              Deadline: 5 November 2025
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">Chevening Scholarships</h1>
          <p className="text-white/60 text-lg max-w-2xl">
            The UK Government&apos;s flagship international scholarship — fully funded Master&apos;s at any UK university for outstanding future leaders.
          </p>
        </div>
      </section>

      <section className="container-x max-w-4xl py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">What is Chevening?</h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Chevening is funded by the UK Foreign, Commonwealth and Development Office (FCDO). Since 1983, it has supported over 50,000 scholars from around the world. Chevening scholars are selected for their leadership potential — it is highly competitive but achievable with the right application strategy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">What&apos;s Covered</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {COVERED.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 p-3 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]">
                    <span className="text-emerald-500 mt-0.5 shrink-0">✓</span>
                    <span className="text-sm text-[var(--color-text)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Eligibility Requirements</h2>
              <ul className="space-y-2">
                {ELIGIBILITY.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--color-muted)]">
                    <span className="text-[var(--color-blue)] mt-0.5 shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Application Timeline</h2>
              <div className="space-y-0">
                {TIMELINE.map((t, i) => (
                  <div key={t.month} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-3 h-3 rounded-full mt-1 shrink-0 ${i === 1 ? "bg-red-500" : "bg-[var(--color-blue)]"}`} />
                      {i < TIMELINE.length - 1 && <div className="w-px flex-1 bg-[var(--color-border)] my-1" />}
                    </div>
                    <div className="pb-4">
                      <span className={`text-xs font-bold ${i === 1 ? "text-red-500" : "text-[var(--color-blue)]"}`}>{t.month}</span>
                      <p className="text-sm text-[var(--color-text)] mt-0.5">{t.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-text)] mb-3">How to Apply</h2>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                Applications are submitted through the official Chevening website. You&apos;ll need three UK university choices, two referee letters, and strong personal statements across four essay questions (leadership, networking, studying in the UK, and your career plan).
              </p>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                EdOne Group helps applicants choose the right universities, structure their personal statements, and prepare for Embassy interviews.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="sticky top-24 space-y-4">
              <div className="p-6 rounded-2xl border border-red-400/30"
                style={{ background: "rgba(239,68,68,0.06)" }}>
                <p className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">Application Deadline</p>
                <p className="text-2xl font-extrabold text-[var(--color-text)]">5 Nov 2025</p>
                <p className="text-xs text-[var(--color-muted)] mt-1">12:00 noon GMT — no extensions</p>
              </div>

              <div className="p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
                <h3 className="font-bold text-[var(--color-text)] mb-3">Apply with EdOne Support</h3>
                <p className="text-xs text-[var(--color-muted)] mb-5 leading-relaxed">
                  We help you select your three university choices, structure all four Chevening essays, and prepare for your Embassy interview.
                </p>
                <Link href="/apply"
                  className="block w-full py-3 text-center rounded-xl font-bold text-white text-sm"
                  style={{ background: "linear-gradient(135deg, #4F46E5, #06B6D4)" }}>
                  Start Application →
                </Link>
              </div>

              <a href="https://www.chevening.org/scholarships/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[var(--color-blue)] hover:underline">
                Official Chevening website →
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container-x max-w-4xl pb-12">
        <Link href="/scholarships" className="text-sm text-[var(--color-muted)] hover:text-[var(--color-blue)] transition-colors">
          ← All scholarships
        </Link>
      </div>
    </div>
  );
}
