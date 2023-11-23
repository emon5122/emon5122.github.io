import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

const Birds = () => {
  const { scene, animations } = useGLTF("/birds.glb");
  const birdsRef = useRef<THREE.Mesh>(null);
  const { actions } = useAnimations(animations, birdsRef);
  useEffect(() => {
    if (!actions) {
      return;
    }
    actions["Scene"]?.play();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useFrame(({ clock, camera }) => {
    if (!birdsRef.current) {
      return;
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
    <mesh ref={birdsRef} position={[-8, 2, 1]} scale={[0.5, 0.5, 0.5]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Birds;
