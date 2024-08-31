import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export function SteamEffect({ count = 100, isPurifierOn = false }) {
  const meshRef = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        x: Math.random() * 0.3,
        y: 0,
        z: Math.random() * 0.3,
        scale: Math.random() * 0.5 + 0.1,
        speed: Math.random() * 0.01 + 0.005,
        opacity: Math.random() * 0.5 + 0.5,
        invisible: true,
      });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    particles.forEach((particle, i) => {
      const { x, y, z, scale, speed } = particle;

      particle.y += speed;
      if (particle.y > 1.2) {
        particle.y = 0; // Reset the position when it gets too high
      }
      dummy.position.set(x, y, z);
      dummy.scale.set(scale, scale, scale);
      dummy.rotation.set(0, 0, Math.random() * Math.PI);
      dummy.updateMatrix();

      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <group position={[-5.1, 3.5, 1.35]}>
      <instancedMesh ref={meshRef} args={[null, null, count]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshBasicMaterial color="white" transparent opacity={0.5} />
      </instancedMesh>
    </group>
  );
}
