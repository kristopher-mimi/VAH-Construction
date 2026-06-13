"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

type Category = "Standing Seam" | "Metal Tiles" | "Metal Fence" | "Metal Siding";

interface Project {
  id: string;
  category: Category;
  extraCategory?: Category;
  title: string;
  system: string;
  area: string;
  colour: string;
  image: string;
  imageAlt: string;
  objectPosition: string;
}

const CATEGORIES: Category[] = ["Standing Seam", "Metal Tiles", "Metal Fence", "Metal Siding"];

const EMPTY_FORM = {
  title: "",
  category: "Standing Seam" as Category,
  system: "Standing Seam",
  area: "",
  colour: "",
  imageAlt: "",
  objectPosition: "50% 50%",
};

// ─── Drag-to-position cropper ──────────────────────────────────────────────
function PhotoCropper({
  src,
  initialPos,
  onChange,
}: {
  src: string;
  initialPos: string;
  onChange: (pos: string) => void;
}) {
  const parsePos = (pos: string) => {
    const parts = pos.replace(/%/g, "").trim().split(/\s+/);
    return { x: parseFloat(parts[0] ?? "50"), y: parseFloat(parts[1] ?? "50") };
  };

  const posRef = useRef(parsePos(initialPos));
  const [display, setDisplay] = useState(parsePos(initialPos));
  const dragging = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });

  const clamp = (v: number) => Math.max(0, Math.min(100, v));

  const applyDelta = useCallback(
    (dx: number, dy: number) => {
      const next = {
        x: clamp(posRef.current.x - dx * 0.4),
        y: clamp(posRef.current.y - dy * 0.4),
      };
      posRef.current = next;
      setDisplay({ ...next });
      onChange(`${Math.round(next.x)}% ${Math.round(next.y)}%`);
    },
    [onChange]
  );

  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    lastMouse.current = { x: e.clientX, y: e.clientY };
    e.preventDefault();
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - lastMouse.current.x;
    const dy = e.clientY - lastMouse.current.y;
    lastMouse.current = { x: e.clientX, y: e.clientY };
    applyDelta(dx, dy);
  };

  const onMouseUp = () => { dragging.current = false; };

  const onTouchStart = (e: React.TouchEvent) => {
    dragging.current = true;
    lastMouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!dragging.current) return;
    const dx = e.touches[0].clientX - lastMouse.current.x;
    const dy = e.touches[0].clientY - lastMouse.current.y;
    lastMouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    applyDelta(dx, dy);
  };

  return (
    <div className="space-y-2">
      <p className="text-xs text-neutral-400 font-semibold uppercase tracking-widest">
        Drag to position preview frame
      </p>
      <div
        className="relative overflow-hidden rounded-lg border-2 border-amber-500/40 select-none cursor-grab active:cursor-grabbing"
        style={{ width: "100%", aspectRatio: "16/9" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onMouseUp}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt="crop preview"
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ objectPosition: `${display.x}% ${display.y}%` }}
        />
        <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-lg" />
        <div className="absolute bottom-2 left-2 bg-black/70 text-white/80 text-[11px] font-mono px-2 py-0.5 rounded">
          {Math.round(display.x)}% {Math.round(display.y)}%
        </div>
        <div className="absolute top-2 right-2 bg-black/60 text-white/60 text-[10px] px-2 py-0.5 rounded">
          drag to pan
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="text-[10px] text-neutral-500 uppercase tracking-widest">X position</label>
          <input
            type="range" min={0} max={100} step={1}
            value={Math.round(display.x)}
            onChange={(e) => {
              const next = { x: +e.target.value, y: posRef.current.y };
              posRef.current = next;
              setDisplay({ ...next });
              onChange(`${Math.round(next.x)}% ${Math.round(next.y)}%`);
            }}
            className="w-full accent-amber-500"
          />
        </div>
        <div className="flex-1">
          <label className="text-[10px] text-neutral-500 uppercase tracking-widest">Y position</label>
          <input
            type="range" min={0} max={100} step={1}
            value={Math.round(display.y)}
            onChange={(e) => {
              const next = { x: posRef.current.x, y: +e.target.value };
              posRef.current = next;
              setDisplay({ ...next });
              onChange(`${Math.round(next.x)}% ${Math.round(next.y)}%`);
            }}
            className="w-full accent-amber-500"
          />
        </div>
      </div>
    </div>
  );
}

