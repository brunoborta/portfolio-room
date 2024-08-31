import { useContext } from "react";
import { AudioBadgeContext } from "./providers/AudioBadgeProvider";

export const useAudioBadge = () => {
  return useContext(AudioBadgeContext);
};
