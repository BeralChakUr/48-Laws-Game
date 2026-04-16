import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock } from 'lucide-react';
import { loadProgress } from '../utils/storage';
import { ACHIEVEMENTS, getUnlockedAchievements, getLockedAchievements } from '../utils/achievements';
import { useState } from 'react';

const CATEGORIES = [
  { key: 'all', label: 'Tous' },
  { key: 'quiz', label: 'Quiz' },
  { key: 'mastery', label: 'Maîtrise' },
  { key: 'level', label: 'Niveaux' },
  { key: 'story', label: 'Histoire' },
];

export default function AchievementsScreen() {
  const navigate = useNavigate();
  const progress = loadProgress();
  const [filter, setFilter] = useState('all');

  const unlocked = getUnlockedAchievements(progress);
  const locked = getLockedAchievements(progress);
  const unlockedIds = new Set((progress.unlockedAchievements || []).map(String));

  const allAchievements = ACHIEVEMENTS.map((a) => ({
    ...a,
    isUnlocked: unlockedIds.has(a.id),
  }));

  const filtered = filter === 'all'
    ? allAchievements
    : allAchievements.filter((a) => a.category === filter);

  const percentage = Math.round((unlocked.length / ACHIEVEMENTS.length) * 100);

  return (
    <div className="min-h-screen px-4 md:px-6 py-8" data-testid="achievements-screen">
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Header */}
        <div className="flex items-center justify-between">
          <button
            data-testid="back-from-achievements-btn"
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-sm text-[#A0A2AB] hover:text-[#E8E9ED] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Accueil
          </button>
          <span className="text-sm text-[#D4AF37]" data-testid="achievements-count">
            {unlocked.length} / {ACHIEVEMENTS.length}
          </span>
        </div>

        {/* Title */}
        <div className="text-center space-y-3 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl tracking-tighter font-medium text-gold-gradient">
            Achievements
          </h1>
          <p className="text-sm text-[#A0A2AB]">
            {percentage}% débloqués — Continuez à progresser
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-sm mx-auto">
          <div className="w-full h-2 bg-[#1A1C23] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${percentage}%`,
                background: 'linear-gradient(90deg, #D4AF37, #F5E6A3)',
              }}
            />
          </div>
        </div>

        <div className="gold-line" />

        {/* Category filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap animate-fade-in-up delay-100">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              data-testid={`filter-${c.key}`}
              onClick={() => setFilter(c.key)}
              className={`px-4 py-2 rounded-sm text-xs font-semibold tracking-widest uppercase transition-all duration-200 ${
                filter === c.key
                  ? 'bg-[#D4AF37] text-[#08090C]'
                  : 'bg-[#12141A] text-[#A0A2AB] border border-[#D4AF37]/15 hover:border-[#D4AF37]/40'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Achievement grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in-up delay-200">
          {filtered.map((achievement) => {
            const Icon = achievement.icon;
            const isUnlocked = achievement.isUnlocked;

            return (
              <div
                key={achievement.id}
                data-testid={`achievement-${achievement.id}`}
                className={`relative rounded-sm p-5 transition-all duration-300 ${
                  isUnlocked
                    ? 'bg-[#12141A] border border-[#D4AF37]/30 hover:border-[#D4AF37]/50 hover:-translate-y-0.5'
                    : 'bg-[#0A0B0E] border border-white/5 opacity-50'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`shrink-0 w-11 h-11 rounded-sm flex items-center justify-center ${
                      isUnlocked
                        ? 'bg-[#D4AF37]/15 border border-[#D4AF37]/30'
                        : 'bg-white/5 border border-white/10'
                    }`}
                  >
                    {isUnlocked ? (
                      <Icon className="w-5 h-5 text-[#D4AF37]" />
                    ) : (
                      <Lock className="w-4 h-4 text-[#565863]" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className={`text-sm font-semibold mb-0.5 ${
                        isUnlocked ? 'text-[#F2ECD9]' : 'text-[#565863]'
                      }`}
                    >
                      {achievement.title}
                    </h3>
                    <p
                      className={`text-xs leading-relaxed ${
                        isUnlocked ? 'text-[#A0A2AB]' : 'text-[#565863]/70'
                      }`}
                    >
                      {achievement.description}
                    </p>
                  </div>
                  {isUnlocked && (
                    <div className="shrink-0 w-2 h-2 rounded-full bg-[#D4AF37] mt-1.5" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-sm text-[#565863] py-8">
            Aucun achievement dans cette catégorie.
          </p>
        )}
      </div>
    </div>
  );
}
