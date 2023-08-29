import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Torus = () => {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    mesh.current.rotation.x -= 0.005;
    mesh.current.rotation.y -= 0.005;
  });

  return (
    <mesh ref={mesh}>
      <torusGeometry args={[2, 1, 32, 48, Math.PI * 2]} />
      <meshStandardMaterial wireframe color={0xff1188} />
    </mesh>
  );
};

export default Torus;
