// #########################################################################
// #                                                                       #
// #   📝 FICHIER DE CONTENU — LE SEUL FICHIER À MODIFIER POUR VOS TEXTES   #
// #                                                                       #
// #   Aucun code 3D ici. Modifiez les textes entre guillemets / backticks #
// #   puis sauvegardez : le livre se met à jour automatiquement.          #
// #                                                                       #
// #   Astuces :                                                           #
// #   • Dans "content", une ligne vide crée un nouveau paragraphe.        #
// #   • La taille du texte s'adapte toute seule à la longueur.            #
// #   • Ajouter / retirer un chapitre : copiez un bloc { ... } complet,   #
// #     virgule comprise. La pagination se recalcule seule.               #
// #   • "illustration" : chemin d'une image placée dans /public/images    #
// #     (ex : "/images/mon-image.jpg") ou une URL https.                  #
// #     Laissez "" pour une gravure dessinée automatiquement, choisie     #
// #     (elle s'affiche aussi le temps que l'image se charge)             #
// #     avec "engraving" : "castle" | "drakkar" | "blason" | "union"      #
// #     | "tower".                                                        #
// #   • Une double-page { type: "popup" } fait surgir une maquette en     #
// #     origami 3D au-dessus de la page de droite.                        #
// #                                                                       #
// #########################################################################


// =========================================================================
// 📖 ZONE À ÉDITER (1/2) : COUVERTURE, TRANCHE & PAGE DE TITRE
// =========================================================================

export const bookMeta = {
  // Couverture en cuir (texte doré)
  coverKicker: "Histoire du",
  coverTitle: "Château des Ducs de Bretagne",
  coverFooter: "Nantes",

  // Texte doré sur la tranche (le dos du livre)
  spineTitle: "Château des ducs de Bretagne",

  // Page de titre
  titlePageHeading: "Patrimoine de Nantes",
  titlePageTitle: "Le Château des Ducs de Bretagne",
  titlePageSubtitle: "Mille ans d'histoire au bord de la Loire",
  titlePageImprint: "À Nantes, chez l'Archiviste du Château",

  // Petit titre courant en haut des pages de gauche
  runningHead: "Le Château des Ducs de Bretagne",
};


// =========================================================================
// 📝 ZONE À ÉDITER (2/2) : RÉDACTION DES CHAPITRES DU CHÂTEAU DE NANTES
// Remplace simplement les textes ci-dessous par tes propres rédactions.
// =========================================================================

