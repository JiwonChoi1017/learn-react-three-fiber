import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Dodecahedron = () => {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    mesh.current.rotation.x -= 0.005;
    mesh.current.rotation.y -= 0.005;
  });

  return (
    <mesh ref={mesh}>
      <dodecahedronGeometry args={[1, 2]} />
      <meshStandardMaterial wireframe color={0x885555} />
    </mesh>
  );
};

export default Dodecahedron;
