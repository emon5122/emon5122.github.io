"use client"
import Loader from "@/components/loader";
import Birds from "@/models/birds";
import Island from "@/models/island";
import Sky from "@/models/sky";
import { useWindowSize } from '@react-hookz/web/esm/useWindowSize';
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";


const Home = () => {
    const [isRotating,setIsRotating]=useState(false)
    const [currentStage,setCurrentStage]=useState<number|null>(null)
    const windowSize = useWindowSize();
    const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -6.5, -43]
        let rotation = [0.1,4.7,0]
        if (windowSize.width < 768) {
            screenScale=[0.9,0.9,0.9]
        } else {
            screenScale=[1,1,1]
        }
        return [screenScale,screenPosition,rotation]
    }
   
    const [islandScale,islandPosition,rotation] = adjustIslandForScreenSize()
    return (
        <section className="relative h-screen w-full">
            <Canvas
                className={`h-screen w-full bg-transparent ${isRotating ? "cursor-grabbing":"cursor-grab"}`}
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1,1,1]} intensity={2} />
                    <ambientLight intensity={0.5} />
                    <hemisphereLight
                        groundColor={0xffffff}
                        intensity={1}
                        color={"#b1e1ff"}
                    />
                    <Birds/>
                    <Sky isRotating={isRotating} />
                    <Island isRotating={isRotating}
                    //@ts-ignore
                        setIsRotating={setIsRotating} setCurrentStage={setCurrentStage} position={islandPosition} scale={islandScale} rotation={rotation} />
                </Suspense>
            </Canvas>
        </section>
    );
};

export default Home;
