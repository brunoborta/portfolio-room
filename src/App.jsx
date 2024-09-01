import GlobalStyle from "./globalStyles";
import Experience from "./components/Experience";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { useEffect, useState } from "react";
import AudioPlayer from "./components/AudioPlayer";
import { useMouseRotation } from "./hooks/useMouseRotation";

function App() {
  const [hideDebug, setHideDebug] = useState(true);
  const { handlePointerMove } = useMouseRotation();
  useEffect(() => {
    const debug = window.location.hash;
    if (debug === "#debug") {
      setHideDebug(false);
    }
  }, []);

  return (
    <>
      <Leva hidden={hideDebug} />
      <AudioPlayer />
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 20, 20],
        }}
        shadows
        onPointerMove={handlePointerMove}
      >
        <GlobalStyle />
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
