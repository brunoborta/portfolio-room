import GlobalStyle from "./globalStyles";
import Experience from "./components/Experience";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { useEffect, useState } from "react";
import AudioPlayer from "./components/AudioPlayer";
import { WaveSurferProvider } from "./hooks/providers/WaveSurferProvider";
import { AudioBadgeProvider } from "./hooks/providers/AudioBadgeProvider";
function App() {
  const [hideDebug, setHideDebug] = useState(true);
  useEffect(() => {
    const debug = window.location.hash;
    if (debug === "#debug") {
      setHideDebug(false);
    }
  }, []);
  return (
    <AudioBadgeProvider>
      <WaveSurferProvider>
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
        >
          <GlobalStyle />
          <Experience />
        </Canvas>
      </WaveSurferProvider>
    </AudioBadgeProvider>
  );
}

export default App;
