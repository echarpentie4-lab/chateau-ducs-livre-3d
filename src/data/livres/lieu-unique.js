// #########################################################################
// #   📝 LIVRE 2 — LE LIEU UNIQUE
// #   Même fonctionnement que src/data/livres/chateau.js : modifiez les
// #   textes, images et légendes ; ajoutez ou retirez des chapitres.
// #########################################################################

// =========================================================================
// 📖 ZONE À ÉDITER (1/2) : COUVERTURE, TRANCHE & PAGE DE TITRE
// =========================================================================

export const bookMeta = {
  shelfTitle: "Le Lieu Unique",
  leather: "#1f4f86",
  cover: { emblem: "lu", corners: { tl: "biscuit", tr: "biscuit", bl: "lu" } },

  coverKicker: "Histoire du",
  coverTitle: "Lieu Unique",
  coverFooter: "Nantes",
  spineTitle: "Le Lieu Unique — ancienne usine LU",

  titlePageHeading: "Patrimoine de Nantes",
  titlePageTitle: "Le Lieu Unique",
  titlePageSubtitle: "De la biscuiterie LU au temple de la culture",
  titlePageImprint: "À Nantes, chez l'Archiviste du Patrimoine",
  // Image de la page de titre (juste après la couverture) ; "" = gravure automatique
  titlePageImage: "/images/lu-deux-tours-pont.webp",
  titlePageImageFrame: true, // photo encadrée (false = dessin au trait fondu dans le papier)
  titleEngraving: "lu",

  runningHead: "Le Lieu Unique",
};

// =========================================================================
// 📝 ZONE À ÉDITER (2/2) : CHAPITRES
// =========================================================================

