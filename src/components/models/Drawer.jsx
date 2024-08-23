import { useGLTF } from '@react-three/drei'

export function Drawer(props) {
  const { nodes, materials } = useGLTF('/models/Drawer.gltf')
  return (
    <group {...props} dispose={null}>
      <group name="drawer" position={[-5.034, 2.486, 1.435]} rotation={[0, Math.PI / 4, 0]} scale={0.671}>
        <mesh name="Cube011" castShadow geometry={nodes.Cube011.geometry} material={materials['Table Top']} />
        <mesh name="Cube011_1" castShadow geometry={nodes.Cube011_1.geometry} material={materials.White} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/Drawer.gltf')
