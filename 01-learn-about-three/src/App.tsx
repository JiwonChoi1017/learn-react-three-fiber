import * as THREE from "three";

import React, { useEffect, useRef } from "react";

import WebGL from "three/examples/jsm/capabilities/WebGL";

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
    camera.lookAt(0, 0, 0);

    // ボックスメッシュを作成
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.x = -2;
    // シーンにボックスメッシュを追加
    scene.add(boxMesh);

    // 線を作成
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });
    const points = [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(1, 1, 0),
      new THREE.Vector3(2, 0, 0),
    ];
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(lineGeometry, lineMaterial);
    // シーンに線を追加
    scene.add(line);

    // 照明を作成
    const light = new THREE.DirectionalLight(0xffffff, 0.02);
    light.position.set(1, 1, 1);
    // シーンに照明を追加
    scene.add(light);

    const animate = () => {
      // Window.requestAnimationFrame():
      //  ブラウザーにアニメーションを行いたいことを知らせ、指定した関数を呼び出して次の再描画の前にアニメーションを更新することを要求する。
      //  https://developer.mozilla.org/ja/docs/Web/API/window/requestAnimationFrame
      requestAnimationFrame(animate);
      // ボックスメッシュを回転
      boxMesh.rotation.x += 0.01;
      boxMesh.rotation.y += 0.01;
      // レンダリング
      renderer.render(scene, camera);
    };

    // WebGLの互換性チェック
    if (WebGL.isWebGLAvailable()) {
      animate();
    } else {
      const warning = WebGL.getWebGLErrorMessage();
      elm?.appendChild(warning);
    }

    // クリーンアップ：イベントリスナーの削除、タイマーのキャンセルなどのこと。
    // クリーンアップ関数をreturnすると、2度目以降のレンダリング時に前回の副作用を消すことができる。
    return () => {
      elm?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <>
      <h1>three.js</h1>
      <div ref={mountRef} />
    </>
  );
};

export default App;
