# PRD - Les 48 Lois du Pouvoir - Jeu Éducatif V2

## Problem Statement
Application PC solo éducative sur les 48 lois du pouvoir avec cartes interactives, XP/niveaux, mode storytelling et achievements.

## Architecture
- **Frontend-only**: React + Tailwind CSS, localStorage
- **100 cartes** quiz + **30 chapitres** histoire + **20 achievements**
- Routes: / (accueil), /session (quiz), /story (histoire), /progress (stats), /achievements (badges)

## What's Been Implemented (V2.1 - Feb 2026)
- [x] 100 cartes (5 types: situation, événement historique, citation, personnage, scénario)
- [x] XP système: +10/+15/-5, 5 niveaux (Novice→Maître des lois)
- [x] 30 chapitres histoire (cour royale, corporate, social, politique)
- [x] 20 achievements avec notifications toast (quiz, maîtrise, niveaux, histoire)
- [x] Filtres par catégorie sur la page achievements
- [x] Plafond 3 réinsertions max par carte (sessions finies)
- [x] Accents français corrects partout
- [x] Persistance localStorage vérifiée

## Next Tasks
- 200+ cartes, 50+ chapitres
- Mode défi avec timer
- Animations de transition entre cartes
- Système de partage social
