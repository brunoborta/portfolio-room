import { useGLTF, useVideoTexture } from "@react-three/drei";
import { MeshBasicMaterial } from "three";

export function Table(props) {
  const { nodes, materials } = useGLTF("/models/Table.gltf");
  const videoTexture = useVideoTexture("/media/matrix.mp4");
  videoTexture.flipY = false;

  const videoMaterial = new MeshBasicMaterial({ map: videoTexture });
  return (
    <group {...props} dispose={null}>
      <group
        name="Table"
        position={[-2.999, 3.043, -0.605]}
        rotation={[0, Math.PI / 4, 0]}
        scale={0.671}
      >
        <mesh
          name="Cube002"
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials["Table Top"]}
        />
        <mesh
          name="Cube002_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials.basic}
        />
        <mesh
          name="Cube002_2"
          castShadow
          geometry={nodes.Cube002_2.geometry}
          material={materials["Table Leg Black"]}
        />
        <mesh
          name="Cube002_3"
          castShadow
          geometry={nodes.Cube002_3.geometry}
          material={materials.Keyboard}
        />
        <mesh
          name="Cube002_4"
          castShadow
          geometry={nodes.Cube002_4.geometry}
          material={materials["Highlight Key"]}
        />
        <mesh
          name="Cube002_5"
          castShadow
          geometry={nodes.Cube002_5.geometry}
          material={materials["Normal Key"]}
        />
        <mesh
          name="Cube002_6"
          castShadow
          geometry={nodes.Cube002_6.geometry}
          material={materials["Orange Key"]}
        />
        <mesh
          name="Cube002_7"
          castShadow
          geometry={nodes.Cube002_7.geometry}
          material={materials["Scroll Wheel"]}
        />
        <mesh
          name="Cube002_8"
          castShadow
          geometry={nodes.Cube002_8.geometry}
          material={materials["Body Camera"]}
        />
        <mesh
          name="Cube002_9"
          castShadow
          geometry={nodes.Cube002_9.geometry}
          material={materials["Handle Camera"]}
        />
        <mesh
          name="Cube002_10"
          castShadow
          geometry={nodes.Cube002_10.geometry}
          material={materials.Lens}
        />
        <mesh
          name="Cube002_11"
          castShadow
          geometry={nodes.Cube002_11.geometry}
          material={materials.Volume}
        />
        <mesh
          name="Cube002_12"
          castShadow
          geometry={nodes.Cube002_12.geometry}
          material={materials["Body GoXLR"]}
        />
        <mesh
          name="Cube002_13"
          castShadow
          geometry={nodes.Cube002_13.geometry}
          material={materials["Red Button GoXLR"]}
        />
        <mesh
          name="Cube002_14"
          castShadow
          geometry={nodes.Cube002_14.geometry}
          material={materials["Green Button GoXLR"]}
        />
        <mesh
          name="Cube002_15"
          castShadow
          geometry={nodes.Cube002_15.geometry}
          material={materials.Light}
        />
        <mesh
          name="Cube002_16"
          castShadow
          geometry={nodes.Cube002_16.geometry}
          material={videoMaterial}
        />
        <mesh
          name="Cube002_17"
          castShadow
          geometry={nodes.Cube002_17.geometry}
          material={videoMaterial}
        />
        <mesh
          name="Cube002_18"
          castShadow
          geometry={nodes.Cube002_18.geometry}
          material={materials.coaster}
        />
        <mesh
          name="Cube002_19"
          castShadow
          geometry={nodes.Cube002_19.geometry}
          material={materials["microfone foam"]}
        />
        <mesh
          name="Cube002_20"
          castShadow
          geometry={nodes.Cube002_20.geometry}
          material={materials.Mousepad}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/Table.gltf");
