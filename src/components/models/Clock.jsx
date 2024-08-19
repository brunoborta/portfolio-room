import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva'
import { useMemo, useRef } from 'react'

export function Clock(props) {
  const minuteHand = useRef();
  const hoursHand = useRef();
  const { nodes, materials } = useGLTF('/models/Clock.gltf');

  // const options = useMemo(() => {
  //   return {
  //     x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
  //     y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
  //     z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
  //     visible: true,
  //   }
  // }, []);

  // const minutesHandControls = useControls('Minutes Hand', options);
  // const hoursHandControls = useControls('Hours Hand', options);

  return (
    <group {...props} dispose={null}>
      <mesh castShadow geometry={nodes.Cylinder021.geometry} material={materials['Table Top']} position={[-7.566, 7.177, -1.715]} rotation={[Math.PI / 2, 0, -Math.PI / 4]} scale={0.671} />
      <mesh castShadow ref={hoursHand} geometry={nodes.Cylinder022.geometry} material={materials.White} position={[-5.459, 7.174, 0.387]} rotation={[-1.578, 0.007, -2.356]} scale={0.671} />
      <mesh castShadow ref={minuteHand} geometry={nodes.Cylinder023.geometry} material={materials.White} position={[-5.462, 7.172, 0.39]} rotation={[-2.129, 0.487, -2.214]} scale={0.671} />
    </group>
  )
}

useGLTF.preload('/models/Clock.gltf')
