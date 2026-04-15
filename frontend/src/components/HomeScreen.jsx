import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Crown, BookOpen, Target, TrendingUp, Play, RotateCcw } from 'lucide-react';
import { loadProgress, getWeakLaws } from '../utils/storage';
import { Progress } from './ui/progress';

export default function HomeScreen() {
  const navigate = useNavigate();
  const [sessionSize, setSessionSize] = useState(10);
  const progress = loadProgress();
  const totalSeen = Object.keys(progress.cardsSeen).length;
  const totalMastered = progress.cardsMastered.length;
  const weakLaws = getWeakLaws(progress);
  const hasErrors = weakLaws.length > 0;

  const startSession = (reviewMode = false) => {
    const weakLawNumbers = reviewMode ? weakLaws.slice(0, 10).map((l) => l.lawNumber) : [];
    navigate('/session', {
      state: { sessionSize, reviewMode, weakLawNumbers },
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 hero-bg" data-testid="home-screen">
      {/* Background image */}
      <div
        className="fixed inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1647101734210-ff5d79813069?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZ29sZCUyMGFic3RyYWN0JTIwdGV4dHVyZXxlbnwwfHx8fDE3NzYyMzUzOTR8MA&ixlib=rb-4.1.0&q=85)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 max-w-2xl w-full text-center space-y-12">
        {/* Crown icon */}
        <div className="animate-fade-in-up flex justify-center">
          <div className="w-16 h-16 rounded-sm border border-[#D4AF37]/30 flex items-center justify-center bg-[#12141A]">
            <Crown className="w-8 h-8 text-[#D4AF37]" />
          </div>
        </div>

        {/* Title */}
        <div className="animate-fade-in-up delay-100 space-y-4">
          <p className="text-xs tracking-[0.25em] uppercase font-semibold text-[#D4AF37]">
            Jeu d'apprentissage strategique
          </p>
          <h1 className="text-5xl md:text-6xl tracking-tighter font-medium text-gold-gradient">
            Les 48 Lois du Pouvoir
          </h1>
          <p className="text-base md:text-lg text-[#A0A2AB] leading-relaxed max-w-lg mx-auto">
            Maitrisez les principes de strategie et de pouvoir a travers un systeme de cartes interactives et de repetition espacee.
          </p>
        </div>

        <div className="gold-line w-48 mx-auto animate-fade-in delay-200" />

        {/* Session size selector */}
        <div className="animate-fade-in-up delay-200 space-y-3">
          <p className="text-xs tracking-[0.2em] uppercase font-semibold text-[#565863]">
            Cartes par session
          </p>
          <div className="flex items-center justify-center gap-3">
            {[10, 15, 20].map((size) => (
              <button
                key={size}
                data-testid={`session-size-${size}`}
                onClick={() => setSessionSize(size)}
                className={`px-5 py-2.5 rounded-sm text-sm font-medium transition-all duration-200 ${
                  sessionSize === size
                    ? 'bg-[#D4AF37] text-[#08090C] shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                    : 'bg-[#12141A] text-[#A0A2AB] border border-[#D4AF37]/15 hover:border-[#D4AF37]/40'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="animate-fade-in-up delay-300 space-y-4">
          <button
            data-testid="start-session-btn"
            onClick={() => startSession(false)}
            className="w-full max-w-sm mx-auto flex items-center justify-center gap-3 px-8 py-4 bg-[#D4AF37] text-[#08090C] rounded-sm text-sm font-semibold tracking-widest uppercase transition-all duration-200 hover:shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:-translate-y-0.5"
          >
            <Play className="w-4 h-4" />
            Commencer une session
          </button>

          <div className="flex gap-3 max-w-sm mx-auto">
            <button
              data-testid="review-errors-btn"
              onClick={() => startSession(true)}
              disabled={!hasErrors}
              className={`flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-sm text-sm font-medium tracking-wider uppercase transition-all duration-200 border ${
                hasErrors
                  ? 'bg-transparent text-[#D4AF37] border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/50'
                  : 'bg-transparent text-[#565863] border-[#565863]/20 cursor-not-allowed'
              }`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reviser
            </button>
            <button
              data-testid="view-progress-btn"
              onClick={() => navigate('/progress')}
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-sm text-sm font-medium tracking-wider uppercase transition-all duration-200 border bg-transparent text-[#A0A2AB] border-[#A0A2AB]/20 hover:bg-[#A0A2AB]/5 hover:border-[#A0A2AB]/40"
            >
              <TrendingUp className="w-3.5 h-3.5" />
              Progression
            </button>
          </div>
        </div>

        {/* Quick stats */}
        {(totalSeen > 0 || progress.sessions.length > 0) && (
          <div className="animate-fade-in delay-400 grid grid-cols-3 gap-4 max-w-sm mx-auto">
            <div className="text-center space-y-1">
              <div className="flex items-center justify-center gap-1.5 text-[#A0A2AB]">
                <BookOpen className="w-3.5 h-3.5" />
                <span className="text-xs tracking-wider uppercase">Vues</span>
              </div>
              <p className="text-2xl font-medium text-[#E8E9ED]" data-testid="stats-seen">{totalSeen}</p>
            </div>
            <div className="text-center space-y-1">
              <div className="flex items-center justify-center gap-1.5 text-[#D4AF37]">
                <Target className="w-3.5 h-3.5" />
                <span className="text-xs tracking-wider uppercase">Maitrise</span>
              </div>
              <p className="text-2xl font-medium text-[#D4AF37]" data-testid="stats-mastered">{totalMastered}</p>
            </div>
            <div className="text-center space-y-1">
              <div className="flex items-center justify-center gap-1.5 text-[#A0A2AB]">
                <TrendingUp className="w-3.5 h-3.5" />
                <span className="text-xs tracking-wider uppercase">Sessions</span>
              </div>
              <p className="text-2xl font-medium text-[#E8E9ED]" data-testid="stats-sessions">{progress.sessions.length}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
