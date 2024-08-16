import { Canvas } from "@react-three/fiber";
import GlobalStyle from "./globalStyles";
import Experience from "./components/Experience";
import { Environment, OrbitControls, Sky } from "@react-three/drei";

function App() {
  return (
    <>
      <GlobalStyle />
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 20,
          position: [0, 2, 4],
        }}
        shadows
      >
        <OrbitControls
          enableDamping={true}
          dampingFactor={0.1}
          minPolarAngle={Math.PI * 0.2}
          maxPolarAngle={Math.PI * 0.4}
          minAzimuthAngle={-Math.PI * 0.1}
          maxAzimuthAngle={0.2}
          enablePan={false}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 2, 4]} castShadow intensity={4}  />
        <Sky />
        <gridHelper args={[20, 20, 0xff0000, 'teal']} />
        <axesHelper />

        <Experience />
      </Canvas>
    </>
  );
}

export default App;
