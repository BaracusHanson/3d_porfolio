import React from "react";
import {
  Bloom,
  EffectComposer,
  DepthOfField,
  ToneMapping,
} from "@react-three/postprocessing";
import {
  BakeShadows,
  Environment,
  MeshReflectorMaterial,
  OrbitControls,
} from "@react-three/drei";

const Surround = () => {
  return (
    <>
      {/* <OrbitControls /> */}

      <EffectComposer>
        <Bloom
          intensity={0.3}
          // luminanceThreshold={.5}
          // luminanceSmoothing={0.1}
          mipmapBlur
        />
        <ToneMapping />
      </EffectComposer>
      <Environment background preset="sunset" blur={0.5} />
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
