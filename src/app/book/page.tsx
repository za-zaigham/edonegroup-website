"use client";

import { useState } from "react";
import Link from "next/link";

const destinations = ["United Kingdom", "Australia", "Canada", "United States", "Ireland", "Multiple / Not sure yet"];
const studyLevels = ["Undergraduate", "Postgraduate (Masters)", "Research (MRes / MPhil / PhD)", "Foundation / Pre-Masters", "Not sure yet"];

export default function BookPage() {
  const [step, setStep] = useState<"form" | "sent">("form");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: "", email: "", phone: "", destination: "", studyLevel: "", message: "",
  });

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "book-consultation" }),
      });
      setStep("sent");
    } catch {
      alert("Something went wrong. Please WhatsApp us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-24 border-b border-[var(--color-border)]">
        <div className="container-x">
          <div className="max-w-2xl mx-auto text-center">
            <div className="section-pill mx-auto mb-5">Free · No commitment · 30 minutes</div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-navy)]">
              Book your free consultation
            </h1>
            <p className="mt-4 text-[var(--color-text-muted)] text-lg max-w-xl mx-auto">
              Tell us a bit about yourself and we&apos;ll match you with a counsellor who specialises in your destination and profile.
            </p>

            {/* Trust row */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-[var(--color-text-muted)]">
              {["⚡ Avg. response: 2 hours", "🎓 96% offer rate", "🌍 40+ countries served"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-white">
        <div className="container-x">
          <div className="max-w-xl mx-auto">
            {step === "sent" ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 rounded-full bg-[var(--color-success-soft)] flex items-center justify-center mx-auto mb-6 text-4xl">
                  🎉
                </div>
                <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-3">
                  We&apos;ve got your request!
                </h2>
                <p className="text-[var(--color-text-muted)] mb-8">
                  A counsellor will be in touch within 2 hours. Check your inbox and WhatsApp.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link href="/" className="btn btn-secondary px-6 py-3">Back to home</Link>
                  <a
                    href="https://wa.me/447000000000"
                    target="_blank" rel="noopener noreferrer"
                    className="btn btn-primary px-6 py-3"
                  >
                    WhatsApp us now
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[var(--color-navy)] mb-1.5">Full name *</label>
                    <input
                      required
                      type="text"
                      placeholder="Your full name"
                      value={form.fullName}
                      onChange={(e) => set("fullName", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:border-[var(--color-blue)] focus:ring-2 focus:ring-[var(--color-blue-soft)] outline-none transition text-sm bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[var(--color-navy)] mb-1.5">Email address *</label>
                    <input
                      required
                      type="email"
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:border-[var(--color-blue)] focus:ring-2 focus:ring-[var(--color-blue-soft)] outline-none transition text-sm bg-white"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-[var(--color-navy)] mb-1.5">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="+44 7700 000000"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:border-[var(--color-blue)] focus:ring-2 focus:ring-[var(--color-blue-soft)] outline-none transition text-sm bg-white"
                  />
                </div>

                {/* Destination */}
                <div>
                  <label className="block text-sm font-semibold text-[var(--color-navy)] mb-1.5">Where do you want to study? *</label>
                  <select
                    required
                    value={form.destination}
                    onChange={(e) => set("destination", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:border-[var(--color-blue)] focus:ring-2 focus:ring-[var(--color-blue-soft)] outline-none transition text-sm bg-white"
                  >
                    <option value="">Select a destination…</option>
                    {destinations.map((d) => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>

                {/* Study level */}
                <div>
                  <label className="block text-sm font-semibold text-[var(--color-navy)] mb-1.5">Study level *</label>
                  <select
                    required
                    value={form.studyLevel}
                    onChange={(e) => set("studyLevel", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:border-[var(--color-blue)] focus:ring-2 focus:ring-[var(--color-blue-soft)] outline-none transition text-sm bg-white"
                  >
                    <option value="">Select study level…</option>
                    {studyLevels.map((l) => <option key={l} value={l}>{l}</option>)}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-[var(--color-navy)] mb-1.5">Anything else we should know?</label>
                  <textarea
                    rows={4}
                    placeholder="Your current visa status, academic background, specific goals, timeline…"
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:border-[var(--color-blue)] focus:ring-2 focus:ring-[var(--color-blue-soft)] outline-none transition text-sm bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary w-full py-4 text-base disabled:opacity-60"
                >
                  {loading ? "Sending…" : "Request Free Consultation →"}
                </button>

                <p className="text-xs text-center text-[var(--color-text-subtle)]">
                  We&apos;ll never share your details. By submitting you agree to our{" "}
                  <Link href="/legal/privacy" className="underline">Privacy Policy</Link>.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* WhatsApp alternative */}
      <section className="py-12 bg-[var(--color-surface-muted)] border-t border-[var(--color-border)]">
        <div className="container-x text-center">
          <p className="text-[var(--color-text-muted)] mb-4">Prefer to message directly?</p>
          <a
            href="https://wa.me/447000000000"
            target="_blank" rel="noopener noreferrer"
            className="btn inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-whatsapp)] text-white font-semibold text-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.288.173-1.413-.074-.124-.272-.198-.57-.347zM12.005 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.892 6.994c-.003 5.45-4.437 9.884-9.887 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.005 0C5.495 0 .195 5.298.193 11.81c0 2.096.547 4.142 1.588 5.945L.057 24l6.412-1.681a11.875 11.875 0 0 0 5.535 1.41h.005c6.508 0 11.806-5.298 11.808-11.81 0-3.156-1.228-6.123-3.461-8.355z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
