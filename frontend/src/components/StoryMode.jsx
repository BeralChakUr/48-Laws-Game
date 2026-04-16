import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, Scroll, Trophy, Sparkles, CheckCircle, XCircle, MinusCircle } from 'lucide-react';
import { Progress } from './ui/progress';
import XPBar from './XPBar';
import LevelBadge from './LevelBadge';
import { storyEvents } from '../data/storyEvents';
import {
  createStorySession,
  getCurrentEvent,
  submitStoryChoice,
  getStoryProgress,
  getStorySummary,
} from '../utils/storyEngine';
import { loadProgress, saveProgress } from '../utils/storage';
import { applyXP } from '../utils/xpSystem';

export default function StoryMode() {
  const navigate = useNavigate();
  const [story, setStory] = useState(() => createStorySession(storyEvents));
  const [showResult, setShowResult] = useState(false);
  const [lastResult, setLastResult] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [currentXP, setCurrentXP] = useState(() => loadProgress().xp || 0);
  const [xpChange, setXpChange] = useState(null);

  const currentEvent = getCurrentEvent(story);
  const progress = getStoryProgress(story);

  const handleChoice = useCallback((choiceIndex) => {
    const result = submitStoryChoice(story, choiceIndex);
    setLastResult(result);
    setShowResult(true);
    setStory(result.story);
    setXpChange(result.xpGain);

    const newXP = applyXP(currentXP, result.xpGain);
    setCurrentXP(newXP);
    const prog = loadProgress();
    prog.xp = newXP;
    prog.storyCompleted = result.isFinished ? (prog.storyCompleted || 0) + 1 : prog.storyCompleted || 0;
    saveProgress(prog);

    if (result.isFinished) {
      setTimeout(() => setIsFinished(true), 0);
    }
  }, [story, currentXP]);

  const handleNext = useCallback(() => {
    setShowResult(false);
    setLastResult(null);
    setXpChange(null);
    if (story.currentIndex >= story.events.length) {
      setIsFinished(true);
    }
  }, [story]);

  if (isFinished) {
    const summary = getStorySummary(story);
    return (
      <div className="min-h-screen px-4 md:px-6 py-12" data-testid="story-summary">
        <div className="max-w-2xl mx-auto space-y-10">
          <div className="text-center animate-fade-in-up space-y-3">
            <Trophy className="w-10 h-10 text-[#D4AF37] mx-auto" />
            <h1 className="text-4xl md:text-5xl tracking-tighter font-medium text-gold-gradient">
              Histoire Terminée
            </h1>
            <p className="text-lg text-[#A0A2AB]">Ton ascension au pouvoir est complète.</p>
          </div>

          <div className="gold-line" />

          <div className="animate-fade-in-up delay-100 grid grid-cols-3 gap-4">
            <div className="bg-[#12141A] border border-emerald-900/30 rounded-sm p-5 text-center">
              <CheckCircle className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
              <p className="text-2xl font-medium text-emerald-400">{summary.bestChoices}</p>
              <p className="text-xs text-[#565863] tracking-wider uppercase mt-1">Meilleurs choix</p>
            </div>
            <div className="bg-[#12141A] border border-[#D4AF37]/10 rounded-sm p-5 text-center">
              <MinusCircle className="w-5 h-5 text-[#D4AF37] mx-auto mb-2" />
              <p className="text-2xl font-medium text-[#D4AF37]">{summary.neutralChoices}</p>
              <p className="text-xs text-[#565863] tracking-wider uppercase mt-1">Neutres</p>
            </div>
            <div className="bg-[#12141A] border border-red-900/30 rounded-sm p-5 text-center">
              <XCircle className="w-5 h-5 text-red-400 mx-auto mb-2" />
              <p className="text-2xl font-medium text-red-400">{summary.badChoices}</p>
              <p className="text-xs text-[#565863] tracking-wider uppercase mt-1">Mauvais choix</p>
            </div>
          </div>

          <div className="animate-fade-in-up delay-200 bg-[#12141A] border border-[#D4AF37]/10 rounded-sm p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs tracking-[0.15em] uppercase font-semibold text-[#D4AF37]">XP gagnés dans l'histoire</span>
              <span className={`text-lg font-medium ${summary.totalXP >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                {summary.totalXP > 0 ? '+' : ''}{summary.totalXP} XP
              </span>
            </div>
            <XPBar xp={currentXP} />
          </div>

          <div className="animate-fade-in-up delay-300 space-y-3">
            <h3 className="text-sm tracking-[0.15em] uppercase font-semibold text-[#A0A2AB]">Tes décisions</h3>
            {summary.choices.map((c, i) => (
              <div key={i} className="flex items-start gap-3 py-2 border-b border-white/5 last:border-0">
                <span className="shrink-0 text-xs font-mono text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded-sm mt-0.5">
                  Ch.{i + 1}
                </span>
                <div className="flex-1">
                  <p className="text-sm text-[#E8E9ED]">{c.choiceText}</p>
                  <p className="text-xs text-[#565863] mt-0.5">Loi {c.law} — {c.outcome === 'good' ? 'Excellent' : c.outcome === 'neutral' ? 'Acceptable' : 'Erreur'}</p>
                </div>
                <span className={`text-xs font-semibold ${c.xpGain >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {c.xpGain > 0 ? '+' : ''}{c.xpGain}
                </span>
              </div>
            ))}
          </div>

          <div className="animate-fade-in-up delay-400 flex gap-3">
            <button
              data-testid="story-home-btn"
              onClick={() => navigate('/', { replace: true })}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-[#D4AF37] text-[#08090C] rounded-sm text-sm font-semibold tracking-widest uppercase transition-all duration-200 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
              Accueil
            </button>
            <button
              data-testid="story-replay-btn"
              onClick={() => {
                setStory(createStorySession(storyEvents));
                setIsFinished(false);
                setShowResult(false);
                setLastResult(null);
                setXpChange(null);
              }}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent text-[#D4AF37] border border-[#D4AF37]/30 rounded-sm text-sm font-semibold tracking-widest uppercase transition-all duration-200 hover:bg-[#D4AF37]/10"
            >
              Rejouer
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!currentEvent) return null;

  return (
    <div className="min-h-screen px-4 md:px-6 py-8" data-testid="story-mode">
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-6">
        <div className="flex items-center justify-between mb-4">
          <button
            data-testid="story-quit-btn"
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-sm text-[#A0A2AB] hover:text-[#E8E9ED] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Quitter
          </button>
          <span className="text-sm text-[#A0A2AB]" data-testid="story-progress">
            Chapitre {progress.current} / {progress.total}
          </span>
        </div>
        <div className="progress-gold mb-4">
          <Progress value={progress.percentage} className="h-1 bg-[#1A1C23]" />
        </div>
        <XPBar xp={currentXP} xpChange={showResult ? xpChange : null} />
      </div>

      {!showResult ? (
        /* Story Card */
        <div className="max-w-3xl mx-auto animate-fade-in-up" data-testid="story-event">
          <div className="game-card rounded-sm p-8 md:p-10 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Scroll className="w-4 h-4 text-[#D4AF37]" />
              <span className="badge-type bg-[#D4AF37]/15 text-[#D4AF37]">
                Chapitre {currentEvent.chapter}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-medium text-[#0A0B0E] mb-4" data-testid="story-title">
              {currentEvent.title}
            </h2>
            <div className="space-y-4 text-[#0A0B0E]/80">
              <div className="bg-[#08090C]/5 rounded-sm p-4">
                <p className="text-xs tracking-[0.15em] uppercase font-semibold text-[#565863] mb-2">Contexte</p>
                <p className="text-sm md:text-base leading-relaxed">{currentEvent.context}</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.15em] uppercase font-semibold text-[#D4AF37] mb-2">Situation</p>
                <p className="text-base md:text-lg leading-relaxed font-medium">{currentEvent.situation}</p>
              </div>
            </div>
          </div>

          {/* Choices */}
          <div className="space-y-3">
            {currentEvent.choices.map((choice, i) => (
              <button
                key={i}
                data-testid={`story-choice-${i}`}
                onClick={() => handleChoice(i)}
                className="choice-btn w-full text-left px-6 py-4 rounded-sm text-sm md:text-base leading-relaxed"
              >
                <span className="flex items-start gap-3">
                  <span className="shrink-0 w-7 h-7 rounded-sm flex items-center justify-center text-xs font-semibold border border-current/20 mt-0.5" style={{ opacity: 0.6 }}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span>{choice.text}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* Result */
        <div className="max-w-3xl mx-auto animate-fade-in-up" data-testid="story-result">
          <div className={`feedback-glass rounded-sm p-6 md:p-8 ${
            lastResult.isBest ? 'feedback-correct' : lastResult.choice.outcome === 'neutral' ? 'border border-[#D4AF37]/30' : 'feedback-incorrect'
          }`}>
            <div className="flex items-center gap-3 mb-5">
              {lastResult.isBest ? (
                <>
                  <Sparkles className="w-6 h-6 text-emerald-400" />
                  <h3 className="text-xl font-medium text-emerald-400">Choix optimal</h3>
                </>
              ) : lastResult.choice.outcome === 'neutral' ? (
                <>
                  <MinusCircle className="w-6 h-6 text-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-[#D4AF37]">Choix acceptable</h3>
                </>
              ) : (
                <>
                  <XCircle className="w-6 h-6 text-red-400" />
                  <h3 className="text-xl font-medium text-red-400">Mauvais choix</h3>
                </>
              )}
              <span className={`ml-auto text-sm font-semibold ${lastResult.xpGain >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                {lastResult.xpGain > 0 ? '+' : ''}{lastResult.xpGain} XP
              </span>
            </div>

            <div className="mb-5 pb-5 border-b border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-xs tracking-[0.2em] uppercase font-semibold text-[#D4AF37]">
                  Loi {lastResult.choice.law}
                </span>
              </div>
              <p className="text-lg font-medium text-[#F2ECD9]">{lastResult.choice.lawTitle}</p>
            </div>

            <div className="mb-5">
              <p className="text-xs tracking-[0.15em] uppercase font-semibold text-[#A0A2AB] mb-2">
                Conséquence
              </p>
              <p className="text-sm md:text-base leading-relaxed text-[#E8E9ED]">
                {lastResult.choice.explanation}
              </p>
            </div>

            {!lastResult.isBest && (
              <div className="mb-5 bg-emerald-900/10 border border-emerald-900/20 rounded-sm p-4">
                <p className="text-xs tracking-[0.15em] uppercase font-semibold text-emerald-400 mb-2">
                  Le meilleur choix était
                </p>
                <p className="text-sm text-[#A0A2AB]">
                  « {lastResult.event.choices[lastResult.event.bestChoiceIndex].text} »
                  — Loi {lastResult.event.choices[lastResult.event.bestChoiceIndex].law} : {lastResult.event.choices[lastResult.event.bestChoiceIndex].lawTitle}
                </p>
              </div>
            )}

            <button
              data-testid="story-next-btn"
              onClick={handleNext}
              className="mt-2 flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-[#08090C] rounded-sm text-sm font-semibold tracking-widest uppercase transition-all duration-200 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
              {story.currentIndex >= story.events.length ? 'Voir le résumé' : 'Chapitre suivant'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
