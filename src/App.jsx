import { Canvas, extend } from "@react-three/fiber";
import {
  CameraControls,
  Effects,
  MeshReflectorMaterial,
  BakeShadows,
} from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  DepthOfField,
} from "@react-three/postprocessing";
import { UnrealBloomPass } from "three-stdlib";
import Experience from "./components/Experience";

extend({ UnrealBloomPass });

export default function App() {
  return (
    <Canvas shadows camera={{ position: [1, 1.8, 1.9], fov: 70 }}>
      
      <CameraControls makeDefault />
      <Experience scale={1} position={[0, 0, 0]} />
      <EffectComposer>
        <Bloom
          intensity={1}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.1}
        />
        <DepthOfField
          target={[0, 0, 13]}
          focalLength={0.1}
          bokehScale={0.1}
          height={700}
        />
        <Effects disableGamma>
          <unrealBloomPass threshold={0.1} strength={1.0} radius={0.5} />
        </Effects>
      </EffectComposer>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[4, 5, 25]} position={[0, 0.3, 0]} />
        <MeshReflectorMaterial
          blur={[300, 30]}
          resolution={1024}
          mixBlur={1}
          mixStrength={580}
          roughness={0.6}
          depthScale={1.2}
          minDepthThreshold={0}
          maxDepthThreshold={0.4}
          color="#050505"
          metalness={0.4}
        />
      </mesh>
      <BakeShadows />
    </Canvas>
  );
}
