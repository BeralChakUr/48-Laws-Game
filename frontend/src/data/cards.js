export const cards = [
  {
    id: "law_001_sit_assistant",
    type: "situation",
    question: "Un conseiller brillant propose publiquement une strategie plus intelligente que celle de son superieur. Le superieur le congedie peu apres.",
    choices: [
      "Loi 1 : Ne surpassez jamais le maitre",
      "Loi 4 : Dites-en toujours moins que necessaire",
      "Loi 24 : Jouez le parfait courtisan",
      "Loi 46 : Ne paraissez jamais trop parfait"
    ],
    correctAnswer: 0,
    lawNumber: 1,
    lawTitle: "Ne surpassez jamais le maitre",
    correctExplanation: "En eclipsant publiquement son superieur, le conseiller a viole la premiere loi. Celui qui detient le pouvoir ne tolere pas d'etre humilie, meme par la competence.",
    wrongExplanations: {
      "1": "La loi 4 concerne la discretion dans les paroles, pas la competition directe avec un superieur.",
      "2": "La loi 24 parle de l'art de la cour et de la flatterie, pas de l'erreur de surpasser son maitre.",
      "3": "La loi 46 concerne l'apparence de perfection en general, mais ici le probleme est specifiquement de faire de l'ombre au maitre."
    },
    difficulty: 1,
    tags: ["hierarchie", "pouvoir", "prudence"]
  },
  {
    id: "law_002_hist_cesar",
    type: "historical_event",
    question: "Jules Cesar est assassine par Brutus, son protege et ami proche, qui participe au complot contre lui.",
    choices: [
      "Loi 15 : Ecrasez totalement l'ennemi",
      "Loi 2 : Ne vous fiez pas a vos amis, utilisez vos ennemis",
      "Loi 19 : Sachez a qui vous avez affaire",
      "Loi 17 : Cultivez un air d'imprevisibilite"
    ],
    correctAnswer: 1,
    lawNumber: 2,
    lawTitle: "Ne vous fiez pas a vos amis, utilisez vos ennemis",
    correctExplanation: "Cesar a fait confiance a Brutus justement parce qu'il etait son ami. Mais les amis sont souvent ceux qui trahissent, car ils envient en secret. Un ancien ennemi, lui, aurait eu davantage a prouver.",
    wrongExplanations: {
      "0": "La loi 15 parle de destruction totale d'un adversaire deja identifie. Ici, le probleme est l'incapacite a identifier la menace venant d'un proche.",
      "2": "La loi 19 concerne l'evaluation des gens avant d'agir. Bien que pertinente, le coeur du sujet est la confiance mal placee dans un ami.",
      "3": "La loi 17 parle de garder les autres dans l'incertitude. Ici, c'est Cesar qui a ete surpris, pas l'inverse."
    },
    difficulty: 1,
    tags: ["trahison", "amitie", "histoire"]
  },
  {
    id: "law_003_event_trojan",
    type: "historical_event",
    question: "Un stratege utilise un faux cadeau pour infiltrer une ville ennemie. La cible, trompee par l'apparence genereuse du geste, ouvre ses portes.",
    choices: [
      "Loi 1 : Ne surpassez jamais le maitre",
      "Loi 3 : Dissimulez vos intentions",
      "Loi 6 : Attirez l'attention a tout prix",
      "Loi 15 : Ecrasez totalement l'ennemi"
    ],
    correctAnswer: 1,
    lawNumber: 3,
    lawTitle: "Dissimulez vos intentions",
    correctExplanation: "Cette action repose sur la tromperie. Le vrai objectif est masque jusqu'au moment ou il est trop tard pour reagir. C'est l'essence de la loi 3.",
    wrongExplanations: {
      "0": "La loi 1 concerne la relation avec une figure dominante. Ici, le sujet est la dissimulation strategique.",
      "2": "La loi 6 concerne la visibilite et l'attention publique. Ici, la reussite depend justement de la discretion.",
      "3": "La loi 15 parle de destruction totale d'un adversaire. Ici, le mecanisme central n'est pas l'ecrasement, mais le camouflage."
    },
    difficulty: 2,
    tags: ["tromperie", "strategie", "histoire"]
  },
  {
    id: "law_004_cit_silence",
    type: "citation",
    question: "\"Plus vous en dites, plus vous paraissez ordinaire et moins vous semblez maitriser la situation.\"",
    choices: [
      "Loi 4 : Dites-en toujours moins que necessaire",
      "Loi 9 : Gagnez par vos actes, pas par la discussion",
      "Loi 21 : Jouez les idiots pour attraper les idiots",
      "Loi 38 : Pensez comme vous voulez, comportez-vous comme les autres"
    ],
    correctAnswer: 0,
    lawNumber: 4,
    lawTitle: "Dites-en toujours moins que necessaire",
    correctExplanation: "Le silence et la brievete creent un aura de mystere et de puissance. Ceux qui parlent peu semblent maitriser davantage la situation.",
    wrongExplanations: {
      "1": "La loi 9 oppose les actes aux arguments. Ici, il s'agit specifiquement de la quantite de paroles, pas d'action contre discussion.",
      "2": "La loi 21 parle de feindre l'ignorance pour pieger les autres. La citation ne parle pas de ruse mais de retenue verbale.",
      "3": "La loi 38 concerne le conformisme apparent. Ici, il s'agit de parler moins, pas de se conformer."
    },
    difficulty: 1,
    tags: ["silence", "communication", "mystere"]
  },
  {
    id: "law_005_sit_rumeur",
    type: "situation",
    question: "Un dirigeant decouvre qu'un concurrent repand des rumeurs sur son integrite. Il decide de repondre immediatement et publiquement pour proteger son image.",
    choices: [
      "Loi 36 : Dedaignez ce que vous ne pouvez avoir",
      "Loi 5 : Protegez votre reputation a tout prix",
      "Loi 9 : Gagnez par vos actes, pas par la discussion",
      "Loi 39 : Agitez les eaux pour faire sortir les poissons"
    ],
    correctAnswer: 1,
    lawNumber: 5,
    lawTitle: "Protegez votre reputation a tout prix",
    correctExplanation: "La reputation est la pierre angulaire du pouvoir. Quand elle est attaquee, il faut reagir avec force et rapidite. Laisser une rumeur se propager est une erreur strategique majeure.",
    wrongExplanations: {
      "0": "La loi 36 conseille de mepriser ce qui est hors de portee. Ici, la reputation est directement menacee et merite une defense active.",
      "2": "La loi 9 valorise les actes sur les mots, mais dans ce cas, une reponse publique rapide est necessaire pour contrer la desinformation.",
      "3": "La loi 39 parle de provoquer l'adversaire pour le demasquer. Ici, l'objectif est defensif : proteger son image."
    },
    difficulty: 2,
    tags: ["reputation", "defense", "image"]
  },
  {
    id: "law_006_pers_dali",
    type: "personnage",
    question: "Salvador Dali cultivait une image excentrique, portant des moustaches extravagantes et faisant des apparitions publiques theatrales pour rester au centre de l'attention.",
    choices: [
      "Loi 6 : Attirez l'attention a tout prix",
      "Loi 25 : Recreez-vous",
      "Loi 37 : Creez des spectacles convaincants",
      "Loi 34 : Soyez royal dans votre facon d'etre"
    ],
    correctAnswer: 0,
    lawNumber: 6,
    lawTitle: "Attirez l'attention a tout prix",
    correctExplanation: "Dali comprenait que dans le monde de l'art, l'invisibilite est la mort. Il utilisait chaque apparition pour attirer les regards, meme au prix de la controverse.",
    wrongExplanations: {
      "1": "La loi 25 parle de reinventer son identite. Dali a maintenu la meme persona excentrique tout au long de sa carriere.",
      "2": "La loi 37 concerne la creation de spectacles visuels pour convaincre. Ici, l'objectif principal est l'attention, pas la persuasion.",
      "3": "La loi 34 concerne la dignite et la prestance royale. L'excentricite de Dali est l'oppose de la gravite royale."
    },
    difficulty: 1,
    tags: ["attention", "art", "personnalite"]
  },
  {
    id: "law_007_sit_merite",
    type: "situation",
    question: "Un manager presente le travail de son equipe comme le sien lors d'une reunion avec la direction, recoltant les eloges et une promotion.",
    choices: [
      "Loi 7 : Laissez les autres travailler pour vous",
      "Loi 26 : Gardez les mains propres",
      "Loi 11 : Rendez les gens dependants de vous",
      "Loi 30 : Faites paraitre vos accomplissements sans effort"
    ],
    correctAnswer: 0,
    lawNumber: 7,
    lawTitle: "Laissez les autres travailler pour vous, mais gardez le merite",
    correctExplanation: "C'est l'application directe de cette loi : utiliser le talent des autres pour avancer, tout en s'appropriant les resultats. L'histoire est pleine de leaders qui ont prospere ainsi.",
    wrongExplanations: {
      "1": "La loi 26 concerne l'utilisation d'intermediaires pour le sale travail. Ici, il s'agit d'appropriation du merite, pas de dissimulation de fautes.",
      "2": "La loi 11 parle de creer de la dependance. Le manager ici ne rend pas la direction dependante, il prend le credit.",
      "3": "La loi 30 parle de paraitre naturellement doue. Ici, le manager ne feint pas l'aisance mais s'attribue directement le travail."
    },
    difficulty: 1,
    tags: ["merite", "manipulation", "travail"]
  },
  {
    id: "law_008_sit_appat",
    type: "situation",
    question: "Un negociateur refuse de se deplacer chez son adversaire et insiste pour que toute rencontre se fasse sur son propre territoire, donnant l'impression d'etre en position de force.",
    choices: [
      "Loi 8 : Obligez les autres a venir a vous",
      "Loi 35 : Maitrisez l'art du timing",
      "Loi 20 : Ne vous engagez envers personne",
      "Loi 39 : Agitez les eaux pour faire sortir les poissons"
    ],
    correctAnswer: 0,
    lawNumber: 8,
    lawTitle: "Obligez les autres a venir a vous",
    correctExplanation: "En forcant l'autre a se deplacer, vous controlez l'environnement et la dynamique de pouvoir. Celui qui vient a vous est deja dans une posture de demandeur.",
    wrongExplanations: {
      "1": "La loi 35 concerne le choix du bon moment pour agir. Ici, il s'agit du lieu, pas du timing.",
      "2": "La loi 20 parle de ne pas s'engager. Le negociateur ne refuse pas l'engagement, il impose ses conditions.",
      "3": "La loi 39 parle de provoquer pour forcer une reaction. Ici, c'est une question de controle territorial."
    },
    difficulty: 2,
    tags: ["negociation", "territoire", "controle"]
  },
  {
    id: "law_009_cit_actes",
    type: "citation",
    question: "\"Les mots sont impuissants face aux actes accomplis. Montrez, ne dites pas.\"",
    choices: [
      "Loi 4 : Dites-en toujours moins que necessaire",
      "Loi 30 : Faites paraitre vos accomplissements sans effort",
      "Loi 9 : Gagnez par vos actes, pas par la discussion",
      "Loi 28 : Faites preuve d'audace"
    ],
    correctAnswer: 2,
    lawNumber: 9,
    lawTitle: "Gagnez par vos actes, pas par la discussion",
    correctExplanation: "Les demonstrations concretes sont toujours plus puissantes que les arguments verbaux. L'action convaincante rend le debat inutile.",
    wrongExplanations: {
      "0": "La loi 4 conseille la brievete, mais elle ne oppose pas directement les mots aux actes.",
      "1": "La loi 30 parle de paraitre sans effort. La citation insiste sur la primaute de l'action, pas sur l'apparence de facilite.",
      "3": "La loi 28 encourage l'audace, mais la citation parle de la valeur de l'action par rapport aux mots."
    },
    difficulty: 1,
    tags: ["action", "demonstration", "persuasion"]
  },
  {
    id: "law_010_sit_malchance",
    type: "situation",
    question: "Un investisseur s'associe avec un partenaire qui enchaine les echecs. Malgre sa propre competence, ses projets communs echouent systematiquement.",
    choices: [
      "Loi 10 : Evitez les malchanceux et les malheureux",
      "Loi 2 : Ne vous fiez pas a vos amis",
      "Loi 18 : Ne construisez pas de forteresses",
      "Loi 33 : Decouvrez le point faible de chacun"
    ],
    correctAnswer: 0,
    lawNumber: 10,
    lawTitle: "Evitez les malchanceux et les malheureux",
    correctExplanation: "La malchance est contagieuse. S'associer avec des personnes qui portent un schema d'echec entraine inevitablement vers le bas. Il faut s'entourer de reussite.",
    wrongExplanations: {
      "1": "La loi 2 concerne la confiance trahie par les amis. Le partenaire ici n'est pas traitre, il est simplement malchanceux.",
      "2": "La loi 18 parle de l'isolement excessif. L'investisseur n'est pas isole, il est mal associe.",
      "3": "La loi 33 concerne l'identification des faiblesses pour les exploiter. Ici, il faut simplement eviter la personne."
    },
    difficulty: 2,
    tags: ["association", "malchance", "prudence"]
  },
  {
    id: "law_011_sit_dependance",
    type: "situation",
    question: "Un architecte logiciel concoit un systeme si complexe que lui seul peut le maintenir, assurant ainsi sa position indispensable dans l'entreprise.",
    choices: [
      "Loi 11 : Rendez les gens dependants de vous",
      "Loi 7 : Laissez les autres travailler pour vous",
      "Loi 23 : Concentrez vos forces",
      "Loi 30 : Faites paraitre vos accomplissements sans effort"
    ],
    correctAnswer: 0,
    lawNumber: 11,
    lawTitle: "Rendez les gens dependants de vous",
    correctExplanation: "En se rendant indispensable, on acquiert un pouvoir que la hierarchie ne peut pas facilement eliminer. La dependance est une forme de controle subtile mais puissante.",
    wrongExplanations: {
      "1": "La loi 7 parle de deleguer le travail. Ici, l'architecte fait l'inverse : il concentre la connaissance sur lui-meme.",
      "2": "La loi 23 parle de concentration des forces. Le sujet ici est la creation deliberee de dependance, pas la concentration de ressources.",
      "3": "La loi 30 concerne l'apparence de facilite. Ici, la complexite est deliberee pour creer de la dependance."
    },
    difficulty: 2,
    tags: ["dependance", "indispensabilite", "strategie"]
  },
  {
    id: "law_012_sit_generosite",
    type: "situation",
    question: "Un homme d'affaires offre un cadeau somptueux a un rival, qui baisse sa garde et accepte un accord desavantageux par sentiment de dette.",
    choices: [
      "Loi 40 : Meprisez ce qui est gratuit",
      "Loi 12 : Utilisez l'honnetete et la generosite selective",
      "Loi 14 : Posez-vous en ami, agissez en espion",
      "Loi 3 : Dissimulez vos intentions"
    ],
    correctAnswer: 1,
    lawNumber: 12,
    lawTitle: "Utilisez l'honnetete et la generosite selective pour desarmer",
    correctExplanation: "Un geste de generosite inattendu desarme la mefiance. La victime, touchee, ouvre sa garde. C'est un outil de manipulation classique.",
    wrongExplanations: {
      "0": "La loi 40 concerne la valeur de ce qui est paye. Ici, le cadeau est un outil strategique de manipulation, pas une reflexion sur la gratuite.",
      "2": "La loi 14 parle d'espionnage sous couvert d'amitie. L'homme d'affaires ici ne cherche pas des informations mais le desarmer.",
      "3": "La loi 3 parle de cacher ses intentions. Bien que liee, la technique specifique est la generosite desarment, pas la dissimulation."
    },
    difficulty: 2,
    tags: ["generosite", "manipulation", "strategie"]
  },
  {
    id: "law_013_sit_interet",
    type: "situation",
    question: "Un diplomate tente de convaincre un roi de l'aider en invoquant la justice et la morale. Le roi refuse. Un autre diplomate presente les avantages economiques de l'alliance, et le roi accepte.",
    choices: [
      "Loi 43 : Travaillez sur le coeur et l'esprit des gens",
      "Loi 13 : Faites appel a l'interet personnel",
      "Loi 9 : Gagnez par vos actes, pas par la discussion",
      "Loi 31 : Controlez les options"
    ],
    correctAnswer: 1,
    lawNumber: 13,
    lawTitle: "Faites appel a l'interet personnel, jamais a la pitie",
    correctExplanation: "Les gens agissent par interet, pas par compassion. Montrer ce qu'ils ont a gagner est toujours plus efficace que supplier ou invoquer la morale.",
    wrongExplanations: {
      "0": "La loi 43 concerne la persuasion emotionnelle. Ici, c'est l'interet rationnel et materiel qui fonctionne, pas l'emotion.",
      "2": "La loi 9 oppose l'action aux mots. Les deux diplomates utilisent des mots, mais l'un cadre mieux son argument.",
      "3": "La loi 31 parle de limiter les choix. Le second diplomate ne controle pas les options, il presente un meilleur argument."
    },
    difficulty: 2,
    tags: ["diplomatie", "interet", "negociation"]
  },
  {
    id: "law_014_sit_espion",
    type: "situation",
    question: "Lors d'un diner mondain, un homme d'affaires pose des questions innocentes a un concurrent qui, detendu, revele des informations sur ses futurs projets.",
    choices: [
      "Loi 14 : Posez-vous en ami, agissez en espion",
      "Loi 33 : Decouvrez le point faible de chacun",
      "Loi 3 : Dissimulez vos intentions",
      "Loi 21 : Jouez les idiots pour attraper les idiots"
    ],
    correctAnswer: 0,
    lawNumber: 14,
    lawTitle: "Posez-vous en ami, agissez en espion",
    correctExplanation: "Sous le masque de la convivialite, chaque interaction est une opportunite de recolter des informations precieuses. Le cadre detendu rend les gens moins vigilants.",
    wrongExplanations: {
      "1": "La loi 33 concerne la recherche de vulnerabilites. Ici, il s'agit de recueillir des informations generales, pas de trouver une faiblesse specifique.",
      "2": "La loi 3 parle de cacher ses buts. Bien que l'espion cache ses intentions, la technique specifique est l'amitie simulee pour espionner.",
      "3": "La loi 21 parle de feindre la stupidite. L'homme d'affaires ne joue pas l'idiot, il joue l'ami bienveillant."
    },
    difficulty: 1,
    tags: ["espionnage", "information", "social"]
  },
  {
    id: "law_015_hist_carthage",
    type: "historical_event",
    question: "Apres avoir vaincu Carthage, Rome detruit completement la ville, sale la terre et deporte la population, eliminant toute possibilite de revanche future.",
    choices: [
      "Loi 15 : Ecrasez totalement l'ennemi",
      "Loi 8 : Obligez les autres a venir a vous",
      "Loi 42 : Frappez le berger et les moutons se disperseront",
      "Loi 29 : Planifiez jusqu'a la fin"
    ],
    correctAnswer: 0,
    lawNumber: 15,
    lawTitle: "Ecrasez totalement l'ennemi",
    correctExplanation: "Rome a compris qu'un ennemi blesse mais vivant reviendra toujours se venger. La destruction complete de Carthage a elimine cette menace pour toujours.",
    wrongExplanations: {
      "1": "La loi 8 concerne le fait de forcer l'adversaire a venir a vous. Rome est allee a Carthage pour la detruire.",
      "2": "La loi 42 parle de frapper le leader pour disperser les suiveurs. Ici, c'est la destruction totale de l'ensemble, pas du seul leader.",
      "3": "La loi 29 parle de planification. La destruction de Carthage illustre la finalite, pas la planification en soi."
    },
    difficulty: 1,
    tags: ["guerre", "destruction", "histoire"]
  },
  {
    id: "law_016_sit_absence",
    type: "situation",
    question: "Un artiste celebre se retire pendant deux ans de la scene publique. A son retour, l'interet pour son travail a double et ses oeuvres se vendent a prix record.",
    choices: [
      "Loi 16 : Utilisez l'absence pour augmenter le respect",
      "Loi 36 : Dedaignez ce que vous ne pouvez avoir",
      "Loi 47 : Ne depassez pas la cible",
      "Loi 25 : Recreez-vous"
    ],
    correctAnswer: 0,
    lawNumber: 16,
    lawTitle: "Utilisez l'absence pour augmenter le respect et l'honneur",
    correctExplanation: "La rarete cree la valeur. En se retirant strategiquement, on augmente le desir et le respect. Trop de presence dilue l'impact.",
    wrongExplanations: {
      "1": "La loi 36 parle de mepriser l'inaccessible. L'artiste ne meprise rien, il cree de la rarete deliberement.",
      "2": "La loi 47 parle de s'arreter apres la victoire. L'artiste ne s'arrete pas apres un succes, il se retire strategiquement.",
      "3": "La loi 25 concerne la reinvention de soi. L'artiste n'a pas change, il a simplement utilise l'absence."
    },
    difficulty: 2,
    tags: ["absence", "rarete", "valeur"]
  },
  {
    id: "law_017_pers_nixon",
    type: "personnage",
    question: "Un leader politique change constamment de position, rendant ses adversaires incapables de predire ses prochains mouvements, les maintenant dans un etat d'anxiete permanent.",
    choices: [
      "Loi 17 : Cultivez un air d'imprevisibilite",
      "Loi 3 : Dissimulez vos intentions",
      "Loi 48 : Soyez sans forme",
      "Loi 39 : Agitez les eaux"
    ],
    correctAnswer: 0,
    lawNumber: 17,
    lawTitle: "Cultivez un air d'imprevisibilite",
    correctExplanation: "L'imprevisibilite desequilibre les adversaires. Quand on ne peut predire vos actions, on ne peut pas se preparer a les contrer.",
    wrongExplanations: {
      "1": "La loi 3 concerne la dissimulation d'un objectif precis. Ici, c'est l'instabilite deliberee qui est l'arme, pas la dissimulation d'un but.",
      "2": "La loi 48 parle d'adaptabilite fluide. L'imprevisibilite est offensive, tandis que l'absence de forme est defensive.",
      "3": "La loi 39 parle de provoquer une reaction. Ici, l'objectif est de creer de l'incertitude, pas de provoquer."
    },
    difficulty: 2,
    tags: ["imprevisibilite", "politique", "strategie"]
  },
  {
    id: "law_018_sit_forteresse",
    type: "situation",
    question: "Un PDG s'enferme dans son bureau, refuse les reunions informelles et s'isole de plus en plus. Il perd le contact avec la realite de son entreprise et finit par etre evince.",
    choices: [
      "Loi 18 : Ne construisez pas de forteresses",
      "Loi 20 : Ne vous engagez envers personne",
      "Loi 23 : Concentrez vos forces",
      "Loi 16 : Utilisez l'absence"
    ],
    correctAnswer: 0,
    lawNumber: 18,
    lawTitle: "Ne construisez pas de forteresses pour vous proteger",
    correctExplanation: "L'isolement coupe de l'information et des alliances. Une forteresse protege mais empeche aussi de voir les menaces venir. La circulation sociale est vitale.",
    wrongExplanations: {
      "1": "La loi 20 parle de non-engagement politique. Le PDG ne refuse pas l'engagement, il s'isole physiquement.",
      "2": "La loi 23 parle de concentrer ses ressources. L'isolation n'est pas une concentration de forces mais un repli dangereux.",
      "3": "La loi 16 utilise l'absence de facon strategique et temporaire. Ici, l'isolement est chronique et auto-destructeur."
    },
    difficulty: 2,
    tags: ["isolement", "leadership", "erreur"]
  },
  {
    id: "law_019_sit_offense",
    type: "situation",
    question: "Un jeune ambitieux insulte publiquement un homme qu'il croyait sans importance. Cet homme se revele etre un investisseur influent qui bloque sa carriere pendant des annees.",
    choices: [
      "Loi 19 : Sachez a qui vous avez affaire",
      "Loi 5 : Protegez votre reputation a tout prix",
      "Loi 1 : Ne surpassez jamais le maitre",
      "Loi 46 : Ne paraissez jamais trop parfait"
    ],
    correctAnswer: 0,
    lawNumber: 19,
    lawTitle: "Sachez a qui vous avez affaire",
    correctExplanation: "Ne jamais offenser quelqu'un sans connaitre son pouvoir reel. Les apparences sont trompeuses, et offenser la mauvaise personne peut avoir des consequences devastatrices.",
    wrongExplanations: {
      "1": "La loi 5 concerne la protection de sa propre reputation. Ici, le probleme est l'ignorance du pouvoir de l'autre.",
      "2": "La loi 1 concerne la relation avec un superieur reconnu. Ici, le pouvoir de la personne n'etait pas visible.",
      "3": "La loi 46 parle de ne pas paraitre parfait. Ici, il s'agit d'avoir mal evalue son interlocuteur."
    },
    difficulty: 1,
    tags: ["prudence", "evaluation", "pouvoir"]
  },
  {
    id: "law_020_sit_neutralite",
    type: "situation",
    question: "Un conseiller politique refuse de prendre parti entre deux factions rivales, preservant ainsi sa valeur aupres des deux camps et sa liberte d'action.",
    choices: [
      "Loi 20 : Ne vous engagez envers personne",
      "Loi 24 : Jouez le parfait courtisan",
      "Loi 22 : Utilisez la tactique de la capitulation",
      "Loi 38 : Pensez comme vous voulez, comportez-vous comme les autres"
    ],
    correctAnswer: 0,
    lawNumber: 20,
    lawTitle: "Ne vous engagez envers personne",
    correctExplanation: "En restant independant, on conserve sa liberte et sa valeur strategique. S'engager avec une faction reduit ses options et cree des ennemis.",
    wrongExplanations: {
      "1": "La loi 24 concerne l'art de la cour et la flatterie. Le conseiller ne flatte pas, il maintient sa neutralite.",
      "2": "La loi 22 parle de se rendre pour mieux preparer sa revanche. Il n'y a pas de capitulation ici, mais une neutralite strategique.",
      "3": "La loi 38 concerne le conformisme apparent. Le conseiller ne se conforme pas, il refuse de choisir."
    },
    difficulty: 2,
    tags: ["neutralite", "liberte", "politique"]
  },
  {
    id: "law_021_sit_idiot",
    type: "situation",
    question: "Un marchand feint de ne rien comprendre aux prix du marche. Son concurrent, le prenant pour un naif, revele sa strategie de prix. Le marchand ajuste alors la sienne.",
    choices: [
      "Loi 21 : Jouez les idiots pour attraper les idiots",
      "Loi 14 : Posez-vous en ami, agissez en espion",
      "Loi 33 : Decouvrez le point faible de chacun",
      "Loi 3 : Dissimulez vos intentions"
    ],
    correctAnswer: 0,
    lawNumber: 21,
    lawTitle: "Jouez les idiots pour attraper les idiots",
    correctExplanation: "Paraitre moins intelligent que son adversaire l'amene a baisser sa garde. L'arrogance de l'autre devient votre avantage.",
    wrongExplanations: {
      "1": "La loi 14 utilise l'amitie simulee. Ici, le marchand utilise la stupidite simulee, pas l'amitie.",
      "2": "La loi 33 cherche une faiblesse specifique. Le marchand ne cherche pas une faiblesse, il obtient des informations en feignant l'ignorance.",
      "3": "La loi 3 cache un objectif precis. Ici, la technique specifique est la feinte de betise."
    },
    difficulty: 2,
    tags: ["ruse", "feinte", "commerce"]
  },
  {
    id: "law_022_sit_capitulation",
    type: "situation",
    question: "Face a un adversaire beaucoup plus puissant, un petit seigneur se rend sans combattre, offrant son allegeance. Il survit et, des annees plus tard, reconstruit sa force.",
    choices: [
      "Loi 15 : Ecrasez totalement l'ennemi",
      "Loi 22 : Utilisez la tactique de la capitulation",
      "Loi 48 : Soyez sans forme",
      "Loi 35 : Maitrisez l'art du timing"
    ],
    correctAnswer: 1,
    lawNumber: 22,
    lawTitle: "Utilisez la tactique de la capitulation",
    correctExplanation: "La capitulation strategique preserve vos forces quand le rapport est defavorable. Ce n'est pas de la faiblesse mais de la patience. Le temps vous permettra de preparer votre revanche.",
    wrongExplanations: {
      "0": "La loi 15 parle d'ecraser l'ennemi. Ici, le seigneur est en position de faiblesse et choisit la survie.",
      "2": "La loi 48 parle d'adaptabilite fluide. La capitulation est une tactique specifique, pas un etat d'esprit fluide.",
      "3": "La loi 35 concerne le timing. Bien que la patience soit impliquee, la technique cle est la capitulation strategique."
    },
    difficulty: 2,
    tags: ["capitulation", "patience", "survie"]
  },
  {
    id: "law_023_sit_concentration",
    type: "situation",
    question: "Un entrepreneur disperse ses investissements dans dix projets differents. Tous echouent. Son concurrent, lui, mise tout sur un seul produit et reussit brillamment.",
    choices: [
      "Loi 23 : Concentrez vos forces",
      "Loi 29 : Planifiez jusqu'a la fin",
      "Loi 28 : Faites preuve d'audace",
      "Loi 47 : Ne depassez pas la cible"
    ],
    correctAnswer: 0,
    lawNumber: 23,
    lawTitle: "Concentrez vos forces",
    correctExplanation: "L'energie dispersee est de l'energie perdue. La concentration de toutes ses ressources sur un point strategique unique multiplie les chances de succes.",
    wrongExplanations: {
      "1": "La loi 29 concerne la planification a long terme. L'entrepreneur qui a echoue a peut-etre planifie, mais sans concentrer ses forces.",
      "2": "La loi 28 parle d'audace. Le concurrent qui mise tout est audacieux, mais la lecon est la concentration, pas l'audace.",
      "3": "La loi 47 parle de s'arreter au bon moment. Le probleme ici est la dispersion, pas l'exces de succes."
    },
    difficulty: 1,
    tags: ["concentration", "strategie", "ressources"]
  },
  {
    id: "law_025_pers_madonna",
    type: "personnage",
    question: "Madonna reinvente constamment son image, passant de la pop provoquante au style mystique oriental puis au glamour classique, restant toujours pertinente sur plusieurs decennies.",
    choices: [
      "Loi 6 : Attirez l'attention a tout prix",
      "Loi 48 : Soyez sans forme",
      "Loi 25 : Recreez-vous",
      "Loi 17 : Cultivez un air d'imprevisibilite"
    ],
    correctAnswer: 2,
    lawNumber: 25,
    lawTitle: "Recreez-vous",
    correctExplanation: "En refusant d'etre enfermee dans une seule identite, Madonna a garde le controle de son image. Se reinventer, c'est refuser de mourir symboliquement.",
    wrongExplanations: {
      "0": "La loi 6 parle d'attirer l'attention. Madonna attire l'attention, mais la methode cle est la reinvention permanente.",
      "1": "La loi 48 parle d'absence de forme dans la strategie. Ici, il s'agit de recreation deliberee de l'identite.",
      "3": "La loi 17 parle d'imprevisibilite. La reinvention de Madonna est plus profonde : c'est un changement d'identite, pas juste d'imprevisibilite tactique."
    },
    difficulty: 1,
    tags: ["identite", "reinvention", "culture"]
  },
  {
    id: "law_026_sit_mains",
    type: "situation",
    question: "Un homme politique fait tomber un rival en laissant des allies executer les attaques. Il apparait publiquement comme au-dessus de la melee.",
    choices: [
      "Loi 26 : Gardez les mains propres",
      "Loi 7 : Laissez les autres travailler pour vous",
      "Loi 42 : Frappez le berger",
      "Loi 14 : Posez-vous en ami, agissez en espion"
    ],
    correctAnswer: 0,
    lawNumber: 26,
    lawTitle: "Gardez les mains propres",
    correctExplanation: "Utiliser des intermediaires pour le travail sale permet de maintenir une facade irreprochable. Le pouvoir se preserve en restant au-dessus du scandale.",
    wrongExplanations: {
      "1": "La loi 7 concerne l'appropriation du merite. Ici, il s'agit de delocaliser la responsabilite des actions negatives.",
      "2": "La loi 42 parle de cibler le leader d'un groupe. Le sujet ici est la methode indirecte, pas la cible.",
      "3": "La loi 14 concerne l'espionnage sous couvert d'amitie. Ici, les allies executent des attaques, pas de l'espionnage."
    },
    difficulty: 2,
    tags: ["manipulation", "politique", "intermediaires"]
  },
  {
    id: "law_027_sit_croyance",
    type: "situation",
    question: "Un leader charismatique promet un avenir radieux a une communaute desabusee. Sans preuves concretes, les gens le suivent aveuglement par besoin de croire.",
    choices: [
      "Loi 27 : Exploitez le besoin des gens de croire",
      "Loi 43 : Travaillez sur le coeur et l'esprit des gens",
      "Loi 37 : Creez des spectacles convaincants",
      "Loi 32 : Jouez sur les fantasmes des gens"
    ],
    correctAnswer: 0,
    lawNumber: 27,
    lawTitle: "Exploitez le besoin des gens de croire",
    correctExplanation: "Les humains ont un besoin profond de croire en quelque chose. Offrir une cause, un espoir ou une vision comble ce vide et cree des suiveurs devoues.",
    wrongExplanations: {
      "1": "La loi 43 parle de persuasion emotionnelle individualisee. Ici, c'est un mouvement collectif base sur le besoin de croire.",
      "2": "La loi 37 utilise des spectacles visuels. Le leader ici utilise des promesses verbales, pas des mises en scene.",
      "3": "La loi 32 joue sur les fantasmes. Bien que liee, la dynamique cle est le besoin fondamental de croyance, pas le fantasme."
    },
    difficulty: 2,
    tags: ["croyance", "charisme", "foule"]
  },
  {
    id: "law_028_sit_audace",
    type: "situation",
    question: "Un negociateur hesite et demande timidement une petite concession. Son adversaire, sentant la faiblesse, refuse tout. Un autre negociateur demande le double avec assurance, et l'obtient.",
    choices: [
      "Loi 28 : Faites preuve d'audace",
      "Loi 34 : Soyez royal dans votre facon d'etre",
      "Loi 8 : Obligez les autres a venir a vous",
      "Loi 17 : Cultivez un air d'imprevisibilite"
    ],
    correctAnswer: 0,
    lawNumber: 28,
    lawTitle: "Faites preuve d'audace",
    correctExplanation: "La timidite signale la faiblesse et invite le refus. L'audace, meme demesures, impressionne et desarme. Les gens respectent instinctivement ceux qui osent.",
    wrongExplanations: {
      "1": "La loi 34 concerne la dignite royale. L'audace et la royaute sont differentes : l'audace est offensive, la royaute est une posture.",
      "2": "La loi 8 parle de forcer l'autre a venir a vous. Ici, les deux negociateurs sont dans le meme cadre, la difference est l'assurance.",
      "3": "La loi 17 parle d'imprevisibilite. La demande audacieuse n'est pas imprevisible, elle est simplement plus grande."
    },
    difficulty: 1,
    tags: ["audace", "negociation", "confiance"]
  },
  {
    id: "law_029_sit_plan",
    type: "situation",
    question: "Un general remporte une bataille eclatante mais n'a pas prevu la suite. Sans plan pour consolider sa victoire, il perd tout le terrain gagne en quelques semaines.",
    choices: [
      "Loi 29 : Planifiez jusqu'a la fin",
      "Loi 47 : Ne depassez pas la cible",
      "Loi 23 : Concentrez vos forces",
      "Loi 15 : Ecrasez totalement l'ennemi"
    ],
    correctAnswer: 0,
    lawNumber: 29,
    lawTitle: "Planifiez jusqu'a la fin",
    correctExplanation: "Une victoire sans plan de consolidation est une victoire perdue. Il faut anticiper toutes les consequences et les etapes suivantes avant meme de commencer.",
    wrongExplanations: {
      "1": "La loi 47 parle de s'arreter apres la victoire. Le general n'a pas depasse sa cible, il a simplement omis de planifier l'apres.",
      "2": "La loi 23 concerne la concentration des forces. Le probleme ici n'est pas la dispersion mais l'absence de vision a long terme.",
      "3": "La loi 15 parle de detruire completement l'ennemi. Le probleme ici est l'absence de plan post-victoire."
    },
    difficulty: 2,
    tags: ["planification", "victoire", "strategie"]
  },
  {
    id: "law_030_cit_effort",
    type: "citation",
    question: "\"Le vrai genie fait paraitre ses exploits naturels et sans effort, comme si tout cela etait simplement dans l'ordre des choses.\"",
    choices: [
      "Loi 46 : Ne paraissez jamais trop parfait",
      "Loi 30 : Faites paraitre vos accomplissements sans effort",
      "Loi 25 : Recreez-vous",
      "Loi 34 : Soyez royal dans votre facon d'etre"
    ],
    correctAnswer: 1,
    lawNumber: 30,
    lawTitle: "Faites paraitre vos accomplissements sans effort",
    correctExplanation: "Montrer son effort diminue le prestige. Les grands maitres cachent le travail pour que le resultat semble magique, naturel, presque divin.",
    wrongExplanations: {
      "0": "La loi 46 parle de ne pas paraitre trop parfait pour eviter l'envie. Ici, il s'agit de cacher l'effort, pas la perfection.",
      "2": "La loi 25 concerne la reinvention de soi. La citation parle de l'apparence de facilite, pas de transformation.",
      "3": "La loi 34 concerne la posture royale. La citation ne parle pas de dignite mais de l'apparence de naturel dans les accomplissements."
    },
    difficulty: 2,
    tags: ["effort", "apparence", "prestige"]
  },
  {
    id: "law_031_sit_options",
    type: "situation",
    question: "Un vendeur presente a son client deux offres, toutes deux avantageuses pour lui. Le client choisit l'une d'elles, pensant avoir fait un choix libre.",
    choices: [
      "Loi 31 : Controlez les options",
      "Loi 3 : Dissimulez vos intentions",
      "Loi 12 : Utilisez la generosite selective",
      "Loi 21 : Jouez les idiots"
    ],
    correctAnswer: 0,
    lawNumber: 31,
    lawTitle: "Controlez les options",
    correctExplanation: "En donnant l'illusion du choix tout en controlant les options disponibles, vous guidez les decisions des autres dans la direction souhaitee.",
    wrongExplanations: {
      "1": "La loi 3 cache les intentions. Le vendeur ne cache pas ses intentions, il structure les choix a son avantage.",
      "2": "La loi 12 utilise la generosite pour desarmer. Les offres ne sont pas des cadeaux mais des options calibrees.",
      "3": "La loi 21 feint la stupidite. Le vendeur agit avec une intelligence calculee, pas avec une feinte de naivete."
    },
    difficulty: 2,
    tags: ["controle", "choix", "manipulation"]
  },
  {
    id: "law_032_sit_fantasme",
    type: "situation",
    question: "Un politicien promet un retour a un age d'or mythique que le pays n'a jamais vraiment connu. La foule, emue par ce reve, le suit avec ferveur.",
    choices: [
      "Loi 27 : Exploitez le besoin de croire",
      "Loi 32 : Jouez sur les fantasmes des gens",
      "Loi 37 : Creez des spectacles convaincants",
      "Loi 43 : Travaillez sur le coeur et l'esprit"
    ],
    correctAnswer: 1,
    lawNumber: 32,
    lawTitle: "Jouez sur les fantasmes des gens",
    correctExplanation: "Les gens preferent les illusions seduisantes a la realite banale. Offrir un fantasme collectif est plus puissant que presenter des faits rationnels.",
    wrongExplanations: {
      "0": "La loi 27 concerne le besoin de croire en general. Ici, le mecanisme specifique est le fantasme nostalgique, l'image d'un passe idealise.",
      "2": "La loi 37 utilise des spectacles visuels. Le politicien utilise des mots et une narrative, pas un spectacle visuel.",
      "3": "La loi 43 parle de persuasion emotionnelle individuelle. Ici, c'est un fantasme collectif qui est en jeu."
    },
    difficulty: 3,
    tags: ["fantasme", "politique", "illusion"]
  },
  {
    id: "law_033_sit_faiblesse",
    type: "situation",
    question: "Un diplomate decouvre que son adversaire a un besoin maladif de reconnaissance publique. Il utilise cette faiblesse pour obtenir des concessions en le flattant.",
    choices: [
      "Loi 33 : Decouvrez le point faible de chacun",
      "Loi 14 : Posez-vous en ami, agissez en espion",
      "Loi 12 : Utilisez la generosite selective",
      "Loi 24 : Jouez le parfait courtisan"
    ],
    correctAnswer: 0,
    lawNumber: 33,
    lawTitle: "Decouvrez le point faible de chacun",
    correctExplanation: "Chacun a une faille, un besoin non comble, une insecurite. Celui qui la trouve detient un levier de pouvoir considerable pour orienter le comportement de l'autre.",
    wrongExplanations: {
      "1": "La loi 14 concerne l'espionnage social. Bien que le diplomate ait decouvert la faiblesse, l'accent est sur l'exploitation de celle-ci.",
      "2": "La loi 12 utilise la generosite comme arme. Ici, la flatterie n'est pas de la generosite mais un levier sur une faiblesse.",
      "3": "La loi 24 concerne l'art de la cour en general. Le diplomate utilise une technique precise basee sur une faiblesse identifiee."
    },
    difficulty: 2,
    tags: ["faiblesse", "diplomatie", "levier"]
  },
  {
    id: "law_034_pers_louis",
    type: "personnage",
    question: "Louis XIV se faisait appeler le Roi-Soleil, vivait dans un palais grandiose et exigeait que toute la noblesse gravite autour de lui a Versailles.",
    choices: [
      "Loi 34 : Soyez royal dans votre facon d'etre",
      "Loi 6 : Attirez l'attention a tout prix",
      "Loi 37 : Creez des spectacles convaincants",
      "Loi 11 : Rendez les gens dependants de vous"
    ],
    correctAnswer: 0,
    lawNumber: 34,
    lawTitle: "Soyez royal dans votre facon d'etre",
    correctExplanation: "Louis XIV incarnait la royaute dans chaque aspect de sa vie. En se traitant comme un etre superieur, il forcait les autres a le percevoir ainsi. L'attitude cree le statut.",
    wrongExplanations: {
      "1": "La loi 6 recherche l'attention. Louis XIV ne cherchait pas simplement l'attention mais le respect total et la soumission.",
      "2": "La loi 37 concerne les spectacles visuels. Versailles etait plus qu'un spectacle : c'etait un mode de vie royal entier.",
      "3": "La loi 11 cree de la dependance. Bien que Versailles ait rendu les nobles dependants, la lecon principale est l'attitude royale."
    },
    difficulty: 1,
    tags: ["royaute", "prestige", "histoire"]
  },
  {
    id: "law_035_sit_timing",
    type: "situation",
    question: "Un investisseur attend patiemment une crise economique pour acheter des actifs a prix reduit, alors que tout le monde panique et vend.",
    choices: [
      "Loi 35 : Maitrisez l'art du timing",
      "Loi 28 : Faites preuve d'audace",
      "Loi 36 : Dedaignez ce que vous ne pouvez avoir",
      "Loi 29 : Planifiez jusqu'a la fin"
    ],
    correctAnswer: 0,
    lawNumber: 35,
    lawTitle: "Maitrisez l'art du timing",
    correctExplanation: "Le bon moment transforme une action ordinaire en coup de maitre. La patience strategique et le sens du timing sont des armes redoutables.",
    wrongExplanations: {
      "1": "La loi 28 parle d'audace. Acheter pendant une crise est audacieux mais la lecon principale est le timing, pas l'audace en soi.",
      "2": "La loi 36 parle de mepriser l'inaccessible. L'investisseur ne meprise rien, il attend le bon moment.",
      "3": "La loi 29 concerne la planification complete. Le timing est different de la planification : c'est savoir quand agir."
    },
    difficulty: 2,
    tags: ["timing", "patience", "finance"]
  },
  {
    id: "law_036_sit_dedain",
    type: "situation",
    question: "Un rival tente de provoquer un leader en l'insultant publiquement. Le leader l'ignore completement, faisant paraitre l'attaquant insignifiant.",
    choices: [
      "Loi 39 : Agitez les eaux pour faire sortir les poissons",
      "Loi 36 : Dedaignez ce que vous ne pouvez avoir",
      "Loi 5 : Protegez votre reputation",
      "Loi 4 : Dites-en moins que necessaire"
    ],
    correctAnswer: 1,
    lawNumber: 36,
    lawTitle: "Dedaignez ce que vous ne pouvez avoir",
    correctExplanation: "En ignorant l'attaque, le leader lui retire toute importance. Ce que vous ne reconnaissez pas n'existe pas. Le dedain est parfois la meilleure defense.",
    wrongExplanations: {
      "0": "La loi 39 cherche a provoquer l'adversaire. Ici, c'est le leader qui est provoque et choisit de ne pas reagir.",
      "2": "La loi 5 protege la reputation. Ignorer peut etre une forme de protection, mais la technique specifique est le dedain delibere.",
      "3": "La loi 4 parle de brievete verbale. Le leader ne parle pas moins, il ne reagit pas du tout."
    },
    difficulty: 2,
    tags: ["dedain", "reaction", "controle"]
  },
  {
    id: "law_037_hist_spectacle",
    type: "historical_event",
    question: "Napoleon organise son propre couronnement avec une mise en scene spectaculaire, se couronnant lui-meme plutot que de laisser le pape le faire.",
    choices: [
      "Loi 34 : Soyez royal dans votre facon d'etre",
      "Loi 25 : Recreez-vous",
      "Loi 37 : Creez des spectacles convaincants",
      "Loi 28 : Faites preuve d'audace"
    ],
    correctAnswer: 2,
    lawNumber: 37,
    lawTitle: "Creez des spectacles convaincants",
    correctExplanation: "Napoleon a compris que les symboles et les images frappent plus fort que les arguments. Un spectacle grandiose cree une realite que les mots ne peuvent defaire.",
    wrongExplanations: {
      "0": "La loi 34 concerne l'attitude royale generale. L'acte de Napoleon est un spectacle deliberement concu, pas une simple attitude.",
      "1": "La loi 25 parle de se reinventer. Napoleon ne se reinvente pas, il cree un evenement symbolique spectaculaire.",
      "3": "La loi 28 encourage l'audace. Se couronner soi-meme est audacieux, mais c'est le spectacle qui est le moyen cle."
    },
    difficulty: 1,
    tags: ["spectacle", "symbole", "histoire"]
  },
  {
    id: "law_038_sit_conformisme",
    type: "situation",
    question: "Un penseur revolutionnaire garde ses idees radicales en prive mais adopte un comportement parfaitement conventionnel en public, evitant ainsi la persecution.",
    choices: [
      "Loi 38 : Pensez comme vous voulez, comportez-vous comme les autres",
      "Loi 3 : Dissimulez vos intentions",
      "Loi 48 : Soyez sans forme",
      "Loi 4 : Dites-en toujours moins que necessaire"
    ],
    correctAnswer: 0,
    lawNumber: 38,
    lawTitle: "Pensez comme vous voulez, comportez-vous comme les autres",
    correctExplanation: "Afficher publiquement des idees non conventionnelles attire la persecution. La sagesse consiste a penser librement mais a se comporter de maniere conforme pour proteger ses interets.",
    wrongExplanations: {
      "1": "La loi 3 concerne la dissimulation d'objectifs specifiques. Ici, il s'agit de cacher une pensee divergente, pas un plan d'action.",
      "2": "La loi 48 parle de fluidite strategique. Le conformisme de facade est fixe, pas fluide.",
      "3": "La loi 4 concerne la quantite de paroles. Le penseur ne parle pas moins, il masque ses vraies opinions."
    },
    difficulty: 2,
    tags: ["conformisme", "pensee", "survie"]
  },
  {
    id: "law_039_sit_provocation",
    type: "situation",
    question: "Un general envoie de petites escouades harasser l'ennemi jusqu'a ce que celui-ci, furieux, lance une attaque precipitee et tombe dans une embuscade.",
    choices: [
      "Loi 17 : Cultivez un air d'imprevisibilite",
      "Loi 8 : Obligez les autres a venir a vous",
      "Loi 39 : Agitez les eaux pour faire sortir les poissons",
      "Loi 15 : Ecrasez totalement l'ennemi"
    ],
    correctAnswer: 2,
    lawNumber: 39,
    lawTitle: "Agitez les eaux pour faire sortir les poissons",
    correctExplanation: "En provoquant l'ennemi, on le force a reagir emotionnellement. La colere rend aveugle et previsible. Le calme controlee est superieur a la rage.",
    wrongExplanations: {
      "0": "La loi 17 concerne l'imprevisibilite. Les harcelements sont previsibles, c'est l'ennemi qui devient imprevisible par sa colere.",
      "1": "La loi 8 attire l'ennemi avec un appat. Ici, on utilise la provocation, pas l'attraction.",
      "3": "La loi 15 parle de destruction totale. L'embuscade est un piege tactique, pas necessairement une destruction totale."
    },
    difficulty: 2,
    tags: ["provocation", "guerre", "emotion"]
  },
  {
    id: "law_040_cit_gratuit",
    type: "citation",
    question: "\"Ce qui est offert gratuitement est dangereux, car cela implique une ruse ou une dette cachee.\"",
    choices: [
      "Loi 12 : Utilisez la generosite selective",
      "Loi 40 : Meprisez ce qui est gratuit",
      "Loi 33 : Decouvrez le point faible",
      "Loi 13 : Faites appel a l'interet personnel"
    ],
    correctAnswer: 1,
    lawNumber: 40,
    lawTitle: "Meprisez ce qui est gratuit",
    correctExplanation: "Ce qui ne coute rien a souvent un prix cache. La gratuite peut cacher une manipulation, une dette morale ou un piege. Ce qui a de la valeur merite d'etre paye.",
    wrongExplanations: {
      "0": "La loi 12 utilise la generosite comme arme. La citation est du point de vue du recepteur, pas du donneur.",
      "2": "La loi 33 cherche les faiblesses. La citation met en garde contre la gratuite, pas contre les faiblesses humaines.",
      "3": "La loi 13 parle de motivation par l'interet. La citation concerne le danger de la gratuite, pas l'appel a l'interet."
    },
    difficulty: 2,
    tags: ["gratuite", "danger", "valeur"]
  },
  {
    id: "law_041_sit_ombre",
    type: "situation",
    question: "Le fils d'un celebre general tente de reproduire exactement la strategie militaire de son pere, mais echoue car l'ennemi s'y attendait.",
    choices: [
      "Loi 1 : Ne surpassez jamais le maitre",
      "Loi 41 : Evitez de marcher dans les traces d'un grand homme",
      "Loi 25 : Recreez-vous",
      "Loi 48 : Soyez sans forme"
    ],
    correctAnswer: 1,
    lawNumber: 41,
    lawTitle: "Evitez de marcher dans les traces d'un grand homme",
    correctExplanation: "Imiter un predecesseur celebre vous place dans son ombre. Vous devez tracer votre propre chemin, car ce qui a fonctionne pour un autre ne fonctionnera pas necessairement pour vous.",
    wrongExplanations: {
      "0": "La loi 1 concerne la relation avec un superieur vivant. Le pere est un predecesseur, pas un maitre actuel.",
      "2": "La loi 25 parle de reinvention de soi. Le fils n'echoue pas a se reinventer, il echoue a se differencier.",
      "3": "La loi 48 parle de fluidite. Le probleme n'est pas le manque de fluidite mais l'imitation rigide."
    },
    difficulty: 2,
    tags: ["heritage", "originalite", "imitation"]
  },
  {
    id: "law_042_sit_berger",
    type: "situation",
    question: "Pour briser un mouvement social, un gouvernement arrete uniquement les deux leaders principaux. Sans direction, le mouvement se dissout rapidement.",
    choices: [
      "Loi 15 : Ecrasez totalement l'ennemi",
      "Loi 42 : Frappez le berger et les moutons se disperseront",
      "Loi 33 : Decouvrez le point faible de chacun",
      "Loi 23 : Concentrez vos forces"
    ],
    correctAnswer: 1,
    lawNumber: 42,
    lawTitle: "Frappez le berger et les moutons se disperseront",
    correctExplanation: "Tout groupe depend de ses leaders. En les neutralisant, vous privez le groupe de direction et de cohesion. C'est plus efficace que de combattre chaque membre individuellement.",
    wrongExplanations: {
      "0": "La loi 15 preconise la destruction totale. Ici, l'approche est chirurgicale : neutraliser les leaders suffit.",
      "2": "La loi 33 cherche les faiblesses individuelles. La strategie ici cible la structure du groupe, pas les individus.",
      "3": "La loi 23 concerne la concentration de ses propres forces. Ici, il s'agit de cibler le point nevralgique de l'adversaire."
    },
    difficulty: 1,
    tags: ["leadership", "strategie", "mouvement"]
  },
  {
    id: "law_043_sit_coeur",
    type: "situation",
    question: "Un general conquiert une ville mais, au lieu de la piller, il nourrit la population et soigne les blesses. Les habitants deviennent ses plus fideles allies.",
    choices: [
      "Loi 43 : Travaillez sur le coeur et l'esprit des gens",
      "Loi 12 : Utilisez la generosite selective",
      "Loi 15 : Ecrasez totalement l'ennemi",
      "Loi 22 : Utilisez la tactique de la capitulation"
    ],
    correctAnswer: 0,
    lawNumber: 43,
    lawTitle: "Travaillez sur le coeur et l'esprit des gens",
    correctExplanation: "La force brute cree du ressentiment. Gagner les coeurs transforme les vaincus en allies. La persuasion emotionnelle est plus durable que la coercition.",
    wrongExplanations: {
      "1": "La loi 12 utilise la generosite comme ruse ponctuelle. Ici, c'est une strategie a long terme pour gagner les coeurs.",
      "2": "La loi 15 promeut la destruction totale, l'exact oppose de cette approche bienveillante.",
      "3": "La loi 22 concerne la capitulation. Le general ne capitule pas, il offre la bienveillance apres la victoire."
    },
    difficulty: 1,
    tags: ["coeur", "persuasion", "conquete"]
  },
  {
    id: "law_044_sit_miroir",
    type: "situation",
    question: "Un escroc etudie minutieusement les habitudes de sa cible, puis se presente comme son reflet parfait : memes gouts, memes opinions, memes valeurs.",
    choices: [
      "Loi 44 : Utilisez l'effet miroir pour desarmer",
      "Loi 14 : Posez-vous en ami, agissez en espion",
      "Loi 24 : Jouez le parfait courtisan",
      "Loi 3 : Dissimulez vos intentions"
    ],
    correctAnswer: 0,
    lawNumber: 44,
    lawTitle: "Utilisez l'effet miroir pour desarmer",
    correctExplanation: "En reflectant les gouts et valeurs de l'autre, on cree un sentiment de familiarite et de confiance immediate. Le miroir est une arme de seduction psychologique.",
    wrongExplanations: {
      "1": "La loi 14 utilise l'amitie simulee pour espionner. L'escroc ne cherche pas des informations mais a creer de la confiance.",
      "2": "La loi 24 concerne l'art de la cour general. L'effet miroir est une technique specifique de mimesis, pas une posture courtisane.",
      "3": "La loi 3 cache les intentions. Bien que l'escroc dissimule ses vrais buts, la technique specifique est le reflet, pas la dissimulation."
    },
    difficulty: 3,
    tags: ["miroir", "manipulation", "psychologie"]
  },
  {
    id: "law_045_sit_reforme",
    type: "situation",
    question: "Un nouveau directeur impose brutalement dix reformes le meme jour. Le personnel, choque, se revolte et les reformes echouent toutes.",
    choices: [
      "Loi 45 : Prechez le changement mais ne reformez jamais trop a la fois",
      "Loi 35 : Maitrisez l'art du timing",
      "Loi 47 : Ne depassez pas la cible",
      "Loi 19 : Sachez a qui vous avez affaire"
    ],
    correctAnswer: 0,
    lawNumber: 45,
    lawTitle: "Prechez le changement mais ne reformez jamais trop a la fois",
    correctExplanation: "Les gens sont attaches a leurs habitudes. Le changement doit etre progressif pour etre accepte. Trop de reformes simultanees provoquent la resistance.",
    wrongExplanations: {
      "1": "La loi 35 concerne le moment d'agir. Le probleme ici n'est pas le timing mais la quantite de changements.",
      "2": "La loi 47 parle de ne pas aller trop loin apres un succes. Le directeur n'a pas encore de succes a depasser.",
      "3": "La loi 19 concerne l'evaluation des personnes. Le directeur a neglige la resistance au changement, pas les personnes."
    },
    difficulty: 2,
    tags: ["changement", "reforme", "resistance"]
  },
  {
    id: "law_046_sit_parfait",
    type: "situation",
    question: "Un collegue trop brillant suscite la jalousie de ses pairs. Ils complotent pour saboter ses projets. Il aurait du montrer quelques faiblesses volontairement.",
    choices: [
      "Loi 46 : Ne paraissez jamais trop parfait",
      "Loi 1 : Ne surpassez jamais le maitre",
      "Loi 30 : Faites paraitre vos accomplissements sans effort",
      "Loi 36 : Dedaignez ce que vous ne pouvez avoir"
    ],
    correctAnswer: 0,
    lawNumber: 46,
    lawTitle: "Ne paraissez jamais trop parfait",
    correctExplanation: "La perfection apparente genere de l'envie et de l'hostilite. Montrer des faiblesses mineures rend plus humain et desamorce la jalousie des autres.",
    wrongExplanations: {
      "1": "La loi 1 concerne la relation avec un superieur. Ici, ce sont des pairs qui sont jaloux, pas un superieur.",
      "2": "La loi 30 cache l'effort. Le probleme n'est pas l'effort visible mais la perfection apparente.",
      "3": "La loi 36 conseille le dedain strategique. La solution ici est de montrer des imperfections, pas de dedaigner."
    },
    difficulty: 1,
    tags: ["perfection", "envie", "humilite"]
  },
  {
    id: "law_047_hist_napoleon",
    type: "historical_event",
    question: "Napoleon, apres avoir conquis presque toute l'Europe, envahit la Russie. Cette campagne trop ambitieuse marque le debut de sa chute.",
    choices: [
      "Loi 47 : Ne depassez pas la cible",
      "Loi 29 : Planifiez jusqu'a la fin",
      "Loi 23 : Concentrez vos forces",
      "Loi 35 : Maitrisez l'art du timing"
    ],
    correctAnswer: 0,
    lawNumber: 47,
    lawTitle: "Ne depassez pas la cible : sachez vous arreter apres la victoire",
    correctExplanation: "L'ivresse du succes pousse a vouloir toujours plus. Napoleon aurait du consolider ses conquetes. Aller trop loin inverse la fortune et transforme la victoire en defaite.",
    wrongExplanations: {
      "1": "La loi 29 concerne la planification. Napoleon avait un plan, mais le probleme est l'ambition demesures, pas le manque de planification.",
      "2": "La loi 23 parle de concentration. Les forces de Napoleon etaient concentrees, mais deployees trop loin.",
      "3": "La loi 35 concerne le timing. Le probleme n'est pas le moment mais l'exces d'ambition."
    },
    difficulty: 1,
    tags: ["ambition", "exces", "histoire"]
  },
  {
    id: "law_048_cit_eau",
    type: "citation",
    question: "\"Soyez comme l'eau : elle n'a pas de forme propre mais prend celle de tout ce qui la contient, et pourtant rien ne lui resiste.\"",
    choices: [
      "Loi 22 : Utilisez la tactique de la capitulation",
      "Loi 17 : Cultivez un air d'imprevisibilite",
      "Loi 48 : Soyez sans forme",
      "Loi 38 : Pensez comme vous voulez, comportez-vous comme les autres"
    ],
    correctAnswer: 2,
    lawNumber: 48,
    lawTitle: "Soyez sans forme",
    correctExplanation: "L'adaptabilite est l'arme ultime. En refusant de se figer dans une strategie, une position ou une identite, on devient impossible a saisir et a vaincre.",
    wrongExplanations: {
      "0": "La loi 22 utilise la capitulation comme tactique. Etre sans forme n'est pas capituler, c'est s'adapter constamment.",
      "1": "La loi 17 cultive l'imprevisibilite. Etre sans forme va au-dela de l'imprevisibilite : c'est une philosophie d'adaptabilite totale.",
      "3": "La loi 38 concerne le conformisme de facade. Etre sans forme n'est pas se conformer, c'est fluer comme l'eau."
    },
    difficulty: 2,
    tags: ["adaptabilite", "fluidite", "philosophie"]
  },
  {
    id: "law_024_sit_courtisan",
    type: "situation",
    question: "Un conseiller royal flatte subtilement le roi, presente les idees du roi comme brillantes, et ne contredit jamais en public. Il devient le plus influent de la cour.",
    choices: [
      "Loi 1 : Ne surpassez jamais le maitre",
      "Loi 24 : Jouez le parfait courtisan",
      "Loi 14 : Posez-vous en ami, agissez en espion",
      "Loi 33 : Decouvrez le point faible de chacun"
    ],
    correctAnswer: 1,
    lawNumber: 24,
    lawTitle: "Jouez le parfait courtisan",
    correctExplanation: "L'art de la cour consiste a plaire sans servilite, a influencer sans confronter, et a obtenir le pouvoir par la grace plutot que par la force.",
    wrongExplanations: {
      "0": "La loi 1 concerne le fait de ne pas eclipser son superieur. Ici, le courtisan va plus loin : il maitrise tout l'art de la cour.",
      "2": "La loi 14 concerne l'espionnage. Le courtisan ne cherche pas des secrets mais l'influence par l'art social.",
      "3": "La loi 33 cherche des faiblesses. Le courtisan n'exploite pas une faiblesse specifique, il excelle dans l'art social global."
    },
    difficulty: 2,
    tags: ["courtisan", "influence", "flatterie"]
  },
  {
    id: "law_002_sit_ennemi",
    type: "situation",
    question: "Un PDG recrute un ancien rival pour diriger un departement. Ce rival, ayant tout a prouver, travaille deux fois plus dur que les employes de longue date.",
    choices: [
      "Loi 10 : Evitez les malchanceux",
      "Loi 2 : Ne vous fiez pas a vos amis, utilisez vos ennemis",
      "Loi 11 : Rendez les gens dependants de vous",
      "Loi 7 : Laissez les autres travailler pour vous"
    ],
    correctAnswer: 1,
    lawNumber: 2,
    lawTitle: "Ne vous fiez pas a vos amis, utilisez vos ennemis",
    correctExplanation: "Un ancien ennemi rallie a votre cause a davantage a prouver qu'un ami de longue date. Il travaillera plus dur pour gagner votre confiance et maintenir sa nouvelle position.",
    wrongExplanations: {
      "0": "La loi 10 parle d'eviter les malchanceux. L'ancien rival n'est pas malchanceux, c'est un adversaire converti.",
      "2": "La loi 11 cree de la dependance. Le PDG ne cree pas de dependance, il utilise la motivation de l'ancien rival.",
      "3": "La loi 7 concerne l'appropriation du merite. Le PDG ne prend pas le credit du travail du rival."
    },
    difficulty: 2,
    tags: ["recrutement", "rivalite", "motivation"]
  }
];
