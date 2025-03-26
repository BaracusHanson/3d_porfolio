import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";
import Experience from "./components/Experience";
import { Interface } from "./components/Interface";
import Surround from "./components/Surround";
import { useRef, useState } from "react";
import { ScrollManager } from "./components/ScrollManager";
import CameraPosition from "./components/CameraPosition";
import CameraController from "./components/CameraController";

export default function App() {
  const [section, setSection] = useState(0);
  const [cameraPosition, setCameraPosition] = useState([0, 0, 0]);
  const [cameraRotation, setCameraRotation] = useState([0, 0, 0]);
  const [fov, setFov] = useState(0);
  const cameraRef = useRef();
  return (
    <Canvas
      shadows
      camera={{ position: cameraPosition, rotation: cameraRotation, fov: fov }}
      ref={cameraRef}
    >
      <CameraPosition
        setCameraPosition={setCameraPosition}
        setCameraRotation={setCameraRotation}
        setFov={setFov}
        section={section}
      />
      <CameraController
        cameraPosition={cameraPosition}
        cameraRotation={cameraRotation}
        fov={fov}
      />
      <ScrollControls pages={4} damping={0.1}>
        <Scroll html>
          <Interface />
          <ScrollManager section={section} onSectionChange={setSection} />
        </Scroll>
      </ScrollControls>
      <Experience scale={1} position={[0, 0, 0]} />
      <Surround />
    </Canvas>
  );
}
