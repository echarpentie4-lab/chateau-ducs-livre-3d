// #########################################################################
// #   📝 LIVRE 3 — LE PASSAGE POMMERAYE
// #   Même fonctionnement que src/data/livres/chateau.js : modifiez les
// #   textes, images et légendes ; ajoutez ou retirez des chapitres.
// #########################################################################

// =========================================================================
// 📖 ZONE À ÉDITER (1/2) : COUVERTURE, TRANCHE & PAGE DE TITRE
// =========================================================================

export const bookMeta = {
  shelfTitle: "Le Passage Pommeraye",
  leather: "#1d6044",
  cover: { emblem: "passage", corners: { tl: "lantern", tr: "lantern", bl: "stairs" } },

  coverKicker: "Histoire du",
  coverTitle: "Passage Pommeraye",
  coverFooter: "Nantes",
  spineTitle: "Le Passage Pommeraye",

  titlePageHeading: "Patrimoine de Nantes",
  titlePageTitle: "Le Passage Pommeraye",
  titlePageSubtitle: "Une galerie de verre et de rêves au cœur de Nantes",
  titlePageImprint: "À Nantes, chez l'Archiviste du Patrimoine",
  // Image de la page de titre (juste après la couverture) ; "" = gravure automatique
  titlePageImage: "/images/pommeraye-lithographie-couleur.png",
  titlePageImageFrame: true, // photo encadrée (false = dessin au trait fondu dans le papier)
  titleEngraving: "passage",

  runningHead: "Le Passage Pommeraye",
};

// =========================================================================
// 📝 ZONE À ÉDITER (2/2) : CHAPITRES
// =========================================================================

