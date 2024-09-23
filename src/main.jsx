import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MouseRotationProvider } from "./hooks/providers/MouseRotationProvider.jsx";
import { AudioBadgeProvider } from "./hooks/providers/AudioBadgeProvider.jsx";
import { WaveSurferProvider } from "./hooks/providers/WaveSurferProvider.jsx";
import { CameraProvider } from "./hooks/providers/CameraProvider.jsx";
import { ThemeProvider } from "./hooks/providers/ThemeProvider.jsx";
import { EmailSuccessProvider } from "./hooks/providers/EmailSuccessProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <EmailSuccessProvider>
        <CameraProvider>
          <MouseRotationProvider>
            <AudioBadgeProvider>
              <WaveSurferProvider>
                <App />
              </WaveSurferProvider>
            </AudioBadgeProvider>
          </MouseRotationProvider>
        </CameraProvider>
      </EmailSuccessProvider>
    </ThemeProvider>
  </React.StrictMode>
);
