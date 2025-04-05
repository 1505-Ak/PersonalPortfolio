'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <meshStandardMaterial
        color="#9333ea"
        wireframe
        roughness={0.1}
        metalness={0.8}
      />
    </Sphere>
  );
}

export default function Hero() {
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-col items-center"
      >
        <div className="w-64 h-64 relative">
          <Canvas>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <AnimatedSphere />
          </Canvas>
        </div>

        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">Anulome Kishore</span>
        </h1>

        <div className="pt-5 space-x-2">
          <a href="#about">
            <button className="heroButton">About</button>
          </a>
          <a href="#experience">
            <button className="heroButton">Experience</button>
          </a>
          <a href="#skills">
            <button className="heroButton">Skills</button>
          </a>
          <a href="#projects">
            <button className="heroButton">Projects</button>
          </a>
          <a href="#contact">
            <button className="heroButton">Contact</button>
          </a>
        </div>
      </motion.div>
    </div>
  );
} 