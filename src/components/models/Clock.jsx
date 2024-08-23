import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva';
import { useEffect, useState } from 'react';

export function Clock(props) {
  const [time, setTime] = useState({ hourRotation: 0, minuteRotation: 0 });

  const { nodes, materials } = useGLTF('/models/Clock.gltf')
  const { rotationX, rotationY, rotationZ } = useControls({
    rotationX: { value: 3.044, min: -Math.PI, max: Math.PI, step: 0.01 },
    rotationY: { value: -0.756, min: -Math.PI, max: Math.PI, step: 0.01 },
    rotationZ: { value: 1.364, min: -Math.PI, max: Math.PI, step: 0.01 }
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours() % 12; // Convert to 12-hour format
      const minutes = now.getMinutes();
      
      // Calculate the rotation for the hour and minute hands
      const hourRotation = (hours + minutes / 60) * (Math.PI / 6); // 30 degrees per hour
      const minuteRotation = minutes * (Math.PI / 30); // 6 degrees per minute
      
      setTime({ hourRotation, minuteRotation });
    };

    updateTime(); // Set initial time
    const interval = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);


  return (
    <group {...props} dispose={null}>
      <mesh name="Clock" castShadow geometry={nodes.Clock.geometry} material={materials['Table Top']} position={[-5.563, 7.177, 0.288]} rotation={[Math.PI / 2, 0, -Math.PI / 4]} scale={0.671} />
      <mesh name="MinuteHand" castShadow geometry={nodes.MinuteHand.geometry} material={materials.White} position={[-5.52, 7.172, 0.337]} rotation={[3.011, -0.741, time.minuteRotation]} scale={[0.032, 0.181, 0.029]} />
      <mesh name="HourHand" castShadow geometry={nodes.HourHand.geometry} material={materials.White} position={[-5.511, 7.172, 0.341]} rotation={[rotationX, rotationY, time.hourRotation]} scale={[0.032, 0.158, 0.032]} />
    </group>
  )
}

useGLTF.preload('/models/Clock.gltf')
