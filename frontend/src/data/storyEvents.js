export const storyEvents = [
  {
    id: "ch1",
    chapter: 1,
    title: "L'Arrivée à la Cour",
    context: "Tu viens d'être nommé conseiller auprès du roi. La cour est un nid de serpents où chaque mot compte. Tu ne connais personne, et tous les regards se tournent vers toi, le nouveau venu.",
    situation: "Lors de ton premier banquet, le roi te demande publiquement ton avis sur une stratégie militaire. Tu sais que ta réponse est meilleure que celle du général en chef, qui est présent.",
    choices: [
      {
        text: "Exposer brillamment ta stratégie supérieure devant toute la cour",
        law: 1,
        lawTitle: "Ne surpassez jamais le maître",
        outcome: "bad",
        explanation: "En éclipsant le général devant le roi, tu t'es fait un ennemi mortel dès le premier jour. Le général complote déjà ta chute. Tu as violé la Loi 1."
      },
      {
        text: "Présenter ta stratégie comme un humble complément à celle du général",
        law: 24,
        lawTitle: "Jouez le parfait courtisan",
        outcome: "good",
        explanation: "Brillant. Tu montres ta valeur sans humilier personne. Le roi note ton intelligence, le général te considère comme un allié potentiel. C'est l'art du courtisan parfait."
      },
      {
        text: "Répondre vaguement et changer de sujet",
        law: 4,
        lawTitle: "Dites-en toujours moins que nécessaire",
        outcome: "neutral",
        explanation: "Tu évites le piège, mais tu manques aussi une occasion de montrer ta valeur. Le roi s'interroge sur ta compétence. La discrétion a ses limites."
      },
      {
        text: "Critiquer ouvertement la stratégie du général pour impressionner le roi",
        law: 19,
        lawTitle: "Sachez à qui vous avez affaire",
        outcome: "bad",
        explanation: "Le général est le cousin du roi. En l'attaquant, tu as offensé la famille royale. Tu as commis l'erreur fatale de ne pas savoir à qui tu avais affaire."
      }
    ],
    bestChoiceIndex: 1
  },
  {
    id: "ch2",
    chapter: 2,
    title: "Le Rival",
    context: "Après quelques semaines, tu commences à gagner l'oreille du roi. Mais un autre conseiller, Lord Varenne, te voit comme une menace directe à son influence.",
    situation: "Lord Varenne répand des rumeurs selon lesquelles tu aurais des liens avec un royaume ennemi. Plusieurs courtisans commencent à t'éviter.",
    choices: [
      {
        text: "Confronter Lord Varenne publiquement et exiger qu'il prouve ses accusations",
        law: 39,
        lawTitle: "Agitez les eaux pour faire sortir les poissons",
        outcome: "neutral",
        explanation: "Tu forces Varenne à se dévoiler, mais la confrontation publique te fait paraître agressif. La cour préfère la subtilité. Tes alliés potentiels hésitent."
      },
      {
        text: "Ignorer les rumeurs et te concentrer sur ton travail",
        law: 36,
        lawTitle: "Dédaignez ce que vous ne pouvez avoir",
        outcome: "bad",
        explanation: "Grave erreur. En ignorant l'attaque contre ta réputation, tu as laissé le poison se répandre. Plusieurs courtisans te croient maintenant coupable."
      },
      {
        text: "Contre-attaquer en protégeant ta réputation avec des preuves de loyauté",
        law: 5,
        lawTitle: "Protégez votre réputation à tout prix",
        outcome: "good",
        explanation: "Parfait. Tu montres publiquement des lettres de recommandation et les témoignages de nobles respectés. Ta réputation est restaurée, et Varenne apparaît comme un calomniateur."
      },
      {
        text: "Tenter de corrompre les courtisans pour qu'ils arrêtent de répandre les rumeurs",
        law: 40,
        lawTitle: "Méprisez ce qui est gratuit",
        outcome: "bad",
        explanation: "La corruption te rend vulnérable au chantage. Ceux que tu as payés exigent maintenant davantage, et tu as créé une chaîne de dépendances dangereuses."
      }
    ],
    bestChoiceIndex: 2
  },
  {
    id: "ch3",
    chapter: 3,
    title: "Le Secret",
    context: "Un espion à ta solde découvre que Lord Varenne planifie secrètement de renverser le roi. Tu détiens une information explosive.",
    situation: "Tu as la preuve du complot de Varenne. Comment utiliser cette information pour maximiser ton avantage ?",
    choices: [
      {
        text: "Révéler immédiatement le complot au roi pour gagner sa gratitude",
        law: 29,
        lawTitle: "Planifiez jusqu'à la fin",
        outcome: "neutral",
        explanation: "Le roi te remercie, mais tu as joué ta carte trop tôt. Varenne nie tout et détruit les preuves restantes. Sans planification complète, ta victoire est incomplète."
      },
      {
        text: "Utiliser le secret comme levier pour contrôler Varenne en silence",
        law: 33,
        lawTitle: "Découvrez le point faible de chacun",
        outcome: "good",
        explanation: "Magistral. Tu tiens Varenne par sa plus grande peur. Il devient ton pantin involontaire, et tu contrôles ses actions sans que personne ne soupçonne ton pouvoir réel."
      },
      {
        text: "Partager l'information avec d'autres courtisans pour créer une alliance",
        law: 14,
        lawTitle: "Posez-vous en ami, agissez en espion",
        outcome: "neutral",
        explanation: "Tu gagnes quelques alliés, mais le secret perd de sa valeur en se dispersant. Quelqu'un finira par le révéler avant que tu ne puisses en tirer le maximum."
      },
      {
        text: "Confronter Varenne en privé et exiger qu'il quitte la cour",
        law: 15,
        lawTitle: "Écrasez totalement l'ennemi",
        outcome: "bad",
        explanation: "Varenne, acculé, devient désespéré et encore plus dangereux. Un ennemi que tu avertis de ton attaque a le temps de préparer sa contre-offensive."
      }
    ],
    bestChoiceIndex: 1
  },
  {
    id: "ch4",
    chapter: 4,
    title: "L'Alliance Impossible",
    context: "La Duchesse de Montfort, la femme la plus puissante de la cour après le roi, te propose une alliance secrète. Elle a ses propres ambitions.",
    situation: "La Duchesse t'offre son soutien total en échange de ta loyauté exclusive. C'est tentant, mais t'engager signifie te fermer d'autres portes.",
    choices: [
      {
        text: "Accepter son alliance et devenir son bras droit",
        law: 11,
        lawTitle: "Rendez les gens dépendants de vous",
        outcome: "bad",
        explanation: "En te liant exclusivement à la Duchesse, tu deviens dépendant d'elle et non l'inverse. Si elle tombe, tu tombes avec elle. Tu as perdu ta liberté stratégique."
      },
      {
        text: "Refuser poliment pour garder ta liberté d'action",
        law: 20,
        lawTitle: "Ne vous engagez envers personne",
        outcome: "good",
        explanation: "Sage décision. En restant indépendant, tu conserves ta valeur auprès de toutes les factions. La Duchesse te respecte davantage car tu n'es pas à vendre."
      },
      {
        text: "Accepter publiquement mais continuer à agir pour tes propres intérêts",
        law: 3,
        lawTitle: "Dissimulez vos intentions",
        outcome: "neutral",
        explanation: "Risqué. Si la Duchesse découvre ta duplicité, tu te feras un ennemi redoutable. La dissimulation fonctionne mieux quand l'enjeu est moins personnel."
      },
      {
        text: "Proposer une alliance conditionnelle avec des termes en ta faveur",
        law: 31,
        lawTitle: "Contrôlez les options",
        outcome: "neutral",
        explanation: "Tu négocies bien, mais la Duchesse voit clair dans ton jeu. Elle accepte tes termes mais te considère désormais comme un calculateur, ce qui limite la confiance future."
      }
    ],
    bestChoiceIndex: 1
  },
  {
    id: "ch5",
    chapter: 5,
    title: "La Trahison",
    context: "Ton assistant personnel, celui que tu considérais comme ton plus fidèle serviteur, t'a vendu des secrets à Lord Varenne. Tu découvres la trahison par hasard.",
    situation: "Tu apprends que ton assistant transmet tes plans à Varenne depuis des semaines. Toute ta stratégie est compromise.",
    choices: [
      {
        text: "Le congédier immédiatement et publiquement pour l'humilier",
        law: 46,
        lawTitle: "Ne paraissez jamais trop parfait",
        outcome: "bad",
        explanation: "En le congédiant avec fracas, tu montres à la cour que tu as été trompé. Cela te fait paraître vulnérable et naïf. Les ennemis sentent le sang."
      },
      {
        text: "Le garder en poste mais lui fournir de fausses informations",
        law: 3,
        lawTitle: "Dissimulez vos intentions",
        outcome: "good",
        explanation: "Brillant. Tu transformes le traître en canal de désinformation. Varenne agit sur des renseignements faux, et ses plans échouent les uns après les autres sans qu'il comprenne pourquoi."
      },
      {
        text: "Le confronter en privé et exiger qu'il espionne Varenne pour toi",
        law: 2,
        lawTitle: "Ne vous fiez pas à vos amis, utilisez vos ennemis",
        outcome: "neutral",
        explanation: "L'idée est bonne mais l'exécution risquée. Un traître retourné peut être un double agent. Tu ne sauras jamais si ses informations sont fiables."
      },
      {
        text: "Organiser sa disgrâce en le faisant surprendre en flagrant délit",
        law: 26,
        lawTitle: "Gardez les mains propres",
        outcome: "neutral",
        explanation: "Tu te débarrasses du traître sans te salir les mains, mais tu perds l'avantage de la désinformation. L'ennemi saura que tu as découvert son espion."
      }
    ],
    bestChoiceIndex: 1
  },
  {
    id: "ch6",
    chapter: 6,
    title: "L'Ascension",
    context: "Grâce à tes manœuvres, tu es devenu le conseiller le plus écouté du roi. Mais le pouvoir attire l'envie. Plusieurs nobles murmurent que tu deviens trop influent.",
    situation: "Le roi te propose de devenir Premier Conseiller, un titre qui ferait de toi l'homme le plus puissant après lui. Mais l'annonce risque de provoquer une coalition contre toi.",
    choices: [
      {
        text: "Accepter avec éclat et organiser une cérémonie grandiose",
        law: 37,
        lawTitle: "Créez des spectacles convaincants",
        outcome: "bad",
        explanation: "Le spectacle provoque exactement la réaction que tu craignais. Cinq nobles s'allient contre toi le soir même. Tu as transformé l'envie latente en hostilité ouverte."
      },
      {
        text: "Accepter humblement et montrer quelques signes de vulnérabilité",
        law: 46,
        lawTitle: "Ne paraissez jamais trop parfait",
        outcome: "good",
        explanation: "En montrant de l'humilité et quelques faiblesses apparentes, tu désamorces l'envie. Les nobles pensent que tu n'es pas une menace absolue, et la transition se fait en douceur."
      },
      {
        text: "Refuser publiquement le titre pour gagner encore plus de respect",
        law: 16,
        lawTitle: "Utilisez l'absence pour augmenter le respect",
        outcome: "neutral",
        explanation: "Ton refus impressionne, mais le roi est déçu et pourrait se tourner vers un autre. Tu as joué un coup risqué qui peut payer à long terme... ou pas."
      },
      {
        text: "Accepter et immédiatement consolider ton pouvoir en nommant des alliés",
        law: 23,
        lawTitle: "Concentrez vos forces",
        outcome: "neutral",
        explanation: "Tu sécurises ta position mais tes nominations rapides sont perçues comme du favoritisme. Le mécontentement gronde dans les rangs de ceux qui ont été ignorés."
      }
    ],
    bestChoiceIndex: 1
  },
  {
    id: "ch7",
    chapter: 7,
    title: "Le Complot",
    context: "En tant que Premier Conseiller, tu découvres qu'un groupe de nobles prépare un complot pour te destituer. Ils prévoient de convaincre le roi que tu es incompétent.",
    situation: "Le complot sera présenté au roi dans trois jours. Tu as peu de temps pour agir.",
    choices: [
      {
        text: "Aller voir le roi immédiatement pour dénoncer les conspirateurs",
        law: 35,
        lawTitle: "Maîtrisez l'art du timing",
        outcome: "neutral",
        explanation: "Tu agis trop vite. Sans preuves solides, le roi hésite. Les conspirateurs nient et retournent l'accusation contre toi. Le timing était mauvais."
      },
      {
        text: "Identifier le leader du complot et le neutraliser discrètement",
        law: 42,
        lawTitle: "Frappez le berger et les moutons se disperseront",
        outcome: "good",
        explanation: "Parfait. En ciblant le meneur et en le compromettant, le groupe se désintègre. Sans leader, les nobles perdent leur cohésion et leur courage. Le complot meurt de lui-même."
      },
      {
        text: "Offrir des avantages aux conspirateurs pour les rallier à ta cause",
        law: 12,
        lawTitle: "Utilisez la générosité sélective",
        outcome: "neutral",
        explanation: "Certains acceptent tes offres, mais les plus déterminés voient cela comme un signe de faiblesse. Tu as divisé le groupe mais pas éliminé la menace."
      },
      {
        text: "Ignorer le complot et montrer une confiance absolue",
        law: 17,
        lawTitle: "Cultivez un air d'imprévisibilité",
        outcome: "bad",
        explanation: "Ton inaction est interprétée comme de l'arrogance ou de l'ignorance. Le complot aboutit et tu perds la confiance du roi pendant plusieurs semaines."
      }
    ],
    bestChoiceIndex: 1
  },
  {
    id: "ch8",
    chapter: 8,
    title: "L'Épreuve Suprême",
    context: "Le roi tombe gravement malade. Le prince héritier, jeune et influençable, pourrait bientôt monter sur le trône. Tous les courtisans se repositionnent.",
    situation: "Le prince te convoque. Il veut savoir si tu lui seras loyal comme tu l'étais envers son père. Derrière lui, ses propres conseillers t'observent avec méfiance.",
    choices: [
      {
        text: "Jurer fidélité totale au prince et promettre de servir ses intérêts",
        law: 20,
        lawTitle: "Ne vous engagez envers personne",
        outcome: "bad",
        explanation: "En t'engageant totalement, tu perds ton indépendance. Si le roi se remet, ta loyauté au prince sera vue comme une trahison. Tu as misé sur un seul cheval."
      },
      {
        text: "Montrer ta valeur en résolvant un problème concret pour le prince",
        law: 9,
        lawTitle: "Gagnez par vos actes, pas par la discussion",
        outcome: "good",
        explanation: "Au lieu de promettre avec des mots, tu agis. Tu résous un conflit territorial qui agaçait le prince depuis des mois. Tes actes parlent plus fort que n'importe quel serment."
      },
      {
        text: "Proposer au prince de réformer immédiatement la cour",
        law: 45,
        lawTitle: "Prêchez le changement mais ne réformez jamais trop à la fois",
        outcome: "bad",
        explanation: "Le prince est séduit mais la cour résiste violemment. Tu as poussé trop de changements trop vite, et la résistance menace ta position."
      },
      {
        text: "Rester distant et observer comment la situation évolue",
        law: 35,
        lawTitle: "Maîtrisez l'art du timing",
        outcome: "neutral",
        explanation: "Ta prudence est sage, mais dans cette période de transition, l'inaction peut être interprétée comme de l'indécision. D'autres courtisans gagnent du terrain."
      }
    ],
    bestChoiceIndex: 1
  },
  {
    id: "ch9",
    chapter: 9,
    title: "Le Maître Stratège",
    context: "Le roi se remet miraculeusement. Le prince, reconnaissant de ton aide, te soutient également. Tu es désormais soutenu par les deux pouvoirs. Mais cette double loyauté crée de la méfiance.",
    situation: "Le roi et le prince ont des visions opposées sur une guerre à mener. Chacun te demande ton soutien. Te ranger d'un côté signifie trahir l'autre.",
    choices: [
      {
        text: "Soutenir le roi, car il détient le pouvoir actuel",
        law: 1,
        lawTitle: "Ne surpassez jamais le maître",
        outcome: "neutral",
        explanation: "Tu préserves ta relation avec le roi, mais le prince se sent trahi. Tu as misé sur le présent en sacrifiant l'avenir."
      },
      {
        text: "Soutenir le prince, car il représente l'avenir",
        law: 29,
        lawTitle: "Planifiez jusqu'à la fin",
        outcome: "neutral",
        explanation: "Tu joues le long terme, mais le roi est furieux. Ta position immédiate est fragilisée, et le roi pourrait agir contre toi avant que le prince n'hérite."
      },
      {
        text: "Proposer un compromis qui satisfait les deux parties",
        law: 43,
        lawTitle: "Travaillez sur le cœur et l'esprit des gens",
        outcome: "good",
        explanation: "Magistral. Tu trouves un terrain d'entente qui fait briller les deux camps. Le roi apprécie ta sagesse, le prince ta loyauté. Tu deviens indispensable à l'harmonie du royaume."
      },
      {
        text: "Déclarer publiquement ta neutralité et refuser de choisir",
        law: 20,
        lawTitle: "Ne vous engagez envers personne",
        outcome: "bad",
        explanation: "Dans ce cas précis, la neutralité est perçue comme de la lâcheté. Les deux camps te considèrent comme peu fiable, et ta valeur chute brutalement."
      }
    ],
    bestChoiceIndex: 2
  },
  {
    id: "ch10",
    chapter: 10,
    title: "Le Sommet du Pouvoir",
    context: "Des années ont passé. Tu es devenu le conseiller le plus respecté du royaume. Ton influence est immense, ta réputation sans tache. Mais le pouvoir attire toujours de nouveaux challengers.",
    situation: "Un jeune prodige arrive à la cour. Il est brillant, ambitieux, et il te rappelle toi-même à tes débuts. Il commence à attirer l'attention du roi avec des idées audacieuses.",
    choices: [
      {
        text: "Écraser sa réputation avant qu'il ne devienne une menace",
        law: 15,
        lawTitle: "Écrasez totalement l'ennemi",
        outcome: "bad",
        explanation: "En attaquant un jeune talent, tu parais cruel et insécure. La cour murmure que tu vieillis mal. Tu as oublié que la destruction n'est pas toujours la meilleure stratégie."
      },
      {
        text: "Le prendre sous ton aile et le guider, le rendant dépendant de toi",
        law: 11,
        lawTitle: "Rendez les gens dépendants de vous",
        outcome: "good",
        explanation: "Brillant. En devenant son mentor, tu contrôles sa trajectoire et tu t'assures qu'il te sera loyal. Son talent renforce ta position au lieu de la menacer. C'est le signe d'un vrai maître."
      },
      {
        text: "L'ignorer complètement et te concentrer sur tes propres affaires",
        law: 36,
        lawTitle: "Dédaignez ce que vous ne pouvez avoir",
        outcome: "neutral",
        explanation: "Tu maintiens ta dignité, mais le jeune prodige gagne du terrain sans opposition. Dans quelques années, il pourrait bien prendre ta place."
      },
      {
        text: "Le défier publiquement dans un débat pour prouver ta supériorité",
        law: 9,
        lawTitle: "Gagnez par vos actes",
        outcome: "bad",
        explanation: "Même si tu gagnes le débat, tu abaisses ta stature en te mesurant à un junior. Un maître n'a pas besoin de prouver sa valeur face à un apprenti."
      }
    ],
    bestChoiceIndex: 1
  }
];
