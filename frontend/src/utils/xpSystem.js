export const LEVELS = [
  { name: "Novice", minXP: 0, maxXP: 100, color: "#A0A2AB" },
  { name: "Stratège", minXP: 101, maxXP: 300, color: "#D4AF37" },
  { name: "Manipulateur", minXP: 301, maxXP: 600, color: "#7A0016" },
  { name: "Architecte du pouvoir", minXP: 601, maxXP: 1000, color: "#0A1B3F" },
  { name: "Maître des lois", minXP: 1001, maxXP: Infinity, color: "#D4AF37" },
];

export function getLevel(xp) {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].minXP) return { ...LEVELS[i], index: i };
  }
  return { ...LEVELS[0], index: 0 };
}

export function getLevelProgress(xp) {
  const level = getLevel(xp);
  if (level.maxXP === Infinity) return 100;
  const range = level.maxXP - level.minXP + 1;
  const progress = xp - level.minXP;
  return Math.min(100, Math.round((progress / range) * 100));
}

export function getXPToNextLevel(xp) {
  const level = getLevel(xp);
  if (level.maxXP === Infinity) return 0;
  return level.maxXP - xp + 1;
}

export function calculateXP(isCorrect, wasFailedBefore) {
  if (isCorrect && wasFailedBefore) return 15;
  if (isCorrect) return 10;
  return -5;
}

export function applyXP(currentXP, change) {
  return Math.max(0, currentXP + change);
}
