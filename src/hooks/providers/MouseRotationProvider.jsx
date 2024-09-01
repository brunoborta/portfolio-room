import { createContext, useRef } from "react";

export const MouseRotationContext = createContext({});

export const MouseRotationProvider = ({ children }) => {
  // This ref will hold the target rotation
  const targetRotation = useRef({ x: 0, y: 0 });

  const handlePointerMove = (event) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;

    // Normalize the mouse coordinates to range [-0.5, 0.5]
    const mouseX = clientX / innerWidth - 0.5;
    const mouseY = clientY / innerHeight - 0.5;

    // Update the rotation
    targetRotation.current = {
      x: -mouseY,
      y: mouseX,
    };
  };

  return (
    <MouseRotationContext.Provider
      value={{ handlePointerMove, targetRotation }}
    >
      {children}
    </MouseRotationContext.Provider>
  );
};
