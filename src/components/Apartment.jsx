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
import { useCamera } from "../hooks/useCamera";
import { Contact } from "./models/Contact";
import { Envelope } from "./models/Envelope";

function Apartment() {
  const timeline = useRef();
  const floor = useRef();
  const apartmentRef = useRef();
  const currentRotation = useRef({ x: 0, y: 0 });
  const { targetRotation } = useMouseRotation();
  const smoothFactor = 0.1;
  const lerpFactor = 0.1;

  const scroll = useScroll();
  const { cameraRef } = useCamera();

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
          x: 6,
        },
        "<"
      )
      .to(cameraRef.current.position, {
        x: 1.4,
        y: 4.5,
        z: 5.9,
        ease: "power2.inOut",
      })
      .to(
        apartmentRef.current.position,
        {
          x: 3,
        },
        "<"
      )
      .to(cameraRef.current.position, {
        x: 0.5,
        y: 3.9,
        z: 1.2,
        ease: "power2.inOut",
      })
      .to(
        apartmentRef.current.position,
        {
          x: 1,
        },
        "<"
      )
      // Contact
      .to(cameraRef.current.position, {
        x: -4.6,
        y: 5.8,
        z: 17,
        ease: "power2.inOut",
      })
      .to(
        apartmentRef.current.position,
        {
          x: 1,
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
      <Contact />
      <Envelope />
    </group>
  );
}

export default Apartment;
