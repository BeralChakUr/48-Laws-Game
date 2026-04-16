import { Shield, Swords, Eye, Castle, Crown, Star, Zap, Target, BookOpen, Trophy, Flame, Award, Medal, Sparkles, Heart, Globe, Users, Brain, Scroll, CheckCircle } from 'lucide-react';

export const ACHIEVEMENTS = [
  {
    id: "first_answer",
    title: "Premier Pas",
    description: "Répondre à votre première question",
    icon: Star,
    category: "quiz",
    check: (p) => (p.totalCorrect + p.totalWrong) >= 1,
  },
  {
    id: "first_session",
    title: "Apprenti",
    description: "Compléter votre première session",
    icon: BookOpen,
    category: "quiz",
    check: (p) => p.sessions.length >= 1,
  },
  {
    id: "perfect_session",
    title: "Session Parfaite",
    description: "Terminer une session sans aucune erreur",
    icon: Sparkles,
    category: "quiz",
    check: (p) => p.sessions.some((s) => s.wrong === 0 && s.total >= 5),
  },
  {
    id: "ten_sessions",
    title: "Persévérant",
    description: "Compléter 10 sessions",
    icon: Flame,
    category: "quiz",
    check: (p) => p.sessions.length >= 10,
  },
  {
    id: "twenty_sessions",
    title: "Infatigable",
    description: "Compléter 20 sessions",
    icon: Zap,
    category: "quiz",
    check: (p) => p.sessions.length >= 20,
  },
  {
    id: "fifty_correct",
    title: "Demi-Centurion",
    description: "50 réponses correctes au total",
    icon: Target,
    category: "quiz",
    check: (p) => p.totalCorrect >= 50,
  },
  {
    id: "hundred_correct",
    title: "Centurion",
    description: "100 réponses correctes au total",
    icon: Medal,
    category: "quiz",
    check: (p) => p.totalCorrect >= 100,
  },
  {
    id: "ten_mastered",
    title: "Collectionneur",
    description: "Maîtriser 10 cartes",
    icon: CheckCircle,
    category: "mastery",
    check: (p) => (p.cardsMastered || []).length >= 10,
  },
  {
    id: "twentyfive_mastered",
    title: "Expert",
    description: "Maîtriser 25 cartes",
    icon: Award,
    category: "mastery",
    check: (p) => (p.cardsMastered || []).length >= 25,
  },
  {
    id: "fifty_mastered",
    title: "Érudit",
    description: "Maîtriser 50 cartes",
    icon: Brain,
    category: "mastery",
    check: (p) => (p.cardsMastered || []).length >= 50,
  },
  {
    id: "level_stratege",
    title: "Stratège",
    description: "Atteindre le niveau Stratège (101 XP)",
    icon: Swords,
    category: "level",
    check: (p) => (p.xp || 0) >= 101,
  },
  {
    id: "level_manipulateur",
    title: "Manipulateur",
    description: "Atteindre le niveau Manipulateur (301 XP)",
    icon: Eye,
    category: "level",
    check: (p) => (p.xp || 0) >= 301,
  },
  {
    id: "level_architecte",
    title: "Architecte du Pouvoir",
    description: "Atteindre le niveau Architecte (601 XP)",
    icon: Castle,
    category: "level",
    check: (p) => (p.xp || 0) >= 601,
  },
  {
    id: "level_maitre",
    title: "Maître des Lois",
    description: "Atteindre le niveau suprême (1001 XP)",
    icon: Crown,
    category: "level",
    check: (p) => (p.xp || 0) >= 1001,
  },
  {
    id: "story_first",
    title: "Conteur",
    description: "Compléter le mode histoire une fois",
    icon: Scroll,
    category: "story",
    check: (p) => (p.storyCompleted || 0) >= 1,
  },
  {
    id: "story_triple",
    title: "Légende Vivante",
    description: "Compléter le mode histoire 3 fois",
    icon: Trophy,
    category: "story",
    check: (p) => (p.storyCompleted || 0) >= 3,
  },
  {
    id: "marathon",
    title: "Marathonien",
    description: "Compléter une session de 20 cartes",
    icon: Flame,
    category: "quiz",
    check: (p) => p.sessions.some((s) => s.total >= 20),
  },
  {
    id: "all_laws",
    title: "Encyclopédiste",
    description: "Voir les 48 lois au moins une fois",
    icon: Globe,
    category: "mastery",
    check: (p) => {
      const lawsSeen = new Set();
      Object.keys(p.lawCorrect || {}).forEach((k) => lawsSeen.add(k));
      Object.keys(p.lawErrors || {}).forEach((k) => lawsSeen.add(k));
      return lawsSeen.size >= 48;
    },
  },
  {
    id: "reviewer",
    title: "Réviseur",
    description: "Compléter une session en mode révision",
    icon: Heart,
    category: "quiz",
    check: (p) => (p.reviewSessionsCompleted || 0) >= 1,
  },
  {
    id: "social_climber",
    title: "Grimpeur Social",
    description: "Gagner 500 XP au total",
    icon: Users,
    category: "level",
    check: (p) => (p.xp || 0) >= 500,
  },
];

export function checkAchievements(progress) {
  const unlocked = progress.unlockedAchievements || [];
  const newlyUnlocked = [];

  ACHIEVEMENTS.forEach((a) => {
    if (!unlocked.includes(a.id) && a.check(progress)) {
      newlyUnlocked.push(a.id);
    }
  });

  return newlyUnlocked;
}

export function getUnlockedAchievements(progress) {
  return (progress.unlockedAchievements || [])
    .map((id) => ACHIEVEMENTS.find((a) => a.id === id))
    .filter(Boolean);
}

export function getLockedAchievements(progress) {
  const unlocked = progress.unlockedAchievements || [];
  return ACHIEVEMENTS.filter((a) => !unlocked.includes(a.id));
}
