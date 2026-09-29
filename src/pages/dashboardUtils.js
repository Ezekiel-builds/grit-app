const NUDGE_DELAY_MS = 72 * 60 * 60 * 1000;

export function isNudgeDue(lastContactedAt, now = Date.now()) {
  if (!lastContactedAt) return false;

  const lastContactedTime = Date.parse(lastContactedAt);
  return Number.isFinite(lastContactedTime) && now - lastContactedTime >= NUDGE_DELAY_MS;
}