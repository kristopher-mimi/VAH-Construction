import { NextRequest, NextResponse } from "next/server";

const FORMSPREE_URL = "https://formspree.io/f/mbdqvgvw";;

// Rate limit: 5 form submissions per IP per 10 minutes
const submitMap = new Map<string, { count: number; ts: number }>();
const LIMIT = 5;
const WINDOW = 10 * 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = submitMap.get(ip);
  if (!entry || now - entry.ts > WINDOW) {
    submitMap.set(ip, { count: 1, ts: now });
    return false;
  }
  if (entry.count >= LIMIT) return true;
  entry.count++;
  return false;
}

function sanitize(val: unknown, max: number): string {
  if (typeof val !== "string") return "";
  return val.replace(/<[^>]*>/g, "").trim().slice(0, max);
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many submissions. Please try again later." }, { status: 429 });
  }

  try {
    const body = await req.json();

    const data = {
      name:    sanitize(body.name, 100),
      phone:   sanitize(body.phone, 30),
      email:   sanitize(body.email, 100),
      city:    sanitize(body.city, 100),
      address: sanitize(body.address, 300),
      message: sanitize(body.message, 1000),
    };

    if (!data.name || !data.phone) {
      return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
    }

    const res = await fetch(FORMSPREE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Formspree error");

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Submission failed." }, { status: 500 });
  }
}
