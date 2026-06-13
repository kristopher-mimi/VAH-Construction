import { NextRequest, NextResponse } from "next/server";
import { readFileSync, writeFileSync } from "fs";
import path from "path";
import { useGitHub, ghReadFile, ghWriteText } from "@/lib/github";

export const runtime = "nodejs";

const DATA_PATH = path.join(process.cwd(), "data", "projects.json");

function checkAuth(req: NextRequest) {
  return req.headers.get("authorization") === `Bearer ${process.env.ADMIN_PASSWORD}`;
}

async function readProjects() {
  if (useGitHub()) {
    const { content, sha } = await ghReadFile("data/projects.json");
    return { projects: JSON.parse(content), sha };
  }
  return { projects: JSON.parse(readFileSync(DATA_PATH, "utf-8")), sha: undefined };
}

async function saveProjects(projects: unknown[], sha: string | undefined) {
  const json = JSON.stringify(projects, null, 2);
  if (useGitHub()) {
    await ghWriteText("data/projects.json", json, sha, "Update projects via admin panel");
  } else {
    writeFileSync(DATA_PATH, json);
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!checkAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  const updated = await req.json();
  const { projects, sha } = await readProjects();
  const idx = (projects as { id: string }[]).findIndex((p) => p.id === id);
  if (idx === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });
  (projects as Record<string, unknown>[])[idx] = { ...(projects as Record<string, unknown>[])[idx], ...updated };
  await saveProjects(projects, sha);
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!checkAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  const { projects, sha } = await readProjects();
  const filtered = (projects as { id: string }[]).filter((p) => p.id !== id);
  await saveProjects(filtered, sha);
  return NextResponse.json({ ok: true });
}
