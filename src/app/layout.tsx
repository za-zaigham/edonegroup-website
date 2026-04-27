import type { Metadata } from "next";
import { Poppins, Inter, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileBar } from "@/components/StickyMobileBar";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://edonegroup.com"),
  title: {
    default: "EdOne Group — UK & Global University Admissions",
    template: "%s | EdOne Group",
  },
  description:
    "EdOne Group helps students secure offers at top universities in the UK, Australia, Canada, USA, and Ireland — with honest, personalised counselling. Free consultation.",
  openGraph: {
    type: "website",
    siteName: "EdOne Group",
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://edonegroup.com/#organization",
      "name": "EdOne Group",
      "url": "https://edonegroup.com",
      "logo": "https://edonegroup.com/logo.png",
      "description":
        "UK-based education consultancy helping students from 40+ countries secure university offers worldwide.",
      "email": "hello@edonegroup.com",
      "areaServed": "Worldwide",
      "knowsAbout": [
        "UK University Admissions",
        "International Student Visa",
        "Postgraduate Admissions",
        "Scholarship Guidance",
      ],
      "sameAs": [
        "https://www.linkedin.com/company/edonegroup",
        "https://www.instagram.com/edonegroup",
        "https://wa.me/447000000000",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://edonegroup.com/#website",
      "url": "https://edonegroup.com",
      "name": "EdOne Group",
      "publisher": { "@id": "https://edonegroup.com/#organization" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://edonegroup.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is the consultation with EdOne Group really free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Initial consultations are completely free with no obligation. EdOne Group earns commission from universities upon successful enrolment, so there is no upfront cost to students.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I study in the UK without IELTS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Several UK universities accept PTE Academic, Duolingo English Test, or a university-run pre-sessional English course instead of IELTS.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I bring my family (dependants) when studying in the UK?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many research-track and postgraduate programmes allow eligible dependants (spouse and children under 18). Eligibility depends on your specific visa route and course type.",
          },
        },
        {
          "@type": "Question",
          "name": "Which countries does EdOne Group support students from?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "EdOne Group serves students from 40+ countries including Pakistan, India, Nigeria, Bangladesh, Saudi Arabia, UAE, Qatar, Kuwait, Oman, and Sri Lanka.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${poppins.variable} ${inter.variable} ${notoKufiArabic.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]"
        style={{
          fontFamily: "var(--font-inter, 'Inter', sans-serif)",
        }}
      >
        <Header />
        {/* pt-[68px] reserves space for the fixed 68px header so content isn't hidden underneath */}
        <main className="flex-1 pt-[68px] pb-20 md:pb-0">{children}</main>
        <Footer />
        <StickyMobileBar />
      </body>
    </html>
  );
}
