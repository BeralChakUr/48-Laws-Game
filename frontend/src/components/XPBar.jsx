import { getLevel, getLevelProgress, getXPToNextLevel, LEVELS } from '../utils/xpSystem';

export default function XPBar({ xp, xpChange = null }) {
  const level = getLevel(xp);
  const progress = getLevelProgress(xp);
  const toNext = getXPToNextLevel(xp);
  const nextLevel = LEVELS[level.index + 1];

  return (
    <div className="w-full" data-testid="xp-bar">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs tracking-[0.15em] uppercase font-semibold" style={{ color: level.color }}>
          {level.name}
        </span>
        <div className="flex items-center gap-2">
          {xpChange !== null && xpChange !== 0 && (
            <span
              className={`text-xs font-semibold animate-fade-in ${xpChange > 0 ? 'text-emerald-400' : 'text-red-400'}`}
              data-testid="xp-change"
            >
              {xpChange > 0 ? `+${xpChange}` : xpChange} XP
            </span>
          )}
          <span className="text-xs text-[#A0A2AB]" data-testid="xp-total">{xp} XP</span>
        </div>
      </div>
      <div className="w-full h-2 bg-[#1A1C23] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{
            width: `${progress}%`,
            background: `linear-gradient(90deg, ${level.color}90, ${level.color})`,
          }}
          data-testid="xp-progress-fill"
        />
      </div>
      {nextLevel && (
        <p className="text-[0.6rem] text-[#565863] mt-1">
          {toNext} XP avant {nextLevel.name}
        </p>
      )}
    </div>
  );
}
