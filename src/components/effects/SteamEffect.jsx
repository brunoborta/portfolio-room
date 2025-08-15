import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export function SteamEffect({ count = 100, isOn = false }) {
  const meshRef = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const timeRef = useRef(0);

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
        spawnDelay: i * 50, // Stagger spawn by 50ms per particle
        hasSpawned: false,
        active: false,
      });
    }
    return temp;
  }, [count]);

  useFrame((state, delta) => {
    timeRef.current += delta * 1000; // Convert to milliseconds

    particles.forEach((particle, i) => {
      // Handle spawn when turning on
      if (
        isOn &&
        !particle.hasSpawned &&
        timeRef.current > particle.spawnDelay
      ) {
        particle.hasSpawned = true;
        particle.active = true;
        particle.invisible = false;
      }

      // Handle turning off - mark particles to stop respawning
      if (!isOn) {
        particle.hasSpawned = false;
        timeRef.current = 0; // Reset timer for next on cycle
      }

      // Only update active particles
      if (particle.active) {
        particle.y += particle.speed;

        // When reaching threshold
        if (particle.y > 1.2) {
          if (isOn) {
            // If still on, reset position
            particle.y = 0;
          } else {
            // If off, make invisible and deactivate
            particle.invisible = true;
            particle.active = false;
            particle.y = 0;
          }
        }
      }

      // Apply transformations
      dummy.position.set(particle.x, particle.y, particle.z);
      dummy.scale.set(
        particle.invisible ? 0 : particle.scale,
        particle.invisible ? 0 : particle.scale,
        particle.invisible ? 0 : particle.scale
      );
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
