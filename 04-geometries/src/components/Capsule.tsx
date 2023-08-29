import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Capsule = () => {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh} rotation-x={Math.PI * 0.5}>
      <capsuleGeometry args={[2, 2, 8, 16]} />
      <meshStandardMaterial wireframe color={0x227777} />
    </mesh>
  );
};

export default Capsule;
