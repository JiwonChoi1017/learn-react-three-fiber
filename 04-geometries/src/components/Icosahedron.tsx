const Icosahedron = () => {
  return (
    <mesh>
      <icosahedronGeometry args={[1.1, 3]} />
      <meshStandardMaterial wireframe color={0xffff44} />
    </mesh>
  );
};

export default Icosahedron;
