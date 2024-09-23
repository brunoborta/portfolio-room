import { createContext, useRef } from "react";

export const CameraContext = createContext(null);

export const CameraProvider = ({ children }) => {
  const cameraRef = useRef(null);

  return (
    <CameraContext.Provider value={{ cameraRef }}>
      {children}
    </CameraContext.Provider>
  );
};
