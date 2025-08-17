import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Contact(props) {
  const mailboxDoor = useRef();
  const { nodes, materials } = useGLTF("/models/Contact.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Contact_Area_Floor"
        receiveShadow
        geometry={nodes.Contact_Area_Floor.geometry}
        material={materials.Floor}
        position={[-3.193, 0.751, 7.572]}
        rotation={[0.001, 0.785, -0.002]}
        scale={0.671}
      />
      <mesh
        name="Cube036"
        geometry={nodes.Cube036.geometry}
        material={materials.Lamp}
        position={[-3.215, 0.97, 5.548]}
        rotation={[0.001, 0.785, -0.002]}
        scale={0.671}
      />
      <mesh
        name="Cube037"
        castShadow
        geometry={nodes.Cube037.geometry}
        material={materials.Light}
        position={[-3.215, 0.97, 5.548]}
        rotation={[0.001, 0.785, -0.002]}
        scale={0.671}
      />
      <group
        name="Cylinder024"
        position={[-1.195, 1.303, 7.259]}
        rotation={[0.001, 0.785, -0.002]}
        scale={[0.671, 0.635, 0.671]}
      >
        <mesh
          name="Cylinder038"
          castShadow
          geometry={nodes.Cylinder038.geometry}
          material={materials.Trunk}
        />
        <mesh
          name="Cylinder038_1"
          castShadow
          geometry={nodes.Cylinder038_1.geometry}
          material={materials.Mailbox}
        />
        <mesh
          name="Cylinder038_2"
          castShadow
          geometry={nodes.Cylinder038_2.geometry}
          material={materials["Table Top"]}
        />
      </group>
      <mesh
        name="Flag"
        castShadow
        geometry={nodes.Flag.geometry}
        material={materials["Mail Flag"]}
        position={[-1.834, 1.902, 7.443]}
        rotation={[-3, -0.766, -1.47]}
        scale={[0.054, 0.083, 0.042]}
      />
      <group
        ref={mailboxDoor}
        name="door"
        position={[-1.731, 1.72, 7.77]}
        rotation={[0.001, 0.785, -1.573]}
        scale={0.671}
      >
        <mesh
          name="Cylinder001"
          castShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials.Mailbox}
        />
        <mesh
          name="Cylinder001_1"
          castShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials["Table Top"]}
        />
        <mesh
          name="Cylinder001_2"
          castShadow
          geometry={nodes.Cylinder001_2.geometry}
          material={materials.White}
        />
      </group>
      <mesh
        name="Circle"
        castShadow
        geometry={nodes.Circle.geometry}
        material={materials["Flower Yellow"]}
        position={[-4.514, 1.612, 6.548]}
        rotation={[1.848, 0.802, -1.093]}
        scale={0.671}
      />
      <mesh
        name="Plane004"
        castShadow
        geometry={nodes.Plane004.geometry}
        material={materials.White}
        position={[-4.514, 1.606, 6.55]}
        rotation={[1.194, 0.351, -0.718]}
        scale={0.671}
      />
      <mesh
        name="Plane005"
        castShadow
        geometry={nodes.Plane005.geometry}
        material={materials.Leaf}
        position={[-4.524, 1.247, 6.541]}
        rotation={[0.213, 0.954, 0.3]}
        scale={0.671}
      />
      <mesh
        name="Plane009"
        castShadow
        geometry={nodes.Plane009.geometry}
        material={materials.Leaf}
        position={[-4.547, 1.348, 6.526]}
        rotation={[3.141, 0.089, -3.14]}
        scale={0.671}
      />
      <mesh
        name="Circle002"
        castShadow
        geometry={nodes.Circle002.geometry}
        material={materials["Flower Yellow"]}
        position={[-4.156, 1.775, 6.339]}
        rotation={[0.888, 0.533, 0.296]}
        scale={0.671}
      />
      <mesh
        name="Plane010"
        castShadow
        geometry={nodes.Plane010.geometry}
        material={materials.White}
        position={[-4.158, 1.77, 6.34]}
        rotation={[1.079, -0.143, 0.256]}
        scale={0.671}
      />
      <mesh
        name="Plane012"
        castShadow
        geometry={nodes.Plane012.geometry}
        material={materials.Leaf}
        position={[-4.203, 1.423, 6.382]}
        rotation={[-2.469, -0.644, 3.088]}
        scale={0.671}
      />
      <mesh
        name="Circle003"
        castShadow
        geometry={nodes.Circle003.geometry}
        material={materials["Flower Yellow"]}
        position={[-5.144, 1.646, 7.022]}
        rotation={[0.933, 0.588, 0.211]}
        scale={0.671}
      />
      <mesh
        name="Plane013"
        castShadow
        geometry={nodes.Plane013.geometry}
        material={materials.White}
        position={[-5.146, 1.641, 7.022]}
        rotation={[1.069, -0.1, 0.176]}
        scale={0.671}
      />
      <mesh
        name="Plane014"
        castShadow
        geometry={nodes.Plane014.geometry}
        material={materials.Leaf}
        position={[-4.94, 1.087, 6.84]}
        rotation={[-0.001, -0.396, -0.002]}
        scale={0.671}
      />
      <mesh
        name="Plane015"
        castShadow
        geometry={nodes.Plane015.geometry}
        material={materials.Leaf}
        position={[-5.103, 1.33, 7.021]}
        rotation={[-2.551, 0.733, -2.986]}
        scale={0.671}
      />
      <mesh
        name="Cylinder026"
        castShadow
        geometry={nodes.Cylinder026.geometry}
        material={materials["Flower Stem"]}
        position={[-4.508, 1.283, 6.522]}
        rotation={[0.001, 0.785, -0.002]}
        scale={0.671}
      />
      <mesh
        name="Cylinder027"
        castShadow
        geometry={nodes.Cylinder027.geometry}
        material={materials["Flower Stem"]}
        position={[-4.081, 1.414, 6.256]}
        rotation={[0.001, 0.785, -0.002]}
        scale={0.671}
      />
      <mesh
        name="Cylinder028"
        castShadow
        geometry={nodes.Cylinder028.geometry}
        material={materials["Flower Stem"]}
        position={[-5.124, 1.318, 7.004]}
        rotation={[0, 0.177, -0.002]}
        scale={0.671}
      />
      <mesh
        name="Circle001"
        castShadow
        geometry={nodes.Circle001.geometry}
        material={materials["Flower Yellow"]}
        position={[-4.825, 1.718, 6.783]}
        rotation={[2.295, 0.468, -1.813]}
        scale={0.671}
      />
      <mesh
        name="Plane007"
        castShadow
        geometry={nodes.Plane007.geometry}
        material={materials.White}
        position={[-4.824, 1.712, 6.785]}
        rotation={[1.499, 0.504, -1.425]}
        scale={0.671}
      />
      <mesh
        name="Plane008"
        castShadow
        geometry={nodes.Plane008.geometry}
        material={materials.Leaf}
        position={[-4.837, 1.353, 6.784]}
        rotation={[0.124, -0.236, 0.504]}
        scale={0.671}
      />
      <mesh
        name="Plane011"
        castShadow
        geometry={nodes.Plane011.geometry}
        material={materials.Leaf}
        position={[-4.847, 1.464, 6.777]}
        rotation={[-3.141, -0.57, -3.14]}
        scale={0.671}
      />
      <mesh
        name="Cylinder029"
        castShadow
        geometry={nodes.Cylinder029.geometry}
        material={materials["Flower Stem"]}
        position={[-4.837, 1.389, 6.758]}
        rotation={[0.012, 1.443, -0.013]}
        scale={0.671}
      />
      <mesh
        name="Plane016"
        castShadow
        geometry={nodes.Plane016.geometry}
        material={materials["Highlight Key"]}
        position={[-3.425, 0.947, 7.657]}
        rotation={[0.001, 0.785, -0.002]}
        scale={0.671}
      />
      <group
        name="Plane006"
        position={[-4.652, 0.943, 6.563]}
        rotation={[0.001, 0.785, -0.002]}
        scale={0.671}
      >
        <mesh
          name="Plane019"
          geometry={nodes.Plane019.geometry}
          material={materials.Earth}
        />
        <mesh
          name="Plane019_1"
          castShadow
          geometry={nodes.Plane019_1.geometry}
          material={materials["Flower Box Bottom"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/Contact.gltf");
