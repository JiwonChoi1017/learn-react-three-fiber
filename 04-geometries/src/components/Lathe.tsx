import * as THREE from "three";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Lathe = () => {
  const mesh = useRef<THREE.Mesh>(null!);
  const points = [];

  for (let i = 0; i < 10; i++) {
    points.push(new THREE.Vector2(Math.sin(i * 0.2) + 0.3, (i - 0.3) * 0.2));
  }

  useFrame(() => {
    mesh.current.rotation.z -= 0.003;
    mesh.current.rotation.y -= 0.003;
  });

  return (
    <mesh ref={mesh}>
      <latheGeometry args={[points, 12, Math.PI * 0.5, Math.PI]} />
      <meshStandardMaterial wireframe color={0x77f955} />
    </mesh>
  );
};

export default Lathe;
