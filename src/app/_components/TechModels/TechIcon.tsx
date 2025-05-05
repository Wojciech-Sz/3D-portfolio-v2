/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import * as THREE from "three";

type TechIconProps = {
  model: {
    name: string;
    modelPath: string;
    scale: number;
    rotation: [number, number, number];
  };
};

const TechIcon = ({ model }: TechIconProps) => {
  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    if (model.name === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if (child.isMesh && child.name === "Object_5") {
          child.material = new THREE.MeshStandardMaterial({
            color: "white",
          });
        }
      });
    }
  }, [scene]);
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight intensity={1} position={[5, 5, 5]} />
      <Environment preset="city" />
      <OrbitControls enableZoom={false} />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  );
};

export default TechIcon;
