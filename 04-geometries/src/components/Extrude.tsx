import * as THREE from "three";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Extrude = () => {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    mesh.current.rotation.x -= 0.005;
    mesh.current.rotation.y -= 0.005;
  });

  return (
    <mesh ref={mesh}>
      <extrudeGeometry
        args={[
          new THREE.Shape([
            new THREE.Vector2(0, 0),
            new THREE.Vector2(0, 0.5),
            new THREE.Vector2(0.5, 0.5),
            new THREE.Vector2(0.5, 0),
          ]),
          {
            steps: 2,
            depth: 2,
            bevelEnabled: true,
            bevelThickness: 1,
            bevelSize: 1,
            bevelOffset: 0.02,
            bevelSegments: 2,
          },
        ]}
      />
      <meshStandardMaterial wireframe color={0x999999} />
    </mesh>
  );
};

export default Extrude;
