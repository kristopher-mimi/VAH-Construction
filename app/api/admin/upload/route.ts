import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { useGitHub, ghWriteBinary } from "@/lib/github";

export const runtime = "nodejs";

function checkAuth(req: NextRequest) {
  return req.headers.get("authorization") === `Bearer ${process.env.ADMIN_PASSWORD}`;
}

export async function POST(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const formData = await req.formData();
  const file = formData.get("file") as File | null;
  if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const safeName = file.name
    .toLowerCase()
    .replace(/[^a-z0-9.\-_]/g, "-")
    .replace(/-+/g, "-");

  if (useGitHub()) {
    await ghWriteBinary(`public/images/projects/${safeName}`, buffer);
  } else {
    const dest = path.join(process.cwd(), "public", "images", "projects", safeName);
    await writeFile(dest, buffer);
  }

  return NextResponse.json({ url: `/images/projects/${safeName}`, filename: safeName });
}
