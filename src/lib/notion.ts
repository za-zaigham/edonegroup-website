/**
 * Notion API client utility — server-only.
 * The integration token must NEVER be exposed to the browser.
 *
 * Uses Next.js fetch with revalidate for ISR-style caching.
 */

const NOTION_API = "https://api.notion.com/v1";
const NOTION_VERSION = "2022-06-28";

function token() {
  const t = process.env.NOTION_TOKEN;
  if (!t) throw new Error("NOTION_TOKEN env var is missing");
  return t;
}

export const NOTION_DBS = {
  LEADS: process.env.NOTION_DB_LEADS ?? "34e1fbcc-feea-8116-a6c6-ce7d5d1dc322",
  STUDENTS: "34e1fbcc-feea-8155-88e0-feab17f35bf8",
  UNIVERSITIES: "34e1fbcc-feea-814b-9280-d114c7e0941f",
  PARTNERS: "34e1fbcc-feea-81ed-b5d5-f88c78c42b19",
  APPLICATIONS: "34e1fbcc-feea-8111-8ccd-f72aab24519c",
  COMMISSIONS: "34e1fbcc-feea-81dc-a6cb-f093cc0f047e",
  TASKS: "34e1fbcc-feea-81cf-95bc-e0771e585bf4",
  PROGRAMS: "34f1fbcc-feea-811b-b535-f3984f2bf9be",
  COMMUNICATIONS: "34f1fbcc-feea-812c-acd0-f4b950bdf459",
  STUDENT_DOCS: "34f1fbcc-feea-81b6-a949-d7f074fc2d4a",
  WEB_TASKS: "34f1fbcc-feea-816c-b932-ef2dec605f32",
  OPPORTUNITIES: "34f1fbcc-feea-8168-8898-e64ebf01d850",
  ACCREDITATIONS: "34f1fbcc-feea-8174-b703-e2a6ed628694",
  REVIEWS: "34f1fbcc-feea-8197-84c5-cb761c83d611",
  CONSULTATIONS: "34f1fbcc-feea-814c-b6e9-cf803b6de8a9",
} as const;

interface QueryDatabaseOpts {
  filter?: Record<string, unknown>;
  sorts?: Array<{ property?: string; timestamp?: string; direction: "ascending" | "descending" }>;
  pageSize?: number;
  /** ISR revalidation in seconds. Default 1h. */
  revalidate?: number;
}

export async function queryDatabase(databaseId: string, opts: QueryDatabaseOpts = {}) {
  const body: Record<string, unknown> = { page_size: opts.pageSize ?? 100 };
  if (opts.filter) body.filter = opts.filter;
  if (opts.sorts) body.sorts = opts.sorts;

  const res = await fetch(`${NOTION_API}/databases/${databaseId}/query`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token()}`,
      "Notion-Version": NOTION_VERSION,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    next: { revalidate: opts.revalidate ?? 3600, tags: [`notion-db-${databaseId}`] },
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Notion query failed: ${res.status} ${errText}`);
  }
  return res.json() as Promise<{ results: NotionPage[]; has_more: boolean }>;
}

export async function createPage(databaseId: string, properties: Record<string, unknown>) {
  const res = await fetch(`${NOTION_API}/pages`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token()}`,
      "Notion-Version": NOTION_VERSION,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ parent: { database_id: databaseId }, properties }),
  });
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Notion createPage failed: ${res.status} ${errText}`);
  }
  return res.json() as Promise<{ id: string }>;
}

/* ---------- Helpers to safely read property values ---------- */

type RichTextItem = { plain_text: string };

export function getTitle(p: NotionPage, prop = "Name"): string {
  const v = p.properties?.[prop];
  if (!v || v.type !== "title") return "";
  const arr = (v.title ?? []) as RichTextItem[];
  return arr.map((t) => t.plain_text).join("");
}

export function getRichText(p: NotionPage, prop: string): string {
  const v = p.properties?.[prop];
  if (!v || v.type !== "rich_text") return "";
  const arr = (v.rich_text ?? []) as RichTextItem[];
  return arr.map((t) => t.plain_text).join("");
}

export function getSelect(p: NotionPage, prop: string): string | null {
  const v = p.properties?.[prop];
  if (!v || v.type !== "select") return null;
  const sel = v.select as { name: string } | null;
  return sel ? sel.name : null;
}

export function getMultiSelect(p: NotionPage, prop: string): string[] {
  const v = p.properties?.[prop];
  if (!v || v.type !== "multi_select") return [];
  const arr = (v.multi_select ?? []) as Array<{ name: string }>;
  return arr.map((s) => s.name);
}

export function getNumber(p: NotionPage, prop: string): number | null {
  const v = p.properties?.[prop];
  if (!v || v.type !== "number") return null;
  return (v.number ?? null) as number | null;
}

export function getUrl(p: NotionPage, prop: string): string | null {
  const v = p.properties?.[prop];
  if (!v || v.type !== "url") return null;
  return (v.url ?? null) as string | null;
}

export function getCheckbox(p: NotionPage, prop: string): boolean {
  const v = p.properties?.[prop];
  if (!v || v.type !== "checkbox") return false;
  return Boolean(v.checkbox);
}

/* ---------- Types (minimal subset) ---------- */

export interface NotionPage {
  id: string;
  url: string;
  properties: Record<string, NotionProperty>;
}

// Open type — we narrow inside each helper. Avoids broken discriminated-union
// inference when callers throw arbitrary Notion property shapes at us.
type NotionProperty = { type: string; [key: string]: unknown };
