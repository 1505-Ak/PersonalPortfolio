'use client';

import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/Scene'), {
  ssr: false,
  loading: () => (
    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-purple-500/20 animate-pulse" />
  ),
});

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
        <div className="w-48 h-48 md:w-64 md:h-64 relative">
          <Suspense fallback={<div className="w-full h-full rounded-full bg-purple-500/20 animate-pulse" />}>
            <Scene />
          </Suspense>
        </div>

        <h2 className="text-xs md:text-sm uppercase text-gray-500 pb-2 tracking-[10px] md:tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold px-4 md:px-10">
          <span className="mr-3">Anulome Kishore</span>
        </h1>

        <div className="pt-5 flex flex-wrap justify-center gap-2 px-4">
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