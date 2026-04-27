import type { Metadata } from "next";
import Link from "next/link";
import { queryDatabase, getTitle, getSelect, getRichText, getCheckbox, NOTION_DBS } from "@/lib/notion";

export const metadata: Metadata = {
  title: "Universities We Work With — UK, Australia, Canada & More",
  description:
    "Browse universities EdOne Group supports applications to across the UK, Australia, Canada, USA, and Ireland. Filter by destination, tier, and intake.",
};

function toSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

const DEST_FLAGS: Record<string, string> = {
  UK: "🇬🇧",
  Australia: "🇦🇺",
  Canada: "🇨🇦",
  USA: "🇺🇸",
  Ireland: "🇮🇪",
};

const TIER_COLORS: Record<string, string> = {
  "Russell Group":  "bg-amber-500/10 text-amber-600 border-amber-500/20",
  "Top 200":        "bg-indigo-500/10 text-indigo-600 border-indigo-500/20",
  "Mid Tier":       "bg-zinc-500/10 text-zinc-600 border-zinc-300",
  "Pathway / FE":   "bg-cyan-500/10 text-cyan-600 border-cyan-300",
};

export default async function UniversitiesPage() {
  let universities: Array<{
    id: string; name: string; country: string; city: string; tier: string; slug: string;
  }> = [];

  try {
    const data = await queryDatabase(NOTION_DBS.UNIVERSITIES, {
      filter: { property: "Active", checkbox: { equals: true } },
      sorts: [{ property: "Country", direction: "ascending" }],
      revalidate: 3600,
    });

    universities = data.results
      .map((p) => ({
        id: p.id,
        name: getTitle(p, "Name"),
        country: getSelect(p, "Country") ?? "",
        city: getRichText(p, "City"),
        tier: getSelect(p, "Tier") ?? "Mid Tier",
        slug: toSlug(getTitle(p, "Name")),
        active: getCheckbox(p, "Active"),
      }))
      .filter((u) => u.active && u.name);
  } catch {
    // fallback — show empty state
  }

  const byCountry = universities.reduce<Record<string, typeof universities>>((acc, u) => {
    const c = u.country || "Other";
    if (!acc[c]) acc[c] = [];
    acc[c].push(u);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      {/* Hero */}
      <section className="relative overflow-hidden section-dark py-20 md:py-24">
        <div className="dot-grid-dark" />
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #4F46E5 0%, transparent 70%)" }} />
        <div className="container-x relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-sm text-indigo-300 font-medium mb-5">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            {universities.length}+ Universities
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Universities We Work With
          </h1>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            We support student applications to universities across the UK and beyond — helping you find the right fit and submit a strong application.
          </p>
        </div>
      </section>

      {/* University grid by country */}
      <section className="container-x py-16">
        {Object.entries(byCountry).map(([country, unis]) => (
          <div key={country} className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{DEST_FLAGS[country] ?? "🌍"}</span>
              <h2 className="text-xl font-bold text-[var(--color-text)]">{country}</h2>
              <span className="text-sm text-[var(--color-muted)] ml-1">({unis.length})</span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {unis.map((u) => (
                <Link key={u.id} href={`/universities/${u.slug}`}
                  className="group block p-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-indigo-400/40 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-semibold text-[var(--color-text)] text-sm leading-snug group-hover:text-[var(--color-blue)] transition-colors">
                      {u.name}
                    </h3>
                    <span className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded-full border ${
                      TIER_COLORS[u.tier] ?? TIER_COLORS["Mid Tier"]
                    }`}>
                      {u.tier}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--color-muted)]">{u.city}</p>
                  <div className="mt-3 text-xs text-[var(--color-blue)] font-medium group-hover:underline">
                    View details →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {universities.length === 0 && (
          <div className="text-center py-20 text-[var(--color-muted)]">
            <div className="text-4xl mb-4">🏛️</div>
            <p className="text-lg font-medium mb-2">University catalog loading…</p>
            <p className="text-sm">
              Reach us at{" "}
              <a href="mailto:hello@edonegroup.com" className="text-[var(--color-blue)] hover:underline">
                hello@edonegroup.com
              </a>{" "}
              for a personalised university shortlist.
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 p-8 rounded-2xl text-center"
          style={{ background: "linear-gradient(135deg, rgba(79,70,229,0.08) 0%, rgba(6,182,212,0.08) 100%)", border: "1px solid rgba(79,70,229,0.15)" }}>
          <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">
            Not sure which university is right for you?
          </h3>
          <p className="text-[var(--color-muted)] text-sm mb-5">
            Book a free consultation — we&apos;ll shortlist the best options based on your profile.
          </p>
          <Link href="/book"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white text-sm transition-all duration-200"
            style={{ background: "linear-gradient(135deg, #4F46E5, #06B6D4)", boxShadow: "0 0 24px rgba(79,70,229,0.35)" }}>
            Book Free Consultation →
          </Link>
        </div>
      </section>
    </div>
  );
}