export const chaptersData = [

  // ─────────────────────────── PAGE 1 ───────────────────────────
  {
    chapterNumber: "01",
    title: "Nantes, ville riche et élégante",
    subtitle: "Début du XIXᵉ siècle",
    content: `Au début du XIXe siècle, Nantes est une ville riche. Son port, l'un des plus actifs de France, fait la fortune de nombreux marchands et armateurs. Une partie de cette richesse vient de la traite des esclaves et du commerce avec les colonies, une page sombre de l'histoire de la ville. Dans le quartier élégant autour du théâtre Graslin, on construit de beaux immeubles en pierre blanche, avec des balcons en fer forgé. Les rues sont animées : on s'y promène, on fait des achats, on se montre en habit à la mode. Mais un problème se pose : le quartier est construit sur une pente raide. Entre la rue de la Fosse, en bas près du fleuve, et le quartier Graslin, en haut, il faut monter et descendre des rues étroites et escarpées, souvent boueuses par temps de pluie.`,
    illustration: "/images/pommeraye-verriere.webp",
    engraving: "passage",
    caption: "La galerie et sa grande verrière",
  },

  // ─────────────────────────── PAGE 2 ───────────────────────────
  {
    chapterNumber: "02",
    title: "La mode des passages couverts",
    subtitle: "1840",
    content: `À Paris, une nouveauté fait fureur : les passages couverts. Ce sont des rues intérieures protégées par un toit de verre, bordées de boutiques. On peut s'y promener à l'abri de la pluie, du vent et de la boue, tout en admirant les vitrines. C'est l'ancêtre de nos centres commerciaux ! Un notaire nantais, Louis Pommeraye, a alors une idée ambitieuse : construire un passage couvert à Nantes. Il ne veut pas seulement faire un lieu de commerce. Il veut aussi relier le bas et le haut du quartier, entre la rue de la Fosse et la rue Santeuil, pour faciliter la vie des promeneurs. Il s'associe à un autre investisseur et à deux architectes, Jean-Baptiste Buron et Hippolyte Durand-Gasselin, pour réaliser ce projet audacieux. Le chantier commence à la fin de l'année 1840.`,
    illustration: "/images/pommeraye-statues.webp",
    engraving: "passage",
    caption: "Les statues du passage",
  },

  // ─────────────────────────── PAGE 3 ───────────────────────────
  {
    chapterNumber: "03",
    title: "Un défi d'architecte",
    subtitle: "1840 – 1843",
    content: `Construire ce passage n'est pas simple du tout. Entre ses deux entrées, il y a plus de 9 mètres de différence de hauteur, l'équivalent d'un immeuble de trois étages ! Comment faire une galerie agréable sur un terrain aussi pentu ? Les architectes trouvent une solution astucieuse : ils construisent le passage sur plusieurs niveaux. Au centre, un grand escalier relie les étages et devient la pièce maîtresse du lieu. Des galeries en balcon entourent ce grand espace, et un immense toit de verre et de métal laisse entrer la lumière du jour. Pour l'époque, c'est une prouesse technique. Le métal et le verre sont des matériaux modernes, que l'on commence tout juste à utiliser dans les grands bâtiments. Les ouvriers travaillent pendant près de trois ans pour donner vie à ce projet hors du commun.`,
    illustration: "/images/pommeraye-escalier-dessin.png",
    engraving: "passage",
    caption: "Le grand escalier, dessin à l'encre",
  },

  // ─────────────────────────── PAGE 4 ───────────────────────────
  {
    chapterNumber: "04",
    title: "L'inauguration en 1843",
    subtitle: "4 juillet 1843",
    content: `Le 4 juillet 1843, le passage Pommeraye est inauguré. Les Nantais découvrent avec émerveillement ce lieu qui ne ressemble à aucun autre. Sous la verrière, la lumière tombe doucement sur les boutiques, les escaliers et les balustrades. Les commerçants s'installent : on y trouve des chapeliers, des modistes, des bijoutiers, des marchands de jouets, de tissus ou de parfums. C'est l'endroit à la mode, où l'on vient se promener le dimanche dans ses plus beaux vêtements. Mais pour Louis Pommeraye, la fête a un goût amer. Le chantier a coûté beaucoup plus cher que prévu, et les boutiques ne rapportent pas assez d'argent au début. Le notaire y laisse une grande partie de sa fortune. Il a construit un chef-d'œuvre, mais son rêve l'a presque ruiné. Pourtant, son nom restera pour toujours attaché à ce lieu.`,
    illustration: "/images/pommeraye-lithographie.webp",
    engraving: "passage",
    caption: "Le passage au XIXᵉ siècle, lithographie",
  },

  // ─────────────────────────── PAGE 5 ───────────────────────────
  {
    chapterNumber: "05",
    title: "Un palais de sculptures",
    subtitle: "Les sculptures de Debay",
    content: `Ce qui rend le passage Pommeraye si spécial, c'est sa décoration. Le sculpteur Jean-Baptiste Debay y a installé de nombreuses statues. Sur les balcons de la galerie centrale, de jeunes enfants sculptés semblent veiller sur les promeneurs. Le long des murs, des personnages représentent les arts, les sciences, le commerce et l'industrie, tout ce qui faisait la fierté de la ville au XIXe siècle. Partout, on découvre des détails : des médaillons, des têtes sculptées, des guirlandes, des colonnes. Les rampes et les garde-corps sont en fonte, ornés de motifs délicats. Le soir, des lampes à gaz éclairent le passage et lui donnent une ambiance mystérieuse. En levant les yeux, en descendant les escaliers, en regardant dans les coins, on a l'impression d'explorer un petit palais rempli de secrets, où chaque visite permet de remarquer un nouveau détail.`,
    illustration: "/images/pommeraye-horloge.png",
    engraving: "passage",
    caption: "La galerie de l'Horloge",
  },

  // ─────────────────────────── PAGE 6 ───────────────────────────
  {
    chapterNumber: "06",
    title: "Un lieu qui traverse le temps",
    subtitle: "1976",
    content: `Les années passent, mais le passage Pommeraye reste un lieu aimé des Nantais. Les boutiques changent : les chapeliers et les modistes laissent la place à d'autres commerces, au rythme des modes. Le passage survit aux guerres, notamment aux bombardements qui frappent durement Nantes pendant la Seconde Guerre mondiale. Peu à peu, on comprend qu'il s'agit d'un véritable trésor du patrimoine. En 1976, il est classé monument historique, ce qui signifie qu'il est protégé et qu'on ne peut plus le modifier sans autorisation. C'est une reconnaissance importante. Parmi tous les passages couverts construits en France au XIXe siècle, très peu sont aussi originaux. Avec ses étages, son grand escalier et ses sculptures, le passage Pommeraye est considéré comme l'un des plus beaux passages couverts d'Europe.`,
    // double-page pop-up : une maquette en papier se déplie sur la page de droite
    popup: "passage",
    hint: "Cliquez sur la maquette pour l'observer de plus près",
    info: "Inauguré le 4 juillet 1843, le passage Pommeraye relie deux rues séparées de plus de 9 mètres de dénivelé : d'où son célèbre grand escalier, entouré de galeries à balcons, de statues et coiffé d'une verrière.",
  },

  // ─────────────────────────── PAGE 7 ───────────────────────────
  {
    chapterNumber: "07",
    title: "Le passage fait son cinéma",
    subtitle: "Jacques Demy",
    content: `Le passage Pommeraye a aussi inspiré les artistes, et en particulier un grand cinéaste nantais : Jacques Demy. Enfant, Demy a grandi à Nantes, et il adorait ce passage. Devenu réalisateur, il l'a filmé dans plusieurs de ses films. Dans « Lola », sorti en 1961, le passage sert de décor à des scènes importantes. Il apparaît aussi dans « Les Parapluies de Cherbourg » et dans « Une chambre en ville », un film qui se déroule entièrement à Nantes. Plus tard, l'épouse de Jacques Demy, la réalisatrice Agnès Varda, a raconté l'enfance de son mari dans un film intitulé « Jacquot de Nantes », où le passage est encore présent. Grâce au cinéma, des spectateurs du monde entier ont découvert ce lieu magique. Aujourd'hui encore, des photographes et des réalisateurs viennent y chercher l'ambiance si particulière de ses escaliers et de sa verrière.`,
    illustration: "/images/pommeraye-escalier-carte.png",
    engraving: "passage",
    caption: "Le grand escalier, carte postale ancienne",
  },

  // ─────────────────────────── PAGE 8 ───────────────────────────
  {
    chapterNumber: "08",
    title: "Une grande rénovation",
    subtitle: "La restauration",
    content: `Avec le temps, la pierre se salit, le métal rouille et la verrière laisse passer l'eau. Pour sauver le passage, d'importants travaux de restauration sont menés. Les sculptures sont nettoyées avec soin, une par une, pour retrouver leur blancheur. Les éléments de fonte sont réparés et repeints, et la verrière est remise en état pour laisser à nouveau entrer toute la lumière. Les artisans spécialisés travaillent comme des chirurgiens : il faut réparer sans abîmer, et respecter l'aspect d'origine. Pendant ces travaux, le passage continue souvent à vivre, avec ses commerçants et ses visiteurs. Ce type de chantier coûte cher et demande beaucoup de patience. Mais le résultat en vaut la peine : le passage Pommeraye retrouve l'éclat qu'il avait au temps de son inauguration, pour le plus grand plaisir des promeneurs.`,
    illustration: "/images/pommeraye-galerie.png",
    engraving: "passage",
    caption: "La galerie des boutiques",
  },

  // ─────────────────────────── PAGE 9 ───────────────────────────
  {
    chapterNumber: "09",
    title: "Le passage aujourd'hui",
    subtitle: "Aujourd'hui",
    content: `Aujourd'hui, le passage Pommeraye est à la fois un lieu de shopping et un monument que l'on visite. On y trouve des boutiques de mode, de décoration, de cadeaux, des chocolatiers et des créateurs. Il est toujours aussi pratique pour passer du bas au haut du quartier, entre la rue de la Fosse et la rue Crébillon, l'une des rues commerçantes les plus animées de Nantes. Chaque jour, des milliers de personnes le traversent : des habitants pressés, des touristes émerveillés, des familles qui prennent des photos dans le grand escalier. Le passage fait partie du parcours du « Voyage à Nantes », la ligne verte peinte au sol qui guide les visiteurs à travers les plus beaux lieux de la ville. Pour beaucoup de touristes, c'est l'une des étapes les plus marquantes de leur découverte de Nantes.`,
    illustration: "/images/pommeraye-voute.png",
    engraving: "passage",
    caption: "L'arc sculpté et sa verrière",
  },

  // ─────────────────────────── PAGE 10 ───────────────────────────
  {
    chapterNumber: "10",
    title: "Un trésor caché au cœur de la ville",
    subtitle: "Hier et demain",
    content: `Le passage Pommeraye raconte une belle histoire : celle d'un homme qui a osé un projet fou, même s'il y a laissé sa fortune. Il a transformé un problème, une pente trop raide, en une œuvre d'art où l'on aime se promener. Près de deux siècles plus tard, son rêve est toujours vivant. Les sculptures veillent encore sur les promeneurs, la lumière traverse toujours la grande verrière, et les escaliers continuent de relier le bas et le haut de la ville. La prochaine fois que vous y passerez, prenez le temps de vous arrêter. Levez les yeux vers les statues, observez les détails des balustrades, imaginez les dames en grande robe et les messieurs en chapeau haut-de-forme qui s'y promenaient en 1843. Vous verrez : le passage Pommeraye n'est pas seulement un raccourci, c'est un voyage dans le temps.`,
    illustration: "/images/pommeraye-carte-postale.webp",
    engraving: "passage",
    caption: "Le passage Pommeraye, carte postale ancienne",
  },

];

export default { id: 'pommeraye', meta: bookMeta, chapters: chaptersData }
