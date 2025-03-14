import React from "react";
import { useGLTF } from "@react-three/drei";

import {
  greenMaterial,
  BlackMaterial,
  BlancEmiMaterial,
  BlancMaterial,
  plastiqueNoirMaterial,
  BleuMaterial,
  bloom,
  plastiqueGrisMaterial,
} from "./Materials";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/room.gltf");

  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="drap"
          castShadow
          receiveShadow
          geometry={nodes.drap.geometry}
          material={greenMaterial}
          position={[-1.032, 1.451, -1.087]}
          rotation={[0, 0, 0.018]}
          scale={[0.828, 1, 1]}
        />
        <mesh
          name="enceintes"
          castShadow
          receiveShadow
          geometry={nodes.enceintes.geometry}
          material={plastiqueNoirMaterial}
          position={[0.057, 0.807, 2.08]}
          scale={0.683}
        />
        <mesh
          name="clavier"
          castShadow
          receiveShadow
          geometry={nodes.clavier.geometry}
          material={plastiqueNoirMaterial}
          position={[-0.009, 0.771, 1.845]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[1.007, 1, 0.744]}
        />
        <mesh
          name="bedside_table"
          castShadow
          receiveShadow
          geometry={nodes.bedside_table.geometry}
          material={BlancEmiMaterial}
          position={[-0.024, 0.283, -2.361]}
          scale={0.457}
        />
        <mesh
          name="bretelleChaise"
          castShadow
          receiveShadow
          geometry={nodes.bretelleChaise.geometry}
          material={plastiqueNoirMaterial}
          position={[0, 0, 0.141]}
        />
        <mesh
          name="plastiqueChaise"
          castShadow
          receiveShadow
          geometry={nodes.plastiqueChaise.geometry}
          material={plastiqueNoirMaterial}
          position={[0, 0, 0.141]}
        />
        <mesh
          name="borderChair"
          castShadow
          receiveShadow
          geometry={nodes.borderChair.geometry}
          material={bloom}
          position={[0, 0, 0.141]}
        />
        <mesh
          name="tissusChaise"
          castShadow
          receiveShadow
          geometry={nodes.tissusChaise.geometry}
          material={greenMaterial}
          position={[0, 0, 0.141]}
        />
        {/* <mesh
          name="Indoor_Table__Plant"
          castShadow
          receiveShadow
          geometry={nodes.Indoor_Table__Plant.geometry}
          material={greenMatteMaterial}
          position={[0.563, 0.617, -2.356]}
          rotation={[0, 0.597, 0]}
          scale={0.451}
        /> */}
        <mesh
          name="enceintesLeds"
          castShadow
          receiveShadow
          geometry={nodes.enceintesLeds.geometry}
          material={bloom}
          position={[0.057, 0.807, 2.08]}
          scale={0.683}
        />
        <mesh
          name="enceinteTubePlastique"
          castShadow
          receiveShadow
          geometry={nodes.enceinteTubePlastique.geometry}
          material={plastiqueNoirMaterial}
          position={[0.057, 0.807, 2.08]}
          scale={0.683}
        />
        <mesh
          name="enceintesMembrane"
          castShadow
          receiveShadow
          geometry={nodes.enceintesMembrane.geometry}
          material={nodes.enceintesMembrane.material}
          position={[0.057, 0.807, 2.08]}
          scale={0.683}
        />
        <mesh
          name="pcVerre"
          castShadow
          receiveShadow
          geometry={nodes.pcVerre.geometry}
          material={plastiqueNoirMaterial}
          position={[-0.803, 0.933, 2.153]}
          rotation={[0, -0.157, 0]}
          scale={[0.082, 0.18, 0.18]}
        />
        <mesh
          name="pc"
          castShadow
          receiveShadow
          geometry={nodes.pc.geometry}
          material={plastiqueNoirMaterial}
          position={[-0.803, 0.933, 2.153]}
          rotation={[0, -0.157, 0]}
          scale={[0.082, 0.18, 0.18]}
        />
        <mesh
          // ref={ventilateur}
          name="pcVentilateur"
          castShadow
          receiveShadow
          geometry={nodes.pcVentilateur.geometry}
          material={bloom}
          position={[-0.803, 0.933, 2.153]}
          rotation={[0, -0.157, 0]}
          scale={[0.082, 0.18, 0.18]}
        />
        <mesh
          name="Murs"
          castShadow
          receiveShadow
          geometry={nodes.Murs.geometry}
          material={BlancMaterial}
          position={[0, 1, 0]}
          scale={[2, 1, 2.5]}
        />
        <mesh
          name="CeilNeon"
          castShadow
          receiveShadow
          geometry={nodes.CeilNeon.geometry}
          material={bloom}
          position={[0.74, 1.969, 0]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-1.232, -0.024, -2.385]}
        />
        <mesh
          name="PlanDeTravail"
          castShadow
          receiveShadow
          geometry={nodes.PlanDeTravail.geometry}
          material={BlackMaterial}
          position={[0, -0.123, -0.078]}
        />
        <mesh
          name="Commode"
          castShadow
          receiveShadow
          geometry={nodes.Commode.geometry}
          material={BlackMaterial}
          position={[1.793, 0.325, 0.006]}
          scale={[0.203, 0.314, 0.692]}
        />
        <mesh
          name="Penderie"
          castShadow
          receiveShadow
          geometry={nodes.Penderie.geometry}
          material={BlancEmiMaterial}
          position={[1.565, 0.838, 1.49]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.232, -0.863, -0.525]}
        />
        <mesh
          name="MirroirPenderie"
          castShadow
          receiveShadow
          geometry={nodes.MirroirPenderie.geometry}
          material={nodes.MirroirPenderie.material}
          position={[2.222, 0.867, 1.494]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.232, -0.863, -0.525]}
        />
        <mesh
          name="Tirroir"
          castShadow
          receiveShadow
          geometry={nodes.Tirroir.geometry}
          material={BlackMaterial}
          position={[0.623, 0.412, 2.036]}
          scale={[0.816, 0.855, 0.816]}
        />
        <mesh
          name="Bibliotheque"
          castShadow
          receiveShadow
          geometry={nodes.Bibliotheque.geometry}
          material={BlancEmiMaterial}
          position={[0.855, 0.636, -2.366]}
          scale={[0.827, 1, 0.734]}
        />
        <mesh
          name="Matelas"
          castShadow
          receiveShadow
          geometry={nodes.Matelas.geometry}
          material={BlancEmiMaterial}
          position={[-1.041, 0.209, -1.34]}
          scale={[0.683, 0.665, 1.114]}
        />
        <mesh
          name="cadreLit"
          castShadow
          receiveShadow
          geometry={nodes.cadreLit.geometry}
          material={bloom}
          position={[-1.035, 0.264, -1.342]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.711, -0.029, -1.148]}
        />
        <mesh
          name="Coussin"
          castShadow
          receiveShadow
          geometry={nodes.Coussin.geometry}
          material={greenMaterial}
          position={[-0.695, 0.466, -2.406]}
          rotation={[-0.638, 0, 0]}
          scale={[0.212, 0.148, 0.021]}
        />
        <mesh
          name="TV"
          castShadow
          receiveShadow
          geometry={nodes.TV.geometry}
          material={plastiqueNoirMaterial}
          position={[-0.995, 0.7, 0.441]}
          scale={[0.556, 0.276, 0.009]}
        />
        <mesh
          name="EcranTV"
          castShadow
          receiveShadow
          geometry={nodes.EcranTV.geometry}
          material={bloom}
          position={[-0.995, 0.7, 0.44]}
          scale={[0.556, 0.276, 0.009]}
        />
        {/* <mesh
          name="GrandMirroir"
          castShadow
          receiveShadow
          geometry={nodes.GrandMirroir.geometry}
          material={mirrorMaterial}
          position={[-1.42, 1.371, -0.013]}
          // rotation={[0,0,Math.P/2]}
          scale={[2, 1, 2.5]}
        /> */}
        <mesh
          name="Porte"
          castShadow
          receiveShadow
          geometry={nodes.Porte.geometry}
          material={BleuMaterial}
          position={[2.028, 0.882, -1.19]}
          scale={[2, 1, 2.5]}
        />
        <mesh
          name="ultrawide"
          castShadow
          receiveShadow
          geometry={nodes.ultrawide.geometry}
          material={plastiqueGrisMaterial}
          position={[-0.028, 0.994, 2.203]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[2, 1, 2.5]}
        />
        <mesh
          name="ecrandUltrawide"
          castShadow
          receiveShadow
          geometry={nodes.ecrandUltrawide.geometry}
          material={bloom}
          position={[-0.028, 1.03, 2.184]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[2, 1, 2.5]}
        />
        <mesh
          name="Tirroir001"
          castShadow
          receiveShadow
          geometry={nodes.Tirroir001.geometry}
          material={BlackMaterial}
          position={[-0.678, 0.412, 2.036]}
          scale={[0.816, 0.855, 0.816]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/room.gltf");
