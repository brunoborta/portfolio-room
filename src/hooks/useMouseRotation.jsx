import { useContext } from "react";
import { MouseRotationContext } from "./providers/MouseRotationProvider";

export const useMouseRotation = () => useContext(MouseRotationContext);
