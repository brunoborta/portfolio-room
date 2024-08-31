import { useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";

export function Clock(props) {
  const [time, setTime] = useState({ hourRotation: 0, minuteRotation: 0 });

  const { nodes, materials } = useGLTF("/models/Clock.gltf");
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

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <group {...props} dispose={null}>
      <mesh
        name="Clock"
        castShadow
        geometry={nodes.Clock.geometry}
        material={materials["Table Top"]}
        position={[-5.563, 7.177, 0.288]}
        rotation={[Math.PI / 2, 0, -Math.PI / 4]}
        scale={0.671}
      />
      <mesh
        name="MinuteHand"
        castShadow
        geometry={nodes.MinuteHand.geometry}
        material={materials.White}
        position={[-5.52, 7.172, 0.337]}
        rotation={[3.011, -0.741, time.minuteRotation]}
        scale={[0.032, 0.181, 0.029]}
      />
      <mesh
        name="HourHand"
        castShadow
        geometry={nodes.HourHand.geometry}
        material={materials.White}
        position={[-5.511, 7.172, 0.341]}
        rotation={[3.044, -0.756, time.hourRotation]}
        scale={[0.032, 0.158, 0.032]}
      />
    </group>
  );
}

useGLTF.preload("/models/Clock.gltf");
