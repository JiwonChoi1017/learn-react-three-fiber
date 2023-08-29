import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Cone = () => {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    mesh.current.rotation.x -= 0.005;
  });

  return (
    <mesh ref={mesh} rotation-x={Math.PI * 0.5}>
      <coneGeometry args={[1, 2, 16, 2, true, 0, Math.PI * 2]} />
      <meshStandardMaterial wireframe color={0x8800ff} />
    </mesh>
  );
};

export default Cone;
