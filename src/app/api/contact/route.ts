import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { enquirySchema } from "@/lib/validations";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

export const runtime = "nodejs";

// Contact form: 5 submissions per IP per hour.
const LIMIT = 5;
const WINDOW_MS = 60 * 60 * 1000;

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const ip = getClientIp(req.headers);

  const { success, resetAt } = rateLimit(`contact:${ip}`, {
    limit: LIMIT,
    windowMs: WINDOW_MS,
  });

  if (!success) {
    return NextResponse.json(
      { message: "Too many enquiries from this connection. Please try again later." },
      {
        status: 429,
        headers: { "Retry-After": String(Math.ceil((resetAt - Date.now()) / 1000)) },
      }
    );
  }

  // Basic origin check to reduce cross-site form abuse.
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  if (origin && host && !origin.includes(host)) {
    return NextResponse.json({ message: "Invalid request origin." }, { status: 403 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Please check the highlighted fields.", errors: parsed.error.flatten() },
      { status: 422 }
    );
  }

  // Honeypot: a real visitor never sees or fills this field.
  if (parsed.data.website) {
    // Silently accept to avoid tipping off bots, but never send or process.
    return NextResponse.json({ ok: true });
  }

  const { name, company, email, phone, product, message } = parsed.data;
  const phoneDisplay = `${phone.countryCode} ${phone.number}`;

  try {
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "Murugesan & Co <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL || "",
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` (${company})` : ""}`,
      text: [
        `Name: ${name}`,
        company ? `Company: ${company}` : null,
        `Email: ${email}`,
        `Phone: ${phoneDisplay}`,
        product ? `Product: ${product}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });
  } catch (err) {
    console.error("Failed to send enquiry email:", err);
    return NextResponse.json(
      { message: "We couldn't send your enquiry. Please try again shortly." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
