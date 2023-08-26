import * as THREE from "three";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

const AMOUNT = 6 as const;

const createArrayCamera = (
  setCameras: React.Dispatch<React.SetStateAction<THREE.PerspectiveCamera[]>>
) => {
  const ASPECT_RATIO = window.innerWidth / window.innerHeight;
  const WIDTH = (window.innerWidth / AMOUNT) * window.devicePixelRatio;
  const HEIGHT = (window.innerHeight / AMOUNT) * window.devicePixelRatio;

  const cameras: THREE.PerspectiveCamera[] = [];

  for (let y = 0; y < AMOUNT; y++) {
    for (let x = 0; x < AMOUNT; x++) {
      const subCamera = new THREE.PerspectiveCamera(40, ASPECT_RATIO, 0.1, 10);
      // @ts-ignore
      subCamera.viewport = new THREE.Vector4(
        Math.floor(x * WIDTH),
        Math.floor(y * HEIGHT),
        Math.ceil(WIDTH),
        Math.ceil(HEIGHT)
      );
      subCamera.position.x = x / AMOUNT - 0.5;
      subCamera.position.y = 0.5 - y / AMOUNT;
      subCamera.position.z = 1.5;
      subCamera.position.multiplyScalar(2);
      subCamera.lookAt(0, 0, 0);
      subCamera.updateMatrixWorld();
      cameras.push(subCamera);
    }
  }

  setCameras(cameras);
};

const Lights = () => {
  return (
    <>
      <ambientLight color={0x999999} />
      <directionalLight
        color={0xffffff}
        intensity={3}
        position={[0.5, 0.5, 1]}
        castShadow
        shadow-camera-zoom={4}
      />
    </>
  );
};

const Background = () => {
  return (
    <mesh position={[0, 0, -1]} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshPhongMaterial color={0x000066} />
    </mesh>
  );
};

type Props = {
  cameras: THREE.PerspectiveCamera[];
};

const Cylinders = ({ cameras }: Props) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    state.camera = new THREE.ArrayCamera(cameras);

    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.z += 0.01;
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <cylinderGeometry args={[0.5, 0.5, 1, 32]} />
      <meshPhongMaterial color={0xff0000} />
    </mesh>
  );
};

const ArrayCamera = () => {
  const [cameras, setCameras] = useState<THREE.PerspectiveCamera[]>([]);

  useEffect(() => {
    createArrayCamera(setCameras);

    window.addEventListener("resize", () => {
      createArrayCamera(setCameras);
    });
    return () =>
      window.removeEventListener("resize", () => {
        createArrayCamera(setCameras);
      });
  }, []);

  return (
    <Canvas shadows={{ enabled: true }}>
      <Lights />
      <Background />
      <Cylinders cameras={cameras} />
    </Canvas>
  );
};

export default ArrayCamera;
