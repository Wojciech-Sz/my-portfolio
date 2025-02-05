import React from "react";
import { Html, useProgress } from "@react-three/drei";
import { Progress } from "../ui/progress";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader" />
      <Progress
        className="w-64 bg-gray-400"
        value={Number(progress.toFixed(0))}
      />
      <p
        style={{ marginTop: 40 }}
        className="text-sm text-[#f1f1f1] font-extrabold "
      >
        {progress !== 0 ? `${progress.toFixed(2)}%` : "Loading..."}
      </p>
    </Html>
  );
};
export default CanvasLoader;
