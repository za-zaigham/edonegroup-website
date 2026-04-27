import Link from "next/link";
import Image from "next/image";

/* Quick-win trust signals shown in the accreditations strip */
const TRUST_BADGES = [
  { label: "UK Registered Company", icon: "🇬🇧" },
  { label: "ICO Registered", icon: "🔒" },
  { label: "Google Reviews 4.9★", icon: "⭐" },
  { label: "GDPR Compliant", icon: "✅" },
  { label: "40+ Countries Served", icon: "🌍" },
  { label: "Free Consultation", icon: "🎓" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-white">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">

        {/* Brand */}
        <div className="md:col-span-1">
          <Image src="/logo-white.png" alt="EdOne Group" width={130} height={36} className="h-9 w-auto" />
          <p className="mt-4 text-sm text-white/60 leading-relaxed">
            UK-based education consultancy helping students from 40+ countries
            secure offers at top universities worldwide.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="https://wa.me/447000000000" target="_blank" rel="noopener"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--color-whatsapp)] text-white text-sm font-semibold hover:opacity-90 transition">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.288.173-1.413-.074-.124-.272-.198-.57-.347zM12.005 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.892 6.994c-.003 5.45-4.437 9.884-9.887 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.005 0C5.495 0 .195 5.298.193 11.81c0 2.096.547 4.142 1.588 5.945L.057 24l6.412-1.681a11.875 11.875 0 0 0 5.535 1.41h.005c6.508 0 11.806-5.298 11.808-11.81 0-3.156-1.228-6.123-3.461-8.355z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Services</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li><Link href="/services" className="hover:text-white transition">All Services</Link></li>
            <li><Link href="/services/uk-2nd-masters" className="hover:text-white transition">UK 2nd Master&apos;s</Link></li>
            <li><Link href="/services/uk-research-dependants" className="hover:text-white transition">Research + Dependants</Link></li>
            <li><Link href="/services#visa" className="hover:text-white transition">Visa Guidance</Link></li>
            <li><Link href="/services#scholarships" className="hover:text-white transition">Scholarship Search</Link></li>
          </ul>
        </div>

        {/* Destinations */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Destinations</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li><Link href="/study-in/uk" className="hover:text-white transition">🇬🇧 United Kingdom</Link></li>
            <li><Link href="/study-in/australia" className="hover:text-white transition">🇦🇺 Australia</Link></li>
            <li><Link href="/study-in/canada" className="hover:text-white transition">🇨🇦 Canada</Link></li>
            <li><Link href="/study-in/usa" className="hover:text-white transition">🇺🇸 United States</Link></li>
            <li><Link href="/study-in/ireland" className="hover:text-white transition">🇮🇪 Ireland</Link></li>
          </ul>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3 mt-6">Gulf Students · طلاب الخليج</h4>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li><Link href="/gulf/saudi-arabia" className="hover:text-white transition">🇸🇦 Saudi Arabia</Link></li>
            <li><Link href="/gulf/uae" className="hover:text-white transition">🇦🇪 UAE</Link></li>
            <li><Link href="/gulf/qatar" className="hover:text-white transition">🇶🇦 Qatar</Link></li>
            <li><Link href="/gulf/kuwait" className="hover:text-white transition">🇰🇼 Kuwait</Link></li>
            <li><Link href="/gulf/oman" className="hover:text-white transition">🇴🇲 Oman</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li>
              <a href="mailto:hello@edonegroup.com" className="hover:text-white transition">
                hello@edonegroup.com
              </a>
            </li>
            <li><Link href="/book" className="hover:text-white transition">Book Free Consultation</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About EdOne</Link></li>
            <li><Link href="/universities" className="hover:text-white transition">Universities</Link></li>
            <li><Link href="/reviews" className="hover:text-white transition">Student Reviews</Link></li>
            <li><Link href="/resources" className="hover:text-white transition">Blog &amp; Resources</Link></li>
          </ul>
        </div>
      </div>

      {/* Accreditations strip */}
      <div className="border-t border-white/10">
        <div className="container-x py-5">
          <p className="text-xs text-white/30 uppercase tracking-widest mb-4 text-center">Trust &amp; Accreditations</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {TRUST_BADGES.map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-xs text-white/50">
                <span>{b.icon}</span>
                <span>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-white/40">
          <div>© {new Date().getFullYear()} EdOne Group Ltd. All rights reserved.</div>
          <div className="flex flex-wrap gap-4">
            <Link href="/legal/privacy" className="hover:text-white/70 transition">Privacy Policy</Link>
            <Link href="/legal/terms" className="hover:text-white/70 transition">Terms of Service</Link>
            <Link href="/legal/cookies" className="hover:text-white/70 transition">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
