import { Image, Text } from "@react-three/drei";
import React from "react";
import { greenMaterial } from "../components/Materials";

const Card = ({ project, index, isActive }) => {
  return (
    <group key={index} position={[0.8 * index, 0.05, 0]} receiveShadow>
      <mesh
        position={[0, 0.35, 0]}
        material-transparent
        material-opacity={isActive ? 1 : 0.9}
        onClick={() =>
          isActive && project.liveUrl && window.open(project.liveUrl, "_blank")
        }
      >
        <boxGeometry args={[0.6, 0.8, 0.025]} />
        <meshStandardMaterial
          color={"#426e4d"}
          transparent
          opacity={isActive ? 1 : 0.9}
        />
      </mesh>
      <Image
        scale={[0.55, 0.45, 0.1]}
        url={project.imageUrl}
        toneMapped={true}
        position={[0, 0.5, 0.0229]}
        transparent
        opacity={isActive ? 0.6 : 0.5}
        fit="cover"
      />
      <Text
        maxWidth={2}
        anchorX="center"
        anchorY="middle"
        fontSize={0.05}
        position={[0, 0.8, 0.02]}
        color={isActive ? "white" : "gray"}
      >
        {project.name.toUpperCase()}
      </Text>
      <Text
        maxWidth={0.9}
        anchorX="center"
        anchorY="middle"
        fontSize={0.03}
        position={[0, 0.2, 0.02]}
        color={isActive ? "white" : "gray"}
      >
        {project.description}
      </Text>

      <group position={[0, -0.04, 0.02]}>
        <mesh
          position={[0.19, 0.03, -0.007]}
          onPointerOver={(e) => (document.body.style.cursor = "pointer")}
          onPointerOut={(e) => (document.body.style.cursor = "default")}
          onClick={() => {
            isActive && window.open(project.gitUrl, "_blank");
          }}
        >
          <boxGeometry args={[0.2, 0.05, 0.0125]} />
          <meshStandardMaterial color="#426e4d" />
          <Text
            maxWidth={0.1}
            anchorX="center"
            anchorY="middle"
            fontSize={0.03}
            color={isActive ? "white" : "gray"}
            opacity={isActive ? 1 : 0.5}
            position={[0, 0.007, 0.02]}
          >
            GitHub
          </Text>
        </mesh>
      </group>
    </group>
  );
};

export default Card;
