import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="container-x py-12 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-block w-8 h-8 rounded-lg bg-[var(--color-primary)] text-white grid place-items-center text-sm font-bold">
              E1
            </span>
            <span>EdOne Group</span>
          </div>
          <p className="mt-3 text-sm text-[var(--color-text-muted)]">
            UK-registered education consultancy. Honest counselling for students from
            South Asia, Africa, and the UK itself.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
            <li><Link href="/services" className="hover:text-[var(--color-text)]">All services</Link></li>
            <li><Link href="/services/uk-2nd-masters" className="hover:text-[var(--color-text)]">UK 2nd Masters</Link></li>
            <li><Link href="/services/uk-research-dependants" className="hover:text-[var(--color-text)]">Research routes (dependants)</Link></li>
            <li><Link href="/services#visa" className="hover:text-[var(--color-text)]">Visa support</Link></li>
            <li><Link href="/services#scholarships" className="hover:text-[var(--color-text)]">Scholarship sourcing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Destinations</h4>
          <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
            <li><Link href="/study-in/uk" className="hover:text-[var(--color-text)]">United Kingdom</Link></li>
            <li><Link href="/study-in/australia" className="hover:text-[var(--color-text)]">Australia</Link></li>
            <li><Link href="/study-in/canada" className="hover:text-[var(--color-text)]">Canada</Link></li>
            <li><Link href="/study-in/usa" className="hover:text-[var(--color-text)]">United States</Link></li>
            <li><Link href="/study-in/ireland" className="hover:text-[var(--color-text)]">Ireland</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
            <li><a href="mailto:hello@edonegroup.com" className="hover:text-[var(--color-text)]">hello@edonegroup.com</a></li>
            <li><a href="https://wa.me/447XXXXXXXXX" className="hover:text-[var(--color-text)]">WhatsApp us</a></li>
            <li><Link href="/book" className="hover:text-[var(--color-text)]">Book a free consultation</Link></li>
          </ul>
        </div>
      </div>

      {/* Accreditations strip placeholder — populated from Notion when records exist */}
      {/* <AccreditationsStrip /> */}

      <div className="border-t border-[var(--color-border)]">
        <div className="container-x py-5 flex flex-col md:flex-row gap-2 md:items-center md:justify-between text-xs text-[var(--color-text-subtle)]">
          <div>© {new Date().getFullYear()} EdOne Group Ltd. All rights reserved.</div>
          <div className="flex gap-4">
            <Link href="/legal/privacy">Privacy</Link>
            <Link href="/legal/terms">Terms</Link>
            <Link href="/legal/cookies">Cookies</Link>
            <span>ICO: pending</span>
            <span>Companies House: pending</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
