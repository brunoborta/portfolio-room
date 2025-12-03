import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import Experience from "./components/Experience";
import AudioPlayer from "./components/UI/AudioPlayer";
import Interface from "./components/UI/Interface";
import Navigation from "./components/UI/Navigation";

import { useMouseRotation } from "./hooks/useMouseRotation";

import GlobalStyle from "./globalStyles";
import { Scroll, ScrollControls } from "@react-three/drei";

import Intro from "./components/UI/Intro";
import ToggleMode from "./components/UI/ToggleMode";
import LoadingScreen from "./components/UI/LoadingScreen";
import { useIntro } from "./hooks/useIntro";

function App() {
  const [hideDebug, setHideDebug] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const { handlePointerMove } = useMouseRotation();
  const { setLoadingCompleted } = useIntro();

  const handleLoadComplete = () => {
    setIsLoading(false);
    setLoadingCompleted(true);
  };

  useEffect(() => {
    const debug = window.location.hash;
    if (debug === "#debug") {
      setHideDebug(false);
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <ToggleMode />
      <Intro />
      <Navigation />
      <Leva hidden={hideDebug} />
      <AudioPlayer />
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
          <ScrollControls damping={0.2} pages={9}>
            <Experience />
            <Scroll html>
              <Interface />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
      {isLoading && <LoadingScreen onLoadComplete={handleLoadComplete} />}
    </>
  );
}

export default App;
