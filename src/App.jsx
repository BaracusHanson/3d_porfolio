import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";
import Experience from "./components/Experience";
import { Interface } from "./components/Interface";
import Surround from "./components/Surround";
import { useRef, useState } from "react";
import { ScrollManager } from "./components/ScrollManager";
import CameraPosition from "./components/CameraPosition";
import CameraController from "./components/CameraController";
import Project from "./components/Project";
import { SectionProvider } from "./components/SectionContext";
import { Avatar } from "./components/Avatar";

export default function App() {
  const [cameraPosition, setCameraPosition] = useState([0, 0, 0]);
  const [cameraRotation, setCameraRotation] = useState([0, 0, 0]);
  const [fov, setFov] = useState(100);
  const cameraRef = useRef();

  return (
    <SectionProvider>
      <Canvas
        shadows
        camera={{
          position: cameraPosition,
          rotation: cameraRotation,
          fov: fov,
        }}
        ref={cameraRef}
      >
        <CameraPosition
          setCameraPosition={setCameraPosition}
          setCameraRotation={setCameraRotation}
          setFov={setFov}
        />
        <CameraController
          cameraPosition={cameraPosition}
          cameraRotation={cameraRotation}
          fov={fov}
        />
        <ScrollControls pages={4} damping={0.1}>
          <ScrollManager />
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
        <Project />
        <Experience scale={1} position={[0, 0, 0]} />
        <Surround />
        <group position={[-0.08, 0, 1.2]} scale={1} >
          <Avatar />
        </group>
      </Canvas>
    </SectionProvider>
  );
}
