import { OrbitControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Apartment from "./Apartment";
import Lights from "./Lights";

export default function Experience() {
  
  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 20, 20],
      }}
      shadows
    >
      <Lights />
      <OrbitControls
        enableDamping={true}
        dampingFactor={0.1}
        minPolarAngle={Math.PI * 0.2}
        maxPolarAngle={Math.PI * 0.4}
        minAzimuthAngle={-Math.PI * 0.1}
        maxAzimuthAngle={0.2}
        enablePan={false}
      />
      <Sky />
      <gridHelper args={[20, 20, 0xff0000, 'teal']} />
      <axesHelper  />
      <Apartment />

    </Canvas>
  );
}
