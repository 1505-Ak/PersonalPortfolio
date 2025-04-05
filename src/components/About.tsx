'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="sectionTitle">About</h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-10 px-0 md:px-10 max-w-6xl"
      >
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-purple-500">little</span>{" "}
          background
        </h4>
        <p className="text-lg text-justify">
          I am a final year Computer Science student at the University of Manchester, specializing in Machine Learning
          and Software Engineering. With a strong foundation in mathematics, I combine theoretical knowledge with
          practical applications in data science and software development. During my summer internship at Natwest Group,
          I worked as a Data Analyst in the Retail and Digital X team, where I contributed to customer segmentation
          projects using technologies like SAS Enterprise Guide, Hadoop, and PySpark. This experience has given me
          valuable insights into real-world applications of data analytics and machine learning in the financial sector.
        </p>
      </motion.div>
    </motion.div>
  );
} 