import { Sky } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { folder, useControls } from "leva";

import Camera from "./Camera";
import Apartment from "./Apartment";
import Lights from "./Lights";
import { useRef, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Experience() {
  const skyRef = useRef();
  const { isLight } = useTheme();
  const [inclination, setInclination] = useState(0.55);
  const {
    perfVisible,
    azimuth,
    distance,
    mieCoefficient,
    mieDirectionalG,
    rayleigh,
    turbidity,
  } = useControls({
    perfVisible: { value: false, label: "Show Performance" },
    Sky: folder(
      {
        azimuth: { value: 0.1, min: 0, max: 1, step: 0.01 },
        distance: { value: 1000, min: 0, max: 1000, step: 0.1 },
        mieCoefficient: { value: 0.005, min: 0, max: 1, step: 0.01 },
        mieDirectionalG: { value: 0.8, min: 0, max: 1, step: 0.01 },
        rayleigh: { value: 0.5, min: 0, max: 1, step: 0.01 },
        turbidity: { value: 100, min: 0, max: 100, step: 0.1 },
      },
      { collapsed: true }
    ),
  });

  useGSAP(() => {
    gsap.to(setInclination, {
      duration: 0.2,
      ease: "power2.inOut",
      onUpdate: () => {
        setInclination((prev) => (isLight ? prev + 0.05 : prev - 0.05)); // Smoothly decrease inclination
      },
      onComplete: () => console.log("Animation complete", inclination), // Optional
    });
  }, [isLight]);

  return (
    <>
      {perfVisible && <Perf position="top-left" />}
      <Lights />
      <Camera />
      <Sky
        ref={skyRef}
        inclination={inclination}
        azimuth={azimuth}
        distance={distance}
        mieCoefficient={mieCoefficient}
        mieDirectionalG={mieDirectionalG}
        rayleigh={rayleigh}
        turbidity={turbidity}
      />
      <Apartment />
    </>
  );
}
