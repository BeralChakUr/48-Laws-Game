import { CheckCircle, XCircle, Lightbulb, ArrowRight, BookOpen } from 'lucide-react';

export default function FeedbackPanel({ card, isCorrect, choiceIndex, onNext }) {
  return (
    <div
      className={`w-full max-w-3xl mx-auto mt-6 animate-slide-in-right feedback-glass rounded-sm p-6 md:p-8 ${
        isCorrect ? 'feedback-correct' : 'feedback-incorrect'
      }`}
      data-testid="feedback-panel"
    >
      {/* Status header */}
      <div className="flex items-center gap-3 mb-5">
        {isCorrect ? (
          <>
            <CheckCircle className="w-6 h-6 text-emerald-400" />
            <h3 className="text-xl font-medium text-emerald-400" data-testid="feedback-status">
              Correct
            </h3>
          </>
        ) : (
          <>
            <XCircle className="w-6 h-6 text-red-400" />
            <h3 className="text-xl font-medium text-red-400" data-testid="feedback-status">
              Incorrect
            </h3>
          </>
        )}
      </div>

      {/* Law reference */}
      <div className="mb-5 pb-5 border-b border-white/10">
        <div className="flex items-center gap-2 mb-2">
          <BookOpen className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-xs tracking-[0.2em] uppercase font-semibold text-[#D4AF37]">
            Loi {card.lawNumber}
          </span>
        </div>
        <p className="text-lg font-medium text-[#F2ECD9]" data-testid="feedback-law-title">
          {card.lawTitle}
        </p>
      </div>

      {/* Correct explanation */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-2">
          <Lightbulb className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-xs tracking-[0.15em] uppercase font-semibold text-[#A0A2AB]">
            {isCorrect ? 'Explication' : 'Pourquoi cette loi est la bonne reponse'}
          </span>
        </div>
        <p className="text-sm md:text-base leading-relaxed text-[#E8E9ED]" data-testid="feedback-correct-explanation">
          {card.correctExplanation}
        </p>
      </div>

      {/* Wrong choice explanation (only if incorrect) */}
      {!isCorrect && card.wrongExplanations && card.wrongExplanations[String(choiceIndex)] && (
        <div className="mb-5 bg-red-900/10 border border-red-900/20 rounded-sm p-4">
          <div className="flex items-center gap-2 mb-2">
            <XCircle className="w-3.5 h-3.5 text-red-400" />
            <span className="text-xs tracking-[0.15em] uppercase font-semibold text-red-400">
              Pourquoi votre choix est incorrect
            </span>
          </div>
          <p className="text-sm leading-relaxed text-[#A0A2AB]" data-testid="feedback-wrong-explanation">
            {card.wrongExplanations[String(choiceIndex)]}
          </p>
        </div>
      )}

      {/* Next button */}
      <button
        data-testid="next-card-btn"
        onClick={onNext}
        className="mt-2 flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-[#08090C] rounded-sm text-sm font-semibold tracking-widest uppercase transition-all duration-200 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:-translate-y-0.5"
      >
        Continuer
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
