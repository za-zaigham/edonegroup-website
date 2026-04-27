import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[var(--color-surface)]/80 backdrop-blur border-b border-[var(--color-border)]">
      <div className="container-x flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-lg">
          <span className="inline-block w-8 h-8 rounded-lg bg-[var(--color-primary)] text-white grid place-items-center text-sm font-bold">
            E1
          </span>
          <span>EdOne Group</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm text-[var(--color-text-muted)]">
          <Link href="/study-in/uk" className="hover:text-[var(--color-text)] transition">Study in UK</Link>
          <Link href="/study-in/australia" className="hover:text-[var(--color-text)] transition">Australia</Link>
          <Link href="/study-in/canada" className="hover:text-[var(--color-text)] transition">Canada</Link>
          <Link href="/services" className="hover:text-[var(--color-text)] transition">Services</Link>
          <Link href="/universities" className="hover:text-[var(--color-text)] transition">Universities</Link>
          <Link href="/reviews" className="hover:text-[var(--color-text)] transition">Stories</Link>
          <Link href="/about" className="hover:text-[var(--color-text)] transition">About</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/book"
            className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium rounded-[var(--radius-md)] border border-[var(--color-border-strong)] hover:bg-[var(--color-surface-muted)] transition"
          >
            Book free consultation
          </Link>
          <Link
            href="/apply"
            className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-[var(--radius-md)] bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition"
          >
            Apply now
          </Link>
        </div>
      </div>
    </header>
  );
}
