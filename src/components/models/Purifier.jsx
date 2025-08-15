import { useGLTF } from "@react-three/drei";
import { SteamEffect } from "../effects/SteamEffect";
import { useState } from "react";
import _ from "lodash";
import { folder, useControls } from "leva";

export function Purifier(props) {
  const [clicked, setClicked] = useState(false);
  const { nodes, materials } = useGLTF("/models/Purifier.gltf");

  const debounceHandleSteam = _.debounce(() => setClicked(!clicked), 500, {
    leading: true,
    trailing: false,
  });

  const { positionX, positionY, positionZ } = useControls({
    Purifier: folder(
      {
        positionX: { value: -4.995, min: -10, max: 100, step: 0.001 },
        positionY: { value: 3.36, min: -10, max: 100, step: 0.001 },
        positionZ: { value: 1.486, min: 0, max: 100, step: 0.001 },
      },
      { collapsed: true }
    ),
  });
  return (
    <>
      <group {...props} dispose={null} onClick={debounceHandleSteam}>
        <group
          name="Purifier"
          position={[positionX, positionY, positionZ]}
          rotation={[0, Math.PI / 4, 0]}
          scale={0.671}
        >
          <mesh
            name="Circle008"
            castShadow
            geometry={nodes.Circle008.geometry}
            material={materials["White.001"]}
          />
          <mesh
            name="Circle008_1"
            castShadow
            geometry={nodes.Circle008_1.geometry}
            material={materials["Air Purifier.001"]}
          />
          <mesh
            name="Circle008_2"
            castShadow
            geometry={nodes.Circle008_2.geometry}
            material={materials["Body GoXLR.001"]}
          />
        </group>
      </group>
      {clicked && <SteamEffect count={50} isOn={clicked} />}
    </>
  );
}

useGLTF.preload("/models/Purifier.gltf");
