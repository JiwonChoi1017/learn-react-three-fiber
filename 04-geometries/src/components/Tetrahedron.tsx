import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Tetrahedron = () => {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    mesh.current.rotation.x -= 0.005;
    mesh.current.rotation.y -= 0.005;
  });

  return (
    <mesh ref={mesh}>
      <tetrahedronGeometry args={[4, 0]} />
      <meshStandardMaterial color={0xffff99} />
    </mesh>
  );
};

export default Tetrahedron;
