import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Sphere = () => {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    mesh.current.rotation.x -= 0.005;
    mesh.current.rotation.y -= 0.005;
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[3, 32, 8, 0, Math.PI * 0.75, 0, Math.PI * 0.5]} />
      <meshStandardMaterial wireframe color={0x88ffff} />
    </mesh>
  );
};

export default Sphere;
