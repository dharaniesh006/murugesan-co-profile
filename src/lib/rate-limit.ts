/**
 * Lightweight sliding-window rate limiter.
 *
 * Uses in-process memory, which is fine for a single Node server or a
 * single Vercel serverless instance under light-to-moderate traffic.
 * For multi-instance / edge deployments, swap the `store` Map for
 * Upstash Redis (see README "Scaling rate limiting" section) — the
 * public `limit()` API below stays identical either way.
 */

type Bucket = { count: number; resetAt: number };

const store = new Map<string, Bucket>();

// Periodic cleanup so the Map doesn't grow unbounded on a long-lived server.
setInterval(() => {
  const now = Date.now();
  for (const [key, bucket] of store.entries()) {
    if (bucket.resetAt < now) store.delete(key);
  }
}, 5 * 60 * 1000).unref?.();

export type RateLimitResult = {
  success: boolean;
  limit: number;
  remaining: number;
  resetAt: number;
};

export function rateLimit(
  key: string,
  { limit, windowMs }: { limit: number; windowMs: number }
): RateLimitResult {
  const now = Date.now();
  const existing = store.get(key);

  if (!existing || existing.resetAt < now) {
    const bucket: Bucket = { count: 1, resetAt: now + windowMs };
    store.set(key, bucket);
    return { success: true, limit, remaining: limit - 1, resetAt: bucket.resetAt };
  }

  if (existing.count >= limit) {
    return { success: false, limit, remaining: 0, resetAt: existing.resetAt };
  }

  existing.count += 1;
  return {
    success: true,
    limit,
    remaining: limit - existing.count,
    resetAt: existing.resetAt,
  };
}

/** Resolves the caller's IP from standard proxy headers (Vercel sets x-forwarded-for). */
export function getClientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return headers.get("x-real-ip") ?? "unknown";
}
