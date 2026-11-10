// #########################################################################
// #                                                                       #
// #   📝 LIVRE 5 — LA CATHÉDRALE SAINT-PIERRE-ET-SAINT-PAUL            #
// #   Même fonctionnement que src/data/livres/chateau.js :                #
// #   modifiez les textes, ajoutez ou retirez des chapitres.              #
// #   ⚠️  CONTENU PROVISOIRE — À REMPLACER PAR VOS TEXTES                  #
// #                                                                       #
// #########################################################################

// =========================================================================
// 📖 ZONE À ÉDITER (1/2) : COUVERTURE, TRANCHE & PAGE DE TITRE
// =========================================================================

export const bookMeta = {
  shelfTitle: "La Cathédrale Saint-Pierre-et-Saint-Paul",
  leather: "#5a2f82", // violet épiscopal
  cover: { emblem: "cathedral", corners: { tl: "rose", tr: "rose", bl: "arch" } },

  coverKicker: "Histoire de la",
  coverTitle: "Cathédrale Saint-Pierre et Saint-Paul",
  coverFooter: "Nantes",
  spineTitle: "Cathédrale Saint-Pierre-et-Saint-Paul",

  titlePageHeading: "Patrimoine de Nantes",
  titlePageTitle: "La Cathédrale Saint-Pierre-et-Saint-Paul",
  titlePageSubtitle: "Un chef-d'œuvre gothique au cœur de Nantes",
  titlePageImprint: "À Nantes, chez l'Archiviste du Patrimoine",
  titlePageImage: "", // "" = gravure dessinée automatiquement
  titleEngraving: "cathedral",

  runningHead: "La Cathédrale Saint-Pierre-et-Saint-Paul",
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
    illustration: "/images/cathedrale-facade.webp",
    engraving: "cathedral",
    caption: "La façade gothique et ses deux tours",
  },
  // ─────────────────────────── PAGE 2 ───────────────────────────
  {
    chapterNumber: "02",
    title: "Titre du chapitre 2",
    subtitle: "Sous-titre ou date",
    content: `Texte du chapitre 2 à rédiger. Remplacez ce paragraphe par votre propre texte.

Une ligne vide crée un nouveau paragraphe.`,
    illustration: "",
    engraving: "cathedral",
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
    engraving: "cathedral",
    caption: "Illustration à venir",
  },

];

export default { id: 'cathedrale', meta: bookMeta, chapters: chaptersData }
