"use client"
import HomeInfo from "@/components/homeInfo";
import Loader from "@/components/loader";
import Avatar from "@/models/avatar";
import Bird from "@/models/bird";
import Birds from "@/models/birds";
import Island from "@/models/island";
import Sky from "@/models/sky";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";


const Home = () => {
    const [isRotating,setIsRotating]=useState(false)
    const [currentStage,setCurrentStage]=useState<number|null>(null)

    return (
        <section className="relative h-screen w-full">
                  <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {<HomeInfo currentStage={currentStage} />}
      </div>
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
                    <Bird/>
                    <Avatar isRotating={isRotating}/>
                    <Island isRotating={isRotating} setIsRotating={setIsRotating} setCurrentStage={setCurrentStage} />
                </Suspense>
            </Canvas>
        </section>
    );
};

export default Home;
