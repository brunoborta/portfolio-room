import { useGLTF } from "@react-three/drei";
import Video from "./Video";

export default function Experience() {
  const room = useGLTF("/models/room-smoke.gltf");
  console.log(room.scene);
  return (
    <>
      <primitive object={room.scene} scale={0.15} />
      <Video src={"/textures/matrix.mp4"} scale={0.5} />
    </>
  );
}
