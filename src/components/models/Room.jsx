import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useTheme } from "../../hooks/useTheme";
import { useGSAP } from "@gsap/react";
import { folder, useControls } from "leva";
import gsap from "gsap";
// import * as THREE from "three";

export function Room(props) {
  const { nodes, materials } = useGLTF("/models/Room.gltf");
  const { isLight } = useTheme();
  const tableLight1Ref = useRef();
  const tableLight2Ref = useRef();

  // Refs for the target meshes (invisible)
  const target1MeshRef = useRef();
  const target2MeshRef = useRef();

  // Use helpers to visualize spotlights

  // useHelper(tableLight1Ref, THREE.SpotLightHelper, "#FBFF4D");
  // useHelper(tableLight2Ref, THREE.SpotLightHelper, "#FBFF4D");

  // Leva controls for table lights
  const controls = useControls({
    "Table Light 1": folder(
      {
        visibleTable1: {
          value: !isLight,
          onChange: (v) => {
            if (tableLight1Ref.current) tableLight1Ref.current.visible = v;
          },
        },
        positionTable1X: {
          value: -2.8,
          min: -10,
          max: 10,
          onChange: (v) => {
            if (tableLight1Ref.current) tableLight1Ref.current.position.x = v;
          },
        },
        positionTable1Y: {
          value: 4.8,
          min: -10,
          max: 10,
          onChange: (v) => {
            if (tableLight1Ref.current) tableLight1Ref.current.position.y = v;
          },
        },
        positionTable1Z: {
          value: -1.6,
          min: -10,
          max: 10,
          onChange: (v) => {
            if (tableLight1Ref.current) tableLight1Ref.current.position.z = v;
          },
        },
        intensityTable1: {
          value: 8,
          min: 0,
          max: 100,
        },
        angleTable1: {
          value: 0.4,
          min: 0.1,
          max: 1.0,
          onChange: (v) => {
            if (tableLight1Ref.current) tableLight1Ref.current.angle = v;
          },
        },
        penumbraTable1: {
          value: 0.4,
          min: 0,
          max: 1,
          onChange: (v) => {
            if (tableLight1Ref.current) tableLight1Ref.current.penumbra = v;
          },
        },
        colorTable1: {
          value: "rgb(251, 255, 77)",
          onChange: (v) => {
            if (tableLight1Ref.current) tableLight1Ref.current.color.set(v);
          },
        },
        // Target controls for light 1
        targetXTable1: {
          value: -3.0,
          min: -10,
          max: 10,
          onChange: (v) => {
            if (target1MeshRef.current) target1MeshRef.current.position.x = v;
          },
        },
        targetYTable1: {
          value: 3.2,
          min: -10,
          max: 10,
          onChange: (v) => {
            if (target1MeshRef.current) target1MeshRef.current.position.y = v;
          },
        },
        targetZTable1: {
          value: 0.2,
          min: -10,
          max: 10,
          onChange: (v) => {
            if (target1MeshRef.current) target1MeshRef.current.position.z = v;
          },
        },
      },
      { collapsed: true }
    ),
    "Table Light 2": folder(
      {
        visibleTable2: {
          value: !isLight,
          onChange: (v) => {
            if (tableLight2Ref.current) tableLight2Ref.current.visible = v;
          },
        },
        positionTable2X: {
          value: -5.0,
          min: -10,
          max: 10,
          onChange: (v) => {
            if (tableLight2Ref.current) tableLight2Ref.current.position.x = v;
          },
        },
        positionTable2Y: {
          value: 4.8,
          min: -10,
          max: 10,
          onChange: (v) => {
            if (tableLight2Ref.current) tableLight2Ref.current.position.y = v;
          },
        },
        positionTable2Z: {
          value: 1.0,
          min: -10,
          max: 10,
          onChange: (v) => {
            if (tableLight2Ref.current) tableLight2Ref.current.position.z = v;
          },
        },
        intensityTable2: {
          value: 40,
          min: 0,
          max: 100,
        },
        angleTable2: {
          value: 0.44,
          min: 0.1,
          max: 1.0,
          onChange: (v) => {
            if (tableLight2Ref.current) tableLight2Ref.current.angle = v;
          },
        },
        penumbraTable2: {
          value: 0.2,
          min: 0,
          max: 1,
          onChange: (v) => {
            if (tableLight2Ref.current) tableLight2Ref.current.penumbra = v;
          },
        },
        colorTable2: {
          value: "rgb(251, 255, 77)",
          onChange: (v) => {
            if (tableLight2Ref.current) tableLight2Ref.current.color.set(v);
          },
        },
        // Target controls for light 2
        targetXTable2: {
          value: 3.2,
          min: -10,
          max: 10,
          onChange: (v) => {
            if (target2MeshRef.current) target2MeshRef.current.position.x = v;
          },
        },
        targetYTable2: {
          value: 3.0,
          min: -10,
          max: 10,
          onChange: (v) => {
            if (target2MeshRef.current) target2MeshRef.current.position.y = v;
          },
        },
        targetZTable2: {
          value: -1.6,
          min: -10,
          max: 10,
          onChange: (v) => {
            if (target2MeshRef.current) target2MeshRef.current.position.z = v;
          },
        },
      },
      { collapsed: true }
    ),
  });

  // Animate intensity of lights based on theme - Com flickering
  useGSAP(() => {
    // Verifica se as refs existem antes de animar
    if (!tableLight1Ref.current || !tableLight2Ref.current) return;

    if (isLight) {
      // Light mode - apaga as luzes
      gsap.to([tableLight1Ref.current, tableLight2Ref.current], {
        intensity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    } else {
      // Dark mode - efeito flickering
      const tl = gsap.timeline();

      // Primeira luz - flickering
      tl.set(tableLight1Ref.current, { intensity: 0 })
        .to(tableLight1Ref.current, {
          intensity: controls.intensityTable1 * 0.3,
          duration: 0.1,
        })
        .to(tableLight1Ref.current, { intensity: 0, duration: 0.1 })
        .to(tableLight1Ref.current, {
          intensity: controls.intensityTable1 * 0.7,
          duration: 0.15,
        })
        .to(tableLight1Ref.current, { intensity: 0, duration: 0.08 })
        .to(tableLight1Ref.current, {
          intensity: controls.intensityTable1,
          duration: 0.2,
          ease: "power2.out",
        })

        // Segunda luz - começa depois e com padrão diferente
        .set(tableLight2Ref.current, { intensity: 0 }, 0.3)
        .to(
          tableLight2Ref.current,
          { intensity: controls.intensityTable2 * 0.5, duration: 0.12 },
          0.3
        )
        .to(tableLight2Ref.current, { intensity: 0, duration: 0.15 }, 0.42)
        .to(
          tableLight2Ref.current,
          { intensity: controls.intensityTable2 * 0.8, duration: 0.1 },
          0.57
        )
        .to(
          tableLight2Ref.current,
          {
            intensity: controls.intensityTable2,
            duration: 0.25,
            ease: "power2.out",
          },
          0.67
        );
    }
  }, [isLight, controls.intensityTable1, controls.intensityTable2]);

  // UseEffect to synchronize initial intensity
  useEffect(() => {
    if (tableLight1Ref.current && !isLight) {
      tableLight1Ref.current.intensity = controls.intensityTable1;
    }
    if (tableLight2Ref.current && !isLight) {
      tableLight2Ref.current.intensity = controls.intensityTable2;
    }
  }, [controls.intensityTable1, controls.intensityTable2, isLight]);

  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.345, 0.516, 1.047]}
        rotation={[0, Math.PI / 4, 0]}
        scale={0.671}
      >
        <mesh
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={materials.Floor}
        />
        <mesh
          receiveShadow
          geometry={nodes.Cube013_1.geometry}
          material={materials.Wall}
        />
        <mesh
          receiveShadow
          geometry={nodes.Cube013_2.geometry}
          material={materials["Foam Black"]}
        />
        <mesh
          receiveShadow
          geometry={nodes.Cube013_3.geometry}
          material={materials["Foam Yellow"]}
        />
        <mesh
          receiveShadow
          geometry={nodes.Cube013_4.geometry}
          material={materials.Curtains}
        />
        <mesh
          receiveShadow
          geometry={nodes.Cube013_5.geometry}
          material={materials.basic}
        />
        <mesh
          receiveShadow
          geometry={nodes.Cube013_6.geometry}
          material={materials.Carpet}
        />
      </group>

      {/* Invisible target meshes - these move with the room */}
      <mesh
        ref={target1MeshRef}
        visible={false}
        position={[
          controls.targetXTable1,
          controls.targetYTable1,
          controls.targetZTable1,
        ]}
      >
        <boxGeometry args={[0.1, 0.1, 0.1]} />
        <meshBasicMaterial />
      </mesh>

      <mesh
        ref={target2MeshRef}
        visible={false}
        position={[
          controls.targetXTable2,
          controls.targetYTable2,
          controls.targetZTable2,
        ]}
      >
        <boxGeometry args={[0.1, 0.1, 0.1]} />
        <meshBasicMaterial />
      </mesh>

      {/* Table Lights - Now with proper targets */}
      <spotLight
        ref={tableLight1Ref}
        position={[
          controls.positionTable1X,
          controls.positionTable1Y,
          controls.positionTable1Z,
        ]}
        intensity={controls.intensityTable1}
        color={controls.colorTable1}
        visible={!isLight && controls.visibleTable1}
        angle={controls.angleTable1}
        penumbra={controls.penumbraTable1}
        castShadow={true}
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
        target={target1MeshRef.current}
      />

      <spotLight
        ref={tableLight2Ref}
        position={[
          controls.positionTable2X,
          controls.positionTable2Y,
          controls.positionTable2Z,
        ]}
        intensity={controls.intensityTable2}
        color={controls.colorTable2}
        visible={!isLight && controls.visibleTable2}
        angle={controls.angleTable2}
        penumbra={controls.penumbraTable2}
        castShadow={true}
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
        target={target2MeshRef.current}
      />
    </group>
  );
}

useGLTF.preload("/models/Room.gltf");
