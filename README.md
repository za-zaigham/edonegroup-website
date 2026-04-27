# edonegroup.com — Website

Next.js 15 + Tailwind + shadcn-friendly. Deployed on Vercel free tier (London region).
Notion is the CMS — content pulled via serverless routes.

---

## 1. Local development

```bash
cp .env.local.example .env.local       # then fill in NOTION_TOKEN
npm install
npm run dev
```

Open <http://localhost:3000>.

The Notion integration token lives only in `.env.local` (never committed) and on Vercel as an Environment Variable.

---

## 2. Deploy to Vercel (one-time setup)

1. Push this repo to GitHub:
   ```bash
   git add . && git commit -m "Initial scaffold"
   git branch -M main
   git remote add origin git@github.com:<your-handle>/edonegroup-website.git
   git push -u origin main
   ```
2. Go to <https://vercel.com/new> → import the GitHub repo.
3. Framework: **Next.js** (auto-detected). Root directory: project root.
4. Environment Variables — paste from `.env.local.example`:
   - `NOTION_TOKEN` (the EdOne integration secret)
   - `NEXT_PUBLIC_WA_NUMBER`
   - `NEXT_PUBLIC_TEL_NUMBER`
   - `NEXT_PUBLIC_SITE_URL` = `https://edonegroup.com`
5. Deploy. You'll get a `*.vercel.app` URL within ~60s.
6. In the Vercel project → **Settings → Domains** → add `edonegroup.com` and `www.edonegroup.com`.
   Vercel will show you the exact A and CNAME records to set.

---

## 3. Point Hostinger DNS to Vercel

In Hostinger hPanel → **Domains → edonegroup.com → DNS / Nameservers → DNS Records**:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | `@` | `76.76.21.21` | 14400 |
| CNAME | `www` | `cname.vercel-dns.com` | 14400 |

Remove any existing A or CNAME for `@` or `www` (if Hostinger pre-populated them).
Don't touch any other Hostinger site (e.g. `wisegalleria.co.uk`).

SSL is auto-issued by Vercel within a few minutes once DNS resolves.

---

## 4. Project structure

```
src/
├── app/
│   ├── api/apply/route.ts     # POST → writes lead to Notion
│   ├── globals.css            # design tokens (Mood 2: Soft Tech Minimal)
│   ├── layout.tsx             # root chrome (header/footer/sticky bar)
│   └── page.tsx               # home
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── StickyMobileBar.tsx
└── lib/
    └── notion.ts              # Notion API client + DB IDs
```

---

## 5. Adding more pages

Each page in `src/app/<slug>/page.tsx`. Use the existing home as the visual reference.

Pages to build (see Notion → 🌐 Website Build Tasks → Phase: "MVP V2 — Content Site (FOCUS)"):
- `/about`
- `/services`, `/services/uk-2nd-masters`, `/services/uk-research-dependants`
- `/study-in/uk` (and australia / canada / usa / ireland)
- `/universities` + `/universities/[slug]`
- `/apply`, `/book`, `/contact`
- `/reviews`
- `/resources` (blog hub)

Each task in Notion has a complete coder-ready brief — open the task page, hand it to Claude / Cursor / Bolt to implement.

---

## 6. Notion DB IDs (already wired in `src/lib/notion.ts`)

Don't share `NOTION_TOKEN` publicly — it's a credential.
The integration is named **ClaudeEdOne** in the EdOne Group workspace.
# edonegroup-website
