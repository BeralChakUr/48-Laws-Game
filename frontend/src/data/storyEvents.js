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
  },
  {
    id: "ch11",
    chapter: 11,
    title: "Le Nouveau Poste",
    context: "Tu quittes la cour royale et te retrouves dans le monde moderne. Tu viens d'être embauché comme analyste dans une grande entreprise du CAC 40. L'open space est un champ de bataille silencieux.",
    situation: "Lors de ta première semaine, tu découvres que ton manager direct s'attribue systématiquement le travail de ses subordonnés. Il vient de présenter ton rapport comme le sien.",
    choices: [
      { text: "Le confronter directement devant l'équipe", law: 1, lawTitle: "Ne surpassez jamais le maître", outcome: "bad", explanation: "Humilier ton manager en public te fait un ennemi mortel. Il contrôle tes évaluations, tes projets, ta carrière. Tu viens de signer ton arrêt de progression." },
      { text: "Documenter discrètement tes contributions et construire ta visibilité autrement", law: 5, lawTitle: "Protégez votre réputation à tout prix", outcome: "good", explanation: "Tu protèges ta réputation en rendant tes contributions visibles par d'autres canaux : emails en copie, présentations transversales. Le manager ne peut plus cacher ton travail." },
      { text: "Faire le même travail pour un autre département pour te rendre visible", law: 6, lawTitle: "Attirez l'attention à tout prix", outcome: "neutral", explanation: "Tu gagnes en visibilité mais tu disperses tes efforts. Ton manager, voyant que tu travailles ailleurs, pourrait te considérer comme déloyal." },
      { text: "Accepter la situation et redoubler d'efforts pour lui", law: 22, lawTitle: "Utilisez la tactique de la capitulation", outcome: "neutral", explanation: "Tu montres ta loyauté, mais au prix de ton invisibilité. À long terme, cette stratégie t'épuise sans reconnaissance." }
    ],
    bestChoiceIndex: 1
  },
  {
    id: "ch12",
    chapter: 12,
    title: "Le Mentor Toxique",
    context: "Un directeur senior, Marc, te prend sous son aile. Il t'invite aux déjeuners, te donne des conseils, et te présente à des gens importants. Mais tu remarques qu'il demande souvent des faveurs en retour.",
    situation: "Marc te demande de soutenir sa proposition controversée en comité de direction, en échange de sa recommandation pour une promotion.",
    choices: [
      { text: "Accepter le deal et soutenir sa proposition", law: 11, lawTitle: "Rendez les gens dépendants de vous", outcome: "bad", explanation: "Tu deviens dépendant de Marc, pas l'inverse. Chaque faveur crée une dette. Bientôt, tu seras son instrument plutôt que son protégé." },
      { text: "Remercier mais décliner poliment en restant indépendant", law: 20, lawTitle: "Ne vous engagez envers personne", outcome: "good", explanation: "En restant libre, tu conserves ta crédibilité. Marc te respecte davantage car il ne peut pas te contrôler. Ta promotion viendra de tes mérites, pas de ses faveurs." },
      { text: "Accepter mais prévoir de retourner la situation à ton avantage plus tard", law: 3, lawTitle: "Dissimulez vos intentions", outcome: "neutral", explanation: "Plan risqué. Si Marc découvre ta duplicité, il utilisera son réseau pour te nuire. La dissimulation avec un mentor puissant est une danse dangereuse." },
      { text: "Exposer ses pratiques de manipulation à la direction", law: 26, lawTitle: "Gardez les mains propres", outcome: "bad", explanation: "Dénoncer un directeur senior te fait passer pour un traître. Même si tu as raison, la hiérarchie protège les siens. Tu te retrouves isolé." }
    ],
    bestChoiceIndex: 1
  },
  {
    id: "ch13",
    chapter: 13,
    title: "La Réunion Décisive",
    context: "Tu es maintenant cadre intermédiaire. Le PDG organise un brainstorming stratégique avec tous les managers. C'est ta chance de briller devant la direction générale.",
    situation: "Tu as une idée brillante mais risquée. Le directeur financier, très conservateur, est connu pour démolir les propositions audacieuses devant tout le monde.",
    choices: [
      { text: "Présenter ton idée avec force et conviction devant tout le monde", law: 28, lawTitle: "Faites preuve d'audace", outcome: "neutral", explanation: "Ton audace impressionne le PDG mais irrite le directeur financier. Tu gagnes en visibilité mais te fais un adversaire puissant. C'est un pari à double tranchant." },
      { text: "Présenter l'idée au directeur financier en privé avant la réunion, en le laissant y contribuer", law: 24, lawTitle: "Jouez le parfait courtisan", outcome: "good", explanation: "Brillant. En intégrant le directeur financier dans l'élaboration, il devient co-auteur plutôt qu'opposant. L'idée passe sans résistance et tu gagnes un allié au lieu d'un ennemi." },
      { text: "Attendre que quelqu'un d'autre propose une idée similaire pour la soutenir", law: 7, lawTitle: "Laissez les autres travailler pour vous", outcome: "bad", explanation: "Tu attends trop longtemps. Personne ne propose ton idée, et la réunion passe sans que tu aies contribué. Occasion manquée." },
      { text: "Garder ton idée et la présenter par email après la réunion", law: 4, lawTitle: "Dites-en toujours moins que nécessaire", outcome: "neutral", explanation: "Tu évites le conflit mais perds l'impact du moment. Un email n'a jamais la puissance d'une présentation en direct. Le PDG ne le lira peut-être même pas." }
    ],
    bestChoiceIndex: 1
  },
  {
    id: "ch14",
    chapter: 14,
    title: "Le Saboteur",
    context: "Un collègue du même niveau, Sophie, sabote discrètement tes projets. Des données disparaissent, des réunions sont déplacées sans te prévenir, des rumeurs circulent sur ta compétence.",
    situation: "Tu as maintenant la preuve que Sophie est derrière ces sabotages. Comment réagis-tu ?",
    choices: [
      { text: "Présenter les preuves à ton directeur pour la faire sanctionner", law: 5, lawTitle: "Protégez votre réputation", outcome: "neutral", explanation: "Le directeur écoute mais hésite à intervenir. Il ne veut pas de conflit dans son équipe. Sophie est avertie et devient plus discrète, mais aussi plus dangereuse." },
      { text: "Utiliser les preuves comme levier en privé pour la neutraliser", law: 33, lawTitle: "Découvrez le point faible de chacun", outcome: "good", explanation: "En face à face, tu montres que tu sais tout. Sophie comprend qu'elle ne peut plus agir sans risque. Le sabotage cesse immédiatement et elle cherche une cible plus facile." },
      { text: "Ignorer ses actions et te concentrer sur l'excellence de ton travail", law: 36, lawTitle: "Dédaignez ce que vous ne pouvez avoir", outcome: "bad", explanation: "Noble mais dangereux. Pendant que tu travailles, Sophie continue de miner ta réputation. L'excellence seule ne suffit pas quand quelqu'un sabote activement." },
      { text: "Rallier d'autres collègues contre elle pour l'isoler", law: 42, lawTitle: "Frappez le berger", outcome: "neutral", explanation: "Tu créés une coalition mais la politique de bureau s'intensifie. La direction voit un conflit d'équipe et vous êtes tous les deux pénalisés." }
    ],
    bestChoiceIndex: 1
  },
  {
    id: "ch15",
    chapter: 15,
    title: "La Promotion",
    context: "Après trois ans d'efforts, on te propose un poste de directeur adjoint. Le salaire double, mais le poste implique de gérer 50 personnes et de répondre directement au PDG.",
    situation: "Ton prédécesseur a été licencié pour incompétence. L'équipe est démotivée et méfiante envers tout nouveau chef. Comment prends-tu tes fonctions ?",
    choices: [
      { text: "Imposer immédiatement ta vision avec des réformes radicales", law: 45, lawTitle: "Ne réformez jamais trop à la fois", outcome: "bad", explanation: "L'équipe, déjà traumatisée, se braque. Tes réformes, même bonnes, sont perçues comme de l'arrogance. La résistance passive s'installe." },
      { text: "Écouter d'abord, puis gagner les cœurs avant d'agir", law: 43, lawTitle: "Travaillez sur le cœur et l'esprit des gens", outcome: "good", explanation: "En prenant le temps d'écouter, tu montres du respect. Les employés commencent à te faire confiance. Quand tu introduis des changements, ils les acceptent car ils se sentent entendus." },
      { text: "Identifier les trois leaders informels et les rallier à ta cause", law: 42, lawTitle: "Frappez le berger", outcome: "neutral", explanation: "Stratégie intelligente mais insuffisante. Les leaders informels te soutiennent mais les autres voient du favoritisme. Il faut gagner toute l'équipe, pas seulement les leaders." },
      { text: "Montrer ta force en licenciant les éléments les plus récalcitrants", law: 15, lawTitle: "Écrasez totalement l'ennemi", outcome: "bad", explanation: "Les licenciements terrorisent l'équipe. Tu obtiens l'obéissance par la peur, mais tu perds la créativité, l'engagement et la loyauté. L'équipe travaille au minimum." }
    ],
    bestChoiceIndex: 1
  },
  {
    id: "ch16",
    chapter: 16,
    title: "Le Nouveau Roi",
    context: "Retour à la cour médiévale. Le vieux roi est mort. Son fils, le prince Édouard, monte sur le trône. Il est jeune, méfiant et entouré de nouveaux favoris qui n'ont aucune expérience.",
    situation: "Le nouveau roi te convoque. Il veut remplacer tous les anciens conseillers par ses amis d'enfance. Tu es le seul ancien qu'il hésite à congédier.",
    choices: [
      { text: "Implorer le roi de garder les anciens conseillers", law: 13, lawTitle: "Faites appel à l'intérêt personnel", outcome: "neutral", explanation: "Le roi écoute mais voit ta démarche comme de la défense corporatiste. Il garde quelques anciens mais reste méfiant envers toi." },
      { text: "Montrer immédiatement ta valeur en résolvant un problème concret que ses amis ne peuvent pas gérer", law: 9, lawTitle: "Gagnez par vos actes", outcome: "good", explanation: "Le roi voit que tes compétences sont irremplaçables. Ses amis, brillants en réjouissances, sont incapables de gérer l'État. Tu deviens indispensable par la preuve, pas par les mots." },
      { text: "Te rallier ostensiblement aux nouveaux favoris pour survivre", law: 38, lawTitle: "Comportez-vous comme les autres", outcome: "neutral", explanation: "Tu survis mais perds ton identité. Les favoris te voient comme un suiveur, pas un pair. Ta position est sûre mais sans influence." },
      { text: "Critiquer ouvertement l'incompétence des nouveaux conseillers", law: 19, lawTitle: "Sachez à qui vous avez affaire", outcome: "bad", explanation: "Les nouveaux favoris sont les amis d'enfance du roi. Les critiquer, c'est critiquer le jugement du roi lui-même. Tu es congédié le soir même." }
    ],
    bestChoiceIndex: 1
  },
  {
    id: "ch17",
    chapter: 17,
    title: "La Favorite",
    context: "La reine Isabelle détient un pouvoir considérable dans l'ombre. Elle contrôle l'accès au roi et peut faire ou défaire les carrières. Sa dame de compagnie, Marguerite, est ses yeux et ses oreilles.",
    situation: "La reine te fait savoir, par Marguerite, qu'elle veut que tu soutiennes son candidat pour le poste de trésorier. Le roi a un autre candidat en tête.",
    choices: [
      { text: "Soutenir le candidat de la reine en secret", law: 26, lawTitle: "Gardez les mains propres", outcome: "neutral", explanation: "Tu gardes profil bas mais la reine sait que tu es son homme. Le roi, s'il découvre ta manœuvre, perdra confiance en toi." },
      { text: "Proposer un troisième candidat qui satisfait les deux camps", law: 43, lawTitle: "Travaillez sur le cœur et l'esprit", outcome: "good", explanation: "Magistral. Tu trouves un candidat acceptable pour le roi et la reine, te positionnant comme un médiateur précieux. Les deux pouvoirs te sont reconnaissants." },
      { text: "Soutenir le candidat du roi ouvertement", law: 1, lawTitle: "Ne surpassez jamais le maître", outcome: "neutral", explanation: "Tu restes loyal au roi mais tu te fais une ennemie de la reine. Dans une cour où le pouvoir est partagé, ignorer la reine est dangereux." },
      { text: "Refuser de prendre parti", law: 20, lawTitle: "Ne vous engagez envers personne", outcome: "bad", explanation: "Dans ce cas, la neutralité est perçue comme de la lâcheté par les deux camps. Le roi te trouve tiède, la reine te trouve inutile. Tu perds des deux côtés." }
    ],
    bestChoiceIndex: 1
  },
  {
    id: "ch18",
    chapter: 18,
    title: "L'Ambassadeur",
    context: "Une délégation étrangère arrive pour négocier un traité commercial. Le roi te nomme négociateur en chef. Les étrangers sont réputés pour être des négociateurs redoutables.",
    situation: "Lors de la première session, l'ambassadeur étranger ouvre avec une demande exorbitante : un accès exclusif aux mines d'or du royaume en échange de soie et d'épices.",
    choices: [
      { text: "Répondre par une demande encore plus exorbitante pour équilibrer", law: 28, lawTitle: "Faites preuve d'audace", outcome: "neutral", explanation: "L'audace surprend l'ambassadeur et rééquilibre la négociation. Mais elle risque aussi de braquer les étrangers et de bloquer les discussions." },
      { text: "Accepter d'en discuter calmement, poser des questions pour comprendre leurs vrais besoins", law: 14, lawTitle: "Posez-vous en ami, agissez en espion", outcome: "good", explanation: "En écoutant attentivement, tu découvres que l'ambassadeur a désespérément besoin de fer pour une guerre imminente. Les mines d'or étaient un leurre. Tu tiens maintenant la vraie monnaie d'échange." },
      { text: "Refuser catégoriquement et menacer de rompre les négociations", law: 15, lawTitle: "Écrasez totalement l'ennemi", outcome: "bad", explanation: "La rupture isole le royaume diplomatiquement. Les étrangers s'allient avec des rivaux. Tu as gagné la bataille mais perdu la guerre commerciale." },
      { text: "Proposer un accord limité sans les mines d'or", law: 31, lawTitle: "Contrôlez les options", outcome: "neutral", explanation: "Tu limites les dégâts mais manques l'opportunité de découvrir ce que les étrangers veulent vraiment. Un accord moyen quand un accord excellent était possible." }
    ],
    bestChoiceIndex: 1
  },
  {
    id: "ch19",
    chapter: 19,
    title: "Le Tournoi",
    context: "Le roi organise un grand tournoi pour célébrer son couronnement. Tous les nobles rivalisent pour attirer l'attention et gagner les faveurs royales.",
    situation: "On t'invite à participer à un concours de rhétorique devant toute la cour. Ton principal rival, Lord Valerius, est un orateur brillant et expérimenté.",
    choices: [
      { text: "Affronter Valerius avec un discours encore plus brillant", law: 1, lawTitle: "Ne surpassez jamais le maître", outcome: "bad", explanation: "Même si tu gagnes, écraser Valerius te fait un ennemi mortel. Et si tu perds, ta réputation souffre. Le tournoi rhétorique est un piège des deux côtés." },
      { text: "Décliner élégamment le concours en invoquant ton humilité", law: 46, lawTitle: "Ne paraissez jamais trop parfait", outcome: "good", explanation: "En déclinant avec grâce, tu montres de la sagesse et de l'humilité. Le roi apprécie ta retenue, et Valerius ne peut pas te vaincre s'il n'y a pas de combat." },
      { text: "Saboter discrètement la préparation de Valerius", law: 26, lawTitle: "Gardez les mains propres", outcome: "bad", explanation: "Le sabotage est découvert par un espion de Valerius. Le scandale te couvre de honte devant toute la cour. Ta réputation est détruite." },
      { text: "Proposer un concours différent où tu excelles", law: 31, lawTitle: "Contrôlez les options", outcome: "neutral", explanation: "Tu changes le terrain de jeu, mais Valerius voit la manœuvre et s'y oppose. Le roi tranche en faveur du concours original. Tu parais calculateur." }
    ],
    bestChoiceIndex: 1
  },
  {
    id: "ch20",
    chapter: 20,
    title: "La Guerre",
    context: "Le royaume voisin déclare la guerre. Le roi te nomme conseiller militaire. L'armée ennemie est deux fois plus nombreuse que la tienne.",
    situation: "Trois généraux proposent trois stratégies différentes. Le roi te demande ton avis décisif.",
    choices: [
      { text: "Recommander l'attaque frontale pour montrer la force du royaume", law: 28, lawTitle: "Faites preuve d'audace", outcome: "bad", explanation: "L'audace contre un ennemi deux fois supérieur est du suicide. Les pertes sont catastrophiques. Le courage sans stratégie n'est que de la témérité." },
      { text: "Conseiller des négociations de paix pour gagner du temps et préparer une embuscade", law: 3, lawTitle: "Dissimulez vos intentions", outcome: "good", explanation: "En feignant la paix, tu gagnes du temps pour préparer tes défenses et organiser une embuscade décisive. L'ennemi, confiant, tombe dans le piège." },
      { text: "Proposer la capitulation pour préserver les vies", law: 22, lawTitle: "Tactique de la capitulation", outcome: "neutral", explanation: "Tu sauves des vies mais le royaume perd son indépendance. Parfois la capitulation est sage, mais ici il existe une meilleure option." },
      { text: "Attendre que l'ennemi s'épuise en long siège", law: 35, lawTitle: "Maîtrisez l'art du timing", outcome: "neutral", explanation: "Le temps joue partiellement en ta faveur, mais un siège prolongé épuise aussi les défenseurs. Sans action offensive, tu ne fais que retarder l'inévitable." }
    ],
    bestChoiceIndex: 1
  },
  {
    id: "ch21",
    chapter: 21,
    title: "Le Gala",
    context: "Tu es invité au gala annuel de l'industrie. C'est l'événement social de l'année. PDG, investisseurs, et influenceurs se mélangent dans un décor somptueux. Chaque conversation est une opportunité.",
    situation: "Tu repères trois personnes clés : un investisseur milliardaire, un PDG de ton secteur, et un journaliste influent. Tu n'as le temps que pour une longue conversation. Qui choisis-tu ?",
    choices: [
      { text: "L'investisseur, pour pitcher ton projet et lever des fonds", law: 13, lawTitle: "Faites appel à l'intérêt personnel", outcome: "neutral", explanation: "L'investisseur écoute poliment mais reçoit 50 pitchs par semaine. Sans introduction préalable, tu es juste un parmi tant d'autres." },
      { text: "Le journaliste, pour obtenir un article qui multipliera ta visibilité", law: 6, lawTitle: "Attirez l'attention à tout prix", outcome: "good", explanation: "Le journaliste publie un portrait élogieux. L'article attire l'investisseur et le PDG qui te contactent d'eux-mêmes. Tu as utilisé un multiplicateur de force." },
      { text: "Le PDG, pour proposer un partenariat stratégique", law: 8, lawTitle: "Obligez les autres à venir à vous", outcome: "neutral", explanation: "Le PDG est intéressé mais méfiant. Sans crédibilité établie, ta proposition semble prématurée. Il faudra plusieurs rencontres pour concrétiser." },
      { text: "Circuler entre les trois sans approfondir aucune conversation", law: 4, lawTitle: "Dites-en moins que nécessaire", outcome: "bad", explanation: "Tu restes mystérieux mais invisible. Le lendemain, personne ne se souvient de toi. Dans un gala, l'absence de connexion profonde est un échec." }
    ],
    bestChoiceIndex: 1
  },
  {
    id: "ch22",
    chapter: 22,
    title: "Le Scandale",
    context: "Ton meilleur ami est impliqué dans un scandale financier qui fait la une des médias. Il te demande de le soutenir publiquement. Votre amitié est connue de tous.",
    situation: "Si tu le soutiens, tu risques d'être associé au scandale. Si tu te distancies, tu perds un ami et parais déloyal aux yeux de certains.",
    choices: [
      { text: "Le soutenir publiquement par loyauté", law: 2, lawTitle: "Ne vous fiez pas à vos amis", outcome: "bad", explanation: "Ta loyauté te coûte cher. Les médias t'associent au scandale. Des clients et partenaires prennent leurs distances. L'amitié ne devrait pas primer sur la survie." },
      { text: "Prendre discrètement de la distance sans commentaire public", law: 10, lawTitle: "Évitez les malchanceux", outcome: "good", explanation: "Tu protèges ta position sans attaquer ton ami. Le silence est ta meilleure défense. Ceux qui observent comprennent ta prudence sans te juger déloyal." },
      { text: "Le critiquer publiquement pour te protéger", law: 5, lawTitle: "Protégez votre réputation", outcome: "bad", explanation: "Trahir un ami en public détruit ta réputation de loyauté. Les gens se méfieront désormais de toi : si tu trahis un ami, que ferais-tu à un associé ?" },
      { text: "L'aider financièrement en secret mais rester neutre en public", law: 26, lawTitle: "Gardez les mains propres", outcome: "neutral", explanation: "Honorable mais risqué. Si l'aide financière est découverte, tu seras mêlé au scandale. La générosité secrète a ses limites dans un monde transparent." }
    ],
    bestChoiceIndex: 1
  },
  {
    id: "ch23",
    chapter: 23,
    title: "L'Héritage",
    context: "Un oncle fortuné décède et laisse un héritage conséquent. La famille se déchire pour la répartition. Tu es nommé exécuteur testamentaire car l'oncle te faisait confiance.",
    situation: "Deux branches de la famille revendiquent la majorité de l'héritage. Tu dois trancher, sachant que ta décision déterminera tes relations familiales pour des décennies.",
    choices: [
      { text: "Favoriser la branche qui peut te rendre le plus de services", law: 13, lawTitle: "Faites appel à l'intérêt personnel", outcome: "bad", explanation: "La corruption est visible. La branche lésée conteste en justice et tes motivations sont exposées. Tu perds la confiance de toute la famille." },
      { text: "Appliquer strictement le testament sans te laisser influencer", law: 38, lawTitle: "Pensez comme vous voulez, comportez-vous comme les autres", outcome: "good", explanation: "En suivant la lettre du testament, tu es irréprochable. Les mécontents ne peuvent pas t'attaquer car tu n'as fait que ton devoir. Ta neutralité préserve tes relations." },
      { text: "Tenter un compromis qui contente tout le monde", law: 43, lawTitle: "Travaillez sur le cœur et l'esprit", outcome: "neutral", explanation: "Le compromis satisfait partiellement chaque camp mais frustre tout le monde. Personne n'est pleinement content et tu es blâmé pour le résultat médiocre." },
      { text: "Renoncer au rôle d'exécuteur pour éviter le conflit", law: 18, lawTitle: "Ne construisez pas de forteresses", outcome: "bad", explanation: "En fuyant la responsabilité, tu déçois la mémoire de ton oncle et tu perds l'influence que cette position te donnait dans la famille." }
    ],
    bestChoiceIndex: 1
  },
  {
    id: "ch24",
    chapter: 24,
    title: "L'Influenceur",
    context: "Tu construis une présence en ligne professionnelle. Tes posts sur LinkedIn attirent de l'attention. Un post controversé sur le leadership toxique devient viral — 500 000 vues.",
    situation: "Des managers te critiquent violemment dans les commentaires. Certains menacent de te faire blacklister de l'industrie. D'autres te félicitent en privé mais n'osent pas te soutenir publiquement.",
    choices: [
      { text: "Supprimer le post pour éviter les problèmes", law: 36, lawTitle: "Dédaignez ce que vous ne pouvez avoir", outcome: "bad", explanation: "Supprimer un post viral montre de la faiblesse. Les screenshots circulent déjà. Tu parais lâche et inconstant. Les supporters comme les critiques te perdent." },
      { text: "Répondre calmement avec des données et maintenir ta position", law: 5, lawTitle: "Protégez votre réputation", outcome: "good", explanation: "En répondant avec des faits, tu transformes la polémique en débat constructif. Les supporters cachés sortent de l'ombre. Tu deviens une voix respectée, pas juste virale." },
      { text: "Publier un deuxième post encore plus provocateur pour capitaliser sur le buzz", law: 6, lawTitle: "Attirez l'attention à tout prix", outcome: "neutral", explanation: "Tu gagnes encore plus de visibilité mais tu te positionnes comme polémiste. Les entreprises hésiteront à t'embaucher ou te recommander." },
      { text: "Ignorer les commentaires et passer à un autre sujet", law: 4, lawTitle: "Dites-en moins que nécessaire", outcome: "neutral", explanation: "Tu évites l'escalade mais manques l'opportunité de consolider ta position. Le silence peut être interprété comme un aveu de faiblesse." }
    ],
    bestChoiceIndex: 1
  },
  {
    id: "ch25",
    chapter: 25,
    title: "La Communauté",
    context: "Tu es devenu leader d'une association professionnelle de 2000 membres. L'association traverse une crise financière et deux factions s'affrontent sur la direction à prendre.",
    situation: "La faction A veut augmenter les cotisations, la faction B veut réduire les services. Les deux te pressent de choisir leur camp.",
    choices: [
      { text: "Choisir la faction A (augmenter les cotisations)", law: 23, lawTitle: "Concentrez vos forces", outcome: "neutral", explanation: "Tu gagnes la faction A mais la faction B menace de partir. L'association risque de perdre 40% de ses membres, aggravant la crise." },
      { text: "Proposer une troisième voie : des partenariats externes pour financer les services", law: 25, lawTitle: "Recréez-vous", outcome: "good", explanation: "En réinventant le modèle économique, tu surprends les deux factions et rassembles tout le monde autour d'une vision nouvelle. Le conflit se transforme en élan collectif." },
      { text: "Organiser un vote démocratique pour trancher", law: 20, lawTitle: "Ne vous engagez envers personne", outcome: "neutral", explanation: "Le vote tranche mais divise. La faction perdante se sent marginalisée. Le leader qui délègue ses décisions au vote perd son autorité." },
      { text: "Laisser les deux factions débattre et attendre que la situation se clarifie", law: 35, lawTitle: "Maîtrisez l'art du timing", outcome: "bad", explanation: "L'inaction pendant une crise est fatale. Les membres perdent confiance en ton leadership. Les deux factions s'accordent sur un seul point : te remplacer." }
    ],
    bestChoiceIndex: 1
  },
  {
    id: "ch26",
    chapter: 26,
    title: "L'Élection",
    context: "Tu te présentes aux élections municipales. Tu es compétent mais peu connu. Ton adversaire est le maire sortant, populaire mais corrompu. Les preuves de corruption existent mais sont fragiles.",
    situation: "Un journaliste te propose de publier les preuves de corruption avant le vote. Les preuves sont réelles mais pourraient être contestées juridiquement.",
    choices: [
      { text: "Publier les preuves immédiatement pour créer le choc", law: 29, lawTitle: "Planifiez jusqu'à la fin", outcome: "bad", explanation: "Les preuves fragiles sont démontées par les avocats du maire. Il se pose en victime d'un complot. Tu perds en crédibilité et le maire gagne en sympathie." },
      { text: "Consolider les preuves d'abord, puis les publier au moment optimal", law: 35, lawTitle: "Maîtrisez l'art du timing", outcome: "good", explanation: "En prenant le temps de bétonner les preuves et en choisissant le moment parfait (48h avant le vote), tu crées un séisme politique que le maire n'a pas le temps de contenir." },
      { text: "Utiliser les preuves comme levier pour forcer le maire à se retirer", law: 33, lawTitle: "Découvrez le point faible", outcome: "neutral", explanation: "Le maire prend peur mais refuse de se retirer. Il double ses efforts de campagne. Tu as montré ta carte sans l'avoir jouée efficacement." },
      { text: "Ignorer les preuves et gagner sur ton programme seul", law: 9, lawTitle: "Gagnez par vos actes", outcome: "neutral", explanation: "Noble mais insuffisant. Face à un adversaire populaire et bien implanté, les idées seules ne suffisent pas. La politique exige aussi de la tactique." }
    ],
    bestChoiceIndex: 1
  },
  {
    id: "ch27",
    chapter: 27,
    title: "Le Lobby",
    context: "Tu es maintenant élu. Un puissant lobby industriel te propose un financement généreux en échange de ton soutien sur un projet de loi favorable à leurs intérêts.",
    situation: "Le lobby contrôle 30% du financement des campagnes dans ta région. Accepter te donne les moyens de tes ambitions. Refuser te coupe de ressources vitales.",
    choices: [
      { text: "Accepter le financement et soutenir leur loi", law: 11, lawTitle: "Rendez les gens dépendants de vous", outcome: "bad", explanation: "C'est toi qui deviens dépendant du lobby, pas l'inverse. Chaque vote que tu donnes renforce leur emprise. Tu perds ton indépendance politique." },
      { text: "Refuser mais proposer un compromis sur un autre sujet", law: 31, lawTitle: "Contrôlez les options", outcome: "good", explanation: "Tu maintiens ton intégrité tout en gardant le dialogue ouvert. Le lobby respecte ta fermeté et revient avec une proposition plus acceptable. Tu as montré que tu n'es pas à vendre mais que tu es ouvert à la négociation." },
      { text: "Accepter le financement mais voter selon ta conscience", law: 3, lawTitle: "Dissimulez vos intentions", outcome: "bad", explanation: "Prendre l'argent et trahir le deal détruit ta réputation de fiabilité. Le lobby te fait la guerre et plus aucun financeur ne te fait confiance." },
      { text: "Dénoncer publiquement la tentative de corruption", law: 37, lawTitle: "Créez des spectacles convaincants", outcome: "neutral", explanation: "Tu gagnes en image publique mais te fais un ennemi puissant et organisé. Le lobby financera ton adversaire aux prochaines élections." }
    ],
    bestChoiceIndex: 1
  },
  {
    id: "ch28",
    chapter: 28,
    title: "La Coalition",
    context: "Pour faire passer une loi importante, tu as besoin de former une coalition avec des partis opposés. Chaque parti a ses conditions et ses lignes rouges.",
    situation: "Trois partis sont nécessaires pour atteindre la majorité. Le parti A veut des concessions fiscales, le parti B veut des mesures environnementales, le parti C veut une réforme éducative. Ta loi peut intégrer deux concessions sur trois.",
    choices: [
      { text: "Satisfaire les partis A et B (fiscalité + environnement)", law: 23, lawTitle: "Concentrez vos forces", outcome: "neutral", explanation: "Tu gagnes A et B mais C fait campagne contre toi. La loi passe de justesse mais la coalition est fragile et temporaire." },
      { text: "Négocier en secret avec chaque parti en promettant des concessions futures", law: 3, lawTitle: "Dissimulez vos intentions", outcome: "bad", explanation: "Les promesses contradictoires sont découvertes. Les trois partis te considèrent comme un manipulateur. Ta crédibilité politique est détruite." },
      { text: "Créer un grand événement public pour rallier les trois partis autour d'une vision commune", law: 37, lawTitle: "Créez des spectacles convaincants", outcome: "good", explanation: "Le spectacle crée un élan populaire que les partis ne peuvent ignorer. Sous la pression publique, chacun accepte un compromis car refuser serait impopulaire." },
      { text: "Abandonner la loi et attendre une meilleure configuration politique", law: 35, lawTitle: "Maîtrisez l'art du timing", outcome: "neutral", explanation: "Tu préserves tes relations mais manques une fenêtre d'opportunité. En politique, les bonnes configurations sont rares." }
    ],
    bestChoiceIndex: 2
  },
  {
    id: "ch29",
    chapter: 29,
    title: "La Crise Médiatique",
    context: "Une vidéo sortie de contexte te montre en train de faire une remarque ambiguë lors d'un dîner privé. Les réseaux sociaux s'enflamment. Les appels à ta démission se multiplient.",
    situation: "Tu as 24 heures avant que la pression médiatique ne devienne ingérable. Comment réagis-tu ?",
    choices: [
      { text: "Publier immédiatement un démenti catégorique", law: 5, lawTitle: "Protégez votre réputation", outcome: "neutral", explanation: "Le démenti rapide limite les dégâts mais paraît défensif. La vidéo continue de circuler et le démenti est perçu comme standard, sans conviction." },
      { text: "Organiser une conférence de presse transparente avec le contexte complet", law: 9, lawTitle: "Gagnez par vos actes", outcome: "good", explanation: "En affrontant la crise de face avec transparence et contexte, tu retournes le narratif. Les médias sérieux reconnaissent la manipulation. Ta résilience devient l'histoire." },
      { text: "Ignorer la polémique et attendre qu'elle passe", law: 36, lawTitle: "Dédaignez ce que vous ne pouvez avoir", outcome: "bad", explanation: "Le silence alimente les spéculations. Ton absence est interprétée comme un aveu de culpabilité. La tempête ne passe pas, elle empire." },
      { text: "Lancer un contre-feu en révélant un scandale d'un adversaire", law: 39, lawTitle: "Agitez les eaux", outcome: "neutral", explanation: "Tu détournes l'attention temporairement mais ta stratégie de diversion est visible. Les observateurs notent que tu attaques au lieu de te défendre." }
    ],
    bestChoiceIndex: 1
  },
  {
    id: "ch30",
    chapter: 30,
    title: "Le Sommet du Destin",
    context: "Après des années dans la politique, l'entreprise et la stratégie, tu es devenu une figure respectée. On te propose de présider une institution internationale. C'est le sommet de ta carrière.",
    situation: "Lors de ton discours d'investiture, tu dois choisir le ton qui définira ton mandat. Le monde entier regarde.",
    choices: [
      { text: "Un discours puissant et ambitieux promettant de tout changer", law: 45, lawTitle: "Ne réformez jamais trop à la fois", outcome: "bad", explanation: "Les promesses grandioses créent des attentes impossibles. Quand les changements tardent, la déception sera proportionnelle à l'ambition affichée." },
      { text: "Un discours humble, montrant que tu connais les défis et que tu t'y attaqueras patiemment", law: 46, lawTitle: "Ne paraissez jamais trop parfait", outcome: "good", explanation: "L'humilité et la lucidité inspirent davantage confiance que l'arrogance. En montrant que tu comprends la complexité, tu gagnes le respect de ceux qui savent que les vrais changements prennent du temps." },
      { text: "Un discours spectaculaire avec des effets visuels et des invités surprise", law: 37, lawTitle: "Créez des spectacles convaincants", outcome: "neutral", explanation: "Le spectacle impressionne mais manque de substance. Les analystes le notent et tes pairs te trouvent superficiel. Le fond doit primer sur la forme à ce niveau." },
      { text: "Un discours court et énigmatique pour cultiver le mystère", law: 4, lawTitle: "Dites-en moins que nécessaire", outcome: "neutral", explanation: "Le mystère fonctionne dans la cour, moins dans la politique internationale. Les partenaires attendent de la clarté et de la vision, pas des énigmes." }
    ],
    bestChoiceIndex: 1
  }
];

