// #########################################################################
// #   📝 LIVRE 5 — LA CATHÉDRALE SAINT-PIERRE-ET-SAINT-PAUL
// #   Même fonctionnement que src/data/livres/chateau.js : modifiez les
// #   textes, images et légendes ; ajoutez ou retirez des chapitres.
// #########################################################################

// =========================================================================
// 📖 ZONE À ÉDITER (1/2) : COUVERTURE, TRANCHE & PAGE DE TITRE
// =========================================================================

export const bookMeta = {
  shelfTitle: "La Cathédrale Saint-Pierre-et-Saint-Paul",
  leather: "#46265f",
  cover: { emblem: "cathedral", corners: { tl: "rose", tr: "rose", bl: "arch" } },

  coverKicker: "Histoire de la",
  coverTitle: "Cathédrale Saint-Pierre et Saint-Paul",
  coverFooter: "Nantes",
  spineTitle: "Cathédrale Saint-Pierre-et-Saint-Paul",

  titlePageHeading: "Patrimoine de Nantes",
  titlePageTitle: "La Cathédrale Saint-Pierre-et-Saint-Paul",
  titlePageSubtitle: "Près de six siècles de construction, de prières et d'épreuves",
  titlePageImprint: "À Nantes, chez l'Archiviste du Patrimoine",
  // Image de la page de titre (juste après la couverture) ; "" = gravure automatique
  titlePageImage: "/images/cathedrale-aquarelle.webp",
  titlePageImageFrame: true, // photo encadrée (false = dessin au trait fondu dans le papier)
  titleEngraving: "cathedral",

  runningHead: "La Cathédrale de Nantes",
};

// =========================================================================
// 📝 ZONE À ÉDITER (2/2) : CHAPITRES
// =========================================================================

