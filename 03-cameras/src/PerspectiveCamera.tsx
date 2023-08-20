import { Canvas } from "@react-three/fiber";
import React from "react";

// const w = 1920;
// const h = 1080;

const PerspectiveCamera = () => {
  return (
    <Canvas
      camera={{
        position: [1, 2, 3],
        fov: 75,
        aspect: window.innerWidth / window.innerHeight,
        near: 0.1,
        far: 1000,
        // filmGauge: 70,
        // filmOffset:5
        // focus: 5,
        // view: {
        //   enabled: true,
        //   fullWidth: w * 3,
        //   fullHeight: h * 2,
        //   offsetX: w * 0,
        //   offsetY: h * 0,
        //   width: w,
        //   height: h,
        // },
        zoom: 2,
      }}
    >
      <ambientLight />
      <directionalLight color={0xffffff} intensity={1} position={[0, 0, 3]} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color={0xff12ff} />
      </mesh>
    </Canvas>
  );
};

export default PerspectiveCamera;
