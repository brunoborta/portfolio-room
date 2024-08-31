import { useGLTF } from "@react-three/drei";
import { folder, useControls } from "leva";

export function Drawer(props) {
  const { nodes, materials } = useGLTF("/models/Drawer.gltf");

  const { positionX, positionY, positionZ } = useControls({
    Drawer: folder(
      {
        positionX: { value: -5.034, min: -10, max: 100, step: 0.001 },
        positionY: { value: 2.486, min: -10, max: 100, step: 0.001 },
        positionZ: { value: 1.435, min: 0, max: 100, step: 0.001 },
      },
      { collapsed: true }
    ),
  });
  return (
    <group {...props} dispose={null}>
      <group
        name="drawer"
        position={[positionX, positionY, positionZ]}
        rotation={[0, Math.PI / 4, 0]}
        scale={0.671}
      >
        <mesh
          name="Cube011"
          castShadow
          geometry={nodes.Cube011.geometry}
          material={materials["Table Top"]}
        />
        <mesh
          name="Cube011_1"
          castShadow
          geometry={nodes.Cube011_1.geometry}
          material={materials.White}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/Drawer.gltf");
