// #########################################################################
// #                                                                       #
// #   📝 LIVRE 2 — LE LIEU UNIQUE                                      #
// #   Même fonctionnement que src/data/livres/chateau.js :                #
// #   modifiez les textes, ajoutez ou retirez des chapitres.              #
// #   ⚠️  CONTENU PROVISOIRE — À REMPLACER PAR VOS TEXTES                  #
// #                                                                       #
// #########################################################################

// =========================================================================
// 📖 ZONE À ÉDITER (1/2) : COUVERTURE, TRANCHE & PAGE DE TITRE
// =========================================================================

export const bookMeta = {
  shelfTitle: "Le Lieu Unique",
  leather: "#1f3346",
  cover: { emblem: "lu", corners: { tl: "biscuit", tr: "biscuit", bl: "lu" } },

  coverKicker: "Histoire du",
  coverTitle: "Lieu Unique",
  coverFooter: "Nantes",
  spineTitle: "Le Lieu Unique — ancienne usine LU",

  titlePageHeading: "Patrimoine de Nantes",
  titlePageTitle: "Le Lieu Unique",
  titlePageSubtitle: "De la biscuiterie LU au centre de culture contemporaine",
  titlePageImprint: "À Nantes, chez l'Archiviste du Patrimoine",
  titlePageImage: "", // "" = gravure dessinée automatiquement
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
    title: "Titre du chapitre 1",
    subtitle: "Sous-titre ou date",
    content: `Texte du chapitre 1 à rédiger. Remplacez ce paragraphe par votre propre texte.

Une ligne vide crée un nouveau paragraphe.`,
    illustration: "/images/lieu-unique-tour.webp",
    engraving: "lu",
    caption: "La tour LU au bord du canal Saint-Félix",
  },
  // ─────────────────────────── PAGE 2 ───────────────────────────
  {
    chapterNumber: "02",
    title: "Titre du chapitre 2",
    subtitle: "Sous-titre ou date",
    content: `Texte du chapitre 2 à rédiger. Remplacez ce paragraphe par votre propre texte.

Une ligne vide crée un nouveau paragraphe.`,
    illustration: "",
    engraving: "lu",
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
    engraving: "lu",
    caption: "Illustration à venir",
  },

];

export default { id: 'lieuUnique', meta: bookMeta, chapters: chaptersData }
