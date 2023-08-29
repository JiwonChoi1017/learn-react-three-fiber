import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Ring = () => {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    mesh.current.rotation.x -= 0.005;
    mesh.current.rotation.y -= 0.005;
  });

  return (
    <mesh ref={mesh}>
      <ringGeometry args={[1, 2, 16, 3, 0, Math.PI * 2]} />
      <meshStandardMaterial wireframe color={0x88ffff} />
    </mesh>
  );
};

export default Ring;
