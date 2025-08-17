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

const THEME_SETTINGS = {
  light: {
    inclination: 0.55,
    azimuth: 0.1,
    mieCoefficient: 0.005,
    mieDirectionalG: 0.8,
    rayleigh: 0.5,
    turbidity: 100,
  },
  dark: {
    inclination: 0.2,
    azimuth: 0.75,
    mieCoefficient: 0.1,
    mieDirectionalG: 0.6,
    rayleigh: 0.7,
    turbidity: 50,
  },
};

export default function Experience() {
  const skyRef = useRef();
  const { isLight } = useTheme();
  const [skySettings, setSkySettings] = useState(THEME_SETTINGS.light);

  const { perfVisible } = useControls({
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
    const targetSettings = isLight ? THEME_SETTINGS.light : THEME_SETTINGS.dark;

    gsap.to(skySettings, {
      duration: 1,
      ease: "power2.inOut",
      inclination: targetSettings.inclination,
      azimuth: targetSettings.azimuth,
      mieCoefficient: targetSettings.mieCoefficient,
      mieDirectionalG: targetSettings.mieDirectionalG,
      rayleigh: targetSettings.rayleigh,
      turbidity: targetSettings.turbidity,
      onUpdate: () => setSkySettings({ ...skySettings }),
    });
  }, [isLight]);

  return (
    <>
      {perfVisible && <Perf position="top-left" />}
      <Lights isLight={isLight} />
      <Camera />
      <Sky ref={skyRef} {...skySettings} distance={1000} />
      <Apartment />
    </>
  );
}
