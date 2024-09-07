import { Sky } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useControls } from "leva";

import Camera from "./Camera";
import Apartment from "./Apartment";
import Lights from "./Lights";

export default function Experience() {
  const { perfVisible } = useControls({
    perfVisible: { value: false, label: "Show Performance" },
  });

  return (
    <>
      {perfVisible && <Perf position="top-left" />}
      <Lights />
      <Camera />
      <Sky />
      <Apartment />
    </>
  );
}
