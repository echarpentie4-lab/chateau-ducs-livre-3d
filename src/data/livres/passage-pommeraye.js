// #########################################################################
// #                                                                       #
// #   📝 LIVRE 3 — LE PASSAGE POMMERAYE                                #
// #   Même fonctionnement que src/data/livres/chateau.js :                #
// #   modifiez les textes, ajoutez ou retirez des chapitres.              #
// #   ⚠️  CONTENU PROVISOIRE — À REMPLACER PAR VOS TEXTES                  #
// #                                                                       #
// #########################################################################

// =========================================================================
// 📖 ZONE À ÉDITER (1/2) : COUVERTURE, TRANCHE & PAGE DE TITRE
// =========================================================================

export const bookMeta = {
  shelfTitle: "Le Passage Pommeraye",
  leather: "#1d6044", // vert émeraude
  cover: { emblem: "passage", corners: { tl: "lantern", tr: "lantern", bl: "stairs" } },

  coverKicker: "Histoire du",
  coverTitle: "Passage Pommeraye",
  coverFooter: "Nantes",
  spineTitle: "Le Passage Pommeraye",

  titlePageHeading: "Patrimoine de Nantes",
  titlePageTitle: "Le Passage Pommeraye",
  titlePageSubtitle: "Une galerie marchande du XIXᵉ siècle",
  titlePageImprint: "À Nantes, chez l'Archiviste du Patrimoine",
  titlePageImage: "", // "" = gravure dessinée automatiquement
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
    content: `Texte du chapitre 1 à rédiger. Remplacez ce paragraphe par votre propre texte.

Une ligne vide crée un nouveau paragraphe.`,
    illustration: "/images/passage-pommeraye.webp",
    engraving: "passage",
    caption: "La galerie et son grand escalier",
  },
  // ─────────────────────────── PAGE 2 ───────────────────────────
  {
    chapterNumber: "02",
    title: "Titre du chapitre 2",
    subtitle: "Sous-titre ou date",
    content: `Texte du chapitre 2 à rédiger. Remplacez ce paragraphe par votre propre texte.

Une ligne vide crée un nouveau paragraphe.`,
    illustration: "",
    engraving: "passage",
    caption: "Illustration à venir",
  },
  // ─────────────────────────── PAGE 3 ───────────────────────────
  {
    chapterNumber: "03",
    title: "Titre du chapitre 3",
    subtitle: "Sous-titre ou date",
    content: `Texte du chapitre 3 à rédiger. Remplacez ce paragraphe par votre propre texte.

Une ligne vide crée un nouveau paragraphe.`,
    illustration: "",
    engraving: "passage",
    caption: "Illustration à venir",
  },

];

export default { id: 'pommeraye', meta: bookMeta, chapters: chaptersData }
