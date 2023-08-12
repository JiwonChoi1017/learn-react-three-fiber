import * as THREE from "three";

import React, { useEffect, useRef } from "react";

const App = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // シーンを作成
    const scene = new THREE.Scene();
    // カメラを作成
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    // レンダラを作成
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    const elm = mountRef.current;
    elm?.appendChild(renderer.domElement);

    camera.position.z = 5;

    // メッシュを作成
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    // シーンにメッシュを追加
    scene.add(cube);

    // 照明を作成
    const light = new THREE.DirectionalLight(0xffffff, 0.02);
    light.position.set(1, 1, 1);
    // シーンに照明を追加
    scene.add(light);

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      // レンダリング
      renderer.render(scene, camera);
    };
    animate();

    // クリーンアップ：イベントリスナーの削除、タイマーのキャンセルなどのこと。
    // クリーンアップ関数をreturnすると、2度目以降のレンダリング時に前回の副作用を消すことができる。
    return () => {
      elm?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} />;
};

export default App;
