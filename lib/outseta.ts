// Server-only helper for Outseta Admin/CRM API
type Json = Record<string, unknown> | Array<unknown>;

function assertServer() {
  if (typeof window !== "undefined") {
    throw new Error("outsetaFetch must only be called on the server.");
  }
}

export async function outsetaFetch<T extends Json = Json>(
  path: string,
  init: RequestInit = {}
): Promise<T> {
  assertServer();

  const base = process.env.OUTSETA_BASE_URL;
  const key = process.env.OUTSETA_API_KEY;
  if (!base || !key) throw new Error("Missing OUTSETA_BASE_URL or OUTSETA_API_KEY");

  if (!path.startsWith("/")) {
    throw new Error(`Path must start with '/': received '${path}'`);
  }

  const auth = Buffer.from(`${key}:`, "utf8").toString("base64");

  const res = await fetch(`${base.replace(/\/$/, "")}/api/v1${path}`, {
    ...init,
    headers: {
      Authorization: `Basic ${auth}`,
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Outseta API ${res.status}: ${text}`);
  }
  return (await res.json()) as T;
}
