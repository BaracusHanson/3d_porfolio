import React, { useEffect } from "react";

const CameraPosition = ({ setCameraPosition, setCameraRotation, setFov, section }) => {
  console.log(section);
  useEffect(() => {
    switch (section) {
      case 0:
        setCameraPosition([-1, 1.4, 1.2]);
        setCameraRotation([0, -1.6, 0]);
        setFov(100);
        break;
      case 1:
        setCameraPosition([0.5, 1.4, 0.1]);
        setCameraRotation([0, -Math.PI / 2, 0]);
        setFov(80);
        break;
      case 2:
        setCameraPosition([-1, 1, -2]);
        setCameraRotation([Math.PI / 16, Math.PI, 0]);
        setFov(25);
        break;
      case 3:
        setCameraPosition([1, 1, 0]);
        setCameraRotation([0, 0, 0]);
        setFov(70);
        break;
      default:
        setCameraPosition([-1, 1.4, 1.2]);
        setCameraRotation([0, -1.6, 0]);
        setFov(100);
    }
  }, [section]);
  return null;
};

export default CameraPosition;
