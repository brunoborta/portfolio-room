import { useContext } from "react";
import { CameraContext } from "./providers/CameraProvider";

export const useCamera = () => {
  return useContext(CameraContext);
};
