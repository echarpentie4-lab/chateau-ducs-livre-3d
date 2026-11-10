// #########################################################################
// #   📝 LIVRE 4 — LES MACHINES DE L'ÎLE
// #   Même fonctionnement que src/data/livres/chateau.js : modifiez les
// #   textes, images et légendes ; ajoutez ou retirez des chapitres.
// #########################################################################

// =========================================================================
// 📖 ZONE À ÉDITER (1/2) : COUVERTURE, TRANCHE & PAGE DE TITRE
// =========================================================================

export const bookMeta = {
  shelfTitle: "Les Machines de l'Île",
  leather: "#7d4019",
  cover: { emblem: "elephant", corners: { tl: "gear", tr: "gear", bl: "elephant" } },

  coverKicker: "Histoire des",
  coverTitle: "Machines de l'Île",
  coverFooter: "Nantes",
  spineTitle: "Les Machines de l'Île",

  titlePageHeading: "Patrimoine de Nantes",
  titlePageTitle: "Les Machines de l'Île",
  titlePageSubtitle: "Quand les rêves de Jules Verne prennent vie à Nantes",
  titlePageImprint: "À Nantes, chez l'Archiviste du Patrimoine",
  // Image de la page de titre (juste après la couverture) ; "" = gravure automatique
  titlePageImage: "",
  titlePageImageFrame: true, // photo encadrée (false = dessin au trait fondu dans le papier)
  titleEngraving: "elephant",

  runningHead: "Les Machines de l'Île",
};

// =========================================================================
// 📝 ZONE À ÉDITER (2/2) : CHAPITRES
// =========================================================================

