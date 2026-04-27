"use client";

import { useActionState } from "react";
import { submitApplication, type ApplyFormState } from "./actions";

const COUNTRIES = [
  "Pakistan", "India", "Nigeria", "Bangladesh", "Sri Lanka", "Nepal",
  "Saudi Arabia", "UAE", "Qatar", "Kuwait", "Oman", "Other",
];

const STUDY_LEVELS = [
  "Foundation", "Undergraduate", "Postgraduate", "PhD", "Pathway", "English Course",
];

const DESTINATIONS = ["UK", "Australia", "Canada", "USA", "Ireland", "Europe"];

const INTAKES = ["Sep 2026", "Jan 2027", "May 2027", "Sep 2027", "Jan 2028"];

const BUDGET_OPTIONS = [
  { label: "Under £10,000/yr", value: 9000 },
  { label: "£10,000–£15,000/yr", value: 12500 },
  { label: "£15,000–£20,000/yr", value: 17500 },
  { label: "£20,000–£30,000/yr", value: 25000 },
  { label: "£30,000+/yr", value: 35000 },
];

const initialState: ApplyFormState = { status: "idle" };

export function ApplyForm() {
  const [state, formAction, isPending] = useActionState(submitApplication, initialState);

  if (state.status === "success") {
    return (
      <div className="text-center py-16 px-8">
        <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #4F46E5, #06B6D4)" }}>
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-3">Application Received!</h2>
        <p className="text-[var(--color-muted)] text-lg mb-8">{state.message}</p>
        <a href="https://wa.me/447000000000"
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl font-semibold text-white"
          style={{ background: "#25D366" }}>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.288.173-1.413-.074-.124-.272-.198-.57-.347zM12.005 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.892 6.994c-.003 5.45-4.437 9.884-9.887 9.884zm8.413-18.297A11.815 11.815 0 0012.005 0C5.495 0 .195 5.298.193 11.81c0 2.096.547 4.142 1.588 5.945L.057 24l6.412-1.681a11.875 11.875 0 005.535 1.41h.005c6.508 0 11.806-5.298 11.808-11.81 0-3.156-1.228-6.123-3.461-8.355z"/>
          </svg>
          Chat on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {state.status === "error" && (
        <div className="p-4 rounded-xl border border-red-400/40 bg-red-500/10 text-red-400 text-sm">
          {state.message}
        </div>
      )}

      {/* Name + Email */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5" htmlFor="name">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            id="name" name="name" type="text" required autoComplete="name"
            placeholder="e.g. Fatima Al-Rashid"
            className="form-input"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5" htmlFor="email">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            id="email" name="email" type="email" required autoComplete="email"
            placeholder="you@example.com"
            className="form-input"
          />
        </div>
      </div>

      {/* Phone + WhatsApp */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5" htmlFor="phone">
            Phone <span className="text-red-400">*</span>
          </label>
          <input
            id="phone" name="phone" type="tel" required autoComplete="tel"
            placeholder="+92 300 1234567"
            className="form-input"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5" htmlFor="whatsapp">
            WhatsApp Number <span className="text-[var(--color-muted)] font-normal">(optional)</span>
          </label>
          <input
            id="whatsapp" name="whatsapp" type="tel" autoComplete="tel"
            placeholder="If different from phone"
            className="form-input"
          />
        </div>
      </div>

      {/* Country + Study Level */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5" htmlFor="country">
            Country of Origin <span className="text-red-400">*</span>
          </label>
          <select id="country" name="country" required className="form-input">
            <option value="">Select country…</option>
            {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5" htmlFor="studyLevel">
            Study Level <span className="text-red-400">*</span>
          </label>
          <select id="studyLevel" name="studyLevel" required className="form-input">
            <option value="">Select level…</option>
            {STUDY_LEVELS.map((l) => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>
      </div>

      {/* Intake */}
      <div>
        <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5" htmlFor="intake">
          Target Intake <span className="text-red-400">*</span>
        </label>
        <select id="intake" name="intake" required className="form-input">
          <option value="">Select intake…</option>
          {INTAKES.map((i) => <option key={i} value={i}>{i}</option>)}
        </select>
      </div>

      {/* Destinations */}
      <div>
        <fieldset>
          <legend className="block text-sm font-medium text-[var(--color-text)] mb-2">
            Study Destinations <span className="text-[var(--color-muted)] font-normal">(select all that interest you)</span>
          </legend>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {DESTINATIONS.map((d) => (
              <label key={d}
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] cursor-pointer hover:border-indigo-500/50 transition-colors">
                <input type="checkbox" name="destination" value={d}
                  className="w-4 h-4 rounded accent-indigo-600" />
                <span className="text-sm text-[var(--color-text)]">{d}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      {/* Budget */}
      <div>
        <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5" htmlFor="budget">
          Annual Tuition Budget <span className="text-[var(--color-muted)] font-normal">(optional)</span>
        </label>
        <select id="budget" name="budget" className="form-input">
          <option value="">Prefer not to say</option>
          {BUDGET_OPTIONS.map((b) => (
            <option key={b.value} value={b.value}>{b.label}</option>
          ))}
        </select>
      </div>

      {/* Notes */}
      <div>
        <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5" htmlFor="notes">
          Tell us about your goals <span className="text-[var(--color-muted)] font-normal">(optional)</span>
        </label>
        <textarea
          id="notes" name="notes" rows={4}
          placeholder="e.g. I have a 2:2 from Pakistan and want to do a UK Master's in Computer Science. I also plan to bring my spouse."
          className="form-input resize-none"
        />
      </div>

      {/* Privacy note */}
      <p className="text-xs text-[var(--color-muted)]">
        By submitting this form you agree to our{" "}
        <a href="/legal/privacy" className="underline hover:text-[var(--color-blue)]">Privacy Policy</a>.
        Your information will only be used to guide your application.
      </p>

      <button
        type="submit" disabled={isPending}
        className="w-full py-4 rounded-xl font-bold text-white text-base transition-all duration-200 disabled:opacity-60"
        style={{
          background: isPending
            ? "var(--color-muted)"
            : "linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #06B6D4 100%)",
          boxShadow: isPending ? "none" : "0 0 30px rgba(79,70,229,0.4)",
        }}
      >
        {isPending ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4} />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Submitting…
          </span>
        ) : (
          "Submit Application →"
        )}
      </button>
    </form>
  );
}
