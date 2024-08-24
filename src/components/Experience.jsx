import { OrbitControls, Sky } from "@react-three/drei";
import Apartment from "./Apartment";
import Lights from "./Lights";
import { Perf } from "r3f-perf";
import { useControls } from "leva";

export default function Experience() {

  const { perfVisible } = useControls({
    perfVisible: { value: false, label: 'Show Performance' }
  });
  
  return (
    <>
       {perfVisible && <Perf position="top-left" />}
      <Lights />
      <OrbitControls
        // enableDamping={true}
        // dampingFactor={0.1}
        // minPolarAngle={Math.PI * 0.2}
        // maxPolarAngle={Math.PI * 0.4}
        // minAzimuthAngle={-Math.PI * 0.1}
        // maxAzimuthAngle={0.2}
        // enablePan={false}
      />
      <Sky />
      <gridHelper args={[20, 20, 0xff0000, 'teal']} />
      <axesHelper  />
      <Apartment />
    </>
  );
}
