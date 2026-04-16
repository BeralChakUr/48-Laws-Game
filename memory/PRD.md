# PRD - Les 48 Lois du Pouvoir - Jeu Éducatif V2

## Architecture
- **Frontend-only**: React + Tailwind CSS, localStorage
- 100 cartes quiz, 30 chapitres histoire (5 scénarios), 20 achievements
- Routes: / , /session, /story, /story/:id, /progress, /achievements

## What's Been Implemented
- [x] 100 cartes quiz (5 types), XP + 5 niveaux, 20 achievements avec toasts
- [x] 5 scénarios histoire indépendants avec progression séparée:
  - Cour Royale (10 ch), Entreprise (5 ch), Nouveau Règne (5 ch), Social (5 ch), Politique (5 ch)
- [x] Écran de sélection visuel avec cartes thématiques, couleurs, tags, difficulté
- [x] Progression XP indépendante par scénario dans localStorage

## Next Tasks
- 200+ cartes, 50+ chapitres
- Mode défi chronométré
- Animations de transition
- Système de partage social
