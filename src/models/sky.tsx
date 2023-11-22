import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

const Sky = ({isRotating}:{isRotating:boolean}) => {
    const skyScene = useGLTF("/sky.glb")
    const skyRef = useRef<THREE.Mesh>(null)
    useFrame((_,delta) => {
        if (isRotating && skyRef.current) {
            skyRef.current.rotation.y += 0.5*delta
        }
    })
  return (
      <mesh ref={ skyRef} scale={[1,1,1]}><primitive object={skyScene.scene}/></mesh>
  )
}

export default Sky