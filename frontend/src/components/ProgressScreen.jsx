import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Target, XCircle, TrendingUp, Trash2, Crown } from 'lucide-react';
import { Progress } from './ui/progress';
import { loadProgress, resetProgress, getWeakLaws } from '../utils/storage';
import { cards as allCards } from '../data/cards';
import { useState } from 'react';

export default function ProgressScreen() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(loadProgress);
  const weakLaws = getWeakLaws(progress);

  const totalCards = allCards.length;
  const cardsSeen = Object.keys(progress.cardsSeen).length;
  const cardsMastered = progress.cardsMastered.length;
  const totalAnswered = progress.totalCorrect + progress.totalWrong;
  const globalAccuracy = totalAnswered > 0 ? Math.round((progress.totalCorrect / totalAnswered) * 100) : 0;

  const handleReset = () => {
    if (window.confirm('Êtes-vous sûr de vouloir réinitialiser toute votre progression ?')) {
      resetProgress();
      setProgress(loadProgress());
    }
  };

  const getLawTitle = (lawNumber) => {
    const card = allCards.find((c) => c.lawNumber === lawNumber);
    return card ? card.lawTitle : `Loi ${lawNumber}`;
  };

  return (
    <div className="min-h-screen px-4 md:px-6 py-8" data-testid="progress-screen">
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Header */}
        <div className="flex items-center justify-between">
          <button
            data-testid="back-from-progress-btn"
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-sm text-[#A0A2AB] hover:text-[#E8E9ED] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Accueil
          </button>
          <button
            data-testid="reset-progress-btn"
            onClick={handleReset}
            className="flex items-center gap-2 text-xs text-[#565863] hover:text-red-400 transition-colors tracking-wider uppercase"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Réinitialiser
          </button>
        </div>

        {/* Title */}
        <div className="text-center space-y-3 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl tracking-tighter font-medium text-gold-gradient">
            Votre Progression
          </h1>
          <p className="text-sm text-[#A0A2AB]">
            Statistiques globales de votre apprentissage
          </p>
        </div>

        <div className="gold-line" />

        {/* Main stats */}
        <div className="animate-fade-in-up delay-100 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#12141A] border border-[#D4AF37]/10 rounded-sm p-5 text-center">
            <BookOpen className="w-5 h-5 text-[#A0A2AB] mx-auto mb-2" />
            <p className="text-2xl font-medium text-[#E8E9ED]" data-testid="progress-seen">{cardsSeen}</p>
            <p className="text-xs text-[#565863] tracking-wider uppercase mt-1">Cartes vues</p>
          </div>
          <div className="bg-[#12141A] border border-[#D4AF37]/10 rounded-sm p-5 text-center">
            <Crown className="w-5 h-5 text-[#D4AF37] mx-auto mb-2" />
            <p className="text-2xl font-medium text-[#D4AF37]" data-testid="progress-mastered">{cardsMastered}</p>
            <p className="text-xs text-[#565863] tracking-wider uppercase mt-1">Maîtrisées</p>
          </div>
          <div className="bg-[#12141A] border border-emerald-900/30 rounded-sm p-5 text-center">
            <Target className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
            <p className="text-2xl font-medium text-emerald-400" data-testid="progress-accuracy">{globalAccuracy}%</p>
            <p className="text-xs text-[#565863] tracking-wider uppercase mt-1">Précision</p>
          </div>
          <div className="bg-[#12141A] border border-[#D4AF37]/10 rounded-sm p-5 text-center">
            <TrendingUp className="w-5 h-5 text-[#A0A2AB] mx-auto mb-2" />
            <p className="text-2xl font-medium text-[#E8E9ED]" data-testid="progress-sessions">{progress.sessions.length}</p>
            <p className="text-xs text-[#565863] tracking-wider uppercase mt-1">Sessions</p>
          </div>
        </div>

        {/* Overall progress bar */}
        <div className="animate-fade-in-up delay-200 bg-[#12141A] border border-[#D4AF37]/10 rounded-sm p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs tracking-[0.15em] uppercase font-semibold text-[#A0A2AB]">
              Progression globale
            </span>
            <span className="text-sm text-[#D4AF37]">
              {cardsSeen}/{totalCards} cartes
            </span>
          </div>
          <div className="progress-gold">
            <Progress
              value={totalCards > 0 ? (cardsSeen / totalCards) * 100 : 0}
              className="h-2 bg-[#1A1C23]"
              data-testid="overall-progress-bar"
            />
          </div>
        </div>

        {/* Weak laws */}
        {weakLaws.length > 0 && (
          <div className="animate-fade-in-up delay-300 bg-[#12141A] border border-red-900/20 rounded-sm p-6">
            <div className="flex items-center gap-2 mb-5">
              <XCircle className="w-4 h-4 text-red-400" />
              <h3 className="text-sm tracking-[0.15em] uppercase font-semibold text-red-400">
                Lois les plus faibles
              </h3>
            </div>
            <div className="space-y-4">
              {weakLaws.slice(0, 8).map((law) => (
                <div key={law.lawNumber} data-testid={`weak-law-${law.lawNumber}`}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded-sm">
                        #{law.lawNumber}
                      </span>
                      <span className="text-sm text-[#E8E9ED]">{getLawTitle(law.lawNumber)}</span>
                    </div>
                    <span className="text-xs text-red-400">
                      {Math.round(law.errorRate * 100)}% erreurs
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-[#1A1C23] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-red-900/60 rounded-full transition-all duration-500"
                      style={{ width: `${law.errorRate * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Session history */}
        {progress.sessions.length > 0 && (
          <div className="animate-fade-in-up delay-400 bg-[#12141A] border border-[#D4AF37]/10 rounded-sm p-6">
            <h3 className="text-sm tracking-[0.15em] uppercase font-semibold text-[#A0A2AB] mb-4">
              Historique des sessions
            </h3>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {[...progress.sessions].reverse().map((s, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                  <span className="text-xs text-[#565863]">
                    {new Date(s.date).toLocaleDateString('fr-FR', {
                      day: 'numeric',
                      month: 'short',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-emerald-400">{s.correct} ok</span>
                    <span className="text-xs text-red-400">{s.wrong} err</span>
                    <span className="text-xs text-[#A0A2AB]">
                      {s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty state */}
        {progress.sessions.length === 0 && (
          <div className="animate-fade-in-up delay-200 text-center py-16 space-y-4">
            <img
              src="https://images.unsplash.com/photo-1625750331870-624de6fd3452?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHxjaGVzcyUyMHBpZWNlJTIwZGFya3xlbnwwfHx8fDE3NzYyMzUzOTR8MA&ixlib=rb-4.1.0&q=85"
              alt="Chess piece"
              className="w-32 h-32 object-cover rounded-sm mx-auto opacity-40"
            />
            <p className="text-[#565863] text-sm">
              Aucune session complétée. Commencez votre apprentissage !
            </p>
            <button
              data-testid="start-first-session-btn"
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-[#D4AF37] text-[#08090C] rounded-sm text-sm font-semibold tracking-widest uppercase transition-all duration-200 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
              Commencer
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
