import { useGLTF } from "@react-three/drei";

export default function Experience() {
  const room = useGLTF("/models/room.glb");
  return (
    <>
      <color args={["lightblue"]} attach="background" />
      <primitive object={room.scene} scale={0.15} />
    </>
  );
}
