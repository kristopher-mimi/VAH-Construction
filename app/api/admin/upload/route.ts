import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export const runtime = "nodejs";

function checkAuth(request: NextRequest) {
  return request.headers.get("authorization") === `Bearer ${process.env.ADMIN_PASSWORD}`;
}

export async function POST(request: NextRequest) {
  if (!checkAuth(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const formData = await request.formData();
  const file = formData.get("file") as File | null;

  if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const safeName = file.name
    .toLowerCase()
    .replace(/[^a-z0-9.\-_]/g, "-")
    .replace(/-+/g, "-");

  const dest = path.join(process.cwd(), "public", "images", "projects", safeName);
  await writeFile(dest, buffer);

  return NextResponse.json({ url: `/images/projects/${safeName}`, filename: safeName });
}
