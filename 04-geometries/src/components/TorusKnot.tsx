import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const TorusKnot = () => {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    mesh.current.rotation.x -= 0.005;
    mesh.current.rotation.y -= 0.005;
  });

  return (
    <mesh ref={mesh}>
      <torusKnotGeometry args={[2, 0.3, 128, 16, 3, 5]} />
      <meshStandardMaterial wireframe color={0x882299} />
    </mesh>
  );
};

export default TorusKnot;
