import * as THREE from "three";

import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Lights = () => {
  return (
    <>
      <ambientLight />
      <directionalLight position={[1, 1, 2]} intensity={2} />
    </>
  );
};

const Box = () => {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
    mesh.current.rotation.z += 0.005;
  });

  return (
    <mesh ref={mesh} position={[-6, 0, 2]}>
      <boxGeometry args={[1, 1, 2, 2, 2, 2]} />
      <meshStandardMaterial wireframe color={0x990000} />
    </mesh>
  );
};

const Circle = () => {
  return (
    <mesh position={[-3, 0, 2]} rotation-x={Math.PI * 0.5}>
      <circleGeometry args={[1.5, 32, 10, Math.PI]} />
      <meshStandardMaterial wireframe color={0x99ff00} />
    </mesh>
  );
};

const Cone = () => {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    mesh.current.rotation.x -= 0.005;
  });

  return (
    <mesh ref={mesh} position={[0, 0, 2]} rotation-x={Math.PI * 0.5}>
      <coneGeometry args={[1, 2, 16, 2, true, 0, Math.PI * 2]} />
      <meshStandardMaterial wireframe color={0x8800ff} />
    </mesh>
  );
};

const Cylinder = () => {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    mesh.current.rotation.x -= 0.005;
    mesh.current.rotation.y -= 0.005;
  });

  return (
    <mesh ref={mesh} position={[3, 0, 2]}>
      <cylinderGeometry args={[1, 1, 2, 32, 1, false, 3, Math.PI * 1.75]} />
      <meshStandardMaterial wireframe color={0x88ffff} />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas camera={{ fov: 80, position: [0, -7, 0], near: 0.1, far: 1000 }}>
      <Lights />
      <Box />
      <Circle />
      <Cone />
      <Cylinder />
    </Canvas>
  );
};

export default App;