// ─── Project form (add / edit) ─────────────────────────────────────────────
function ProjectForm({
  initial,
  token,
  onSave,
  onCancel,
}: {
  initial?: Project;
  token: string;
  onSave: () => void;
  onCancel: () => void;
}) {
  const [form, setForm] = useState(
    initial
      ? {
          title: initial.title,
          category: initial.category,
          system: initial.system,
          area: initial.area, // kept as full string e.g. "2,400 sq ft"
          colour: initial.colour,
          imageAlt: initial.imageAlt,
          objectPosition: initial.objectPosition,
        }
      : { ...EMPTY_FORM }
  );
  const [imageUrl, setImageUrl] = useState<string>(initial?.image ?? "");
  const [previewSrc, setPreviewSrc] = useState<string>(initial?.image ?? "");
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    setPreviewSrc(URL.createObjectURL(file));
    setUploading(true);
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/admin/upload", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: fd,
    });
    const data = await res.json();
    setUploading(false);
    if (res.ok) setImageUrl(data.url);
    else setError("Upload failed");
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleSave = async () => {
    if (!form.title || !imageUrl || !form.area || !form.colour) {
      setError("Fill in all fields and upload a photo.");
      return;
    }
    setSaving(true);
    const id = initial?.id ?? form.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const payload: Project = {
      id,
      category: form.category,
      title: form.title,
      system: form.system || form.category,
      area: form.area,
      colour: form.colour,
      image: imageUrl,
      imageAlt: form.imageAlt || `${form.title} — VAH Construction`,
      objectPosition: form.objectPosition,
    };
    const url = initial ? `/api/admin/projects/${initial.id}` : "/api/admin/projects";
    const method = initial ? "PUT" : "POST";
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify(payload),
    });
    setSaving(false);
    if (res.ok) onSave();
    else setError("Save failed");
  };

  const field = (key: keyof typeof form, label: string, placeholder = "") => (
    <div>
      <label className="text-[11px] text-neutral-500 uppercase tracking-widest block mb-1">{label}</label>
      <input
        className="w-full bg-neutral-800 border border-neutral-700 rounded px-3 py-2 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500"
        value={form[key] as string}
        placeholder={placeholder}
        onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
      />
    </div>
  );

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 space-y-5">
      <h3 className="text-white font-bold text-lg">{initial ? "Edit Project" : "Add New Project"}</h3>

      {/* Photo upload */}
      <div>
        <label className="text-[11px] text-neutral-500 uppercase tracking-widest block mb-2">Photo</label>
        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
            previewSrc ? "border-neutral-700" : "border-neutral-700 hover:border-amber-500/60"
          }`}
          onClick={() => fileRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          {previewSrc ? (
            <div className="relative h-40 rounded overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={previewSrc} alt="preview" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity text-white text-sm font-semibold">
                Click to replace
              </div>
            </div>
          ) : (
            <div className="text-neutral-500 text-sm">
              {uploading ? "Uploading…" : "Drop photo here or click to browse"}
            </div>
          )}
        </div>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }}
        />
        {uploading && <p className="text-xs text-amber-500 mt-1">Uploading…</p>}
      </div>

      {/* Cropper */}
      {previewSrc && (
        <PhotoCropper
          src={previewSrc}
          initialPos={form.objectPosition}
          onChange={(pos) => setForm((f) => ({ ...f, objectPosition: pos }))}
        />
      )}

      {/* Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {field("title", "Title", "e.g. Standing Seam — Lake House")}
        <div>
          <label className="text-[11px] text-neutral-500 uppercase tracking-widest block mb-1">Category</label>
          <select
            className="w-full bg-neutral-800 border border-neutral-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
            value={form.category}
            onChange={(e) => {
              const cat = e.target.value as Category;
              setForm((f) => ({ ...f, category: cat, system: cat }));
            }}
          >
            {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="text-[11px] text-neutral-500 uppercase tracking-widest block mb-1">Area</label>
          <div className="flex gap-2">
            <input
              className="flex-1 bg-neutral-800 border border-neutral-700 rounded px-3 py-2 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500"
              placeholder="e.g. 2400"
              value={form.area.replace(/[^\d,]/g, "")}
              onChange={(e) => {
                const num = e.target.value.replace(/[^\d]/g, "");
                const unit = form.area.includes("linear ft") ? " linear ft" : " sq ft";
                setForm((f) => ({ ...f, area: num ? num + unit : "" }));
              }}
            />
            <select
              className="bg-neutral-800 border border-neutral-700 rounded px-2 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
              value={form.area.includes("linear ft") ? "linear ft" : "sq ft"}
              onChange={(e) => {
                const num = form.area.replace(/[^\d,]/g, "");
                setForm((f) => ({ ...f, area: num ? `${num} ${e.target.value}` : "" }));
              }}
            >
              <option>sq ft</option>
              <option>linear ft</option>
            </select>
          </div>
        </div>
        {field("colour", "Colour", "e.g. Matte Black")}
        {field("imageAlt", "Description (optional)", "Brief description for accessibility")}
      </div>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <div className="flex gap-3 pt-2">
        <button
          onClick={handleSave}
          disabled={saving || uploading}
          className="flex-1 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black font-bold py-2.5 rounded-sm text-sm transition-colors"
        >
          {saving ? "Saving…" : "Save Project"}
        </button>
        <button
          onClick={onCancel}
          className="px-5 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold py-2.5 rounded-sm text-sm transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

// ─── Main admin page ───────────────────────────────────────────────────────
export default function AdminPage() {
  const [token, setToken] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Project | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [filter, setFilter] = useState<"All" | Category>("All");

  useEffect(() => {
    const saved = sessionStorage.getItem("admin-token");
    if (saved) { setToken(saved); fetchProjects(saved); }
  }, []);

  const fetchProjects = async (t: string) => {
    setLoading(true);
    const res = await fetch("/api/admin/projects", { headers: { Authorization: `Bearer ${t}` } });
    if (res.ok) setProjects(await res.json());
    setLoading(false);
  };

  const handleLogin = async () => {
    setAuthError("");
    const res = await fetch("/api/admin/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      sessionStorage.setItem("admin-token", password);
      setToken(password);
      fetchProjects(password);
    } else {
      setAuthError("Wrong password");
    }
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/admin/projects/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    setDeleteConfirm(null);
    fetchProjects(token!);
  };

  const onSaved = () => {
    setShowForm(false);
    setEditing(null);
    fetchProjects(token!);
  };

  // ── Auth screen ──
  if (!token) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 w-full max-w-sm space-y-5">
          <div>
            <div className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-1">VAH Construction</div>
            <h1 className="text-white text-2xl font-extrabold">Admin Panel</h1>
          </div>
          <div>
            <label className="text-[11px] text-neutral-500 uppercase tracking-widest block mb-1">Password</label>
            <input
              type="password"
              value={password}
              className="w-full bg-neutral-800 border border-neutral-700 rounded px-3 py-2.5 text-white focus:outline-none focus:border-amber-500"
              placeholder="Enter admin password"
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            />
          </div>
          {authError && <p className="text-red-400 text-sm">{authError}</p>}
          <button
            onClick={handleLogin}
            className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-2.5 rounded-sm transition-colors"
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  // ── Dashboard ──
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="border-b border-neutral-800 bg-neutral-900/80 sticky top-0 z-30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <div>
            <span className="text-amber-500 text-[10px] font-bold tracking-widest uppercase">VAH Construction</span>
            <h1 className="text-white font-extrabold text-lg leading-tight">Admin Panel</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-neutral-500 text-sm hidden sm:block">{projects.length} projects · saves auto-deploy in ~2 min</span>
            <button
              onClick={() => { setShowForm(true); setEditing(null); }}
              className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-4 py-2 rounded-sm text-sm transition-colors"
            >
              + Add Project
            </button>
            <button
              onClick={() => { sessionStorage.removeItem("admin-token"); setToken(null); }}
              className="text-neutral-500 hover:text-white text-sm transition-colors"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-5 py-8 space-y-6">

        {/* Add / Edit form */}
        {(showForm || editing) && (
          <ProjectForm
            key={editing?.id ?? "new"}
            initial={editing ?? undefined}
            token={token}
            onSave={onSaved}
            onCancel={() => { setShowForm(false); setEditing(null); }}
          />
        )}

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2">
          {(["All", ...CATEGORIES] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-sm border transition-all ${
                filter === cat
                  ? "bg-amber-500 border-amber-500 text-black"
                  : "border-neutral-700 text-neutral-400 hover:text-white hover:border-neutral-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        {loading ? (
          <div className="text-neutral-500 py-20 text-center">Loading…</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden group"
              >
                {/* Photo */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: project.objectPosition }}
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 left-3">
                    <span className="text-[9px] font-bold uppercase tracking-widest bg-black/60 text-white/80 px-2 py-0.5 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-3 space-y-2">
                  <p className="text-white text-sm font-semibold leading-tight">{project.title}</p>
                  <div className="text-neutral-500 text-[11px] space-x-2">
                    <span>{project.area}</span>
                    <span>·</span>
                    <span>{project.colour}</span>
                  </div>
                  <div className="text-neutral-600 text-[10px] font-mono">{project.objectPosition}</div>
                </div>

                {/* Actions */}
                <div className="border-t border-neutral-800 flex">
                  <button
                    onClick={() => { setEditing(project); setShowForm(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className="flex-1 py-2 text-xs text-neutral-400 hover:text-amber-400 hover:bg-neutral-800 transition-colors font-semibold"
                  >
                    Edit
                  </button>
                  <div className="w-px bg-neutral-800" />
                  {deleteConfirm === project.id ? (
                    <div className="flex-1 flex">
                      <button
                        onClick={() => handleDelete(project.id)}
                        className="flex-1 py-2 text-xs text-red-400 hover:bg-red-900/30 transition-colors font-semibold"
                      >
                        Confirm
                      </button>
                      <button
                        onClick={() => setDeleteConfirm(null)}
                        className="flex-1 py-2 text-xs text-neutral-500 hover:bg-neutral-800 transition-colors"
                      >
                        No
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setDeleteConfirm(project.id)}
                      className="flex-1 py-2 text-xs text-neutral-400 hover:text-red-400 hover:bg-neutral-800 transition-colors font-semibold"
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
