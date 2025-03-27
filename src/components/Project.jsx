import React, { useState } from "react";
import { motion } from "framer-motion-3d";
import projects from "../projectData";
import { Text } from "@react-three/drei";
import Card from "./Card";
import { SectionContext } from "./SectionContext";
import { useContext } from "react";

const Project = ({ ...props }) => {
  const { section } = useContext(SectionContext);
  const totalProjects = projects.length;
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(totalProjects / 2)
  );

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % totalProjects;
      return newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + totalProjects) % totalProjects;
      return newIndex;
    });
  };

  // Retourne null si section n'est pas égal à 1
  if (section !== 1) {
    return null;
  }

  return (
    <motion.group
      {...props}
      position={[1.5, 0.8, 0]}
      rotation={[0, -Math.PI / 2, 0]}
      animate={{
        opacity: section === 1 ? 1 : 0, // Passe de 0 à 1 si section === 1
      }}
      transition={{
        delay: 1.5,
        ducation: 0.5, // Durée de l'animation
        ease: "easeInOut", // Animation fluide
      }}
    >
      <motion.group
        animate={{
          x: -0.8 * currentIndex, // Déplacement horizontal basé sur l'index
        }}
        transition={{
          type: "spring",
          stiffness: 170,
          damping: 26,
        }}
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            project={project}
            index={index}
            isActive={index === currentIndex}
          />
        ))}
      </motion.group>

      {/* Navigation */}
      <group rotation={[0, Math.PI / 2, 0]} position={[0.02, 0.01, 0.2]}>
        <mesh
          onClick={nextSlide}
          position={[0, 0, 0.2]}
          onPointerOver={() => (document.body.style.cursor = "pointer")}
          onPointerOut={() => (document.body.style.cursor = "default")}
        >
          <Text
            rotation={[0, -Math.PI / 2, 0]}
            position={[0, 0.05, 0]}
            fontSize={0.025}
            color={"#F1F1F1"}
          >
            Suivant
          </Text>
          <boxGeometry args={[0, 0.05, 0.05]} />
          <meshBasicMaterial wireframe color="#426e4d" />
        </mesh>
        <mesh
          onClick={prevSlide}
          position={[0, 0, -0.2]}
          onPointerOver={() => (document.body.style.cursor = "pointer")}
          onPointerOut={() => (document.body.style.cursor = "default")}
        >
          <Text
            rotation={[0, -Math.PI / 2, 0]}
            position={[0, 0.05, 0]}
            fontSize={0.025}
            color={"#F1F1F1"}
          >
            Précédent
          </Text>
          <boxGeometry args={[0, 0.05, 0.05]} />
          <meshBasicMaterial wireframe color="#426e4f" />
        </mesh>
      </group>
    </motion.group>
  );
};

export default Project;
