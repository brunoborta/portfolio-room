import { useContext } from "react";
import { WaveSurferContext } from "./providers/WaveSurferProvider";

export const useWaveSurfer = () => useContext(WaveSurferContext);
