import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Crown, Briefcase, Shield, Users, Globe, Lock, CheckCircle, ChevronRight } from 'lucide-react';
import { scenarios } from '../data/storyEvents';
import { loadProgress } from '../utils/storage';

const ICONS = {
  Crown, Briefcase, Shield, Users, Globe,
};

export default function StorySelect() {
  const navigate = useNavigate();
  const progress = loadProgress();
  const scenarioProgress = progress.scenarioProgress || {};

  return (
    <div className="min-h-screen px-4 md:px-6 py-8" data-testid="story-select">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <button
          data-testid="back-from-story-select"
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-sm text-[#A0A2AB] hover:text-[#E8E9ED] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Accueil
        </button>
      </div>

      {/* Title */}
      <div className="text-center space-y-3 mb-12 animate-fade-in-up">
        <p className="text-xs tracking-[0.25em] uppercase font-semibold text-[#D4AF37]">
          Mode Histoire
        </p>
        <h1 className="text-4xl md:text-5xl tracking-tighter font-medium text-gold-gradient">
          Choisissez votre scénario
        </h1>
        <p className="text-base text-[#A0A2AB] max-w-lg mx-auto">
          Chaque scénario est une aventure indépendante. Incarnez un personnage et faites des choix stratégiques.
        </p>
      </div>

      {/* Scenario cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {scenarios.map((scenario, index) => {
          const Icon = ICONS[scenario.iconName] || Crown;
          const sp = scenarioProgress[scenario.id] || {};
          const completedCount = sp.completedCount || 0;
          const scenarioXP = sp.xp || 0;
          const isCompleted = completedCount > 0;
          const pct = isCompleted ? 100 : 0;

          return (
            <button
              key={scenario.id}
              data-testid={`scenario-card-${scenario.id}`}
              onClick={() => navigate(`/story/${scenario.id}`)}
              className="group relative text-left bg-[#12141A] border rounded-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
              style={{
                borderColor: `${scenario.color}20`,
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Completed badge */}
              {isCompleted && (
                <div className="absolute top-4 right-4">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                </div>
              )}

              {/* Icon + Title */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="shrink-0 w-12 h-12 rounded-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${scenario.color}15`,
                    border: `1px solid ${scenario.color}30`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: scenario.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-medium text-[#F2ECD9] mb-0.5 group-hover:text-white transition-colors">
                    {scenario.title}
                  </h2>
                  <p className="text-xs tracking-wider uppercase font-semibold" style={{ color: scenario.color }}>
                    {scenario.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-[#A0A2AB] leading-relaxed mb-4">
                {scenario.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {scenario.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-[0.6rem] tracking-wider uppercase px-2 py-0.5 rounded-sm"
                    style={{ backgroundColor: `${scenario.color}10`, color: `${scenario.color}` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer: chapters + difficulty + XP */}
              <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <div className="flex items-center gap-4">
                  <span className="text-xs text-[#565863]">
                    {scenario.chapterCount} chapitres
                  </span>
                  <span className="text-xs text-[#565863]">
                    {'*'.repeat(scenario.difficulty)} difficulté
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {scenarioXP > 0 && (
                    <span className="text-xs font-semibold text-emerald-400">{scenarioXP} XP</span>
                  )}
                  {completedCount > 0 && (
                    <span className="text-[0.6rem] text-[#565863]">{completedCount}x</span>
                  )}
                  <ChevronRight className="w-4 h-4 text-[#565863] group-hover:text-[#D4AF37] transition-colors" />
                </div>
              </div>

              {/* Progress bar */}
              {isCompleted && (
                <div className="mt-3 w-full h-1 bg-[#1A1C23] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${pct}%`, backgroundColor: scenario.color }}
                  />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
