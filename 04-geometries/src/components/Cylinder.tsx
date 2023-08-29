import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Cylinder = () => {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    mesh.current.rotation.x -= 0.005;
    mesh.current.rotation.y -= 0.005;
  });

  return (
    <mesh ref={mesh}>
      <cylinderGeometry args={[1, 1, 2, 32, 1, false, 3, Math.PI * 1.75]} />
      <meshStandardMaterial wireframe color={0x88ffff} />
    </mesh>
  );
};

export default Cylinder;
