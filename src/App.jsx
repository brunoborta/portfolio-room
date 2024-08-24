import GlobalStyle from "./globalStyles";
import Experience from "./components/Experience";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { useEffect, useState } from "react";
function App() {
  const [hideDebug, setHideDebug] = useState(true);
  useEffect(() => {
    const debug = window.location.hash;
    if (debug === "#debug") {
      setHideDebug(false);
    }
  }, []) 
  return (
    <>
      <Leva hidden={hideDebug} />
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 20, 20],
        }}
        shadows
      >
        <GlobalStyle />
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
