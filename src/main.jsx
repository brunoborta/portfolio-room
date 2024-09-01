import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MouseRotationProvider } from "./hooks/providers/MouseRotationProvider.jsx";
import { AudioBadgeProvider } from "./hooks/providers/AudioBadgeProvider.jsx";
import { WaveSurferProvider } from "./hooks/providers/WaveSurferProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MouseRotationProvider>
      <AudioBadgeProvider>
        <WaveSurferProvider>
          <App />
        </WaveSurferProvider>
      </AudioBadgeProvider>
    </MouseRotationProvider>
  </React.StrictMode>
);
