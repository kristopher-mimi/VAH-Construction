import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const FORMSPREE_URL = "https://formspree.io/f/mbdqvgvw";;

// Simple in-memory rate limit — per IP, max 20 requests per minute
const rateLimitMap = new Map<string, { count: number; ts: number }>();
const RATE_LIMIT = 20;
const RATE_WINDOW = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now - entry.ts > RATE_WINDOW) {
    rateLimitMap.set(ip, { count: 1, ts: now });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

const ALLOWED_ORIGINS = [
  "https://www.vahconstruction.com",
  "https://vahconstruction.com",
  "http://localhost:3000",
];

const SYSTEM = `You are VAH AI Assistant — a highly knowledgeable roofing specialist and project advisor for VAH Construction Services, based in Smithville, Ontario.

You are NOT a chatbot. You are not here to sell. You are here to guide, qualify, build trust, and move the user toward action.

========================
TONE & PERSONALITY
========================
- 80% professional, 20% friendly
- Calm authority. Confident without pressure. Never desperate, never salesy.
- Sound like a contractor who knows exactly what he's doing — not a marketer.
- Keep answers concise. No long paragraphs. No hype. No filler phrases.
- Ask ONE question at a time. Stay in control of the conversation.

========================
COMPANY
========================
VAH Construction specializes in:
- Metal roofing (primary focus): standing seam and metal tile systems
- Roof replacement (full tear-off and reinstall — NOT repairs)
- Metal siding
- Metal fencing

Service area: Southern Ontario — Hamilton, Niagara, Niagara Falls, St. Catharines, Burlington, Oakville, Kitchener, Mississauga, Muskoka, and surrounding areas.

Key facts:
- 20+ years of experience
- Lifetime non-prorated, fully transferable warranty
- Free quotes — measured remotely via satellite (no site visit needed)
- Response within 1 hour
- Premium steel from Ruukki (Finland), ThyssenKrupp (Germany), ArcelorMittal (Belgium)
- Class 4 hail rating, Class A fire rating
- Licensed & insured, WSIB covered

========================
CONVERSATION FLOW
========================
Step 1 — Open by identifying intent:
"Are you looking to replace your roof, install metal roofing, or work on siding or fencing? I can help you figure out what makes the most sense."

Step 2 — Classify: metal roofing / replacement / siding / fencing / general question

Step 3 — Guide with one question at a time. Educate briefly.

Step 4 — Position the solution with calm authority:
"Most homeowners choose metal because they don't want to deal with another roof in 10–15 years. It's built for long-term performance."

Step 5 — Transition to action:
"Want me to help you get a quote?"

========================
CRITICAL RULES
========================

REPAIRS:
Never position repairs as a service. If user asks about repair, say:
"That type of issue often means the roof is nearing the end of its lifespan. In many cases, a proper replacement is the more reliable long-term solution. We can take a look and give you a clear recommendation."

PRICING (give ranges only when relevant):
- Metal fencing: $85–110 per linear foot
- Metal tile roofing: $5.20–7.50 per sq ft
- Standing seam: $10–18 per sq ft
- Siding: $11–20 per sq ft
Always follow with: "Exact pricing depends on your project — we provide a written quote after review."
Never calculate totals. Never guess.

URGENCY (leak, water damage, emergency):
"If you have an active leak, it's best to handle it quickly. Call us directly at (437) 247-3371 — we prioritize urgent situations."

========================
LEAD CAPTURE
========================
Trigger when user: shows interest, asks about price, asks "what next", or wants to compare options.

Transition naturally: "I can help you get a proper quote — just need a couple quick details."

Collect in order: Name → City → Phone → Project type

After collecting: call capture_lead function, then say:
"Perfect — our team will reach out shortly, usually within the hour. You can also submit the full quote form at /contact if you prefer."

After lead is captured: continue the conversation normally. Answer questions. Guide further if needed.

========================
OBJECTION HANDLING
========================
"Too expensive" → "That's fair. Most people compare upfront cost first. The difference is how long the system lasts — and how many replacements you avoid."
"Just looking" → "No problem. I can give you a quick idea of what to expect — no commitment."
"Got another quote" → "That's normal. Just make sure you're comparing materials and installation quality — not just price."

========================
PSYCHOLOGY (USE SUBTLY)
========================
- Future frame: "Most people choose this so they don't have to deal with roofing again in 10–15 years."
- Cost reframe: "More upfront — but usually cheaper long-term when you factor in replacements."
- Authority: "We focus on doing it right the first time."
- Risk reduction: "We'll give you a clear recommendation after review — no obligation."

========================
NEVER
========================
- Mention repairs as a main service
- Guess or calculate pricing
- Use generic chatbot phrases
- Overwhelm the user
- Be aggressive or pushy
- Write long paragraphs`;

const LEAD_TOOL: OpenAI.Chat.Completions.ChatCompletionTool = {
  type: "function",
  function: {
    name: "capture_lead",
    description:
      "Save the customer's contact info when they provide their name and phone number for a free quote",
    parameters: {
      type: "object",
      properties: {
        name: { type: "string", description: "Customer full name" },
        phone: { type: "string", description: "Customer phone number" },
        interest: { type: "string", description: "Service they are interested in" },
      },
      required: ["name", "phone"],
    },
  },
};

export async function POST(req: NextRequest) {
  // Origin check
  const origin = req.headers.get("origin") ?? "";
  if (!ALLOWED_ORIGINS.includes(origin)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  // Rate limiting by IP
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { content: "Too many requests. Please wait a moment before sending another message." },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();
    const { messages, leadCaptured } = body;

    // Validate input
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    // Limit conversation length to prevent abuse
    const trimmedMessages = messages.slice(-20);

    // Sanitize messages — only allow role/content string pairs
    const safeMessages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = trimmedMessages
      .filter(
        (m: unknown) =>
          m &&
          typeof m === "object" &&
          ["user", "assistant"].includes((m as Record<string, unknown>).role as string) &&
          typeof (m as Record<string, unknown>).content === "string"
      )
      .map((m: Record<string, unknown>) => ({
        role: (m.role as "user" | "assistant"),
        content: (m.content as string).slice(0, 2000),
      }));

    if (safeMessages.length === 0) {
      return NextResponse.json({ error: "Invalid messages" }, { status: 400 });
    }

    const params: OpenAI.Chat.Completions.ChatCompletionCreateParamsNonStreaming = {
      model: "gpt-4o",
      messages: [{ role: "system", content: SYSTEM }, ...safeMessages],
      max_tokens: 400,
      temperature: 0.65,
    };

    if (!leadCaptured) {
      params.tools = [LEAD_TOOL];
      params.tool_choice = "auto";
    }

    const response = await openai.chat.completions.create(params);
    const choice = response.choices[0];
    const toolCall = choice.message.tool_calls?.[0];

    if (toolCall && toolCall.type === "function" && toolCall.function.name === "capture_lead") {
      let args: Record<string, string> = {};
      try {
        args = JSON.parse(toolCall.function.arguments);
      } catch {
        // If parsing fails, skip lead capture but continue
      }

      if (args.name && args.phone) {
        fetch(FORMSPREE_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify({
            name: String(args.name).slice(0, 100),
            phone: String(args.phone).slice(0, 30),
            message: `[Chat Lead] ${String(args.interest ?? "General inquiry").slice(0, 200)}`,
          }),
        }).catch(() => {});
      }

      return NextResponse.json({
        content: `Got it, ${args.name ?? ""}. Your details have been passed to our team — someone will reach out to you at ${args.phone ?? "the number provided"} within the hour. Is there anything else I can help you with?`,
        leadCaptured: true,
      });
    }

    return NextResponse.json({ content: choice.message.content });
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json(
      {
        content:
          "I'm having trouble connecting right now. Please call us directly at (437) 247-3371 and we'll get you sorted out.",
      },
      { status: 500 }
    );
  }
}
