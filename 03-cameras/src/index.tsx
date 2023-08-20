import "./index.css";

import CubeCameraApp from "./CubeCamera";
import OrthographicCamera from "./OrthographicCamera";
import PerspectiveCamera from "./PerspectiveCamera";
import React from "react";
import ReactDOM from "react-dom/client";
import StereoCamera from "./StereoCamera";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <PerspectiveCamera /> */}
    {/* <OrthographicCamera /> */}
    {/* <StereoCamera /> */}
    <CubeCameraApp />
  </React.StrictMode>
);
