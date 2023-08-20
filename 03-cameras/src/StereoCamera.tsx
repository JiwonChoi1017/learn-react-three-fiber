import * as THREE from "three";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";

import { AnaglyphEffect } from "three/examples/jsm/effects/AnaglyphEffect";
import { ParallaxBarrierEffect } from "three/examples/jsm/effects/ParallaxBarrierEffect";

const Box = () => {
  const boxMeshRef = useRef<THREE.Mesh>(null!);
  useFrame(
    () =>
      (boxMeshRef.current.rotation.x = boxMeshRef.current.rotation.y += 0.001)
  );

  return (
    <mesh ref={boxMeshRef}>
      <boxGeometry />
      <meshStandardMaterial color={0xff12ff} />
    </mesh>
  );
};

const Annaglyph = ({ enabled = false }) => {
  const { gl, scene, camera, size } = useThree();
  const [effect] = useState(() => new AnaglyphEffect(gl));
  useEffect(() => void effect.setSize(size.width, size.height), [size, effect]);

  return useFrame(() => (enabled ? effect : gl).render(scene, camera), 1);
};

const ParallaxBarrier = ({ enabled = false }) => {
  const { gl, scene, camera, size } = useThree();
  const [effect] = useState(() => new ParallaxBarrierEffect(gl));
  useEffect(() => void effect.setSize(size.width, size.height), [size, effect]);

  return useFrame(() => (enabled ? effect : gl).render(scene, camera), 1);
};

const StereoCamera = () => {
  return (
    <Canvas>
      {/* <Annaglyph enabled={true} /> */}
      <ParallaxBarrier enabled={true} />
      <ambientLight />
      <directionalLight color={0xffffff} intensity={1} position={[0, 0, 3]} />
      <Box />
    </Canvas>
  );
};

export default StereoCamera;
