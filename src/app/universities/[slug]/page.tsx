import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { queryDatabase, getTitle, getSelect, getRichText, getCheckbox, getUrl, NOTION_DBS } from "@/lib/notion";

function toSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

async function getAllUniversities() {
  const data = await queryDatabase(NOTION_DBS.UNIVERSITIES, {
    filter: { property: "Active", checkbox: { equals: true } },
    revalidate: 3600,
  });
  return data.results.map((p) => ({
    id: p.id,
    name: getTitle(p, "Name"),
    country: getSelect(p, "Country") ?? "",
    city: getRichText(p, "City"),
    tier: getSelect(p, "Tier") ?? "Mid Tier",
    type: getSelect(p, "Type") ?? "",
    portal: getUrl(p, "Application Portal") ?? "",
    active: getCheckbox(p, "Active"),
    slug: toSlug(getTitle(p, "Name")),
    notes: getRichText(p, "Notes"),
    commissionNotes: getRichText(p, "Commission Notes"),
    intakeMonths: getRichText(p, "Intake Months"),
  }));
}

export async function generateStaticParams() {
  try {
    const unis = await getAllUniversities();
    return unis.filter((u) => u.active && u.name).map((u) => ({ slug: u.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const unis = await getAllUniversities();
    const uni = unis.find((u) => u.slug === slug);
    if (!uni) return { title: "University Not Found" };
    return {
      title: `${uni.name} — Study in ${uni.country}`,
      description: `Apply to ${uni.name} through EdOne Group — ${uni.city}. ${uni.tier} institution. Free consultation and application support.`,
    };
  } catch {
    return { title: "University" };
  }
}

const DEST_FLAGS: Record<string, string> = {
  UK: "🇬🇧", Australia: "🇦🇺", Canada: "🇨🇦", USA: "🇺🇸", Ireland: "🇮🇪",
};

const TIER_INFO: Record<string, { label: string; color: string; desc: string }> = {
  "Russell Group": {
    label: "Russell Group",
    color: "text-amber-600",
    desc: "Member of the UK's leading research university association — equivalent to the US Ivy League for research quality.",
  },
  "Top 200": {
    label: "Top 200 Globally",
    color: "text-indigo-600",
    desc: "Ranked in the global top 200 — strong academic reputation with excellent graduate outcomes.",
  },
  "Mid Tier": {
    label: "Mid-Tier University",
    color: "text-zinc-600",
    desc: "Solid UK/international university with recognised degree, good employability, and often more flexible entry requirements.",
  },
};

export default async function UniversityDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let uni: Awaited<ReturnType<typeof getAllUniversities>>[0] | undefined;

  try {
    const unis = await getAllUniversities();
    uni = unis.find((u) => u.slug === slug);
  } catch {
    notFound();
  }

  if (!uni) notFound();

  const tierInfo = TIER_INFO[uni.tier] ?? TIER_INFO["Mid Tier"];

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      {/* Breadcrumb hero */}
      <section className="section-dark py-14 md:py-20">
        <div className="container-x max-w-4xl">
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-5">
            <Link href="/universities" className="hover:text-white/70 transition">Universities</Link>
            <span>/</span>
            <span className="text-white/60">{uni.name}</span>
          </nav>
          <div className="flex items-start gap-4">
            <span className="text-4xl">{DEST_FLAGS[uni.country] ?? "🏛️"}</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">{uni.name}</h1>
              <p className="text-white/50 mt-1 text-sm">
                {uni.city}{uni.country ? ` · ${uni.country}` : ""}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container-x max-w-4xl py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { label: "Country", value: uni.country },
                { label: "City/Campus", value: uni.city || "—" },
                { label: "University Type", value: uni.type || "Public" },
              ].map((s) => (
                <div key={s.label}
                  className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
                  <div className="text-xs text-[var(--color-muted)] mb-1">{s.label}</div>
                  <div className="font-semibold text-[var(--color-text)] text-sm">{s.value}</div>
                </div>
              ))}
            </div>

            {/* Tier info */}
            <div className="p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
              <div className="flex items-center gap-2 mb-2">
                <span className={`font-semibold text-sm ${tierInfo.color}`}>{tierInfo.label}</span>
              </div>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">{tierInfo.desc}</p>
            </div>

            {/* Intake */}
            {uni.intakeMonths && (
              <div>
                <h3 className="font-semibold text-[var(--color-text)] mb-3">Available Intakes</h3>
                <p className="text-sm text-[var(--color-muted)]">{uni.intakeMonths}</p>
              </div>
            )}

            {/* Notes */}
            {uni.notes && (
              <div>
                <h3 className="font-semibold text-[var(--color-text)] mb-3">About This University</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed whitespace-pre-line">{uni.notes}</p>
              </div>
            )}

            {/* Entry requirements placeholder */}
            <div>
              <h3 className="font-semibold text-[var(--color-text)] mb-4">Typical Entry Requirements</h3>
              <div className="space-y-3">
                {[
                  { label: "Undergraduate degree", value: "2:2 or above (or equivalent)" },
                  { label: "English language", value: "IELTS 6.0+ (or equivalent)" },
                  { label: "Application deadline", value: "Rolling — apply early for guaranteed intake" },
                ].map((r) => (
                  <div key={r.label}
                    className="flex justify-between gap-4 py-2.5 border-b border-[var(--color-border)] text-sm">
                    <span className="text-[var(--color-muted)]">{r.label}</span>
                    <span className="font-medium text-[var(--color-text)]">{r.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[var(--color-muted)] mt-3">
                * Requirements vary by course. Book a consultation for your specific profile.
              </p>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="space-y-4">
            <div className="sticky top-24 space-y-4">
              <div className="p-6 rounded-2xl border border-indigo-400/20"
                style={{ background: "linear-gradient(135deg, rgba(79,70,229,0.08), rgba(6,182,212,0.06))" }}>
                <h3 className="font-bold text-[var(--color-text)] mb-2">Apply via EdOne</h3>
                <p className="text-xs text-[var(--color-muted)] mb-5 leading-relaxed">
                  We support applications to {uni.name}. Apply through EdOne for guided support from shortlisting to offer — at no cost to you.
                </p>
                <Link href="/apply"
                  className="block w-full py-3 px-4 rounded-xl font-bold text-white text-sm text-center transition-all"
                  style={{ background: "linear-gradient(135deg, #4F46E5, #06B6D4)", boxShadow: "0 0 20px rgba(79,70,229,0.3)" }}>
                  Start Application →
                </Link>
                <Link href="/book"
                  className="block w-full mt-2 py-3 px-4 rounded-xl font-semibold text-[var(--color-text)] text-sm text-center border border-[var(--color-border)] hover:border-indigo-400/40 transition-all">
                  Book Free Consultation
                </Link>
              </div>

              <div className="p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
                <div className="flex items-start gap-3">
                  <span className="text-xl">🎓</span>
                  <div>
                    <div className="text-sm font-medium text-[var(--color-text)] mb-1">Free Application Support</div>
                    <div className="text-xs text-[var(--color-muted)]">
                      EdOne guides your application end-to-end — no fees to you.
                    </div>
                  </div>
                </div>
              </div>

              {uni.portal && (
                <a href={uni.portal} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-[var(--color-blue)] hover:underline">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Official university website →
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Back */}
      <div className="container-x max-w-4xl pb-12">
        <Link href="/universities"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-blue)] transition-colors">
          ← Back to all universities
        </Link>
      </div>
    </div>
  );
}
