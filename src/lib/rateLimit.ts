type RateLimitRecord = {
  count: number;
  resetAt: number;
};

const store = new Map<string, RateLimitRecord>();

type RateLimitOptions = {
  key: string;
  limit: number;
  windowMs: number;
};

export function rateLimit({ key, limit, windowMs }: RateLimitOptions) {
  const now = Date.now();
  const record = store.get(key);

  if (!record || record.resetAt < now) {
    store.set(key, {
      count: 1,
      resetAt: now + windowMs,
    });

    return {
      success: true,
      remaining: limit - 1,
      resetAt: now + windowMs,
    };
  }

  if (record.count >= limit) {
    return {
      success: false,
      remaining: 0,
      resetAt: record.resetAt,
    };
  }

  record.count += 1;
  store.set(key, record);

  return {
    success: true,
    remaining: limit - record.count,
    resetAt: record.resetAt,
  };
}