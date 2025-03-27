import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { useContext } from "react";
import { SectionContext } from "./SectionContext";

export const TvScreen = () => {
  const { section } = useContext(SectionContext);
  const textRef = useRef();
  useFrame(() => {
    if (textRef.current && section === 2) {
      textRef.current.position.y += 0.0025; // Déplace le texte vers le haut
      if (textRef.current.position.y > 10) {
        textRef.current.position.y = 0; // Réinitialise la position
      }
    }
    if (textRef.current && section !== 2) {
      textRef.current.position.y = 0; // Réinitialise la position
    }
  });
  return (
    <mesh position={[-0.995, 0.7, 0.43]} rotation={[0, Math.PI, 0]}>
      <planeGeometry args={[1.08, 0.53]} />
      <meshStandardMaterial>
        <RenderTexture attach="map" anisotropy={16}>
          <PerspectiveCamera
            makeDefault
            manual
            aspect={1 / 1}
            position={[0, 0, 5]}
          />
          <color attach="background" args={["#555"]} />
          <ambientLight intensity={0.9} />
          <directionalLight position={[10, 10, 5]} />
          <Text
            ref={textRef}
            fontSize={0.2}
            color="#FFF"
            anchorX="center"
            anchorY="top"
            maxWidth={2.5}
            lineHeight={1.5}
          >
            {`Je suis développeur fullstack avec 2 ans d'expérience dans les technologies modernes telles que:\nThree.js\nReact Three Fiber\nRedux Toolkit\nReact/React Native.\n\n
J'ai également une solide expérience en backend avec:\nNode.js et des bases solides avec des outils comme MongoDB\nMySQL.\n
En termes de design et d'animation, j'utilise\nFramer Motion\nTailwindCSS\nBlender pour créer des interfaces dynamiques et attrayantes.\n\nLANGUES\n\nje suis natif en Français\nje maîtrise l'anglais (niveau intermediaire)\nJ'ai des bases en espagnol.`}
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};