export const chaptersData = [

  // ─────────────────────────── PAGE 1 ───────────────────────────
  {
    chapterNumber: "01",
    title: "Une petite pâtisserie nantaise",
    subtitle: "1846",
    content: `En 1846, à Nantes, un jeune pâtissier venu de Lorraine, Jean-Romain Lefèvre, ouvre une boutique rue Boileau avec sa femme, Pauline-Isabelle Utile. Ensemble, ils fabriquent des biscuits et des gâteaux secs qu'ils vendent aux Nantais. Le couple a l'idée d'associer leurs deux noms : Lefèvre et Utile. Les initiales de ces deux noms donnent deux lettres qui deviendront célèbres dans toute la France : L et U, « LU ». À cette époque, Nantes est un grand port. Le sucre arrive des Antilles, le beurre et la farine viennent des campagnes de l'Ouest : tout est réuni pour fabriquer de bons biscuits. La petite boutique marche bien, et les clients reviennent. Mais personne ne se doute encore que cette pâtisserie de quartier va devenir l'une des plus grandes biscuiteries d'Europe, et donner son nom à un lieu unique.`,
    illustration: "/images/lu-ouvriers-cour.webp",
    engraving: "lu",
    caption: "Les ouvrières et ouvriers de la biscuiterie LU",
  },

  // ─────────────────────────── PAGE 2 ───────────────────────────
  {
    chapterNumber: "02",
    title: "L'invention du Petit-Beurre",
    subtitle: "1886",
    content: `En 1886, leur fils, Louis Lefèvre-Utile, invente un biscuit qui va faire le tour du monde : le Petit-Beurre. Il est simple, carré, doré et croustillant. Mais sa forme cache un petit secret amusant. On raconte que ses 4 coins représentent les 4 saisons de l'année, que ses 52 dents rappellent les 52 semaines, et que ses 24 petits trous correspondent aux 24 heures d'une journée. Un biscuit pour tous les jours de l'année ! Louis est aussi un homme moderne et passionné. Il aime la photographie et il comprend avant tout le monde l'importance de la publicité. Il disait que, pour donner envie de manger, rien ne vaut de séduire l'œil. Il fait donc appel à de grands artistes, comme le peintre Alfons Mucha, pour dessiner de magnifiques affiches et des boîtes en métal décorées que l'on collectionne encore aujourd'hui.`,
    illustration: "/images/lu-four.webp",
    engraving: "lu",
    caption: "Une jeune ouvrière devant le four à biscuits",
  },

  // ─────────────────────────── PAGE 3 ───────────────────────────
  {
    chapterNumber: "03",
    title: "Une usine au cœur de la ville",
    subtitle: "Début du XXᵉ siècle",
    content: `Pour fabriquer toujours plus de biscuits, LU s'installe dans une grande usine au bord de l'eau, le long du canal Saint-Félix, juste en face du château des ducs de Bretagne. Les bateaux et les trains y apportent les matières premières, et repartent chargés de boîtes de biscuits pour toute la France. Des centaines puis des milliers d'ouvriers et d'ouvrières y travaillent. Dans le quartier, une délicieuse odeur de biscuit chaud flotte dans l'air. Au début du XXe siècle, l'architecte Auguste Bluysen dessine deux tours magnifiques pour encadrer l'entrée de l'usine. Elles sont couvertes de mosaïques, de sculptures et surmontées de dômes, comme de véritables phares. Ces tours ne servent pas à grand-chose… sauf à montrer à tous la puissance de la marque ! Ce sont des publicités géantes, visibles de loin, qui font la fierté de Nantes.`,
    illustration: "/images/lu-atelier.webp",
    engraving: "lu",
    caption: "L'atelier d'emballage des biscuits",
  },

  // ─────────────────────────── PAGE 4 ───────────────────────────
  {
    chapterNumber: "04",
    title: "La biscuiterie au XXe siècle",
    subtitle: "XXᵉ siècle",
    content: `Pendant des dizaines d'années, l'usine LU tourne à plein régime. Les machines modernes remplacent peu à peu le travail à la main, et les biscuits sortent par milliers chaque jour. Le Petit-Beurre, mais aussi d'autres gâteaux, deviennent des goûters incontournables pour les enfants de France. Mais l'usine traverse aussi des moments difficiles. Pendant la Seconde Guerre mondiale, Nantes est durement bombardée en 1943, et le quartier souffre. Plus tard, l'entreprise change de propriétaires et grandit encore. Au fil du XXe siècle, l'une des deux belles tours disparaît : il n'en restera plus qu'une seule, celle que l'on peut encore admirer aujourd'hui. Peu à peu, l'usine devient trop petite et mal adaptée. Le centre-ville n'est plus un bon endroit pour fabriquer des biscuits en très grande quantité, avec des camions qui doivent circuler dans les rues étroites.`,
    illustration: "/images/lu-usine-quai.webp",
    engraving: "lu",
    caption: "L'usine et ses deux tours au bord de l'eau",
  },

  // ─────────────────────────── PAGE 5 ───────────────────────────
  {
    chapterNumber: "05",
    title: "Le départ et le silence",
    subtitle: "1986",
    content: `En 1986, la production quitte le centre de Nantes. Les biscuits LU sont désormais fabriqués dans une nouvelle usine, à la campagne, au sud de la ville. Les grands bâtiments du bord du canal se retrouvent vides. Les machines se taisent, les ouvriers partent, l'odeur de biscuit disparaît. Pendant plusieurs années, l'ancienne usine reste abandonnée. Les vitres se cassent, la poussière s'installe, et beaucoup se demandent ce que l'on va bien pouvoir faire de ces immenses halles. Certains pensent même à les détruire. Mais des artistes, eux, voient dans ce lieu un formidable terrain de jeu. Des troupes de théâtre s'y installent pour répéter, construire leurs décors et inventer leurs spectacles. Parmi elles, une troupe nantaise qui va devenir très célèbre : le Royal de Luxe, connue pour ses géants qui marchent dans les rues.`,
    illustration: "/images/lu-usine-carte.webp",
    engraving: "lu",
    caption: "L'usine Lefèvre-Utile, carte postale ancienne",
  },

  // ─────────────────────────── PAGE 6 ───────────────────────────
  {
    chapterNumber: "06",
    title: "Une nouvelle idée",
    subtitle: "Années 1990",
    content: `Dans les années 1990, la ville de Nantes décide de miser sur la culture pour se réinventer. Un homme, Jean Blaise, porte un projet audacieux : transformer l'ancienne biscuiterie en un grand lieu ouvert à tous les arts. Pour cela, il fait appel à un architecte original, Patrick Bouchain. Celui-ci ne veut pas effacer le passé de l'usine. Au contraire ! Il garde les murs de briques, les poutres métalliques, les grands volumes et les traces du travail des ouvriers. Il les répare, les nettoie et les rend accueillants, sans tout reconstruire. L'idée est simple : faire vivre le passé et le présent ensemble. Et comme le lieu doit garder le souvenir de LU, on lui trouve un nom malin, qui reprend les deux célèbres lettres : ce sera le « lieu unique ». En même temps, la dernière tour LU est restaurée avec ses décors et ses couleurs d'origine.`,
    // double-page pop-up : une maquette en origami se déplie sur la page de droite
    popup: "lu",
    hint: "Cliquez sur la maquette pour l'observer de plus près",
    info: "Dessinée par Auguste Bluysen, la tour LU encadrait l'entrée de la biscuiterie avec sa jumelle. Restaurée pour l'ouverture du lieu unique, elle a retrouvé ses mosaïques, son dôme et son lanternon.",
  },

  // ─────────────────────────── PAGE 7 ───────────────────────────
  {
    chapterNumber: "07",
    title: "L'ouverture pour l'an 2000",
    subtitle: "Décembre 1999",
    content: `Fin décembre 1999, alors que le monde entier s'apprête à fêter le passage à l'an 2000, le lieu unique ouvre ses portes avec une grande fête. Les Nantais découvrent leur ancienne usine transformée. Là où l'on fabriquait autrefois des biscuits, on trouve maintenant des salles de spectacle, des espaces d'exposition, un bar, un restaurant, une librairie et même une crèche pour les tout-petits. Pour marquer ce moment, un projet étonnant est imaginé : le « Grenier du siècle ». Les habitants sont invités à déposer des objets personnels, des lettres ou des souvenirs dans des boîtes fermées. Ces boîtes sont rangées dans un grand mur et ne seront ouvertes qu'en 2100, cent ans plus tard ! C'est une sorte de message envoyé aux Nantais du futur, qui découvriront comment on vivait à la fin du XXe siècle.`,
    illustration: "/images/lu-tour-chantier.webp",
    engraving: "lu",
    caption: "Le dôme de la tour LU en chantier",
  },

  // ─────────────────────────── PAGE 8 ───────────────────────────
  {
    chapterNumber: "08",
    title: "Un lieu pour tous les arts",
    subtitle: "Aujourd'hui",
    content: `Aujourd'hui, le lieu unique est une « scène nationale », c'est-à-dire un grand centre culturel soutenu par l'État et la ville. On y vient pour toutes sortes de raisons. On peut y voir des pièces de théâtre, des spectacles de danse et de cirque, écouter des concerts, découvrir des expositions d'art contemporain, assister à des débats ou rencontrer des écrivains. Des artistes du monde entier viennent y travailler et y créer leurs œuvres. Mais le lieu unique n'est pas réservé aux amateurs d'art. Beaucoup de Nantais viennent simplement boire un verre au bar, déjeuner, feuilleter un livre ou se retrouver entre amis. C'est un endroit vivant, où se croisent les étudiants, les familles, les artistes et les curieux. C'est justement ce mélange qui rend le lieu unique… unique !`,
    illustration: "/images/lu-ouvriers-caisses.png",
    engraving: "lu",
    caption: "La cour de l'usine, au temps des caisses de biscuits",
  },

  // ─────────────────────────── PAGE 9 ───────────────────────────
  {
    chapterNumber: "09",
    title: "La tour LU et son gyrorama",
    subtitle: "Depuis 2004",
    content: `La tour LU, seule rescapée des deux tours de l'usine, a retrouvé tout son éclat. Avec ses mosaïques, ses sculptures et son dôme, elle se dresse fièrement face au château des ducs de Bretagne. Mais elle cache une surprise ! En 2004, elle s'ouvre au public avec une drôle de machine installée tout en haut : le gyrorama. C'est une plateforme que l'on fait tourner à la manivelle, le long des vitres du dôme, comme dans un roman de Jules Verne. En montant à bord, on découvre, à environ 35 mètres de hauteur, une vue sur toute la ville : le château, la cathédrale, la Loire et les toits de Nantes. À l'intérieur de la tour, on peut aussi admirer des photographies prises par Louis Lefèvre-Utile lui-même, l'inventeur du Petit-Beurre.`,
    illustration: "/images/lu-maquette-usine.webp",
    engraving: "lu",
    caption: "Maquette de l'usine LU et de ses deux tours",
  },

  // ─────────────────────────── PAGE 10 ───────────────────────────
  {
    chapterNumber: "10",
    title: "Un lieu, deux vies",
    subtitle: "Hier et demain",
    content: `L'histoire du lieu unique montre qu'un bâtiment peut avoir plusieurs vies. Pendant plus d'un siècle, il a nourri des générations d'enfants avec ses biscuits. Aujourd'hui, il nourrit leur curiosité avec des spectacles, des œuvres et des rencontres. Au lieu de détruire les vieilles usines, Nantes a choisi de les transformer et de leur offrir un nouvel avenir. Le lieu unique a ouvert la voie à d'autres projets dans la ville, comme les Machines de l'île sur les anciens chantiers navals. Quand vous passerez devant la tour LU, levez les yeux et pensez à cette petite pâtisserie de la rue Boileau, à l'inventeur du Petit-Beurre, aux ouvriers de l'usine et aux artistes qui l'ont réveillée. Et peut-être qu'en 2100, vos arrière-petits-enfants ouvriront les boîtes du Grenier du siècle pour découvrir notre époque.`,
    illustration: "/images/lu-tour-aujourdhui.webp",
    engraving: "lu",
    caption: "La tour LU aujourd'hui",
  },

];

export default { id: 'lieuUnique', meta: bookMeta, chapters: chaptersData }