export const chaptersData = [

  // ─────────────────────────── PAGE 1 ───────────────────────────
  {
    chapterNumber: "01",
    title: "Au bord du fleuve",
    subtitle: "De l'Antiquité au IIIᵉ siècle",
    content: `Il y a très longtemps, à l'endroit où la rivière Erdre rejoint la Loire, des hommes s'installent sur une petite colline qui domine les marais. Le lieu est parfait : l'eau protège de plusieurs côtés, et les bateaux peuvent y accoster facilement. À l'époque romaine, une ville grandit ici. Elle porte le nom du peuple gaulois qui l'habite, les Namnètes : c'est la naissance de Nantes. Vers le IIIe siècle, pour se protéger des attaques, la ville s'entoure d'un grand mur de pierre. Dans un coin de ce mur, juste au bord du fleuve, les gardes peuvent surveiller tous les bateaux qui arrivent. C'est à cet endroit précis que, des siècles plus tard, va naître un château. Chaque époque y construira sur les traces de la précédente, comme on écrit une nouvelle page dans un vieux livre.`,
    illustration: "/images/chateau-bord-de-loire.webp",
    caption: "Le château au bord de la Loire — carte postale ancienne",
  },

  // ─────────────────────────── PAGE 2 ───────────────────────────
  {
    chapterNumber: "02",
    title: "Les Vikings",
    subtitle: "843 – 937",
    content: `En l'an 843, des navires étranges remontent la Loire : ce sont les drakkars des Vikings, des guerriers venus du Nord de l'Europe. Ils attaquent Nantes par surprise, pillent la ville et s'en prennent même aux habitants réfugiés dans la cathédrale. Pendant presque cent ans, les Vikings reviennent régulièrement et finissent même par s'installer dans la région. Les Nantais vivent dans la peur. Puis arrive un chef breton courageux, Alain Barbetorte, qui avait grandi en exil en Angleterre. En 937, il revient en Bretagne et chasse les Vikings de Nantes. On raconte qu'il dut se frayer un chemin à travers les ronces pour atteindre la cathédrale abandonnée. Il fait de Nantes sa capitale et renforce les défenses de la ville, surtout du côté du fleuve, d'où sont toujours venus les dangers.`,
    illustration: "/images/vikings-drakkar.png",
    engraving: "drakkar", // gravure affichée pendant le chargement de l'image
    caption: "Les drakkars des Vikings remontent le fleuve",
  },

  // ─────────────────────────── PAGE 3 ───────────────────────────
  {
    chapterNumber: "03",
    title: "La Tour Neuve",
    subtitle: "Vers 1207 – XIVᵉ siècle",
    content: `Vers 1207, le seigneur Guy de Thouars, qui gouverne la Bretagne au nom de sa fille, fait construire une nouvelle forteresse au bord de la Loire, dans le coin de l'ancien mur romain. On l'appelle la « Tour Neuve », pour la distinguer d'un château plus ancien situé au centre de la ville, le Bouffay. Au fil des années, les ducs de Bretagne, c'est-à-dire les princes qui gouvernent la région, l'agrandissent et préfèrent y habiter. Au XIVe siècle, la Bretagne traverse une longue guerre entre deux familles qui veulent toutes les deux gouverner le duché. C'est la famille de Montfort qui gagne. Le nouveau duc, Jean IV, renforce le château et y fait construire une grande tour, le Vieux Donjon. On peut encore en voir des restes aujourd'hui dans la cour du château.`,
    illustration: "/images/plan-1600.webp",
    caption: "Plan du château de Nantes en 1600",
  },

  // ─────────────────────────── PAGE 4 ───────────────────────────
  {
    chapterNumber: "04",
    title: "François II, le duc bâtisseur",
    subtitle: "1458 – 1466",
    content: `En 1458, François II devient duc de Bretagne. À cette époque, la Bretagne est presque un pays indépendant : elle a sa propre monnaie, ses propres lois et ses ambassadeurs. Mais le roi de France, son puissant voisin, aimerait bien la contrôler. En 1466, François II décide de construire un château plus grand, plus solide et plus beau. Vu de l'extérieur, c'est une vraie forteresse : de hautes murailles, sept grosses tours et des douves remplies par l'eau de la Loire. Mais une fois le pont-levis franchi, on découvre dans la cour un véritable palais, avec de grandes fenêtres et de belles pierres blanches, appelées tuffeau. C'est là que vit la cour du duc. On y organise des fêtes, des banquets et des réceptions. Ce château montre à tous la richesse et la puissance de la Bretagne.`,
    illustration: "/images/tours-entree.png",
    caption: "Les tours de l'entrée et le pont",
  },

  // ───────────────────── DOUBLE-PAGE POP-UP (ORIGAMI 3D) ─────────────────────
  // Une maquette en papier plié surgit au-dessus de la page de droite.
  {
    type: "popup",
    model: "castle",
    title: "La forteresse de François II",
    subtitle: "Planche dépliante",
    content: `Sept grosses tours, de hautes courtines et des douves remplies par la Loire : vue de l'extérieur, c'est une forteresse. Mais derrière le pont-levis se cache un palais de tuffeau blanc, où vit la cour du duc.`,
    hint: "Cliquez sur la maquette pour l'observer de plus près",
    // Texte de l'info-bulle qui s'affiche au clic sur la maquette
    info: `Construit à partir de 1466 par François II, le château mêle forteresse militaire (tours, courtines, douves) et palais de la Renaissance (le Grand Logis, aux lucarnes sculptées comme de la dentelle).`,
  },

  // ─────────────────────────── PAGE 5 ───────────────────────────
  {
    chapterNumber: "05",
    title: "Anne de Bretagne",
    subtitle: "1477 – 1491",
    content: `Le 25 janvier 1477, une petite fille naît au château : Anne, la fille du duc François II. Comme son père n'a pas de fils, c'est elle qui héritera un jour de la Bretagne. Très vite, les princes de toute l'Europe veulent l'épouser, car épouser Anne, c'est obtenir la Bretagne ! Mais le roi de France veut s'emparer du duché. La guerre éclate. En 1488, l'armée bretonne est battue à Saint-Aubin-du-Cormier. Quelques semaines plus tard, François II meurt. Anne n'a que 11 ans, et la voilà duchesse de Bretagne. Elle essaie de résister, mais les troupes françaises prennent Nantes et son château en 1491. Pour protéger son pays, Anne n'a plus le choix : en décembre 1491, elle épouse le roi de France, Charles VIII. La jeune duchesse devient reine de France.`,
    illustration: "/images/anne-de-bretagne.png",
    engraving: "blason",
    caption: "Anne de Bretagne, gravure ancienne",
  },

  // ─────────────────────────── PAGE 6 ───────────────────────────
  {
    chapterNumber: "06",
    title: "Deux fois reine",
    subtitle: "1498 – 1514",
    content: `En 1498, le roi Charles VIII meurt après s'être cogné la tête contre une porte basse du château d'Amboise. Anne revient en Bretagne et gouverne de nouveau son duché. Mais l'histoire n'est pas finie : le 8 janvier 1499, elle épouse le nouveau roi, Louis XII, dans la chapelle du château de Nantes. Elle est ainsi la seule femme de l'histoire à avoir été deux fois reine de France ! Anne aime son château. Elle fait terminer les travaux commencés par son père. Elle fait décorer le Grand Logis, le bâtiment principal, avec des sculptures de pierre fines comme de la dentelle, et construire une tour aux balcons élégants, la tour de la Couronne d'Or. Quand elle meurt en 1514, son cœur est placé dans une précieuse boîte en or et rapporté à Nantes, près de ses parents.`,
    illustration: "/images/anne-couronnee.png",
    engraving: "castle",
    caption: "Anne de Bretagne, deux fois reine de France",
  },

  // ─────────────────────────── PAGE 7 ───────────────────────────
  {
    chapterNumber: "07",
    title: "La Bretagne devient française",
    subtitle: "1532 – 1598",
    content: `Après la mort d'Anne, sa fille Claude épouse le futur roi François Ier. La Bretagne n'a plus de duc à elle. En 1532, elle s'unit officiellement à la France, en gardant certains droits particuliers. Le château n'appartient plus aux ducs, mais au roi, qui y place un gouverneur. Quelques années plus tard, la France est déchirée par les guerres de Religion entre catholiques et protestants. Le gouverneur de Bretagne, le duc de Mercœur, refuse d'obéir au roi Henri IV. Il transforme le château en citadelle et ajoute de grands bastions, des murs en forme de pointe qui résistent mieux aux boulets de canon. En 1598, Mercœur se soumet enfin, et Henri IV vient à Nantes. Impressionné par les murailles, il se serait écrié : « Les ducs de Bretagne n'étaient pas de petits compagnons ! » Cette année-là, il signe à Nantes l'édit de Nantes, qui ramène la paix entre catholiques et protestants.`,
    illustration: "/images/armes-france-bretagne.png",
    engraving: "union",
    caption: "Les armes de France et de Bretagne réunies",
  },

  // ─────────────────────────── PAGE 8 ───────────────────────────
  {
    chapterNumber: "08",
    title: "Une prison pour les ennemis du roi",
    subtitle: "1626 – 1661",
    content: `Au XVIIe siècle, le château n'est plus une maison de princes. Avec ses murs épais et ses soldats, il devient une prison pour les personnages importants qui ont déplu au roi. En 1626, le comte de Chalais y est enfermé : il est accusé d'avoir comploté contre le puissant cardinal de Richelieu, et il sera condamné à mort. En 1654, c'est le tour du cardinal de Retz, un ennemi du ministre Mazarin. Mais lui ne compte pas rester enfermé ! Un soir d'août, il s'évade en se laissant glisser le long d'une corde depuis le haut des remparts, puis s'enfuit à cheval. Il tombe et se blesse à l'épaule, mais il réussit à s'échapper. En 1661, le jeune roi Louis XIV vient à Nantes. Il y fait arrêter son ministre des finances, Nicolas Fouquet, par d'Artagnan, le vrai mousquetaire qui a inspiré le célèbre roman Les Trois Mousquetaires.`,
    illustration: "/images/voutes-prison.webp",
    engraving: "tower",
    caption: "Sous les voûtes du château",
  },

  // ─────────────────────────── PAGE 9 ───────────────────────────
  {
    chapterNumber: "09",
    title: "Caserne, explosion et musée",
    subtitle: "1800 – 1924",
    content: `Peu à peu, le château devient une caserne : des soldats y vivent, et on y stocke des armes et de la poudre à canon. C'est dangereux… Le 25 mai 1800, la poudre entreposée dans la tour des Espagnols explose ! La tour est entièrement détruite, tout comme la chapelle où Anne de Bretagne s'était mariée. En 1832, le château accueille une dernière prisonnière célèbre : la duchesse de Berry, arrêtée après avoir passé de longues heures cachée derrière une cheminée dans une maison de Nantes. Au XIXe siècle, on comprend que le château est un trésor du passé, et il est protégé comme monument historique. En 1915, la ville de Nantes l'achète, et en 1924 elle y ouvre un musée. Un peu plus tard, les bras de la Loire qui traversaient la ville sont recouverts : le château, qui avait toujours eu les pieds dans l'eau, se retrouve en pleine ville.`,
    illustration: "/images/explosion-1800.webp",
    caption: "L'explosion de la tour des Espagnols, 25 mai 1800",
  },

  // ─────────────────────────── PAGE 10 ───────────────────────────
  {
    chapterNumber: "10",
    title: "Le château aujourd'hui",
    subtitle: "Depuis 1990",
    content: `Au début des années 1990, la ville lance un immense chantier pour restaurer le château. Pendant plus de quinze ans, architectes, tailleurs de pierre et historiens lui redonnent son éclat : les pierres blanches sont nettoyées, les toits et les sculptures sont réparés. En 2007, le château rouvre ses portes, plus beau que jamais. Il accueille aujourd'hui le musée d'histoire de Nantes, avec 32 salles qui racontent la vie de la ville, des ducs de Bretagne jusqu'à aujourd'hui. Tout le monde peut traverser la cour gratuitement et marcher sur les remparts pour admirer la ville. Forteresse contre les ennemis, palais des ducs, maison d'une reine, prison, caserne puis musée : en mille ans, le château a eu bien des vies. Mais il est toujours là, fier et blanc, à veiller sur Nantes.`,
    illustration: "/images/chateau-en-ville.png",
    caption: "Le château au cœur de la ville",
  },

];

// =========================================================================
// FIN DE LA ZONE À ÉDITER
// =========================================================================
