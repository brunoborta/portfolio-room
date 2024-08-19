import { useGLTF } from '@react-three/drei'

export function Bike(props) {
  const { nodes, materials } = useGLTF('/models/Bike.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[3.218, 2.243, -0.113]} rotation={[2.146, -0.498, 2.507]} scale={0.671}>
        <mesh castShadow geometry={nodes.Mesh007.geometry} material={materials['Body Bike']} />
        <mesh castShadow geometry={nodes.Mesh007_1.geometry} material={materials['Chain Bike']} />
        <mesh castShadow geometry={nodes.Mesh007_2.geometry} material={materials['Seat Bike']} />
        <mesh castShadow geometry={nodes.Mesh007_3.geometry} material={materials['Tires Bike']} />
        <mesh castShadow geometry={nodes.Mesh007_4.geometry} material={materials['Radius Bike']} />
        <mesh castShadow geometry={nodes.Mesh007_5.geometry} material={materials['Feet Bike']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/Bike.gltf')
