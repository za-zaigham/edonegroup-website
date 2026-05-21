"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "edone-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (!v) setVisible(true);
    } catch {
      // localStorage unavailable — fail silently, do not show banner
    }
  }, []);

  const decide = (choice: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-[60] rounded-2xl border border-white/15 bg-[#0B1020] text-white shadow-2xl p-5"
    >
      <p className="text-sm leading-relaxed text-white/80">
        We use cookies to improve your experience and understand how visitors use our site. You can accept or decline analytics cookies.
        See our{" "}
        <Link href="/legal/cookies" className="underline hover:text-white">
          Cookie Policy
        </Link>
        .
      </p>
      <div className="mt-4 flex gap-2 justify-end">
        <button
          onClick={() => decide("declined")}
          className="px-4 py-2 text-xs font-semibold rounded-lg border border-white/20 text-white/80 hover:bg-white/10 transition"
        >
          Decline
        </button>
        <button
          onClick={() => decide("accepted")}
          className="px-4 py-2 text-xs font-semibold rounded-lg bg-white text-[#0B1020] hover:bg-white/90 transition"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
