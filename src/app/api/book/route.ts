/**
 * POST /api/book
 * Saves a free consultation request to the Notion Consultation Bookings database.
 */

import { NextRequest, NextResponse } from "next/server";
import { createPage, NOTION_DBS } from "@/lib/notion";

interface BookPayload {
  fullName: string;
  email: string;
  phone: string;
  destination: string;
  studyLevel: string;
  preferredTime: string;
  message?: string;
  // honeypot
  website?: string;
}

export async function POST(req: NextRequest) {
  let data: BookPayload;
  try {
    data = (await req.json()) as BookPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot — silently reject bots
  if (data.website && data.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (!data.fullName || !data.email) {
    return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
  }

  const properties: Record<string, unknown> = {
    "Student Name": { title: [{ text: { content: data.fullName } }] },
    "Email": { email: data.email },
    "Status": { select: { name: "New Request" } },
    "Source": { select: { name: "Website" } },
  };

  if (data.phone) properties["Phone / WhatsApp"] = { phone_number: data.phone };
  if (data.destination) properties["Study Destination"] = { select: { name: data.destination } };
  if (data.studyLevel) properties["Study Level"] = { select: { name: data.studyLevel } };
  if (data.preferredTime) properties["Preferred Time"] = { select: { name: data.preferredTime } };
  if (data.message) {
    properties["Notes"] = { rich_text: [{ text: { content: data.message } }] };
  }

  try {
    const page = await createPage(NOTION_DBS.CONSULTATIONS, properties);
    return NextResponse.json({ ok: true, id: page.id });
  } catch (err) {
    console.error("notion-book-failed", err);
    return NextResponse.json({ error: "Failed to save booking" }, { status: 500 });
  }
}
