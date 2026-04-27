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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${poppins.variable} ${inter.variable} ${notoKufiArabic.variable} h-full antialiased`}>
      <body
        className="min-h-full flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]"
        style={{
          fontFamily: "var(--font-inter, 'Inter', sans-serif)",
        }}
      >
        <Header />
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <Footer />
        <StickyMobileBar />
      </body>
    </html>
  );
}
