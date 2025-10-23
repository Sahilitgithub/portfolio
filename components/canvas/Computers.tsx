'use client'; 
import { Suspense, useState, useEffect } from "react"; 
import { Canvas } from "@react-three/fiber"; // Import Canvas component to render 3D scenes using React
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"; 
import CanvasLoader from "../Loader"; // Import a custom loading component for suspense fallback

// Component to render the 3D computer model
const Computers = ({ isMobile }: { isMobile: boolean }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf"); // Load the 3D model using the GLTF loader

  return (
    <mesh> {/* Root container for the 3D objects */}
      <hemisphereLight intensity={1.5} groundColor="black" /> {/* Adds ambient light from above and below */}
      <pointLight intensity={1} /> {/* Adds a point light source at the origin */}
      <spotLight 
        position={[-20, 50, 10]} // Position of the spotlight in 3D space
        angle={Math.PI / 4} // Beam angle of the spotlight
        penumbra={1} // Softness of the spotlight's edge
        intensity={1} // Brightness of the spotlight
        castShadow // Enable shadow casting
        shadow-mapSize={1024} // Shadow resolution
      />
      <primitive
        object={computer.scene} // Insert the loaded 3D model into the scene
        scale={isMobile ? 0.5: 0.75} // Scale model smaller on mobile devices
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]} // Position model differently based on device
        rotation={[0, Math.PI / 4, 0]} // Rotate model 45 degrees around Y-axis
      />
    </mesh>
  )
}

// Main component that wraps the scene in a canvas
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false); // Track whether the device is mobile

  useEffect(() => {
    // Set up a media query to detect screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches); // Update the state based on current screen size

    // Define a function to handle screen size changes
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches); // Update state when media query condition changes
    };

    // Add event listener to respond to changes in screen size
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas 
      frameloop="demand" // Render on demand (when there are changes), instead of every frame
      shadows // Enable shadow rendering
      camera={{ position: [20, 3, 5], fov: 26 }} // Set up the camera position and field of view
      gl={{ preserveDrawingBuffer: true }} // Preserve the canvas drawing buffer (useful for screenshots)
    >
      <Suspense fallback={<CanvasLoader />}> {/* Lazy-load the 3D content and show loader while loading */}
        <OrbitControls 
          enableZoom={false} // Disable zooming via scroll
          maxPolarAngle={Math.PI / 2} // Prevent the camera from going below the model
          minPolarAngle={Math.PI / 2} // Prevent the camera from going above the model (locks vertical angle)
        />
        <Computers isMobile={isMobile} /> {/* Render the computer model with device-specific props */}
      </Suspense>
      <Preload all /> {/* Preload all assets in the scene for better performance */}
    </Canvas>
  )
}

export default ComputersCanvas; 