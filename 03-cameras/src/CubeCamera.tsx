import * as THREE from "three";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  CubeCamera,
  Environment,
  OrbitControls,
  Sphere,
  useEnvironment,
} from "@react-three/drei";
import React, { useRef } from "react";

const Scene = () => {
  const sphereRef = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    state.scene.rotation.y += 0.005;
    state.camera.lookAt(sphereRef.current.position);
  });

  const envMap = useEnvironment({
    files: "/hdr/kloppenheim_06_puresky_4k.hdr",
  });

  return (
    <>
      <ambientLight />
      <directionalLight color={0xffffff} intensity={1} position={[0, 0, 3]} />
      <Environment map={envMap} background />
      <CubeCamera>
        {(texture) => (
          <>
            <Environment map={texture} />
            <Sphere ref={sphereRef}>
              <meshStandardMaterial metalness={1} roughness={0} />
            </Sphere>
          </>
        )}
      </CubeCamera>
    </>
  );
};

const CubeCameraApp = () => {
  return (
    <Canvas>
      <Scene />
      <OrbitControls autoRotate={true} />
    </Canvas>
  );
};

export default CubeCameraApp;
