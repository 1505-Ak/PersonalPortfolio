'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

function AnimatedCube({ rotation = [0.5, 0.5, 0] }) {
  return (
    <Box args={[1, 1, 1]} scale={1.5}>
      <meshStandardMaterial
        color="#9333ea"
        wireframe
        roughness={0.1}
        metalness={0.8}
      />
    </Box>
  );
}

const projects = [
  {
    title: "Deep Learning Trading Bot",
    description: "Developed a sophisticated trading bot using LSTM neural networks to predict market movements. Implemented real-time data processing pipeline using PyTorch and integrated with financial APIs. Achieved 15% improvement in prediction accuracy compared to baseline models.",
    tech: ["PyTorch", "Python", "Financial APIs", "LSTM", "Docker"],
    rotation: [0.5, 0.5, 0]
  },
  {
    title: "Customer Segmentation Engine",
    description: "Built an advanced customer segmentation system using clustering algorithms and deep learning. Processed large-scale customer data using PySpark and Hadoop. Identified 5 distinct customer personas that led to targeted marketing strategies.",
    tech: ["PySpark", "Hadoop", "Scikit-learn", "K-means", "Deep Learning"],
    rotation: [0.2, 0.8, 0]
  },
  {
    title: "Quantum Portfolio Optimization",
    description: "Implemented a quantum computing approach to portfolio optimization using Qiskit. Developed hybrid quantum-classical algorithms for risk analysis and asset allocation. Demonstrated superior performance for small to medium-sized portfolios.",
    tech: ["Qiskit", "Python", "Quantum Computing", "Portfolio Theory"],
    rotation: [0.8, 0.2, 0]
  },
  {
    title: "NLP Market Sentiment Analyzer",
    description: "Created a real-time market sentiment analysis tool using transformer models. Processes news articles and social media data to gauge market sentiment. Achieved 88% accuracy in predicting market trend directions.",
    tech: ["BERT", "Transformers", "Python", "AWS", "Real-time Processing"],
    rotation: [0.3, 0.7, 0]
  }
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="sectionTitle">Projects</h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-purple-500/80">
        {projects.map((project, i) => (
          <div key={i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.div
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-48 h-48"
            >
              <Canvas>
                <OrbitControls enableZoom={false} autoRotate />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
                <AnimatedCube rotation={project.rotation} />
              </Canvas>
            </motion.div>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-purple-500/50">
                  Project {i + 1} of {projects.length}:
                </span>{" "}
                {project.title}
              </h4>

              <p className="text-lg text-center md:text-left">
                {project.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-purple-500/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
} 