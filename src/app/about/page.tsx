"use client";
import { MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useControls } from "leva";

const About = () => {
  const { color, position, scale, name } = useControls({
    color: "#00f5ff",
    position: [1, 1, 1],
    scale: {
      value: 4,
      min: 0,
      max: 100,
      step: 1,
    },

    name: { value: "hi" },
  });
  return (
    <div className="flex min-h-full w-full justify-around p-4">
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        About {name}
      </motion.div>
      <div className="h-[100vh] w-full">
        <Canvas camera={{ near: 0.1, far: 100 }}>
          <directionalLight position={position} intensity={2} color={color} />
          <group position={-5}>
            <group position={[-1, 1, 1]}>
              <mesh>
                <boxGeometry />
                <meshStandardMaterial />
              </mesh>
              <mesh>
                <circleGeometry />
              </mesh>
            </group>
            <group>
              <mesh scale={scale}>
                <boxGeometry />
                <meshPhysicalMaterial />
              </mesh>
              <mesh scale={10}>
                <circleGeometry args={[5, 8, 10]} />
                <MeshDistortMaterial />
                <OrbitControls />
              </mesh>
            </group>
          </group>
        </Canvas>
      </div>
    </div>
  );
};

export default About;
