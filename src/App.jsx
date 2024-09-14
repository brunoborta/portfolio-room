import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import Experience from "./components/Experience";
import AudioPlayer from "./components/UI/AudioPlayer";
import Interface from "./components/UI/Interface";

import { useMouseRotation } from "./hooks/useMouseRotation";

import GlobalStyle from "./globalStyles";
import { Scroll, ScrollControls } from "@react-three/drei";

import config from "./utils/config";
import Intro from "./components/UI/Intro";

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
      <GlobalStyle />
      <Leva hidden={hideDebug} />
      <AudioPlayer />
      <Intro />
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 20, 20],
        }}
        dpr={[1, 1.5]}
        shadows
        onPointerMove={handlePointerMove}
      >
        <Suspense fallback={null}>
          <ScrollControls damping={0.2} pages={config.sections.length}>
            <Experience />
            <Scroll html>
              <Interface />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
