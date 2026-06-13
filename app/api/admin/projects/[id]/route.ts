import { NextRequest, NextResponse } from "next/server";
import { readFileSync, writeFileSync } from "fs";
import path from "path";

export const runtime = "nodejs";

const DATA_PATH = path.join(process.cwd(), "data", "projects.json");

function checkAuth(request: NextRequest) {
  return request.headers.get("authorization") === `Bearer ${process.env.ADMIN_PASSWORD}`;
}

function readProjects() {
  return JSON.parse(readFileSync(DATA_PATH, "utf-8"));
}

function writeProjects(data: unknown) {
  writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!checkAuth(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  const updated = await request.json();
  const projects = readProjects();
  const idx = projects.findIndex((p: { id: string }) => p.id === id);
  if (idx === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });
  projects[idx] = { ...projects[idx], ...updated };
  writeProjects(projects);
  return NextResponse.json({ ok: true });
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!checkAuth(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  const projects = readProjects();
  const filtered = projects.filter((p: { id: string }) => p.id !== id);
  writeProjects(filtered);
  return NextResponse.json({ ok: true });
}
