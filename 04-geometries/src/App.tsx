import * as THREE from "three";

import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

import Box from "./components/Box";
import Capsule from "./components/Capsule";
import Circle from "./components/Circle";
import Cone from "./components/Cone";
import Cylinder from "./components/Cylinder";
import Dodecahedron from "./components/Dodecahedron";
import Edges from "./components/Edges";
import Extrude from "./components/Extrude";
import Icosahedron from "./components/Icosahedron";
import Lathe from "./components/Lathe";
import Octahedron from "./components/Octahedron";
import { OrbitControls } from "@react-three/drei";
import Plane from "./components/Plane";
import Ring from "./components/Ring";
import Sphere from "./components/Sphere";
import Tetrahedron from "./components/Tetrahedron";
import Torus from "./components/Torus";
import TorusKnot from "./components/TorusKnot";
import Tube from "./components/Tube";

const Lights = () => {
  return (
    <>
      <ambientLight />
      <directionalLight position={[1, 1, 2]} intensity={2} />
    </>
  );
};

const App = () => {
  return (
    <Canvas camera={{ fov: 80, position: [0, -7, 0], near: 0.1, far: 1000 }}>
      <Lights />
      {/* <Box /> */}
      {/* <Capsule /> */}
      {/* <Circle /> */}
      {/* <Cone /> */}
      {/* <Cylinder /> */}
      {/* <Dodecahedron /> */}
      <Edges />
      {/* <Extrude /> */}
      {/* <Icosahedron /> */}
      {/* <Lathe /> */}
      {/* <Octahedron /> */}
      {/* <Plane /> */}
      {/* <Ring /> */}
      {/* <Sphere /> */}
      {/* <Tetrahedron /> */}
      {/* <Torus /> */}
      {/* <TorusKnot /> */}
      {/* <Tube /> */}
      <OrbitControls />
    </Canvas>
  );
};

export default App;