const CH_IDS = {
  cour_royale: ["ch1","ch2","ch3","ch4","ch5","ch6","ch7","ch8","ch9","ch10"],
  entreprise: ["ch11","ch12","ch13","ch14","ch15"],
  cour_royale_2: ["ch16","ch17","ch18","ch19","ch20"],
  social: ["ch21","ch22","ch23","ch24","ch25"],
  politique: ["ch26","ch27","ch28","ch29","ch30"],
};

export const scenarios = [
  {
    id: "cour_royale",
    title: "L'Ascension à la Cour",
    subtitle: "De simple conseiller à maître stratège",
    description: "Tu arrives à la cour du roi comme nouveau conseiller. Navigue les intrigues, les trahisons et les alliances pour gravir les échelons du pouvoir royal.",
    chapterCount: 10,
    color: "#D4AF37",
    iconName: "Crown",
    difficulty: 2,
    tags: ["intrigue", "royauté", "trahison"],
    events: storyEvents.filter(e => CH_IDS.cour_royale.includes(e.id)),
  },
  {
    id: "entreprise",
    title: "La Conquête Corporate",
    subtitle: "D'employé à directeur",
    description: "Tu intègres une grande entreprise du CAC 40. L'open space est un champ de bataille silencieux. Managers toxiques, saboteurs et promotions piégées t'attendent.",
    chapterCount: 5,
    color: "#4A90D9",
    iconName: "Briefcase",
    difficulty: 3,
    tags: ["management", "carrière", "corporate"],
    events: storyEvents.filter(e => CH_IDS.entreprise.includes(e.id)),
  },
  {
    id: "cour_royale_2",
    title: "Le Nouveau Règne",
    subtitle: "Survivre au changement de pouvoir",
    description: "Le vieux roi est mort. Un nouveau souverain prend le trône avec ses propres favoris. Adapte-toi ou péris dans cette nouvelle cour pleine de dangers.",
    chapterCount: 5,
    color: "#7A0016",
    iconName: "Shield",
    difficulty: 3,
    tags: ["transition", "diplomatie", "guerre"],
    events: storyEvents.filter(e => CH_IDS.cour_royale_2.includes(e.id)),
  },
  {
    id: "social",
    title: "Dynamiques Sociales",
    subtitle: "Maîtriser les relations humaines",
    description: "Galas, scandales, héritages et réseaux sociaux. Chaque interaction est un jeu de pouvoir. Apprends à naviguer les dynamiques sociales du monde moderne.",
    chapterCount: 5,
    color: "#1C4E34",
    iconName: "Users",
    difficulty: 2,
    tags: ["réseau", "scandale", "influence"],
    events: storyEvents.filter(e => CH_IDS.social.includes(e.id)),
  },
  {
    id: "politique",
    title: "L'Arène Politique",
    subtitle: "Du candidat au sommet du pouvoir",
    description: "Élections, lobbys, coalitions et crises médiatiques. La politique est le théâtre ultime du pouvoir. Chaque décision façonne l'avenir d'une nation.",
    chapterCount: 5,
    color: "#6B4E9B",
    iconName: "Globe",
    difficulty: 4,
    tags: ["élection", "lobby", "diplomatie"],
    events: storyEvents.filter(e => CH_IDS.politique.includes(e.id)),
  },
];

export function getScenarioById(id) {
  return scenarios.find(s => s.id === id) || null;
}
