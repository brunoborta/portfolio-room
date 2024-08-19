import { useGLTF } from '@react-three/drei'

export function Tree(props) {
  const { nodes, materials } = useGLTF('/models/Tree.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.454, 6.017, -3.167]} rotation={[Math.PI / 2, 0, -0.246]} scale={0.671}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder068.geometry} material={materials.Star} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder068_1.geometry} material={materials.Tree} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder068_2.geometry} material={materials.Vase} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder068_3.geometry} material={materials.Trunk} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder068_4.geometry} material={materials['Pink Bulb']} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder068_5.geometry} material={materials['Blue Bulb']} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder068_6.geometry} material={materials['Red Bulb']} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder068_7.geometry} material={materials['Gold Bulb']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/Tree.gltf')
