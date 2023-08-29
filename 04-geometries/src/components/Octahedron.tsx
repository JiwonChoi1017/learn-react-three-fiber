import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Octahedron = () => {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    mesh.current.rotation.x -= 0.005;
  });

  return (
    <mesh ref={mesh} rotation-x={Math.PI * 0.5}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={0x11ff99} />
    </mesh>
  );
};

export default Octahedron;
