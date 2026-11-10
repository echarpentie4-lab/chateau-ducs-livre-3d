// Matériaux de reliure d'un livre (couverture dorée, dos, cuir, tranches), partagés
// entre le livre complet (lecture) et sa version fermée du carrousel.
import * as THREE from 'three'
import { BLOCK_T, COVER_T, COVER_H, LEAF_GAP } from './dimensions'
import {
  makeCoverTextures, makeSpineTextures, makeLeatherTexture, makeGiltEdgeTexture, makeEndpaperTexture,
} from './materialsTextures'

export const bookThickness = (spreadCount) => {
  const stack = (spreadCount + 3) * LEAF_GAP
  return { stack, totalT: COVER_T * 2 + BLOCK_T + stack }
}

const cache = new Map()

// Mis en cache par livre : le carrousel et le livre ouvert réutilisent les mêmes textures.
export function getBookMaterials(id, meta, totalT) {
  const key = `${id}|${totalT.toFixed(4)}`
  if (cache.has(key)) return cache.get(key)
  const cover = makeCoverTextures(meta)
  const spineTex = makeSpineTextures(meta, totalT / COVER_H)
  const leather = new THREE.MeshStandardMaterial({ map: makeLeatherTexture(meta.leather || '#4a2415', 31, [1, 1]), roughness: 0.62 })
  const endpaper = new THREE.MeshStandardMaterial({ map: makeEndpaperTexture(meta.leather), roughness: 0.8 })
  const coverFront = new THREE.MeshStandardMaterial({
    map: cover.map, metalnessMap: cover.metalnessMap, metalness: 1, roughness: 0.48,
  })
  const spineMat = new THREE.MeshStandardMaterial({
    map: spineTex.map, metalnessMap: spineTex.metalnessMap, metalness: 1, roughness: 0.5,
  })
  const gilt = new THREE.MeshStandardMaterial({ map: makeGiltEdgeTexture(), metalness: 0.85, roughness: 0.32 })
  const paper = new THREE.MeshStandardMaterial({ color: '#e6d6b2', roughness: 0.95 })
  const mats = {
    cover: [leather, leather, coverFront, endpaper, leather, leather],
    backCover: [leather, leather, leather, leather, leather, leather],
    spine: [leather, spineMat, leather, leather, leather, leather],
    block: [paper, gilt],
    // bloc de gauche : dessus en papier marbré (= intérieur de couverture) pour ne jamais
    // montrer une page vierge quand la première page repasse à droite
    blockLeft: [endpaper, gilt],
    blockBox: [gilt, paper, paper, paper, gilt, gilt],
  }
  cache.set(key, mats)
  return mats
}
