import { NextRequest, NextResponse } from "next/server";
import { readFileSync, writeFileSync } from "fs";
import path from "path";

export const runtime = "nodejs";

const DATA_PATH = path.join(process.cwd(), "data", "projects.json");

function checkAuth(request: NextRequest) {
  const auth = request.headers.get("authorization");
  return auth === `Bearer ${process.env.ADMIN_PASSWORD}`;
}

function readProjects() {
  return JSON.parse(readFileSync(DATA_PATH, "utf-8"));
}

function writeProjects(data: unknown) {
  writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
}

export async function GET(request: NextRequest) {
  if (!checkAuth(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json(readProjects());
}

export async function POST(request: NextRequest) {
  if (!checkAuth(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const project = await request.json();
  const projects = readProjects();
  projects.unshift(project);
  writeProjects(projects);
  return NextResponse.json({ ok: true });
}
