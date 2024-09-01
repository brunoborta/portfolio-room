import { Environment } from "@react-three/drei";
import { folder, useControls } from "leva";
import { useRef } from "react";

function Lights() {
  const directionalRef = useRef();
  useControls({
    "Directional Light": folder(
      {
        visible: {
          value: true,
          onChange: (v) => {
            directionalRef.current.visible = v;
          },
        },
        position: {
          x: 1.1,
          y: -0.2,
          z: 4.7,
          onChange: (v) => {
            directionalRef.current.position.copy(v);
          },
        },
        intensity: {
          value: 1,
          min: 0,
          max: 10,
          onChange: (v) => {
            directionalRef.current.intensity = v;
          },
        },
        castShadow: {
          value: true,
          onChange: (v) => {
            directionalRef.current.castShadow = v;
          },
        },
      },
      { collapsed: true }
    ),
  });
  return (
    <>
      <Environment preset="apartment" />
      <directionalLight
        ref={directionalRef}
        position={[-1.1, -0.2, 4.7]}
        castShadow={true}
        intensity={1}
      />
    </>
  );
}

export default Lights;
