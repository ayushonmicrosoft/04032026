/**
 * lib/siteUrl.ts
 * Single source of truth for the canonical site URL.
 * Works on any host — Vercel preview, custom domain, self-hosted, local dev.
 *
 * Resolution order:
 *   1. NEXT_PUBLIC_SITE_URL  ← set this in your host env vars for every deployment
 *   2. SITE_URL              ← server-only fallback
 *   3. VERCEL_URL            ← auto-injected by Vercel (includes preview URLs)
 *   4. localhost:3000        ← local dev only
 *
 * When you move to a custom domain just set:
 *   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
 * Nothing else in the codebase needs to change.
 */

function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL)
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/+$/, "");
  if (process.env.SITE_URL)
    return process.env.SITE_URL.replace(/\/+$/, "");
  if (process.env.VERCEL_URL)
    return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

/** Canonical origin — no trailing slash. e.g. "https://yourdomain.com" */
export const SITE_URL: string = resolveSiteUrl();

/** Build an absolute URL from a relative path. */
export function absoluteUrl(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${clean}`;
}
