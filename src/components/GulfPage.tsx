"use client";

import Link from "next/link";
import { useState } from "react";

/* ── Types ─────────────────────────────────────────────────────────── */

export interface Scholarship {
  nameEn: string;
  nameAr: string;
  descEn: string;
  descAr: string;
  coverage: string;
  coverageAr: string;
  eligibility: string;
  eligibilityAr: string;
}

export interface GulfPageData {
  countryEn: string;
  countryAr: string;
  flag: string;
  taglineEn: string;
  taglineAr: string;
  heroDescEn: string;
  heroDescAr: string;
  stats: { labelEn: string; labelAr: string; value: string }[];
  scholarships: Scholarship[];
  universities: { name: string; rank: string; known: string }[];
  withIelts: {
    scoreEn: string;
    notesEn: string;
    scoreAr: string;
    notesAr: string;
  };
  withoutIelts: {
    optionEn: string;
    descEn: string;
    optionAr: string;
    descAr: string;
  }[];
  fees: { levelEn: string; levelAr: string; range: string }[];
  whyUKEn: { title: string; desc: string }[];
  whyUKAr: { title: string; desc: string }[];
  slug: string;
}

/* ── Component ─────────────────────────────────────────────────────── */

export function GulfPage({ data }: { data: GulfPageData }) {
  const [lang, setLang] = useState<"en" | "ar">("en");
  const isAr = lang === "ar";

  const country = isAr ? data.countryAr : data.countryEn;
  const tagline = isAr ? data.taglineAr : data.taglineEn;
  const heroDesc = isAr ? data.heroDescAr : data.heroDescEn;
  const whyUK = isAr ? data.whyUKAr : data.whyUKEn;

  return (
    <>
      {/* ── Language Toggle ─────────────────────────────────────────── */}
      <div
        style={{ position: "fixed", top: "80px", right: "1rem", zIndex: 50 }}
        aria-label="Language toggle"
      >
        <div
          style={{
            display: "inline-flex",
            borderRadius: "9999px",
            overflow: "hidden",
            border: "1.5px solid #0F172A",
            boxShadow: "0 2px 8px rgba(15,23,42,0.15)",
            background: "#fff",
          }}
        >
          <button
            onClick={() => setLang("en")}
            style={{
              padding: "5px 14px",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.03em",
              background: !isAr ? "#0F172A" : "transparent",
              color: !isAr ? "#F8FAFC" : "#0F172A",
              border: "none",
              cursor: "pointer",
              transition: "all 0.18s",
              lineHeight: 1.4,
            }}
          >
            EN
          </button>
          <button
            onClick={() => setLang("ar")}
            style={{
              padding: "5px 14px",
              fontSize: "0.82rem",
              fontWeight: 600,
              background: isAr ? "#0F172A" : "transparent",
              color: isAr ? "#F8FAFC" : "#0F172A",
              border: "none",
              cursor: "pointer",
              transition: "all 0.18s",
              lineHeight: 1.4,
              fontFamily: "Noto Kufi Arabic, system-ui, sans-serif",
            }}
          >
            عربي
          </button>
        </div>
      </div>

      {/* ── Main Content ─────────────────────────────────────────────── */}
      <div
        dir={isAr ? "rtl" : "ltr"}
        style={
          isAr
            ? { fontFamily: "Noto Kufi Arabic, system-ui, sans-serif" }
            : undefined
        }
      >
        {/* ── 1. Hero ───────────────────────────────────────────────── */}
        <section
          style={{
            background: "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0369A1 100%)",
            padding: "5rem 0 4rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* decorative ring */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              insetInlineEnd: "-8rem",
              top: "-8rem",
              width: "36rem",
              height: "36rem",
              borderRadius: "50%",
              border: "2px solid rgba(255,255,255,0.05)",
              pointerEvents: "none",
            }}
          />
          <div className="container-x" style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
            {/* pill */}
            <div style={{ marginBottom: "1.25rem" }}>
              <span className="section-pill" style={{ background: "rgba(255,255,255,0.12)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}>
                {data.flag}&nbsp;&nbsp;
                {isAr ? `${data.countryAr} — إيدون جروب` : `${data.countryEn} — EdOne Group`}
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                fontWeight: 800,
                color: "#F8FAFC",
                lineHeight: 1.15,
                maxWidth: "720px",
                marginBottom: "1rem",
                fontFamily: isAr ? "Noto Kufi Arabic, system-ui, sans-serif" : "var(--font-display)",
              }}
            >
              {tagline}
            </h1>

            <p
              style={{
                color: "#CBD5E1",
                fontSize: "1.08rem",
                lineHeight: 1.75,
                maxWidth: "640px",
                marginBottom: "2rem",
              }}
            >
              {heroDesc}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              <Link href="/book" className="btn btn-primary" style={{ borderRadius: "var(--radius-full)" }}>
                {isAr ? "احجز استشارة مجانية" : "Book Free Consultation"}
              </Link>
              <Link
                href="/study-in"
                className="btn btn-ghost-white"
                style={{ borderRadius: "var(--radius-full)" }}
              >
                {isAr ? "استعرض الجامعات" : "Browse Universities"}
              </Link>
            </div>
          </div>
        </section>

        {/* ── 2. Quick Stats ────────────────────────────────────────── */}
        <section style={{ background: "#F8FAFC", padding: "3rem 0" }}>
          <div className="container-x" style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {data.stats.map((stat, i) => (
                <div
                  key={i}
                  className="card"
                  style={{
                    textAlign: "center",
                    padding: "1.5rem 1.25rem",
                    borderTop: "3px solid #0369A1",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: 800,
                      color: "#0F172A",
                      lineHeight: 1.2,
                      marginBottom: "0.4rem",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "#64748B", fontWeight: 500 }}>
                    {isAr ? stat.labelAr : stat.labelEn}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. Government Scholarships ───────────────────────────── */}
        <section style={{ background: "#fff", padding: "4rem 0" }}>
          <div className="container-x" style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
            <div style={{ marginBottom: "2.5rem" }}>
              <span className="section-pill">
                {isAr ? "المنح الدراسية" : "Scholarships"}
              </span>
              <h2
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
                  fontWeight: 800,
                  color: "#0F172A",
                  marginTop: "0.75rem",
                  fontFamily: isAr ? "Noto Kufi Arabic, system-ui, sans-serif" : "var(--font-display)",
                }}
              >
                {isAr
                  ? `المنح الحكومية للطلاب من ${data.countryAr}`
                  : `Government Scholarships for ${data.countryEn} Students`}
              </h2>
              <p style={{ color: "#64748B", marginTop: "0.5rem", maxWidth: "600px" }}>
                {isAr
                  ? "منح ممولة بالكامل وجزئياً متاحة للمواطنين. يساعدك فريق إيدون في التقديم والمتابعة."
                  : "Fully and partially funded scholarships available to nationals. EdOne's team helps you apply and follow through."}
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {data.scholarships.map((s, i) => (
                <div
                  key={i}
                  className="card"
                  style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}
                >
                  {/* header strip */}
                  <div
                    style={{
                      background: "linear-gradient(135deg, #0369A1, #0F172A)",
                      padding: "1rem 1.25rem",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: "#fff",
                        lineHeight: 1.35,
                      }}
                    >
                      {s.nameEn}
                    </div>
                    <div
                      style={{
                        fontSize: "0.82rem",
                        color: "#BFDBFE",
                        marginTop: "0.2rem",
                        fontFamily: "Noto Kufi Arabic, system-ui, sans-serif",
                      }}
                    >
                      {s.nameAr}
                    </div>
                  </div>

                  {/* body */}
                  <div style={{ padding: "1.25rem", flexGrow: 1, display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                    <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.65 }}>
                      {isAr ? s.descAr : s.descEn}
                    </p>

                    <div>
                      <div
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          color: "#0369A1",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {isAr ? "التغطية" : "Coverage"}
                      </div>
                      <div
                        style={{
                          fontSize: "0.88rem",
                          color: "#0F172A",
                          fontWeight: 500,
                          background: "#EFF6FF",
                          borderRadius: "var(--radius-md)",
                          padding: "0.45rem 0.75rem",
                        }}
                      >
                        {isAr ? s.coverageAr : s.coverage}
                      </div>
                    </div>

                    <div>
                      <div
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          color: "#64748B",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {isAr ? "شروط الأهلية" : "Eligibility"}
                      </div>
                      <div style={{ fontSize: "0.87rem", color: "#475569", lineHeight: 1.55 }}>
                        {isAr ? s.eligibilityAr : s.eligibility}
                      </div>
                    </div>

                    <div style={{ marginTop: "auto", paddingTop: "0.5rem" }}>
                      <Link
                        href="/book"
                        style={{
                          display: "inline-block",
                          fontSize: "0.82rem",
                          fontWeight: 600,
                          color: "#0369A1",
                          textDecoration: "none",
                          borderBottom: "1px solid #BFDBFE",
                          paddingBottom: "1px",
                          transition: "color 0.15s",
                        }}
                      >
                        {isAr ? "استفسر عن هذه المنحة ←" : "Enquire about this scholarship →"}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. UK Universities ───────────────────────────────────── */}
        <section style={{ background: "#F8FAFC", padding: "4rem 0" }}>
          <div className="container-x" style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
            <div style={{ marginBottom: "2.5rem" }}>
              <span className="section-pill">
                {isAr ? "الجامعات البريطانية" : "UK Universities"}
              </span>
              <h2
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
                  fontWeight: 800,
                  color: "#0F172A",
                  marginTop: "0.75rem",
                  fontFamily: isAr ? "Noto Kufi Arabic, system-ui, sans-serif" : "var(--font-display)",
                }}
              >
                {isAr
                  ? `الجامعات البريطانية الأكثر شعبية بين طلاب ${data.countryAr}`
                  : `UK Universities Popular With ${data.countryEn} Students`}
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {data.universities.map((u, i) => (
                <div
                  key={i}
                  className="card card-lift"
                  style={{ padding: "1.25rem 1.25rem 1.25rem" }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.6rem" }}>
                    <div
                      style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "#0F172A",
                        lineHeight: 1.3,
                      }}
                    >
                      {u.name}
                    </div>
                    <span
                      style={{
                        flexShrink: 0,
                        background: "#0369A1",
                        color: "#fff",
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        borderRadius: "var(--radius-full)",
                        padding: "2px 10px",
                        whiteSpace: "nowrap",
                        marginTop: "2px",
                      }}
                    >
                      {u.rank}
                    </span>
                  </div>
                  <div style={{ fontSize: "0.84rem", color: "#64748B" }}>{u.known}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "2rem", textAlign: "center" }}>
              <Link href="/book" className="btn btn-primary" style={{ borderRadius: "var(--radius-full)" }}>
                {isAr ? "احصل على إرشاد مخصص" : "Get Personalised Guidance"}
              </Link>
            </div>
          </div>
        </section>

        {/* ── 5. Entry Requirements ─────────────────────────────────── */}
        <section style={{ background: "#fff", padding: "4rem 0" }}>
          <div className="container-x" style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
            <div style={{ marginBottom: "2.5rem" }}>
              <span className="section-pill">
                {isAr ? "متطلبات القبول" : "Entry Requirements"}
              </span>
              <h2
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
                  fontWeight: 800,
                  color: "#0F172A",
                  marginTop: "0.75rem",
                  fontFamily: isAr ? "Noto Kufi Arabic, system-ui, sans-serif" : "var(--font-display)",
                }}
              >
                {isAr ? "متطلبات اللغة والقبول" : "Language & Admission Requirements"}
              </h2>
            </div>

            {/* IELTS cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.5rem",
                marginBottom: "2.5rem",
              }}
            >
              {/* With IELTS */}
              <div
                className="card"
                style={{
                  border: "2px solid #059669",
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: "#059669",
                      flexShrink: 0,
                    }}
                  />
                  <div
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      color: "#059669",
                      textTransform: isAr ? "none" : "uppercase",
                      letterSpacing: isAr ? 0 : "0.05em",
                    }}
                  >
                    {isAr ? "مع IELTS" : "With IELTS"}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: "#0F172A",
                    marginBottom: "0.5rem",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {isAr ? data.withIelts.scoreAr : data.withIelts.scoreEn}
                </div>
                <p style={{ fontSize: "0.88rem", color: "#475569", lineHeight: 1.65 }}>
                  {isAr ? data.withIelts.notesAr : data.withIelts.notesEn}
                </p>
              </div>

              {/* Without IELTS */}
              <div
                className="card"
                style={{
                  border: "2px solid #0369A1",
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: "#0369A1",
                      flexShrink: 0,
                    }}
                  />
                  <div
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      color: "#0369A1",
                      textTransform: isAr ? "none" : "uppercase",
                      letterSpacing: isAr ? 0 : "0.05em",
                    }}
                  >
                    {isAr ? "بدون IELTS" : "Without IELTS"}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  {data.withoutIelts.map((opt, i) => (
                    <div key={i} style={{ borderBottom: i < data.withoutIelts.length - 1 ? "1px solid #E2E8F0" : "none", paddingBottom: i < data.withoutIelts.length - 1 ? "0.85rem" : 0 }}>
                      <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#0F172A", marginBottom: "0.25rem" }}>
                        {isAr ? opt.optionAr : opt.optionEn}
                      </div>
                      <div style={{ fontSize: "0.84rem", color: "#64748B", lineHeight: 1.55 }}>
                        {isAr ? opt.descAr : opt.descEn}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Fees table */}
            <div>
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#0F172A",
                  marginBottom: "1rem",
                  fontFamily: isAr ? "Noto Kufi Arabic, system-ui, sans-serif" : "var(--font-display)",
                }}
              >
                {isAr ? "الرسوم الدراسية حسب المرحلة" : "Tuition Fees by Degree Level"}
              </h3>
              <div
                style={{
                  border: "1.5px solid #E2E8F0",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                }}
              >
                {data.fees.map((fee, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "0.9rem 1.25rem",
                      background: i % 2 === 0 ? "#fff" : "#F8FAFC",
                      borderBottom: i < data.fees.length - 1 ? "1px solid #E2E8F0" : "none",
                    }}
                  >
                    <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "#0F172A" }}>
                      {isAr ? fee.levelAr : fee.levelEn}
                    </span>
                    <span
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 700,
                        color: "#0369A1",
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      {fee.range}
                    </span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: "0.78rem", color: "#94A3B8", marginTop: "0.6rem" }}>
                {isAr
                  ? "* تقديرات للعام الدراسي 2024/25. تتباين الرسوم حسب الجامعة والتخصص."
                  : "* Estimates for 2024/25 academic year. Fees vary by institution and programme."}
              </p>
            </div>
          </div>
        </section>

        {/* ── 6. Why Study in the UK ───────────────────────────────── */}
        <section style={{ background: "#F8FAFC", padding: "4rem 0" }}>
          <div className="container-x" style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
            <div style={{ marginBottom: "2.5rem" }}>
              <span className="section-pill">
                {isAr ? "لماذا المملكة المتحدة؟" : "Why the UK?"}
              </span>
              <h2
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
                  fontWeight: 800,
                  color: "#0F172A",
                  marginTop: "0.75rem",
                  fontFamily: isAr ? "Noto Kufi Arabic, system-ui, sans-serif" : "var(--font-display)",
                }}
              >
                {isAr
                  ? `لماذا يختار طلاب ${data.countryAr} المملكة المتحدة؟`
                  : `Why ${data.countryEn} Students Choose the UK`}
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {whyUK.map((item, i) => (
                <div
                  key={i}
                  className="card"
                  style={{ padding: "1.5rem" }}
                >
                  <div
                    style={{
                      width: "2rem",
                      height: "2rem",
                      borderRadius: "var(--radius-md)",
                      background: "#0369A1",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.85rem",
                      fontWeight: 800,
                      marginBottom: "0.85rem",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {i + 1}
                  </div>
                  <div
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#0F172A",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.title}
                  </div>
                  <p style={{ fontSize: "0.87rem", color: "#475569", lineHeight: 1.65 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. CTA Section ────────────────────────────────────────── */}
        <section
          style={{
            background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
            padding: "5rem 0",
          }}
        >
          <div
            className="container-x"
            style={{ maxWidth: "var(--container-max)", margin: "0 auto", textAlign: "center" }}
          >
            <span className="section-pill" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", marginBottom: "1.25rem", display: "inline-block" }}>
              {isAr ? "ابدأ رحلتك" : "Start Your Journey"}
            </span>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: 800,
                color: "#F8FAFC",
                marginBottom: "1rem",
                fontFamily: isAr ? "Noto Kufi Arabic, system-ui, sans-serif" : "var(--font-display)",
              }}
            >
              {isAr
                ? `هل أنت مستعد للدراسة في المملكة المتحدة؟`
                : `Ready to Study in the UK?`}
            </h2>
            <p
              style={{
                color: "#94A3B8",
                fontSize: "1.05rem",
                maxWidth: "540px",
                margin: "0 auto 2rem",
                lineHeight: 1.7,
              }}
            >
              {isAr
                ? `يساعدك مستشارو إيدون من ${data.countryAr} في كل خطوة — من اختيار الجامعة حتى الوصول إلى المطار.`
                : `EdOne's advisors help ${data.countryEn} students at every step — from choosing your university to arriving at the airport.`}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
              <Link href="/book" className="btn btn-primary" style={{ borderRadius: "var(--radius-full)" }}>
                {isAr ? "احجز استشارة مجانية" : "Book Free Consultation"}
              </Link>
              <Link href="/apply" className="btn btn-ghost-white" style={{ borderRadius: "var(--radius-full)" }}>
                {isAr ? "قدّم الآن" : "Apply Now"}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
