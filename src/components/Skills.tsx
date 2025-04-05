'use client';

import React from 'react';
import { motion } from 'framer-motion';

type Skill = {
  name: string;
  level: number;
  icon: string;
  category: 'Programming' | 'Data Science' | 'Tools' | 'Finance';
};

const skills: Skill[] = [
  // Programming Languages
  {
    name: "C++",
    level: 90,
    icon: "https://img.icons8.com/color/96/000000/c-plus-plus-logo.png",
    category: "Programming"
  },
  {
    name: "Python",
    level: 95,
    icon: "https://img.icons8.com/color/96/000000/python.png",
    category: "Programming"
  },
  {
    name: "Java",
    level: 85,
    icon: "https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png",
    category: "Programming"
  },
  {
    name: "SQL",
    level: 90,
    icon: "https://img.icons8.com/color/96/000000/sql.png",
    category: "Programming"
  },

  // Data Science & ML
  {
    name: "Machine Learning",
    level: 90,
    icon: "https://img.icons8.com/color/96/000000/machine-learning.png",
    category: "Data Science"
  },
  {
    name: "Deep Learning",
    level: 85,
    icon: "https://img.icons8.com/color/96/000000/neural-network.png",
    category: "Data Science"
  },
  {
    name: "PyTorch",
    level: 85,
    icon: "https://pytorch.org/assets/images/pytorch-logo.png",
    category: "Data Science"
  },
  {
    name: "TensorFlow",
    level: 80,
    icon: "https://img.icons8.com/color/96/000000/tensorflow.png",
    category: "Data Science"
  },
  {
    name: "NumPy",
    level: 90,
    icon: "https://img.icons8.com/color/96/000000/numpy.png",
    category: "Data Science"
  },
  {
    name: "Pandas",
    level: 90,
    icon: "https://img.icons8.com/color/96/000000/pandas.png",
    category: "Data Science"
  },
  {
    name: "Scikit-learn",
    level: 85,
    icon: "https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png",
    category: "Data Science"
  },

  // Tools & Technologies
  {
    name: "Low Latency",
    level: 85,
    icon: "https://img.icons8.com/color/96/000000/speed.png",
    category: "Tools"
  },
  {
    name: "Multithreading",
    level: 85,
    icon: "https://img.icons8.com/color/96/000000/parallel-tasks.png",
    category: "Tools"
  },
  {
    name: "Git",
    level: 85,
    icon: "https://img.icons8.com/color/96/000000/git.png",
    category: "Tools"
  },
  {
    name: "Docker",
    level: 80,
    icon: "https://img.icons8.com/color/96/000000/docker.png",
    category: "Tools"
  },
  {
    name: "Linux/Unix",
    level: 85,
    icon: "https://img.icons8.com/color/96/000000/linux.png",
    category: "Tools"
  },

  // Finance & Analytics
  {
    name: "SAS",
    level: 85,
    icon: "https://img.icons8.com/color/96/000000/data-configuration.png",
    category: "Finance"
  },
  {
    name: "Hadoop",
    level: 80,
    icon: "https://img.icons8.com/color/96/000000/hadoop-distributed-file-system.png",
    category: "Finance"
  },
  {
    name: "PySpark",
    level: 85,
    icon: "https://spark.apache.org/images/spark-logo-trademark.png",
    category: "Finance"
  },
  {
    name: "Data Analysis",
    level: 90,
    icon: "https://img.icons8.com/color/96/000000/analytics.png",
    category: "Finance"
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
        className="rounded-full border border-gray-500 object-cover w-16 h-16 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out p-2"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0">
        <div className="flex items-center justify-center h-full flex-col">
          <p className="text-xl md:text-3xl font-bold text-black opacity-100">{skill.level}%</p>
          <p className="text-xs md:text-sm text-black opacity-100">{skill.name}</p>
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
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Skills
      </h3>

      <div className="pt-32 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5">
        {skills.map((skill) => (
          <Skill key={skill.name} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
} 