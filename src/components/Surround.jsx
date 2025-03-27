import React from "react";
import {
  Bloom,
  EffectComposer,
  DepthOfField,
} from "@react-three/postprocessing";
import {
  BakeShadows,
  MeshReflectorMaterial,
  OrbitControls,
} from "@react-three/drei";

const Surround = () => {
  return (
    <>
      {/* <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI /48} // 30 degrés en radians (limite vers le bas)
        maxPolarAngle={Math.PI/2 - Math.PI / 24} // 150 degrés en radians (limite vers le haut)
        minAzimuthAngle={-Math.PI / 24} // -30 degrés en radians (limite de rotation gauche)
        maxAzimuthAngle={Math.PI / 24} // 30 degrés en radians (limite de rotation droite)
      /> */}

      <EffectComposer>
        <Bloom
          intensity={1.1}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.1}
        />
        {/* <DepthOfField
          target={[0, 0, 13]}
          focalLength={0.1}
          bokehScale={0.1}
          height={700}
        /> */}
      </EffectComposer>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[4, 5, 25]} position={[0, 0.3, 0]} />
        <MeshReflectorMaterial
          blur={[300, 30]}
          resolution={512}
          mixBlur={1}
          mixStrength={480}
          roughness={0.6}
          depthScale={1.2}
          minDepthThreshold={0}
          maxDepthThreshold={0.4}
          color="#050505"
          metalness={0.4}
        />
      </mesh>
      <BakeShadows />
    </>
  );
};

export default Surround;