export const chaptersData = [

  // ─────────────────────────── PAGE 1 ───────────────────────────
  {
    chapterNumber: "01",
    title: "Une île de bateaux",
    subtitle: "XXᵉ siècle",
    content: `Au milieu de la Loire, à Nantes, se trouve une grande île. Pendant plus d'un siècle, une partie de cette île a été occupée par des chantiers navals, c'est-à-dire des usines où l'on construisait des bateaux. Des milliers d'ouvriers y travaillaient : soudeurs, charpentiers, chaudronniers, peintres… Ils fabriquaient d'immenses navires, des cargos, des paquebots et même des sous-marins. Le bruit des marteaux et des machines résonnait jour et nuit. Les grandes grues se dressaient au-dessus du fleuve, et chaque lancement d'un nouveau bateau était une fête pour la ville. Les chantiers faisaient la fierté et la richesse de Nantes. Mais à partir des années 1970, la construction navale traverse une crise. Les commandes diminuent, la concurrence d'autres pays devient très forte, et l'avenir des chantiers devient incertain.`,
    illustration: "",
    engraving: "elephant",
    caption: "Illustration à venir",
  },

  // ─────────────────────────── PAGE 2 ───────────────────────────
  {
    chapterNumber: "02",
    title: "La fin des chantiers",
    subtitle: "1987",
    content: `En 1987, le dernier chantier naval de Nantes ferme ses portes. C'est un moment très triste pour la ville. Des milliers de personnes perdent leur travail, et toute une partie de l'histoire nantaise semble s'arrêter. Sur l'île, les immenses halles où l'on construisait les bateaux se retrouvent vides et silencieuses. Les grues ne bougent plus, et les herbes poussent entre les rails. Pendant des années, ce grand terrain reste un peu oublié. Mais la ville de Nantes ne veut pas laisser cet endroit à l'abandon. Elle lance un grand projet pour transformer l'île : construire de nouveaux quartiers, des parcs, des écoles, des bureaux, et garder la mémoire du passé ouvrier. Il faut aussi trouver une idée forte, capable de redonner vie aux anciennes halles et d'attirer à nouveau les habitants sur ce lieu chargé d'histoire.`,
    illustration: "",
    engraving: "elephant",
    caption: "Illustration à venir",
  },

  // ─────────────────────────── PAGE 3 ───────────────────────────
  {
    chapterNumber: "03",
    title: "Deux inventeurs de rêves",
    subtitle: "Les créateurs",
    content: `Cette idée va venir de deux artistes passionnés : François Delarozière et Pierre Orefice. François Delarozière est un constructeur de machines de spectacle. Avec la compagnie de théâtre de rue Royal de Luxe, il a déjà inventé des géants articulés qui marchent dans les rues des villes et émerveillent des foules immenses. Pierre Orefice, lui, sait monter et organiser de grands projets artistiques. Ensemble, ils imaginent un lieu incroyable : un atelier où l'on construirait des machines géantes en forme d'animaux, sur lesquelles le public pourrait monter. Leur projet s'inspire de deux grands rêveurs. Le premier est Jules Verne, l'écrivain né à Nantes en 1828, qui a imaginé des voyages extraordinaires au fond des mers et autour du monde. Le second est Léonard de Vinci, le génie de la Renaissance, qui dessinait des machines volantes et des mécanismes étonnants.`,
    illustration: "",
    engraving: "elephant",
    caption: "Illustration à venir",
  },

  // ─────────────────────────── PAGE 4 ───────────────────────────
  {
    chapterNumber: "04",
    title: "L'atelier des machines",
    subtitle: "L'atelier",
    content: `Les deux artistes s'installent dans les anciennes halles des chantiers navals. Ce n'est pas un hasard : ces bâtiments ont été faits pour construire des bateaux en métal, et ils sont parfaits pour fabriquer des machines géantes. Dans l'atelier, une équipe de spécialistes se met au travail : des dessinateurs, des menuisiers, des soudeurs, des mécaniciens, des sculpteurs. Ils utilisent le bois, l'acier, le cuir et des systèmes hydrauliques pour donner vie à leurs créatures. Chaque machine commence par des dessins et des maquettes, puis elle est fabriquée pièce par pièce. Ce qui rend ce lieu unique, c'est que l'atelier est ouvert au public. Les visiteurs peuvent observer les constructeurs au travail, depuis une passerelle. Ainsi, les savoir-faire des anciens ouvriers des chantiers se transmettent d'une certaine façon à ces nouveaux artisans du rêve.`,
    illustration: "",
    engraving: "elephant",
    caption: "Illustration à venir",
  },

  // ─────────────────────────── PAGE 5 ───────────────────────────
  {
    chapterNumber: "05",
    title: "Le Grand Éléphant",
    subtitle: "Depuis 2007",
    content: `Le 1er juillet 2007, les Machines de l'île ouvrent leurs portes, avec une vedette spectaculaire : le Grand Éléphant. Il mesure 12 mètres de haut, 8 mètres de large et pèse environ 45 tonnes. Il est fait de bois et d'acier, et ses mécanismes sont visibles, comme ceux d'une horloge géante. Sur son dos, une maison à plusieurs étages peut accueillir près de 50 passagers. L'éléphant se promène lentement autour des anciens chantiers, pendant environ 45 minutes. Il bouge sa trompe, ses oreilles, ses pattes, et il pousse même un grand barrissement ! Attention aux passants : il peut aussi les arroser avec sa trompe. Depuis 2007, il a transporté près d'un million et demi de passagers. En 2026, après près de vingt ans de balades, il s'offre une pause bien méritée pour une grande révision mécanique.`,
    illustration: "/images/machines-elephant.webp",
    engraving: "elephant",
    caption: "Le Grand Éléphant en promenade",
  },

  // ─────────────────────────── PAGE 6 ───────────────────────────
  {
    chapterNumber: "06",
    title: "La Galerie des Machines",
    subtitle: "La Galerie",
    content: `À côté de l'atelier se trouve la Galerie des Machines. C'est un lieu d'exposition, mais pas comme les autres : ici, on ne se contente pas de regarder. Les créatures sont mises en mouvement devant les visiteurs, et certains peuvent même les piloter ! On y rencontre une fourmi géante, une araignée, une chenille, un héron qui bat des ailes ou encore des animaux marins étonnants. Les machinistes, qu'on appelle aussi des « pilotes », expliquent comment chaque machine fonctionne et invitent le public à monter à bord. La Galerie présente aussi les dessins, les maquettes et les films qui montrent les étapes de création. On découvre ainsi qu'il faut parfois des années d'imagination et de travail pour donner vie à une seule machine. Chaque saison, de nouvelles créatures peuvent faire leur apparition.`,
    illustration: "",
    engraving: "elephant",
    caption: "Illustration à venir",
  },

  // ─────────────────────────── PAGE 7 ───────────────────────────
  {
    chapterNumber: "07",
    title: "Le Carrousel des Mondes Marins",
    subtitle: "2012",
    content: `En 2012, une nouvelle attraction extraordinaire ouvre au bord de la Loire : le Carrousel des Mondes Marins. Ce n'est pas un manège ordinaire avec des chevaux de bois ! Haut de près de 25 mètres, il ressemble à un immense aquarium sur trois étages. Chaque étage représente un monde sous-marin : le fond des mers, les abysses et la surface des océans. Une trentaine de créatures étranges y vivent : un calmar géant, un poisson-lanterne, un crabe, une raie, des bateaux… Les visiteurs ne se contentent pas de tourner : ils peuvent faire bouger les nageoires, les tentacules ou les pinces des animaux à l'aide de leviers et de manettes. Ce manège rend hommage à Jules Verne et à son roman « Vingt mille lieues sous les mers », dans lequel le capitaine Nemo explore les profondeurs à bord du sous-marin Nautilus.`,
    illustration: "",
    engraving: "elephant",
    caption: "Illustration à venir",
  },

  // ─────────────────────────── PAGE 8 ───────────────────────────
  {
    chapterNumber: "08",
    title: "Le rêve de l'Arbre aux Hérons",
    subtitle: "Un projet rêvé",
    content: `Les créateurs des Machines ont aussi imaginé un projet encore plus fou : l'Arbre aux Hérons. Il s'agissait d'un arbre géant en acier, d'environ 35 mètres de haut, couvert de plantes et de jardins suspendus. Au sommet, deux grands hérons mécaniques devaient emmener les visiteurs dans les airs pour un vol au-dessus de la ville. Une branche de démonstration a été construite pour tester l'idée, et le public a pu la découvrir. L'arbre devait s'installer près d'une ancienne carrière de granit, transformée en un magnifique jardin, le Jardin extraordinaire, avec sa cascade et ses plantes venues du monde entier. Mais le projet coûtait très cher et a suscité de nombreux débats. Finalement, il a été abandonné. Le Jardin extraordinaire, lui, est bien ouvert au public. Et le rêve des hérons continue de vivre dans les dessins et dans la Galerie.`,
    illustration: "",
    engraving: "elephant",
    caption: "Illustration à venir",
  },

  // ─────────────────────────── PAGE 9 ───────────────────────────
  {
    chapterNumber: "09",
    title: "Une île qui a changé de vie",
    subtitle: "Aujourd'hui",
    content: `Grâce aux Machines, l'île de Nantes a complètement changé. Là où l'on construisait autrefois des bateaux, on se promène maintenant en famille, on pique-nique, on joue et on s'émerveille. Les anciennes grues jaunes et grises sont toujours là, devenues des symboles du passé ouvrier. Les halles accueillent des cafés, des restaurants et des espaces de jeu. Chaque année, plusieurs centaines de milliers de visiteurs viennent de toute la France et du monde entier pour voir le Grand Éléphant et ses amis. Les Machines de l'île sont devenues l'un des lieux les plus célèbres de Nantes, au même titre que le château des ducs de Bretagne. Elles montrent qu'une ville peut se réinventer en mélangeant l'art, la mémoire et l'imagination. Le quartier tout entier s'est développé autour d'elles, avec des écoles, des logements et des entreprises.`,
    illustration: "",
    engraving: "elephant",
    caption: "Illustration à venir",
  },

  // ─────────────────────────── PAGE 10 ───────────────────────────
  {
    chapterNumber: "10",
    title: "L'imagination au pouvoir",
    subtitle: "Demain",
    content: `L'histoire des Machines de l'île est celle d'une île qui a su transformer sa tristesse en rêve. Quand les chantiers navals ont fermé, Nantes aurait pu oublier cet endroit. Au lieu de cela, des artistes ont décidé d'y faire naître un monde imaginaire, à mi-chemin entre les romans de Jules Verne, les inventions de Léonard de Vinci et le savoir-faire des ouvriers d'autrefois. Les Machines nous rappellent qu'il ne faut jamais cesser d'imaginer. Une simple idée dessinée sur une feuille de papier peut devenir un éléphant de 45 tonnes qui marche dans la ville ! La prochaine fois que vous croiserez le Grand Éléphant ou que vous monterez sur le Carrousel, pensez aux ouvriers qui construisaient des navires ici, et aux inventeurs qui ont redonné vie à leur île. Et qui sait : peut-être que la prochaine machine sortira de votre imagination.`,
    illustration: "",
    engraving: "elephant",
    caption: "Illustration à venir",
  },

];

export default { id: 'machines', meta: bookMeta, chapters: chaptersData }
