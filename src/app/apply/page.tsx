import type { Metadata } from "next";
import { ApplyForm } from "./ApplyForm";

export const metadata: Metadata = {
  title: "Apply Now — Start Your University Journey",
  description:
    "Submit your application to EdOne Group. Tell us your study goals, destination preference, and intake timeline — we'll get back within 24 hours with next steps.",
};

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      {/* Hero */}
      <section className="relative overflow-hidden section-dark py-20 md:py-28">
        <div className="dot-grid-dark" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #4F46E5 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl"
            style={{ background: "radial-gradient(circle, #06B6D4 0%, transparent 70%)" }} />
        </div>
        <div className="container-x relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-sm text-indigo-300 font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            Free — No hidden fees
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Start Your Application
          </h1>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            Fill in your details below and a dedicated EdOne counsellor will reach out within
            <strong className="text-white"> 24 hours</strong> to discuss your options.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-white/50">
            {[
              { icon: "🌍", label: "40+ Countries served" },
              { icon: "⭐", label: "4.9 Google rating" },
              { icon: "🔒", label: "Your data stays private" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2">
                <span>{b.icon}</span>
                <span>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="container-x py-16 max-w-2xl mx-auto">
        <ApplyForm />
      </section>
    </div>
  );
}
