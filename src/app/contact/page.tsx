import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact EdOne Group",
  description:
    "Get in touch with EdOne Group — UK-based education consultancy. WhatsApp, email, or book a free consultation. We respond within 24 hours.",
};

const CHANNELS = [
  {
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.288.173-1.413-.074-.124-.272-.198-.57-.347zM12.005 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.892 6.994c-.003 5.45-4.437 9.884-9.887 9.884zm8.413-18.297A11.815 11.815 0 0012.005 0C5.495 0 .195 5.298.193 11.81c0 2.096.547 4.142 1.588 5.945L.057 24l6.412-1.681a11.875 11.875 0 005.535 1.41h.005c6.508 0 11.806-5.298 11.808-11.81 0-3.156-1.228-6.123-3.461-8.355z"/>
      </svg>
    ),
    label: "WhatsApp",
    value: "Chat instantly",
    sub: "Fastest response",
    href: "https://wa.me/447000000000",
    color: "#25D366",
    bg: "rgba(37,211,102,0.1)",
    border: "rgba(37,211,102,0.25)",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "hello@edonegroup.com",
    sub: "Reply within 24 h",
    href: "mailto:hello@edonegroup.com",
    color: "#4F46E5",
    bg: "rgba(79,70,229,0.1)",
    border: "rgba(79,70,229,0.25)",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: "+44 700 000 0000",
    sub: "Mon–Fri 9am–6pm BST",
    href: "tel:+447000000000",
    color: "#06B6D4",
    bg: "rgba(6,182,212,0.1)",
    border: "rgba(6,182,212,0.25)",
  },
];

const FAQS = [
  {
    q: "How long does it take to get a university offer?",
    a: "Most students receive a conditional offer within 2–6 weeks of submitting a complete application. We handle the paperwork and liaise directly with admissions teams.",
  },
  {
    q: "Is your consultation really free?",
    a: "Yes — our initial consultation is completely free with no obligation. We only earn when you successfully enrol, so our incentive is aligned with yours.",
  },
  {
    q: "Can I bring my family to the UK?",
    a: "Many study routes allow eligible dependants (spouse and children under 18). Research-track postgraduate courses typically permit dependants; eligibility depends on your specific visa category.",
  },
  {
    q: "Do you work with students without IELTS?",
    a: "Yes. Several UK universities accept PTE Academic, Duolingo English Test, or university-run pre-sessional English courses as alternatives to IELTS.",
  },
  {
    q: "Which countries do you support?",
    a: "We currently serve students from 40+ countries including Pakistan, India, Nigeria, Bangladesh, Saudi Arabia, UAE, Qatar, Kuwait, and Oman.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      {/* Hero */}
      <section className="relative overflow-hidden section-dark py-20 md:py-24">
        <div className="dot-grid-dark" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #4F46E5 0%, #06B6D4 50%, transparent 70%)" }} />
        <div className="container-x relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Get in Touch</h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Have questions about studying abroad? We&apos;re here to help. Choose how you&apos;d like to connect.
          </p>
        </div>
      </section>

      {/* Contact channels */}
      <section className="container-x py-16">
        <div className="grid gap-5 sm:grid-cols-3 max-w-3xl mx-auto">
          {CHANNELS.map((ch) => (
            <a key={ch.label} href={ch.href}
              target={ch.href.startsWith("http") ? "_blank" : undefined}
              rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="block p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              style={{
                background: ch.bg,
                borderColor: ch.border,
              }}>
              <div className="mb-4" style={{ color: ch.color }}>{ch.icon}</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)] mb-1">{ch.label}</div>
              <div className="font-semibold text-[var(--color-text)] text-sm mb-0.5">{ch.value}</div>
              <div className="text-xs text-[var(--color-muted)]">{ch.sub}</div>
            </a>
          ))}
        </div>

        {/* CTA book */}
        <div className="mt-10 text-center">
          <Link href="/book"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #06B6D4 100%)",
              boxShadow: "0 0 30px rgba(79,70,229,0.4)",
            }}>
            Book Free Consultation →
          </Link>
        </div>
      </section>

      {/* Location note */}
      <section className="container-x pb-16 max-w-3xl mx-auto">
        <div className="p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] flex gap-4 items-start">
          <div className="text-2xl shrink-0">🇬🇧</div>
          <div>
            <h3 className="font-semibold text-[var(--color-text)] mb-1">EdOne Group Ltd</h3>
            <p className="text-sm text-[var(--color-muted)]">
              UK-registered education consultancy. We work with students globally through online consultations —
              no need to visit in person. All advice and guidance is delivered via video call, WhatsApp, and email.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x pb-20 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQS.map((faq) => (
            <details key={faq.q}
              className="group p-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] cursor-pointer">
              <summary className="font-semibold text-[var(--color-text)] list-none flex justify-between items-center gap-3">
                {faq.q}
                <span className="text-[var(--color-muted)] group-open:rotate-45 transition-transform duration-200 shrink-0">+</span>
              </summary>
              <p className="mt-3 text-sm text-[var(--color-muted)] leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
