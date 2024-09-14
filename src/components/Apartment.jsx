import { useRef } from "react";
import * as THREE from "three";
import { Bike } from "./models/Bike";
import { Chair } from "./models/Chair";
import { Clock } from "./models/Clock";
import { Drawer } from "./models/Drawer";
import { Purifier } from "./models/Purifier";
import { Room } from "./models/Room";
import { Table } from "./models/Table";
import { Trash } from "./models/Trash";
import { Player } from "./models/Player";
import { useFrame } from "@react-three/fiber";

import { useMouseRotation } from "../hooks/useMouseRotation";
import { useScroll } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Apartment() {
  const timeline = useRef();
  const floor = useRef();
  const apartmentRef = useRef();
  const currentRotation = useRef({ x: 0, y: 0 });
  const { targetRotation } = useMouseRotation();
  const smoothFactor = 0.1;
  const lerpFactor = 0.1;
  const scroll = useScroll();

  useFrame(() => {
    if (timeline.current) {
      timeline.current.seek(scroll.offset * timeline.current.duration());
    }
    if (apartmentRef.current) {
      currentRotation.current.x = THREE.MathUtils.lerp(
        currentRotation.current.x,
        targetRotation.current.x,
        lerpFactor
      );

      currentRotation.current.y = THREE.MathUtils.lerp(
        currentRotation.current.y,
        targetRotation.current.y,
        lerpFactor
      );

      apartmentRef.current.rotation.x =
        currentRotation.current.x * smoothFactor;
      apartmentRef.current.rotation.y =
        currentRotation.current.y * smoothFactor;
    }
  });

  useGSAP(() => {
    timeline.current = gsap.timeline();

    timeline.current
      .to(floor.current.scale, {
        x: 11,
        y: 11,
        z: 11,
      })
      .to(
        apartmentRef.current.position,
        {
          x: 8,
          duration: 1,
        },
        "<"
      );
  });

  return (
    <group ref={apartmentRef}>
      <mesh ref={floor} position-z={-7}>
        <meshBasicMaterial color="#cccccc" />
        <circleGeometry args={[5, 64, 64]} />
      </mesh>
      <Room />
      <Chair />
      <Clock />
      <Bike />
      <Drawer />
      <Purifier />
      <Table />
      <Trash />
      <Player />
    </group>
  );
}

export default Apartment;
