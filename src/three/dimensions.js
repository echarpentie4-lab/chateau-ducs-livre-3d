// Dimensions du livre (unités Three.js). Le dos est sur l'axe Z, en x = 0.
export const PAGE_W = 1.4 // largeur d'une page (axe X)
export const PAGE_H = 1.9 // hauteur d'une page (axe Z)
export const COVER_T = 0.035 // épaisseur d'un plat de couverture
export const BLOCK_T = 0.2 // épaisseur totale du bloc de pages
export const COVER_W = PAGE_W + 0.06
export const COVER_H = PAGE_H + 0.1
export const LEAF_GAP = 0.0018 // écart vertical entre feuillets (anti z-fighting)
export const LEAF_SEGMENTS = 40 // subdivisions pour la courbure de page
export const GUTTER = 0.2 // largeur de la courbe des pages près du dos

// Placement dans la scène
export const BOOK_Y = 0.012 // posé sur le sous-main
export const HOVER_Y = 1.5 // centre du livre en lévitation

// Les pages sont mises en page sur une grille de 1100 × 1493 "unités",
// rendue dans une texture plus légère (mémoire GPU ÷ 1,4).
export const PAGE_DESIGN_W = 1100
export const PAGE_DESIGN_H = Math.round((PAGE_DESIGN_W * PAGE_H) / PAGE_W)
export const PAGE_TEX_W = 920
export const PAGE_TEX_SCALE = PAGE_TEX_W / PAGE_DESIGN_W

// Lévitation & carrousel de la bibliothèque
export const HOVER_BOB = 0.08 // amplitude de la lévitation du livre au premier plan
export const BOB_SPEED = 1.3
export const SELECT_SCALE = 1.1 // le livre au premier plan est légèrement plus grand
export const CAROUSEL_RADIUS = 3.1 // le livre sélectionné est en (0, HOVER_Y, 0), le cercle s'étend derrière
