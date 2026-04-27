import type { Metadata } from "next";
import Link from "next/link";
import { queryDatabase, getRichText, getSelect, getNumber, NOTION_DBS } from "@/lib/notion";
import type { NotionPage } from "@/lib/notion";

export const metadata: Metadata = {
  title: "Student Reviews — Real Stories from EdOne Students",
  description:
    "Hear from students across 40+ countries who secured university offers through EdOne Group. Real stories, real outcomes.",
};

interface Review {
  id: string;
  name: string;
  headline: string;
  fullReview: string;
  rating: number | null;
  country: string;
  course: string;
  year: string;
  angle: string;
}

function extractReview(p: NotionPage): Review {
  const nameProp = p.properties["Student Name (display)"];
  let name = "";
  if (nameProp?.type === "title") {
    name = (nameProp.title as Array<{ plain_text: string }>).map((t) => t.plain_text).join("");
  } else if (nameProp?.type === "rich_text") {
    name = (nameProp.rich_text as Array<{ plain_text: string }>).map((t) => t.plain_text).join("");
  }

  const yearProp = p.properties["Year of Admission"];
  let year = "";
  if (yearProp?.type === "number" && yearProp.number) {
    year = String(yearProp.number);
  }

  return {
    id: p.id,
    name,
    headline: getRichText(p, "Headline / Pull Quote"),
    fullReview: getRichText(p, "Full Review"),
    rating: getNumber(p, "Rating"),
    country: getSelect(p, "Origin Country") ?? "",
    course: getRichText(p, "Course / Program"),
    year,
    angle: getSelect(p, "Recruitment Angle") ?? "",
  };
}

const COUNTRY_FLAGS: Record<string, string> = {
  Pakistan: "🇵🇰", India: "🇮🇳", Nigeria: "🇳🇬", Bangladesh: "🇧🇩",
  "Sri Lanka": "🇱🇰", Nepal: "🇳🇵", "Saudi Arabia": "🇸🇦", UAE: "🇦🇪",
  Qatar: "🇶🇦", Kuwait: "🇰🇼", Oman: "🇴🇲",
};

const ANGLE_TAGS: Record<string, string> = {
  "UK 2nd Masters":     "🎓 2nd Master's",
  "Research + Dependants": "👨‍👩‍👧 With Family",
  "No IELTS Route":     "📝 No IELTS",
  "Scholarship":        "💰 Scholarship",
  "Jan Intake":         "📅 Jan Intake",
};

export default async function ReviewsPage() {
  let reviews: Review[] = [];

  try {
    const data = await queryDatabase(NOTION_DBS.REVIEWS, {
      sorts: [{ property: "Rating", direction: "descending" }],
      revalidate: 3600,
    });
    reviews = data.results.map(extractReview).filter((r) => r.name);
  } catch {
    // show placeholder state
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      {/* Hero */}
      <section className="relative overflow-hidden section-dark py-20 md:py-24">
        <div className="dot-grid-dark" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #06B6D4 0%, transparent 70%)" }} />
        <div className="container-x relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Student Stories</h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Real students. Real universities. Real outcomes.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-white/50">
            {[
              { icon: "🌍", label: "40+ Countries" },
              { icon: "⭐", label: "4.9 avg rating" },
              { icon: "🎓", label: "Multiple destinations" },
            ].map((b) => (
              <span key={b.label} className="flex items-center gap-2">
                {b.icon} {b.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="container-x py-16">
        {reviews.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.id}
                className="flex flex-col p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-indigo-400/30 hover:shadow-md transition-all duration-200">
                {/* Stars */}
                {r.rating && (
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < r.rating! ? "text-amber-400" : "text-zinc-300"}`}
                        fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                )}

                {/* Headline */}
                {r.headline && (
                  <blockquote className="text-[var(--color-text)] font-medium text-sm leading-relaxed mb-4 flex-1">
                    &ldquo;{r.headline}&rdquo;
                  </blockquote>
                )}

                {/* Full review excerpt */}
                {r.fullReview && (
                  <p className="text-xs text-[var(--color-muted)] leading-relaxed mb-4 line-clamp-3">
                    {r.fullReview}
                  </p>
                )}

                {/* Tags */}
                {r.angle && ANGLE_TAGS[r.angle] && (
                  <span className="inline-flex w-fit text-xs px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 border border-indigo-200 mb-3">
                    {ANGLE_TAGS[r.angle]}
                  </span>
                )}

                {/* Student info */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--color-border)]">
                  <div>
                    <div className="text-sm font-semibold text-[var(--color-text)]">
                      {COUNTRY_FLAGS[r.country] ?? ""} {r.name}
                    </div>
                    {r.course && <div className="text-xs text-[var(--color-muted)]">{r.course}</div>}
                  </div>
                  {r.year && <div className="text-xs text-[var(--color-muted)]">{r.year}</div>}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Empty / pending state
          <div className="max-w-2xl mx-auto text-center py-16">
            <div className="text-5xl mb-6">⭐</div>
            <h2 className="text-2xl font-bold text-[var(--color-text)] mb-3">Reviews Coming Soon</h2>
            <p className="text-[var(--color-muted)] mb-8">
              We&apos;re collecting verified student stories. In the meantime, check our{" "}
              <a href="https://g.page/r/edonegroup" target="_blank" rel="noopener noreferrer"
                className="text-[var(--color-blue)] hover:underline">Google Reviews</a>{" "}
              or reach out to speak with a current student.
            </p>
            <Link href="/apply"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white text-sm"
              style={{ background: "linear-gradient(135deg, #4F46E5, #06B6D4)", boxShadow: "0 0 24px rgba(79,70,229,0.35)" }}>
              Start Your Own Story →
            </Link>
          </div>
        )}

        {/* CTA */}
        {reviews.length > 0 && (
          <div className="mt-14 text-center">
            <h3 className="text-xl font-bold text-[var(--color-text)] mb-3">Ready to write your story?</h3>
            <p className="text-[var(--color-muted)] text-sm mb-6">Book a free consultation and let&apos;s find your university.</p>
            <Link href="/apply"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white"
              style={{ background: "linear-gradient(135deg, #4F46E5, #06B6D4)", boxShadow: "0 0 24px rgba(79,70,229,0.35)" }}>
              Apply Now — It&apos;s Free →
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
