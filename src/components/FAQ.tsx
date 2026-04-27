"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How much does EdOne's service cost?",
    a: "Our initial consultation is completely free — no commitment, no pressure. For full application support, our fees are transparent and discussed upfront. Many students find our service pays for itself through scholarship guidance and avoiding costly mistakes.",
  },
  {
    q: "How long does the university application process take?",
    a: "Typically 4–12 weeks from initial consultation to offer letter, depending on the university and course. We advise starting at least 6 months before your intended intake. We'll give you a realistic timeline in your first consultation.",
  },
  {
    q: "Can I bring my family to the UK with me?",
    a: "Yes — but the rules changed in January 2024. Dependants are now only permitted on Research-level programmes (MRes, MPhil, PhD). We specialise in finding research routes that suit your academic profile AND allow your family to join you.",
  },
  {
    q: "What makes EdOne different from other consultancies?",
    a: "We don't work on commission from universities — we work for you. That means our shortlist is genuinely personalised to your goals, not whoever pays us the most. We also have a 96% offer rate because we only apply to universities where your profile is genuinely competitive.",
  },
  {
    q: "Do you help with visa applications?",
    a: "Yes, end-to-end. From CAS confirmation through to BRP collection. We walk you through every document, help you prepare for the visa interview if required, and have a team that's up to date on the latest UKVI guidance.",
  },
  {
    q: "What if I don't meet the standard entry requirements?",
    a: "It's not always a dealbreaker. Many universities consider contextual admissions, and some programmes have foundation or pre-masters pathways. We'll be honest with you about your options — we won't waste your time or money on applications that won't succeed.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-[var(--color-border)] rounded-2xl overflow-hidden bg-white transition-shadow hover:shadow-[var(--shadow-sm)]"
        >
          <button
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-semibold text-[var(--color-navy)] text-[0.9375rem]">
              {faq.q}
            </span>
            <span
              className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
                open === i
                  ? "bg-[var(--color-action)] text-white rotate-45"
                  : "bg-[var(--color-surface-muted)] text-[var(--color-text-muted)]"
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-[var(--color-text-muted)] text-sm leading-relaxed border-t border-[var(--color-border)] pt-4">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
