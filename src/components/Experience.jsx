import React from "react";
import Model from "./Bedroom";
import { Sky } from "@react-three/drei";

const Experience = () => {
  return (
    <group>
      <directionalLight
        position={[-0.6, 1.5, -0.4]}
        castShadow
        intensity={0.6}
        shadow-mapSize={1024}
        shadow-bias={-0.001}
      >
        <orthographicCamera
          attach="shadow-camera"
          args={[-5, 5, -5, 5, 0.1, 10]}
        />
      </directionalLight>
      <ambientLight intensity={0.5} position={[-1, 9, 0]} />
      <Model />;
      {/* <axesHelper args={[12, 12, 12]} /> */}
      <hemisphereLight intensity={0.9} color="#93e2ec" groundColor="#505050" />
      <Sky
        inclination={50}
        scale={25}
        sunPosition={[20, 15, 65]}
        position={[3, 5, 0]}
      />
      <spotLight
        distance={2.5}
        intensity={0.6}
        position={[-0.028, 1.03, 2.27]}
        color="#93e2ec"
        power={1}
      />
      <pointLight
        distance={3}
        intensity={1}
        position={[-1, 0.7, 0]}
        rotation={[0, 3, 0]}
        color="#93e2ec"
        power={1}
      />
    </group>
  );
};

export default Experience;
