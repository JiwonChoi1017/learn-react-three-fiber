import * as THREE from "three";

import { Canvas, ThreeElements, useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";

const Box = (props: ThreeElements["mesh"]) => {
  // 初期値nullに非nullアサーション演算子!を添えることによって、refオブジェクトのcurrentプロパティが書き換えられる。
  // nullを割り当てることはできない。
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh {...props} ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={0x00ff00} />
    </mesh>
  );
};

const Line = () => {
  const geometryRef = useRef<THREE.BufferGeometry>(null!);

  useEffect(() => {
    const points = [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(1, 1, 0),
      new THREE.Vector3(2, 0, 0),
    ];
    geometryRef.current.setFromPoints(points);
  }, []);

  return (
    <line>
      <bufferGeometry ref={geometryRef} />
      <lineBasicMaterial color={0x0000ff} />
    </line>
  );
};

const App = () => {
  return (
    <>
      <h1>R3F</h1>
      <Canvas
        camera={{
          fov: 75,
          aspect: window.innerWidth / window.innerHeight,
          near: 0.1,
          far: 1000,
        }}
      >
        <ambientLight />
        <directionalLight
          color={0xffffff}
          intensity={0.02}
          position={[1, 1, 1]}
        />
        <Box position={[-2, 0, 0]} />
        <Line />
      </Canvas>
    </>
  );
};

export default App;