export const chaptersData = [

  // ─────────────────────────── PAGE 1 ───────────────────────────
  {
    chapterNumber: "01",
    title: "Avant la cathédrale",
    subtitle: "IVᵉ – XIᵉ siècle",
    content: `Bien avant la grande cathédrale que l'on connaît aujourd'hui, cet endroit de Nantes était déjà un lieu de prière. Dès le IVe siècle, à l'époque romaine, les premiers chrétiens de la ville y construisent une église. Au VIe siècle, l'évêque Félix fait bâtir une cathédrale, consacrée vers l'an 568. Elle est décrite comme très belle, avec un toit qui brille au soleil. Mais au IXe siècle, les Vikings attaquent Nantes et la ravagent. En 843, ils pénètrent dans la cathédrale et s'en prennent aux fidèles qui s'y étaient réfugiés, dont l'évêque. Au XIe siècle, une nouvelle cathédrale est construite dans le style roman, avec des murs épais, des arcs arrondis et de petites fenêtres. C'est sur cette église romane que va naître, quelques siècles plus tard, la cathédrale gothique que nous admirons aujourd'hui.`,
    illustration: "/images/cathedrale-panorama.webp",
    engraving: "cathedral",
    caption: "Panorama sur la cathédrale, avant 1930",
  },

  // ─────────────────────────── PAGE 2 ───────────────────────────
  {
    chapterNumber: "02",
    title: "La première pierre",
    subtitle: "14 avril 1434",
    content: `Au XVe siècle, la Bretagne est un duché riche et puissant. Le duc Jean V et l'évêque Jean de Malestroit veulent une cathédrale digne de leur capitale, aussi grande et belle que celles des autres villes d'Europe. Le 14 avril 1434, ils posent ensemble la première pierre de la nouvelle cathédrale. L'idée est astucieuse : au lieu de tout détruire d'un coup, on va construire la cathédrale gothique autour de l'ancienne église romane, petit à petit, pour que les fidèles puissent continuer à y prier. Le chantier est confié à des maîtres d'œuvre, d'abord Guillaume de Dammartin, puis Mathelin Rodier, celui-là même qui travaille aussi au château des ducs. Personne ne se doute alors que ce chantier va durer plus de quatre siècles et demi, et qu'aucun de ceux qui l'ont commencé ne le verra terminé.`,
    illustration: "/images/cathedrale-fouilles-romanes.webp",
    engraving: "cathedral",
    caption: "Les vestiges de l'église romane mis au jour",
  },

  // ─────────────────────────── PAGE 3 ───────────────────────────
  {
    chapterNumber: "03",
    title: "Le style gothique flamboyant",
    subtitle: "XVᵉ siècle",
    content: `La cathédrale de Nantes est construite dans le style gothique, et plus précisément le gothique « flamboyant ». On l'appelle ainsi parce que les décorations de pierre, notamment dans les fenêtres, ressemblent à des flammes qui dansent. Le gothique permet de construire des églises très hautes et très lumineuses, grâce aux arcs pointus, aux piliers fins et aux grandes fenêtres garnies de vitraux. À Nantes, les bâtisseurs utilisent du tuffeau, une pierre blanche et tendre venue des bords de la Loire, plus facile à sculpter. C'est pour cela que l'intérieur de la cathédrale est si clair et lumineux. Sa grande voûte s'élève à environ 37 mètres de hauteur : c'est plus haut que celle de Notre-Dame de Paris ! En levant les yeux, on a l'impression que les piliers montent jusqu'au ciel, comme les troncs d'une immense forêt de pierre.`,
    illustration: "/images/cathedrale-dessin-ancien.webp",
    engraving: "cathedral",
    caption: "La cathédrale inachevée, dessin ancien",
  },

  // ─────────────────────────── PAGE 4 ───────────────────────────
  {
    chapterNumber: "04",
    title: "La façade et ses tours",
    subtitle: "1480 – 1520",
    content: `Les bâtisseurs commencent par la façade, qui est terminée vers 1480. Elle est percée de cinq portails sculptés, couverts de centaines de petits personnages : des saints, des anges, des prophètes, des scènes de la Bible. C'est un véritable livre d'images en pierre, qui permettait aux fidèles, souvent incapables de lire, de connaître les histoires religieuses. Au-dessus de la façade s'élèvent deux grandes tours carrées, achevées vers 1490. Elles accueillent les cloches de l'ancienne cathédrale romane, qui sonnent les heures et les fêtes. Anne de Bretagne, devenue reine de France, offre un grand vitrail pour la façade, installé en 1498. Puis, vers 1520, le chantier s'arrête. Les guerres, le manque d'argent et les changements d'époque mettent les travaux en pause pendant près d'un siècle. La cathédrale reste longtemps inachevée.`,
    illustration: "/images/cathedrale-interieur.png",
    engraving: "cathedral",
    caption: "La nef et ses hauts piliers, lithographie",
  },

  // ─────────────────────────── PAGE 5 ───────────────────────────
  {
    chapterNumber: "05",
    title: "Le tombeau du duc François II",
    subtitle: "Début du XVIᵉ siècle",
    content: `La cathédrale abrite l'un des plus beaux trésors de la sculpture de la Renaissance en France : le tombeau du duc François II et de sa femme, Marguerite de Foix, les parents d'Anne de Bretagne. C'est Anne elle-même qui le fait réaliser, au début du XVIe siècle, pour honorer la mémoire de ses parents. Il a été dessiné par le peintre Jean Perréal et sculpté par Michel Colombe, l'un des meilleurs sculpteurs de son temps. Sur le tombeau, le duc et la duchesse sont allongés, les mains jointes. Aux quatre coins se dressent quatre grandes statues de femmes représentant les vertus : la Justice, la Force, la Tempérance et la Prudence. Cette dernière a une particularité étonnante : elle a deux visages, un visage de jeune femme devant et un visage de vieil homme derrière, pour montrer qu'il faut savoir tirer les leçons du passé.`,
    illustration: "/images/cathedrale-tombeau-francois2.webp",
    engraving: "cathedral",
    caption: "Le tombeau de François II, duc de Bretagne",
  },

  // ─────────────────────────── PAGE 6 ───────────────────────────
  {
    chapterNumber: "06",
    title: "Un chantier qui n'en finit pas",
    subtitle: "XVIIᵉ – XIXᵉ siècle",
    content: `Au XVIIe siècle, les travaux reprennent doucement, surtout à l'intérieur. Mais la cathédrale traverse des moments difficiles. Pendant la Révolution française, elle est fermée au culte et transformée en entrepôt : ses statues sont abîmées et ses objets précieux dispersés. En 1800, l'explosion d'une tour du château voisin, qui servait à stocker de la poudre, souffle de nombreux vitraux et endommage la toiture. En 1802, la cathédrale est rendue aux fidèles. En 1815, le tombeau de François II, qui se trouvait dans une autre église détruite, est installé dans la cathédrale. Puis, en 1835, on décide enfin de terminer le chantier. L'ancien chœur roman est remplacé par un chœur gothique, et l'on redécouvre la crypte de l'église romane, sous le sol. Les ouvriers du XIXe siècle respectent le style imaginé par leurs ancêtres du XVe siècle.`,
    illustration: "/images/cathedrale-place-saint-pierre.png",
    engraving: "cathedral",
    caption: "La place Saint-Pierre, carte postale ancienne",
  },

  // ─────────────────────────── PAGE 7 ───────────────────────────
  {
    chapterNumber: "07",
    title: "Enfin terminée !",
    subtitle: "25 décembre 1891",
    content: `Le 25 décembre 1891, le jour de Noël, la cathédrale est enfin inaugurée par l'évêque de Nantes. Il aura fallu 457 ans de travaux depuis la pose de la première pierre en 1434 ! Des dizaines de générations de tailleurs de pierre, de sculpteurs, de charpentiers et de maîtres verriers se sont succédé sur ce chantier. Et pourtant, le résultat est d'une grande harmonie : on a du mal à croire que certaines parties ont été construites à plus de quatre siècles d'écart. La cathédrale a été classée monument historique dès 1862. Mais le XXe siècle va lui réserver de nouvelles épreuves. En 1944, pendant la Seconde Guerre mondiale, des bombardements endommagent le bâtiment et détruisent une partie de ses vitraux. Après la guerre, les restaurateurs se remettent au travail pour soigner ses blessures.`,
    // double-page pop-up : une maquette en origami se déplie sur la page de droite
    popup: "cathedral",
    hint: "Cliquez sur la maquette pour l'observer de plus près",
    info: "Commencée en 1434 et inaugurée en 1891 : 457 ans de chantier pour cette façade aux deux tours carrées, ses cinq portails sculptés et sa voûte de tuffeau qui culmine à 37 mètres.",
  },

  // ─────────────────────────── PAGE 8 ───────────────────────────
  {
    chapterNumber: "08",
    title: "L'incendie de 1972",
    subtitle: "28 janvier 1972",
    content: `Le 28 janvier 1972, un terrible accident se produit. Pendant des travaux sur la toiture, un incendie se déclare. Les flammes dévorent la charpente en bois, et le toit s'effondre en partie. Les pompiers luttent toute la journée, et les Nantais regardent, impuissants, leur cathédrale brûler. Heureusement, les voûtes de pierre résistent en grande partie et protègent l'intérieur. Mais les dégâts sont immenses. Il faudra treize ans de restauration pour réparer les dommages. Pour éviter qu'un tel drame se reproduise, la nouvelle charpente n'est plus construite en bois, mais en béton, un matériau qui ne brûle pas. Les sculptures et les vitraux sont restaurés, et la pierre blanche est nettoyée. Au début des années 2000, la façade et l'extérieur sont à leur tour rénovés. La cathédrale retrouve alors une blancheur éclatante.`,
    illustration: "/images/cathedrale-incendie-tableau.webp",
    engraving: "cathedral",
    caption: "La cathédrale dans les flammes, peinture",
  },

  // ─────────────────────────── PAGE 9 ───────────────────────────
  {
    chapterNumber: "09",
    title: "L'incendie de 2020",
    subtitle: "2020 – 2025",
    content: `Le 18 juillet 2020, un nouveau drame frappe la cathédrale. Un incendie volontaire se déclare à l'intérieur, au petit matin. Le feu détruit le grand orgue, un instrument exceptionnel construit au XVIIe siècle, ainsi qu'une partie des vitraux. La chaleur et l'eau des lances des pompiers abîment aussi les voûtes. Cet incendie a lieu un an seulement après celui de Notre-Dame de Paris, et toute la France est émue. Un immense chantier commence alors. Les tailleurs de pierre, les charpentiers, les maîtres verriers et les restaurateurs d'art se relaient pendant cinq ans. Les voûtes sont consolidées, les pierres noircies sont nettoyées, et de nouveaux vitraux sont créés. Le 28 septembre 2025, la cathédrale rouvre enfin ses portes au public, au cours d'une grande célébration. Le grand orgue détruit, lui, doit encore être reconstruit.`,
    illustration: "/images/cathedrale-incendie-1972.webp",
    engraving: "cathedral",
    caption: "La charpente embrasée",
  },

  // ─────────────────────────── PAGE 10 ───────────────────────────
  {
    chapterNumber: "10",
    title: "Une cathédrale qui renaît toujours",
    subtitle: "Aujourd'hui",
    content: `La cathédrale Saint-Pierre-et-Saint-Paul de Nantes a une histoire hors du commun. Elle a été construite pendant près de cinq siècles, abîmée par les guerres, les révolutions, une explosion et deux grands incendies. Et pourtant, elle est toujours là, debout et lumineuse. Chaque fois, des femmes et des hommes se sont mobilisés pour la réparer et la transmettre aux générations suivantes. Aujourd'hui, elle accueille aussi bien les fidèles qui viennent prier que les visiteurs qui viennent admirer son architecture. En entrant, levez les yeux vers la voûte blanche, approchez-vous du tombeau de François II pour découvrir le double visage de la Prudence, et descendez dans la crypte pour voir les traces de la cathédrale romane. Vous comprendrez alors que ce monument n'est pas seulement un édifice de pierre : c'est la mémoire vivante de Nantes.`,
    illustration: "/images/cathedrale-facade-nuit.webp",
    engraving: "cathedral",
    caption: "La façade illuminée à la tombée de la nuit",
  },

];

export default { id: 'cathedrale', meta: bookMeta, chapters: chaptersData }
