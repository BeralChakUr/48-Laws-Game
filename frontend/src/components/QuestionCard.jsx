import { useState } from 'react';
import { Scroll, Landmark, Quote, User } from 'lucide-react';

const typeConfig = {
  situation: { label: 'Situation', icon: Scroll, color: '#D4AF37' },
  historical_event: { label: 'Evenement historique', icon: Landmark, color: '#0A1B3F' },
  citation: { label: 'Citation', icon: Quote, color: '#7A0016' },
  personnage: { label: 'Personnage', icon: User, color: '#1C4E34' },
};

export default function QuestionCard({ card, onAnswer, disabled, selectedAnswer = null }) {
  const [selectedIndex, setSelectedIndex] = useState(selectedAnswer);
  const config = typeConfig[card.type] || typeConfig.situation;
  const TypeIcon = config.icon;

  const handleSelect = (index) => {
    if (disabled) return;
    setSelectedIndex(index);
    onAnswer(index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in-up" data-testid="question-card">
      {/* Card header - type badge */}
      <div className="game-card rounded-sm p-8 md:p-10 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div
            className="badge-type flex items-center gap-1.5"
            style={{ backgroundColor: `${config.color}20`, color: config.color === '#0A1B3F' ? '#3B5998' : config.color }}
            data-testid="card-type-badge"
          >
            <TypeIcon className="w-3 h-3" />
            {config.label}
          </div>
          <div className="badge-type bg-[#08090C]/10 text-[#565863]">
            Loi {card.lawNumber}
          </div>
          {card.difficulty && (
            <div className="badge-type bg-[#08090C]/5 text-[#565863]">
              {'*'.repeat(card.difficulty)}
            </div>
          )}
        </div>

        {/* Question */}
        <h2 className="text-2xl md:text-3xl font-medium leading-snug text-[#0A0B0E]" data-testid="question-text">
          {card.question}
        </h2>

        {/* Tags */}
        {card.tags && card.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-5">
            {card.tags.map((tag) => (
              <span key={tag} className="text-[0.65rem] tracking-wider uppercase text-[#565863] bg-[#08090C]/5 px-2 py-0.5 rounded-sm">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Choices */}
      <div className="space-y-3">
        {card.choices.map((choice, index) => (
          <button
            key={index}
            data-testid={`choice-${index}`}
            onClick={() => handleSelect(index)}
            disabled={disabled}
            className={`choice-btn w-full text-left px-6 py-4 rounded-sm text-sm md:text-base leading-relaxed ${
              disabled && selectedIndex === index
                ? index === card.correctAnswer
                  ? 'correct'
                  : 'incorrect'
                : disabled && index === card.correctAnswer
                  ? 'reveal-correct'
                  : selectedIndex === index
                    ? 'selected'
                    : ''
            }`}
          >
            <span className="flex items-start gap-3">
              <span className="shrink-0 w-7 h-7 rounded-sm flex items-center justify-center text-xs font-semibold border border-current/20 mt-0.5" style={{ opacity: 0.6 }}>
                {String.fromCharCode(65 + index)}
              </span>
              <span>{choice}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
