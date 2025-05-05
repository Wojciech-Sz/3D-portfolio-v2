import React from "react";
import { Canvas } from "@react-three/fiber";
import { Text, OrbitControls } from "@react-three/drei";

const NextJs = () => {
  return (
    <div style={{ width: "300px", height: "200px" }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} />
        <Text fontSize={1} color="#ffffff" anchorX="center" anchorY="middle">
          NEXT.js
        </Text>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default NextJs;
