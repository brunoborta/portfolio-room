import { useGSAP } from "@gsap/react";
import { folder, useControls } from "leva";
import { useRef } from "react";
import gsap from "gsap";

const THEME_LIGHTS = {
  light: {
    directional: {
      color: { r: 1, g: 1, b: 1 },
      intensity: 1,
      position: [-1.1, -0.2, 4.7],
    },
    ambient: {
      color: { r: 1, g: 1, b: 1 },
      intensity: 1,
    },
  },
  dark: {
    directional: {
      color: { r: 93 / 255, g: 113 / 255, b: 191 / 255 },
      intensity: 0.78,
      position: [-1.1, -0.2, 4.7],
    },
    ambient: {
      color: { r: 93 / 255, g: 113 / 255, b: 191 / 255 },
      intensity: 0.78,
    },
  },
};

function Lights({ isLight }) {
  const directionalRef = useRef();
  const ambientRef = useRef();

  useGSAP(() => {
    const theme = isLight ? THEME_LIGHTS.light : THEME_LIGHTS.dark;

    // Animate directional light
    gsap.to(directionalRef.current.color, {
      r: theme.directional.color.r,
      g: theme.directional.color.g,
      b: theme.directional.color.b,
      duration: 1,
      ease: "power2.inOut",
    });
    gsap.to(directionalRef.current, {
      intensity: theme.directional.intensity,
      duration: 1,
      ease: "power2.inOut",
    });

    // Animate ambient light
    gsap.to(ambientRef.current.color, {
      r: theme.ambient.color.r,
      g: theme.ambient.color.g,
      b: theme.ambient.color.b,
      duration: 1,
      ease: "power2.inOut",
    });
    gsap.to(ambientRef.current, {
      intensity: theme.ambient.intensity,
      duration: 1,
      ease: "power2.inOut",
    });
  }, [isLight]);

  useControls({
    "Directional Light": folder(
      {
        visible: {
          value: true,
          onChange: (v) => {
            directionalRef.current.visible = v;
          },
        },
        position: {
          x: -13.1,
          y: -0.2,
          z: 4.7,
          onChange: (v) => {
            directionalRef.current.position.copy(v);
          },
        },
        intensity: {
          value: 1,
          min: 0,
          max: 10,
          onChange: (v) => {
            directionalRef.current.intensity = v;
          },
        },
        castShadow: {
          value: true,
          onChange: (v) => {
            directionalRef.current.castShadow = v;
          },
        },
        color: {
          value: "rgb(93, 113, 191)",
        },
      },
      { collapsed: true }
    ),
  });

  return (
    <>
      <directionalLight
        ref={directionalRef}
        position={[-1.1, -0.2, 4.7]}
        castShadow={true}
        intensity={isLight ? 1 : 0.78}
      />
      <ambientLight ref={ambientRef} intensity={isLight ? 1 : 0.78} />
    </>
  );
}

export default Lights;
