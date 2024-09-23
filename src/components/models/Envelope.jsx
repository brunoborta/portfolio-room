import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useEmailSuccess } from "../../hooks/useEmailSuccess";

export function Envelope(props) {
  const { nodes, materials } = useGLTF("/models/Envelope.gltf");
  const { emailSuccess } = useEmailSuccess();
  console.log(emailSuccess);
  const envelope = useRef();

  useEffect(() => {
    if (emailSuccess) {
      console.log("animation!!");
      envelope.current.visible = false;
    }
  });
  return (
    <group {...props} dispose={null}>
      <mesh
        ref={envelope}
        name="defaultMaterial"
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial.geometry}
        material={materials.M_Paper}
        position={[-2.584, 2.197, 8.14]}
        scale={0.28}
      />
    </group>
  );
}

useGLTF.preload("/models/Envelope.gltf");
