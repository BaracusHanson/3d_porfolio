
import * as THREE from "three";


const greenMaterial = new THREE.MeshStandardMaterial({
  map: new THREE.TextureLoader().load("/textures/vert.png"),
});
const BlackMaterial = new THREE.MeshStandardMaterial({
  metalness: 0.7,
  roughness: 0.3,
  map: new THREE.TextureLoader().load("/textures/noir.png"),
});
const BlancEmiMaterial = new THREE.MeshStandardMaterial({
  metalness: 0.1,
  roughness: 0.5,
  emissive: "#ffffff",
  emissiveIntensity: 0.1,
  map: new THREE.TextureLoader().load("/textures/blanc.png"),
});
const BlancMaterial = new THREE.MeshStandardMaterial({
  metalness: 0.01,
  roughness: 0.1,
  map: new THREE.TextureLoader().load("/textures/blanc.png"),
});
const BleuMaterial = new THREE.MeshStandardMaterial({
  metalness: 0.01,
  roughness: 0.1,
  map: new THREE.TextureLoader().load("/textures/bleu.png"),
});
const plastiqueNoirMaterial = new THREE.MeshStandardMaterial({
  metalness: 0.8,
  roughness: 0.2,
  map: new THREE.TextureLoader().load("/textures/noir.png"),
});
const plastiqueGrisMaterial = new THREE.MeshStandardMaterial({
  metalness: 0.8,
  roughness: 0.2,
  map: new THREE.TextureLoader().load("/textures/gris.png"),
});

const bloom = new THREE.MeshStandardMaterial({
  emissive: "#93e2ec",
});
export {
  greenMaterial,
  BlackMaterial,
  BlancEmiMaterial,
  BlancMaterial,
  plastiqueNoirMaterial,
  BleuMaterial,
  bloom,
  plastiqueGrisMaterial
};
