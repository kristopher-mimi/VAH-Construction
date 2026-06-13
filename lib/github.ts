const REPO = process.env.GITHUB_REPO ?? "kristopher-mimi/VAH-Construction";
const BRANCH = process.env.GITHUB_BRANCH ?? "main";
const TOKEN = process.env.GITHUB_TOKEN;

export function useGitHub() {
  return Boolean(TOKEN);
}

export async function ghReadFile(filePath: string): Promise<{ content: string; sha: string }> {
  const res = await fetch(
    `https://api.github.com/repos/${REPO}/contents/${filePath}?ref=${BRANCH}`,
    { headers: { Authorization: `token ${TOKEN}`, "User-Agent": "VAH-Admin" }, cache: "no-store" }
  );
  if (!res.ok) throw new Error(`GitHub read failed: ${res.status}`);
  const data = await res.json();
  return { content: Buffer.from(data.content, "base64").toString("utf-8"), sha: data.sha };
}

export async function ghWriteText(filePath: string, content: string, sha: string | undefined, message: string) {
  const body: Record<string, string> = {
    message,
    content: Buffer.from(content).toString("base64"),
    branch: BRANCH,
  };
  if (sha) body.sha = sha;
  const res = await fetch(`https://api.github.com/repos/${REPO}/contents/${filePath}`, {
    method: "PUT",
    headers: { Authorization: `token ${TOKEN}`, "Content-Type": "application/json", "User-Agent": "VAH-Admin" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`GitHub write failed: ${res.status} ${await res.text()}`);
}

export async function ghWriteBinary(filePath: string, buffer: Buffer) {
  let sha: string | undefined;
  try {
    const existing = await ghReadFile(filePath);
    sha = existing.sha;
  } catch { /* new file */ }
  const body: Record<string, string> = {
    message: `Add image: ${filePath}`,
    content: buffer.toString("base64"),
    branch: BRANCH,
  };
  if (sha) body.sha = sha;
  const res = await fetch(`https://api.github.com/repos/${REPO}/contents/${filePath}`, {
    method: "PUT",
    headers: { Authorization: `token ${TOKEN}`, "Content-Type": "application/json", "User-Agent": "VAH-Admin" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`GitHub image upload failed: ${res.status}`);
}
