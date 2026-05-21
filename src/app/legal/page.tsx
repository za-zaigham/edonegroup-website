import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Shield, Cookie, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal",
  description: "EdOne Group legal documents — Privacy Policy, Terms of Service, Cookie Policy, and Refund Policy.",
  alternates: { canonical: "https://edonegroup.com/legal" },
};

const DOCS = [
  { href: "/legal/privacy", title: "Privacy Policy", sub: "How we handle your personal data (UK GDPR).", Icon: Shield },
  { href: "/legal/terms",   title: "Terms of Service", sub: "Terms that apply when you use our services.", Icon: FileText },
  { href: "/legal/cookies", title: "Cookie Policy", sub: "Which cookies we use and your consent options.", Icon: Cookie },
  { href: "/legal/refund",  title: "Refund Policy", sub: "Refund terms for paid services.", Icon: RefreshCw },
];

export default function LegalIndexPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <section className="section-dark py-16">
        <div className="container-x max-w-3xl">
          <h1 className="text-4xl font-extrabold text-white">Legal</h1>
          <p className="text-white/50 mt-3 text-sm">EDONE GROUP LTD · Company No. 17101141 · Registered in England &amp; Wales</p>
        </div>
      </section>
      <section className="container-x max-w-3xl py-12">
        <div className="grid sm:grid-cols-2 gap-4">
          {DOCS.map(({ href, title, sub, Icon }) => (
            <Link key={href} href={href}
              className="group block p-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-blue)] transition-colors">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                style={{ background: "rgba(79,70,229,0.1)", color: "#4F46E5" }}>
                <Icon size={20} />
              </div>
              <div className="font-semibold text-[var(--color-text)] group-hover:text-[var(--color-blue)] transition-colors">{title}</div>
              <div className="text-xs text-[var(--color-text-muted)] mt-1">{sub}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
