import type { MetadataRoute } from "next";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://edonegroup.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    // Core
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/apply`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/book`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/reviews`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/resources`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },

    // Services
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/uk-2nd-masters`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/uk-research-dependants`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Study destinations
    { url: `${BASE}/study-in/uk`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/study-in/australia`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/study-in/canada`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/study-in/usa`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/study-in/ireland`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Gulf pages
    { url: `${BASE}/gulf/saudi-arabia`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/gulf/uae`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/gulf/qatar`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/gulf/kuwait`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/gulf/oman`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Legal
    { url: `${BASE}/legal/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/legal/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/legal/cookies`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/legal/refund`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  return staticRoutes;
}
