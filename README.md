# Le Livre du Château — Château des ducs de Bretagne

Expérience web 3D interactive : un livre ancien en lévitation qui se pose sur un bureau,
s'ouvre et raconte mille ans d'histoire du Château des ducs de Bretagne (Nantes).

React · Three.js (@react-three/fiber, drei) · GSAP · Tailwind CSS · Vite

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:5173.

## Modifier les textes

Tout le contenu (couverture, chapitres, images, légendes, double-page pop-up) se trouve
dans `src/data/chaptersData.js`. Les images vont dans `public/images/`,
les modèles 3D optionnels (.glb) dans `public/models/`.
