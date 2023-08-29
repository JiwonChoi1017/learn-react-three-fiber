import { useRef } from "react";

const Plane = () => {
  const mesh = useRef<THREE.Mesh>(null!);

  return (
    <mesh ref={mesh} rotation-x={Math.PI * 0.5}>
      <planeGeometry args={[2, 2, 2, 2]} />
      <meshStandardMaterial wireframe color={0x7777ff} />
    </mesh>
  );
};

export default Plane;
