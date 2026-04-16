export function createStorySession(events) {
  return {
    events: [...events],
    currentIndex: 0,
    choices: [],
    totalXP: 0,
  };
}

export function getCurrentEvent(story) {
  if (story.currentIndex >= story.events.length) return null;
  return story.events[story.currentIndex];
}

export function submitStoryChoice(story, choiceIndex) {
  const event = story.events[story.currentIndex];
  if (!event) return { story, isFinished: true };

  const choice = event.choices[choiceIndex];
  const isBest = choiceIndex === event.bestChoiceIndex;
  const xpGain = isBest ? 15 : choice.outcome === 'neutral' ? 5 : -5;

  const newStory = {
    ...story,
    currentIndex: story.currentIndex + 1,
    choices: [
      ...story.choices,
      {
        eventId: event.id,
        choiceIndex,
        choiceText: choice.text,
        law: choice.law,
        outcome: choice.outcome,
        xpGain,
        isBest,
      },
    ],
    totalXP: story.totalXP + xpGain,
  };

  return {
    story: newStory,
    choice,
    event,
    xpGain,
    isBest,
    isFinished: newStory.currentIndex >= story.events.length,
  };
}

export function getStoryProgress(story) {
  return {
    current: story.currentIndex + 1,
    total: story.events.length,
    percentage: Math.round((story.currentIndex / story.events.length) * 100),
  };
}

export function getStorySummary(story) {
  const bestChoices = story.choices.filter((c) => c.isBest).length;
  const neutralChoices = story.choices.filter((c) => c.outcome === 'neutral').length;
  const badChoices = story.choices.filter((c) => c.outcome === 'bad').length;

  return {
    totalEvents: story.events.length,
    bestChoices,
    neutralChoices,
    badChoices,
    totalXP: story.totalXP,
    choices: story.choices,
  };
}
