import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import gsap from "gsap";

const CameraController = ({ cameraPosition, cameraRotation, fov }) => {
  const { camera } = useThree();

  useEffect(() => {
    gsap.to(camera.position, {
      x: cameraPosition[0],
      y: cameraPosition[1],
      z: cameraPosition[2],
      duration: 1,
      ease: "power3.inOut",
    });

    gsap.to(camera.rotation, {
      x: cameraRotation[0],
      y: cameraRotation[1],
      z: cameraRotation[2],
      duration: 1,
      ease: "power3.inOut",
    });

    gsap.to(camera, {
      fov: fov,
      duration: 1,
      ease: "power3.inOut",
      onUpdate: () => {
        camera.updateProjectionMatrix();
      },
    });
  }, [cameraPosition, cameraRotation, fov, camera]);

  return null;
};

export default CameraController;
