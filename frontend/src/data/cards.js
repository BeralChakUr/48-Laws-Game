export const cards = [
  {
    id: "law_001_sit_assistant",
    type: "situation",
    question: "Un conseiller brillant propose publiquement une stratégie plus intelligente que celle de son supérieur. Le supérieur le congédie peu après.",
    choices: [
      "Loi 1 : Ne surpassez jamais le maître",
      "Loi 4 : Dites-en toujours moins que nécessaire",
      "Loi 24 : Jouez le parfait courtisan",
      "Loi 46 : Ne paraissez jamais trop parfait"
    ],
    correctAnswer: 0,
    lawNumber: 1,
    lawTitle: "Ne surpassez jamais le maître",
    correctExplanation: "En éclipsant publiquement son supérieur, le conseiller a violé la première loi. Celui qui détient le pouvoir ne tolère pas d'être humilié, même par la compétence.",
    wrongExplanations: {
      "1": "La loi 4 concerne la discrétion dans les paroles, pas la compétition directe avec un supérieur.",
      "2": "La loi 24 parle de l'art de la cour et de la flatterie, pas de l'erreur de surpasser son maître.",
      "3": "La loi 46 concerne l'apparence de perfection en général, mais ici le problème est spécifiquement de faire de l'ombre au maître."
    },
    difficulty: 1,
    tags: ["hiérarchie", "pouvoir", "prudence"]
  },
  {
    id: "law_002_hist_cesar",
    type: "historical_event",
    question: "Jules César est assassiné par Brutus, son protégé et ami proche, qui participe au complot contre lui.",
    choices: [
      "Loi 15 : Écrasez totalement l'ennemi",
      "Loi 2 : Ne vous fiez pas à vos amis, utilisez vos ennemis",
      "Loi 19 : Sachez à qui vous avez affaire",
      "Loi 17 : Cultivez un air d'imprévisibilité"
    ],
    correctAnswer: 1,
    lawNumber: 2,
    lawTitle: "Ne vous fiez pas à vos amis, utilisez vos ennemis",
    correctExplanation: "César a fait confiance à Brutus justement parce qu'il était son ami. Mais les amis sont souvent ceux qui trahissent, car ils envient en secret. Un ancien ennemi, lui, aurait eu davantage à prouver.",
    wrongExplanations: {
      "0": "La loi 15 parle de destruction totale d'un adversaire déjà identifié. Ici, le problème est l'incapacité à identifier la menace venant d'un proche.",
      "2": "La loi 19 concerne l'évaluation des gens avant d'agir. Bien que pertinente, le cœur du sujet est la confiance mal placée dans un ami.",
      "3": "La loi 17 parle de garder les autres dans l'incertitude. Ici, c'est César qui a été surpris, pas l'inverse."
    },
    difficulty: 1,
    tags: ["trahison", "amitié", "histoire"]
  },
  {
    id: "law_003_event_trojan",
    type: "historical_event",
    question: "Un stratège utilise un faux cadeau pour infiltrer une ville ennemie. La cible, trompée par l'apparence généreuse du geste, ouvre ses portes.",
    choices: [
      "Loi 1 : Ne surpassez jamais le maître",
      "Loi 3 : Dissimulez vos intentions",
      "Loi 6 : Attirez l'attention à tout prix",
      "Loi 15 : Écrasez totalement l'ennemi"
    ],
    correctAnswer: 1,
    lawNumber: 3,
    lawTitle: "Dissimulez vos intentions",
    correctExplanation: "Cette action repose sur la tromperie. Le vrai objectif est masqué jusqu'au moment où il est trop tard pour réagir. C'est l'essence de la loi 3.",
    wrongExplanations: {
      "0": "La loi 1 concerne la relation avec une figure dominante. Ici, le sujet est la dissimulation stratégique.",
      "2": "La loi 6 concerne la visibilité et l'attention publique. Ici, la réussite dépend justement de la discrétion.",
      "3": "La loi 15 parle de destruction totale d'un adversaire. Ici, le mécanisme central n'est pas l'écrasement, mais le camouflage."
    },
    difficulty: 2,
    tags: ["tromperie", "stratégie", "histoire"]
  },
  {
    id: "law_004_cit_silence",
    type: "citation",
    question: "« Plus vous en dites, plus vous paraissez ordinaire et moins vous semblez maîtriser la situation. »",
    choices: [
      "Loi 4 : Dites-en toujours moins que nécessaire",
      "Loi 9 : Gagnez par vos actes, pas par la discussion",
      "Loi 21 : Jouez les idiots pour attraper les idiots",
      "Loi 38 : Pensez comme vous voulez, comportez-vous comme les autres"
    ],
    correctAnswer: 0,
    lawNumber: 4,
    lawTitle: "Dites-en toujours moins que nécessaire",
    correctExplanation: "Le silence et la brièveté créent une aura de mystère et de puissance. Ceux qui parlent peu semblent maîtriser davantage la situation.",
    wrongExplanations: {
      "1": "La loi 9 oppose les actes aux arguments. Ici, il s'agit spécifiquement de la quantité de paroles, pas d'action contre discussion.",
      "2": "La loi 21 parle de feindre l'ignorance pour piéger les autres. La citation ne parle pas de ruse mais de retenue verbale.",
      "3": "La loi 38 concerne le conformisme apparent. Ici, il s'agit de parler moins, pas de se conformer."
    },
    difficulty: 1,
    tags: ["silence", "communication", "mystère"]
  },
  {
    id: "law_005_sit_rumeur",
    type: "situation",
    question: "Un dirigeant découvre qu'un concurrent répand des rumeurs sur son intégrité. Il décide de répondre immédiatement et publiquement pour protéger son image.",
    choices: [
      "Loi 36 : Dédaignez ce que vous ne pouvez avoir",
      "Loi 5 : Protégez votre réputation à tout prix",
      "Loi 9 : Gagnez par vos actes, pas par la discussion",
      "Loi 39 : Agitez les eaux pour faire sortir les poissons"
    ],
    correctAnswer: 1,
    lawNumber: 5,
    lawTitle: "Protégez votre réputation à tout prix",
    correctExplanation: "La réputation est la pierre angulaire du pouvoir. Quand elle est attaquée, il faut réagir avec force et rapidité. Laisser une rumeur se propager est une erreur stratégique majeure.",
    wrongExplanations: {
      "0": "La loi 36 conseille de mépriser ce qui est hors de portée. Ici, la réputation est directement menacée et mérite une défense active.",
      "2": "La loi 9 valorise les actes sur les mots, mais dans ce cas, une réponse publique rapide est nécessaire pour contrer la désinformation.",
      "3": "La loi 39 parle de provoquer l'adversaire pour le démasquer. Ici, l'objectif est défensif : protéger son image."
    },
    difficulty: 2,
    tags: ["réputation", "défense", "image"]
  },
  {
    id: "law_006_pers_dali",
    type: "personnage",
    question: "Salvador Dalí cultivait une image excentrique, portant des moustaches extravagantes et faisant des apparitions publiques théâtrales pour rester au centre de l'attention.",
    choices: [
      "Loi 6 : Attirez l'attention à tout prix",
      "Loi 25 : Recréez-vous",
      "Loi 37 : Créez des spectacles convaincants",
      "Loi 34 : Soyez royal dans votre façon d'être"
    ],
    correctAnswer: 0,
    lawNumber: 6,
    lawTitle: "Attirez l'attention à tout prix",
    correctExplanation: "Dalí comprenait que dans le monde de l'art, l'invisibilité est la mort. Il utilisait chaque apparition pour attirer les regards, même au prix de la controverse.",
    wrongExplanations: {
      "1": "La loi 25 parle de réinventer son identité. Dalí a maintenu la même persona excentrique tout au long de sa carrière.",
      "2": "La loi 37 concerne la création de spectacles visuels pour convaincre. Ici, l'objectif principal est l'attention, pas la persuasion.",
      "3": "La loi 34 concerne la dignité et la prestance royale. L'excentricité de Dalí est l'opposé de la gravité royale."
    },
    difficulty: 1,
    tags: ["attention", "art", "personnalité"]
  },
  {
    id: "law_007_sit_merite",
    type: "situation",
    question: "Un manager présente le travail de son équipe comme le sien lors d'une réunion avec la direction, récoltant les éloges et une promotion.",
    choices: [
      "Loi 7 : Laissez les autres travailler pour vous",
      "Loi 26 : Gardez les mains propres",
      "Loi 11 : Rendez les gens dépendants de vous",
      "Loi 30 : Faites paraître vos accomplissements sans effort"
    ],
    correctAnswer: 0,
    lawNumber: 7,
    lawTitle: "Laissez les autres travailler pour vous, mais gardez le mérite",
    correctExplanation: "C'est l'application directe de cette loi : utiliser le talent des autres pour avancer, tout en s'appropriant les résultats. L'histoire est pleine de leaders qui ont prospéré ainsi.",
    wrongExplanations: {
      "1": "La loi 26 concerne l'utilisation d'intermédiaires pour le sale travail. Ici, il s'agit d'appropriation du mérite, pas de dissimulation de fautes.",
      "2": "La loi 11 parle de créer de la dépendance. Le manager ici ne rend pas la direction dépendante, il prend le crédit.",
      "3": "La loi 30 parle de paraître naturellement doué. Ici, le manager ne feint pas l'aisance mais s'attribue directement le travail."
    },
    difficulty: 1,
    tags: ["mérite", "manipulation", "travail"]
  },
  {
    id: "law_008_sit_appat",
    type: "situation",
    question: "Un négociateur refuse de se déplacer chez son adversaire et insiste pour que toute rencontre se fasse sur son propre territoire, donnant l'impression d'être en position de force.",
    choices: [
      "Loi 8 : Obligez les autres à venir à vous",
      "Loi 35 : Maîtrisez l'art du timing",
      "Loi 20 : Ne vous engagez envers personne",
      "Loi 39 : Agitez les eaux pour faire sortir les poissons"
    ],
    correctAnswer: 0,
    lawNumber: 8,
    lawTitle: "Obligez les autres à venir à vous",
    correctExplanation: "En forçant l'autre à se déplacer, vous contrôlez l'environnement et la dynamique de pouvoir. Celui qui vient à vous est déjà dans une posture de demandeur.",
    wrongExplanations: {
      "1": "La loi 35 concerne le choix du bon moment pour agir. Ici, il s'agit du lieu, pas du timing.",
      "2": "La loi 20 parle de ne pas s'engager. Le négociateur ne refuse pas l'engagement, il impose ses conditions.",
      "3": "La loi 39 parle de provoquer pour forcer une réaction. Ici, c'est une question de contrôle territorial."
    },
    difficulty: 2,
    tags: ["négociation", "territoire", "contrôle"]
  },
  {
    id: "law_009_cit_actes",
    type: "citation",
    question: "« Les mots sont impuissants face aux actes accomplis. Montrez, ne dites pas. »",
    choices: [
      "Loi 4 : Dites-en toujours moins que nécessaire",
      "Loi 30 : Faites paraître vos accomplissements sans effort",
      "Loi 9 : Gagnez par vos actes, pas par la discussion",
      "Loi 28 : Faites preuve d'audace"
    ],
    correctAnswer: 2,
    lawNumber: 9,
    lawTitle: "Gagnez par vos actes, pas par la discussion",
    correctExplanation: "Les démonstrations concrètes sont toujours plus puissantes que les arguments verbaux. L'action convaincante rend le débat inutile.",
    wrongExplanations: {
      "0": "La loi 4 conseille la brièveté, mais elle n'oppose pas directement les mots aux actes.",
      "1": "La loi 30 parle de paraître sans effort. La citation insiste sur la primauté de l'action, pas sur l'apparence de facilité.",
      "3": "La loi 28 encourage l'audace, mais la citation parle de la valeur de l'action par rapport aux mots."
    },
    difficulty: 1,
    tags: ["action", "démonstration", "persuasion"]
  },
  {
    id: "law_010_sit_malchance",
    type: "situation",
    question: "Un investisseur s'associe avec un partenaire qui enchaîne les échecs. Malgré sa propre compétence, ses projets communs échouent systématiquement.",
    choices: [
      "Loi 10 : Évitez les malchanceux et les malheureux",
      "Loi 2 : Ne vous fiez pas à vos amis",
      "Loi 18 : Ne construisez pas de forteresses",
      "Loi 33 : Découvrez le point faible de chacun"
    ],
    correctAnswer: 0,
    lawNumber: 10,
    lawTitle: "Évitez les malchanceux et les malheureux",
    correctExplanation: "La malchance est contagieuse. S'associer avec des personnes qui portent un schéma d'échec entraîne inévitablement vers le bas. Il faut s'entourer de réussite.",
    wrongExplanations: {
      "1": "La loi 2 concerne la confiance trahie par les amis. Le partenaire ici n'est pas traître, il est simplement malchanceux.",
      "2": "La loi 18 parle de l'isolement excessif. L'investisseur n'est pas isolé, il est mal associé.",
      "3": "La loi 33 concerne l'identification des faiblesses pour les exploiter. Ici, il faut simplement éviter la personne."
    },
    difficulty: 2,
    tags: ["association", "malchance", "prudence"]
  },
  {
    id: "law_011_sit_dependance",
    type: "situation",
    question: "Un architecte logiciel conçoit un système si complexe que lui seul peut le maintenir, assurant ainsi sa position indispensable dans l'entreprise.",
    choices: [
      "Loi 11 : Rendez les gens dépendants de vous",
      "Loi 7 : Laissez les autres travailler pour vous",
      "Loi 23 : Concentrez vos forces",
      "Loi 30 : Faites paraître vos accomplissements sans effort"
    ],
    correctAnswer: 0,
    lawNumber: 11,
    lawTitle: "Rendez les gens dépendants de vous",
    correctExplanation: "En se rendant indispensable, on acquiert un pouvoir que la hiérarchie ne peut pas facilement éliminer. La dépendance est une forme de contrôle subtile mais puissante.",
    wrongExplanations: {
      "1": "La loi 7 parle de déléguer le travail. Ici, l'architecte fait l'inverse : il concentre la connaissance sur lui-même.",
      "2": "La loi 23 parle de concentration des forces. Le sujet ici est la création délibérée de dépendance, pas la concentration de ressources.",
      "3": "La loi 30 concerne l'apparence de facilité. Ici, la complexité est délibérée pour créer de la dépendance."
    },
    difficulty: 2,
    tags: ["dépendance", "indispensabilité", "stratégie"]
  },
  {
    id: "law_012_sit_generosite",
    type: "situation",
    question: "Un homme d'affaires offre un cadeau somptueux à un rival, qui baisse sa garde et accepte un accord désavantageux par sentiment de dette.",
    choices: [
      "Loi 40 : Méprisez ce qui est gratuit",
      "Loi 12 : Utilisez l'honnêteté et la générosité sélective",
      "Loi 14 : Posez-vous en ami, agissez en espion",
      "Loi 3 : Dissimulez vos intentions"
    ],
    correctAnswer: 1,
    lawNumber: 12,
    lawTitle: "Utilisez l'honnêteté et la générosité sélective pour désarmer",
    correctExplanation: "Un geste de générosité inattendu désarme la méfiance. La victime, touchée, ouvre sa garde. C'est un outil de manipulation classique.",
    wrongExplanations: {
      "0": "La loi 40 concerne la valeur de ce qui est payé. Ici, le cadeau est un outil stratégique de manipulation, pas une réflexion sur la gratuité.",
      "2": "La loi 14 parle d'espionnage sous couvert d'amitié. L'homme d'affaires ici ne cherche pas des informations mais à le désarmer.",
      "3": "La loi 3 parle de cacher ses intentions. Bien que liée, la technique spécifique est la générosité désarmante, pas la dissimulation."
    },
    difficulty: 2,
    tags: ["générosité", "manipulation", "stratégie"]
  },
  {
    id: "law_013_sit_interet",
    type: "situation",
    question: "Un diplomate tente de convaincre un roi de l'aider en invoquant la justice et la morale. Le roi refuse. Un autre diplomate présente les avantages économiques de l'alliance, et le roi accepte.",
    choices: [
      "Loi 43 : Travaillez sur le cœur et l'esprit des gens",
      "Loi 13 : Faites appel à l'intérêt personnel",
      "Loi 9 : Gagnez par vos actes, pas par la discussion",
      "Loi 31 : Contrôlez les options"
    ],
    correctAnswer: 1,
    lawNumber: 13,
    lawTitle: "Faites appel à l'intérêt personnel, jamais à la pitié",
    correctExplanation: "Les gens agissent par intérêt, pas par compassion. Montrer ce qu'ils ont à gagner est toujours plus efficace que supplier ou invoquer la morale.",
    wrongExplanations: {
      "0": "La loi 43 concerne la persuasion émotionnelle. Ici, c'est l'intérêt rationnel et matériel qui fonctionne, pas l'émotion.",
      "2": "La loi 9 oppose l'action aux mots. Les deux diplomates utilisent des mots, mais l'un cadre mieux son argument.",
      "3": "La loi 31 parle de limiter les choix. Le second diplomate ne contrôle pas les options, il présente un meilleur argument."
    },
    difficulty: 2,
    tags: ["diplomatie", "intérêt", "négociation"]
  },
  {
    id: "law_014_sit_espion",
    type: "situation",
    question: "Lors d'un dîner mondain, un homme d'affaires pose des questions innocentes à un concurrent qui, détendu, révèle des informations sur ses futurs projets.",
    choices: [
      "Loi 14 : Posez-vous en ami, agissez en espion",
      "Loi 33 : Découvrez le point faible de chacun",
      "Loi 3 : Dissimulez vos intentions",
      "Loi 21 : Jouez les idiots pour attraper les idiots"
    ],
    correctAnswer: 0,
    lawNumber: 14,
    lawTitle: "Posez-vous en ami, agissez en espion",
    correctExplanation: "Sous le masque de la convivialité, chaque interaction est une opportunité de récolter des informations précieuses. Le cadre détendu rend les gens moins vigilants.",
    wrongExplanations: {
      "1": "La loi 33 concerne la recherche de vulnérabilités. Ici, il s'agit de recueillir des informations générales, pas de trouver une faiblesse spécifique.",
      "2": "La loi 3 parle de cacher ses buts. Bien que l'espion cache ses intentions, la technique spécifique est l'amitié simulée pour espionner.",
      "3": "La loi 21 parle de feindre la stupidité. L'homme d'affaires ne joue pas l'idiot, il joue l'ami bienveillant."
    },
    difficulty: 1,
    tags: ["espionnage", "information", "social"]
  },
  {
    id: "law_015_hist_carthage",
    type: "historical_event",
    question: "Après avoir vaincu Carthage, Rome détruit complètement la ville, sale la terre et déporte la population, éliminant toute possibilité de revanche future.",
    choices: [
      "Loi 15 : Écrasez totalement l'ennemi",
      "Loi 8 : Obligez les autres à venir à vous",
      "Loi 42 : Frappez le berger et les moutons se disperseront",
      "Loi 29 : Planifiez jusqu'à la fin"
    ],
    correctAnswer: 0,
    lawNumber: 15,
    lawTitle: "Écrasez totalement l'ennemi",
    correctExplanation: "Rome a compris qu'un ennemi blessé mais vivant reviendra toujours se venger. La destruction complète de Carthage a éliminé cette menace pour toujours.",
    wrongExplanations: {
      "1": "La loi 8 concerne le fait de forcer l'adversaire à venir à vous. Rome est allée à Carthage pour la détruire.",
      "2": "La loi 42 parle de frapper le leader pour disperser les suiveurs. Ici, c'est la destruction totale de l'ensemble, pas du seul leader.",
      "3": "La loi 29 parle de planification. La destruction de Carthage illustre la finalité, pas la planification en soi."
    },
    difficulty: 1,
    tags: ["guerre", "destruction", "histoire"]
  },
  {
    id: "law_016_sit_absence",
    type: "situation",
    question: "Un artiste célèbre se retire pendant deux ans de la scène publique. À son retour, l'intérêt pour son travail a doublé et ses œuvres se vendent à prix record.",
    choices: [
      "Loi 16 : Utilisez l'absence pour augmenter le respect",
      "Loi 36 : Dédaignez ce que vous ne pouvez avoir",
      "Loi 47 : Ne dépassez pas la cible",
      "Loi 25 : Recréez-vous"
    ],
    correctAnswer: 0,
    lawNumber: 16,
    lawTitle: "Utilisez l'absence pour augmenter le respect et l'honneur",
    correctExplanation: "La rareté crée la valeur. En se retirant stratégiquement, on augmente le désir et le respect. Trop de présence dilue l'impact.",
    wrongExplanations: {
      "1": "La loi 36 parle de mépriser l'inaccessible. L'artiste ne méprise rien, il crée de la rareté délibérément.",
      "2": "La loi 47 parle de s'arrêter après la victoire. L'artiste ne s'arrête pas après un succès, il se retire stratégiquement.",
      "3": "La loi 25 concerne la réinvention de soi. L'artiste n'a pas changé, il a simplement utilisé l'absence."
    },
    difficulty: 2,
    tags: ["absence", "rareté", "valeur"]
  },
  {
    id: "law_017_pers_nixon",
    type: "personnage",
    question: "Un leader politique change constamment de position, rendant ses adversaires incapables de prédire ses prochains mouvements, les maintenant dans un état d'anxiété permanent.",
    choices: [
      "Loi 17 : Cultivez un air d'imprévisibilité",
      "Loi 3 : Dissimulez vos intentions",
      "Loi 48 : Soyez sans forme",
      "Loi 39 : Agitez les eaux"
    ],
    correctAnswer: 0,
    lawNumber: 17,
    lawTitle: "Cultivez un air d'imprévisibilité",
    correctExplanation: "L'imprévisibilité déséquilibre les adversaires. Quand on ne peut prédire vos actions, on ne peut pas se préparer à les contrer.",
    wrongExplanations: {
      "1": "La loi 3 concerne la dissimulation d'un objectif précis. Ici, c'est l'instabilité délibérée qui est l'arme, pas la dissimulation d'un but.",
      "2": "La loi 48 parle d'adaptabilité fluide. L'imprévisibilité est offensive, tandis que l'absence de forme est défensive.",
      "3": "La loi 39 parle de provoquer une réaction. Ici, l'objectif est de créer de l'incertitude, pas de provoquer."
    },
    difficulty: 2,
    tags: ["imprévisibilité", "politique", "stratégie"]
  },
  {
    id: "law_018_sit_forteresse",
    type: "situation",
    question: "Un PDG s'enferme dans son bureau, refuse les réunions informelles et s'isole de plus en plus. Il perd le contact avec la réalité de son entreprise et finit par être évincé.",
    choices: [
      "Loi 18 : Ne construisez pas de forteresses",
      "Loi 20 : Ne vous engagez envers personne",
      "Loi 23 : Concentrez vos forces",
      "Loi 16 : Utilisez l'absence"
    ],
    correctAnswer: 0,
    lawNumber: 18,
    lawTitle: "Ne construisez pas de forteresses pour vous protéger",
    correctExplanation: "L'isolement coupe de l'information et des alliances. Une forteresse protège mais empêche aussi de voir les menaces venir. La circulation sociale est vitale.",
    wrongExplanations: {
      "1": "La loi 20 parle de non-engagement politique. Le PDG ne refuse pas l'engagement, il s'isole physiquement.",
      "2": "La loi 23 parle de concentrer ses ressources. L'isolation n'est pas une concentration de forces mais un repli dangereux.",
      "3": "La loi 16 utilise l'absence de façon stratégique et temporaire. Ici, l'isolement est chronique et autodestructeur."
    },
    difficulty: 2,
    tags: ["isolement", "leadership", "erreur"]
  },
  {
    id: "law_019_sit_offense",
    type: "situation",
    question: "Un jeune ambitieux insulte publiquement un homme qu'il croyait sans importance. Cet homme se révèle être un investisseur influent qui bloque sa carrière pendant des années.",
    choices: [
      "Loi 19 : Sachez à qui vous avez affaire",
      "Loi 5 : Protégez votre réputation à tout prix",
      "Loi 1 : Ne surpassez jamais le maître",
      "Loi 46 : Ne paraissez jamais trop parfait"
    ],
    correctAnswer: 0,
    lawNumber: 19,
    lawTitle: "Sachez à qui vous avez affaire",
    correctExplanation: "Ne jamais offenser quelqu'un sans connaître son pouvoir réel. Les apparences sont trompeuses, et offenser la mauvaise personne peut avoir des conséquences dévastatrices.",
    wrongExplanations: {
      "1": "La loi 5 concerne la protection de sa propre réputation. Ici, le problème est l'ignorance du pouvoir de l'autre.",
      "2": "La loi 1 concerne la relation avec un supérieur reconnu. Ici, le pouvoir de la personne n'était pas visible.",
      "3": "La loi 46 parle de ne pas paraître parfait. Ici, il s'agit d'avoir mal évalué son interlocuteur."
    },
    difficulty: 1,
    tags: ["prudence", "évaluation", "pouvoir"]
  },
  {
    id: "law_020_sit_neutralite",
    type: "situation",
    question: "Un conseiller politique refuse de prendre parti entre deux factions rivales, préservant ainsi sa valeur auprès des deux camps et sa liberté d'action.",
    choices: [
      "Loi 20 : Ne vous engagez envers personne",
      "Loi 24 : Jouez le parfait courtisan",
      "Loi 22 : Utilisez la tactique de la capitulation",
      "Loi 38 : Pensez comme vous voulez, comportez-vous comme les autres"
    ],
    correctAnswer: 0,
    lawNumber: 20,
    lawTitle: "Ne vous engagez envers personne",
    correctExplanation: "En restant indépendant, on conserve sa liberté et sa valeur stratégique. S'engager avec une faction réduit ses options et crée des ennemis.",
    wrongExplanations: {
      "1": "La loi 24 concerne l'art de la cour et la flatterie. Le conseiller ne flatte pas, il maintient sa neutralité.",
      "2": "La loi 22 parle de se rendre pour mieux préparer sa revanche. Il n'y a pas de capitulation ici, mais une neutralité stratégique.",
      "3": "La loi 38 concerne le conformisme apparent. Le conseiller ne se conforme pas, il refuse de choisir."
    },
    difficulty: 2,
    tags: ["neutralité", "liberté", "politique"]
  },
  {
    id: "law_021_sit_idiot",
    type: "situation",
    question: "Un marchand feint de ne rien comprendre aux prix du marché. Son concurrent, le prenant pour un naïf, révèle sa stratégie de prix. Le marchand ajuste alors la sienne.",
    choices: [
      "Loi 21 : Jouez les idiots pour attraper les idiots",
      "Loi 14 : Posez-vous en ami, agissez en espion",
      "Loi 33 : Découvrez le point faible de chacun",
      "Loi 3 : Dissimulez vos intentions"
    ],
    correctAnswer: 0,
    lawNumber: 21,
    lawTitle: "Jouez les idiots pour attraper les idiots",
    correctExplanation: "Paraître moins intelligent que son adversaire l'amène à baisser sa garde. L'arrogance de l'autre devient votre avantage.",
    wrongExplanations: {
      "1": "La loi 14 utilise l'amitié simulée. Ici, le marchand utilise la stupidité simulée, pas l'amitié.",
      "2": "La loi 33 cherche une faiblesse spécifique. Le marchand ne cherche pas une faiblesse, il obtient des informations en feignant l'ignorance.",
      "3": "La loi 3 cache un objectif précis. Ici, la technique spécifique est la feinte de bêtise."
    },
    difficulty: 2,
    tags: ["ruse", "feinte", "commerce"]
  },
  {
    id: "law_022_sit_capitulation",
    type: "situation",
    question: "Face à un adversaire beaucoup plus puissant, un petit seigneur se rend sans combattre, offrant son allégeance. Il survit et, des années plus tard, reconstruit sa force.",
    choices: [
      "Loi 15 : Écrasez totalement l'ennemi",
      "Loi 22 : Utilisez la tactique de la capitulation",
      "Loi 48 : Soyez sans forme",
      "Loi 35 : Maîtrisez l'art du timing"
    ],
    correctAnswer: 1,
    lawNumber: 22,
    lawTitle: "Utilisez la tactique de la capitulation",
    correctExplanation: "La capitulation stratégique préserve vos forces quand le rapport est défavorable. Ce n'est pas de la faiblesse mais de la patience. Le temps vous permettra de préparer votre revanche.",
    wrongExplanations: {
      "0": "La loi 15 parle d'écraser l'ennemi. Ici, le seigneur est en position de faiblesse et choisit la survie.",
      "2": "La loi 48 parle d'adaptabilité fluide. La capitulation est une tactique spécifique, pas un état d'esprit fluide.",
      "3": "La loi 35 concerne le timing. Bien que la patience soit impliquée, la technique clé est la capitulation stratégique."
    },
    difficulty: 2,
    tags: ["capitulation", "patience", "survie"]
  },
  {
    id: "law_023_sit_concentration",
    type: "situation",
    question: "Un entrepreneur disperse ses investissements dans dix projets différents. Tous échouent. Son concurrent, lui, mise tout sur un seul produit et réussit brillamment.",
    choices: [
      "Loi 23 : Concentrez vos forces",
      "Loi 29 : Planifiez jusqu'à la fin",
      "Loi 28 : Faites preuve d'audace",
      "Loi 47 : Ne dépassez pas la cible"
    ],
    correctAnswer: 0,
    lawNumber: 23,
    lawTitle: "Concentrez vos forces",
    correctExplanation: "L'énergie dispersée est de l'énergie perdue. La concentration de toutes ses ressources sur un point stratégique unique multiplie les chances de succès.",
    wrongExplanations: {
      "1": "La loi 29 concerne la planification à long terme. L'entrepreneur qui a échoué a peut-être planifié, mais sans concentrer ses forces.",
      "2": "La loi 28 parle d'audace. Le concurrent qui mise tout est audacieux, mais la leçon est la concentration, pas l'audace.",
      "3": "La loi 47 parle de s'arrêter au bon moment. Le problème ici est la dispersion, pas l'excès de succès."
    },
    difficulty: 1,
    tags: ["concentration", "stratégie", "ressources"]
  },
  {
    id: "law_025_pers_madonna",
    type: "personnage",
    question: "Madonna réinvente constamment son image, passant de la pop provoquante au style mystique oriental puis au glamour classique, restant toujours pertinente sur plusieurs décennies.",
    choices: [
      "Loi 6 : Attirez l'attention à tout prix",
      "Loi 48 : Soyez sans forme",
      "Loi 25 : Recréez-vous",
      "Loi 17 : Cultivez un air d'imprévisibilité"
    ],
    correctAnswer: 2,
    lawNumber: 25,
    lawTitle: "Recréez-vous",
    correctExplanation: "En refusant d'être enfermée dans une seule identité, Madonna a gardé le contrôle de son image. Se réinventer, c'est refuser de mourir symboliquement.",
    wrongExplanations: {
      "0": "La loi 6 parle d'attirer l'attention. Madonna attire l'attention, mais la méthode clé est la réinvention permanente.",
      "1": "La loi 48 parle d'absence de forme dans la stratégie. Ici, il s'agit de recréation délibérée de l'identité.",
      "3": "La loi 17 parle d'imprévisibilité. La réinvention de Madonna est plus profonde : c'est un changement d'identité, pas juste d'imprévisibilité tactique."
    },
    difficulty: 1,
    tags: ["identité", "réinvention", "culture"]
  },
  {
    id: "law_026_sit_mains",
    type: "situation",
    question: "Un homme politique fait tomber un rival en laissant des alliés exécuter les attaques. Il apparaît publiquement comme au-dessus de la mêlée.",
    choices: [
      "Loi 26 : Gardez les mains propres",
      "Loi 7 : Laissez les autres travailler pour vous",
      "Loi 42 : Frappez le berger",
      "Loi 14 : Posez-vous en ami, agissez en espion"
    ],
    correctAnswer: 0,
    lawNumber: 26,
    lawTitle: "Gardez les mains propres",
    correctExplanation: "Utiliser des intermédiaires pour le travail sale permet de maintenir une façade irréprochable. Le pouvoir se préserve en restant au-dessus du scandale.",
    wrongExplanations: {
      "1": "La loi 7 concerne l'appropriation du mérite. Ici, il s'agit de délocaliser la responsabilité des actions négatives.",
      "2": "La loi 42 parle de cibler le leader d'un groupe. Le sujet ici est la méthode indirecte, pas la cible.",
      "3": "La loi 14 concerne l'espionnage sous couvert d'amitié. Ici, les alliés exécutent des attaques, pas de l'espionnage."
    },
    difficulty: 2,
    tags: ["manipulation", "politique", "intermédiaires"]
  },
  {
    id: "law_027_sit_croyance",
    type: "situation",
    question: "Un leader charismatique promet un avenir radieux à une communauté désabusée. Sans preuves concrètes, les gens le suivent aveuglément par besoin de croire.",
    choices: [
      "Loi 27 : Exploitez le besoin des gens de croire",
      "Loi 43 : Travaillez sur le cœur et l'esprit des gens",
      "Loi 37 : Créez des spectacles convaincants",
      "Loi 32 : Jouez sur les fantasmes des gens"
    ],
    correctAnswer: 0,
    lawNumber: 27,
    lawTitle: "Exploitez le besoin des gens de croire",
    correctExplanation: "Les humains ont un besoin profond de croire en quelque chose. Offrir une cause, un espoir ou une vision comble ce vide et crée des suiveurs dévoués.",
    wrongExplanations: {
      "1": "La loi 43 parle de persuasion émotionnelle individualisée. Ici, c'est un mouvement collectif basé sur le besoin de croire.",
      "2": "La loi 37 utilise des spectacles visuels. Le leader ici utilise des promesses verbales, pas des mises en scène.",
      "3": "La loi 32 joue sur les fantasmes. Bien que liée, la dynamique clé est le besoin fondamental de croyance, pas le fantasme."
    },
    difficulty: 2,
    tags: ["croyance", "charisme", "foule"]
  },
  {
    id: "law_028_sit_audace",
    type: "situation",
    question: "Un négociateur hésite et demande timidement une petite concession. Son adversaire, sentant la faiblesse, refuse tout. Un autre négociateur demande le double avec assurance, et l'obtient.",
    choices: [
      "Loi 28 : Faites preuve d'audace",
      "Loi 34 : Soyez royal dans votre façon d'être",
      "Loi 8 : Obligez les autres à venir à vous",
      "Loi 17 : Cultivez un air d'imprévisibilité"
    ],
    correctAnswer: 0,
    lawNumber: 28,
    lawTitle: "Faites preuve d'audace",
    correctExplanation: "La timidité signale la faiblesse et invite le refus. L'audace, même démesurée, impressionne et désarme. Les gens respectent instinctivement ceux qui osent.",
    wrongExplanations: {
      "1": "La loi 34 concerne la dignité royale. L'audace et la royauté sont différentes : l'audace est offensive, la royauté est une posture.",
      "2": "La loi 8 parle de forcer l'autre à venir à vous. Ici, les deux négociateurs sont dans le même cadre, la différence est l'assurance.",
      "3": "La loi 17 parle d'imprévisibilité. La demande audacieuse n'est pas imprévisible, elle est simplement plus grande."
    },
    difficulty: 1,
    tags: ["audace", "négociation", "confiance"]
  },
  {
    id: "law_029_sit_plan",
    type: "situation",
    question: "Un général remporte une bataille éclatante mais n'a pas prévu la suite. Sans plan pour consolider sa victoire, il perd tout le terrain gagné en quelques semaines.",
    choices: [
      "Loi 29 : Planifiez jusqu'à la fin",
      "Loi 47 : Ne dépassez pas la cible",
      "Loi 23 : Concentrez vos forces",
      "Loi 15 : Écrasez totalement l'ennemi"
    ],
    correctAnswer: 0,
    lawNumber: 29,
    lawTitle: "Planifiez jusqu'à la fin",
    correctExplanation: "Une victoire sans plan de consolidation est une victoire perdue. Il faut anticiper toutes les conséquences et les étapes suivantes avant même de commencer.",
    wrongExplanations: {
      "1": "La loi 47 parle de s'arrêter après la victoire. Le général n'a pas dépassé sa cible, il a simplement omis de planifier l'après.",
      "2": "La loi 23 concerne la concentration des forces. Le problème ici n'est pas la dispersion mais l'absence de vision à long terme.",
      "3": "La loi 15 parle de détruire complètement l'ennemi. Le problème ici est l'absence de plan post-victoire."
    },
    difficulty: 2,
    tags: ["planification", "victoire", "stratégie"]
  },
  {
    id: "law_030_cit_effort",
    type: "citation",
    question: "« Le vrai génie fait paraître ses exploits naturels et sans effort, comme si tout cela était simplement dans l'ordre des choses. »",
    choices: [
      "Loi 46 : Ne paraissez jamais trop parfait",
      "Loi 30 : Faites paraître vos accomplissements sans effort",
      "Loi 25 : Recréez-vous",
      "Loi 34 : Soyez royal dans votre façon d'être"
    ],
    correctAnswer: 1,
    lawNumber: 30,
    lawTitle: "Faites paraître vos accomplissements sans effort",
    correctExplanation: "Montrer son effort diminue le prestige. Les grands maîtres cachent le travail pour que le résultat semble magique, naturel, presque divin.",
    wrongExplanations: {
      "0": "La loi 46 parle de ne pas paraître trop parfait pour éviter l'envie. Ici, il s'agit de cacher l'effort, pas la perfection.",
      "2": "La loi 25 concerne la réinvention de soi. La citation parle de l'apparence de facilité, pas de transformation.",
      "3": "La loi 34 concerne la posture royale. La citation ne parle pas de dignité mais de l'apparence de naturel dans les accomplissements."
    },
    difficulty: 2,
    tags: ["effort", "apparence", "prestige"]
  },
  {
    id: "law_031_sit_options",
    type: "situation",
    question: "Un vendeur présente à son client deux offres, toutes deux avantageuses pour lui. Le client choisit l'une d'elles, pensant avoir fait un choix libre.",
    choices: [
      "Loi 31 : Contrôlez les options",
      "Loi 3 : Dissimulez vos intentions",
      "Loi 12 : Utilisez la générosité sélective",
      "Loi 21 : Jouez les idiots"
    ],
    correctAnswer: 0,
    lawNumber: 31,
    lawTitle: "Contrôlez les options",
    correctExplanation: "En donnant l'illusion du choix tout en contrôlant les options disponibles, vous guidez les décisions des autres dans la direction souhaitée.",
    wrongExplanations: {
      "1": "La loi 3 cache les intentions. Le vendeur ne cache pas ses intentions, il structure les choix à son avantage.",
      "2": "La loi 12 utilise la générosité pour désarmer. Les offres ne sont pas des cadeaux mais des options calibrées.",
      "3": "La loi 21 feint la stupidité. Le vendeur agit avec une intelligence calculée, pas avec une feinte de naïveté."
    },
    difficulty: 2,
    tags: ["contrôle", "choix", "manipulation"]
  },
  {
    id: "law_032_sit_fantasme",
    type: "situation",
    question: "Un politicien promet un retour à un âge d'or mythique que le pays n'a jamais vraiment connu. La foule, émue par ce rêve, le suit avec ferveur.",
    choices: [
      "Loi 27 : Exploitez le besoin de croire",
      "Loi 32 : Jouez sur les fantasmes des gens",
      "Loi 37 : Créez des spectacles convaincants",
      "Loi 43 : Travaillez sur le cœur et l'esprit"
    ],
    correctAnswer: 1,
    lawNumber: 32,
    lawTitle: "Jouez sur les fantasmes des gens",
    correctExplanation: "Les gens préfèrent les illusions séduisantes à la réalité banale. Offrir un fantasme collectif est plus puissant que présenter des faits rationnels.",
    wrongExplanations: {
      "0": "La loi 27 concerne le besoin de croire en général. Ici, le mécanisme spécifique est le fantasme nostalgique, l'image d'un passé idéalisé.",
      "2": "La loi 37 utilise des spectacles visuels. Le politicien utilise des mots et une narrative, pas un spectacle visuel.",
      "3": "La loi 43 parle de persuasion émotionnelle individuelle. Ici, c'est un fantasme collectif qui est en jeu."
    },
    difficulty: 3,
    tags: ["fantasme", "politique", "illusion"]
  },
  {
    id: "law_033_sit_faiblesse",
    type: "situation",
    question: "Un diplomate découvre que son adversaire a un besoin maladif de reconnaissance publique. Il utilise cette faiblesse pour obtenir des concessions en le flattant.",
    choices: [
      "Loi 33 : Découvrez le point faible de chacun",
      "Loi 14 : Posez-vous en ami, agissez en espion",
      "Loi 12 : Utilisez la générosité sélective",
      "Loi 24 : Jouez le parfait courtisan"
    ],
    correctAnswer: 0,
    lawNumber: 33,
    lawTitle: "Découvrez le point faible de chacun",
    correctExplanation: "Chacun a une faille, un besoin non comblé, une insécurité. Celui qui la trouve détient un levier de pouvoir considérable pour orienter le comportement de l'autre.",
    wrongExplanations: {
      "1": "La loi 14 concerne l'espionnage social. Bien que le diplomate ait découvert la faiblesse, l'accent est sur l'exploitation de celle-ci.",
      "2": "La loi 12 utilise la générosité comme arme. Ici, la flatterie n'est pas de la générosité mais un levier sur une faiblesse.",
      "3": "La loi 24 concerne l'art de la cour en général. Le diplomate utilise une technique précise basée sur une faiblesse identifiée."
    },
    difficulty: 2,
    tags: ["faiblesse", "diplomatie", "levier"]
  },
  {
    id: "law_034_pers_louis",
    type: "personnage",
    question: "Louis XIV se faisait appeler le Roi-Soleil, vivait dans un palais grandiose et exigeait que toute la noblesse gravite autour de lui à Versailles.",
    choices: [
      "Loi 34 : Soyez royal dans votre façon d'être",
      "Loi 6 : Attirez l'attention à tout prix",
      "Loi 37 : Créez des spectacles convaincants",
      "Loi 11 : Rendez les gens dépendants de vous"
    ],
    correctAnswer: 0,
    lawNumber: 34,
    lawTitle: "Soyez royal dans votre façon d'être",
    correctExplanation: "Louis XIV incarnait la royauté dans chaque aspect de sa vie. En se traitant comme un être supérieur, il forçait les autres à le percevoir ainsi. L'attitude crée le statut.",
    wrongExplanations: {
      "1": "La loi 6 recherche l'attention. Louis XIV ne cherchait pas simplement l'attention mais le respect total et la soumission.",
      "2": "La loi 37 concerne les spectacles visuels. Versailles était plus qu'un spectacle : c'était un mode de vie royal entier.",
      "3": "La loi 11 crée de la dépendance. Bien que Versailles ait rendu les nobles dépendants, la leçon principale est l'attitude royale."
    },
    difficulty: 1,
    tags: ["royauté", "prestige", "histoire"]
  },
  {
    id: "law_035_sit_timing",
    type: "situation",
    question: "Un investisseur attend patiemment une crise économique pour acheter des actifs à prix réduit, alors que tout le monde panique et vend.",
    choices: [
      "Loi 35 : Maîtrisez l'art du timing",
      "Loi 28 : Faites preuve d'audace",
      "Loi 36 : Dédaignez ce que vous ne pouvez avoir",
      "Loi 29 : Planifiez jusqu'à la fin"
    ],
    correctAnswer: 0,
    lawNumber: 35,
    lawTitle: "Maîtrisez l'art du timing",
    correctExplanation: "Le bon moment transforme une action ordinaire en coup de maître. La patience stratégique et le sens du timing sont des armes redoutables.",
    wrongExplanations: {
      "1": "La loi 28 parle d'audace. Acheter pendant une crise est audacieux mais la leçon principale est le timing, pas l'audace en soi.",
      "2": "La loi 36 parle de mépriser l'inaccessible. L'investisseur ne méprise rien, il attend le bon moment.",
      "3": "La loi 29 concerne la planification complète. Le timing est différent de la planification : c'est savoir quand agir."
    },
    difficulty: 2,
    tags: ["timing", "patience", "finance"]
  },
  {
    id: "law_036_sit_dedain",
    type: "situation",
    question: "Un rival tente de provoquer un leader en l'insultant publiquement. Le leader l'ignore complètement, faisant paraître l'attaquant insignifiant.",
    choices: [
      "Loi 39 : Agitez les eaux pour faire sortir les poissons",
      "Loi 36 : Dédaignez ce que vous ne pouvez avoir",
      "Loi 5 : Protégez votre réputation",
      "Loi 4 : Dites-en moins que nécessaire"
    ],
    correctAnswer: 1,
    lawNumber: 36,
    lawTitle: "Dédaignez ce que vous ne pouvez avoir",
    correctExplanation: "En ignorant l'attaque, le leader lui retire toute importance. Ce que vous ne reconnaissez pas n'existe pas. Le dédain est parfois la meilleure défense.",
    wrongExplanations: {
      "0": "La loi 39 cherche à provoquer l'adversaire. Ici, c'est le leader qui est provoqué et choisit de ne pas réagir.",
      "2": "La loi 5 protège la réputation. Ignorer peut être une forme de protection, mais la technique spécifique est le dédain délibéré.",
      "3": "La loi 4 parle de brièveté verbale. Le leader ne parle pas moins, il ne réagit pas du tout."
    },
    difficulty: 2,
    tags: ["dédain", "réaction", "contrôle"]
  },
  {
    id: "law_037_hist_spectacle",
    type: "historical_event",
    question: "Napoléon organise son propre couronnement avec une mise en scène spectaculaire, se couronnant lui-même plutôt que de laisser le pape le faire.",
    choices: [
      "Loi 34 : Soyez royal dans votre façon d'être",
      "Loi 25 : Recréez-vous",
      "Loi 37 : Créez des spectacles convaincants",
      "Loi 28 : Faites preuve d'audace"
    ],
    correctAnswer: 2,
    lawNumber: 37,
    lawTitle: "Créez des spectacles convaincants",
    correctExplanation: "Napoléon a compris que les symboles et les images frappent plus fort que les arguments. Un spectacle grandiose crée une réalité que les mots ne peuvent défaire.",
    wrongExplanations: {
      "0": "La loi 34 concerne l'attitude royale générale. L'acte de Napoléon est un spectacle délibérément conçu, pas une simple attitude.",
      "1": "La loi 25 parle de se réinventer. Napoléon ne se réinvente pas, il crée un événement symbolique spectaculaire.",
      "3": "La loi 28 encourage l'audace. Se couronner soi-même est audacieux, mais c'est le spectacle qui est le moyen clé."
    },
    difficulty: 1,
    tags: ["spectacle", "symbole", "histoire"]
  },
  {
    id: "law_038_sit_conformisme",
    type: "situation",
    question: "Un penseur révolutionnaire garde ses idées radicales en privé mais adopte un comportement parfaitement conventionnel en public, évitant ainsi la persécution.",
    choices: [
      "Loi 38 : Pensez comme vous voulez, comportez-vous comme les autres",
      "Loi 3 : Dissimulez vos intentions",
      "Loi 48 : Soyez sans forme",
      "Loi 4 : Dites-en toujours moins que nécessaire"
    ],
    correctAnswer: 0,
    lawNumber: 38,
    lawTitle: "Pensez comme vous voulez, comportez-vous comme les autres",
    correctExplanation: "Afficher publiquement des idées non conventionnelles attire la persécution. La sagesse consiste à penser librement mais à se comporter de manière conforme pour protéger ses intérêts.",
    wrongExplanations: {
      "1": "La loi 3 concerne la dissimulation d'objectifs spécifiques. Ici, il s'agit de cacher une pensée divergente, pas un plan d'action.",
      "2": "La loi 48 parle de fluidité stratégique. Le conformisme de façade est fixe, pas fluide.",
      "3": "La loi 4 concerne la quantité de paroles. Le penseur ne parle pas moins, il masque ses vraies opinions."
    },
    difficulty: 2,
    tags: ["conformisme", "pensée", "survie"]
  },
  {
    id: "law_039_sit_provocation",
    type: "situation",
    question: "Un général envoie de petites escouades harceler l'ennemi jusqu'à ce que celui-ci, furieux, lance une attaque précipitée et tombe dans une embuscade.",
    choices: [
      "Loi 17 : Cultivez un air d'imprévisibilité",
      "Loi 8 : Obligez les autres à venir à vous",
      "Loi 39 : Agitez les eaux pour faire sortir les poissons",
      "Loi 15 : Écrasez totalement l'ennemi"
    ],
    correctAnswer: 2,
    lawNumber: 39,
    lawTitle: "Agitez les eaux pour faire sortir les poissons",
    correctExplanation: "En provoquant l'ennemi, on le force à réagir émotionnellement. La colère rend aveugle et prévisible. Le calme contrôlé est supérieur à la rage.",
    wrongExplanations: {
      "0": "La loi 17 concerne l'imprévisibilité. Les harcèlements sont prévisibles, c'est l'ennemi qui devient imprévisible par sa colère.",
      "1": "La loi 8 attire l'ennemi avec un appât. Ici, on utilise la provocation, pas l'attraction.",
      "3": "La loi 15 parle de destruction totale. L'embuscade est un piège tactique, pas nécessairement une destruction totale."
    },
    difficulty: 2,
    tags: ["provocation", "guerre", "émotion"]
  },
  {
    id: "law_040_cit_gratuit",
    type: "citation",
    question: "« Ce qui est offert gratuitement est dangereux, car cela implique une ruse ou une dette cachée. »",
    choices: [
      "Loi 12 : Utilisez la générosité sélective",
      "Loi 40 : Méprisez ce qui est gratuit",
      "Loi 33 : Découvrez le point faible",
      "Loi 13 : Faites appel à l'intérêt personnel"
    ],
    correctAnswer: 1,
    lawNumber: 40,
    lawTitle: "Méprisez ce qui est gratuit",
    correctExplanation: "Ce qui ne coûte rien a souvent un prix caché. La gratuité peut cacher une manipulation, une dette morale ou un piège. Ce qui a de la valeur mérite d'être payé.",
    wrongExplanations: {
      "0": "La loi 12 utilise la générosité comme arme. La citation est du point de vue du récepteur, pas du donneur.",
      "2": "La loi 33 cherche les faiblesses. La citation met en garde contre la gratuité, pas contre les faiblesses humaines.",
      "3": "La loi 13 parle de motivation par l'intérêt. La citation concerne le danger de la gratuité, pas l'appel à l'intérêt."
    },
    difficulty: 2,
    tags: ["gratuité", "danger", "valeur"]
  },
  {
    id: "law_041_sit_ombre",
    type: "situation",
    question: "Le fils d'un célèbre général tente de reproduire exactement la stratégie militaire de son père, mais échoue car l'ennemi s'y attendait.",
    choices: [
      "Loi 1 : Ne surpassez jamais le maître",
      "Loi 41 : Évitez de marcher dans les traces d'un grand homme",
      "Loi 25 : Recréez-vous",
      "Loi 48 : Soyez sans forme"
    ],
    correctAnswer: 1,
    lawNumber: 41,
    lawTitle: "Évitez de marcher dans les traces d'un grand homme",
    correctExplanation: "Imiter un prédécesseur célèbre vous place dans son ombre. Vous devez tracer votre propre chemin, car ce qui a fonctionné pour un autre ne fonctionnera pas nécessairement pour vous.",
    wrongExplanations: {
      "0": "La loi 1 concerne la relation avec un supérieur vivant. Le père est un prédécesseur, pas un maître actuel.",
      "2": "La loi 25 parle de réinvention de soi. Le fils n'échoue pas à se réinventer, il échoue à se différencier.",
      "3": "La loi 48 parle de fluidité. Le problème n'est pas le manque de fluidité mais l'imitation rigide."
    },
    difficulty: 2,
    tags: ["héritage", "originalité", "imitation"]
  },
  {
    id: "law_042_sit_berger",
    type: "situation",
    question: "Pour briser un mouvement social, un gouvernement arrête uniquement les deux leaders principaux. Sans direction, le mouvement se dissout rapidement.",
    choices: [
      "Loi 15 : Écrasez totalement l'ennemi",
      "Loi 42 : Frappez le berger et les moutons se disperseront",
      "Loi 33 : Découvrez le point faible de chacun",
      "Loi 23 : Concentrez vos forces"
    ],
    correctAnswer: 1,
    lawNumber: 42,
    lawTitle: "Frappez le berger et les moutons se disperseront",
    correctExplanation: "Tout groupe dépend de ses leaders. En les neutralisant, vous privez le groupe de direction et de cohésion. C'est plus efficace que de combattre chaque membre individuellement.",
    wrongExplanations: {
      "0": "La loi 15 préconise la destruction totale. Ici, l'approche est chirurgicale : neutraliser les leaders suffit.",
      "2": "La loi 33 cherche les faiblesses individuelles. La stratégie ici cible la structure du groupe, pas les individus.",
      "3": "La loi 23 concerne la concentration de ses propres forces. Ici, il s'agit de cibler le point névralgique de l'adversaire."
    },
    difficulty: 1,
    tags: ["leadership", "stratégie", "mouvement"]
  },
  {
    id: "law_043_sit_coeur",
    type: "situation",
    question: "Un général conquiert une ville mais, au lieu de la piller, il nourrit la population et soigne les blessés. Les habitants deviennent ses plus fidèles alliés.",
    choices: [
      "Loi 43 : Travaillez sur le cœur et l'esprit des gens",
      "Loi 12 : Utilisez la générosité sélective",
      "Loi 15 : Écrasez totalement l'ennemi",
      "Loi 22 : Utilisez la tactique de la capitulation"
    ],
    correctAnswer: 0,
    lawNumber: 43,
    lawTitle: "Travaillez sur le cœur et l'esprit des gens",
    correctExplanation: "La force brute crée du ressentiment. Gagner les cœurs transforme les vaincus en alliés. La persuasion émotionnelle est plus durable que la coercition.",
    wrongExplanations: {
      "1": "La loi 12 utilise la générosité comme ruse ponctuelle. Ici, c'est une stratégie à long terme pour gagner les cœurs.",
      "2": "La loi 15 promeut la destruction totale, l'exact opposé de cette approche bienveillante.",
      "3": "La loi 22 concerne la capitulation. Le général ne capitule pas, il offre la bienveillance après la victoire."
    },
    difficulty: 1,
    tags: ["cœur", "persuasion", "conquête"]
  },
  {
    id: "law_044_sit_miroir",
    type: "situation",
    question: "Un escroc étudie minutieusement les habitudes de sa cible, puis se présente comme son reflet parfait : mêmes goûts, mêmes opinions, mêmes valeurs.",
    choices: [
      "Loi 44 : Utilisez l'effet miroir pour désarmer",
      "Loi 14 : Posez-vous en ami, agissez en espion",
      "Loi 24 : Jouez le parfait courtisan",
      "Loi 3 : Dissimulez vos intentions"
    ],
    correctAnswer: 0,
    lawNumber: 44,
    lawTitle: "Utilisez l'effet miroir pour désarmer",
    correctExplanation: "En reflétant les goûts et valeurs de l'autre, on crée un sentiment de familiarité et de confiance immédiate. Le miroir est une arme de séduction psychologique.",
    wrongExplanations: {
      "1": "La loi 14 utilise l'amitié simulée pour espionner. L'escroc ne cherche pas des informations mais à créer de la confiance.",
      "2": "La loi 24 concerne l'art de la cour général. L'effet miroir est une technique spécifique de mimèsis, pas une posture courtisane.",
      "3": "La loi 3 cache les intentions. Bien que l'escroc dissimule ses vrais buts, la technique spécifique est le reflet, pas la dissimulation."
    },
    difficulty: 3,
    tags: ["miroir", "manipulation", "psychologie"]
  },
  {
    id: "law_045_sit_reforme",
    type: "situation",
    question: "Un nouveau directeur impose brutalement dix réformes le même jour. Le personnel, choqué, se révolte et les réformes échouent toutes.",
    choices: [
      "Loi 45 : Prêchez le changement mais ne réformez jamais trop à la fois",
      "Loi 35 : Maîtrisez l'art du timing",
      "Loi 47 : Ne dépassez pas la cible",
      "Loi 19 : Sachez à qui vous avez affaire"
    ],
    correctAnswer: 0,
    lawNumber: 45,
    lawTitle: "Prêchez le changement mais ne réformez jamais trop à la fois",
    correctExplanation: "Les gens sont attachés à leurs habitudes. Le changement doit être progressif pour être accepté. Trop de réformes simultanées provoquent la résistance.",
    wrongExplanations: {
      "1": "La loi 35 concerne le moment d'agir. Le problème ici n'est pas le timing mais la quantité de changements.",
      "2": "La loi 47 parle de ne pas aller trop loin après un succès. Le directeur n'a pas encore de succès à dépasser.",
      "3": "La loi 19 concerne l'évaluation des personnes. Le directeur a négligé la résistance au changement, pas les personnes."
    },
    difficulty: 2,
    tags: ["changement", "réforme", "résistance"]
  },
  {
    id: "law_046_sit_parfait",
    type: "situation",
    question: "Un collègue trop brillant suscite la jalousie de ses pairs. Ils complotent pour saboter ses projets. Il aurait dû montrer quelques faiblesses volontairement.",
    choices: [
      "Loi 46 : Ne paraissez jamais trop parfait",
      "Loi 1 : Ne surpassez jamais le maître",
      "Loi 30 : Faites paraître vos accomplissements sans effort",
      "Loi 36 : Dédaignez ce que vous ne pouvez avoir"
    ],
    correctAnswer: 0,
    lawNumber: 46,
    lawTitle: "Ne paraissez jamais trop parfait",
    correctExplanation: "La perfection apparente génère de l'envie et de l'hostilité. Montrer des faiblesses mineures rend plus humain et désamorce la jalousie des autres.",
    wrongExplanations: {
      "1": "La loi 1 concerne la relation avec un supérieur. Ici, ce sont des pairs qui sont jaloux, pas un supérieur.",
      "2": "La loi 30 cache l'effort. Le problème n'est pas l'effort visible mais la perfection apparente.",
      "3": "La loi 36 conseille le dédain stratégique. La solution ici est de montrer des imperfections, pas de dédaigner."
    },
    difficulty: 1,
    tags: ["perfection", "envie", "humilité"]
  },
  {
    id: "law_047_hist_napoleon",
    type: "historical_event",
    question: "Napoléon, après avoir conquis presque toute l'Europe, envahit la Russie. Cette campagne trop ambitieuse marque le début de sa chute.",
    choices: [
      "Loi 47 : Ne dépassez pas la cible",
      "Loi 29 : Planifiez jusqu'à la fin",
      "Loi 23 : Concentrez vos forces",
      "Loi 35 : Maîtrisez l'art du timing"
    ],
    correctAnswer: 0,
    lawNumber: 47,
    lawTitle: "Ne dépassez pas la cible : sachez vous arrêter après la victoire",
    correctExplanation: "L'ivresse du succès pousse à vouloir toujours plus. Napoléon aurait dû consolider ses conquêtes. Aller trop loin inverse la fortune et transforme la victoire en défaite.",
    wrongExplanations: {
      "1": "La loi 29 concerne la planification. Napoléon avait un plan, mais le problème est l'ambition démesurée, pas le manque de planification.",
      "2": "La loi 23 parle de concentration. Les forces de Napoléon étaient concentrées, mais déployées trop loin.",
      "3": "La loi 35 concerne le timing. Le problème n'est pas le moment mais l'excès d'ambition."
    },
    difficulty: 1,
    tags: ["ambition", "excès", "histoire"]
  },
  {
    id: "law_048_cit_eau",
    type: "citation",
    question: "« Soyez comme l'eau : elle n'a pas de forme propre mais prend celle de tout ce qui la contient, et pourtant rien ne lui résiste. »",
    choices: [
      "Loi 22 : Utilisez la tactique de la capitulation",
      "Loi 17 : Cultivez un air d'imprévisibilité",
      "Loi 48 : Soyez sans forme",
      "Loi 38 : Pensez comme vous voulez, comportez-vous comme les autres"
    ],
    correctAnswer: 2,
    lawNumber: 48,
    lawTitle: "Soyez sans forme",
    correctExplanation: "L'adaptabilité est l'arme ultime. En refusant de se figer dans une stratégie, une position ou une identité, on devient impossible à saisir et à vaincre.",
    wrongExplanations: {
      "0": "La loi 22 utilise la capitulation comme tactique. Être sans forme n'est pas capituler, c'est s'adapter constamment.",
      "1": "La loi 17 cultive l'imprévisibilité. Être sans forme va au-delà de l'imprévisibilité : c'est une philosophie d'adaptabilité totale.",
      "3": "La loi 38 concerne le conformisme de façade. Être sans forme n'est pas se conformer, c'est fluer comme l'eau."
    },
    difficulty: 2,
    tags: ["adaptabilité", "fluidité", "philosophie"]
  },
  {
    id: "law_024_sit_courtisan",
    type: "situation",
    question: "Un conseiller royal flatte subtilement le roi, présente les idées du roi comme brillantes, et ne contredit jamais en public. Il devient le plus influent de la cour.",
    choices: [
      "Loi 1 : Ne surpassez jamais le maître",
      "Loi 24 : Jouez le parfait courtisan",
      "Loi 14 : Posez-vous en ami, agissez en espion",
      "Loi 33 : Découvrez le point faible de chacun"
    ],
    correctAnswer: 1,
    lawNumber: 24,
    lawTitle: "Jouez le parfait courtisan",
    correctExplanation: "L'art de la cour consiste à plaire sans servilité, à influencer sans confronter, et à obtenir le pouvoir par la grâce plutôt que par la force.",
    wrongExplanations: {
      "0": "La loi 1 concerne le fait de ne pas éclipser son supérieur. Ici, le courtisan va plus loin : il maîtrise tout l'art de la cour.",
      "2": "La loi 14 concerne l'espionnage. Le courtisan ne cherche pas des secrets mais l'influence par l'art social.",
      "3": "La loi 33 cherche des faiblesses. Le courtisan n'exploite pas une faiblesse spécifique, il excelle dans l'art social global."
    },
    difficulty: 2,
    tags: ["courtisan", "influence", "flatterie"]
  },
  {
    id: "law_002_sit_ennemi",
    type: "situation",
    question: "Un PDG recrute un ancien rival pour diriger un département. Ce rival, ayant tout à prouver, travaille deux fois plus dur que les employés de longue date.",
    choices: [
      "Loi 10 : Évitez les malchanceux",
      "Loi 2 : Ne vous fiez pas à vos amis, utilisez vos ennemis",
      "Loi 11 : Rendez les gens dépendants de vous",
      "Loi 7 : Laissez les autres travailler pour vous"
    ],
    correctAnswer: 1,
    lawNumber: 2,
    lawTitle: "Ne vous fiez pas à vos amis, utilisez vos ennemis",
    correctExplanation: "Un ancien ennemi rallié à votre cause a davantage à prouver qu'un ami de longue date. Il travaillera plus dur pour gagner votre confiance et maintenir sa nouvelle position.",
    wrongExplanations: {
      "0": "La loi 10 parle d'éviter les malchanceux. L'ancien rival n'est pas malchanceux, c'est un adversaire converti.",
      "2": "La loi 11 crée de la dépendance. Le PDG ne crée pas de dépendance, il utilise la motivation de l'ancien rival.",
      "3": "La loi 7 concerne l'appropriation du mérite. Le PDG ne prend pas le crédit du travail du rival."
    },
    difficulty: 2,
    tags: ["recrutement", "rivalité", "motivation"]
  },
  {
    id: "law_001_mod_startup",
    type: "situation",
    question: "Un employé junior corrige publiquement une erreur de son PDG lors d'une réunion d'équipe. Le PDG sourit poliment mais l'écarte de tous les projets importants par la suite.",
    choices: [
      "Loi 1 : Ne surpassez jamais le maître",
      "Loi 5 : Protégez votre réputation à tout prix",
      "Loi 19 : Sachez à qui vous avez affaire",
      "Loi 46 : Ne paraissez jamais trop parfait"
    ],
    correctAnswer: 0,
    lawNumber: 1,
    lawTitle: "Ne surpassez jamais le maître",
    correctExplanation: "Même avec de bonnes intentions, corriger publiquement un supérieur le blesse dans son ego. Le pouvoir ne pardonne pas l'humiliation publique, même justifiée.",
    wrongExplanations: {
      "1": "La loi 5 concerne la protection de sa propre réputation. Ici, c'est l'ego du PDG qui est blessé.",
      "2": "La loi 19 concerne l'évaluation des personnes. L'employé sait qui est le PDG, il a juste mal géré la situation.",
      "3": "La loi 46 parle de ne pas paraître parfait. Le problème est l'humiliation du supérieur, pas la perfection de l'employé."
    },
    difficulty: 1,
    tags: ["entreprise", "hiérarchie", "moderne"]
  },
  {
    id: "law_003_mod_negociation",
    type: "situation",
    question: "Un vendeur annonce un prix élevé puis propose un rabais inattendu. L'acheteur, soulagé, accepte immédiatement sans réaliser que le prix final était celui prévu depuis le début.",
    choices: [
      "Loi 3 : Dissimulez vos intentions",
      "Loi 31 : Contrôlez les options",
      "Loi 12 : Utilisez la générosité sélective",
      "Loi 21 : Jouez les idiots pour attraper les idiots"
    ],
    correctAnswer: 0,
    lawNumber: 3,
    lawTitle: "Dissimulez vos intentions",
    correctExplanation: "Le vendeur a caché son vrai objectif derrière un prix initial gonflé. La réduction crée l'illusion d'une bonne affaire tout en atteignant le prix cible.",
    wrongExplanations: {
      "1": "La loi 31 limite les choix. Ici, il n'y a pas de choix limité mais un faux point de départ.",
      "2": "La loi 12 utilise la générosité. Le rabais n'est pas de la générosité mais une tactique calculée.",
      "3": "La loi 21 feint la bêtise. Le vendeur ne joue pas l'idiot, il manipule les attentes."
    },
    difficulty: 2,
    tags: ["vente", "négociation", "moderne"]
  },
  {
    id: "law_005_mod_influenceur",
    type: "situation",
    question: "Un influenceur subit une campagne de dénigrement en ligne. Plutôt que d'ignorer, il publie une vidéo de réponse documentée, démontant point par point les accusations.",
    choices: [
      "Loi 36 : Dédaignez ce que vous ne pouvez avoir",
      "Loi 5 : Protégez votre réputation à tout prix",
      "Loi 39 : Agitez les eaux pour faire sortir les poissons",
      "Loi 9 : Gagnez par vos actes, pas par la discussion"
    ],
    correctAnswer: 1,
    lawNumber: 5,
    lawTitle: "Protégez votre réputation à tout prix",
    correctExplanation: "Dans l'ère numérique, la réputation est fragile. Une réponse rapide et documentée est essentielle pour ne pas laisser le narratif négatif s'installer.",
    wrongExplanations: {
      "0": "La loi 36 conseille le dédain. En ligne, ignorer une attaque virale peut être fatal pour l'image.",
      "2": "La loi 39 provoque l'adversaire. La réponse ici est défensive et factuelle, pas provocatrice.",
      "3": "La loi 9 privilégie les actes. Ici, la communication publique est nécessaire car l'attaque est publique."
    },
    difficulty: 3,
    tags: ["numérique", "réputation", "moderne"]
  },
  {
    id: "law_009_mod_presentation",
    type: "situation",
    question: "Un consultant présente un prototype fonctionnel au lieu d'un PowerPoint. Le client, impressionné par la démonstration concrète, signe immédiatement le contrat.",
    choices: [
      "Loi 9 : Gagnez par vos actes, pas par la discussion",
      "Loi 30 : Faites paraître vos accomplissements sans effort",
      "Loi 37 : Créez des spectacles convaincants",
      "Loi 28 : Faites preuve d'audace"
    ],
    correctAnswer: 0,
    lawNumber: 9,
    lawTitle: "Gagnez par vos actes, pas par la discussion",
    correctExplanation: "Une démonstration concrète vaut mille mots. Le prototype parle de lui-même et rend tout argument verbal superflu.",
    wrongExplanations: {
      "1": "La loi 30 cache l'effort derrière le résultat. Ici, l'accent est sur l'action concrète, pas l'apparence de facilité.",
      "2": "La loi 37 crée un spectacle visuel. Le prototype est fonctionnel, pas spectaculaire — c'est sa fonctionnalité qui convainc.",
      "3": "La loi 28 encourage l'audace. Le consultant n'est pas audacieux, il est pragmatique."
    },
    difficulty: 2,
    tags: ["business", "démonstration", "moderne"]
  },
  {
    id: "law_011_mod_tech",
    type: "scenario",
    question: "Tu es développeur senior. Tu pourrais documenter ton code complexe pour que d'autres le comprennent, ou le garder opaque pour rester indispensable. Que fais-tu ?",
    choices: [
      "Loi 11 : Rendez les gens dépendants de vous",
      "Loi 7 : Laissez les autres travailler pour vous",
      "Loi 46 : Ne paraissez jamais trop parfait",
      "Loi 43 : Travaillez sur le cœur et l'esprit des gens"
    ],
    correctAnswer: 0,
    lawNumber: 11,
    lawTitle: "Rendez les gens dépendants de vous",
    correctExplanation: "En gardant la connaissance pour soi, on devient irremplaçable. C'est cynique mais c'est exactement le mécanisme de la loi 11 en action dans le monde tech.",
    wrongExplanations: {
      "1": "La loi 7 utilise le travail des autres. Ici, c'est la connaissance exclusive qui crée le pouvoir.",
      "2": "La loi 46 montre des faiblesses. Il n'y a pas de recherche de perfection apparente ici.",
      "3": "La loi 43 gagne les cœurs. La question porte sur la dépendance technique, pas la persuasion émotionnelle."
    },
    difficulty: 3,
    tags: ["technologie", "dépendance", "scénario"]
  },
  {
    id: "law_013_mod_investor",
    type: "situation",
    question: "Un entrepreneur cherche un investisseur. Il arrête de parler de sa passion et commence à montrer les projections de rendement. L'investisseur signe le lendemain.",
    choices: [
      "Loi 13 : Faites appel à l'intérêt personnel",
      "Loi 9 : Gagnez par vos actes",
      "Loi 28 : Faites preuve d'audace",
      "Loi 30 : Faites paraître vos accomplissements sans effort"
    ],
    correctAnswer: 0,
    lawNumber: 13,
    lawTitle: "Faites appel à l'intérêt personnel, jamais à la pitié",
    correctExplanation: "L'investisseur ne finance pas des rêves, il finance des rendements. Aligner son discours sur l'intérêt de l'autre est toujours plus efficace.",
    wrongExplanations: {
      "1": "La loi 9 valorise l'action. Ici, c'est le cadrage du discours qui change, pas l'action.",
      "2": "La loi 28 parle d'audace. L'entrepreneur est stratégique, pas audacieux.",
      "3": "La loi 30 cache l'effort. L'entrepreneur montre son travail, il change juste l'angle."
    },
    difficulty: 2,
    tags: ["investissement", "intérêt", "moderne"]
  },
  {
    id: "law_015_mod_concurrent",
    type: "scenario",
    question: "Ton principal concurrent est affaibli par un scandale. Tu pourrais lui proposer un partenariat ou profiter de sa faiblesse pour capturer ses clients. Que fais-tu ?",
    choices: [
      "Loi 15 : Écrasez totalement l'ennemi",
      "Loi 22 : Utilisez la tactique de la capitulation",
      "Loi 43 : Travaillez sur le cœur et l'esprit",
      "Loi 2 : Utilisez vos ennemis"
    ],
    correctAnswer: 0,
    lawNumber: 15,
    lawTitle: "Écrasez totalement l'ennemi",
    correctExplanation: "Un concurrent affaibli qui se remet pourrait revenir plus fort et vengeur. Quand l'occasion se présente, il faut neutraliser la menace complètement.",
    wrongExplanations: {
      "1": "La loi 22 concerne votre propre capitulation face à un plus fort. Ici, c'est vous qui êtes en position de force.",
      "2": "La loi 43 gagne les cœurs. Dans la guerre commerciale, la bienveillance avec un concurrent est risquée.",
      "3": "La loi 2 utilise les ennemis. Un partenariat avec un rival scandaleux pourrait contaminer votre image."
    },
    difficulty: 3,
    tags: ["compétition", "business", "scénario"]
  },
  {
    id: "law_017_mod_manager",
    type: "situation",
    question: "Un manager change régulièrement les priorités de son équipe sans prévenir. Personne ne peut anticiper ses décisions, ce qui maintient tout le monde en alerte et sous son contrôle.",
    choices: [
      "Loi 17 : Cultivez un air d'imprévisibilité",
      "Loi 31 : Contrôlez les options",
      "Loi 11 : Rendez les gens dépendants de vous",
      "Loi 39 : Agitez les eaux"
    ],
    correctAnswer: 0,
    lawNumber: 17,
    lawTitle: "Cultivez un air d'imprévisibilité",
    correctExplanation: "L'imprévisibilité maintient les subordonnés dans un état de vigilance. Ils ne peuvent pas développer de résistance car ils ne savent jamais à quoi s'attendre.",
    wrongExplanations: {
      "1": "La loi 31 structure les choix. Ici, il n'y a pas de choix offert, juste de l'incertitude.",
      "2": "La loi 11 crée de la dépendance par la compétence. Ici, c'est l'incertitude qui crée le contrôle.",
      "3": "La loi 39 provoque pour obtenir des réactions. Le manager ne provoque pas, il désoriente."
    },
    difficulty: 3,
    tags: ["management", "imprévisibilité", "contrôle"]
  },
  {
    id: "law_020_mod_politique",
    type: "personnage",
    question: "Charles de Gaulle refusait systématiquement de s'allier à un parti politique unique, préférant rester au-dessus des factions pour maintenir sa liberté d'action.",
    choices: [
      "Loi 20 : Ne vous engagez envers personne",
      "Loi 34 : Soyez royal dans votre façon d'être",
      "Loi 48 : Soyez sans forme",
      "Loi 38 : Pensez comme vous voulez, comportez-vous comme les autres"
    ],
    correctAnswer: 0,
    lawNumber: 20,
    lawTitle: "Ne vous engagez envers personne",
    correctExplanation: "En restant indépendant des partis, de Gaulle préservait sa capacité à arbitrer et à diriger. L'engagement aurait réduit son autorité au-dessus de la mêlée.",
    wrongExplanations: {
      "1": "La loi 34 concerne l'attitude royale. De Gaulle était royal, mais la leçon spécifique ici est le non-engagement.",
      "2": "La loi 48 parle d'adaptabilité fluide. De Gaulle était plutôt constant dans ses principes, pas fluide.",
      "3": "La loi 38 concerne le conformisme de façade. De Gaulle ne se conformait pas, il se distinguait."
    },
    difficulty: 2,
    tags: ["politique", "indépendance", "histoire"]
  },
  {
    id: "law_023_mod_startup",
    type: "situation",
    question: "Une startup essaie de lancer 5 produits simultanément. Tous échouent. Sa rivale, focalisée sur un seul produit excellent, lève 10 millions d'euros.",
    choices: [
      "Loi 23 : Concentrez vos forces",
      "Loi 29 : Planifiez jusqu'à la fin",
      "Loi 47 : Ne dépassez pas la cible",
      "Loi 35 : Maîtrisez l'art du timing"
    ],
    correctAnswer: 0,
    lawNumber: 23,
    lawTitle: "Concentrez vos forces",
    correctExplanation: "Les ressources d'une startup sont limitées. Les disperser sur 5 fronts dilue l'énergie. Un focus absolu sur un seul produit maximise les chances de percée.",
    wrongExplanations: {
      "1": "La loi 29 concerne la planification. La startup a peut-être planifié, mais mal concentré.",
      "2": "La loi 47 parle de ne pas aller trop loin. Le problème est la dispersion, pas l'excès d'ambition sur un point.",
      "3": "La loi 35 concerne le timing. Les deux startups agissaient en même temps, la différence est la concentration."
    },
    difficulty: 2,
    tags: ["startup", "focus", "moderne"]
  },
  {
    id: "law_025_mod_artiste",
    type: "personnage",
    question: "David Bowie a constamment changé de persona : Ziggy Stardust, Thin White Duke, puis électronique berlinoise, restant toujours au sommet de la pertinence culturelle.",
    choices: [
      "Loi 25 : Recréez-vous",
      "Loi 6 : Attirez l'attention à tout prix",
      "Loi 17 : Cultivez un air d'imprévisibilité",
      "Loi 48 : Soyez sans forme"
    ],
    correctAnswer: 0,
    lawNumber: 25,
    lawTitle: "Recréez-vous",
    correctExplanation: "Bowie refusait d'être prisonnier d'une identité. Chaque réinvention lui permettait de rester frais et de surprendre, contrôlant toujours son propre récit.",
    wrongExplanations: {
      "1": "La loi 6 cherche l'attention. Bowie n'attirait pas l'attention par provocation mais par transformation profonde.",
      "2": "La loi 17 cultive l'imprévisibilité tactique. La réinvention de Bowie est existentielle, pas tactique.",
      "3": "La loi 48 parle de fluidité stratégique. Bowie créait des formes nouvelles, il ne s'en passait pas."
    },
    difficulty: 2,
    tags: ["musique", "réinvention", "culture"]
  },
  {
    id: "law_027_mod_marketing",
    type: "situation",
    question: "Une marque de luxe ne vend pas des produits mais une philosophie de vie. Ses clients deviennent des adeptes fidèles qui évangélisent autour d'eux.",
    choices: [
      "Loi 27 : Exploitez le besoin des gens de croire",
      "Loi 6 : Attirez l'attention à tout prix",
      "Loi 37 : Créez des spectacles convaincants",
      "Loi 32 : Jouez sur les fantasmes des gens"
    ],
    correctAnswer: 0,
    lawNumber: 27,
    lawTitle: "Exploitez le besoin des gens de croire",
    correctExplanation: "Les grandes marques créent des cultes. Elles offrent un système de croyances, un sentiment d'appartenance. Le produit devient secondaire face à la foi.",
    wrongExplanations: {
      "1": "La loi 6 cherche la visibilité. La marque ne cherche pas juste l'attention mais la dévotion.",
      "2": "La loi 37 crée des spectacles. La fidélité de marque va bien au-delà du spectacle.",
      "3": "La loi 32 joue sur les fantasmes. Le besoin de croire est plus profond qu'un simple fantasme."
    },
    difficulty: 3,
    tags: ["marketing", "croyance", "moderne"]
  },
  {
    id: "law_030_pers_jobs",
    type: "personnage",
    question: "Steve Jobs présentait les produits Apple avec un naturel apparent, comme si l'innovation coulait de source, alors que des mois de préparation intensive précédaient chaque keynote.",
    choices: [
      "Loi 30 : Faites paraître vos accomplissements sans effort",
      "Loi 37 : Créez des spectacles convaincants",
      "Loi 6 : Attirez l'attention à tout prix",
      "Loi 34 : Soyez royal dans votre façon d'être"
    ],
    correctAnswer: 0,
    lawNumber: 30,
    lawTitle: "Faites paraître vos accomplissements sans effort",
    correctExplanation: "Jobs cachait méticuleusement la préparation pour que tout semble naturel et magique. L'effort invisible amplifie l'admiration.",
    wrongExplanations: {
      "1": "La loi 37 crée des spectacles. Les keynotes étaient spectaculaires, mais la leçon clé est l'apparence de facilité.",
      "2": "La loi 6 cherche l'attention. Jobs n'attirait pas l'attention par excentricité mais par excellence apparemment naturelle.",
      "3": "La loi 34 concerne la posture royale. Jobs était décontracté, pas royal."
    },
    difficulty: 2,
    tags: ["technologie", "présentation", "personnage"]
  },
  {
    id: "law_033_mod_rh",
    type: "scenario",
    question: "Tu dois négocier une augmentation avec ton directeur. Tu découvres qu'il est obsédé par la reconnaissance de ses pairs dans l'industrie. Comment utilises-tu cette information ?",
    choices: [
      "Loi 33 : Découvrez le point faible de chacun",
      "Loi 13 : Faites appel à l'intérêt personnel",
      "Loi 14 : Posez-vous en ami, agissez en espion",
      "Loi 24 : Jouez le parfait courtisan"
    ],
    correctAnswer: 0,
    lawNumber: 33,
    lawTitle: "Découvrez le point faible de chacun",
    correctExplanation: "Connaître le besoin profond de reconnaissance de votre directeur vous donne un levier. Montrez comment votre promotion rehausse son image dans l'industrie.",
    wrongExplanations: {
      "1": "La loi 13 fait appel à l'intérêt général. Ici, vous ciblez une faiblesse psychologique spécifique.",
      "2": "La loi 14 espionne sous couvert d'amitié. Vous n'espionnez plus, vous exploitez une information déjà acquise.",
      "3": "La loi 24 flatte en général. Ici, vous utilisez une faiblesse identifiée, pas de la flatterie générale."
    },
    difficulty: 4,
    tags: ["carrière", "négociation", "scénario"]
  },
  {
    id: "law_034_mod_entretien",
    type: "situation",
    question: "Un candidat arrive à un entretien d'embauche en costume impeccable, parle avec assurance et traite chaque question comme une formalité. Il est embauché malgré un CV moins solide que ses rivaux.",
    choices: [
      "Loi 34 : Soyez royal dans votre façon d'être",
      "Loi 28 : Faites preuve d'audace",
      "Loi 25 : Recréez-vous",
      "Loi 30 : Faites paraître vos accomplissements sans effort"
    ],
    correctAnswer: 0,
    lawNumber: 34,
    lawTitle: "Soyez royal dans votre façon d'être",
    correctExplanation: "L'attitude crée la perception. En se comportant comme s'il méritait naturellement le poste, le candidat a projeté une confiance que les recruteurs ont prise pour de la compétence.",
    wrongExplanations: {
      "1": "La loi 28 parle d'audace. Le candidat n'est pas audacieux, il est assuré.",
      "2": "La loi 25 parle de réinvention. Le candidat ne se réinvente pas, il se présente avec prestance.",
      "3": "La loi 30 cache l'effort. Le candidat ne cache rien, il projette de l'assurance royale."
    },
    difficulty: 2,
    tags: ["carrière", "attitude", "moderne"]
  },
  {
    id: "law_035_mod_crypto",
    type: "situation",
    question: "Un trader attend patiemment pendant des mois sans rien faire. Quand le marché s'effondre brutalement, il achète massivement et triple son investissement en trois semaines.",
    choices: [
      "Loi 35 : Maîtrisez l'art du timing",
      "Loi 23 : Concentrez vos forces",
      "Loi 28 : Faites preuve d'audace",
      "Loi 29 : Planifiez jusqu'à la fin"
    ],
    correctAnswer: 0,
    lawNumber: 35,
    lawTitle: "Maîtrisez l'art du timing",
    correctExplanation: "La patience stratégique transforme l'attente en arme. Savoir quand ne pas agir est aussi important que savoir quand frapper.",
    wrongExplanations: {
      "1": "La loi 23 concentre les forces. Le trader concentre son capital, mais la leçon est le timing parfait.",
      "2": "La loi 28 parle d'audace. L'achat massif est audacieux, mais c'est le timing qui crée l'opportunité.",
      "3": "La loi 29 planifie la fin. Le trader n'avait pas planifié le crash, il a su réagir au bon moment."
    },
    difficulty: 3,
    tags: ["finance", "timing", "moderne"]
  },
  {
    id: "law_037_mod_lancement",
    type: "situation",
    question: "Une entreprise organise un lancement de produit avec musique, lumières et une révélation dramatique du produit. Les réseaux sociaux explosent et le produit se vend en rupture.",
    choices: [
      "Loi 37 : Créez des spectacles convaincants",
      "Loi 6 : Attirez l'attention à tout prix",
      "Loi 30 : Faites paraître vos accomplissements sans effort",
      "Loi 34 : Soyez royal dans votre façon d'être"
    ],
    correctAnswer: 0,
    lawNumber: 37,
    lawTitle: "Créez des spectacles convaincants",
    correctExplanation: "Un spectacle bien orchestré crée une émotion collective qui transcende le produit lui-même. Les gens achètent l'expérience autant que l'objet.",
    wrongExplanations: {
      "1": "La loi 6 cherche l'attention. Le spectacle va au-delà de l'attention : il crée une conviction.",
      "2": "La loi 30 cache l'effort. Le lancement montre clairement l'effort et l'investissement.",
      "3": "La loi 34 concerne la posture royale. L'entreprise n'est pas royale, elle est spectaculaire."
    },
    difficulty: 2,
    tags: ["marketing", "spectacle", "moderne"]
  },
  {
    id: "law_038_mod_entreprise",
    type: "scenario",
    question: "Tu as des idées révolutionnaires pour transformer ton entreprise, mais la culture est très conservatrice. Comment procèdes-tu ?",
    choices: [
      "Loi 38 : Pensez comme vous voulez, comportez-vous comme les autres",
      "Loi 45 : Ne réformez jamais trop à la fois",
      "Loi 17 : Cultivez l'imprévisibilité",
      "Loi 28 : Faites preuve d'audace"
    ],
    correctAnswer: 0,
    lawNumber: 38,
    lawTitle: "Pensez comme vous voulez, comportez-vous comme les autres",
    correctExplanation: "Dans un environnement conservateur, afficher des idées radicales invite la résistance. Mieux vaut se conformer en apparence et introduire les changements subtilement.",
    wrongExplanations: {
      "1": "La loi 45 parle de réformer progressivement. Ici, la question est d'abord sur votre comportement, pas sur le rythme des réformes.",
      "2": "La loi 17 cultive l'imprévisibilité. Être imprévisible dans un environnement conservateur est dangereux.",
      "3": "La loi 28 encourage l'audace. L'audace dans une culture conservatrice risque de provoquer votre rejet."
    },
    difficulty: 3,
    tags: ["entreprise", "conformisme", "scénario"]
  },
  {
    id: "law_040_mod_gratuit",
    type: "situation",
    question: "Un client reçoit un produit gratuit d'une startup. Ravi, il recommande le produit partout. Six mois plus tard, le prix augmente de 300% et il est piégé dans l'écosystème.",
    choices: [
      "Loi 40 : Méprisez ce qui est gratuit",
      "Loi 31 : Contrôlez les options",
      "Loi 3 : Dissimulez vos intentions",
      "Loi 11 : Rendez les gens dépendants de vous"
    ],
    correctAnswer: 0,
    lawNumber: 40,
    lawTitle: "Méprisez ce qui est gratuit",
    correctExplanation: "La gratuité a toujours un prix caché. Dans ce cas, le client a payé avec sa dépendance et ses recommandations. Ce qui semble gratuit est souvent le piège le plus coûteux.",
    wrongExplanations: {
      "1": "La loi 31 contrôle les options. Le client avait le choix mais n'a pas vu le piège de la gratuité.",
      "2": "La loi 3 dissimule les intentions. La startup a été transparente sur le produit, mais pas sur le modèle économique.",
      "3": "La loi 11 crée de la dépendance. C'est une conséquence, mais la leçon pour le client est de se méfier du gratuit."
    },
    difficulty: 3,
    tags: ["technologie", "gratuité", "moderne"]
  },
  {
    id: "law_042_mod_syndicat",
    type: "situation",
    question: "Pour stopper une grève, la direction ne négocie pas avec les 500 grévistes mais identifie et satisfait les trois leaders syndicaux. La grève s'arrête en 24 heures.",
    choices: [
      "Loi 42 : Frappez le berger et les moutons se disperseront",
      "Loi 15 : Écrasez totalement l'ennemi",
      "Loi 43 : Travaillez sur le cœur et l'esprit",
      "Loi 12 : Utilisez la générosité sélective"
    ],
    correctAnswer: 0,
    lawNumber: 42,
    lawTitle: "Frappez le berger et les moutons se disperseront",
    correctExplanation: "Les mouvements collectifs sont portés par quelques leaders. En les ciblant (ici par la satisfaction, pas la destruction), on désorganise tout le groupe.",
    wrongExplanations: {
      "1": "La loi 15 détruit l'ennemi. La direction ne détruit pas, elle neutralise par la satisfaction.",
      "2": "La loi 43 gagne les cœurs de tous. La direction ne vise pas les 500 mais les 3 leaders.",
      "3": "La loi 12 utilise la générosité. Les concessions sont ciblées et stratégiques, pas de la générosité."
    },
    difficulty: 2,
    tags: ["travail", "leadership", "moderne"]
  },
  {
    id: "law_044_mod_commercial",
    type: "situation",
    question: "Un commercial adapte parfaitement son langage, ses références et son style vestimentaire à chaque client. Chacun a l'impression de parler à quelqu'un qui lui ressemble.",
    choices: [
      "Loi 44 : Utilisez l'effet miroir pour désarmer",
      "Loi 24 : Jouez le parfait courtisan",
      "Loi 3 : Dissimulez vos intentions",
      "Loi 14 : Posez-vous en ami, agissez en espion"
    ],
    correctAnswer: 0,
    lawNumber: 44,
    lawTitle: "Utilisez l'effet miroir pour désarmer",
    correctExplanation: "Le mimétisme crée de la confiance instantanée. Nous aimons ceux qui nous ressemblent. Le commercial exploite ce biais psychologique fondamental.",
    wrongExplanations: {
      "1": "La loi 24 concerne l'art de la cour. Le commercial ne flatte pas, il reflète.",
      "2": "La loi 3 cache les intentions. Le commercial n'a pas d'intention cachée complexe, il utilise le mimétisme.",
      "3": "La loi 14 espionne. Le commercial ne cherche pas d'informations, il crée de la proximité."
    },
    difficulty: 3,
    tags: ["vente", "psychologie", "moderne"]
  },
  {
    id: "law_045_mod_ceo",
    type: "situation",
    question: "Un nouveau CEO veut transformer l'entreprise. Au lieu d'imposer 20 changements, il en introduit un seul par trimestre. En deux ans, l'entreprise est méconnaissable.",
    choices: [
      "Loi 45 : Prêchez le changement mais ne réformez jamais trop à la fois",
      "Loi 29 : Planifiez jusqu'à la fin",
      "Loi 35 : Maîtrisez l'art du timing",
      "Loi 23 : Concentrez vos forces"
    ],
    correctAnswer: 0,
    lawNumber: 45,
    lawTitle: "Prêchez le changement mais ne réformez jamais trop à la fois",
    correctExplanation: "Le changement progressif est absorbé sans résistance. Chaque réforme isolée semble mineure, mais leur accumulation transforme tout en profondeur.",
    wrongExplanations: {
      "1": "La loi 29 planifie tout à l'avance. Le CEO a un plan, mais la leçon est le rythme progressif.",
      "2": "La loi 35 concerne le moment d'agir. Le CEO agit régulièrement, la leçon est la dose, pas le moment.",
      "3": "La loi 23 concentre les forces. Le CEO distribue ses changements, il ne les concentre pas."
    },
    difficulty: 2,
    tags: ["transformation", "leadership", "moderne"]
  },
  {
    id: "law_047_mod_sportif",
    type: "personnage",
    question: "Un champion de boxe, après une victoire magistrale, insiste pour un combat de trop contre un adversaire qu'il sous-estime. Il perd et détruit sa légende.",
    choices: [
      "Loi 47 : Ne dépassez pas la cible",
      "Loi 19 : Sachez à qui vous avez affaire",
      "Loi 35 : Maîtrisez l'art du timing",
      "Loi 29 : Planifiez jusqu'à la fin"
    ],
    correctAnswer: 0,
    lawNumber: 47,
    lawTitle: "Ne dépassez pas la cible : sachez vous arrêter après la victoire",
    correctExplanation: "Savoir quand s'arrêter est l'ultime sagesse. Le succès crée l'illusion d'invincibilité. Un combat de trop peut détruire une carrière entière.",
    wrongExplanations: {
      "1": "La loi 19 évalue les adversaires. Même s'il avait bien évalué son adversaire, le problème est d'avoir combattu de trop.",
      "2": "La loi 35 concerne le moment d'agir. Le champion a choisi un mauvais moment, mais la racine est l'excès d'ambition.",
      "3": "La loi 29 planifie la fin. Le champion ne manquait pas de plan mais de sagesse pour s'arrêter."
    },
    difficulty: 2,
    tags: ["sport", "excès", "personnage"]
  },
  {
    id: "law_048_mod_adaptabilite",
    type: "situation",
    question: "Une entreprise refuse de s'adapter au numérique, fidèle à son modèle historique. Un concurrent agile, sans héritage, la dépasse en deux ans en adoptant chaque nouvelle technologie.",
    choices: [
      "Loi 48 : Soyez sans forme",
      "Loi 41 : Évitez de marcher dans les traces d'un grand homme",
      "Loi 25 : Recréez-vous",
      "Loi 45 : Ne réformez pas trop à la fois"
    ],
    correctAnswer: 0,
    lawNumber: 48,
    lawTitle: "Soyez sans forme",
    correctExplanation: "L'attachement à une forme fixe (un modèle, une identité) est mortel dans un monde en mouvement. L'adaptabilité est la survie.",
    wrongExplanations: {
      "1": "La loi 41 parle d'ombre d'un prédécesseur. L'entreprise ne suit pas quelqu'un, elle est prisonnière de sa propre tradition.",
      "2": "La loi 25 concerne la réinvention personnelle. Ici, il s'agit d'adaptabilité organisationnelle, pas de réinvention d'identité.",
      "3": "La loi 45 parle de réformes progressives. Le problème ici est le refus total de changer, pas le rythme du changement."
    },
    difficulty: 3,
    tags: ["technologie", "adaptabilité", "moderne"]
  },
  {
    id: "law_004_cit_machiavel",
    type: "citation",
    question: "« Il est plus sûr d'être craint que d'être aimé, si l'on ne peut être les deux à la fois. »",
    choices: [
      "Loi 15 : Écrasez totalement l'ennemi",
      "Loi 17 : Cultivez l'imprévisibilité",
      "Loi 4 : Dites-en toujours moins que nécessaire",
      "Loi 34 : Soyez royal dans votre façon d'être"
    ],
    correctAnswer: 2,
    lawNumber: 4,
    lawTitle: "Dites-en toujours moins que nécessaire",
    correctExplanation: "Machiavel comprend que le silence et la retenue créent de la distance et du respect. Celui qui parle peu inspire à la fois le mystère et la crainte.",
    wrongExplanations: {
      "0": "La loi 15 détruit l'ennemi. La citation parle de crainte, pas de destruction.",
      "1": "La loi 17 cultive l'imprévisibilité. La citation parle de crainte et d'amour, pas d'imprévisibilité.",
      "3": "La loi 34 concerne la posture royale. La citation est plus sur la dynamique pouvoir/crainte."
    },
    difficulty: 4,
    tags: ["citation", "Machiavel", "pouvoir"]
  },
  {
    id: "law_006_cit_sunzi",
    type: "citation",
    question: "« Toute guerre est fondée sur la tromperie. Quand vous êtes capable, feignez l'incapacité. »",
    choices: [
      "Loi 21 : Jouez les idiots pour attraper les idiots",
      "Loi 3 : Dissimulez vos intentions",
      "Loi 6 : Attirez l'attention à tout prix",
      "Loi 48 : Soyez sans forme"
    ],
    correctAnswer: 1,
    lawNumber: 3,
    lawTitle: "Dissimulez vos intentions",
    correctExplanation: "Sun Tzu enseigne que la guerre repose sur la dissimulation. Cacher ses forces et ses intentions est la base de toute stratégie victorieuse.",
    wrongExplanations: {
      "0": "La loi 21 feint la bêtise. Feindre l'incapacité est similaire mais la citation parle de dissimulation globale, pas juste de bêtise.",
      "2": "La loi 6 attire l'attention. La citation parle du contraire : cacher, pas montrer.",
      "3": "La loi 48 parle d'absence de forme. La citation parle de tromperie active, pas de fluidité."
    },
    difficulty: 3,
    tags: ["citation", "Sun Tzu", "guerre"]
  },
  {
    id: "law_010_cit_association",
    type: "citation",
    question: "« Dis-moi qui tu fréquentes, je te dirai qui tu es. »",
    choices: [
      "Loi 10 : Évitez les malchanceux et les malheureux",
      "Loi 2 : Ne vous fiez pas à vos amis",
      "Loi 18 : Ne construisez pas de forteresses",
      "Loi 14 : Posez-vous en ami, agissez en espion"
    ],
    correctAnswer: 0,
    lawNumber: 10,
    lawTitle: "Évitez les malchanceux et les malheureux",
    correctExplanation: "Nos fréquentations définissent notre trajectoire. S'entourer de personnes négatives ou malchanceuses contamine notre propre destin par association.",
    wrongExplanations: {
      "1": "La loi 2 met en garde contre les amis traîtres. La citation parle d'association en général, pas de trahison.",
      "2": "La loi 18 parle d'isolement. La citation ne parle pas d'isolement mais de qualité des fréquentations.",
      "3": "La loi 14 espionne via l'amitié. La citation ne parle pas d'espionnage."
    },
    difficulty: 1,
    tags: ["citation", "association", "proverbe"]
  },
  {
    id: "law_016_cit_absence",
    type: "citation",
    question: "« L'absence diminue les médiocres passions et augmente les grandes, comme le vent éteint les bougies et allume le feu. »",
    choices: [
      "Loi 36 : Dédaignez ce que vous ne pouvez avoir",
      "Loi 16 : Utilisez l'absence pour augmenter le respect",
      "Loi 47 : Ne dépassez pas la cible",
      "Loi 20 : Ne vous engagez envers personne"
    ],
    correctAnswer: 1,
    lawNumber: 16,
    lawTitle: "Utilisez l'absence pour augmenter le respect et l'honneur",
    correctExplanation: "L'absence est un amplificateur. Si votre valeur est grande, l'absence la rend plus désirable. La rareté crée la préciosité.",
    wrongExplanations: {
      "0": "La loi 36 méprise l'inaccessible. La citation parle de l'effet de l'absence sur les autres, pas de dédain.",
      "2": "La loi 47 parle de s'arrêter après victoire. La citation n'est pas liée à la victoire mais à la présence/absence.",
      "3": "La loi 20 refuse l'engagement. L'absence stratégique n'est pas du non-engagement."
    },
    difficulty: 2,
    tags: ["citation", "absence", "La Rochefoucauld"]
  },
  {
    id: "law_028_cit_audace",
    type: "citation",
    question: "« La fortune sourit aux audacieux. »",
    choices: [
      "Loi 28 : Faites preuve d'audace",
      "Loi 35 : Maîtrisez l'art du timing",
      "Loi 17 : Cultivez l'imprévisibilité",
      "Loi 23 : Concentrez vos forces"
    ],
    correctAnswer: 0,
    lawNumber: 28,
    lawTitle: "Faites preuve d'audace",
    correctExplanation: "La chance favorise ceux qui osent agir. L'audace crée des opportunités que la timidité ne verra jamais.",
    wrongExplanations: {
      "1": "La loi 35 concerne le timing. L'audace et le timing sont différents : l'un est du courage, l'autre de la patience.",
      "2": "La loi 17 cultive l'imprévisibilité. L'audace n'est pas de l'imprévisibilité mais du courage.",
      "3": "La loi 23 concentre les forces. L'audace est une attitude, pas une allocation de ressources."
    },
    difficulty: 1,
    tags: ["citation", "audace", "proverbe"]
  },
  {
    id: "law_007_pers_edison",
    type: "personnage",
    question: "Thomas Edison est crédité de l'invention de l'ampoule électrique, mais ce sont ses assistants qui ont réalisé la majorité des expériences et des découvertes techniques.",
    choices: [
      "Loi 7 : Laissez les autres travailler pour vous",
      "Loi 26 : Gardez les mains propres",
      "Loi 30 : Faites paraître vos accomplissements sans effort",
      "Loi 11 : Rendez les gens dépendants de vous"
    ],
    correctAnswer: 0,
    lawNumber: 7,
    lawTitle: "Laissez les autres travailler pour vous, mais gardez le mérite",
    correctExplanation: "Edison était un génie de la gestion autant que de l'invention. Il organisait le travail des autres et s'appropriait les résultats collectifs. Son nom est resté, pas celui de ses assistants.",
    wrongExplanations: {
      "1": "La loi 26 cache le sale travail. Ici, le travail n'est pas sale, c'est de l'innovation légitime.",
      "2": "La loi 30 cache l'effort. Edison ne cachait pas l'effort, il s'appropriait celui des autres.",
      "3": "La loi 11 crée de la dépendance. Les assistants n'étaient pas dépendants d'Edison par manipulation."
    },
    difficulty: 2,
    tags: ["invention", "mérite", "personnage"]
  },
  {
    id: "law_022_pers_gandhi",
    type: "personnage",
    question: "Gandhi, face à l'Empire britannique infiniment plus puissant, a choisi la non-violence et la résistance passive. Cette apparente soumission a fini par briser la domination coloniale.",
    choices: [
      "Loi 22 : Utilisez la tactique de la capitulation",
      "Loi 9 : Gagnez par vos actes",
      "Loi 43 : Travaillez sur le cœur et l'esprit",
      "Loi 36 : Dédaignez ce que vous ne pouvez avoir"
    ],
    correctAnswer: 0,
    lawNumber: 22,
    lawTitle: "Utilisez la tactique de la capitulation",
    correctExplanation: "La non-violence de Gandhi n'était pas de la faiblesse mais une capitulation stratégique. En refusant la violence, il a retourné la force de l'Empire contre lui-même.",
    wrongExplanations: {
      "1": "La loi 9 gagne par les actes. Les actes de Gandhi étaient de la résistance passive, une forme de capitulation stratégique.",
      "2": "La loi 43 gagne les cœurs. C'est vrai, mais le mécanisme fondamental est la capitulation comme arme.",
      "3": "La loi 36 méprise l'inaccessible. Gandhi ne méprisait pas le pouvoir britannique, il le minait."
    },
    difficulty: 3,
    tags: ["histoire", "non-violence", "personnage"]
  },
  {
    id: "law_026_mod_politique2",
    type: "situation",
    question: "Un PDG fait licencier un directeur incompétent mais laisse le département RH annoncer et exécuter la décision. Il apparaît comme étranger à l'affaire.",
    choices: [
      "Loi 26 : Gardez les mains propres",
      "Loi 42 : Frappez le berger",
      "Loi 7 : Laissez les autres travailler pour vous",
      "Loi 20 : Ne vous engagez envers personne"
    ],
    correctAnswer: 0,
    lawNumber: 26,
    lawTitle: "Gardez les mains propres",
    correctExplanation: "En déléguant l'exécution des décisions impopulaires, le PDG préserve son image. Les RH absorbent le ressentiment tandis qu'il reste au-dessus de la mêlée.",
    wrongExplanations: {
      "1": "La loi 42 frappe le leader. Ici, le licenciement n'est pas une frappe chirurgicale mais une décision cachée.",
      "2": "La loi 7 prend le mérite du travail. Le PDG ne prend pas le mérite, il évite le blâme.",
      "3": "La loi 20 refuse l'engagement. Le PDG est engagé dans la décision, il en masque juste l'exécution."
    },
    difficulty: 2,
    tags: ["management", "délégation", "moderne"]
  },
  {
    id: "law_029_mod_projet",
    type: "scenario",
    question: "Tu remportes un appel d'offres important. Tu es euphorique. Avant de célébrer, que devrais-tu faire ?",
    choices: [
      "Loi 29 : Planifiez jusqu'à la fin",
      "Loi 47 : Ne dépassez pas la cible",
      "Loi 30 : Faites paraître vos accomplissements sans effort",
      "Loi 16 : Utilisez l'absence"
    ],
    correctAnswer: 0,
    lawNumber: 29,
    lawTitle: "Planifiez jusqu'à la fin",
    correctExplanation: "Gagner l'appel d'offres n'est que le début. Sans plan d'exécution, de livraison et de gestion client, la victoire peut se transformer en catastrophe.",
    wrongExplanations: {
      "1": "La loi 47 parle de s'arrêter. Tu ne dois pas t'arrêter mais planifier la suite.",
      "2": "La loi 30 cache l'effort. Le moment n'est pas à l'apparence mais à la préparation concrète.",
      "3": "La loi 16 utilise l'absence. Disparaître après avoir gagné un contrat serait contre-productif."
    },
    difficulty: 2,
    tags: ["business", "planification", "scénario"]
  },
  {
    id: "law_031_mod_menu",
    type: "situation",
    question: "Un restaurant propose deux menus : le classique à 25€ et le prestige à 45€. La plupart choisissent le prestige, ne sachant pas que c'est celui que le chef voulait vendre depuis le début.",
    choices: [
      "Loi 31 : Contrôlez les options",
      "Loi 3 : Dissimulez vos intentions",
      "Loi 32 : Jouez sur les fantasmes",
      "Loi 40 : Méprisez ce qui est gratuit"
    ],
    correctAnswer: 0,
    lawNumber: 31,
    lawTitle: "Contrôlez les options",
    correctExplanation: "En proposant deux options dont une clairement inférieure, le restaurant oriente le choix vers l'option souhaitée. Le client croit choisir librement.",
    wrongExplanations: {
      "1": "La loi 3 cache les intentions. Le restaurant ne cache rien, il structure le choix.",
      "2": "La loi 32 joue sur les fantasmes. Le client ne fantasme pas, il compare rationnellement deux options biaisées.",
      "3": "La loi 40 méprise le gratuit. Rien n'est gratuit ici, les deux options sont payantes."
    },
    difficulty: 2,
    tags: ["commerce", "choix", "moderne"]
  },
  {
    id: "law_032_mod_immobilier",
    type: "situation",
    question: "Un agent immobilier montre d'abord un appartement médiocre et cher, puis un bon appartement au même prix. Le second paraît exceptionnel par comparaison.",
    choices: [
      "Loi 32 : Jouez sur les fantasmes des gens",
      "Loi 31 : Contrôlez les options",
      "Loi 3 : Dissimulez vos intentions",
      "Loi 21 : Jouez les idiots"
    ],
    correctAnswer: 1,
    lawNumber: 31,
    lawTitle: "Contrôlez les options",
    correctExplanation: "L'agent manipule la perception en contrôlant l'ordre et la qualité des options présentées. Le contraste fait paraître l'option souhaitée bien meilleure.",
    wrongExplanations: {
      "0": "La loi 32 joue sur les fantasmes. L'agent ne crée pas de fantasme mais un contraste perceptif.",
      "2": "La loi 3 dissimule les intentions. L'intention de vendre est évidente, c'est la méthode qui est subtile.",
      "3": "La loi 21 feint la bêtise. L'agent ne feint pas l'ignorance, il organise les visites stratégiquement."
    },
    difficulty: 3,
    tags: ["immobilier", "perception", "moderne"]
  },
  {
    id: "law_036_mod_critique",
    type: "scenario",
    question: "Un collègue te critique sur les réseaux sociaux de l'entreprise. Tout le monde a vu son commentaire. Comment réagis-tu ?",
    choices: [
      "Loi 36 : Dédaignez ce que vous ne pouvez avoir",
      "Loi 5 : Protégez votre réputation",
      "Loi 39 : Agitez les eaux",
      "Loi 15 : Écrasez totalement l'ennemi"
    ],
    correctAnswer: 0,
    lawNumber: 36,
    lawTitle: "Dédaignez ce que vous ne pouvez avoir",
    correctExplanation: "En ignorant la provocation avec élégance, tu montres que l'attaque ne t'atteint pas. Le collègue paraît mesquin tandis que tu gardes ta dignité.",
    wrongExplanations: {
      "1": "La loi 5 protège la réputation. Ici, répondre publiquement donnerait plus de visibilité à la critique.",
      "2": "La loi 39 provoque une réaction. Provoquer en retour créerait un conflit visible et nuisible.",
      "3": "La loi 15 détruit l'ennemi. Écraser un collègue pour un commentaire serait disproportionné et mal vu."
    },
    difficulty: 3,
    tags: ["travail", "critique", "scénario"]
  },
  {
    id: "law_041_mod_heritage",
    type: "situation",
    question: "Le fils d'un grand chef étoilé reprend le restaurant familial en copiant exactement les recettes de son père. Les critiques le comparent défavorablement et le restaurant perd une étoile.",
    choices: [
      "Loi 41 : Évitez de marcher dans les traces d'un grand homme",
      "Loi 1 : Ne surpassez jamais le maître",
      "Loi 25 : Recréez-vous",
      "Loi 48 : Soyez sans forme"
    ],
    correctAnswer: 0,
    lawNumber: 41,
    lawTitle: "Évitez de marcher dans les traces d'un grand homme",
    correctExplanation: "En imitant son père, le fils invite la comparaison et perd toujours. Il aurait dû créer sa propre identité culinaire pour être jugé sur ses propres mérites.",
    wrongExplanations: {
      "1": "La loi 1 concerne un supérieur vivant. Le père n'est plus au restaurant, c'est son ombre qui reste.",
      "2": "La loi 25 parle de réinvention. Le fils n'a pas tenté de se réinventer, il a copié.",
      "3": "La loi 48 parle de fluidité. Le problème n'est pas l'adaptabilité mais l'imitation servile."
    },
    difficulty: 2,
    tags: ["héritage", "gastronomie", "moderne"]
  },
  {
    id: "law_043_mod_acquisition",
    type: "situation",
    question: "Après un rachat d'entreprise, le nouveau propriétaire conserve tous les employés, maintient la culture d'entreprise et investit dans le bien-être. La productivité explose.",
    choices: [
      "Loi 43 : Travaillez sur le cœur et l'esprit des gens",
      "Loi 12 : Utilisez la générosité sélective",
      "Loi 22 : Utilisez la tactique de la capitulation",
      "Loi 11 : Rendez les gens dépendants de vous"
    ],
    correctAnswer: 0,
    lawNumber: 43,
    lawTitle: "Travaillez sur le cœur et l'esprit des gens",
    correctExplanation: "Gagner les cœurs des employés crée une loyauté authentique bien plus puissante que la peur ou la contrainte. L'investissement humain génère un retour exponentiel.",
    wrongExplanations: {
      "1": "La loi 12 utilise la générosité comme ruse. Ici, c'est une stratégie de fond, pas une tactique ponctuelle.",
      "2": "La loi 22 capitule face à un adversaire. Il n'y a pas de capitulation ici, mais de la bienveillance stratégique.",
      "3": "La loi 11 crée de la dépendance. Le propriétaire ne cherche pas la dépendance mais l'adhésion volontaire."
    },
    difficulty: 2,
    tags: ["management", "rachat", "moderne"]
  },
  {
    id: "law_046_mod_reseaux",
    type: "situation",
    question: "Sur les réseaux sociaux, un entrepreneur partage ses échecs et ses doutes autant que ses succès. Sa communauté grandit trois fois plus vite que celle de ses concurrents « parfaits ».",
    choices: [
      "Loi 46 : Ne paraissez jamais trop parfait",
      "Loi 6 : Attirez l'attention à tout prix",
      "Loi 25 : Recréez-vous",
      "Loi 27 : Exploitez le besoin de croire"
    ],
    correctAnswer: 0,
    lawNumber: 46,
    lawTitle: "Ne paraissez jamais trop parfait",
    correctExplanation: "La vulnérabilité authentique crée de la connexion. Les gens se méfient de la perfection mais adorent l'humanité. Montrer ses failles est paradoxalement une force.",
    wrongExplanations: {
      "1": "La loi 6 cherche l'attention. Le but ici n'est pas l'attention mais l'authenticité relationnelle.",
      "2": "La loi 25 se réinvente. L'entrepreneur ne se réinvente pas, il est transparent.",
      "3": "La loi 27 exploite le besoin de croire. L'entrepreneur ne crée pas un culte mais de la confiance."
    },
    difficulty: 2,
    tags: ["réseaux sociaux", "authenticité", "moderne"]
  },
  {
    id: "law_008_pers_bezos",
    type: "personnage",
    question: "Jeff Bezos a créé Amazon Marketplace, forçant les vendeurs du monde entier à venir sur sa plateforme plutôt que de chercher ses propres clients.",
    choices: [
      "Loi 8 : Obligez les autres à venir à vous",
      "Loi 11 : Rendez les gens dépendants de vous",
      "Loi 31 : Contrôlez les options",
      "Loi 23 : Concentrez vos forces"
    ],
    correctAnswer: 0,
    lawNumber: 8,
    lawTitle: "Obligez les autres à venir à vous",
    correctExplanation: "En créant la plateforme dominante, Bezos a inversé la dynamique : ce sont les vendeurs qui viennent à lui, pas l'inverse. Il contrôle le terrain de jeu.",
    wrongExplanations: {
      "1": "La loi 11 crée de la dépendance. C'est une conséquence, mais le mécanisme est d'abord d'attirer les autres sur son territoire.",
      "2": "La loi 31 contrôle les options. Bezos ne limite pas les choix, il crée un point de passage obligé.",
      "3": "La loi 23 concentre les forces. Bezos n'a pas concentré mais créé un écosystème attractif."
    },
    difficulty: 3,
    tags: ["technologie", "plateforme", "personnage"]
  },
  {
    id: "law_012_mod_gratuit2",
    type: "situation",
    question: "Un consultant offre gratuitement un audit complet à un prospect. L'audit révèle tellement de problèmes que le prospect, reconnaissant et inquiet, signe un contrat premium.",
    choices: [
      "Loi 12 : Utilisez la générosité sélective",
      "Loi 9 : Gagnez par vos actes",
      "Loi 33 : Découvrez le point faible",
      "Loi 13 : Faites appel à l'intérêt personnel"
    ],
    correctAnswer: 0,
    lawNumber: 12,
    lawTitle: "Utilisez l'honnêteté et la générosité sélective pour désarmer",
    correctExplanation: "L'audit gratuit est un acte de générosité stratégique. Il crée une dette morale et démontre l'expertise, tout en révélant le besoin du client.",
    wrongExplanations: {
      "1": "La loi 9 gagne par les actes. L'audit est un acte, mais le mécanisme est la générosité qui désarme.",
      "2": "La loi 33 cherche les faiblesses. L'audit ne cherche pas les faiblesses du prospect mais celles de son entreprise.",
      "3": "La loi 13 fait appel à l'intérêt. Le prospect agit par reconnaissance et inquiétude, pas par pur intérêt."
    },
    difficulty: 3,
    tags: ["consulting", "générosité", "moderne"]
  },
  {
    id: "law_014_mod_networking",
    type: "scenario",
    question: "Lors d'un événement de networking, tu te retrouves à côté du directeur de la société que tu veux intégrer. Comment te comportes-tu ?",
    choices: [
      "Loi 14 : Posez-vous en ami, agissez en espion",
      "Loi 28 : Faites preuve d'audace",
      "Loi 24 : Jouez le parfait courtisan",
      "Loi 4 : Dites-en moins que nécessaire"
    ],
    correctAnswer: 0,
    lawNumber: 14,
    lawTitle: "Posez-vous en ami, agissez en espion",
    correctExplanation: "En posant des questions amicales et naturelles, tu obtiens des informations précieuses sur l'entreprise, sa culture, ses besoins, tout en créant un lien positif.",
    wrongExplanations: {
      "1": "La loi 28 encourage l'audace. Être trop direct avec un directeur pourrait être maladroit.",
      "2": "La loi 24 flatte. La flatterie peut paraître suspecte dans un cadre informel.",
      "3": "La loi 4 parle peu. Trop de silence empêcherait de créer le lien et d'obtenir les informations."
    },
    difficulty: 2,
    tags: ["networking", "carrière", "scénario"]
  },
  {
    id: "law_019_mod_email",
    type: "situation",
    question: "Un employé envoie un email sarcastique à un collègue qu'il prend pour un simple stagiaire. Ce « stagiaire » est en réalité le fils du PDG, en immersion dans l'entreprise.",
    choices: [
      "Loi 19 : Sachez à qui vous avez affaire",
      "Loi 46 : Ne paraissez jamais trop parfait",
      "Loi 38 : Comportez-vous comme les autres",
      "Loi 4 : Dites-en moins que nécessaire"
    ],
    correctAnswer: 0,
    lawNumber: 19,
    lawTitle: "Sachez à qui vous avez affaire",
    correctExplanation: "Traiter quelqu'un avec mépris sans connaître son identité réelle est extrêmement dangereux. Le pouvoir n'est pas toujours visible.",
    wrongExplanations: {
      "1": "La loi 46 concerne l'apparence de perfection. L'employé n'est pas parfait, il est imprudent.",
      "2": "La loi 38 parle de conformisme. L'email sarcastique n'est pas un problème de conformisme.",
      "3": "La loi 4 parle de brièveté. L'email n'est pas trop long, il est trop irrespectueux."
    },
    difficulty: 1,
    tags: ["entreprise", "prudence", "moderne"]
  },
  {
    id: "law_021_mod_vente",
    type: "situation",
    question: "Un négociateur feint de ne pas comprendre les termes techniques d'un contrat. Son interlocuteur, le prenant pour un novice, révèle des clauses cachées en les expliquant.",
    choices: [
      "Loi 21 : Jouez les idiots pour attraper les idiots",
      "Loi 14 : Posez-vous en ami, agissez en espion",
      "Loi 3 : Dissimulez vos intentions",
      "Loi 33 : Découvrez le point faible"
    ],
    correctAnswer: 0,
    lawNumber: 21,
    lawTitle: "Jouez les idiots pour attraper les idiots",
    correctExplanation: "En feignant l'ignorance, le négociateur désarme son interlocuteur qui se sent en confiance et révèle des informations qu'il aurait normalement cachées.",
    wrongExplanations: {
      "1": "La loi 14 espionne via l'amitié. Ici, c'est la fausse incompétence, pas la fausse amitié.",
      "2": "La loi 3 cache un objectif. La technique spécifique est la feinte d'ignorance.",
      "3": "La loi 33 cherche une faiblesse. Le négociateur cherche des informations contractuelles, pas une faiblesse personnelle."
    },
    difficulty: 3,
    tags: ["négociation", "feinte", "moderne"]
  },
  {
    id: "law_024_mod_collegue",
    type: "scenario",
    question: "Ton directeur présente une idée médiocre en réunion. Tous les collègues acquiescent. Toi, tu sais que l'idée est mauvaise. Que fais-tu ?",
    choices: [
      "Loi 24 : Jouez le parfait courtisan",
      "Loi 1 : Ne surpassez jamais le maître",
      "Loi 9 : Gagnez par vos actes",
      "Loi 38 : Pensez comme vous voulez, comportez-vous comme les autres"
    ],
    correctAnswer: 0,
    lawNumber: 24,
    lawTitle: "Jouez le parfait courtisan",
    correctExplanation: "Le bon courtisan ne contredit pas en public. Après la réunion, en privé, tu peux suggérer des « améliorations » qui transforment subtilement l'idée médiocre en bonne idée.",
    wrongExplanations: {
      "1": "La loi 1 ne surpasse pas. Ici, tu ne surpasses pas mais tu navigues socialement.",
      "2": "La loi 9 agit plutôt que parler. Tu ne peux pas agir seul ici, tu dois d'abord naviguer politiquement.",
      "3": "La loi 38 se conforme. Se conformer est trop passif. Le courtisan influence subtilement."
    },
    difficulty: 4,
    tags: ["réunion", "politique", "scénario"]
  },
  {
    id: "law_039_mod_concurrent2",
    type: "situation",
    question: "Un directeur commercial envoie de fausses offres agressives pour pousser un concurrent à baisser ses prix en panique. Le concurrent, furieux, brade ses produits et perd sa marge.",
    choices: [
      "Loi 39 : Agitez les eaux pour faire sortir les poissons",
      "Loi 3 : Dissimulez vos intentions",
      "Loi 17 : Cultivez l'imprévisibilité",
      "Loi 15 : Écrasez totalement l'ennemi"
    ],
    correctAnswer: 0,
    lawNumber: 39,
    lawTitle: "Agitez les eaux pour faire sortir les poissons",
    correctExplanation: "La provocation a poussé le concurrent à réagir émotionnellement, sacrifiant ses marges. Les décisions prises sous l'émotion sont rarement bonnes.",
    wrongExplanations: {
      "1": "La loi 3 dissimule les intentions. Les offres sont une provocation ouverte, pas de la dissimulation.",
      "2": "La loi 17 cultive l'imprévisibilité. Les fausses offres sont prévisibles dans leur intention provocatrice.",
      "3": "La loi 15 détruit l'ennemi. Le concurrent n'est pas détruit, il s'est auto-infligé des dégâts."
    },
    difficulty: 4,
    tags: ["commerce", "provocation", "moderne"]
  }
];
