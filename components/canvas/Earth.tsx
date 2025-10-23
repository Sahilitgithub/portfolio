'use client';
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  const earthModel = useGLTF('./planet/scene.gltf')
  return (
   <mesh>
    <hemisphereLight intensity={6} groundColor="white" />
    <pointLight intensity={12} />
    <spotLight 
    position={[-20, 50, 10]}
    angle={Math.PI / 4}
    penumbra={1}
    castShadow
    shadow-mapSize={1024} />
      <primitive 
      object={earthModel.scene}
      scale={[10, 10, 10]}
      position-y={0}
      rotation-y={0}
       />
   </mesh>
  )
}


const EarthCanvas = () => {

  return (
    <Canvas
    shadows
    frameloop="demand"
    gl={{preserveDrawingBuffer: true}}
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [-4, 3, 6]
    }} >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2} />

        <Earth />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas
