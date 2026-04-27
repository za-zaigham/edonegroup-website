"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, GraduationCap, Globe, BookOpen, Users, FileText, Award, MapPin } from "lucide-react";

const destinations = [
  { label: "United Kingdom", flag: "🇬🇧", href: "/study-in/uk", note: "2-yr Graduate Route" },
  { label: "Australia", flag: "🇦🇺", href: "/study-in/australia", note: "Up to 5-yr PSW" },
  { label: "Canada", flag: "🇨🇦", href: "/study-in/canada", note: "3-yr PGWP" },
  { label: "United States", flag: "🇺🇸", href: "/study-in/usa", note: "STEM OPT extension" },
  { label: "Ireland", flag: "🇮🇪", href: "/study-in/ireland", note: "2-yr stayback" },
];

const services = [
  { label: "University Applications", Icon: GraduationCap, href: "/services", note: "End-to-end support" },
  { label: "UK 2nd Master's", Icon: BookOpen, href: "/services/uk-2nd-masters", note: "Graduate Route visa" },
  { label: "Research + Dependants", Icon: Users, href: "/services/uk-research-dependants", note: "Bring your family" },
  { label: "Visa Guidance", Icon: FileText, href: "/services#visa", note: "CAS to BRP" },
  { label: "Scholarship Search", Icon: Award, href: "/services#scholarships", note: "Funded opportunities" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [destOpen, setDestOpen] = useState(false);
  const [servOpen, setServOpen] = useState(false);
  const [mobileDestOpen, setMobileDestOpen] = useState(false);
  const [mobileServOpen, setMobileServOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_24px_rgba(15,23,42,0.08)] border-b border-[var(--color-border)]"
          : "bg-white border-b border-[var(--color-border)]"
      }`}
    >
      <div className="container-x flex items-center justify-between h-[68px]">

        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0" aria-label="EdOne Group home">
          <Image src="/logo.png" alt="EdOne Group" width={130} height={36} className="h-9 w-auto" priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5" role="navigation" aria-label="Main navigation">

          {/* Destinations */}
          <div className="relative" onMouseEnter={() => setDestOpen(true)} onMouseLeave={() => setDestOpen(false)}>
            <button
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-navy)] hover:bg-[var(--color-surface-muted)] transition-all duration-150 cursor-pointer"
              aria-expanded={destOpen}
              aria-haspopup="true"
            >
              <MapPin size={15} className="opacity-70" />
              Destinations
              <ChevronDown size={14} className={`transition-transform duration-200 opacity-70 ${destOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`absolute top-full left-0 mt-1.5 w-64 transition-all duration-200 ${destOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
              <div className="bg-white rounded-2xl shadow-[var(--shadow-xl)] border border-[var(--color-border)] p-2">
                {destinations.map((d) => (
                  <Link key={d.href} href={d.href}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[var(--color-surface-muted)] transition-colors group"
                    onClick={() => setDestOpen(false)}
                  >
                    <span className="text-xl leading-none">{d.flag}</span>
                    <div>
                      <div className="text-sm font-semibold text-[var(--color-navy)] group-hover:text-[var(--color-blue)] transition-colors">{d.label}</div>
                      <div className="text-xs text-[var(--color-text-subtle)] mt-0.5">{d.note}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="relative" onMouseEnter={() => setServOpen(true)} onMouseLeave={() => setServOpen(false)}>
            <button
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-navy)] hover:bg-[var(--color-surface-muted)] transition-all duration-150 cursor-pointer"
              aria-expanded={servOpen}
              aria-haspopup="true"
            >
              <GraduationCap size={15} className="opacity-70" />
              Services
              <ChevronDown size={14} className={`transition-transform duration-200 opacity-70 ${servOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`absolute top-full left-0 mt-1.5 w-72 transition-all duration-200 ${servOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
              <div className="bg-white rounded-2xl shadow-[var(--shadow-xl)] border border-[var(--color-border)] p-2">
                {services.map(({ label, Icon, href, note }) => (
                  <Link key={href} href={href}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[var(--color-surface-muted)] transition-colors group"
                    onClick={() => setServOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-[var(--color-blue-subtle)] flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-[var(--color-blue)]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[var(--color-navy)] group-hover:text-[var(--color-blue)] transition-colors">{label}</div>
                      <div className="text-xs text-[var(--color-text-subtle)] mt-0.5">{note}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/universities" className="px-3.5 py-2 rounded-lg text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-navy)] hover:bg-[var(--color-surface-muted)] transition-all duration-150">
            Universities
          </Link>
          <Link href="/reviews" className="px-3.5 py-2 rounded-lg text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-navy)] hover:bg-[var(--color-surface-muted)] transition-all duration-150">
            Reviews
          </Link>
          <Link href="/about" className="px-3.5 py-2 rounded-lg text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-navy)] hover:bg-[var(--color-surface-muted)] transition-all duration-150">
            About
          </Link>
        </nav>

        {/* CTA row */}
        <div className="flex items-center gap-2.5">
          <Link href="/book" className="hidden lg:inline-flex items-center px-4 py-2.5 text-sm font-semibold rounded-[var(--radius-md)] text-[var(--color-navy)] border border-[var(--color-border-strong)] hover:bg-[var(--color-surface-muted)] transition-all duration-150">
            Free Consultation
          </Link>
          <Link href="/apply" className="btn btn-primary text-sm px-4 py-2.5 hidden sm:inline-flex">
            Apply Now
          </Link>
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-[var(--color-surface-muted)] transition-colors text-[var(--color-navy)] cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu — full screen overlay */}
      <div className={`lg:hidden fixed inset-0 top-[68px] z-40 bg-white transition-all duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} overflow-y-auto`}>
        <div className="container-x py-6 space-y-1">

          {/* Destinations accordion */}
          <button
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-[var(--color-surface-muted)] transition-colors text-sm font-semibold text-[var(--color-navy)] cursor-pointer"
            onClick={() => setMobileDestOpen(!mobileDestOpen)}
          >
            <span className="flex items-center gap-2"><MapPin size={16} /> Destinations</span>
            <ChevronDown size={16} className={`transition-transform duration-200 ${mobileDestOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileDestOpen && (
            <div className="pl-4 space-y-0.5">
              {destinations.map((d) => (
                <Link key={d.href} href={d.href} onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-[var(--color-surface-muted)] transition-colors">
                  <span className="text-xl">{d.flag}</span>
                  <div>
                    <div className="text-sm font-medium text-[var(--color-navy)]">{d.label}</div>
                    <div className="text-xs text-[var(--color-text-subtle)]">{d.note}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Services accordion */}
          <button
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-[var(--color-surface-muted)] transition-colors text-sm font-semibold text-[var(--color-navy)] cursor-pointer"
            onClick={() => setMobileServOpen(!mobileServOpen)}
          >
            <span className="flex items-center gap-2"><GraduationCap size={16} /> Services</span>
            <ChevronDown size={16} className={`transition-transform duration-200 ${mobileServOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileServOpen && (
            <div className="pl-4 space-y-0.5">
              {services.map(({ label, Icon, href, note }) => (
                <Link key={href} href={href} onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-[var(--color-surface-muted)] transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-blue-subtle)] flex items-center justify-center">
                    <Icon size={15} className="text-[var(--color-blue)]" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[var(--color-navy)]">{label}</div>
                    <div className="text-xs text-[var(--color-text-subtle)]">{note}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {[
            { href: "/universities", label: "Universities" },
            { href: "/reviews", label: "Reviews" },
            { href: "/about", label: "About" },
          ].map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 rounded-xl text-sm font-semibold text-[var(--color-navy)] hover:bg-[var(--color-surface-muted)] transition-colors">
              {item.label}
            </Link>
          ))}

          <div className="pt-4 space-y-3 border-t border-[var(--color-border)] mt-4">
            <Link href="/book" onClick={() => setMobileOpen(false)}
              className="block w-full text-center py-3 rounded-xl border border-[var(--color-border-strong)] font-semibold text-sm text-[var(--color-navy)] hover:bg-[var(--color-surface-muted)] transition-colors">
              Book Free Consultation
            </Link>
            <Link href="/apply" onClick={() => setMobileOpen(false)}
              className="block w-full text-center py-3.5 rounded-xl bg-[var(--color-action)] text-white font-semibold text-sm hover:bg-[var(--color-action-hover)] transition-colors">
              Apply Now →
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
