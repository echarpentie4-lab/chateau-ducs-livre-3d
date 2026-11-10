// #########################################################################
// #                                                                       #
// #   📝 LIVRE 4 — LES MACHINES DE L'ÎLE                               #
// #   Même fonctionnement que src/data/livres/chateau.js :                #
// #   modifiez les textes, ajoutez ou retirez des chapitres.              #
// #   ⚠️  CONTENU PROVISOIRE — À REMPLACER PAR VOS TEXTES                  #
// #                                                                       #
// #########################################################################

// =========================================================================
// 📖 ZONE À ÉDITER (1/2) : COUVERTURE, TRANCHE & PAGE DE TITRE
// =========================================================================

export const bookMeta = {
  shelfTitle: "Les Machines de l'Île",
  leather: "#7d4019", // cuivre
  cover: { emblem: "elephant", corners: { tl: "gear", tr: "gear", bl: "elephant" } },

  coverKicker: "Histoire des",
  coverTitle: "Machines de l'Île",
  coverFooter: "Nantes",
  spineTitle: "Les Machines de l'Île",

  titlePageHeading: "Patrimoine de Nantes",
  titlePageTitle: "Les Machines de l'Île",
  titlePageSubtitle: "Le Grand Éléphant et l'univers de Jules Verne",
  titlePageImprint: "À Nantes, chez l'Archiviste du Patrimoine",
  titlePageImage: "", // "" = gravure dessinée automatiquement
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
    title: "Titre du chapitre 1",
    subtitle: "Sous-titre ou date",
    content: `Texte du chapitre 1 à rédiger. Remplacez ce paragraphe par votre propre texte.

Une ligne vide crée un nouveau paragraphe.`,
    illustration: "/images/machines-elephant.webp",
    engraving: "elephant",
    caption: "Le Grand Éléphant en promenade",
  },
  // ─────────────────────────── PAGE 2 ───────────────────────────
  {
    chapterNumber: "02",
    title: "Titre du chapitre 2",
    subtitle: "Sous-titre ou date",
    content: `Texte du chapitre 2 à rédiger. Remplacez ce paragraphe par votre propre texte.

Une ligne vide crée un nouveau paragraphe.`,
    illustration: "",
    engraving: "elephant",
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
    engraving: "elephant",
    caption: "Illustration à venir",
  },

];

export default { id: 'machines', meta: bookMeta, chapters: chaptersData }
