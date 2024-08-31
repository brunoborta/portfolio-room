import { useEffect, useRef } from "react";
import { useControls, folder } from "leva";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export default function Camera() {
  const cameraRef = useRef();
  const { set } = useThree();

  const {
    positionX,
    positionY,
    positionZ,
    fov,
    near,
    far,
    targetX,
    targetY,
    targetZ,
  } = useControls({
    "Perspective Camera": folder(
      {
        positionX: { value: 0.5, min: -10, max: 100, step: 0.1 },
        positionY: { value: 9, min: -10, max: 100, step: 0.1 },
        positionZ: { value: 18, min: 0, max: 100, step: 0.1 },
        fov: { value: 45, min: 10, max: 120, step: 1 },
        near: { value: 0.1, min: 0.1, max: 1000, step: 0.1 },
        far: { value: 40, min: 1, max: 1000, step: 1 },
        targetX: { value: -0.5, min: -10, max: 30, step: 0.1 },
        targetY: { value: 3, min: -10, max: 30, step: 0.1 },
        targetZ: { value: -2.5, min: -10, max: 30, step: 0.1 },
      },
      { collapsed: true }
    ),
  });

  // Update the camera used by the scene with this camera
  useEffect(() => {
    if (cameraRef.current) {
      set({ camera: cameraRef.current });
    }
  }, [set]);

  // Update the camera
  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.position.set(positionX, positionY, positionZ);
      cameraRef.current.near = near;
      cameraRef.current.far = far;
      cameraRef.current.fov = fov;
      cameraRef.current.lookAt(targetX, targetY, targetZ);
      cameraRef.current.updateProjectionMatrix();
    }
  }, [
    positionX,
    positionY,
    positionZ,
    fov,
    near,
    far,
    targetX,
    targetY,
    targetZ,
  ]);

  return (
    <>
      <PerspectiveCamera
        shadows
        ref={cameraRef}
        position={[0.5, 9, 18]}
        fov={45}
        near={0.1}
        far={40}
      />
      <OrbitControls target={[-0.5, 3, -2.5]} />
    </>
  );
}
