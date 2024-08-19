import { useTexture } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from 'three';

export const useBakedMaterial = (path) => {
  const texture = useTexture(path);

  return useMemo(() => {
    texture.flipY = false;
    return new THREE.MeshBasicMaterial({
      map: texture,
    });
  }, [texture]);
} 