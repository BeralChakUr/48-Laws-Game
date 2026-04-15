# PRD - Les 48 Lois du Pouvoir - Jeu Educatif

## Problem Statement
Application PC solo, moderne et elegante, centree sur l'apprentissage des 48 lois du pouvoir a travers un systeme de cartes interactives avec feedback intelligent et repetition espacee.

## Architecture
- **Frontend-only**: React + Tailwind CSS
- **Data**: 50 cartes en JSON (data/cards.js)
- **Persistence**: localStorage (utils/storage.js)
- **Game Logic**: Session engine with spaced repetition (utils/sessionEngine.js)
- **Routes**: / (accueil), /session (jeu), /progress (stats)
- **No backend** used for V1

## User Personas
- Etudiant en strategie/management cherchant a memoriser les 48 lois
- Lecteur du livre de Robert Greene voulant tester ses connaissances
- Curieux de psychologie sociale

## Core Requirements (Static)
1. Ecran d'accueil avec choix de session (10/15/20 cartes)
2. Session de jeu avec cartes interactives et 4 choix
3. Feedback intelligent (explication correcte + explication erreur specifique)
4. Repetition espacee (cartes ratees reviennent apres 3/5/7 cartes)
5. Ecran de fin de session (score, lois confondues, cartes a revoir)
6. Ecran progression (cartes vues, maitrisees, faibles, historique)

## What's Been Implemented (Feb 2026)
- [x] 50 cartes educatives en francais couvrant les 48 lois
- [x] 4 types de cartes: situation, evenement historique, citation, personnage
- [x] Systeme de feedback intelligent avec explications detaillees
- [x] Repetition espacee fonctionnelle
- [x] Session configurable (10/15/20 cartes)
- [x] Mode revision des erreurs
- [x] Ecran progression avec statistiques completes
- [x] UI premium dark/gold avec Cormorant Garamond + Outfit
- [x] Persistence localStorage
- [x] 100% tests frontend passes

## Prioritized Backlog
### P0 - Complete
All V1 features implemented

### P1 - Next Phase
- Ajouter plus de cartes (100+ pour couvrir chaque loi avec 2-3 cartes)
- Systeme de niveaux/difficulte progressive
- Mode "Defi" avec timer

### P2 - Future
- Sons/musique d'ambiance
- Animations 3D de retournement de carte
- Export/partage des statistiques
- Mode multijoueur local
- Systeme d'achievements/badges

## Next Tasks
1. Enrichir la base de cartes (objectif: 100+ cartes)
2. Ajouter un systeme de filtrage par difficulte
3. Ajouter des animations de transition entre cartes
4. Mode "Daily Challenge" avec 5 cartes par jour
