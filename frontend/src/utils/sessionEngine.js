function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function createSession(allCards, sessionSize, options = {}) {
  const { reviewMode = false, weakLawNumbers = [] } = options;
  
  let pool;
  if (reviewMode && weakLawNumbers.length > 0) {
    pool = allCards.filter((c) => weakLawNumbers.includes(c.lawNumber));
    if (pool.length < sessionSize) {
      const remaining = allCards.filter((c) => !weakLawNumbers.includes(c.lawNumber));
      pool = [...pool, ...shuffle(remaining).slice(0, sessionSize - pool.length)];
    }
  } else {
    pool = [...allCards];
  }

  const shuffled = shuffle(pool);
  const selected = shuffled.slice(0, Math.min(sessionSize, shuffled.length));

  return {
    queue: selected,
    currentIndex: 0,
    results: [],
    errorCounts: {},
    correctStreaks: {},
    totalInserted: 0,
  };
}

export function getCurrentCard(session) {
  if (session.currentIndex >= session.queue.length) return null;
  return session.queue[session.currentIndex];
}

export function submitAnswer(session, choiceIndex) {
  const card = session.queue[session.currentIndex];
  if (!card) return { ...session, isFinished: true };

  const isCorrect = choiceIndex === card.correctAnswer;
  const newSession = { ...session };
  newSession.results = [...session.results];
  newSession.errorCounts = { ...session.errorCounts };
  newSession.correctStreaks = { ...session.correctStreaks };
  newSession.queue = [...session.queue];

  if (!isCorrect) {
    const errorCount = (newSession.errorCounts[card.id] || 0) + 1;
    newSession.errorCounts[card.id] = errorCount;
    newSession.correctStreaks[card.id] = 0;

    let spacing;
    if (errorCount === 1) spacing = 3;
    else if (errorCount === 2) spacing = 5;
    else spacing = 7;

    const insertAt = Math.min(
      newSession.currentIndex + spacing + 1,
      newSession.queue.length
    );
    newSession.queue.splice(insertAt, 0, { ...card, _reinserted: true });
    newSession.totalInserted += 1;
  } else {
    newSession.correctStreaks[card.id] = (newSession.correctStreaks[card.id] || 0) + 1;
  }

  newSession.results.push({
    cardId: card.id,
    lawNumber: card.lawNumber,
    lawTitle: card.lawTitle,
    correct: isCorrect,
    choiceIndex,
  });

  return {
    session: { ...newSession, currentIndex: newSession.currentIndex + 1 },
    isCorrect,
    card,
    isFinished: newSession.currentIndex + 1 >= newSession.queue.length,
  };
}

export function getProgress(session) {
  return {
    current: session.currentIndex + 1,
    total: session.queue.length,
    percentage: Math.round((session.currentIndex / session.queue.length) * 100),
  };
}

export function getSessionSummary(session) {
  const { results, correctStreaks } = session;
  
  const correct = results.filter((r) => r.correct).length;
  const wrong = results.filter((r) => !r.correct).length;
  const total = results.length;

  const lawErrorMap = {};
  const lawCorrectMap = {};
  results.forEach((r) => {
    if (r.correct) {
      lawCorrectMap[r.lawNumber] = (lawCorrectMap[r.lawNumber] || 0) + 1;
    } else {
      if (!lawErrorMap[r.lawNumber]) {
        lawErrorMap[r.lawNumber] = { count: 0, title: r.lawTitle };
      }
      lawErrorMap[r.lawNumber].count += 1;
    }
  });

  const confusedLaws = Object.entries(lawErrorMap)
    .map(([num, data]) => ({ lawNumber: parseInt(num), ...data }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  const masteredCards = Object.entries(correctStreaks)
    .filter(([, streak]) => streak >= 2)
    .map(([cardId]) => cardId);

  const cardsToReview = Object.entries(session.errorCounts)
    .filter(([cardId]) => !masteredCards.includes(cardId))
    .map(([cardId, count]) => ({ cardId, errorCount: count }));

  return {
    total,
    correct,
    wrong,
    percentage: total > 0 ? Math.round((correct / total) * 100) : 0,
    confusedLaws,
    masteredCards,
    cardsToReview,
    results,
  };
}
