/**
 * POST /api/apply
 * Receives website application form, writes a row to Notion Leads DB.
 *
 * Free Vercel serverless function — runs in London (set in vercel.json).
 */

import { NextRequest, NextResponse } from "next/server";
import { createPage, NOTION_DBS } from "@/lib/notion";

interface ApplyPayload {
  fullName: string;
  email: string;
  phone: string;
  whatsapp?: string;
  country?: string;
  nationality?: string;
  highestQualification?: string;
  destinations?: string[];
  studyLevel?: string;
  intake?: string;
  englishTest?: string;
  englishScore?: string;
  notes?: string;
  // anti-spam honeypot
  website?: string;
}

export async function POST(req: NextRequest) {
  let data: ApplyPayload;
  try {
    data = (await req.json()) as ApplyPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot — silently reject bots
  if (data.website && data.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (!data.fullName || !data.email) {
    return NextResponse.json({ error: "fullName and email required" }, { status: 400 });
  }

  const properties: Record<string, unknown> = {
    Name: { title: [{ text: { content: data.fullName } }] },
    Email: { email: data.email },
    Source: { select: { name: "Website" } },
  };

  if (data.phone) properties.Phone = { phone_number: data.phone };
  if (data.whatsapp) {
    const clean = data.whatsapp.replace(/[^0-9]/g, "");
    properties.WhatsApp = { url: `https://wa.me/${clean}` };
  }
  if (data.country) properties["Country (Origin)"] = { select: { name: data.country } };
  if (data.destinations?.length) {
    properties["Destination Interest"] = {
      multi_select: data.destinations.map((d) => ({ name: d })),
    };
  }
  if (data.studyLevel) properties["Study Level"] = { select: { name: data.studyLevel } };
  if (data.intake) properties.Intake = { select: { name: data.intake } };
  if (data.notes || data.englishTest || data.englishScore) {
    const noteParts = [
      data.englishTest ? `English: ${data.englishTest}` : null,
      data.englishScore ? `Score: ${data.englishScore}` : null,
      data.highestQualification ? `Highest qualification: ${data.highestQualification}` : null,
      data.notes ? `Notes: ${data.notes}` : null,
    ].filter(Boolean);
    properties.Notes = {
      rich_text: [{ text: { content: noteParts.join(" | ") } }],
    };
  }

  try {
    const page = await createPage(NOTION_DBS.LEADS, properties);
    return NextResponse.json({ ok: true, id: page.id });
  } catch (err) {
    console.error("notion-create-failed", err);
    return NextResponse.json({ error: "Failed to record lead" }, { status: 500 });
  }
}
