# Mémoire de Nantes — Bibliothèque 3D du patrimoine

Expérience web 3D interactive : un carrousel de livres anciens en lévitation. Le livre choisi
se pose sur un bureau, s'ouvre et raconte l'histoire d'un monument de Nantes (Château des ducs
de Bretagne, Lieu Unique, Passage Pommeraye, Machines de l'Île, Cathédrale).

React · Three.js (@react-three/fiber, drei) · GSAP · Tailwind CSS · Vite

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:5173.

## Modifier les textes

Chaque livre a son fichier dans `src/data/livres/` (couverture, tranche, chapitres, images,
légendes) ; l'ordre du carrousel est dans `src/data/catalogue.js`. Les images vont dans `public/images/`,
les modèles 3D optionnels (.glb) dans `public/models/`.
