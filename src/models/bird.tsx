import { useAnimations, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"

const Bird = () => {
  const { scene, animations } = useGLTF("/bird.glb")
  const birdsRef = useRef<THREE.Mesh>(null)
  const { actions } = useAnimations(animations, birdsRef);
  useEffect(() => {
    if (!actions) {
      return
    }
    actions["Take 001"]?.play();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useFrame(({ clock, camera }) => {
    if (!birdsRef.current) {
      return
    }
    birdsRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    if (birdsRef.current.position.x > camera.position.x + 10) {
          birdsRef.current.rotation.y = Math.PI;
    } else if (birdsRef.current.position.x < camera.position.x - 10) {
      birdsRef.current.rotation.y = 0;
    }

    if (birdsRef.current.rotation.y === 0) {
      birdsRef.current.position.x += 0.01;
      birdsRef.current.position.z -= 0.01;
    } else {
      birdsRef.current.position.x -= 0.01;
      birdsRef.current.position.z += 0.01;
    }
  });

  return (
    <mesh ref={birdsRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}><primitive object={scene} /></mesh>
  )
}

export default Bird