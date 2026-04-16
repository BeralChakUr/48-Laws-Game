const STORAGE_KEY = 'power_laws_progress';

function defaultProgress() {
  return {
    cardsSeen: {},
    cardsMastered: [],
    lawErrors: {},
    lawCorrect: {},
    sessions: [],
    totalCorrect: 0,
    totalWrong: 0,
    xp: 0,
    storyCompleted: 0,
    failedCardIds: [],
  };
}

export function loadProgress() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return defaultProgress();
    const parsed = JSON.parse(data);
    return { ...defaultProgress(), ...parsed };
  } catch {
    return defaultProgress();
  }
}

export function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress:', e);
  }
}

export function addXP(amount) {
  const progress = loadProgress();
  progress.xp = Math.max(0, (progress.xp || 0) + amount);
  saveProgress(progress);
  return progress.xp;
}

export function updateProgressAfterSession(sessionResults) {
  const progress = loadProgress();
  const { results, masteredCards } = sessionResults;
  let sessionXP = 0;

  results.forEach((r) => {
    progress.cardsSeen[r.cardId] = (progress.cardsSeen[r.cardId] || 0) + 1;
    if (r.correct) {
      progress.totalCorrect += 1;
      progress.lawCorrect[r.lawNumber] = (progress.lawCorrect[r.lawNumber] || 0) + 1;
      const wasFailedBefore = (progress.failedCardIds || []).includes(r.cardId);
      const xpGain = wasFailedBefore ? 15 : 10;
      sessionXP += xpGain;
      if (wasFailedBefore) {
        progress.failedCardIds = (progress.failedCardIds || []).filter(id => id !== r.cardId);
      }
    } else {
      progress.totalWrong += 1;
      progress.lawErrors[r.lawNumber] = (progress.lawErrors[r.lawNumber] || 0) + 1;
      sessionXP -= 5;
      if (!(progress.failedCardIds || []).includes(r.cardId)) {
        progress.failedCardIds = [...(progress.failedCardIds || []), r.cardId];
      }
    }
  });

  masteredCards.forEach((cardId) => {
    if (!progress.cardsMastered.includes(cardId)) {
      progress.cardsMastered.push(cardId);
    }
  });

  progress.xp = Math.max(0, (progress.xp || 0) + sessionXP);

  progress.sessions.push({
    date: new Date().toISOString(),
    total: results.length,
    correct: results.filter((r) => r.correct).length,
    wrong: results.filter((r) => !r.correct).length,
    xpGained: sessionXP,
  });

  saveProgress(progress);
  return { ...progress, sessionXP };
}

export function resetProgress() {
  localStorage.removeItem(STORAGE_KEY);
}

export function getWeakLaws(progress) {
  const lawErrors = progress.lawErrors || {};
  const lawCorrect = progress.lawCorrect || {};
  const allLaws = new Set([...Object.keys(lawErrors), ...Object.keys(lawCorrect)]);
  
  const lawStats = [];
  allLaws.forEach((law) => {
    const errors = lawErrors[law] || 0;
    const correct = lawCorrect[law] || 0;
    const total = errors + correct;
    if (total > 0) {
      lawStats.push({
        lawNumber: parseInt(law),
        errors,
        correct,
        total,
        errorRate: errors / total,
      });
    }
  });
  
  return lawStats.sort((a, b) => b.errorRate - a.errorRate);
}
