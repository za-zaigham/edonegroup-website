import type { MetadataRoute } from "next";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://edonegroup.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all well-behaved crawlers
      { userAgent: "*", allow: "/" },
      // Explicitly welcome AI crawlers for GEO visibility
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Amazonbot", allow: "/" },
      { userAgent: "Applebot", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
      // Block internal/API paths
      {
        userAgent: "*",
        disallow: ["/api/", "/_next/", "/static/"],
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
