function Lights() {
    return (
      <>
        <ambientLight
          intensity={1}
        />
        <directionalLight
          position={[-1.420, 1, 5]}
          castShadow={true}
        />
      </>
    )
  }

export default Lights;