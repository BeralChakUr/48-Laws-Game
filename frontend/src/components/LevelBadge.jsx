import { getLevel, getLevelProgress } from '../utils/xpSystem';
import { Crown, Shield, Eye, Swords, Castle } from 'lucide-react';

const levelIcons = {
  0: Shield,
  1: Swords,
  2: Eye,
  3: Castle,
  4: Crown,
};

export default function LevelBadge({ xp, compact = false }) {
  const level = getLevel(xp);
  const Icon = levelIcons[level.index] || Shield;

  if (compact) {
    return (
      <div className="flex items-center gap-2" data-testid="level-badge-compact">
        <Icon className="w-4 h-4" style={{ color: level.color }} />
        <span className="text-xs tracking-[0.15em] uppercase font-semibold" style={{ color: level.color }}>
          {level.name}
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 bg-[#12141A] border border-[#D4AF37]/15 rounded-sm px-4 py-2.5" data-testid="level-badge">
      <div
        className="w-8 h-8 rounded-sm flex items-center justify-center"
        style={{ backgroundColor: `${level.color}15`, border: `1px solid ${level.color}30` }}
      >
        <Icon className="w-4 h-4" style={{ color: level.color }} />
      </div>
      <div>
        <p className="text-xs tracking-[0.15em] uppercase font-semibold" style={{ color: level.color }}>
          {level.name}
        </p>
        <p className="text-[0.65rem] text-[#565863]">{xp} XP</p>
      </div>
    </div>
  );
}
