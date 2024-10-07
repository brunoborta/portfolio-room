import { useGSAP } from "@gsap/react";
import { folder, useControls } from "leva";
import { useRef } from "react";
import { useTheme } from "../hooks/useTheme";
import gsap from "gsap";

function Lights() {
  const directionalRef = useRef();
  const ambientRef = useRef();
  const { isLight } = useTheme();
  useGSAP(() => {
    if (isLight) {
      gsap.to([ambientRef.current.color, directionalRef.current.color], {
        r: 1,
        g: 1,
        b: 1,
      });
      gsap.to([ambientRef.current, directionalRef.current], {
        intensity: 1,
      });
    } else {
      gsap.to([ambientRef.current.color, directionalRef.current.color], {
        r: 93 / 255,
        g: 113 / 255,
        b: 191 / 255,
      });
      gsap.to([ambientRef.current, directionalRef.current], {
        intensity: 0.78,
      });
    }
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
        intensity={0.78}
      />
      <ambientLight ref={ambientRef} intensity={1} />
    </>
  );
}

export default Lights;
