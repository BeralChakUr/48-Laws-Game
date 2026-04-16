# PRD - Les 48 Lois du Pouvoir - Jeu Éducatif V2

## Problem Statement
Application PC solo, moderne et élégante, centrée sur l'apprentissage des 48 lois du pouvoir à travers un système de cartes interactives avec feedback intelligent, répétition espacée, système XP/niveaux et mode storytelling.

## Architecture
- **Frontend-only**: React + Tailwind CSS
- **Data**: 100 cartes en JSON (data/cards.js) + 10 scénarios narratifs (data/storyEvents.js)
- **Persistence**: localStorage (utils/storage.js)
- **Game Logic**: Session engine (utils/sessionEngine.js), Story engine (utils/storyEngine.js), XP system (utils/xpSystem.js)
- **Routes**: / (accueil), /session (quiz), /story (histoire), /progress (stats)
- **No backend**

## What's Been Implemented (V2 - Feb 2026)
- [x] 100 cartes éducatives en français (5 types: situation, événement historique, citation, personnage, scénario)
- [x] Système XP : +10 (correct), +15 (correct après erreur), -5 (erreur), minimum 0
- [x] 5 niveaux : Novice → Stratège → Manipulateur → Architecte du pouvoir → Maître des lois
- [x] Mode Histoire : 10 chapitres narratifs d'ascension au pouvoir
- [x] Barre XP et badge de niveau sur tous les écrans
- [x] Feedback intelligent avec gain/perte XP affiché
- [x] Répétition espacée améliorée (cartes ratées tracking)
- [x] Écran progression avancé avec table de niveaux et historique XP
- [x] Accents français corrects partout
- [x] Numéros de loi retirés des cartes de question

## Prioritized Backlog
### P1 - Next Phase
- Ajouter plus de cartes (200+ objectif)
- Plus de chapitres d'histoire (20+ scénarios)
- Mode défi avec timer
- Système d'achievements/badges

### P2 - Future
- Sons/musique d'ambiance
- Animations 3D de retournement de carte
- Export/partage des statistiques
- Classement entre joueurs
- Mode multijoueur local
