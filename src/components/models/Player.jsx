import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { folder, useControls } from "leva";
import { useRef } from "react";
import { useWaveSurfer } from "../../hooks/useWaveSurfer";
import _ from "lodash";
import { useAudioBadge } from "../../hooks/useAudioBadge";
import { useShowBadge } from "../../hooks/useShowBadge";

export function Player(props) {
  const { audioBadgeRef } = useAudioBadge();
  const showHideBadge = useShowBadge();
  const crankRef = useRef();
  const { nodes, materials } = useGLTF("/models/Player.gltf");
  const { isPlaying, handlePlayPause } = useWaveSurfer();

  const { rotationX, rotationY, rotationZ } = useControls({
    "Old Player Crank": folder(
      {
        rotationX: { value: -0.001, min: -10, max: 30, step: 0.1 },
        rotationY: { value: -0.062, min: -10, max: 30, step: 0.1 },
        rotationZ: { value: -0.001, min: -10, max: 30, step: 0.1 },
      },
      { collapsed: true }
    ),
  });

  useFrame(() => {
    if (isPlaying) {
      crankRef.current.rotation.x -= 0.1;
    }
  });

  const hideShowContainer = () => {
    showHideBadge(audioBadgeRef.current, isPlaying, handlePlayPause);
  };

  const debouncePlay = _.debounce(hideShowContainer, 500, {
    leading: true,
    trailing: false,
  });

  return (
    <group {...props} dispose={null} onClick={debouncePlay}>
      <group
        name="Vert003"
        ref={crankRef}
        position={[-0.113, 3.049, -3.113]}
        rotation={[rotationX, rotationY, rotationZ]}
      >
        <mesh
          name="Vert003_1"
          castShadow
          receiveShadow
          geometry={nodes.Vert003_1.geometry}
          material={materials.Silver}
        />
        <mesh
          name="Vert003_2"
          castShadow
          receiveShadow
          geometry={nodes.Vert003_2.geometry}
          material={materials.Earth}
        />
      </group>
      <group
        name="desk"
        position={[-0.461, 3.611, -3.691]}
        rotation={[-0.001, -0.075, -0.001]}
        scale={[0.826, 0.98, 0.826]}
      >
        <mesh
          name="Cube010"
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={materials["Table Top"]}
        />
        <mesh
          name="Cube010_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube010_1.geometry}
          material={materials.Gold}
        />
        <mesh
          name="Cube010_2"
          castShadow
          receiveShadow
          geometry={nodes.Cube010_2.geometry}
          material={materials.Silver}
        />
        <mesh
          name="Cube010_3"
          castShadow
          receiveShadow
          geometry={nodes.Cube010_3.geometry}
          material={materials.Earth}
        />
        <mesh
          name="Cube010_4"
          castShadow
          receiveShadow
          geometry={nodes.Cube010_4.geometry}
          material={materials.Black}
        />
        <mesh
          name="Cube010_5"
          castShadow
          receiveShadow
          geometry={nodes.Cube010_5.geometry}
          material={materials["White.002"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/Player.gltf");
