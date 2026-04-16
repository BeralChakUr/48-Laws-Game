import { useState, useCallback, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Zap } from 'lucide-react';
import { Progress } from './ui/progress';
import XPBar from './XPBar';
import QuestionCard from './QuestionCard';
import FeedbackPanel from './FeedbackPanel';
import SessionSummary from './SessionSummary';
import { cards as allCards } from '../data/cards';
import {
  createSession,
  getCurrentCard,
  submitAnswer,
  getProgress,
  getSessionSummary,
} from '../utils/sessionEngine';
import { updateProgressAfterSession, loadProgress, unlockAchievements } from '../utils/storage';
import { calculateXP } from '../utils/xpSystem';
import { checkAchievements, ACHIEVEMENTS } from '../utils/achievements';
import { Toaster, toast } from 'sonner';

export default function GameSession() {
  const navigate = useNavigate();
  const location = useLocation();
  const { sessionSize = 10, reviewMode = false, weakLawNumbers = [] } = location.state || {};

  const [session, setSession] = useState(() =>
    createSession(allCards, sessionSize, { reviewMode, weakLawNumbers })
  );
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastResult, setLastResult] = useState(null);
  const [lastXPChange, setLastXPChange] = useState(null);
  const [currentXP, setCurrentXP] = useState(() => loadProgress().xp || 0);
  const [finishData, setFinishData] = useState(null);
  const sessionDoneRef = useRef(false);

  const currentCard = getCurrentCard(session);
  const progress = getProgress(session);
  const displayProgress = showFeedback
    ? { ...progress, current: Math.max(1, progress.current - 1) }
    : progress;

  const handleAnswer = useCallback(
    (choiceIndex) => {
      const result = submitAnswer(session, choiceIndex);
      const prog = loadProgress();
      const wasFailedBefore = (prog.failedCardIds || []).includes(result.card.id);
      const xpChange = calculateXP(result.isCorrect, wasFailedBefore);

      setLastResult({
        isCorrect: result.isCorrect,
        card: result.card,
        choiceIndex,
      });
      setLastXPChange(xpChange);
      setCurrentXP((prev) => Math.max(0, prev + xpChange));
      setShowFeedback(true);
      setSession(result.session);
      if (result.isFinished) {
        sessionDoneRef.current = true;
      }
    },
    [session]
  );

  const handleNext = useCallback(() => {
    setShowFeedback(false);
    setLastResult(null);
    setLastXPChange(null);
    if (sessionDoneRef.current || session.currentIndex >= session.queue.length) {
      // Compute summary and save immediately
      const summary = getSessionSummary(session);
      const updatedProgress = updateProgressAfterSession(summary);
      const newAchievements = checkAchievements(updatedProgress);
      if (newAchievements.length > 0) {
        unlockAchievements(newAchievements);
        setTimeout(() => {
          newAchievements.forEach((id) => {
            const a = ACHIEVEMENTS.find((x) => x.id === id);
            if (a) toast.success(`Badge débloqué : ${a.title}`, { description: a.description });
          });
        }, 300);
      }
      setFinishData({ summary, progress: updatedProgress });
    }
  }, [session]);

  if (finishData) {
    return (
      <>
        <Toaster position="top-center" richColors theme="dark" />
        <SessionSummary summary={finishData.summary} progress={finishData.progress} />
      </>
    );
  }

  if (!currentCard && !showFeedback) {
    return null;
  }

  return (
    <div className="min-h-screen px-4 md:px-6 py-8" data-testid="game-session">
      {/* Header bar */}
      <div className="max-w-3xl mx-auto mb-6">
        <div className="flex items-center justify-between mb-4">
          <button
            data-testid="back-to-home-btn"
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-sm text-[#A0A2AB] hover:text-[#E8E9ED] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Quitter
          </button>
          <div className="flex items-center gap-2">
            {reviewMode && (
              <span className="badge-type bg-[#7A0016]/20 text-red-400 flex items-center gap-1">
                <Zap className="w-3 h-3" />
                Révision
              </span>
            )}
            <span className="text-sm text-[#A0A2AB]" data-testid="progress-counter">
              {displayProgress.current} / {displayProgress.total}
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="progress-gold mb-3">
          <Progress
            value={displayProgress.percentage}
            className="h-1 bg-[#1A1C23]"
            data-testid="session-progress-bar"
          />
        </div>

        {/* XP Bar */}
        <XPBar xp={currentXP} xpChange={showFeedback ? lastXPChange : null} />
      </div>

      {/* Question Card */}
      {!showFeedback ? (
        <QuestionCard card={currentCard} onAnswer={handleAnswer} disabled={false} />
      ) : (
        <>
          <QuestionCard card={lastResult.card} onAnswer={() => {}} disabled={true} selectedAnswer={lastResult.choiceIndex} />
          <FeedbackPanel
            card={lastResult.card}
            isCorrect={lastResult.isCorrect}
            choiceIndex={lastResult.choiceIndex}
            onNext={handleNext}
            xpChange={lastXPChange}
          />
        </>
      )}
    </div>
  );
}
