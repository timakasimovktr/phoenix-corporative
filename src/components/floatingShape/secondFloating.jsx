import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useMotionValue, useSpring } from "framer-motion";
import ModelSecond from "./secondModel";

export default function IndexSecond(background) {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothMouse = {
    x: useSpring(mouse.x, { stiffness: 75, damping: 100, mass: 3 }),
    y: useSpring(mouse.y, { stiffness: 75, damping: 100, mass: 3 }),
  };

  const manageMouse = (e) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const x = clientX / innerWidth;
    const y = clientY / innerHeight;
    mouse.x.set(x);
    mouse.y.set(y);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouse);
    return () => window.removeEventListener("mousemove", manageMouse);
  }, []);

  return (
    <Canvas
      style={{ background: background, height: "100%" }}
      orthographic
      camera={{ position: [0, 0, 200], zoom: 10 }}
    >
      <ModelSecond mouse={smoothMouse} />
      <Environment preset='studio' />
    </Canvas>
  );
}
