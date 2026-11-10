// Pop-up origami : le château se déplie depuis la page de droite (progress.u : 0 → 1).
// Pour utiliser un vrai modèle, déposez /public/models/chateau-origami.glb (sinon : version procédurale).
import CastleModel from './models/CastleModel'
import OptionalModel from './models/OptionalModel'

export default function PopupCastle({ progress, onInspect }) {
  return (
    <OptionalModel url="/models/chateau-origami.glb" fitSize={0.95} onClick={onInspect}>
      <CastleModel variant="paper" progress={progress} onInspect={onInspect} scale={0.95} />
    </OptionalModel>
  )
}
