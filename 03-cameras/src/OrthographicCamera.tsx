import { Canvas } from "@react-three/fiber";
import React from "react";

// const w = 1920;
// const h = 1080;

const OrthographicCamera = () => {
  return (
    <Canvas
      orthographic
      camera={{
        position: [1, 2, 3],
        left: window.innerWidth / -2,
        right: window.innerWidth / 2,
        top: window.innerHeight / 2,
        bottom: window.innerHeight / -2,
        near: 0.1,
        far: 1000,
        // view: {
        //   enabled: true,
        //   fullWidth: w * 3,
        //   fullHeight: h * 2,
        //   offsetX: w * 0,
        //   offsetY: h * 0,
        //   width: w,
        //   height: h,
        // },
        zoom: 300,
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

export default OrthographicCamera;
