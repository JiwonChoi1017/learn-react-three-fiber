const Circle = () => {
  return (
    <mesh rotation-x={Math.PI * 0.5}>
      <circleGeometry args={[1.5, 32, 10, Math.PI]} />
      <meshStandardMaterial wireframe color={0x99ff00} />
    </mesh>
  );
};

export default Circle;
