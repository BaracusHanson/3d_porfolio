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
import { Menu } from "./components/Menu";

export default function App() {
  const [cameraPosition, setCameraPosition] = useState([0, 0, 0]);
  const [cameraRotation, setCameraRotation] = useState([0, 0, 0]);
  const [menuOpened, setMenuOpened] = useState(false);
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
          menuOpened={menuOpened} 
        />
        <CameraController
          cameraPosition={cameraPosition}
          cameraRotation={cameraRotation}
          fov={fov}
        />
        <ScrollControls pages={4} damping={0.1} maxSpeed={1.2}>
          <ScrollManager />
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
        <Experience  position={[0, 0, 0]}  />
        <Project />
        <Surround />
        <group position={[-0.08, 0, 1.2]} scale={1}>
          <Avatar />
        </group>
      </Canvas>
      <Menu menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
    </SectionProvider>
  );
}
