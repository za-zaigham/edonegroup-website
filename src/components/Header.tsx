"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const destinations = [
  { label: "United Kingdom", flag: "🇬🇧", href: "/study-in/uk", note: "2-yr Graduate Route" },
  { label: "Australia", flag: "🇦🇺", href: "/study-in/australia", note: "Up to 5-yr PSW" },
  { label: "Canada", flag: "🇨🇦", href: "/study-in/canada", note: "3-yr PGWP" },
  { label: "United States", flag: "🇺🇸", href: "/study-in/usa", note: "STEM OPT extension" },
  { label: "Ireland", flag: "🇮🇪", href: "/study-in/ireland", note: "2-yr stayback" },
];

const services = [
  { label: "University Applications", icon: "🎓", href: "/services", note: "End-to-end support" },
  { label: "UK 2nd Master's", icon: "📚", href: "/services/uk-2nd-masters", note: "Graduate Route visa" },
  { label: "Research + Dependants", icon: "👨‍👩‍👧", href: "/services/uk-research-dependants", note: "Bring your family" },
  { label: "Visa Guidance", icon: "📋", href: "/services#visa", note: "CAS to BRP" },
  { label: "Scholarship Search", icon: "💰", href: "/services#scholarships", note: "Funded opportunities" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [destOpen, setDestOpen] = useState(false);
  const [servOpen, setServOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_20px_rgba(15,23,42,0.08)] border-b border-[var(--color-border)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-[68px]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 font-bold tracking-tight text-[var(--color-navy)]">
          <span className="inline-flex w-9 h-9 rounded-xl bg-[var(--color-navy)] text-white items-center justify-center text-sm font-black tracking-tighter">
            E1
          </span>
          <span className="text-[1.05rem]">EdOne<span className="font-normal text-[var(--color-text-muted)]"> Group</span></span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-[var(--color-text-muted)]">

          {/* Destinations dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDestOpen(true)}
            onMouseLeave={() => setDestOpen(false)}
          >
            <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-navy)] transition">
              Destinations
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform duration-200 ${destOpen ? "rotate-180" : ""}`}>
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
            {destOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-[var(--shadow-xl)] border border-[var(--color-border)] p-2 animate-fadeInUp">
                {destinations.map((d) => (
                  <Link
                    key={d.href}
                    href={d.href}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[var(--color-surface-muted)] transition group"
                  >
                    <span className="text-xl">{d.flag}</span>
                    <div>
                      <div className="font-semibold text-[var(--color-navy)] text-sm group-hover:text-[var(--color-blue)]">{d.label}</div>
                      <div className="text-xs text-[var(--color-text-subtle)]">{d.note}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServOpen(true)}
            onMouseLeave={() => setServOpen(false)}
          >
            <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-navy)] transition">
              Services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform duration-200 ${servOpen ? "rotate-180" : ""}`}>
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
            {servOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-[var(--shadow-xl)] border border-[var(--color-border)] p-2 animate-fadeInUp">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[var(--color-surface-muted)] transition group"
                  >
                    <span className="text-xl">{s.icon}</span>
                    <div>
                      <div className="font-semibold text-[var(--color-navy)] text-sm group-hover:text-[var(--color-blue)]">{s.label}</div>
                      <div className="text-xs text-[var(--color-text-subtle)]">{s.note}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/universities" className="px-3 py-2 rounded-lg hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-navy)] transition">
            Universities
          </Link>
          <Link href="/reviews" className="px-3 py-2 rounded-lg hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-navy)] transition">
            Reviews
          </Link>
          <Link href="/about" className="px-3 py-2 rounded-lg hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-navy)] transition">
            About
          </Link>
        </nav>

        {/* CTAs */}
        <div className="flex items-center gap-2.5">
          <Link
            href="/book"
            className="hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold rounded-[var(--radius-md)] text-[var(--color-navy)] hover:bg-[var(--color-surface-muted)] transition border border-[var(--color-border-strong)]"
          >
            Free Consultation
          </Link>
          <Link
            href="/apply"
            className="btn btn-primary text-sm px-4 py-2.5"
          >
            Apply Now →
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[var(--color-surface-muted)] transition"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-white px-4 py-4 space-y-1">
          <div className="pb-2 mb-2 border-b border-[var(--color-border)]">
            <p className="text-xs font-semibold text-[var(--color-text-subtle)] uppercase tracking-wider mb-2">Destinations</p>
            {destinations.map((d) => (
              <Link key={d.href} href={d.href} onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[var(--color-surface-muted)] transition">
                <span>{d.flag}</span>
                <span className="font-medium text-sm text-[var(--color-navy)]">{d.label}</span>
              </Link>
            ))}
          </div>
          <div className="pb-2 mb-2 border-b border-[var(--color-border)]">
            <p className="text-xs font-semibold text-[var(--color-text-subtle)] uppercase tracking-wider mb-2">Services</p>
            {services.map((s) => (
              <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[var(--color-surface-muted)] transition">
                <span>{s.icon}</span>
                <span className="font-medium text-sm text-[var(--color-navy)]">{s.label}</span>
              </Link>
            ))}
          </div>
          <Link href="/universities" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 font-medium text-sm text-[var(--color-navy)] hover:bg-[var(--color-surface-muted)] rounded-xl transition">Universities</Link>
          <Link href="/reviews" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 font-medium text-sm text-[var(--color-navy)] hover:bg-[var(--color-surface-muted)] rounded-xl transition">Reviews</Link>
          <Link href="/about" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 font-medium text-sm text-[var(--color-navy)] hover:bg-[var(--color-surface-muted)] rounded-xl transition">About</Link>
          <div className="pt-3">
            <Link href="/book" onClick={() => setMobileOpen(false)}
              className="block w-full text-center py-3 rounded-xl border border-[var(--color-border-strong)] font-semibold text-sm text-[var(--color-navy)] mb-2">
              Book Free Consultation
            </Link>
            <Link href="/apply" onClick={() => setMobileOpen(false)}
              className="block w-full text-center py-3 rounded-xl bg-[var(--color-action)] text-white font-semibold text-sm">
              Apply Now →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
