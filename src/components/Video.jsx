import { Plane, useVideoTexture } from "@react-three/drei";

const Video = (props) => {
  const texture = useVideoTexture(props.src);
  return (
    <Plane {...props}>
      <meshStandardMaterial map={texture} />
    </Plane>
  );
};

export default Video;
