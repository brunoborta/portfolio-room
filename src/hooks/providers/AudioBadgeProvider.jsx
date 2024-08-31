import { createContext, useRef } from "react";

export const AudioBadgeContext = createContext(null);

export const AudioBadgeProvider = ({ children }) => {
  const audioBadgeRef = useRef(null);

  return (
    <AudioBadgeContext.Provider value={{ audioBadgeRef }}>
      {children}
    </AudioBadgeContext.Provider>
  );
};
