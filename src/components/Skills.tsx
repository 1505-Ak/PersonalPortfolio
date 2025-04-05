'use client';

import React from 'react';
import { motion } from 'framer-motion';

type Skill = {
  name: string;
  level: number;
  icon: string;
};

const skills: Skill[] = [
  {
    name: "Machine Learning",
    level: 90,
    icon: "https://img.icons8.com/color/96/000000/machine-learning.png",
  },
  {
    name: "Deep Learning",
    level: 85,
    icon: "https://img.icons8.com/color/96/000000/neural-network.png",
  },
  {
    name: "Python",
    level: 95,
    icon: "https://img.icons8.com/color/96/000000/python.png",
  },
  {
    name: "Mathematics",
    level: 90,
    icon: "https://img.icons8.com/color/96/000000/mathematics.png",
  },
  {
    name: "PyTorch",
    level: 85,
    icon: "https://pytorch.org/assets/images/pytorch-logo.png",
  },
  {
    name: "TensorFlow",
    level: 80,
    icon: "https://img.icons8.com/color/96/000000/tensorflow.png",
  },
  {
    name: "SAS",
    level: 85,
    icon: "https://img.icons8.com/color/96/000000/data-configuration.png",
  },
  {
    name: "Hadoop",
    level: 80,
    icon: "https://img.icons8.com/color/96/000000/hadoop-distributed-file-system.png",
  },
  {
    name: "PySpark",
    level: 85,
    icon: "https://spark.apache.org/images/spark-logo-trademark.png",
  },
  {
    name: "SQL",
    level: 90,
    icon: "https://img.icons8.com/color/96/000000/sql.png",
  },
  {
    name: "Data Analysis",
    level: 90,
    icon: "https://img.icons8.com/color/96/000000/analytics.png",
  },
  {
    name: "Software Engineering",
    level: 85,
    icon: "https://img.icons8.com/color/96/000000/source-code.png",
  },
  {
    name: "NumPy",
    level: 90,
    icon: "https://img.icons8.com/color/96/000000/numpy.png",
  },
  {
    name: "Pandas",
    level: 90,
    icon: "https://img.icons8.com/color/96/000000/pandas.png",
  },
  {
    name: "Scikit-learn",
    level: 85,
    icon: "https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png",
  },
  {
    name: "Git",
    level: 85,
    icon: "https://img.icons8.com/color/96/000000/git.png",
  }
];

function Skill({ skill }: { skill: Skill }) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        src={skill.icon}
        className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">{skill.level}%</p>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="sectionTitle">Skills</h3>

      <div className="grid grid-cols-4 gap-5">
        {skills.map((skill) => (
          <Skill key={skill.name} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
} 