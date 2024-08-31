import { useGLTF } from "@react-three/drei";

export function Trash(props) {
  const { nodes, materials } = useGLTF("/models/Trash.gltf");
  return (
    <group {...props} dispose={null}>
      <group
        position={[-3.759, 1.431, 0.309]}
        rotation={[0, 1.129, 0]}
        scale={0.671}
      >
        <mesh
          castShadow
          geometry={nodes.Cube007.geometry}
          material={materials["Lid Trash"]}
        />
        <mesh
          castShadow
          geometry={nodes.Cube007_1.geometry}
          material={materials["Trash Pedal"]}
        />
        <mesh
          castShadow
          geometry={nodes.Cube007_2.geometry}
          material={materials.White}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/Trash.gltf");
