import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Box = () => {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
    mesh.current.rotation.z += 0.005;
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[1, 1, 2, 2, 2, 2]} />
      <meshStandardMaterial wireframe color={0x990000} />
    </mesh>
  );
};

export default Box;
