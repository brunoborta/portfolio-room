import { Canvas } from "@react-three/fiber";
import GlobalStyle from "./globalStyles";
import Experience from "./components/Experience";
import { Environment, OrbitControls } from "@react-three/drei";

function App() {
  return (
    <>
      <GlobalStyle />
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 20,
          position: [-3, 2.5, 4],
        }}
      >
        <OrbitControls
          minPolarAngle={Math.PI * 0.2}
          maxPolarAngle={Math.PI * 0.4}
          minAzimuthAngle={-Math.PI * 0.4}
          maxAzimuthAngle={-0.2}
        />
        <Environment preset="city" />

        <Experience />
      </Canvas>
    </>
  );
}

export default App;
