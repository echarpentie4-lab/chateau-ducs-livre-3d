// Charge un modèle GLTF/GLB optionnel ; tant qu'il est absent, en chargement ou en erreur,
// on affiche la version procédurale passée en enfant (aucun crash possible).
import { Component, Suspense, useEffect, useMemo, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

class ModelErrorBoundary extends Component {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  componentDidCatch(err) {
    console.warn('[OptionalModel] modèle ignoré :', err?.message)
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children
  }
}

function Gltf({ url, fitSize, onClick }) {
  const { scene } = useGLTF(url)
  const object = useMemo(() => {
    const clone = scene.clone(true)
    clone.traverse((o) => {
      if (o.isMesh) o.castShadow = o.receiveShadow = true
    })
    if (fitSize) {
      // remet à l'échelle (plus grande dimension = fitSize) et pose la base au sol
      const box = new THREE.Box3().setFromObject(clone)
      const size = box.getSize(new THREE.Vector3())
      const k = fitSize / Math.max(size.x, size.y, size.z)
      clone.scale.setScalar(k)
      const c = box.getCenter(new THREE.Vector3())
      clone.position.set(-c.x * k, -box.min.y * k, -c.z * k)
    }
    return clone
  }, [scene, fitSize])
  return <primitive object={object} onClick={onClick ? (e) => (e.stopPropagation(), onClick()) : undefined} />
}

// Vérifie l'existence du fichier sans erreur réseau bruyante (le serveur Vite renvoie
// index.html pour un fichier absent : on l'écarte via le content-type).
function useModelAvailable(url) {
  const [ok, setOk] = useState(false)
  useEffect(() => {
    let alive = true
    fetch(url, { method: 'HEAD' })
      .then((r) => {
        const type = r.headers.get('content-type') || ''
        if (alive && r.ok && !type.includes('text/html')) setOk(true)
      })
      .catch(() => {})
    return () => {
      alive = false
    }
  }, [url])
  return ok
}

export default function OptionalModel({ url, fitSize, onClick, children, ...props }) {
  const available = useModelAvailable(url)
  const fallback = <group {...props}>{children}</group>
  if (!available) return fallback
  return (
    <ModelErrorBoundary fallback={fallback}>
      <Suspense fallback={fallback}>
        <group {...props}>
          <Gltf url={url} fitSize={fitSize} onClick={onClick} />
        </group>
      </Suspense>
    </ModelErrorBoundary>
  )
}
