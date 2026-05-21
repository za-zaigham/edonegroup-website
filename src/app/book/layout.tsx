import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description:
    "Schedule a free 30-minute consultation with an EdOne Group counsellor. No commitment, no upfront fee.",
  alternates: { canonical: "https://edonegroup.com/book" },
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return children;
}
