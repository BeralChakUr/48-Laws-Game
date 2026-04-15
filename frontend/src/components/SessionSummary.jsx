import { useNavigate } from 'react-router-dom';
import { Trophy, Target, XCircle, AlertTriangle, ArrowRight, Home, RotateCcw } from 'lucide-react';
import { Progress } from './ui/progress';

export default function SessionSummary({ summary }) {
  const navigate = useNavigate();
  const { total, correct, wrong, percentage, confusedLaws, cardsToReview } = summary;

  const getScoreColor = () => {
    if (percentage >= 80) return 'text-emerald-400';
    if (percentage >= 50) return 'text-[#D4AF37]';
    return 'text-red-400';
  };

  const getScoreMessage = () => {
    if (percentage >= 90) return 'Maîtrise exceptionnelle';
    if (percentage >= 70) return 'Bonne performance';
    if (percentage >= 50) return 'En progression';
    return 'Continuez à pratiquer';
  };

  return (
    <div className="min-h-screen px-4 md:px-6 py-12" data-testid="session-summary">
      <div className="max-w-2xl mx-auto space-y-10">
        {/* Title */}
        <div className="text-center animate-fade-in-up space-y-3">
          <Trophy className="w-10 h-10 text-[#D4AF37] mx-auto" />
          <h1 className="text-4xl md:text-5xl tracking-tighter font-medium text-gold-gradient">
            Session Terminée
          </h1>
          <p className={`text-lg font-medium ${getScoreColor()}`} data-testid="score-message">
            {getScoreMessage()}
          </p>
        </div>

        <div className="gold-line" />

        {/* Score circle */}
        <div className="animate-fade-in-up delay-100 flex justify-center">
          <div className="relative w-36 h-36 rounded-full border-2 border-[#D4AF37]/30 flex items-center justify-center bg-[#12141A]">
            <div className="text-center">
              <p className={`text-4xl font-medium ${getScoreColor()}`} data-testid="score-percentage">
                {percentage}%
              </p>
              <p className="text-xs text-[#565863] tracking-wider uppercase mt-1">Score</p>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="animate-fade-in-up delay-200 grid grid-cols-3 gap-4">
          <div className="bg-[#12141A] border border-[#D4AF37]/10 rounded-sm p-5 text-center">
            <Target className="w-5 h-5 text-[#D4AF37] mx-auto mb-2" />
            <p className="text-2xl font-medium text-[#E8E9ED]" data-testid="total-questions">{total}</p>
            <p className="text-xs text-[#565863] tracking-wider uppercase mt-1">Questions</p>
          </div>
          <div className="bg-[#12141A] border border-emerald-900/30 rounded-sm p-5 text-center">
            <Target className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
            <p className="text-2xl font-medium text-emerald-400" data-testid="correct-count">{correct}</p>
            <p className="text-xs text-[#565863] tracking-wider uppercase mt-1">Correctes</p>
          </div>
          <div className="bg-[#12141A] border border-red-900/30 rounded-sm p-5 text-center">
            <XCircle className="w-5 h-5 text-red-400 mx-auto mb-2" />
            <p className="text-2xl font-medium text-red-400" data-testid="wrong-count">{wrong}</p>
            <p className="text-xs text-[#565863] tracking-wider uppercase mt-1">Erreurs</p>
          </div>
        </div>

        {/* Confused laws */}
        {confusedLaws.length > 0 && (
          <div className="animate-fade-in-up delay-300 bg-[#12141A] border border-[#D4AF37]/10 rounded-sm p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-4 h-4 text-[#D4AF37]" />
              <h3 className="text-sm tracking-[0.15em] uppercase font-semibold text-[#D4AF37]">
                Lois les plus confondues 
              </h3>
            </div>
            <div className="space-y-3">
              {confusedLaws.map((law) => (
                <div key={law.lawNumber} className="flex items-center justify-between" data-testid={`confused-law-${law.lawNumber}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded-sm">
                      #{law.lawNumber}
                    </span>
                    <span className="text-sm text-[#E8E9ED]">{law.title}</span>
                  </div>
                  <span className="text-xs text-red-400">
                    {law.count} erreur{law.count > 1 ? 's' : ''}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Cards to review */}
        {cardsToReview.length > 0 && (
          <div className="animate-fade-in-up delay-400 bg-[#12141A] border border-red-900/20 rounded-sm p-6">
            <div className="flex items-center gap-2 mb-3">
              <RotateCcw className="w-4 h-4 text-red-400" />
              <h3 className="text-sm tracking-[0.15em] uppercase font-semibold text-red-400">
                Cartes à revoir
              </h3>
            </div>
            <p className="text-sm text-[#A0A2AB]">
              {cardsToReview.length} carte{cardsToReview.length > 1 ? 's' : ''} nécessite{cardsToReview.length > 1 ? 'nt' : ''} une révision supplémentaire.
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="animate-fade-in-up delay-500 flex flex-col sm:flex-row gap-3">
          <button
            data-testid="new-session-btn"
            onClick={() => navigate('/', { replace: true })}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-[#D4AF37] text-[#08090C] rounded-sm text-sm font-semibold tracking-widest uppercase transition-all duration-200 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:-translate-y-0.5"
          >
            <Home className="w-4 h-4" />
            Accueil
          </button>
          <button
            data-testid="view-progress-summary-btn"
            onClick={() => navigate('/progress')}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent text-[#D4AF37] border border-[#D4AF37]/30 rounded-sm text-sm font-semibold tracking-widest uppercase transition-all duration-200 hover:bg-[#D4AF37]/10"
          >
            Progression
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
