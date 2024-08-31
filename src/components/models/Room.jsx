import { useGLTF } from "@react-three/drei";

export function Room(props) {
  const { nodes, materials } = useGLTF("/models/Room.gltf");
  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.345, 0.516, 1.047]}
        rotation={[0, Math.PI / 4, 0]}
        scale={0.671}
      >
        <mesh
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={materials.Floor}
        />
        <mesh
          receiveShadow
          geometry={nodes.Cube013_1.geometry}
          material={materials.Wall}
        />
        <mesh
          receiveShadow
          geometry={nodes.Cube013_2.geometry}
          material={materials["Foam Black"]}
        />
        <mesh
          receiveShadow
          geometry={nodes.Cube013_3.geometry}
          material={materials["Foam Yellow"]}
        />
        <mesh
          receiveShadow
          geometry={nodes.Cube013_4.geometry}
          material={materials.Curtains}
        />
        <mesh
          receiveShadow
          geometry={nodes.Cube013_5.geometry}
          material={materials.basic}
        />
        <mesh
          receiveShadow
          geometry={nodes.Cube013_6.geometry}
          material={materials.Carpet}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/Room.gltf");
