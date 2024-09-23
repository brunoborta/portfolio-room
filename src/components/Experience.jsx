import { Sky } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { folder, useControls } from "leva";

import Camera from "./Camera";
import Apartment from "./Apartment";
import Lights from "./Lights";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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

  useEffect(() => {
    // setInclination(isLight ? 0.55 : 0.45);
    console.log("isLight", isLight);
    gsap.to(setInclination, {
      duration: 0.2, // Duration of 5 seconds
      ease: "power2.inOut",
      onUpdate: () => {
        setInclination((prev) => (isLight ? prev + 0.01 : prev - 0.01)); // Smoothly decrease inclination
      },
      onComplete: () => console.log("Animation complete"), // Optional
    });
  }, [isLight]);

  // const turnDayNight = (inclination) => {
  //   if (!skyRef.current) return;
  //   console.log(
  //     "inclination",
  //     isLight,
  //     skyRef.current.inclination,
  //     skyRef.current
  //   );

  //   return gsap.to(skyRef.current, {
  //     inclination: inclination,
  //     duration: 0.5,
  //     ease: "power3.inOut",
  //     onUpdate: () => {
  //       skyRef.current.updateMatrixWorld(true);
  //     },
  //   });
  // };

  // useGSAP(() => {
  //   turnDayNight(isLight ? 0.55 : 0.45);
  // }, [isLight]);

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
