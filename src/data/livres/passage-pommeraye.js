// #########################################################################
// #   📝 LIVRE 3 — LE PASSAGE POMMERAYE
// #   Même fonctionnement que src/data/livres/chateau.js : modifiez les
// #   textes, images et légendes ; ajoutez ou retirez des chapitres.
// #   ⚠️  TEXTES PROVISOIRES — À REMPLACER PAR VOS RÉDACTIONS
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
  titlePageSubtitle: "Une galerie marchande du XIXᵉ siècle",
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
    title: "Titre du chapitre 1",
    subtitle: "Sous-titre ou date",
    content: `Texte du chapitre 1 à rédiger. Remplacez ce paragraphe par votre propre texte.`,
    illustration: "/images/pommeraye-verriere.webp",
    engraving: "passage",
    caption: "La galerie et sa grande verrière",
  },

  // ─────────────────────────── PAGE 2 ───────────────────────────
  {
    chapterNumber: "02",
    title: "Titre du chapitre 2",
    subtitle: "Sous-titre ou date",
    content: `Texte du chapitre 2 à rédiger. Remplacez ce paragraphe par votre propre texte.`,
    illustration: "/images/pommeraye-statues.webp",
    engraving: "passage",
    caption: "Les statues du passage",
  },

  // ─────────────────────────── PAGE 3 ───────────────────────────
  {
    chapterNumber: "03",
    title: "Titre du chapitre 3",
    subtitle: "Sous-titre ou date",
    content: `Texte du chapitre 3 à rédiger. Remplacez ce paragraphe par votre propre texte.`,
    illustration: "/images/pommeraye-escalier-dessin.png",
    engraving: "passage",
    caption: "Le grand escalier, dessin à l'encre",
  },

  // ─────────────────────────── PAGE 4 ───────────────────────────
  {
    chapterNumber: "04",
    title: "Titre du chapitre 4",
    subtitle: "Sous-titre ou date",
    content: `Texte du chapitre 4 à rédiger. Remplacez ce paragraphe par votre propre texte.`,
    illustration: "/images/pommeraye-lithographie.webp",
    engraving: "passage",
    caption: "Le passage au XIXᵉ siècle, lithographie",
  },

  // ─────────────────────────── PAGE 5 ───────────────────────────
  {
    chapterNumber: "05",
    title: "Titre du chapitre 5",
    subtitle: "Sous-titre ou date",
    content: `Texte du chapitre 5 à rédiger. Remplacez ce paragraphe par votre propre texte.`,
    illustration: "/images/pommeraye-horloge.png",
    engraving: "passage",
    caption: "La galerie de l'Horloge",
  },

  // ─────────────────────────── PAGE 6 ───────────────────────────
  {
    chapterNumber: "06",
    title: "Titre du chapitre 6",
    subtitle: "Sous-titre ou date",
    content: `Texte du chapitre 6 à rédiger. Remplacez ce paragraphe par votre propre texte.`,
    // double-page pop-up : une maquette en papier se déplie sur la page de droite
    popup: "passage",
    hint: "Cliquez sur la maquette pour l'observer de plus près",
    info: "Ouvert en 1843, le passage Pommeraye relie deux rues situées à des hauteurs différentes : d'où son célèbre grand escalier, entouré de galeries à balcons, de statues et coiffé d'une verrière.",
  },

  // ─────────────────────────── PAGE 7 ───────────────────────────
  {
    chapterNumber: "07",
    title: "Titre du chapitre 7",
    subtitle: "Sous-titre ou date",
    content: `Texte du chapitre 7 à rédiger. Remplacez ce paragraphe par votre propre texte.`,
    illustration: "/images/pommeraye-escalier-carte.png",
    engraving: "passage",
    caption: "Le grand escalier, carte postale ancienne",
  },

  // ─────────────────────────── PAGE 8 ───────────────────────────
  {
    chapterNumber: "08",
    title: "Titre du chapitre 8",
    subtitle: "Sous-titre ou date",
    content: `Texte du chapitre 8 à rédiger. Remplacez ce paragraphe par votre propre texte.`,
    illustration: "/images/pommeraye-galerie.png",
    engraving: "passage",
    caption: "La galerie des boutiques",
  },

  // ─────────────────────────── PAGE 9 ───────────────────────────
  {
    chapterNumber: "09",
    title: "Titre du chapitre 9",
    subtitle: "Sous-titre ou date",
    content: `Texte du chapitre 9 à rédiger. Remplacez ce paragraphe par votre propre texte.`,
    illustration: "/images/pommeraye-voute.png",
    engraving: "passage",
    caption: "L'arc sculpté et sa verrière",
  },

  // ─────────────────────────── PAGE 10 ───────────────────────────
  {
    chapterNumber: "10",
    title: "Titre du chapitre 10",
    subtitle: "Sous-titre ou date",
    content: `Texte du chapitre 10 à rédiger. Remplacez ce paragraphe par votre propre texte.`,
    illustration: "/images/pommeraye-carte-postale.webp",
    engraving: "passage",
    caption: "Le passage Pommeraye, carte postale ancienne",
  },

];

export default { id: 'pommeraye', meta: bookMeta, chapters: chaptersData }
