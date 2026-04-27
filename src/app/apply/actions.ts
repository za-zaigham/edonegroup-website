"use server";

import { createPage, NOTION_DBS } from "@/lib/notion";

export interface ApplyFormState {
  status: "idle" | "success" | "error";
  message?: string;
}

export async function submitApplication(
  _prevState: ApplyFormState,
  formData: FormData
): Promise<ApplyFormState> {
  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const phone = formData.get("phone")?.toString().trim() ?? "";
  const whatsapp = formData.get("whatsapp")?.toString().trim() ?? "";
  const country = formData.get("country")?.toString().trim() ?? "";
  const studyLevel = formData.get("studyLevel")?.toString().trim() ?? "";
  const intake = formData.get("intake")?.toString().trim() ?? "";
  const destinations = formData.getAll("destination").map((d) => d.toString());
  const budget = formData.get("budget")?.toString().trim();
  const notes = formData.get("notes")?.toString().trim() ?? "";

  // Basic validation
  if (!name || !email || !phone || !country || !studyLevel || !intake) {
    return { status: "error", message: "Please fill in all required fields." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  try {
    const properties: Record<string, unknown> = {
      Name: { title: [{ text: { content: name } }] },
      Email: { email },
      Phone: { phone_number: phone },
      "Country (Origin)": { select: { name: country } },
      "Study Level": { select: { name: studyLevel } },
      Intake: { select: { name: intake } },
      Source: { select: { name: "Website" } },
      Stage: { status: { name: "New" } },
    };

    if (destinations.length > 0) {
      properties["Destination Interest"] = {
        multi_select: destinations.map((d) => ({ name: d })),
      };
    }
    if (whatsapp) {
      const waNum = whatsapp.replace(/\D/g, "");
      properties["WhatsApp"] = { url: `https://wa.me/${waNum}` };
    }
    if (budget) {
      const budgetNum = parseFloat(budget);
      if (!isNaN(budgetNum)) properties["Budget (GBP/yr)"] = { number: budgetNum };
    }
    if (notes) {
      properties["Notes"] = {
        rich_text: [{ text: { content: notes.slice(0, 2000) } }],
      };
    }

    await createPage(NOTION_DBS.LEADS, properties);

    return {
      status: "success",
      message:
        "Your application has been received! A counsellor will contact you within 24 hours.",
    };
  } catch (err) {
    console.error("Application submission error:", err);
    return {
      status: "error",
      message: "Something went wrong. Please try again or email us at hello@edonegroup.com",
    };
  }
}
