import { useGLTF } from '@react-three/drei'

export function Player(props) {
  const { nodes, materials } = useGLTF('/models/Player.gltf')
  return (
    <group {...props} dispose={null}>
      <group name="Vert003" position={[-0.148, 3.022, -3.026]} rotation={[1.564, 0.026, 0.075]}>
        <mesh name="Vert003_1" castShadow receiveShadow geometry={nodes.Vert003_1.geometry} material={materials.Silver} />
        <mesh name="Vert003_2" castShadow receiveShadow geometry={nodes.Vert003_2.geometry} material={materials['Wood.001']} />
      </group>
      <group name="Cube007" position={[-0.461, 3.611, -3.691]} rotation={[-0.001, -0.075, -0.001]} scale={0.974}>
        <mesh name="Cube009" castShadow receiveShadow geometry={nodes.Cube009.geometry} material={materials.Silver} />
        <mesh name="Cube009_1" castShadow receiveShadow geometry={nodes.Cube009_1.geometry} material={materials['Table Top']} />
        <mesh name="Cube009_2" castShadow receiveShadow geometry={nodes.Cube009_2.geometry} material={materials.Earth} />
        <mesh name="Cube009_3" castShadow receiveShadow geometry={nodes.Cube009_3.geometry} material={materials.Black} />
        <mesh name="Cube009_4" castShadow receiveShadow geometry={nodes.Cube009_4.geometry} material={materials['White.002']} />
        <mesh name="Cube009_5" castShadow receiveShadow geometry={nodes.Cube009_5.geometry} material={materials.Gold} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/Player.gltf')
